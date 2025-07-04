import plotly.graph_objects as go
import plotly.express as px
import json

# Data from the provided JSON
data = {
    "tv_sizes": {"55": {"box_w": 57, "box_h": 33}, "65": {"box_w": 63, "box_h": 38}, "75": {"box_w": 75, "box_h": 43}}, 
    "car_models": {
        "Honda Fit": {"door_w": 38, "door_h": 28}, 
        "Toyota Camry": {"door_w": 43, "door_h": 32}, 
        "Honda CR-V": {"door_w": 42, "door_h": 31}, 
        "Toyota Highlander": {"door_w": 47, "door_h": 34}, 
        "Toyota 4Runner": {"door_w": 49, "door_h": 36}, 
        "Honda Odyssey": {"door_w": 54, "door_h": 38}, 
        "Chevrolet Suburban": {"door_w": 52, "door_h": 36}, 
        "Ford F-150": {"door_w": 50, "door_h": 22}
    }
}

# Select 7 car models representing different categories
selected_cars = [
    "Honda Fit", "Toyota Camry", "Honda CR-V", 
    "Toyota Highlander", "Honda Odyssey", 
    "Chevrolet Suburban", "Ford F-150"
]

# Extract data for selected cars
car_names = []
door_widths = []
door_heights = []

for car in selected_cars:
    car_names.append(car)
    door_widths.append(data["car_models"][car]["door_w"])
    door_heights.append(data["car_models"][car]["door_h"])

# Brand colors in order
colors = ['#1FB8CD', '#ECEBD5', '#B4413C', '#964325', '#944454']

# Create the figure
fig = go.Figure()

# Add door width bars (blue/cyan)
fig.add_trace(go.Bar(
    name='Door Width',
    x=car_names,
    y=door_widths,
    marker_color=colors[0],  # Strong cyan
    cliponaxis=False
))

# Add door height bars (green)
fig.add_trace(go.Bar(
    name='Door Height',
    x=car_names,
    y=door_heights,
    marker_color=colors[1],  # Light green
    cliponaxis=False
))

# Add horizontal reference lines for TV box widths
tv_widths = [57, 63, 75]
tv_labels = ['55" TV Width', '65" TV Width', '75" TV Width']
line_colors = [colors[2], colors[3], colors[4]]  # More distinct colors

for i, (width, label, color) in enumerate(zip(tv_widths, tv_labels, line_colors)):
    fig.add_hline(
        y=width,
        line_dash="dash",
        line_color=color,
        line_width=3,
        annotation_text=label,
        annotation_position="right"
    )

# Update layout
fig.update_layout(
    title='Car Doors vs TV Box Sizes',
    xaxis_title='Car Models',
    yaxis_title='Inches',
    barmode='group',
    legend=dict(orientation='h', yanchor='bottom', y=1.05, xanchor='center', x=0.5),
    yaxis=dict(range=[0, 90])
)

# Save the chart
fig.write_image("car_tv_dimensions_chart.png")