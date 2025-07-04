import plotly.express as px
import plotly.graph_objects as go
import json

# Data from the provided JSON
data_json = {"car_categories": [{"category": "Compact Cars", "max_tv_size": 32}, {"category": "Sedans", "max_tv_size": 40}, {"category": "Compact SUVs", "max_tv_size": 43}, {"category": "Midsize SUVs", "max_tv_size": 55}, {"category": "Large SUVs", "max_tv_size": 65}, {"category": "Minivans", "max_tv_size": 75}, {"category": "Pickup Trucks", "max_tv_size": 43}]}

# Extract data
categories = [item["category"] for item in data_json["car_categories"]]
tv_sizes = [item["max_tv_size"] for item in data_json["car_categories"]]

# Brand colors in order
colors = ['#1FB8CD', '#FFC185', '#ECEBD5', '#5D878F', '#D2BA4C', '#B4413C', '#964325']

# Create horizontal bar chart
fig = go.Figure(go.Bar(
    x=tv_sizes,
    y=categories,
    orientation='h',
    marker_color=colors[:len(categories)],
    text=[f'{size}"' for size in tv_sizes],
    textposition='auto',
    cliponaxis=False
))

# Update layout
fig.update_layout(
    title="Max TV Size by Car Category",
    xaxis_title="TV Size (inches)",
    yaxis_title="Car Category"
)

# Save the chart
fig.write_image("tv_size_by_car_chart.png")