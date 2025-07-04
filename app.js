// TV and Car data
const tvData = {
    "tv_brands": ["Samsung", "LG", "Sony", "TCL", "Hisense", "Toshiba", "Insignia", "Roku"],
    "tv_sizes": {
        "32": {"screen_w": 27.9, "screen_h": 15.7, "box_w": 33, "box_h": 21, "box_d": 6},
        "40": {"screen_w": 34.9, "screen_h": 19.6, "box_w": 41, "box_h": 25, "box_d": 6.5},
        "43": {"screen_w": 37.5, "screen_h": 21.1, "box_w": 43, "box_h": 27, "box_d": 7},
        "50": {"screen_w": 43.6, "screen_h": 24.5, "box_w": 50, "box_h": 31, "box_d": 7},
        "55": {"screen_w": 47.9, "screen_h": 27.0, "box_w": 57, "box_h": 33, "box_d": 8},
        "60": {"screen_w": 52.3, "screen_h": 29.4, "box_w": 60, "box_h": 35, "box_d": 8},
        "65": {"screen_w": 56.7, "screen_h": 31.9, "box_w": 63, "box_h": 38, "box_d": 8},
        "70": {"screen_w": 61.0, "screen_h": 34.3, "box_w": 70, "box_h": 40, "box_d": 8.5},
        "75": {"screen_w": 65.4, "screen_h": 36.8, "box_w": 75, "box_h": 43, "box_d": 9},
        "77": {"screen_w": 67.2, "screen_h": 37.8, "box_w": 75, "box_h": 45, "box_d": 11},
        "85": {"screen_w": 74.1, "screen_h": 41.7, "box_w": 85, "box_h": 48, "box_d": 10},
        "Insignia 75": {"screen_w": 66.1, "screen_h": 37.8, "box_w": 72.4, "box_h": 43.7, "box_d": 7.5}
    },
    "car_models": {
        "Compact Cars": {
            "Honda Fit": {"door_w": 38, "door_h": 28, "depth": 65},
            "Toyota Corolla": {"door_w": 40, "door_h": 30, "depth": 50},
            "Nissan Sentra": {"door_w": 39, "door_h": 29, "depth": 48},
            "Honda Civic": {"door_w": 40, "door_h": 30, "depth": 52}
        },
        "Sedans": {
            "Honda Accord": {"door_w": 42, "door_h": 31, "depth": 52},
            "Toyota Camry": {"door_w": 32, "door_h": 18, "depth": 40},
            "Nissan Altima": {"door_w": 29, "door_h": 14, "depth": 40},
            "Ford Fusion": {"door_w": 42, "door_h": 31, "depth": 51},
            "Chrysler 300": {"door_w": 44, "door_h": 20, "depth": 43},
            "Dodge Challenger": {"door_w": 36, "door_h": 18, "depth": 40},
            "Lexus ES": {"door_w": 39, "door_h": 19, "depth": 40}
        },
        "Luxury Sedans": {
            "BMW 3 Series": {"door_w": 36, "door_h": 17, "depth": 38},
            "Mercedes-Benz C-Class": {"door_w": 39, "door_h": 16, "depth": 39}
        },
        "SUVs - Compact": {
            "Honda CR-V": {"door_w": 42, "door_h": 31, "depth": 55},
            "Toyota RAV4": {"door_w": 43, "door_h": 30, "depth": 40},
            "Mazda CX-5": {"door_w": 44, "door_h": 32, "depth": 58},
            "Nissan Rogue": {"door_w": 43, "door_h": 31, "depth": 56},
            "Ford Escape": {"door_w": 41, "door_h": 34, "depth": 60},
            "Chevrolet Equinox": {"door_w": 41, "door_h": 21, "depth": 69},
            "Hyundai Tucson": {"door_w": 43, "door_h": 32, "depth": 75},
            "Kia Sportage": {"door_w": 44, "door_h": 33, "depth": 75},
            "Subaru Forester": {"door_w": 49, "door_h": 32, "depth": 65}
        },
        "SUVs - Midsize": {
            "Honda Pilot": {"door_w": 46, "door_h": 33, "depth": 65},
            "Toyota Highlander": {"door_w": 47, "door_h": 34, "depth": 67},
            "Chevrolet Traverse": {"door_w": 49, "door_h": 33, "depth": 70},
            "Kia Sorento": {"door_w": 44, "door_h": 31, "depth": 60},
            "Kia Telluride": {"door_w": 47, "door_h": 32, "depth": 68},
            "Ford Explorer": {"door_w": 46, "door_h": 33, "depth": 66}
        },
        "SUVs - Large": {
            "Toyota 4Runner": {"door_w": 49, "door_h": 36, "depth": 65},
            "Chevrolet Suburban": {"door_w": 52, "door_h": 36, "depth": 85},
            "Ford Expedition": {"door_w": 50, "door_h": 35, "depth": 80},
            "Jeep Wagoneer": {"door_w": 48, "door_h": 34, "depth": 75},
            "Jeep Grand Cherokee": {"door_w": 42, "door_h": 31, "depth": 70},
            "Hyundai Palisade": {"door_w": 47, "door_h": 32, "depth": 86},
            "Subaru Outback": {"door_w": 45, "door_h": 29, "depth": 75},
            "Ford Bronco": {"door_w": 42, "door_h": 36, "depth": 83},
            "Jeep Wrangler": {"door_w": 41, "door_h": 35, "depth": 60}
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
            "Toyota Tacoma": {"door_w": 48, "door_h": 21, "depth": 60},
            "Ram 1500": {"door_w": 49, "door_h": 22, "depth": 64},
            "Rivian R1T": {"door_w": 50, "door_h": 18, "depth": 54},
            "GMC Sierra": {"door_w": 50, "door_h": 22, "depth": 69},
            "Honda Ridgeline": {"door_w": 50, "door_h": 20, "depth": 64}
        },
        "Electric": {
            "Tesla Model 3": {"door_w": 39, "door_h": 18, "depth": 42},
            "Tesla Model Y": {"door_w": 39.5, "door_h": 27, "depth": 40},
            "Tesla Model S": {"door_w": 38, "door_h": 29, "depth": 42},
            "Tesla Model X": {"door_w": 41, "door_h": 27, "depth": 44},
            "Ford Mustang Mach-E": {"door_w": 42, "door_h": 30, "depth": 31}
        },
        "Hatchbacks": {
            "Volkswagen Golf": {"door_w": 40, "door_h": 27, "depth": 29},
            "Subaru Impreza": {"door_w": 40, "door_h": 30, "depth": 32},
            "Honda Civic Hatchback": {"door_w": 42, "door_h": 30, "depth": 31},
            "Mazda 3 Hatchback": {"door_w": 40, "door_h": 27, "depth": 28},
            "Hyundai Elantra GT": {"door_w": 40, "door_h": 28, "depth": 28},
            "Kia Forte5": {"door_w": 38, "door_h": 26, "depth": 28},
            "Toyota Corolla Hatchback": {"door_w": 37, "door_h": 23, "depth": 28}
        },
        "Vans": {
            "Ford Transit Connect": {"door_w": 49, "door_h": 47, "depth": 87},
            "Mercedes-Benz Sprinter": {"door_w": 61, "door_h": 72, "depth": 137},
            "Ford Transit": {"door_w": 61, "door_h": 64, "depth": 144},
            "Ram ProMaster": {"door_w": 60, "door_h": 70, "depth": 130},
            "Nissan NV": {"door_w": 61, "door_h": 71, "depth": 120},
            "Mercedes-Benz Metris": {"door_w": 54, "door_h": 49, "depth": 100}
        },
        "Wagons": {
            "Mercedes-Benz E-Class Wagon": {"door_w": 43, "door_h": 33, "depth": 70},
            "Audi A6 Allroad": {"door_w": 41, "door_h": 30, "depth": 46},
            "Volvo V60 Cross Country": {"door_w": 43, "door_h": 29, "depth": 42}
        }
    }
};

