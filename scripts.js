//scripts.js

// Service Worker Configuration for caching
const CACHE_NAME = 'paeds-er-cache-v1';  // Unique cache name for versioning
const urlsToCache = [                    // Array of URLs to cache for offline access
  '/',                                   // Root directory
  '/index.html',                         // Main HTML file
  '/styles.css',                         // CSS file for styling
  '/scripts.js',                         // This JavaScript file
  '/medications.js',                     // Medication data
];

// Registering Service Worker for offline capabilities
if ('serviceWorker' in navigator) {    // Check if service workers are supported
  navigator.serviceWorker.register('service-worker.js')  // Register the service worker
    .then(function (registration) {    // Handle successful registration
      console.log('Service Worker registered with scope:', registration.scope);
    }, function (err) {                 // Handle registration error
      console.error('Service Worker registration failed:', err);
    });
}

// Categories for treatment types
const categories = {                     // Object to categorize treatments 
  FluidResuscitation: [],                // Placeholder for fluid resuscitation data
  FluidMaintenance: [],                  // Placeholder for fluid maintenance data
  Antibiotics: [],                       // Placeholder for antibiotics data
  Antivirals: [],                        // Placeholder for antivirals data
  Antimalarials: [],                     // Placeholder for antimalarials data
  Antifungals: [],                       // Placeholder for antifungals data
  Antituberculars: [],                   // Placeholder for antituberculars data
  Aminoglycosides: [],                   // Placeholder for aminoglycosides data
  Vasodilators: [],                      // Placeholder for vasodilators data
  Antiarrythmics: [],                    // Placeholder for antiarrhythmics data
  Sedatives: [],                         // Placeholder for sedatives data
  MuscleRelaxants: [],                   // Placeholder for muscle relaxants data
  Antihistamines: [],                    // Placeholder for antihistamines data
  Corticosteroids: [],                   // Placeholder for corticosteroids data
  Diuretics: [],                         // Placeholder for diuretics data
  Electrolytes: [],                      // Placeholder for electrolytes data
  Antacids: [],                          // Placeholder for antacids data
  NSAIDs: [],                            // Placeholder for NSAIDs data
  Vitamins: [],                          // Placeholder for vitamins data
  BetaBlockers: [],                      // Placeholder for beta blockers data
  Resuscitation: [],                     // Placeholder for resuscitation data
  Cardioversion: [],                     // Placeholder for cardioversion data
  Antiepileptics: [],                    // Placeholder for antiepileptics data
  PulmonaryVasodilators: [],             // Placeholder for pulmonary vasodilators data
  Bronchodilators: [],                   // Placeholder for bronchodilators data
  HypercyanoticSpells: [],               // Placeholder for hypercyanotic spells data
  Opioids: [],                           // Placeholder for opioids data
  Vasoconstrictors: [],                  // Placeholder for vasoconstrictors data
  Syrups: [],                            // Placeholder for syrups data
  Reversals: [],                         // Placeholder for reversals data
  Insulin: [],                           // Placeholder for insulin data
  BloodProducts: [],                     // Placeholder for blood products data
  Hyperkalemia: [],                      // Placeholder for hyperkalemia data
  Infusions: []                          // Placeholder for infusions data
};

// Mock Data for testing – Dehydration Plans
const dehydrationPlan = [
  { name: "Plan A", dose: 20 },          // Dehydration plan A with a specified dose
  { name: "Plan B", dose: 30 }           // Dehydration plan B with a specified dose
];

// Mock Data for medications
const medications = [                    // Array of medication objects
  { name: "Ceftriaxone", dose: 50, frequency: "OD" },  // Ceftriaxone details
  { name: "Amoxicillin", dose: 7.5, frequency: "BD" }   // Amoxicillin details
];

// Mock Data for lab corrections
const labCorrections = [
  { name: "Sodium Correction", dose: 3 },
  { name: "Potassium Correction", dose: 2 }
];

// Mock Data for resuscitation protocols
const resuscitationProtocols = [
  { name: "Resuscitation A", dose: 10, frequency: "every 30 min" },
  { name: "Resuscitation B", dose: 20, frequency: "every 1 hour" }
];

// Trigger on weight input for calculations
document.getElementById('weight').addEventListener('input', function () {  // Add input event listener to the weight element
  const weight = parseFloat(this.value);  // Get the weight from input and convert to float
  if (weight > 0) {                       // Check if weight is a valid number
    // Call all calculation functions when weight is input
    calculateFluids(weight);              // Calculate fluid requirements
    calculateMedications(weight);         // Calculate medication dosages
    calculateLabCorrections(weight);      // Calculate lab correction dosages
    calculateResuscitation(weight);       // Calculate resuscitation requirements
  }
});

