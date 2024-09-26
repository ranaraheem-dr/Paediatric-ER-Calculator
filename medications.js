// medications.js

const medications = [
  // Dehydration Plans
  {
    name: "Plan A (Rehydration)",  // Name of the plan
    dose: 50,  // Dose in ml/kg
    frequency: "ml/kg",  // Frequency unit
    formula: "Given orally over 4 hours",  // Administration instructions
    category: "Dehydration",  // Medication category
    indications: [  // Indications for use
      "Mild dehydration",  
      "Viral gastroenteritis",  
      "Mild diarrhea"  
    ]
  },
  {
    name: "Plan B (Moderate)",  
    dose: 100,  
    frequency: "ml/kg",  
    formula: "Given over 4 hours",  
    category: "Dehydration",  
    indications: [  
      "Moderate dehydration",  
      "Bacterial gastroenteritis",  
      "Moderate diarrhea"  
    ]
  },
  {
    name: "Plan C (Severe - 30% fluid)",  
    dose: 30,  
    frequency: "ml/kg",  
    formula: "Over 30 mins in child and 1 hr in infant",  
    category: "Dehydration",  
    indications: [  
      "Severe dehydration (30% fluid loss)",  
      "Severe diarrhea",  
      "Vomiting"  
    ]
  },
  {
    name: "Plan C (Severe - 70% fluid)",  
    dose: 70,  
    frequency: "ml/kg",  
    formula: "Over 5 hrs in infant and 2.5 hrs in child",  
    category: "Dehydration",  
    indications: [  
      "Severe dehydration (70% fluid loss)",  
      "Severe diarrhea",  
      "Vomiting"  
    ]
  },

  // Fluid Rates
  {
    name: "Fluid Bolus (10ml/kg)",  
    dose: 10,  
    frequency: "ml/kg",  
    formula: "Given as bolus over 30-60 min",  
    category: "Fluid Resuscitation",  
    indications: [  
      "Hypovolemia",  
      "Shock",  
      "Hemorrhage"  
    ]
  },
  {
    name: "Fluid Bolus (20ml/kg)",  
    dose: 20,  
    frequency: "ml/kg",  
    formula: "Given as bolus over 30-60 min",  
    category: "Fluid Resuscitation",  
    indications: [  
      "Hypovolemia",  
      "Shock",  
      "Hemorrhage"  
    ]
  },
  {
    name: "Maintenance Fluid (1 hour)",  
    dose: 4,  
    frequency: "ml/kg/hr",  
    formula: "Given as continuous infusion",  
    category: "Fluid Maintenance",  
    indications: [  
      "Maintenance fluid replacement",  
      "Post-operative care",  
      "Burn patients"  
    ]
  },
  {
    name: "Maintenance Fluid (8 hours)",  
    dose: 32,  
    frequency: "ml/kg",  
    formula: "Given over 8 hours",  
    category: "Fluid Maintenance",  
    indications: [  
      "Maintenance fluid replacement",  
      "Post-operative care",  
      "Burn patients"  
    ]
  },
  {
    name: "Maintenance Fluid (24 hours)",  
    dose: 96,  
    frequency: "ml/kg",  
    formula: "Given over 24 hours",  
    category: "Fluid Maintenance",  
    indications: [  
      "Maintenance fluid replacement",  
      "Post-operative care",  
      "Burn patients"  
    ]
  },

  // Antibiotics
  {
    name: "Augmentin",  
    dose: 30,  
    frequency: "TDS",  
    formula: "30mg/kg/dose",  
    category: "Antibiotics",  
    indications: [  
      "Bacterial infections (e.g., otitis media, pneumonia)",  
      "Urinary tract infections",  
      "Skin infections"  
    ]
  },
  {
    name: "Amikacin",  
    dose: 15,  
    frequency: "BD",  
    formula: "15-22.5mg/kg/24 hrs or 7.5mg/kg/dose",  
    category: "Antibiotics",  
    indications: [  
      "Serious gram-negative infections",  
      "Pneumonia",  
      "Meningitis"  
    ]
  },
  {
    name: "Tanzo",  
    dose: 90,  
    frequency: "TDS",  
    formula: "90mg/kg/d",  
    category: "Antibiotics",  
    indications: [  
      "Bacterial infections",  
      "Urinary tract infections",  
      "Skin infections"  
    ]
  },
  {
    name: "Vancomycin - Empirical",  
    dose: 15,  
    frequency: "mg/kg/dose",  
    formula: "10mg/kg/dose",  
    category: "Antibiotics",  
    indications: [  
      "Empirical treatment for suspected bacterial infections",  
      "Methicillin-resistant Staphylococcus aureus (MRSA) infections"  
    ]
  },
  {
    name: "Vancomycin - Meningitic",  
    dose: 20,  
    frequency: "mg/kg/dose",  
    formula: "10mg/kg/dose",  
    category: "Antibiotics",  
    indications: [  
      "Meningitis",  
      "Central nervous system infections"  
    ]
  },
  {
    name: "Ceftriaxone - Empirical",   
    dose: 50,  
    frequency: "mg/kg/dose",  
    formula: "50mg/kg/dose",  
    category: "Antibiotics",  
    indications: [  
      "Empirical treatment for suspected bacterial infections",  
      "Pneumonia",  
      "Urinary tract infections"  
    ]
  },
  {
    name: "Ceftriaxone - Enteric",  
    dose: 75,  
    frequency: "mg/kg/dose",  
    formula: "75mg/kg/dose",  
    category: "Antibiotics",  
    indications: [  
      "Enteric fever (typhoid fever)",  
      "Bacterial gastroenteritis"  
    ]
  },
  {
    name: "Ceftriaxone - Meningitic",  
    dose: 100,  
    frequency: "mg/kg/dose",  
    formula: "100mg/kg/dose",  
    category: "Antibiotics",  
    indications: [  
      "Meningitis",  
      "Central nervous system infections"  
    ]
  },
  {
    name: "Ciprofloxacin",  
    dose: 20,  
    frequency: "mg/kg/dose",  
    formula: "20-30mg/kg/24hrs",  
    category: "Antibiotics",  
    indications: [  
      "Bacterial infections (e.g., urinary tract infections, pneumonia)",  
      "Skin infections",  
      "Bone and joint infections"  
    ]
  },
  {
    name: "Meronum",  
    dose: 20,  
    frequency: "mg/kg/dose",  
    formula: "20mg/kg/dose",  
    category: "Antibiotics",  
    indications: [  
      "Serious bacterial infections",  
      "Pneumonia",  
      "Urinary tract infections"  
    ]
  },
  {
    name: "Imepenum",  
    dose: 20,  
    frequency: "mg/kg/dose",  
    formula: "20mg/kg/dose",  
    category: "Antibiotics",  
    indications: [  
      "Serious bacterial infections",  
      "Pneumonia",  
      "Urinary tract infections"  
    ]
  },
  {
    name: "Linezolid",  
    dose: 10,  
    frequency: "mg/kg/dose",  
    formula: "10mg/kg/dose",  
    category: "Antibiotics",  
    indications: [  
      "Bacterial infections (e.g., pneumonia, skin infections)",  
      "MRSA infections"  
    ]
  },
  {
    name: "Sulzone",  
    dose: 40,  
    frequency: "mg/kg/dose",  
    formula: "40-60mg/kg/day",  
    category: "Antibiotics",  
    indications: [  
      "Bacterial infections",  
      "Urinary tract infections",  
      "Skin infections"  
    ]
  },
  {
    name: "Targocid",  
    dose: 10,  
    frequency: "mg/kg/dose",  
    formula: "10mg/kg BD for first 3 doses, then 5mg/kg OD",  
    category: "Antibiotics",  
    indications: [  
      "Bacterial infections",  
      "Urinary tract infections",  
      "Skin infections"  
    ]
  },
  {
    name: "Collistin min",  
    dose: 25000,  
    frequency: "IU/kg/dose",  
    formula: "75,000IU/kg/day calc dose is divided into tds",  
    category: "Antibiotics",  
    indications: [  
      "Serious infections caused by multidrug-resistant gram-negative bacteria",  
      "Pneumonia",  
      "Urinary tract infections"  
    ]
  },
  {
    name: "Collistin max",  
    dose: 50000,  
    frequency: "IU/kg/dose",  
    formula: "150,000IU/kg/day calc dose is divided into tds",  
    category: "Antibiotics",  
    indications: [  
      "Serious infections caused by multidrug-resistant gram-negative bacteria",  
      "Pneumonia",  
      "Urinary tract infections"  
    ]
  },
  {
    name: "Flagyl ml",  
    dose: 1.5,  
    frequency: "ml/kg/dose",  
    formula: "1.5ml/kg/dose",  
    category: "Antibiotics",  
    indications: [  
      "Bacterial and parasitic infections",  
      "Gastrointestinal infections",  
      "Skin infections"  
    ]
  },
  {
    name: "Flagyl mg",  
    dose: 7.5,  
    frequency: "mg/kg/dose",  
    formula: "7.5mg/kg/dose",  
    category: "Antibiotics",  
    indications: [  
      "Bacterial and parasitic infections",  
      "Gastrointestinal infections",  
      "Skin infections"  
    ]
  },
  {
    name: "Klaricid",  
    dose: 15,  
    frequency: "mg/kg/dose",  
    formula: "15mg/kg/day",  
    category: "Antibiotics",  
    indications: [  
      "Bacterial infections",  
      "Urinary tract infections",  
      "Skin infections"  
    ]
  },
  {
    name: "Levofloxacin",  
    dose: 10,  
    frequency: "mg/kg/dose",  
    formula: "10mg/kg/day",  
    category: "Antibiotics",  
    indications: [  
      "Bacterial infections (e.g., pneumonia, urinary tract infections)",  
      "Skin infections",  
      "Bone and joint infections"  
    ]
  },
  {
    name: "Cefixime",  
    dose: 10,  
    frequency: "mg/kg/dose",  
    formula: "10mg/kg/day",  
    category: "Antibiotics",  
    indications: [  
      "Bacterial infections (e.g., urinary tract infections, pneumonia)",  
      "Skin infections",  
      "Bone and joint infections"  
    ]
  },
  {
    name: "Cefotaxime",  
    dose: 50,  
    frequency: "mg/kg/dose",  
    formula: "50mg/kg/dose",  
    category: "Antibiotics",  
    indications: [  
      "Bacterial infections (e.g., pneumonia, urinary tract infections)",  
      "Meningitis",  
      "Central nervous system infections"  
    ]
  },
  {
    name: "Streptomycin Min",  
    dose: 500000,  
    frequency: "IU/kg/dose",  
    formula: "500000IU/kg/dose",  
    category: "Antibiotics",  
    indications: [  
      "Tuberculosis",  
      "Plague",  
      "Brucellosis"  
    ]
  },
  {
    name: "Streptomycin Max",  
    dose: 1000000,  
    frequency: "IU/kg/dose",  
    formula: "1000000IU/kg/dose",  
    category: "Antibiotics",  
    indications: [  
      "Tuberculosis",  
      "Plague",  
      "Brucellosis"  
    ]
  },
  {
    name: "Acyclovir (Empirical)",  
    dose: 10,  
    frequency: "mg/kg/dose",  
    formula: "10mg/kg/TDS",  
    category: "Antivirals",  
    indications: [  
      "Herpes simplex virus infections",  
      "Varicella-zoster virus infections"  
    ]
  },
  {
    name: "Acyclovir (Encephalitis)",  
    dose: 20,  
    frequency: "mg/kg/dose",  
    formula: "20mg/kg/TDS",  
    category: "Antivirals",  
    indications: [  
      "Herpes simplex encephalitis",  
      "Varicella-zoster encephalitis"  
    ]
  },
  {
    name: "Artemether stat",  
    dose: 3.6,  
    frequency: "mg/kg/dose",  
    formula: "3.6mg/kg/dose IM",  
    category: "Antimalarials",  
    indications: [  
      "Malaria",  
      "Severe malaria"  
    ]
  },
  {
    name: "Artemether",  
    dose: 1.6,  
    frequency: "mg/kg/dose",  
    formula: "1.6mg/kg/OD IM",  
    category: "Antimalarials",  
    indications: [  
      "Malaria",  
      "Uncomplicated malaria"  
    ]
  },
  {
    name: "Nilstat drops",  
    dose: 0.1,  
    frequency: "ml/kg/dose",  
    formula: "0.1ml/kg/TDS PO, 1 drop is 1ml",  
    category: "Antifungals",  
    indications: [  
      "Oral candidiasis",  
      "Gastrointestinal candidiasis"  
    ]
  },
  {
    name: "Rifampicin min",  
    dose: 10,  
    frequency: "mg/kg/dose",  
    formula: "10mg/kg/dose",  
    category: "Antituberculars",  
    indications: [  
      "Tuberculosis",  
      "Leprosy"  
    ]
  },
  {
    name: "Rifampicin max",  
    dose: 20,  
    frequency: "mg/kg/dose",  
    formula: "20mg/kg/dose",  
    category: "Antituberculars",  
    indications: [  
      "Tuberculosis",  
      "Leprosy"  
    ]
  },
  {
    name: "Isoniazid min",  
    dose: 10,  
    frequency: "mg/kg/dose",  
    formula: "10mg/kg/dose",  
    category: "Antituberculars",  
    indications: [  
      "Tuberculosis",  
      "Leprosy"  
    ]
  },
  {
    name: "Isoniazid max",  
    dose: 20,  
    frequency: "mg/kg/dose",  
    formula: "20mg/kg/dose",  
    category: "Antituberculars",  
    indications: [  
      "Tuberculosis",  
      "Leprosy"  
    ]
  },
  {
    name: "Pyrazinamide min",  
    dose: 25,  
    frequency: "mg/kg/dose",  
    formula: "25mg/kg/dose",  
    category: "Antituberculars",  
    indications: [  
      "Tuberculosis",  
      "Leprosy"  
    ]
  },
  {
    name: "Pyrazinamide max",  
    dose: 35,  
    frequency: "mg/kg/dose",  
    formula: "35mg/kg/dose",  
    category: "Antituberculars",  
    indications: [  
      "Tuberculosis",  
      "Leprosy"  
    ]
  },
  {
    name: "Ethambutol min",  
    dose: 15,  
    frequency: "mg/kg/dose",  
    formula: "15mg/kg/dose",  
    category: "Antituberculars",  
    indications: [  
      "Tuberculosis",  
      "Leprosy"  
    ]
  },
  {
    name: "Ethambutol max",  
    dose: 25,  
    frequency: "mg/kg/dose",  
    formula: "25mg/kg/dose",  
    category: "Antituberculars",  
    indications: [  
      "Tuberculosis",  
      "Leprosy"  
    ]
  },
  {
    name: "Gentamicin",  
    dose: 7.5,  
    frequency: "mg/kg/dose",  
    formula: "7.5mg/kg/dose",  
    category: "Aminoglycosides",  
    indications: [  
      "Bacterial infections (e.g., sepsis, meningitis)",  
      "Urinary tract infections"  
    ]
  },

  // Vasodilators
  {
    name: "GTN",  
    dose: 0.5,  
    frequency: "mcg/kg/min",  
    formula: "Given as continuous infusion",  
    category: "Vasodilators",  
    indications: [  
      "Hypertension",  
      "Angina pectoris",  
      "Heart failure"  
    ]
  },
  {
    name: "SNP",  
    dose: 0.5,  
    frequency: "mcg/kg/min",  
    formula: "Given as continuous infusion",  
    category: "Vasodilators",  
    indications: [  
      "Hypertension",  
      "Angina pectoris",  
      "Heart failure"  
    ]
  },

  // Antiarrythmics
  {
    name: "Amiodarone",  
    dose: 5,  
    frequency: "mg/kg/dose",  
    formula: "Given as bolus over 30-60 min",  
    category: "Antiarrythmics",  
    indications: [  
      "Ventricular tachycardia",  
      "Ventricular fibrillation",  
      "Atrial fibrillation"  
    ]
  },
  {
    name: "Lignocaine",  
    dose: 1,  
    frequency: "mg/kg/dose",  
    formula: "Given as bolus over 30-60 min",  
    category: "Antiarrythmics",  
    indications: [  
      "Ventricular tachycardia",  
      "Ventricular fibrillation",  
      "Atrial fibrillation"  
    ]
  },

  // Miscellaneous
  {
    name: "Dormicum",  
    dose: 0.1,  
    frequency: "mg/kg/dose",  
    formula: "Given as bolus over 30-60 min",  
    category: "Sedatives",  
    indications: [  
      "Anxiety",  
      "Insomnia",  
      "Seizures"  
    ]
  },
  {
    name: "Atrelax",  
    dose: 0.1,  
    frequency: "mg/kg/dose",  
    formula: "Given as bolus over 30-60 min",  
    category: "Muscle relaxants",  
    indications: [  
      "Muscle spasms",  
      "Tetanus",  
      "Status epilepticus"  
    ]
  },
  {
    name: "Avil",  
    dose: 1,  
    frequency: "mg/kg/dose",  
    formula: "10mg/kg/loading",  
    category: "Antihistamines",  
    indications: [  
      "Allergic reactions",  
      "Anaphylaxis",  
      "Asthma"  
    ]
  },
  {
    name: "Solucortif stat",  
    dose: 10,  
    frequency: "mg/kg/dose",  
    formula: "10mg/kg/dose",  
    category: "Corticosteroids",  
    indications: [  
      "Inflammatory conditions",  
      "Allergic reactions",  
      "Asthma"  
    ]
  },
  {
    name: "Solucortif",  
    dose: 5,  
    frequency: "mg/kg/dose",  
    formula: "5mg/kg/dose 6hrly",  
    category: "Corticosteroids",  
    indications: [  
      "Inflammatory conditions",  
      "Allergic reactions",  
      "Asthma"  
    ]
  },
  {
    name: "Dexa anti-inflammatory",  
    dose: 0.3,  
    frequency: "mg/kg/dose",  
    formula: "0.3mg/kg/dose",  
    category: "Corticosteroids",  
    indications: [  
      "Inflammatory conditions",  
      "Allergic reactions",  
      "Asthma"  
    ]
  },
  {
    name: "Dexa airway edema min",  
    dose: 0.125,  
    frequency: "mg/kg/dose",  
    formula: "0.5mg/kg/dose divided in 4 doses",  
    category: "Corticosteroids",  
    indications: [  
      "Airway edema",  
      "Asthma",  
      "Chronic obstructive pulmonary disease (COPD)"  
    ]
  },
  {
    name: "Dexa airway edema max",  
    dose: 0.5,  
    frequency: "mg/kg/dose",  
    formula: "2mg/kg/dose divided in 4 doses",  
    category: "Corticosteroids",  
    indications: [  
      "Airway edema",  
      "Asthma",  
      "COPD"  
    ]
  },
  {
    name: "Lasix",  
    dose: 1,  
    frequency: "mg/kg/dose",  
    formula: "1mg/kg/dose",  
    category: "Diuretics",  
    indications: [  
      "Edema",  
      "Hypertension",  
      "Heart failure"  
    ]
  },
  {
    name: "Calcium Chloride",  
    dose: 0.2,  
    frequency: "ml/kg/dose",  
    formula: "0.2ml/kg/dose",  
    category: "Electrolytes",  
    indications: [  
      "Hypocalcemia",  
      "Tetany",  
      "Seizures"  
    ]
  },
  {
    name: "Calcium Gluconate",  
    dose: 1,  
    frequency: "ml/kg/dose",  
    formula: "1ml/kg/dose",  
    category: "Electrolytes",  
    indications: [  
      "Hypocalcemia",  
      "Tetany",  
      "Seizures"  
    ]
  },
  {
    name: "kcl",  
    dose: 2,  
    frequency: "mEq/kg/d",  
    formula: "2 mEq/kg/d",  
    category: "Electrolytes",  
    indications: [  
      "Hypokalemia",  
      "Cardiac arrhythmias",  
      "Muscle weakness"  
    ]
  },
  {
    name: "Ranitidine (Zantac)",  
    dose: 2,  
    frequency: "mg/kg/dose",  
    formula: "2 mg/kg",  
    category: "Antacids",  
    indications: [  
      "Gastroesophageal reflux disease (GERD)",  
      "Peptic ulcer disease",  
      "Zollinger-Ellison syndrome"  
    ]
  },
  {
    name: "Inj. Dicloran",  
    dosage: 0.75,  
    frequency: "mg/kg/dose",  
    formula: "mg/kg/dose IM",  
    category: "Nonsteroidal anti-inflammatory drugs (NSAIDs)",  
    indications: [  
      "Pain",  
      "Inflammation",  
      "Fever"  
    ]
  },
  {
    name: "Vitamin-k",  
    dose: 0.5,  
    frequency: "mg/kg/dose",  
    formula: "0.5mg/kg/dose",  
    category: "Vitamins",  
    indications: [  
      "Vitamin K deficiency",  
      "Bleeding disorders",  
      "Newborns"  
    ]
  },

  // Tablets
  {
    name: "Capace",  
    dose: 10,  
    frequency: "mg/kg/dose",  
    formula: "Given orally",  
    category: "Antibiotics",  
    indications: [  
      "Bacterial infections",  
      "Urinary tract infections",  
      "Skin infections"  
    ]
  },
  {
    name: "Inderal",  
    dose: 10,  
    frequency: "mg/kg/dose",  
    formula: "Given orally",  
    category: "Beta blockers",  
    indications: [  
      "Hypertension",  
      "Angina pectoris",  
      "Heart failure"  
    ]
  },
  {
    name: "Aldactone",  
    dose: 1.2,  
    frequency: "mg/kg/dose",  
    formula: "Given orally",  
    category: "Diuretics",  
    indications: [  
      "Edema",  
      "Hypertension",  
      "Heart failure"  
    ]
  },
  {
    name: "Aspirin 1mg",  
    dose: 1,  
    frequency: "mg/kg/dose",  
    formula: "Given orally",  
    category: "NSAIDs",  
    indications: [  
      "Pain",  
      "Inflammation",  
      "Fever"  
    ]
  },
  {
    name: "Aspirin 2mg",  
    dose: 2,  
    frequency: "mg/kg/dose",  
    formula: "Given orally",  
    category: "NSAIDs",  
    indications: [  
      "Pain",  
      "Inflammation",  
      "Fever"  
    ]
  },
  {
    name: "Aspirin 3mg",  
    dose: 3,  
    frequency: "mg/kg/dose",  
    formula: "Given orally",  
    category: "NSAIDs",  
    indications: [  
      "Pain",  
      "Inflammation",  
      "Fever"  
    ]
  },
  {
    name: "Aspirin 4mg",  
    dose: 4,  
    frequency: "mg/kg/dose",  
    formula: "Given orally",  
    category: "NSAIDs",  
    indications: [  
      "Pain",  
      "Inflammation",  
      "Fever"  
    ]
  },
  {
    name: "Aspirin 5mg",  
    dose: 5,  
    frequency: "mg/kg/dose",  
    formula: "Given orally",  
    category: "NSAIDs",  
    indications: [  
      "Pain",  
      "Inflammation",  
      "Fever"  
    ]
  },
  {
    name: "Britanyl 2.5mg",  
    dose: 0.15,  
    frequency: "mg/kg/dose",  
    formula: "Given orally TDS",  
    category: "Beta agonists",  
    indications: [  
      "Asthma",  
      "COPD",  
      "Chronic bronchitis"  
    ]
  },

  // Resuscitation
  {
    name: "Endotracheal tube size",  
    formula: "4 + Age/4",  
    category: "Resuscitation",  
    indications: [  
      "Respiratory failure",  
      "Cardiac arrest",  
      "Trauma"  
    ]
  },
  {
    name: "Atropine Min",  
    dose: 0.01,  
    frequency: "mg/kg/dose",  
    formula: "0.01 mg/kg",  
    category: "Resuscitation",  
    indications: [  
      "Bradycardia",  
      "Asystole",  
      "Pulseless electrical activity"  
    ]
  },
  {
    name: "Atropine Max",  
    dose: 0.03,  
    frequency: "mg/kg/dose",  
    formula: "0.03 mg/kg",  
    category: "Resuscitation",  
    indications: [  
      "Bradycardia",  
      "Asystole",  
      "Pulseless electrical activity"  
    ]
  },
  {
    name: "Bicarbonate Min",  
    dose: 1,  
    frequency: "mEq/kg/dose",  
    formula: "1 mEq/kg",  
    category: "Resuscitation",  
    indications: [  
      "Metabolic acidosis",  
      "Respiratory acidosis",  
      "Cardiac arrest"  
    ]
  },
  {
    name: "Bicarbonate Max",  
    dose: 2,  
    frequency: "mEq/kg/dose",  
    formula: "2 mEq/kg",  
    category: "Resuscitation",  
    indications: [  
      "Metabolic acidosis",  
      "Respiratory acidosis",  
      "Cardiac arrest"  
    ]
  },
  {
    name: "Calcium Chloride Min",  
    dose: 0.1,  
    frequency: "ml/kg/dose",  
    formula: "0.1 ml/kg",  
    category: "Resuscitation",  
    indications: [  
      "Hypocalcemia",  
      "Tetany",  
      "Seizures"  
    ]
  },
  {
    name: "Calcium Chloride Max",  
    dose: 0.3,  
    frequency: "ml/kg/dose",  
    formula: "0.3 ml/kg",  
    category: "Resuscitation",  
    indications: [  
      "Hypocalcemia",  
      "Tetany",  
      "Seizures"  
    ]
  },
  {
    name: "Calcium Gluconate Min",  
    dose: 0.6,  
    frequency: "ml/kg/dose",  
    formula: "0.6 ml/kg",  
    category: "Resuscitation",  
    indications: [  
      "Hypocalcemia",  
      "Tetany",  
      "Seizures"  
    ]
  },
  {
    name: "Calcium Gluconate Max",  
    dose: 1,  
    frequency: "ml/kg/dose",  
    formula: "1 ml/kg",  
    category: "Resuscitation",  
    indications: [  
      "Hypocalcemia",  
      "Tetany",  
      "Seizures"  
    ]
  },
  {
    name: "Dextrose",  
    dose: 0.5,  
    frequency: "g/kg/dose",  
    formula: "0.5-1 g/kg IV",  
    category: "Resuscitation",  
    indications: [  
      "Hypoglycemia",  
      "Seizures",  
      "Coma"  
    ]
  },
  {
    name: "Diltiazem (Cardizem)",  
    dose: 0.25,  
    frequency: "mg/kg/dose",  
    formula: "0.25 mg/kg over 2 min",  
    category: "Resuscitation",  
    indications: [  
      "Supraventricular tachycardia",  
      "Atrial fibrillation",  
      "Atrial flutter"  
    ]
  },
  {
    name: "Ephedrine Min",  
    dose: 0.2,  
    frequency: "mg/kg/dose",  
    formula: "0.2 mg/kg/dose",  
    category: "Resuscitation",  
    indications: [  
      "Hypotension",  
      "Bradycardia",  
      "Cardiac arrest"  
    ]
  },
  {
    name: "Ephedrine Max",  
    dose: 0.3,  
    frequency: "mg/kg/dose",  
    formula: "0.3 mg/kg/dose",  
    category: "Resuscitation",  
    indications: [  
      "Hypotension",  
      "Bradycardia",  
      "Cardiac arrest"  
    ]
  },
  {
    name : "Epinephrine (1:10,000)",  
    dose: 10,  
    frequency: "mcg/kg/dose",  
    formula: "10 mcg/kg",  
    category: "Resuscitation",  
    indications: [  
      "Cardiac arrest",  
      "Anaphylaxis",  
      "Asthma"  
    ]
  },
  {
    name: "Digoxin",  
    dose: 0.02,  
    frequency: "mg/kg/dose",  
    formula: "Given as bolus over 30-60 min",  
    category: "Resuscitation",  
    indications: [  
      "Atrial fibrillation",  
      "Atrial flutter",  
      "Heart failure"  
    ]
  },
  {
    name: "Lidocaine",  
    dose: 1,  
    frequency: "mg/kg/dose",  
    formula: "1 mg/kg",  
    category: "Resuscitation",  
    indications: [  
      "Ventricular tachycardia",  
      "Ventricular fibrillation",  
      "Cardiac arrest"  
    ]
  },

  // Cardioversion
  {
    name: "Atrial arrhythmias Min",  
    dose: 0.5,  
    frequency: "joule/kg/dose",  
    formula: "0.5 joule/kg",  
    category: "Cardioversion",  
    indications: [  
      "Atrial fibrillation",  
      "Atrial flutter",  
      "Supraventricular tachycardia"  
    ]
  },
  {
    name: "Atrial arrhythmias Max",  
    dose: 1,  
    frequency: "joule/kg/dose",  
    formula: "1 joule/kg",  
    category: "Cardioversion",  
    indications: [  
      "Atrial fibrillation",  
      "Atrial flutter",  
      "Supraventricular tachycardia"  
    ]
  },
  {
    name: "Ventricular Fibrillation",  
    dose: 2,  
    frequency: "joule/kg/dose",  
    formula: "2 joules/kg",  
    category: "Cardioversion",  
    indications: [  
      "Ventricular fibrillation",  
      "Pulseless ventricular tachycardia",  
      "Cardiac arrest"  
    ]
  },
  {
    name: "Ventricular Tachycardia Min",  
    dose: 1,  
    frequency: "joule/kg/dose",  
    formula: "1 joules/kg",  
    category: "Cardioversion",  
    indications: [  
      "Ventricular tachycardia",  
      "Pulseless ventricular tachycardia",  
      "Cardiac arrest"  
    ]
  },
  {
    name: "Ventricular Tachycardia Max",  
    dose: 2,  
    frequency: "joule/kg/dose",  
    formula: "2 joules/kg",  
    category: "Cardioversion",  
    indications: [  
      "Ventricular tachycardia",  
      "Pulseless ventricular tachycardia",  
      "Cardiac arrest"  
    ]
  },
  {
    name: "Adenosine",  
    dose: 0.1,  
    frequency: "mg/kg/dose",  
    formula: "0.1 mg/kg",  
    category: "Cardioversion",  
    indications: [  
      "Supraventricular tachycardia",  
      "Atrial fibrillation",  
      "Atrial flutter"  
    ]
  },

  // Antiepileptics
  {
    name: "Lerace Loading",  
    dose: 20,  
    frequency: "mg/kg/dose",  
    formula: "Given as bolus over 30-60 min",  
    category: "Antiepileptics",  
    indications: [  
      "Seizures",  
      "Epilepsy",  
      "Status epilepticus"  
    ]
  },
  {
    name: "Lerace (Min Maintenance)",  
    dose: 20,  
    frequency: "mg/kg/dose",  
    formula: "20 mg/kg BD",  
    category: "Antiepileptics",  
    indications: [  
      "Seizures",  
      "Epilepsy",  
      "Status epilepticus"  
    ]
  },
  {
    name: "Lerace (Max Maintenance)",  
    dose: 60,  
    frequency: "mg/kg/dose",  
    formula: "60 mg/kg BD",  
    category: "Antiepileptics",  
    indications: [  
      "Seizures",  
      "Epilepsy",  
      "Status epilepticus"  
    ]
  },
  {
    name: "Epival Loading",  
    dose: 20,  
    frequency: "mg/kg/dose",  
    formula: "20 mg/kg over 30-60 min",  
    category: "Antiepileptics",  
    indications: [  
      "Seizures",  
      "Epilepsy",  
      "Status epilepticus"  
    ]
  },
  {
    name: "Epival Maintenance",  
    dose: 10,  
    frequency: "mg/kg/dose",  
    formula: "10 mg/kg over 30-60 min",  
    category: "Antiepileptics",  
    indications: [  
      "Seizures",  
      "Epilepsy",  
      "Status epilepticus"  
    ]
  },
  {
    name: "Phenytoin",  
    dose: 10,  
    frequency: "mg/kg/dose",  
    formula: "Given as bolus over 30-60 min",  
    category: "Antiepileptics",  
    indications: [  
      "Seizures",  
      "Epilepsy",  
      "Status epilepticus"  
    ]
  },
  {
    name: "Mannitol stat",  
    dose: 10,  
    frequency: "mg/kg/dose",  
    formula: "Given as bolus over 30-60 min",  
    category: "Antiepileptics",  
    indications: [  
      "Increased intracranial pressure",  
      "Cerebral edema",  
      "Seizures"  
    ]
  },
  {
    name: "Mannitol maintenance",  
    dose: 5,  
    frequency: "mg/kg/dose",  
    formula: "Given 6 hourly 5 days",  
    category: "Antiepileptics",  
    indications: [  
      "Increased intracranial pressure",  
      "Cerebral edema",  
      "Seizures"  
    ]
  },
  
  // Pulmonary Hypertension
  {
    name: "Sildenafil (50,100,125 mg)",  
    dose: 1,  
    frequency: "mg/kg/dose",  
    formula: "Given orally",  
    category: "Pulmonary Vasodilators",  
    indications: [  
      "Pulmonary hypertension",  
      "Pulmonary arterial hypertension"  
    ]
  },
  {
    name: "Benprost 20mcg",  
    dose: 1,  
    frequency: "mcg/kg/dose",  
    formula: "mcg/kg/dose/TDS",  
    category: "Pulmonary Vasodilators",  
    indications: [  
      "Pulmonary hypertension",  
      "Pulmonary arterial hypertension"  
    ]
  },
  {
    name: "Bosmon 62.5mcg",  
    dose: 1,  
    frequency: "mcg/kg/dose",  
    formula: "1mcg/kg/dose/BD",  
    category: "Pulmonary Vasodilators",  
    indications: [  
      "Pulmonary hypertension",  
      "Pulmonary arterial hypertension"  
    ]
  },

  // Nebulizers
  {
    name: "Ventolin",  
    dose: 2.5,  
    frequency: "ml/kg/dose",  
    formula: "Nebulised over 15-20 min",  
    category: "Bronchodilators",  
    indications: [  
      "Asthma",  
      "COPD",  
      "Chronic bronchitis"  
    ]
  },
  {
    name: "Atem <1 year",  
    dose: 1,  
    frequency: "ml/dose",  
    formula: "Nebulised over 15-20 min",  
    category: "Bronchodilators",  
    indications: [  
      "Asthma",  
      "COPD",  
      "Chronic bronchitis"  
    ]
  },
  {
    name: "Atem >1 year",  
    dose: 2.5,  
    frequency: "ml/dose",  
    formula: "Nebulised over 15-20 min",  
    category: "Bronchodilators",  
    indications: [  
      "Asthma",  
      "COPD",  
      "Chronic bronchitis"  
    ]
  },

  // Bronchodilators
  {
    name: "Terbutaline loading min",  
    dose: 2,  
    frequency: "mcg/kg/min",  
    formula: "Given as continuous infusion",  
    category: "Bronchodilators",  
    indications: [  
      "Asthma",  
      "COPD",  
      "Chronic bronchitis"  
    ]
  },
  {
    name: "Terbutaline loading max",  
    dose: 10,  
    frequency: "mcg/kg/min",  
    formula: "Given as continuous infusion",  
    category: "Bronchodilators",  
    indications: [  
      "Asthma",  
      "COPD",  
      "Chronic bronchitis"  
    ]
  },
  {
    name: "Terbutaline maintenance min",  
    dose: 0.2,  
    frequency: "mcg/kg/min",  
    formula: "Given as continuous infusion",  
    category: "Bronchodilators",  
    indications: [  
      "Asthma",  
      "COPD",  
      "Chronic bronchitis"  
    ]
  },
  {
    name: "Terbutaline maintenance max",  
    dose: 0.4,  
    frequency: "mcg/kg/min",  
    formula: "Given as continuous infusion",  
    category: "Bronchodilators",  
    indications: [  
      "Asthma",  
      "COPD",  
      "Chronic bronchitis"  
    ]
  },
  {
    name: "Mgso4 min",  
    dose: 25,  
    frequency: "mg/kg/dose",  
    formula: "25mg/kg",  
    category: "Bronchodilators",  
    indications: [  
      "Asthma",  
      "COPD",  
      "Chronic bronchitis"  
    ]
  },
  {
    name: "Mgso4 max",  
    dose: 50,  
    frequency: "mg/kg/dose",  
    formula: "50mg/kg",  
    category: "Bronchodilators",  
    indications: [  
      "Asthma",  
      "COPD",  
      "Chronic bronchitis"  
    ]
  },

  // Hypercyanotic Spells
  {
    name: "Esmolol 100mcg",  
    dose: 100,  
    frequency: "mcg/kg/dose",  
    formula: "100-500 mcg/kg over 1 minute",  
    category: "Antiarrythmics",  
    indications: [  
      "Supraventricular tachycardia",  
      "Atrial fibrillation",  
      "Atrial flutter"  
    ]
  },
  {
    name: "Esmolol 200mcg",  
    dose: 200,  
    frequency: "mcg/kg/dose",  
    formula: "100-500 mcg/kg over 1 minute",  
    category: "Antiarrythmics",  
    indications: [  
      "Supraventricular tachycardia",  
      "Atrial fibrillation",  
      "Atrial flutter"  
    ]
  },
  {
    name: "Esmolol 500mcg",  
    dose: 500,  
    frequency: "mcg/kg/dose",  
    formula: "100-500 mcg/kg over 1 minute",  
    category: "Antiarrythmics",  
    indications: [  
      "Supraventricular tachycardia",  
      "Atrial fibrillation",  
      "Atrial flutter"  
    ]
  },
  {
    name: "Morphine",  
    dose: 0.1,  
    frequency: "mg/kg/dose",  
    formula: "0.1 mg/kg IV, IM, SC",  
    category: "Opioids",  
    indications: [  
      "Pain",  
      "Dyspnea",  
      "Anxiety"  
    ]
  },
  {
    name: "Phenylephrine 5mcg",  
    dose: 5,  
    frequency: "mcg/kg/dose",  
    formula: "5-20 mcg/kg every 10-15 minutes",  
    category: "Vasoconstrictors",  
    indications: [  
      "Hypotension",  
      "Bradycardia",  
      "Cardiac arrest"  
    ]
  },
  {
    name: "Phenylephrine 20mcg",  
    dose: 20,  
    frequency: "mcg/kg/dose",  
    formula: "5-20 mcg/kg every 10-15 minutes",  
    category: "Vasoconstrictors",  
    indications: [  
      "Hypotension",  
      "Bradycardia",  
      "Cardiac arrest"  
    ]
  },
  {
    name: "Propranolol 0.015",  
    dose: 0.015,  
    frequency: "mg/kg/dose",  
    formula: "0.015-0.02 mg/kg IV",  
    category: "Beta blockers",  
    indications: [  
      "Hypertension",  
      "Angina pectoris",  
      "Heart failure"  
    ]
  },
  {
    name: "Propranolol 0.02",  
    dose: 0.02,  
    frequency: "mg/kg/dose",  
    formula: "0.015-0.02 mg/kg IV",  
    category: "Beta blockers",  
    indications: [  
      "Hypertension",  
      "Angina pectoris",  
      "Heart failure"  
    ]
  },

  // Syrups
  {
    name: "Syp. Amoxil",  
    dosage: "50mg/kg/day",  
    formulation: "125mg/5ml",  
    frequency: "BD/TDS",  
    max: "1g/day",  
    category: "Antibiotics",  
    indications: [  
      "Bacterial infections",  
      "Urinary tract infections",  
      "Skin infections"  
    ]
  },
  {
    name: "Syp. Calamox",  
    dosage: "30-50mg/kg/day",  
    formulation: "156mg/5ml",  
    frequency: "BD/TDS",  
    category: "Antibiotics",  
    indications: [  
      "Bacterial infections",  
      "Urinary tract infections",  
      "Skin infections"  
    ]
  },
  {
    name: "Syp. Azit",  
    dosage: "12-15mg/kg/day",  
    formulation: "200mg/5ml",  
    frequency: "OD",  
    category: "Antibiotics",  
    indications: [  
      "Bacterial infections",  
      "Urinary tract infections",  
      "Skin infections"  
    ]
  },
  {
    name: "Syp. Flagyl",  
    dosage: "20-30mg/kg/day",  
    formulation: "100mg/5ml",  
    frequency: "BD/TDS",  
    category: "Antibiotics",  
    indications: [  
      "Bacterial infections",  
      "Urinary tract infections",  
      "Skin infections"  
    ]
  },
  {
    name: "Syp. Septran",  
    dosage: "50-60mg/kg/day",  
    formulation: "200/40mg/5ml",  
    frequency: "BD",  
    category: "Antibiotics",  
    indications: [  
      "Bacterial infections",  
      "Urinary tract infections",  
      "Skin infections"  
    ]
  },
  {
    name: "Syp. Velosef",  
    dosage: "25-50mg/kg/day",  
    formulation: "125mg/5ml",  
    frequency: "BD",  
    category: "Antibiotics",  
    indications: [  
      "Bacterial infections",  
      "Urinary tract infections",  
      "Skin infections"  
    ]
  },
  {
    name: "Syp. Nitazide",  
    dosage: "100mg BD",  
    formulation: "100mg/5ml",  
    frequency: "BD",  
    category: "Antibiotics",  
    indications: [  
      "Bacterial infections",  
      "Urinary tract infections",  
      "Skin infections"  
    ]
  },

  // Reversals
  {
    name: "Atropine",  
    dose: 0.01,  
    frequency: "mg/kg/dose",  
    formula: "0.01-0.02 mg/kg IV",  
    category: "Reversals",  
    indications: [  
      "Bradycardia",  
      "Asystole",  
      "Pulseless electrical activity"  
    ]
  },
  {
    name: "Edrophonium",  
    dose: 0.2,  
    frequency: "mg/kg/dose",  
    formula: "0.2 mg/kg IV",  
    category: "Reversals",  
    indications: [  
      "Myasthenia gravis",  
      "Lambert-Eaton myasthenic syndrome"  
    ]
  },
  {
    name: "Flumazenil",  
    dose: 0.01,  
    frequency: "mg/kg/dose",  
    formula: "0.01 mg/kg IV",  
    category: "Reversals",  
    indications: [  
      "Benzodiazepine overdose",  
      "Sedation reversal"  
    ]
  },
  {
    name: "Glycopyrrolate",  
    dose: 0.005,  
    frequency: "mg/kg/dose",  
    formula: "0.005-0.01 mg/kg IV",  
    category: "Reversals",  
    indications: [  
      "Bradycardia",  
      "Asystole",  
      "Pulseless electrical activity"  
    ]
  },
  {
    name: "Narcan",  
    dose: 0.01,  
    frequency: "mg/kg/dose",  
    formula: "0.01-0.1 mg/kg/dose IV",  
    category: "Reversals",  
    indications: [  
      "Opioid overdose",  
      "Respiratory depression"  
    ]
  },
  {
    name: "Neostigmine",  
    dose: 0.05,  
    frequency: "mg/kg/dose",  
    formula: "0.05-0.07 mg/kg IV",  
    category: "Reversals",  
    indications: [  
      "Myasthenia gravis",  
      "Lambert-Eaton myasthenic syndrome"  
    ]
  },
  {
    name: "Physostigmine",  
    dose: 0.01,  
    frequency: "mg/kg/dose",  
    formula: "0.01 mg/kg IV",  
    category: "Reversals",  
    indications: [  
      "Anticholinergic toxicity",  
      "Delirium"  
    ]
  },

  // Insulin
  {
    name: "Insulin",  
    dose: 0.02,  
    frequency: "U/kg/hr",  
    formula: "0.02-0.1 U/kg/hr",  
    category: "Insulin",  
    indications: [  
      "Diabetes mellitus",  
      "Hyperglycemia",  
      "Ketoacidosis"  
    ]
  },

  // Blood Products
  {
    name: "Platelets",  
    dose: 5,  
    frequency: "ml/kg/dose",  
    formula: "5-10 ml/kg will raise count 50-100x10^9/L",  
    category: "Blood Products",  
    indications: [  
      "Thrombocytopenia",  
      "Bleeding disorders",  
      "Surgery"  
    ]
  },
  {
    name: "PRBC",  
    dose: 10,  
    frequency: "ml/kg/dose",  
    formula: "10 ml/kg will raise Hg by 1 gm",  
    category: "Blood Products",  
    indications: [  
      "Anemia",  
      "Blood loss",  
      "Surgery"  
    ]
  },
  {
    name: "FFP",  
    dose: 10,  
    frequency: "ml/kg/dose",  
    formula: "10 ml/kg will raise the platelet count by 50,000-100,000/uL",  
    category: "Blood Products",  
    indications: [  
      "Coagulopathy",  
      "Bleeding disorders",  
      "Surgery"  
    ]
  },

  // Hyperkalemia
  {
    name: "Dextrose",  
    dose: 0.5,  
    frequency: "g/kg/dose",  
    formula: "0.5-1 g/kg IV over 15 min",  
    category: "Hyperkalemia",  
    indications: [  
      "Hyperkalemia",  
      "Hypoglycemia",  
      "Seizures"  
    ]
  },
  {
    name: "Insulin",  
    dose: 0.2,  
    frequency: "U/g Dextrose",  
    formula: "0.2-0.3 U Reg Insulin/g Dextrose",  
    category: "Hyperkalemia",  
    indications: [  
      "Hyperkalemia",  
      "Hypoglycemia",  
      "Seizures"  
    ]
  },
  {
    name: "Ca++",  
    dose: 4,  
    frequency: "mg/kg/dose",  
    formula: "4-5 mg/kg IV over 5-10 min",  
    category: "Hyperkalemia",  
    indications: [  
      "Hyperkalemia",  
      "Hypocalcemia",  
      "Tetany"  
    ]
  },
  {
    name: "Kayexelate",  
    dose: 1,  
    frequency: "gm/kg/dose",  
    formula: "1-2 gm/kg PO, PR",  
    category: "Hyperkalemia",  
    indications: [  
      "Hyperkalemia",  
      "Hypokalemia",  
      "Electrolyte imbalance"  
    ]
  },

  // Infusions
  {
    name: "Dopamine",  
    dose: 5,  
    frequency: "mcg/kg/min",  
    formula: "Given as continuous infusion",  
    category: "Vasoactive Medications",  
    indications: [  
      "Hypotension",  
      "Bradycardia",  
      "Cardiac arrest"  
    ]
  },
  {
    name: "Adrenaline 0.05mcg",  
    dose: 0.05,  
    frequency: "mcg/kg/min",  
    formula: "0.05 mcg/kg/min",  
    category: "Vasoactive Medications",  
    indications: [  
      "Hypotension",  
      "Bradycardia",  
      "Cardiac arrest"  
    ]
  },
  {
    name: "Adrenaline 0.1mcg",  
    dose: 0.1,  
    frequency: "mcg/kg/min",  
    formula: "0.1 mcg/kg/min",  
    category: "Vasoactive Medications",  
    indications: [  
      "Hypotension",  
      "Bradycardia",  
      "Cardiac arrest"  
    ]
  },
  {
    name: "Nor-Adrenaline 0.05mcg",  
    dose: 0.05,  
    frequency: "mcg/kg/min",  
    formula: "0.05 mcg/kg/min",  
    category: "Vasoactive Medications",  
    indications: [  
      "Hypotension",  
      "Bradycardia",  
      "Cardiac arrest"  
    ]
  },
  {
    name: "Nor-Adrenaline 0.1mcg",  
    dose: 0.1,  
    frequency: "mcg/kg/min",  
    formula: "0.1 mcg/kg/min",  
    category: "Vasoactive Medications",  
    indications: [  
      "Hypotension",  
      "Bradycardia",  
      "Cardiac arrest"  
    ]
  },
  {
    name: "Fentanyl 1mcg",  
    dose: 1,  
    frequency: "mcg/kg/hr",  
    formula: "1 mcg/kg/hr",  
    category: "Opioids",  
    indications: [  
      "Pain",  
      "Dyspnea",  
      "Anxiety"  
    ]
  },
  {
    name: "Fentanyl 4mcg",  
    dose: 4,  
    frequency: "mcg/kg/hr",  
    formula: "4 mcg/kg/hr",  
    category: "Opioids",  
    indications: [  
      "Pain",  
      "Dyspnea",  
      "Anxiety"  
    ]
  },
  {
    name: "Lasix 0.3mg",  
    dose: 0.3,  
    frequency: "mg/kg/hr",  
    formula: "0.3mg/kg/hr",  
    category: "Diuretics",  
    indications: [  
      "Edema",  
      "Hypertension",  
      "Heart failure"  
    ]
  },
  {
    name: "Lasix 1mg",  
    dose: 1,  
    frequency: "mg/kg/hr",  
    formula: "1 mg/kg/hr",  
    category: "Diuretics",  
    indications: [  
      "Edema",  
      "Hypertension",  
      "Heart failure"  
    ]
  },
  {
    name: "Aminophylline",  
    dose: 1,  
    frequency: "mg/kg/hr",  
    formula: "1 mg/kg/hr",  
    category: "Bronchodilators",  
    indications: [  
      "Asthma",  
      "COPD",  
      "Chronic bronchitis"  
    ]
  }
];

// Function to calculate medication dosages based on weight
function calculateMedications(weight) {
  const medsTbody = document.getElementById("meds-tbody"); // Get tbody for medication calculations
  medsTbody.innerHTML = ''; // Clear previous results
  medications.forEach(med => {
    const dose = med.dose * weight; // Calculate medication dose based on weight
    if (dose > 0) { // Make sure the dose is positive
      medsTbody.insertAdjacentHTML('beforeend', `<tr><td>${med.name}</td><td>${dose.toFixed(2)} ${med.frequency}</td><td>${med.formula}</td><td>${med.indications.join(", ")}</td></tr>`);
    }
  });
}

// Export medications array for use in other modules
export default medications;  // Ensure medications data can be imported elsewhere in the application