// DOM elements
const form = document.getElementById('fitmentForm');
const carCategory = document.getElementById('carCategory');
const carModel = document.getElementById('carModel');
const clearButton = document.getElementById('clearForm');
const errorMessage = document.getElementById('errorMessage');
const resultsSection = document.getElementById('resultsSection');
const resultsContent = document.getElementById('resultsContent');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
});

function setupEventListeners() {
    // Car category change handler
    carCategory.addEventListener('change', function() {
        populateCarModels(this.value);
    });

    // Form submission handler
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        handleFormSubmission();
    });

    // Clear form handler
    clearButton.addEventListener('click', function() {
        clearForm();
    });
}

function populateCarModels(category) {
    const carModelSelect = document.getElementById('carModel');
    
    // Clear existing options
    carModelSelect.innerHTML = '<option value="">Select Car Model</option>';
    
    if (category && tvData.car_models[category]) {
        carModelSelect.disabled = false;
        
        // Add models for the selected category
        Object.keys(tvData.car_models[category]).forEach(model => {
            const option = document.createElement('option');
            option.value = model;
            option.textContent = model;
            carModelSelect.appendChild(option);
        });
    } else {
        carModelSelect.disabled = true;
    }
}

function handleFormSubmission() {
    hideError();
    hideResults();

    const tvInfo = getTVInfo();
    const carInfo = getCarInfo();

    // Validate inputs
    const validation = validateInputs(tvInfo, carInfo);
    if (!validation.isValid) {
        showError(validation.message);
        return;
    }

    // Calculate fitment
    const result = calculateFitment(tvInfo, carInfo);
    
    // Display results
    displayResults(result, tvInfo, carInfo);
}