// Functions for calculations

// Calculate fluid requirements based on weight
function calculateFluids(weight) {
  const tbody = document.querySelector('#fluidsTable tbody'); // Select the table body for fluids
  tbody.innerHTML = '';  // Clear table before recalculating
  dehydrationPlan.forEach(plan => {
    const tr = document.createElement('tr');  // Create a new row for each plan
    tr.innerHTML = `<td>${plan.name}</td><td>${(plan.dose * weight).toFixed(2)} ml</td>`;  // Set row content
    tbody.appendChild(tr);  // Append the row to the table body
  });
}

// Calculate medication dosages based on weight
function calculateMedications(weight) {
  const tbody = document.querySelector('#medsTable tbody'); // Select the medications table body
  tbody.innerHTML = '';  // Clear table before recalculating
  medications.forEach(med => {
    const tr = document.createElement('tr');  // Create a new row for each medication
    tr.innerHTML = `<td>${med.name}</td><td>${(med.dose * weight).toFixed(2)} mg ${med.frequency}</td>`;  // Set row content
    tbody.appendChild(tr);  // Append the row to the table body
  });
}

// Calculate lab corrections based on weight
function calculateLabCorrections(weight) {
  const tbody = document.querySelector('#labsTable tbody'); // Select the labs table body
  tbody.innerHTML = '';  // Clear table before recalculating
  labCorrections.forEach(lab => {
    const tr = document.createElement('tr');  // Create a new row for each lab correction
    tr.innerHTML = `<td>${lab.name}</td><td>${(lab.dose * weight).toFixed(2)} mmol/L</td>`;  // Set row content
    tbody.appendChild(tr);  // Append the row to the table body
  });
}

// Calculate resuscitation dosages based on weight
function calculateResuscitation(weight) {
  const tbody = document.querySelector('#resusTable tbody'); // Select the resuscitation table body
  tbody.innerHTML = '';  // Clear table before recalculating
  resuscitationProtocols.forEach(protocol => {
    const tr = document.createElement('tr');  // Create a new row for each protocol
    tr.innerHTML = `<td>${protocol.name}</td><td>${(protocol.dose * weight).toFixed(2)} ${protocol.frequency}</td>`;  // Set row content
    tbody.appendChild(tr);  // Append the row to the table body
  });
}

// Visual Enhancements for Stunning UI
function setupTables() {
  ['fluidsTable', 'medsTable', 'labsTable', 'resusTable'].forEach(tableId => { // Loop through table IDs
    const table = document.createElement('table');  // Create a new table element
    table.classList.add('styled-table'); // Add class for styling
    const thead = document.createElement('thead');  // Create thead element
    const tbody = document.createElement('tbody');  // Create tbody element
    tbody.id = `${tableId}-body`;  // Set tbody ID
    table.appendChild(thead);  // Append thead to table
    table.appendChild(tbody);  // Append tbody to table
    document.getElementById(tableId).appendChild(table); // Append table to the respective div in HTML
  });
}

// Call this once during initialization
setupTables();  // Initialize tables when the script loads

