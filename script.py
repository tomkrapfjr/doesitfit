# Create comprehensive data for the TV fitment tool
import json

# TV Brands available at Best Buy store 582
tv_brands = [
    "Samsung", "LG", "Sony", "TCL", "Hisense", "Toshiba", "Insignia", "Roku"
]

# TV screen sizes with typical box dimensions (based on research)
# Box dimensions are in inches: Width x Height x Depth
tv_sizes_with_box_dims = {
    "32": {"screen_w": 27.9, "screen_h": 15.7, "box_w": 33, "box_h": 21, "box_d": 6},
    "40": {"screen_w": 34.9, "screen_h": 19.6, "box_w": 41, "box_h": 25, "box_d": 6.5},
    "43": {"screen_w": 37.5, "screen_h": 21.1, "box_w": 43, "box_h": 27, "box_d": 7},
    "50": {"screen_w": 43.6, "screen_h": 24.5, "box_w": 50, "box_h": 31, "box_d": 7},
    "55": {"screen_w": 47.9, "screen_h": 27.0, "box_w": 55, "box_h": 33, "box_d": 7.5},
    "60": {"screen_w": 52.3, "screen_h": 29.4, "box_w": 60, "box_h": 35, "box_d": 8},
    "65": {"screen_w": 56.7, "screen_h": 31.9, "box_w": 63, "box_h": 38, "box_d": 8},
    "70": {"screen_w": 61.0, "screen_h": 34.3, "box_w": 70, "box_h": 40, "box_d": 8.5},
    "75": {"screen_w": 65.4, "screen_h": 36.8, "box_w": 75, "box_h": 43, "box_d": 9},
    "85": {"screen_w": 74.1, "screen_h": 41.7, "box_w": 85, "box_h": 48, "box_d": 10}
}

# Car models with cargo dimensions (based on research)
# Dimensions in inches: door_width x door_height x depth
car_models = {
    "Compact Cars": {
        "Honda Fit": {"door_w": 38, "door_h": 28, "depth": 65},
        "Toyota Corolla": {"door_w": 40, "door_h": 30, "depth": 50},
        "Nissan Sentra": {"door_w": 39, "door_h": 29, "depth": 48}
    },
    "Sedans": {
        "Honda Accord": {"door_w": 42, "door_h": 31, "depth": 52},
        "Toyota Camry": {"door_w": 43, "door_h": 32, "depth": 54},
        "Nissan Altima": {"door_w": 41, "door_h": 30, "depth": 50}
    },
    "SUVs - Compact": {
        "Honda CR-V": {"door_w": 42, "door_h": 31, "depth": 55},
        "Toyota RAV4": {"door_w": 43, "door_h": 32, "depth": 57},
        "Mazda CX-5": {"door_w": 44, "door_h": 32, "depth": 58}
    },
    "SUVs - Midsize": {
        "Honda Pilot": {"door_w": 46, "door_h": 33, "depth": 65},
        "Toyota Highlander": {"door_w": 47, "door_h": 34, "depth": 67},
        "Chevrolet Traverse": {"door_w": 49, "door_h": 33, "depth": 70},
        "Kia Sorento": {"door_w": 44, "door_h": 31, "depth": 60},
        "Kia Telluride": {"door_w": 47, "door_h": 32, "depth": 68}
    },
    "SUVs - Large": {
        "Toyota 4Runner": {"door_w": 49, "door_h": 36, "depth": 65},
        "Chevrolet Suburban": {"door_w": 52, "door_h": 36, "depth": 85},
        "Ford Expedition": {"door_w": 50, "door_h": 35, "depth": 80}
    },
    "Minivans": {
        "Honda Odyssey": {"door_w": 54, "door_h": 38, "depth": 84},
        "Toyota Sienna": {"door_w": 53, "door_h": 37, "depth": 82},
        "Chrysler Pacifica": {"door_w": 52, "door_h": 36, "depth": 80},
        "Kia Carnival": {"door_w": 55, "door_h": 39, "depth": 85}
    },
    "Pickup Trucks": {
        "Ford F-150": {"door_w": 50, "door_h": 22, "depth": 65},
        "Chevrolet Silverado": {"door_w": 51, "door_h": 23, "depth": 67},
        "Toyota Tacoma": {"door_w": 48, "door_h": 21, "depth": 60}
    }
}

# Create a comprehensive data structure for the application
app_data = {
    "tv_brands": tv_brands,
    "tv_sizes": tv_sizes_with_box_dims,
    "car_models": car_models
}

# Save to JSON for the application
with open('tv_fitment_data.json', 'w') as f:
    json.dump(app_data, f, indent=2)

print("TV Fitment Tool Data Structure Created:")
print(f"TV Brands: {len(tv_brands)} brands")
print(f"TV Sizes: {len(tv_sizes_with_box_dims)} sizes")
print(f"Car Categories: {len(car_models)} categories")
print(f"Total Car Models: {sum(len(models) for models in car_models.values())} models")

# Display sample data
print("\nSample TV Size Data (65 inch):")
print(json.dumps(tv_sizes_with_box_dims["65"], indent=2))

print("\nSample Car Data (Minivans):")
print(json.dumps(car_models["Minivans"], indent=2))