function getTVInfo() {
    const brand = document.getElementById('tvBrand').value;
    const size = document.getElementById('tvSize').value;
    const customWidth = parseFloat(document.getElementById('tvWidth').value);
    const customHeight = parseFloat(document.getElementById('tvHeight').value);
    const customDepth = parseFloat(document.getElementById('tvDepth').value);
    const customName = document.getElementById('customTvName').value;

    if (size && tvData.tv_sizes[size]) {
        return {
            type: 'standard',
            brand: brand || 'Unknown',
            size: size,
            dimensions: tvData.tv_sizes[size]
        };
    } else if (!isNaN(customWidth) && !isNaN(customHeight) && !isNaN(customDepth)) {
        return {
            type: 'custom',
            name: customName || 'Custom TV',
            dimensions: {
                box_w: customWidth,
                box_h: customHeight,
                box_d: customDepth
            }
        };
    }

    return null;
}

function getCarInfo() {
    const category = document.getElementById('carCategory').value;
    const model = document.getElementById('carModel').value;
    const customDoorWidth = parseFloat(document.getElementById('carDoorWidth').value);
    const customDoorHeight = parseFloat(document.getElementById('carDoorHeight').value);
    const customDepth = parseFloat(document.getElementById('carDepth').value);
    const customName = document.getElementById('customCarName').value;

    if (category && model && tvData.car_models[category] && tvData.car_models[category][model]) {
        return {
            type: 'standard',
            category: category,
            model: model,
            dimensions: tvData.car_models[category][model]
        };
    } else if (!isNaN(customDoorWidth) && !isNaN(customDoorHeight) && !isNaN(customDepth)) {
        return {
            type: 'custom',
            name: customName || 'Custom Car',
            dimensions: {
                door_w: customDoorWidth,
                door_h: customDoorHeight,
                depth: customDepth
            }
        };
    }

    return null;
}

