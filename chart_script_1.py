import plotly.graph_objects as go
import plotly.express as px
import numpy as np
import pandas as pd

# Data from the provided JSON
tv_data = {"32": {"box_w": 33, "box_h": 21}, "43": {"box_w": 43, "box_h": 27}, "55": {"box_w": 57, "box_h": 33}, "65": {"box_w": 63, "box_h": 38}, "75": {"box_w": 75, "box_h": 43}, "85": {"box_w": 85, "box_h": 48}}

car_data = {"Compact Cars": {"door_w": 39, "door_h": 29}, "Sedans": {"door_w": 42, "door_h": 31}, "Compact SUVs": {"door_w": 43, "door_h": 31}, "Midsize SUVs": {"door_w": 47, "door_h": 33}, "Large SUVs": {"door_w": 50, "door_h": 35}, "Minivans": {"door_w": 54, "door_h": 38}, "Pickup Trucks": {"door_w": 49, "door_h": 22}}

# TV sizes and car categories in order
tv_sizes = ["32\"", "43\"", "55\"", "65\"", "75\"", "85\""]
car_categories = ["Compact Cars", "Sedans", "Compact SUVs", "Midsize SUVs", "Large SUVs", "Minivans", "Pickup Trucks"]

# Function to determine fitment status
def get_fitment_status(tv_size, car_category):
    tv_key = tv_size.replace("\"", "")
    tv_box_w = tv_data[tv_key]["box_w"]
    tv_box_h = tv_data[tv_key]["box_h"]
    
    car_door_w = car_data[car_category]["door_w"]
    car_door_h = car_data[car_category]["door_h"]
    
    # Check upright orientation (needs 2" clearance)
    upright_fits = (tv_box_w + 2 <= car_door_w) and (tv_box_h + 2 <= car_door_h)
    
    # Check flat orientation (needs 2" clearance)
    flat_fits = (tv_box_h + 2 <= car_door_w) and (tv_box_w + 2 <= car_door_h)
    
    if upright_fits and flat_fits:
        return 2  # Fits easily (green)
    elif flat_fits:
        return 1  # Fits flat only (yellow)
    else:
        return 0  # Does not fit (red)

# Create the fitment matrix
fitment_matrix = []
fitment_text = []

for car in car_categories:
    row = []
    text_row = []
    for tv in tv_sizes:
        status = get_fitment_status(tv, car)
        row.append(status)
        
        if status == 2:
            text_row.append("Fits Easily")
        elif status == 1:
            text_row.append("Fits Flat Only")
        else:
            text_row.append("Does Not Fit")
    
    fitment_matrix.append(row)
    fitment_text.append(text_row)

# Create the heatmap
fig = go.Figure(data=go.Heatmap(
    z=fitment_matrix,
    x=tv_sizes,
    y=car_categories,
    text=fitment_text,
    texttemplate="%{text}",
    textfont={"size": 10},
    colorscale=[[0, '#B4413C'], [0.5, '#FFC185'], [1, '#ECEBD5']],  # Red, Yellow, Green
    showscale=True,
    colorbar=dict(
        title="Fitment Status",
        tickmode="array",
        tickvals=[0, 1, 2],
        ticktext=["Does Not Fit", "Fits Flat Only", "Fits Easily"]
    ),
    hovertemplate='TV Size: %{x}<br>Car Type: %{y}<br>Status: %{text}<extra></extra>'
))

fig.update_layout(
    title="TV Fitment Guide: Which TVs Fit in Cars",
    xaxis_title="TV Size",
    yaxis_title="Car Category"
)

fig.update_xaxes(side="bottom")
fig.update_yaxes(autorange="reversed")

fig.write_image("tv_fitment_heatmap.png")