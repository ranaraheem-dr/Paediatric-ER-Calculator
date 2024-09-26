import medications from './medications.js'; // Import medications data from medications.js

// Add event listener for weight input
document.getElementById("weight").addEventListener("input", function() {
    const weight = parseFloat(this.value); // Parse entered weight
    if (weight > 0) { // Ensure the weight is positive
        calculateFluids(weight); // Calculate fluid requirements
        calculateMedications(weight); // Automatically calculate medications
        calculateLabCorrections(weight); // Calculate lab corrections
        calculateResuscitation(weight); // Calculate resuscitation protocols
    }
});

// Function to calculate fluid requirements based on weight
function calculateFluids(weight) {
    const fluidsTbody = document.getElementById("fluids-tbody"); // Get tbody for fluid calculations
    fluidsTbody.innerHTML = ''; // Clear previous results
    // Example fluid plans (these values can be adjusted according to actual protocols)
    fluidsTbody.insertAdjacentHTML('beforeend', `<tr><td>Plan A</td><td>${(50 * weight).toFixed(2)} ml</td></tr>`);
    fluidsTbody.insertAdjacentHTML('beforeend', `<tr><td>Plan B</td><td>${(100 * weight).toFixed(2)} ml</td></tr>`);
}

// Function to calculate medication dosages based on weight
function calculateMedications(weight) {
    const medsTbody = document.getElementById("meds-tbody"); // Get tbody for medication calculations
    medsTbody.innerHTML = ''; // Clear previous results
    medications.forEach(med => {
        const dose = med.dose * weight; // Calculate medication dose based on weight
        if (dose > 0) { // Ensure dose is a valid positive number
            medsTbody.insertAdjacentHTML('beforeend', `<tr><td>${med.name}</td><td>${dose.toFixed(2)} ${med.frequency}</td><td>${med.formula}</td><td>${med.indications.join(", ")}</td></tr>`);
        }
    });
}

// Function to calculate lab corrections based on weight
function calculateLabCorrections(weight) {
    const labsTbody = document.getElementById("labs-tbody"); // Get tbody for lab corrections
    labsTbody.innerHTML = ''; // Clear previous results
    // Hypothetical lab corrections and their calculations
    labsTbody.insertAdjacentHTML('beforeend', `<tr><td>Sodium Correction</td><td>${(1 * weight).toFixed(2)} mmol/L</td></tr>`); // Example calculation
    labsTbody.insertAdjacentHTML('beforeend', `<tr><td>Potassium Correction</td><td>${(0.5 * weight).toFixed(2)} mmol/L</td></tr>`); // Example calculation
    // Add more lab corrections as needed
}

// Function to calculate resuscitation data based on weight
function calculateResuscitation(weight) {
    const resusTbody = document.getElementById("resus-tbody"); // Get tbody for resuscitation calculations
    resusTbody.innerHTML = ''; // Clear previous results
    // Display resuscitation protocols and calculations
    resusTbody.insertAdjacentHTML('beforeend', `<tr><td>Fluid Bolus</td><td>${(10 * weight).toFixed(2)} ml</td></tr>`); // Example calculation
    resusTbody.insertAdjacentHTML('beforeend', `<tr><td>Medication A</td><td>${(5 * weight).toFixed(2)} mg</td></tr>`); // Example calculation
    // Add more resuscitation protocol data as needed
}