function validateInputs(tvInfo, carInfo) {
    if (!tvInfo && !carInfo) {
        return {
            isValid: false,
            message: 'Please provide TV information AND car information to check fitment.'
        };
    }
    
    if (!tvInfo) {
        return {
            isValid: false,
            message: 'Please provide TV information: either select a TV brand and size, or enter custom box dimensions.'
        };
    }
    
    if (!carInfo) {
        return {
            isValid: false,
            message: 'Please provide car information: either select a car category and model, or enter custom cargo dimensions.'
        };
    }

    return { isValid: true };
}

function calculateFitment(tvInfo, carInfo) {
    const tvDims = tvInfo.dimensions;
    const carDims = carInfo.dimensions;
    
    // Apply safety margin (2 inches) to car dimensions
    const safeCarWidth = carDims.door_w - 2;
    const safeCarHeight = carDims.door_h - 2;
    const safeCarDepth = carDims.depth - 2;

    // Check different orientations
    const orientations = [
        {
            name: 'Upright (recommended)',
            tvWidth: tvDims.box_w,
            tvHeight: tvDims.box_h,
            tvDepth: tvDims.box_d,
            description: 'TV standing upright in its normal orientation'
        },
        {
            name: 'Flat (lying down)',
            tvWidth: tvDims.box_w,
            tvHeight: tvDims.box_d,
            tvDepth: tvDims.box_h,
            description: 'TV lying flat on its back (not recommended for screen health)'
        },
        {
            name: 'On side',
            tvWidth: tvDims.box_h,
            tvHeight: tvDims.box_w,
            tvDepth: tvDims.box_d,
            description: 'TV rotated 90 degrees (use with caution)'
        }
    ];

    let bestFit = null;
    let anyFits = false;

    orientations.forEach(orientation => {
        const widthFits = orientation.tvWidth <= safeCarWidth;
        const heightFits = orientation.tvHeight <= safeCarHeight;
        const depthFits = orientation.tvDepth <= safeCarDepth;
        
        const widthMargin = safeCarWidth - orientation.tvWidth;
        const heightMargin = safeCarHeight - orientation.tvHeight;
        const depthMargin = safeCarDepth - orientation.tvDepth;
        
        let status = 'no-fit';
        if (widthFits && heightFits && depthFits) {
            anyFits = true;
            if (widthMargin >= 0 && heightMargin >= 0 && depthMargin >= 0) {
                if (widthMargin <= 2 || heightMargin <= 2 || depthMargin <= 2) {
                    status = 'marginal';
                } else {
                    status = 'fits';
                }
            }
            
            if (!bestFit || status === 'fits') {
                bestFit = { ...orientation, status, widthMargin, heightMargin, depthMargin };
            }
        }
        
        orientation.status = status;
        orientation.widthMargin = widthMargin;
        orientation.heightMargin = heightMargin;
        orientation.depthMargin = depthMargin;
        orientation.fits = widthFits && heightFits && depthFits;
    });

    return {
        overall: anyFits ? (bestFit?.status === 'fits' ? 'fits' : 'marginal') : 'no-fit',
        orientations: orientations,
        bestFit: bestFit,
        tvDimensions: tvDims,
        carDimensions: carDims,
        safeCarDimensions: {
            width: safeCarWidth,
            height: safeCarHeight,
            depth: safeCarDepth
        }
    };
}

