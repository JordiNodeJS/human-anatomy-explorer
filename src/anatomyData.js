/**
 * Comprehensive UBERON ontology data for human anatomy structures
 * Contains definitions, anatomical details, clinical significance, and references
 */

export const anatomyData = {
  // === BRAIN STRUCTURES ===
  UBERON_0000955: {
    name: "Brain",
    description:
      "The central organ of the nervous system, composed of billions of neurons and glial cells. The brain processes sensory information, controls motor functions, and is the seat of consciousness, cognition, and emotion.",
    location:
      "Located within the cranial cavity of the skull, protected by the meninges and surrounded by cerebrospinal fluid.",
    anatomy:
      "Divided into three main regions: the forebrain (cerebrum and diencephalon), midbrain (mesencephalon), and hindbrain (cerebellum, pons, and medulla oblongata). Weighs approximately 1.4 kg in adults.",
    keyFacts: [
      "Contains approximately 86 billion neurons",
      "Uses about 20% of the body's oxygen and energy",
      "Generates enough electricity to power a small lightbulb",
      "The cerebral cortex contains about 16 billion neurons",
    ],
    clinicalSignificance:
      "Central to virtually all neurological and psychiatric conditions. Damage or dysfunction can result in motor deficits, sensory loss, cognitive impairment, personality changes, and altered consciousness.",
    conditions: [
      "Stroke (cerebrovascular accident)",
      "Traumatic brain injury",
      "Alzheimer's disease",
      "Parkinson's disease",
      "Brain tumors",
      "Epilepsy",
    ],
    relatedStructures: ["UBERON_0000956", "UBERON_0002037", "UBERON_0001898"],
    furtherReading: [
      "Gray's Anatomy, 42nd Edition - Chapter 22: Brain",
      "Principles of Neural Science, 6th Edition - Kandel et al.",
      "The Human Brain Book - DK Publishing",
    ],
  },

  UBERON_0000956: {
    name: "Cerebral Cortex",
    description:
      "The outermost layer of the cerebrum, composed of folded grey matter. It is responsible for higher brain functions including perception, cognition, language, memory, and voluntary movement.",
    location:
      "Forms the outer surface of the cerebral hemispheres, covering the underlying white matter and deeper brain structures.",
    anatomy:
      "Approximately 2-4 mm thick, with a surface area of about 2,500 cm² when unfolded. Organized into six distinct layers of neurons with specific functions. Contains gyri (ridges) and sulci (grooves).",
    keyFacts: [
      "Contains about 16 billion neurons",
      "Divided into four lobes: frontal, parietal, temporal, and occipital",
      "The neocortex makes up about 90% of the cerebral cortex",
      "Larger in humans relative to brain size compared to other mammals",
    ],
    clinicalSignificance:
      "Damage to specific cortical regions produces predictable deficits. The cortex is affected in dementia, strokes, and many psychiatric conditions.",
    conditions: [
      "Cortical strokes",
      "Frontotemporal dementia",
      "Aphasia",
      "Apraxia",
      "Cortical blindness",
    ],
    relatedStructures: ["UBERON_0000955", "UBERON_0001870", "UBERON_0001871"],
    furtherReading: [
      "The Cerebral Cortex of Man - Penfield & Rasmussen",
      "Cortical Function: A View from the Thalamus - Sherman & Guillery",
    ],
  },

  UBERON_0001870: {
    name: "Frontal Cortex",
    description:
      "The anterior portion of the cerebral cortex, crucial for executive functions, decision-making, planning, personality, and voluntary motor control.",
    location:
      "Anterior to the central sulcus and superior to the lateral sulcus in each cerebral hemisphere.",
    anatomy:
      "Contains the primary motor cortex (precentral gyrus), premotor cortex, supplementary motor area, and prefrontal cortex. The prefrontal cortex is highly developed in humans.",
    keyFacts: [
      "Represents about 1/3 of the total cortical surface area",
      "Contains Broca's area for speech production (left hemisphere)",
      "Last brain region to fully mature (around age 25)",
      "Critical for working memory and attention",
    ],
    clinicalSignificance:
      "Frontal lobe damage can cause dramatic personality changes, impaired judgment, motor deficits, and speech problems. Important in schizophrenia and ADHD research.",
    conditions: [
      "Frontotemporal dementia",
      "Traumatic brain injury effects",
      "Broca's aphasia",
      "Frontal lobe syndrome",
    ],
    relatedStructures: ["UBERON_0000956", "UBERON_0001871", "UBERON_0002037"],
    furtherReading: [
      "The Frontal Lobes - Stuss & Knight",
      "Human Frontal Lobes - Miller & Cummings",
    ],
  },

  UBERON_0001871: {
    name: "Temporal Lobe",
    description:
      "A major lobe of the cerebral cortex involved in auditory processing, memory formation, language comprehension, and emotional responses.",
    location:
      "Located beneath the lateral sulcus on both cerebral hemispheres, anterior to the occipital lobe and inferior to the parietal lobe.",
    anatomy:
      "Contains the primary auditory cortex, Wernicke's area (language comprehension), hippocampus (memory), and amygdala (emotion). The medial temporal lobe is crucial for declarative memory.",
    keyFacts: [
      "Houses the hippocampus, essential for forming new memories",
      "Contains Wernicke's area for language comprehension",
      "The amygdala processes emotional responses and fear",
      "Important for face recognition (fusiform face area)",
    ],
    clinicalSignificance:
      "Temporal lobe epilepsy is the most common form of focal epilepsy. Damage can cause memory impairment, auditory processing problems, and language deficits.",
    conditions: [
      "Temporal lobe epilepsy",
      "Wernicke's aphasia",
      "Amnesia (medial temporal damage)",
      "Auditory agnosia",
    ],
    relatedStructures: ["UBERON_0000956", "UBERON_0001870", "UBERON_0002421"],
    furtherReading: [
      "The Temporal Lobes and Limbic System - Gloor",
      "Memory: From Mind to Molecules - Squire & Kandel",
    ],
  },

  UBERON_0001898: {
    name: "Hypothalamus",
    description:
      "A small but vital region of the brain that controls the autonomic nervous system and the endocrine system. It regulates body temperature, hunger, thirst, sleep, and circadian rhythms.",
    location:
      "Located below the thalamus and above the brainstem, forming the floor and part of the lateral walls of the third ventricle.",
    anatomy:
      "Contains numerous nuclei including the suprachiasmatic nucleus (circadian rhythm), paraventricular nucleus (hormone release), and arcuate nucleus (appetite). Connected to the pituitary gland via the infundibulum.",
    keyFacts: [
      "Weighs only about 4 grams (less than 1% of brain weight)",
      "Controls release of hormones from the pituitary gland",
      "The suprachiasmatic nucleus is the master circadian clock",
      "Contains neurons sensitive to blood glucose levels",
    ],
    clinicalSignificance:
      "Hypothalamic dysfunction can cause profound disturbances in homeostasis, affecting temperature regulation, appetite, sleep patterns, and hormone balance.",
    conditions: [
      "Hypothalamic obesity",
      "Diabetes insipidus",
      "Sleep disorders",
      "Hypothalamic tumors",
      "Kallmann syndrome",
    ],
    relatedStructures: ["UBERON_0000955", "UBERON_0001897", "UBERON_0002037"],
    furtherReading: [
      "The Hypothalamus - Neuroendocrine Control",
      "Hypothalamic Integration - Swaab",
    ],
  },

  UBERON_0001897: {
    name: "Thalamus",
    description:
      "A bilateral structure that serves as the main relay station for sensory and motor signals to the cerebral cortex. It also plays roles in consciousness, sleep, and alertness.",
    location:
      "Located in the center of the brain, above the brainstem and between the cerebral hemispheres, forming most of the lateral walls of the third ventricle.",
    anatomy:
      "Consists of numerous nuclei grouped into anterior, medial, lateral, and posterior regions. Each nucleus has specific connections with cortical areas and processes different types of information.",
    keyFacts: [
      "All sensory pathways (except olfaction) relay through the thalamus",
      "Contains about 50-60 different nuclei",
      "Critical for attention and consciousness",
      "Involved in regulating sleep-wake cycles",
    ],
    clinicalSignificance:
      "Thalamic lesions can cause sensory loss, movement disorders, memory impairment, and alterations in consciousness. Important in chronic pain syndromes.",
    conditions: [
      "Thalamic pain syndrome",
      "Fatal familial insomnia",
      "Thalamic aphasia",
      "Movement disorders",
    ],
    relatedStructures: ["UBERON_0000955", "UBERON_0001898", "UBERON_0002421"],
    furtherReading: [
      "The Thalamus - Jones",
      "Exploring the Thalamus and Its Role in Cortical Function - Sherman & Guillery",
    ],
  },

  UBERON_0002037: {
    name: "Cerebellum",
    description:
      'The "little brain" located at the back of the skull, essential for motor coordination, balance, posture, and motor learning. It fine-tunes movements initiated by other brain regions.',
    location:
      "Situated in the posterior cranial fossa, beneath the occipital lobes of the cerebrum and behind the brainstem.",
    anatomy:
      "Divided into two hemispheres connected by the vermis. Contains three main lobes and a highly folded cortex. The cerebellar cortex contains more neurons than the rest of the brain combined.",
    keyFacts: [
      "Contains about 69 billion neurons (80% of brain's total)",
      "Receives input from 200 million nerve fibers",
      "Coordinates timing and precision of movements",
      "Involved in motor learning and automaticity",
    ],
    clinicalSignificance:
      "Cerebellar damage causes ataxia, dysarthria, nystagmus, and intention tremor. Affects coordination rather than strength. Important in alcoholic brain damage.",
    conditions: [
      "Cerebellar ataxia",
      "Spinocerebellar ataxias",
      "Cerebellar stroke",
      "Cerebellar tumors",
      "Alcoholic cerebellar degeneration",
    ],
    relatedStructures: ["UBERON_0000955", "UBERON_0001896", "UBERON_0001898"],
    furtherReading: [
      "The Cerebellum and Cognition - Schmahmann",
      "The Cerebellum: New Visions - Bhidayasiri",
    ],
  },

  UBERON_0002421: {
    name: "Hippocampus",
    description:
      "A seahorse-shaped structure in the medial temporal lobe essential for the formation of new declarative memories and spatial navigation.",
    location:
      "Located in the medial temporal lobe, curving around the thalamus. Part of the limbic system.",
    anatomy:
      "Contains distinct subregions: dentate gyrus, CA1-CA4 fields, and subiculum. Features a unique circuit for memory processing and is one of few brain areas with adult neurogenesis.",
    keyFacts: [
      "One of the first regions affected in Alzheimer's disease",
      "Contains place cells for spatial memory and navigation",
      "One of the few sites of adult neurogenesis",
      "Essential for converting short-term to long-term memories",
    ],
    clinicalSignificance:
      "Hippocampal damage causes anterograde amnesia. Atrophy is a hallmark of Alzheimer's disease. Important in temporal lobe epilepsy.",
    conditions: [
      "Alzheimer's disease",
      "Temporal lobe epilepsy",
      "Transient global amnesia",
      "Hypoxic brain injury",
    ],
    relatedStructures: ["UBERON_0001871", "UBERON_0002421", "UBERON_0000955"],
    furtherReading: [
      "The Hippocampus Book - Andersen et al.",
      "Memory and the Hippocampus - Squire",
    ],
  },

  // === CARDIOVASCULAR ===
  UBERON_0000948: {
    name: "Heart",
    description:
      "A muscular organ that pumps blood throughout the body via the circulatory system, supplying oxygen and nutrients while removing metabolic waste.",
    location:
      "Located in the mediastinum of the thoracic cavity, between the lungs, slightly left of the midline, posterior to the sternum.",
    anatomy:
      "A four-chambered organ consisting of two atria and two ventricles. Contains four valves that ensure unidirectional blood flow. Surrounded by the pericardium. Weighs 250-350 grams in adults.",
    keyFacts: [
      "Beats approximately 100,000 times per day",
      "Pumps about 5 liters of blood per minute at rest",
      "The heart has its own electrical conduction system",
      "Coronary arteries supply blood to the heart muscle itself",
    ],
    clinicalSignificance:
      "Heart disease is the leading cause of death globally. The heart is subject to numerous conditions affecting its rhythm, muscle, valves, and blood supply.",
    conditions: [
      "Coronary artery disease",
      "Heart failure",
      "Arrhythmias (atrial fibrillation, ventricular tachycardia)",
      "Valvular heart disease",
      "Cardiomyopathy",
      "Myocardial infarction (heart attack)",
    ],
    relatedStructures: ["UBERON_0002048", "UBERON_0000178", "UBERON_0001981"],
    furtherReading: [
      "Braunwald's Heart Disease",
      "Hurst's The Heart",
      "Gray's Anatomy - Cardiovascular System",
    ],
  },

  // === RESPIRATORY ===
  UBERON_0002048: {
    name: "Lungs",
    description:
      "Paired respiratory organs that facilitate gas exchange, taking in oxygen and expelling carbon dioxide. Essential for cellular respiration throughout the body.",
    location:
      "Occupy most of the thoracic cavity, on either side of the heart and mediastinum. Extend from above the clavicles to the diaphragm.",
    anatomy:
      "The right lung has three lobes, the left has two (to accommodate the heart). Each lung is divided into bronchopulmonary segments. Contains approximately 300-500 million alveoli for gas exchange.",
    keyFacts: [
      "Total surface area of alveoli is about 70 m² (size of a tennis court)",
      "Process about 10,000 liters of air daily",
      "The right lung is slightly larger than the left",
      "Alveolar walls are only one cell thick for efficient gas exchange",
    ],
    clinicalSignificance:
      "Lung diseases are among the most common medical conditions worldwide. The lungs are vulnerable to infection, inflammation, and damage from inhaled substances.",
    conditions: [
      "Pneumonia",
      "Chronic obstructive pulmonary disease (COPD)",
      "Asthma",
      "Lung cancer",
      "Pulmonary embolism",
      "Pulmonary fibrosis",
    ],
    relatedStructures: ["UBERON_0000948", "UBERON_0000977", "UBERON_0001043"],
    furtherReading: [
      "Pulmonary Pathophysiology - West",
      "Murray & Nadel's Textbook of Respiratory Medicine",
      "Fishman's Pulmonary Diseases and Disorders",
    ],
  },

  // === DIGESTIVE ===
  UBERON_0000945: {
    name: "Stomach",
    description:
      "A muscular, J-shaped organ of the digestive system that stores food, mixes it with gastric juices, and begins protein digestion through the action of pepsin and hydrochloric acid.",
    location:
      "Located in the upper left quadrant of the abdomen, between the esophagus and small intestine, beneath the diaphragm.",
    anatomy:
      "Divided into cardia, fundus, body, and pylorus regions. Has three muscle layers for churning. Lined with mucosa containing gastric glands that secrete acid, enzymes, and protective mucus.",
    keyFacts: [
      "Can expand to hold 1-1.5 liters of food",
      "Produces 2-3 liters of gastric juice daily",
      "Gastric acid has a pH of 1.5-3.5",
      "Complete emptying takes 4-5 hours after a meal",
    ],
    clinicalSignificance:
      "The stomach is susceptible to ulceration, infection (H. pylori), and cancer. Acid production can cause reflux and damage to the esophagus.",
    conditions: [
      "Peptic ulcer disease",
      "Gastritis",
      "Gastric cancer",
      "Gastroparesis",
      "Helicobacter pylori infection",
    ],
    relatedStructures: ["UBERON_0002107", "UBERON_0001043", "UBERON_0001155"],
    furtherReading: [
      "Sleisenger and Fordtran's Gastrointestinal and Liver Disease",
      "Physiology of the Gastrointestinal Tract - Johnson",
    ],
  },

  UBERON_0002107: {
    name: "Liver",
    description:
      "The largest solid organ in the body, performing over 500 vital functions including metabolism, detoxification, protein synthesis, and bile production.",
    location:
      "Occupies the right hypochondriac and epigastric regions of the abdomen, protected by the lower rib cage. Weighs approximately 1.5 kg.",
    anatomy:
      "Divided into right and left lobes. Receives dual blood supply from the hepatic artery and portal vein. Contains hepatocytes organized into lobules around central veins.",
    keyFacts: [
      "Receives about 25% of cardiac output",
      "Can regenerate up to 75% of its mass",
      "Produces 500-1000 mL of bile daily",
      "Contains about 100 billion hepatocytes",
    ],
    clinicalSignificance:
      "The liver is essential for life and has remarkable regenerative capacity. Liver disease is common and can progress from inflammation to cirrhosis and failure.",
    conditions: [
      "Hepatitis (viral, alcoholic, autoimmune)",
      "Cirrhosis",
      "Non-alcoholic fatty liver disease",
      "Hepatocellular carcinoma",
      "Liver failure",
    ],
    relatedStructures: ["UBERON_0000945", "UBERON_0001155", "UBERON_0002106"],
    furtherReading: [
      "Zakim and Boyer's Hepatology",
      "Schiff's Diseases of the Liver",
      "The Liver: Biology and Pathobiology - Arias",
    ],
  },

  UBERON_0001155: {
    name: "Colon",
    description:
      "The large intestine, responsible for absorbing water and electrolytes from digested food residue, forming and storing feces, and housing the gut microbiome.",
    location:
      "Frames the small intestine in the abdominal cavity, extending from the cecum to the rectum. Approximately 1.5 meters long.",
    anatomy:
      "Divided into cecum, ascending, transverse, descending, and sigmoid colon. Has haustra (pouches) and taeniae coli (muscle bands). Contains billions of bacteria forming the gut microbiome.",
    keyFacts: [
      "Absorbs about 1.5 liters of water daily",
      "Contains trillions of bacteria (gut microbiome)",
      "Transit time through colon is 12-36 hours",
      "The appendix is attached to the cecum",
    ],
    clinicalSignificance:
      "Colorectal cancer is the third most common cancer. The colon is affected by inflammatory bowel disease and is essential for microbiome health.",
    conditions: [
      "Colorectal cancer",
      "Ulcerative colitis",
      "Crohn's disease (can affect colon)",
      "Diverticulosis and diverticulitis",
      "Irritable bowel syndrome",
    ],
    relatedStructures: ["UBERON_0000945", "UBERON_0002107", "UBERON_0001052"],
    furtherReading: [
      "Sleisenger and Fordtran's Gastrointestinal and Liver Disease",
      "The Microbiome and Human Health - Lynch & Pedersen",
    ],
  },

  // === URINARY ===
  UBERON_0002113: {
    name: "Kidney",
    description:
      "Paired bean-shaped organs that filter blood, remove waste products, regulate fluid and electrolyte balance, and produce hormones including renin and erythropoietin.",
    location:
      "Located retroperitoneally in the posterior abdominal wall, the right kidney slightly lower than the left due to the liver.",
    anatomy:
      "Each kidney contains about 1 million nephrons. Divided into cortex and medulla. Blood enters via renal arteries and exits via renal veins. Urine collects in the renal pelvis.",
    keyFacts: [
      "Filter approximately 180 liters of blood daily",
      "Produce 1-2 liters of urine daily",
      "Receive 20-25% of cardiac output",
      "Regulate blood pressure through the renin-angiotensin system",
    ],
    clinicalSignificance:
      "Kidney disease is increasingly common, particularly in diabetes and hypertension. End-stage renal disease requires dialysis or transplantation.",
    conditions: [
      "Chronic kidney disease",
      "Acute kidney injury",
      "Kidney stones (nephrolithiasis)",
      "Glomerulonephritis",
      "Polycystic kidney disease",
      "Renal cell carcinoma",
    ],
    relatedStructures: ["UBERON_0000948", "UBERON_0001255", "UBERON_0000178"],
    furtherReading: [
      "Brenner & Rector's The Kidney",
      "Comprehensive Clinical Nephrology - Johnson",
      "The Kidney: Physiology and Pathophysiology - Seldin & Giebisch",
    ],
  },

  UBERON_0001255: {
    name: "Urinary Bladder",
    description:
      "A hollow, muscular organ that stores urine produced by the kidneys before elimination through urination. Capable of significant expansion.",
    location:
      "Located in the pelvis, posterior to the pubic symphysis. In males, anterior to the rectum; in females, anterior to the uterus and vagina.",
    anatomy:
      "Has three layers: mucosa (transitional epithelium), muscularis (detrusor muscle), and adventitia/serosa. The trigone is a triangular region where ureters enter and urethra exits.",
    keyFacts: [
      "Can hold 400-600 mL comfortably",
      "Maximum capacity is about 800-1000 mL",
      "Urge to void begins at about 200-300 mL",
      "The detrusor muscle contracts to expel urine",
    ],
    clinicalSignificance:
      "Bladder dysfunction is common, particularly with aging. Bladder cancer is one of the most common malignancies, especially in smokers.",
    conditions: [
      "Bladder cancer",
      "Urinary tract infections",
      "Overactive bladder",
      "Urinary incontinence",
      "Neurogenic bladder",
    ],
    relatedStructures: ["UBERON_0002113", "UBERON_0001000", "UBERON_0000989"],
    furtherReading: [
      "Campbell-Walsh Urology",
      "Bladder Pathology - Sesterhenn & Cheng",
    ],
  },

  // === MUSCULOSKELETAL ===
  UBERON_0001013: {
    name: "Skeletal Muscle",
    description:
      "Voluntary muscle tissue attached to bones, responsible for body movement, posture maintenance, and heat production. Comprises about 40% of body weight.",
    location:
      "Distributed throughout the body, attached to bones via tendons. Major muscle groups include those of the limbs, trunk, head, and neck.",
    anatomy:
      "Composed of long, multinucleated fibers with characteristic striations. Organized into fascicles wrapped in connective tissue. Contains slow-twitch and fast-twitch fibers.",
    keyFacts: [
      "The human body has over 600 skeletal muscles",
      "Muscle contraction generates 85% of body heat",
      "Largest muscle is the gluteus maximus",
      "Smallest muscle is the stapedius in the ear",
    ],
    clinicalSignificance:
      "Muscle weakness and wasting occur in numerous conditions. Maintaining muscle mass is important for metabolic health and functional independence.",
    conditions: [
      "Muscular dystrophies",
      "Myasthenia gravis",
      "Polymyositis",
      "Sarcopenia (age-related muscle loss)",
      "Rhabdomyolysis",
    ],
    relatedStructures: ["UBERON_0002481", "UBERON_0001021", "UBERON_0000947"],
    furtherReading: [
      "Myology - Engel & Franzini-Armstrong",
      "Skeletal Muscle: Form and Function - MacIntosh",
    ],
  },

  UBERON_0002481: {
    name: "Bone Tissue",
    description:
      "Mineralized connective tissue that forms the skeleton, providing structural support, protection for organs, mineral storage, and housing bone marrow for blood cell production.",
    location:
      "Forms the entire skeleton of the body, including axial (skull, spine, ribs) and appendicular (limbs) bones.",
    anatomy:
      "Composed of compact (cortical) and spongy (trabecular) bone. Contains osteocytes, osteoblasts, and osteoclasts. Continually remodeled throughout life.",
    keyFacts: [
      "The adult skeleton contains 206 bones",
      "Bone is constantly being remodeled (turnover every 10 years)",
      "Stores 99% of body's calcium",
      "Red bone marrow produces blood cells",
    ],
    clinicalSignificance:
      "Bone health is crucial for mobility and quality of life. Osteoporosis affects millions and increases fracture risk.",
    conditions: [
      "Osteoporosis",
      "Osteoarthritis",
      "Fractures",
      "Bone cancer (primary and metastatic)",
      "Osteomyelitis",
    ],
    relatedStructures: ["UBERON_0001013", "UBERON_0002371", "UBERON_0001021"],
    furtherReading: [
      "Primer on the Metabolic Bone Diseases - ASBMR",
      "Bone Histomorphometry - Recker",
    ],
  },

  // === SKIN ===
  UBERON_0000014: {
    name: "Skin",
    description:
      "The largest organ of the body, forming the primary protective barrier against the environment. Regulates temperature, provides sensation, and synthesizes vitamin D.",
    location:
      "Covers the entire external surface of the body, with a total area of approximately 1.5-2 m² in adults.",
    anatomy:
      "Consists of three layers: epidermis (outer, keratinized), dermis (connective tissue), and hypodermis (subcutaneous fat). Contains hair follicles, sweat glands, and sebaceous glands.",
    keyFacts: [
      "Weighs approximately 3.5 kg (about 16% of body weight)",
      "Completely renews itself every 2-3 weeks",
      "Contains about 20 blood vessels per cm²",
      "Has approximately 300 sweat glands per cm²",
    ],
    clinicalSignificance:
      "Skin conditions are extremely common and range from cosmetic concerns to life-threatening malignancies. The skin reflects systemic health.",
    conditions: [
      "Melanoma and other skin cancers",
      "Psoriasis",
      "Eczema (atopic dermatitis)",
      "Acne",
      "Skin infections",
    ],
    relatedStructures: ["UBERON_0001013", "UBERON_0000178", "UBERON_0000966"],
    furtherReading: [
      "Fitzpatrick's Dermatology",
      "Skin: A Natural History - Jablonski",
    ],
  },

  // === ENDOCRINE ===
  UBERON_0002369: {
    name: "Adrenal Gland",
    description:
      "Paired endocrine glands located above the kidneys, producing hormones essential for metabolism, stress response, blood pressure regulation, and sexual characteristics.",
    location:
      "Situated on top of each kidney in the retroperitoneal space. The right is triangular, the left is crescentic.",
    anatomy:
      "Each gland has two distinct regions: outer cortex (produces corticosteroids and androgens) and inner medulla (produces catecholamines - epinephrine and norepinephrine).",
    keyFacts: [
      "Produce over 50 different hormones",
      "Cortisol follows a circadian rhythm (highest in morning)",
      "The medulla is derived from neural crest cells",
      'Essential for the "fight or flight" response',
    ],
    clinicalSignificance:
      "Adrenal dysfunction can cause life-threatening conditions. Both excess and deficiency of adrenal hormones cause significant disease.",
    conditions: [
      "Addison's disease (adrenal insufficiency)",
      "Cushing's syndrome (cortisol excess)",
      "Pheochromocytoma (adrenal medulla tumor)",
      "Adrenal incidentaloma",
      "Congenital adrenal hyperplasia",
    ],
    relatedStructures: ["UBERON_0002113", "UBERON_0002046", "UBERON_0001898"],
    furtherReading: [
      "Williams Textbook of Endocrinology",
      "The Adrenal Cortex - Idelman & Baulieu",
    ],
  },

  UBERON_0002046: {
    name: "Thyroid Gland",
    description:
      "A butterfly-shaped endocrine gland in the neck that produces thyroid hormones, which regulate metabolism, growth, development, and body temperature.",
    location:
      "Located in the anterior neck, wrapped around the front and sides of the trachea, just below the larynx.",
    anatomy:
      "Consists of two lobes connected by the isthmus. Contains follicles filled with colloid (thyroglobulin). Produces T3 and T4 hormones and calcitonin from parafollicular C cells.",
    keyFacts: [
      "Largest endocrine gland in the body",
      "Requires iodine for hormone synthesis",
      "Thyroid hormone affects virtually every cell in the body",
      "Normal weight is 15-25 grams",
    ],
    clinicalSignificance:
      "Thyroid disorders are common, affecting about 5% of the population. Both hyper- and hypothyroidism cause significant symptoms.",
    conditions: [
      "Hypothyroidism (Hashimoto's thyroiditis)",
      "Hyperthyroidism (Graves' disease)",
      "Thyroid nodules",
      "Thyroid cancer",
      "Goiter",
    ],
    relatedStructures: ["UBERON_0002369", "UBERON_0001898", "UBERON_0001043"],
    furtherReading: [
      "Werner & Ingbar's The Thyroid",
      "Thyroid Disease Manager - Endocrine Education",
    ],
  },

  // === LYMPHATIC ===
  UBERON_0002106: {
    name: "Spleen",
    description:
      "The largest lymphoid organ, filtering blood, recycling iron from old red blood cells, and serving as a reservoir of immune cells and platelets.",
    location:
      "Located in the left upper quadrant of the abdomen, posterior to the stomach and protected by the lower left ribs.",
    anatomy:
      "Contains red pulp (filters blood) and white pulp (immune function). Receives blood via the splenic artery. Has no afferent lymphatic vessels.",
    keyFacts: [
      "Filters about 250 mL of blood per minute",
      "Can hold about 200 mL of blood in reserve",
      "Removes old or damaged red blood cells",
      "Important for immunity against encapsulated bacteria",
    ],
    clinicalSignificance:
      "Splenomegaly can indicate various diseases. Asplenic patients are at increased risk for serious infections with encapsulated organisms.",
    conditions: [
      "Splenomegaly (enlarged spleen)",
      "Splenic rupture (trauma)",
      "Splenic infarction",
      "Hypersplenism",
      "Asplenia (functional or surgical)",
    ],
    relatedStructures: ["UBERON_0002107", "UBERON_0000178", "UBERON_0002371"],
    furtherReading: [
      "The Spleen: Structure, Function and Clinical Significance",
      "Immunology of the Spleen",
    ],
  },

  // === REPRODUCTIVE (Male) ===
  UBERON_0000473: {
    name: "Testis",
    description:
      "The male gonad, responsible for producing sperm and testosterone. Essential for male fertility and secondary sexual characteristics.",
    location:
      "Located within the scrotum, outside the body cavity to maintain the lower temperature required for spermatogenesis.",
    anatomy:
      "Contains seminiferous tubules (where sperm are produced) and Leydig cells (which produce testosterone). Connected to the body via the spermatic cord.",
    keyFacts: [
      "Produces 100-200 million sperm daily",
      "Optimal temperature for function is 2-4°C below body temperature",
      "Testosterone production begins at puberty",
      "The left testis usually hangs lower than the right",
    ],
    clinicalSignificance:
      "Testicular cancer is the most common cancer in young men but highly treatable. Testicular dysfunction affects fertility and hormone balance.",
    conditions: [
      "Testicular cancer",
      "Cryptorchidism (undescended testis)",
      "Testicular torsion",
      "Varicocele",
      "Hypogonadism",
    ],
    relatedStructures: ["UBERON_0000998", "UBERON_0001000", "UBERON_0002369"],
    furtherReading: [
      "Campbell-Walsh Urology - Male Reproductive System",
      "Spermatogenesis - Griswold",
    ],
  },

  UBERON_0000989: {
    name: "Penis",
    description:
      "The male copulatory organ, serving functions in urination and sexual reproduction. Contains erectile tissue that enables erection.",
    location:
      "External male genital organ, anterior to the scrotum, suspended from the pubic arch.",
    anatomy:
      "Contains three cylindrical bodies of erectile tissue: paired corpora cavernosa and single corpus spongiosum (which surrounds the urethra). The glans is the distal expanded end.",
    keyFacts: [
      "Erection is primarily a vascular event",
      "Average length is 12-16 cm when erect",
      "The urethra serves both urinary and reproductive functions",
      "Foreskin (prepuce) covers the glans in uncircumcised males",
    ],
    clinicalSignificance:
      "Erectile dysfunction is common and often indicates cardiovascular disease. Penile conditions affect quality of life and may indicate systemic disease.",
    conditions: [
      "Erectile dysfunction",
      "Peyronie's disease",
      "Penile cancer",
      "Priapism",
      "Phimosis",
    ],
    relatedStructures: ["UBERON_0000473", "UBERON_0001255", "UBERON_0001000"],
    furtherReading: ["Campbell-Walsh Urology", "Sexual Medicine - McMahon"],
  },

  // === BLOOD ===
  UBERON_0000178: {
    name: "Blood",
    description:
      "A specialized connective tissue consisting of cells suspended in plasma, responsible for transporting oxygen, nutrients, hormones, and immune cells throughout the body.",
    location:
      "Circulates through the cardiovascular system, present in all blood vessels from large arteries to microscopic capillaries.",
    anatomy:
      "Composed of plasma (55%) and formed elements (45%): red blood cells, white blood cells, and platelets. Total blood volume is approximately 4.7-5.5 liters.",
    keyFacts: [
      "Red blood cells live about 120 days",
      "About 2 million red blood cells are produced every second",
      "Blood travels about 19,000 km through vessels daily",
      "Plasma is 92% water",
    ],
    clinicalSignificance:
      "Blood disorders affect oxygen transport, immunity, and clotting. Complete blood count is one of the most common medical tests.",
    conditions: [
      "Anemia (various types)",
      "Leukemia",
      "Bleeding disorders (hemophilia)",
      "Thrombocytopenia",
      "Sickle cell disease",
    ],
    relatedStructures: ["UBERON_0000948", "UBERON_0002106", "UBERON_0002371"],
    furtherReading: [
      "Williams Hematology",
      "Wintrobe's Clinical Hematology",
      "Blood: Physiology and Pathophysiology - Colman",
    ],
  },

  UBERON_0002371: {
    name: "Bone Marrow",
    description:
      "Soft tissue found in the hollow interior of bones, responsible for producing all blood cells (hematopoiesis). Contains both red (hematopoietic) and yellow (fatty) marrow.",
    location:
      "Found within the medullary cavities of long bones and in the cancellous tissue of flat bones such as the pelvis, sternum, and skull.",
    anatomy:
      "Red marrow contains hematopoietic stem cells and supporting stromal cells. Yellow marrow is primarily adipose tissue that can convert to red marrow if needed.",
    keyFacts: [
      "Produces about 500 billion blood cells daily",
      "In adults, red marrow is mainly in flat bones and vertebrae",
      "Contains stem cells capable of becoming any blood cell type",
      "Site of B lymphocyte maturation",
    ],
    clinicalSignificance:
      "Bone marrow disorders affect blood cell production. Bone marrow transplantation can cure certain blood cancers and other conditions.",
    conditions: [
      "Leukemia",
      "Multiple myeloma",
      "Aplastic anemia",
      "Myelodysplastic syndromes",
      "Bone marrow failure syndromes",
    ],
    relatedStructures: ["UBERON_0000178", "UBERON_0002481", "UBERON_0002106"],
    furtherReading: ["Williams Hematology", "Bone Marrow Pathology - Bain"],
  },

  // === EYE ===
  UBERON_0000970: {
    name: "Eye",
    description:
      "The organ of sight, a complex structure that detects light and converts it to electrochemical signals processed by the visual cortex of the brain.",
    location:
      "Housed within the bony orbits of the skull, protected by the eyelids and cushioned by orbital fat.",
    anatomy:
      "Consists of three layers: outer fibrous (cornea, sclera), middle vascular (uvea), and inner neural (retina). Contains lens, vitreous humor, and photoreceptors.",
    keyFacts: [
      "Contains about 130 million photoreceptor cells",
      "The eye can distinguish about 10 million colors",
      "Cornea has no blood vessels (transparent)",
      "The retina processes 10 million bits of data per second",
    ],
    clinicalSignificance:
      "Vision impairment significantly affects quality of life. Many eye conditions are treatable if detected early.",
    conditions: [
      "Cataracts",
      "Glaucoma",
      "Macular degeneration",
      "Diabetic retinopathy",
      "Retinal detachment",
    ],
    relatedStructures: ["UBERON_0000955", "UBERON_0001871", "UBERON_0000966"],
    furtherReading: [
      "Adler's Physiology of the Eye",
      "Clinical Ophthalmology - Kanski",
    ],
  },

  // === PANCREAS ===
  UBERON_0001264: {
    name: "Pancreas",
    description:
      "A dual-function organ serving both digestive (exocrine) and hormonal (endocrine) roles. Produces digestive enzymes and hormones including insulin and glucagon.",
    location:
      "Located retroperitoneally in the upper abdomen, behind the stomach, spanning from the duodenum to the spleen.",
    anatomy:
      "Divided into head, neck, body, and tail. Contains exocrine acinar cells (digestive enzymes) and endocrine islets of Langerhans (hormone-producing cells).",
    keyFacts: [
      "Produces about 1.5 liters of pancreatic juice daily",
      "Contains about 1 million islets of Langerhans",
      "Beta cells in islets produce insulin",
      "Alpha cells produce glucagon",
    ],
    clinicalSignificance:
      "Pancreatic dysfunction affects both digestion and glucose metabolism. Pancreatic cancer has one of the lowest survival rates.",
    conditions: [
      "Diabetes mellitus (Type 1 and 2)",
      "Acute and chronic pancreatitis",
      "Pancreatic cancer",
      "Pancreatic insufficiency",
      "Insulinoma",
    ],
    relatedStructures: ["UBERON_0000945", "UBERON_0002107", "UBERON_0001155"],
    furtherReading: [
      "The Pancreas: An Integrated Textbook - Beger",
      "Pancreatic Cancer - Neoptolemos",
    ],
  },

  // Default/fallback for unknown structures
  default: {
    name: "Anatomical Structure",
    description:
      "An anatomical structure identified by UBERON ontology. Select a highlighted region for detailed information.",
    location: "Location varies by structure.",
    anatomy: "Anatomical details available upon selection.",
    keyFacts: [
      "Part of the human body",
      "Identified using UBERON ontology identifiers",
    ],
    clinicalSignificance:
      "Clinical relevance depends on the specific structure.",
    conditions: ["Various conditions may affect this structure"],
    relatedStructures: [],
    furtherReading: ["Gray's Anatomy", "Netter's Atlas of Human Anatomy"],
  },
};

// Helper to get structure data with fallback
export function getStructureData(uberonId) {
  return (
    anatomyData[uberonId] || {
      ...anatomyData["default"],
      name: formatStructureName(uberonId),
    }
  );
}

// Format UBERON ID to readable name
export function formatStructureName(uberonId) {
  // Try to extract name from SVG title element, or format the ID
  return uberonId.replace("UBERON_", "").replace("CL_", "").replace(/_/g, " ");
}

// Get related structures that exist in our data
export function getRelatedStructures(uberonId) {
  const data = anatomyData[uberonId];
  if (!data || !data.relatedStructures) return [];

  return data.relatedStructures
    .filter((id) => anatomyData[id])
    .map((id) => ({
      id,
      name: anatomyData[id].name,
    }));
}
