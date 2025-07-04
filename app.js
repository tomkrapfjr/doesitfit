// TV and Car data
// Initialize tvData as null; it will be populated after fetching
let tvData = null;

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
    // Fetch data first, then setup event listeners and check policy agreement
    fetch('/tv_fitment_data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            tvData = data; // Assign fetched data to tvData
            setupEventListeners();
            // Check if the user has already agreed to the policies
            if (!localStorage.getItem('policiesAgreed')) {
                showPolicyModal();
            }
        })
        .catch(error => {
            console.error('Error fetching TV data:', error);
            showError('Failed to load TV and car data. Please try again later.');
        });
});

function setupEventListeners() {
    // Policy agreement handlers
    const privacyCheckbox = document.getElementById('privacyPolicyCheckbox');
    const termsCheckbox = document.getElementById('termsOfServiceCheckbox');
    const agreeButton = document.getElementById('agreeToPolicies');

    if (privacyCheckbox && termsCheckbox && agreeButton) {
        const checkAgreement = () => {
            agreeButton.disabled = !(privacyCheckbox.checked && termsCheckbox.checked);
        };
        privacyCheckbox.addEventListener('change', checkAgreement);
        termsCheckbox.addEventListener('change', checkAgreement);
        agreeButton.addEventListener('click', handlePolicyAgreement);
    }

    // Car category change handler
    carCategory.addEventListener('change', function() {
        populateCarModels(this.value);
    });

function setupEventListeners() {
    // Policy agreement handlers
    const privacyCheckbox = document.getElementById('privacyPolicyCheckbox');
    const termsCheckbox = document.getElementById('termsOfServiceCheckbox');
    const agreeButton = document.getElementById('agreeToPolicies');

    if (privacyCheckbox && termsCheckbox && agreeButton) {
        const checkAgreement = () => {
            agreeButton.disabled = !(privacyCheckbox.checked && termsCheckbox.checked);
        };
        privacyCheckbox.addEventListener('change', checkAgreement);
        termsCheckbox.addEventListener('change', checkAgreement);
        agreeButton.addEventListener('click', handlePolicyAgreement);
    }

    // Removed redundant event listener setup
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

    // Add event listener for TV Brand to potentially populate TV Sizes (optional, based on data structure)
    // This is not implemented in the current JSON structure but could be added later.
    document.getElementById('tvBrand').addEventListener('change', function() {
        // Logic to populate TV sizes based on selected brand could go here
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
            html += '<li>Try folding down rear seats for more cargo space</li>';
            html += '<li>Consider a smaller TV size that will fit your car</li>';
        } else {
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

// Policy Modal Functions
function showPolicyModal() {
    document.getElementById('policyModal').classList.remove('hidden');
    document.getElementById('appContent').classList.add('hidden');
}

function hidePolicyModal() {
    document.getElementById('policyModal').classList.add('hidden');
    document.getElementById('appContent').classList.remove('hidden');
}

function handlePolicyAgreement() {
    localStorage.setItem('policiesAgreed', 'true');
    hidePolicyModal();
}