function displayResults(result, tvInfo, carInfo) {
    let html = '';

    // Determine TV and Car names for display
    const tvName = tvInfo.type === 'custom' ? tvInfo.name : `${tvInfo.brand} ${tvInfo.size}" TV`;
    const carName = carInfo.type === 'custom' ? carInfo.name : `${carInfo.model}`;

    // Overall result status
    const statusClass = `result-status--${result.overall}`;
    const statusText = result.overall === 'fits' ? `✅ ${tvName} Will Fit in ${carName}!` : 
                     result.overall === 'marginal' ? `⚠️ Marginal Fit for ${tvName} in ${carName}` : 
                     `❌ ${tvName} Will Not Fit in ${carName}`;
    
    html += `<div class="result-status ${statusClass}">${statusText}</div>`;
    
    // Result details
    html += '<div class="result-details">';
    if (result.overall === 'fits') {
        html += '<p>Great news! Your TV should fit in your car with room to spare.</p>';
    } else if (result.overall === 'marginal') {
        html += '<p>Your TV will fit, but it will be a tight squeeze. Take extra care during loading.</p>';
    } else {
        html += '<p>Unfortunately, your TV is too large for your car in any orientation.</p>';
    }
    html += '</div>';
    
    // Dimensions comparison
    html += '<div class="dimensions-comparison">';
    html += '<h4>Dimension Comparison</h4>';
    html += '<div class="dimension-row">';
    html += '<span class="dimension-label">Width:</span>';
    html += '<div class="dimension-values">';
    html += `<span class="dimension-tv">TV: ${result.tvDimensions.box_w}"</span>`;
    html += `<span class="dimension-car">Car: ${result.safeCarDimensions.width}" (safe)</span>`;
    html += '</div></div>';
    
    html += '<div class="dimension-row">';
    html += '<span class="dimension-label">Height:</span>';
    html += '<div class="dimension-values">';
    html += `<span class="dimension-tv">TV: ${result.tvDimensions.box_h}"</span>`;
    html += `<span class="dimension-car">Car: ${result.safeCarDimensions.height}" (safe)</span>`;
    html += '</div></div>';
    
    html += '<div class="dimension-row">';
    html += '<span class="dimension-label">Depth:</span>';
    html += '<div class="dimension-values">';
    html += `<span class="dimension-tv">TV: ${result.tvDimensions.box_d}"</span>`;
    html += `<span class="dimension-car">Car: ${result.safeCarDimensions.depth}" (safe)</span>`;
    html += '</div></div>';
    html += '</div>';
    
    // Orientations
    html += '<div class="orientations">';
    html += '<h4>Orientation Analysis</h4>';
    html += '<ul class="orientation-list">';
    
    result.orientations.forEach(orientation => {
        const statusClass = `orientation-status--${orientation.status}`;
        html += '<li class="orientation-item">';
        html += `<div class="orientation-status ${statusClass}"></div>`;
        html += `<div>`;
        html += `<strong>${orientation.name}</strong><br>`;
        html += `<span style="font-size: 0.875rem; color: var(--color-text-secondary);">${orientation.description}</span>`;
        if (orientation.fits) {
            html += `<br><span style="font-size: 0.875rem;">Margins: W:${orientation.widthMargin.toFixed(1)}" H:${orientation.heightMargin.toFixed(1)}" D:${orientation.depthMargin.toFixed(1)}"</span>`;
        }
        html += `</div>`;
        html += '</li>';
    });
    
    html += '</ul></div>';
    
    // Suggestions
    if (result.overall === 'no-fit' || result.overall === 'marginal') {
        html += '<div class="suggestions">';
        html += '<h4>Suggestions</h4>';
        html += '<ul>';
        
        if (result.overall === 'no-fit') {
            html += '<li>Consider a delivery service or truck rental</li>';
            html += '<li>Remove the TV from its box to save space (reduces dimensions by 1-2 inches)</li>';
            html += '<li>Try folding down rear seats for more cargo space</li>';
            html += '<li>Consider a smaller TV size that will fit your car</li>';
        } else {
            html += '<li>Remove the TV from its box if possible to gain extra space</li>';
            html += '<li>Use plenty of padding and blankets for protection</li>';
            html += '<li>Load carefully and get assistance if needed</li>';
            html += '<li>Keep the TV upright if at all possible</li>';
        }
        
        html += '</ul></div>';
    }
    
    resultsContent.innerHTML = html;
    showResults();
}

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
}

function hideError() {
    errorMessage.classList.add('hidden');
}

function showResults() {
    resultsSection.classList.remove('hidden');
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function hideResults() {
    resultsSection.classList.add('hidden');
}

function clearForm() {
    form.reset();
    carModel.disabled = true;
    carModel.innerHTML = '<option value="">Select Car Model</option>';
    hideError();
    hideResults();
}