// Guidelines Integration - Medical conditions and treatment methods
const guidelinesData = [
  { condition: "Diabetic Ketoacidosis", symptoms: "Hyperglycemia, ketosis, acidosis", guidelines: "Check blood glucose, ketones, and pH; administer insulin and fluids" },
  { condition: "Diabetic Ketoacidosis", symptoms: "Hyperglycemia, ketosis, acidosis", guidelines: "Administer insulin, fluids, and electrolytes; monitor blood glucose and ketones" },
  { condition: "Metabolic Disorder", symptoms: "Varying symptoms depending on disorder", guidelines: "Check blood glucose, electrolytes, and pH; administer treatment based on disorder" },
  { condition: "Anaphylaxis", symptoms: "Hives, itching, swelling, difficulty breathing", guidelines: "Check for symptoms; administer epinephrine and antihistamines" },
  { condition: "Anaphylaxis", symptoms: "Hives, itching, swelling, difficulty breathing", guidelines: "Administer epinephrine, antihistamines, and corticosteroids" },
  { condition: "Lower Extremity Injury", symptoms: "Pain, swelling, difficulty walking", guidelines: "Check for fractures, sprains, and strains; administer pain medication" },
  { condition: "Respiratory Distress", symptoms: "Difficulty breathing, wheezing", guidelines: "Administer oxygen, nasal cannula, or noninvasive ventilation" },
  { condition: "Dehydration", symptoms: "Vomiting, diarrhea, dry mouth", guidelines: "Administer fluids, electrolytes, and anti-diarrheal medication" },
  { condition: "Critically Ill Neonate", symptoms: "Respiratory distress, hypotension, hypoglycemia", guidelines: "Administer oxygen, fluids, and medications as needed" },
  { condition: "Pain and Anxiety", symptoms: "Pain, anxiety, fear", guidelines: "Administer pain medication, sedation, and anxiety medication" },
  { condition: "Jaundice", symptoms: "Yellow skin and eyes, dark urine", guidelines: "Administer phototherapy, exchange transfusion, and bilirubin monitoring" },
  { condition: "Enterovirus", symptoms: "Fever, rash, respiratory distress", guidelines: "Administer antiviral medication, supportive care" },
  { condition: "Influenza", symptoms: "Fever, cough, sore throat", guidelines: "Check for symptoms, administer antiviral medication" },
  { condition: "Seizure", symptoms: "Convulsions, loss of consciousness", guidelines: "Administer anticonvulsant medication, supportive care" },
  { condition: "Neutropenia", symptoms: "Fever, infection, low white blood cell count", guidelines: "Administer antibiotics, antifungal medication, and supportive care" },
  { condition: "Mild to Moderate Neutropenia", symptoms: "Fever, infection, low white blood cell count", guidelines: "Administer antibiotics, antifungal medication, and supportive care" },
  { condition: "Cerebral Edema", symptoms: "Headache, vomiting, confusion", guidelines: "Administer mannitol, hypertonic saline, and supportive care" },
  { condition: "Migraine", symptoms: "Headache, sensitivity to light and sound", guidelines: "Order neuroimaging studies, administer pain medication" },
  { condition: "Pediatric Migraine", symptoms: "Headache, sensitivity to light and sound", guidelines: "Administer pain medication, triptans, and supportive care" },
  { condition: "Oil of Wintergreen Poisoning", symptoms: "Nausea, vomiting, abdominal pain", guidelines: "Administer activated charcoal, supportive care" },
  { condition: "Diphenoxylate-Atropine Poisoning", symptoms: "Nausea, vomiting, abdominal pain", guidelines: "Administer activated charcoal, supportive care" },
  { condition: "Organophosphate Poisoning", symptoms: "Nausea, vomiting, abdominal pain", guidelines: "Administer atropine, pralidoxime, and supportive care" },
  { condition: "Sulfonylurea Poisoning", symptoms: "Hypoglycemia, confusion, seizures", guidelines: "Administer glucose, octreotide, and supportive care" },
  { condition: "Pediatric Burns", symptoms: "Burns, pain, difficulty breathing", guidelines: "Administer pain medication, fluids, and wound care" },
  { condition: "Mammalian Bites", symptoms: "Pain, swelling, infection", guidelines: "Administer antibiotics, tetanus shot, and wound care" },
  { condition: "Traumatic Dental Injuries", symptoms: "Tooth loss, pain, swelling", guidelines: "Administer pain medication, antibiotics, and dental care" },
  { condition: "Pediatric Wound", symptoms: "Pain, swelling, infection", guidelines: "Administer antibiotics, wound care, and supportive care" }
];

// Create the guidelines table and tbody elements
const guidelinesTable = document.createElement("table");  // Create a table element for the guidelines
guidelinesTable.id = "guidelines-table"; // Set the table ID for identification
const guidelinesTbody = document.createElement("tbody");  // Create a tbody for the guidelines
guidelinesTbody.id = "guidelines-tbody";  // Set tbody ID
guidelinesTable.appendChild(guidelinesTbody);  // Append tbody to the guidelines table
document.body.appendChild(guidelinesTable);  // Append the guidelines table to the body of the document

// Populate Guidelines Function
function populateGuidelines() {
  const tbody = document.querySelector('#guidelines-tbody');  // Select tbody for guidelines population
  guidelinesData.forEach(guideline => {  // Loop through each guideline
    const tr = document.createElement('tr');  // Create new table row
    tr.innerHTML = `<td>${guideline.condition}</td><td>${guideline.symptoms}</td><td>${guideline.guidelines}</td>`; // Insert guideline data into row
    tbody.appendChild(tr);  // Append the newly created row to tbody
  });
}

// Call to populate guidelines at the start
populateGuidelines();  // Invoke function to populate guidelines data into the table

// Example service worker to cache all resources for offline use
self.addEventListener('install', event => {  // Listen for install event of the service worker
  event.waitUntil(  // Wait until the cache is opened
    caches.open(CACHE_NAME).then(cache => {  // Open the cache with the defined cache name
      console.log('Opened cache');  // Log to console when cache is opened
      return cache.addAll(urlsToCache);  // Cache all specified URLs
    })
  );
});
