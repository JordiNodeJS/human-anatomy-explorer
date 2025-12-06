/**
 * Datos completos de ontología UBERON para estructuras de anatomía humana
 * Contiene definiciones, detalles anatómicos, significado clínico y referencias
 */

export const anatomyData = {
  // === ESTRUCTURAS CEREBRALES ===
  UBERON_0000955: {
    name: "Cerebro",
    description:
      "El órgano central del sistema nervioso, compuesto por miles de millones de neuronas y células gliales. El cerebro procesa información sensorial, controla funciones motoras y es la sede de la conciencia, cognición y emoción.",
    location:
      "Ubicado dentro de la cavidad craneal del cráneo, protegido por las meninges y rodeado de líquido cefalorraquídeo.",
    anatomy:
      "Dividido en tres regiones principales: el prosencéfalo (cerebro y diencéfalo), mesencéfalo y rombencéfalo (cerebelo, puente y bulbo raquídeo). Pesa aproximadamente 1,4 kg en adultos.",
    keyFacts: [
      "Contiene aproximadamente 86 mil millones de neuronas",
      "Usa cerca del 20% del oxígeno y energía del cuerpo",
      "Genera suficiente electricidad para encender una bombilla pequeña",
      "La corteza cerebral contiene unos 16 mil millones de neuronas",
    ],
    clinicalSignificance:
      "Central para prácticamente todas las condiciones neurológicas y psiquiátricas. El daño o disfunción puede resultar en déficits motores, pérdida sensorial, deterioro cognitivo, cambios de personalidad y alteración de la conciencia.",
    conditions: [
      "Accidente cerebrovascular (ictus)",
      "Traumatismo craneoencefálico",
      "Enfermedad de Alzheimer",
      "Enfermedad de Parkinson",
      "Tumores cerebrales",
      "Epilepsia",
    ],
    relatedStructures: ["UBERON_0000956", "UBERON_0002037", "UBERON_0001898"],
    furtherReading: [
      "Gray's Anatomy, 42ª Edición - Capítulo 22: Cerebro",
      "Principles of Neural Science, 6ª Edición - Kandel et al.",
      "The Human Brain Book - DK Publishing",
    ],
  },

  UBERON_0000956: {
    name: "Corteza Cerebral",
    description:
      "La capa más externa del cerebro, compuesta de materia gris plegada. Es responsable de las funciones cerebrales superiores incluyendo percepción, cognición, lenguaje, memoria y movimiento voluntario.",
    location:
      "Forma la superficie externa de los hemisferios cerebrales, cubriendo la sustancia blanca subyacente y las estructuras cerebrales más profundas.",
    anatomy:
      "Aproximadamente 2-4 mm de espesor, con un área superficial de unos 2.500 cm² cuando se despliega. Organizada en seis capas distintas de neuronas con funciones específicas. Contiene giros (crestas) y surcos.",
    keyFacts: [
      "Contiene aproximadamente 16 mil millones de neuronas",
      "Dividida en cuatro lóbulos: frontal, parietal, temporal y occipital",
      "El neocórtex constituye aproximadamente el 90% de la corteza cerebral",
      "Más grande en humanos en relación al tamaño del cerebro comparado con otros mamíferos",
    ],
    clinicalSignificance:
      "El daño a regiones corticales específicas produce déficits predecibles. La corteza se ve afectada en demencia, accidentes cerebrovasculares y muchas condiciones psiquiátricas.",
    conditions: [
      "Accidentes cerebrovasculares corticales",
      "Demencia frontotemporal",
      "Afasia",
      "Apraxia",
      "Ceguera cortical",
    ],
    relatedStructures: ["UBERON_0000955", "UBERON_0001870", "UBERON_0001871"],
    furtherReading: [
      "The Cerebral Cortex of Man - Penfield & Rasmussen",
      "Cortical Function: A View from the Thalamus - Sherman & Guillery",
    ],
  },

  UBERON_0001870: {
    name: "Corteza Frontal",
    description:
      "La porción anterior de la corteza cerebral, crucial para funciones ejecutivas, toma de decisiones, planificación, personalidad y control motor voluntario.",
    location:
      "Anterior al surco central y superior al surco lateral en cada hemisferio cerebral.",
    anatomy:
      "Contiene la corteza motora primaria (giro precentral), corteza premotora, área motora suplementaria y corteza prefrontal. La corteza prefrontal está altamente desarrollada en humanos.",
    keyFacts: [
      "Representa aproximadamente 1/3 del área superficial cortical total",
      "Contiene el área de Broca para la producción del habla (hemisferio izquierdo)",
      "Última región cerebral en madurar completamente (alrededor de los 25 años)",
      "Crítica para la memoria de trabajo y atención",
    ],
    clinicalSignificance:
      "El daño del lóbulo frontal puede causar cambios dramáticos de personalidad, juicio deteriorado, déficits motores y problemas del habla. Importante en la investigación de esquizofrenia y TDAH.",
    conditions: [
      "Demencia frontotemporal",
      "Efectos de traumatismo craneoencefálico",
      "Afasia de Broca",
      "Síndrome del lóbulo frontal",
    ],
    relatedStructures: ["UBERON_0000956", "UBERON_0001871", "UBERON_0002037"],
    furtherReading: [
      "The Frontal Lobes - Stuss & Knight",
      "Human Frontal Lobes - Miller & Cummings",
    ],
  },

  UBERON_0001871: {
    name: "Lóbulo Temporal",
    description:
      "Un lóbulo mayor de la corteza cerebral involucrado en el procesamiento auditivo, formación de memoria, comprensión del lenguaje y respuestas emocionales.",
    location:
      "Ubicado debajo del surco lateral en ambos hemisferios cerebrales, anterior al lóbulo occipital e inferior al lóbulo parietal.",
    anatomy:
      "Contiene la corteza auditiva primaria, área de Wernicke (comprensión del lenguaje), hipocampo (memoria) y amígdala (emoción). El lóbulo temporal medial es crucial para la memoria declarativa.",
    keyFacts: [
      "Alberga el hipocampo, esencial para formar nuevos recuerdos",
      "Contiene el área de Wernicke para la comprensión del lenguaje",
      "La amígdala procesa respuestas emocionales y miedo",
      "Importante para el reconocimiento facial (área fusiforme de caras)",
    ],
    clinicalSignificance:
      "La epilepsia del lóbulo temporal es la forma más común de epilepsia focal. El daño puede causar deterioro de memoria, problemas de procesamiento auditivo y déficits del lenguaje.",
    conditions: [
      "Epilepsia del lóbulo temporal",
      "Afasia de Wernicke",
      "Amnesia (daño temporal medial)",
      "Agnosia auditiva",
    ],
    relatedStructures: ["UBERON_0000956", "UBERON_0001870", "UBERON_0002421"],
    furtherReading: [
      "The Temporal Lobes and Limbic System - Gloor",
      "Memory: From Mind to Molecules - Squire & Kandel",
    ],
  },

  UBERON_0001898: {
    name: "Hipotálamo",
    description:
      "Una región pequeña pero vital del cerebro que controla el sistema nervioso autónomo y el sistema endocrino. Regula la temperatura corporal, hambre, sed, sueño y ritmos circadianos.",
    location:
      "Ubicado debajo del tálamo y encima del tronco encefálico, formando el piso y parte de las paredes laterales del tercer ventrículo.",
    anatomy:
      "Contiene numerosos núcleos incluyendo el núcleo supraquiasmático (ritmo circadiano), núcleo paraventricular (liberación hormonal) y núcleo arcuato (apetito). Conectado a la glándula pituitaria mediante el infundíbulo.",
    keyFacts: [
      "Pesa solo aproximadamente 4 gramos (menos del 1% del peso cerebral)",
      "Controla la liberación de hormonas de la glándula pituitaria",
      "El núcleo supraquiasmático es el reloj circadiano maestro",
      "Contiene neuronas sensibles a los niveles de glucosa en sangre",
    ],
    clinicalSignificance:
      "La disfunción hipotalámica puede causar alteraciones profundas en la homeostasis, afectando la regulación de temperatura, apetito, patrones de sueño y equilibrio hormonal.",
    conditions: [
      "Obesidad hipotalámica",
      "Diabetes insípida",
      "Trastornos del sueño",
      "Tumores hipotalámicos",
      "Síndrome de Kallmann",
    ],
    relatedStructures: ["UBERON_0000955", "UBERON_0001897", "UBERON_0002037"],
    furtherReading: [
      "The Hypothalamus - Neuroendocrine Control",
      "Hypothalamic Integration - Swaab",
    ],
  },

  UBERON_0001897: {
    name: "Tálamo",
    description:
      "Una estructura bilateral que sirve como la principal estación de relevo para señales sensoriales y motoras hacia la corteza cerebral. También juega roles en la conciencia, sueño y alerta.",
    location:
      "Ubicado en el centro del cerebro, encima del tronco encefálico y entre los hemisferios cerebrales, formando la mayor parte de las paredes laterales del tercer ventrículo.",
    anatomy:
      "Consiste en numerosos núcleos agrupados en regiones anterior, medial, lateral y posterior. Cada núcleo tiene conexiones específicas con áreas corticales y procesa diferentes tipos de información.",
    keyFacts: [
      "Todas las vías sensoriales (excepto olfato) pasan por el tálamo",
      "Contiene aproximadamente 50-60 núcleos diferentes",
      "Crítico para la atención y conciencia",
      "Involucrado en la regulación del ciclo sueño-vigilia",
    ],
    clinicalSignificance:
      "Las lesiones talámicas pueden causar pérdida sensorial, trastornos del movimiento, deterioro de memoria y alteraciones de la conciencia. Importante en síndromes de dolor crónico.",
    conditions: [
      "Síndrome talámico doloroso",
      "Insomnio familiar fatal",
      "Afasia talámica",
      "Trastornos del movimiento",
    ],
    relatedStructures: ["UBERON_0000955", "UBERON_0001898", "UBERON_0002421"],
    furtherReading: [
      "The Thalamus - Jones",
      "Exploring the Thalamus and Its Role in Cortical Function - Sherman & Guillery",
    ],
  },

  UBERON_0002037: {
    name: "Cerebelo",
    description:
      'El "pequeño cerebro" ubicado en la parte posterior del cráneo, esencial para la coordinación motora, equilibrio, postura y aprendizaje motor. Afina los movimientos iniciados por otras regiones cerebrales.',
    location:
      "Situado en la fosa craneal posterior, debajo de los lóbulos occipitales del cerebro y detrás del tronco encefálico.",
    anatomy:
      "Dividido en dos hemisferios conectados por el vermis. Contiene tres lóbulos principales y una corteza altamente plegada. La corteza cerebelosa contiene más neuronas que el resto del cerebro combinado.",
    keyFacts: [
      "Contiene aproximadamente 69 mil millones de neuronas (80% del total del cerebro)",
      "Recibe entrada de 200 millones de fibras nerviosas",
      "Coordina el tiempo y precisión de los movimientos",
      "Involucrado en el aprendizaje motor y automaticidad",
    ],
    clinicalSignificance:
      "El daño cerebeloso causa ataxia, disartria, nistagmo y temblor intencional. Afecta la coordinación más que la fuerza. Importante en el daño cerebral alcohólico.",
    conditions: [
      "Ataxia cerebelosa",
      "Ataxias espinocerebelosas",
      "Accidente cerebrovascular cerebeloso",
      "Tumores cerebelosos",
      "Degeneración cerebelosa alcohólica",
    ],
    relatedStructures: ["UBERON_0000955", "UBERON_0001896", "UBERON_0001898"],
    furtherReading: [
      "The Cerebellum and Cognition - Schmahmann",
      "The Cerebellum: New Visions - Bhidayasiri",
    ],
  },

  UBERON_0002421: {
    name: "Hipocampo",
    description:
      "Una estructura con forma de caballito de mar en el lóbulo temporal medial, esencial para la formación de nuevos recuerdos declarativos y navegación espacial.",
    location:
      "Ubicado en el lóbulo temporal medial, curvándose alrededor del tálamo. Parte del sistema límbico.",
    anatomy:
      "Contiene subregiones distintas: giro dentado, campos CA1-CA4 y subículo. Presenta un circuito único para el procesamiento de memoria y es una de las pocas áreas cerebrales con neurogénesis adulta.",
    keyFacts: [
      "Una de las primeras regiones afectadas en la enfermedad de Alzheimer",
      "Contiene células de lugar para la memoria espacial y navegación",
      "Uno de los pocos sitios de neurogénesis adulta",
      "Esencial para convertir memorias a corto plazo en memorias a largo plazo",
    ],
    clinicalSignificance:
      "El daño hipocampal causa amnesia anterógrada. La atrofia es un sello distintivo de la enfermedad de Alzheimer. Importante en la epilepsia del lóbulo temporal.",
    conditions: [
      "Enfermedad de Alzheimer",
      "Epilepsia del lóbulo temporal",
      "Amnesia global transitoria",
      "Lesión cerebral hipóxica",
    ],
    relatedStructures: ["UBERON_0001871", "UBERON_0002421", "UBERON_0000955"],
    furtherReading: [
      "The Hippocampus Book - Andersen et al.",
      "Memory and the Hippocampus - Squire",
    ],
  },

  // === CARDIOVASCULAR ===
  UBERON_0000948: {
    name: "Corazón",
    description:
      "Un órgano muscular que bombea sangre a través del cuerpo mediante el sistema circulatorio, suministrando oxígeno y nutrientes mientras elimina desechos metabólicos.",
    location:
      "Ubicado en el mediastino de la cavidad torácica, entre los pulmones, ligeramente a la izquierda de la línea media, posterior al esternón.",
    anatomy:
      "Un órgano de cuatro cámaras que consiste en dos aurículas y dos ventrículos. Contiene cuatro válvulas que aseguran el flujo sanguíneo unidireccional. Rodeado por el pericardio. Pesa 250-350 gramos en adultos.",
    keyFacts: [
      "Late aproximadamente 100.000 veces al día",
      "Bombea unos 5 litros de sangre por minuto en reposo",
      "El corazón tiene su propio sistema de conducción eléctrica",
      "Las arterias coronarias suministran sangre al músculo cardíaco",
    ],
    clinicalSignificance:
      "La enfermedad cardíaca es la principal causa de muerte a nivel mundial. El corazón está sujeto a numerosas condiciones que afectan su ritmo, músculo, válvulas y suministro sanguíneo.",
    conditions: [
      "Enfermedad arterial coronaria",
      "Insuficiencia cardíaca",
      "Arritmias (fibrilación auricular, taquicardia ventricular)",
      "Valvulopatías",
      "Cardiomiopatía",
      "Infarto de miocardio",
    ],
    relatedStructures: ["UBERON_0002048", "UBERON_0000178", "UBERON_0001981"],
    furtherReading: [
      "Braunwald's Heart Disease",
      "Hurst's The Heart",
      "Gray's Anatomy - Sistema Cardiovascular",
    ],
  },

  // === RESPIRATORIO ===
  UBERON_0002048: {
    name: "Pulmones",
    description:
      "Órganos respiratorios pares que facilitan el intercambio gaseoso, tomando oxígeno y expulsando dióxido de carbono. Esenciales para la respiración celular en todo el cuerpo.",
    location:
      "Ocupan la mayor parte de la cavidad torácica, a cada lado del corazón y el mediastino. Se extienden desde encima de las clavículas hasta el diafragma.",
    anatomy:
      "El pulmón derecho tiene tres lóbulos, el izquierdo tiene dos (para acomodar el corazón). Cada pulmón está dividido en segmentos broncopulmonares. Contiene aproximadamente 300-500 millones de alvéolos para el intercambio gaseoso.",
    keyFacts: [
      "El área superficial total de los alvéolos es de unos 70 m² (tamaño de una cancha de tenis)",
      "Procesan aproximadamente 10.000 litros de aire diariamente",
      "El pulmón derecho es ligeramente más grande que el izquierdo",
      "Las paredes alveolares tienen solo una célula de espesor para un intercambio gaseoso eficiente",
    ],
    clinicalSignificance:
      "Las enfermedades pulmonares están entre las condiciones médicas más comunes a nivel mundial. Los pulmones son vulnerables a infecciones, inflamación y daño por sustancias inhaladas.",
    conditions: [
      "Neumonía",
      "Enfermedad pulmonar obstructiva crónica (EPOC)",
      "Asma",
      "Cáncer de pulmón",
      "Embolia pulmonar",
      "Fibrosis pulmonar",
    ],
    relatedStructures: ["UBERON_0000948", "UBERON_0000977", "UBERON_0001043"],
    furtherReading: [
      "Pulmonary Pathophysiology - West",
      "Murray & Nadel's Textbook of Respiratory Medicine",
      "Fishman's Pulmonary Diseases and Disorders",
    ],
  },

  // === DIGESTIVO ===
  UBERON_0000945: {
    name: "Estómago",
    description:
      "Un órgano muscular en forma de J del sistema digestivo que almacena alimentos, los mezcla con jugos gástricos y comienza la digestión de proteínas mediante la acción de pepsina y ácido clorhídrico.",
    location:
      "Ubicado en el cuadrante superior izquierdo del abdomen, entre el esófago y el intestino delgado, debajo del diafragma.",
    anatomy:
      "Dividido en regiones: cardias, fondo, cuerpo y píloro. Tiene tres capas musculares para la agitación. Revestido con mucosa que contiene glándulas gástricas que secretan ácido, enzimas y moco protector.",
    keyFacts: [
      "Puede expandirse para contener 1-1,5 litros de alimento",
      "Produce 2-3 litros de jugo gástrico diariamente",
      "El ácido gástrico tiene un pH de 1,5-3,5",
      "El vaciado completo toma 4-5 horas después de una comida",
    ],
    clinicalSignificance:
      "El estómago es susceptible a ulceración, infección (H. pylori) y cáncer. La producción de ácido puede causar reflujo y daño al esófago.",
    conditions: [
      "Enfermedad ulcerosa péptica",
      "Gastritis",
      "Cáncer gástrico",
      "Gastroparesia",
      "Infección por Helicobacter pylori",
    ],
    relatedStructures: ["UBERON_0002107", "UBERON_0001043", "UBERON_0001155"],
    furtherReading: [
      "Sleisenger and Fordtran's Gastrointestinal and Liver Disease",
      "Physiology of the Gastrointestinal Tract - Johnson",
    ],
  },

  UBERON_0002107: {
    name: "Hígado",
    description:
      "El órgano sólido más grande del cuerpo, que realiza más de 500 funciones vitales incluyendo metabolismo, desintoxicación, síntesis de proteínas y producción de bilis.",
    location:
      "Ocupa las regiones hipocondríaca derecha y epigástrica del abdomen, protegido por la caja torácica inferior. Pesa aproximadamente 1,5 kg.",
    anatomy:
      "Dividido en lóbulos derecho e izquierdo. Recibe doble suministro sanguíneo de la arteria hepática y la vena porta. Contiene hepatocitos organizados en lóbulos alrededor de venas centrales.",
    keyFacts: [
      "Recibe aproximadamente el 25% del gasto cardíaco",
      "Puede regenerar hasta el 75% de su masa",
      "Produce 500-1000 mL de bilis diariamente",
      "Contiene aproximadamente 100 mil millones de hepatocitos",
    ],
    clinicalSignificance:
      "El hígado es esencial para la vida y tiene una notable capacidad regenerativa. La enfermedad hepática es común y puede progresar de inflamación a cirrosis e insuficiencia.",
    conditions: [
      "Hepatitis (viral, alcohólica, autoinmune)",
      "Cirrosis",
      "Enfermedad del hígado graso no alcohólico",
      "Carcinoma hepatocelular",
      "Insuficiencia hepática",
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
      "El intestino grueso, responsable de absorber agua y electrolitos de los residuos alimenticios digeridos, formar y almacenar heces, y albergar el microbioma intestinal.",
    location:
      "Enmarca el intestino delgado en la cavidad abdominal, extendiéndose desde el ciego hasta el recto. Aproximadamente 1,5 metros de longitud.",
    anatomy:
      "Dividido en ciego, colon ascendente, transverso, descendente y sigmoideo. Tiene haustras (bolsas) y tenias coli (bandas musculares). Contiene miles de millones de bacterias que forman el microbioma intestinal.",
    keyFacts: [
      "Absorbe aproximadamente 1,5 litros de agua diariamente",
      "Contiene billones de bacterias (microbioma intestinal)",
      "El tiempo de tránsito a través del colon es de 12-36 horas",
      "El apéndice está unido al ciego",
    ],
    clinicalSignificance:
      "El cáncer colorrectal es el tercer cáncer más común. El colon se ve afectado por la enfermedad inflamatoria intestinal y es esencial para la salud del microbioma.",
    conditions: [
      "Cáncer colorrectal",
      "Colitis ulcerosa",
      "Enfermedad de Crohn (puede afectar el colon)",
      "Diverticulosis y diverticulitis",
      "Síndrome del intestino irritable",
    ],
    relatedStructures: ["UBERON_0000945", "UBERON_0002107", "UBERON_0001052"],
    furtherReading: [
      "Sleisenger and Fordtran's Gastrointestinal and Liver Disease",
      "The Microbiome and Human Health - Lynch & Pedersen",
    ],
  },

  // === URINARIO ===
  UBERON_0002113: {
    name: "Riñón",
    description:
      "Órganos pares en forma de frijol que filtran la sangre, eliminan productos de desecho, regulan el equilibrio de líquidos y electrolitos, y producen hormonas incluyendo renina y eritropoyetina.",
    location:
      "Ubicados retroperitonealmente en la pared abdominal posterior, el riñón derecho ligeramente más bajo que el izquierdo debido al hígado.",
    anatomy:
      "Cada riñón contiene aproximadamente 1 millón de nefronas. Dividido en corteza y médula. La sangre entra por las arterias renales y sale por las venas renales. La orina se acumula en la pelvis renal.",
    keyFacts: [
      "Filtran aproximadamente 180 litros de sangre diariamente",
      "Producen 1-2 litros de orina diariamente",
      "Reciben el 20-25% del gasto cardíaco",
      "Regulan la presión arterial mediante el sistema renina-angiotensina",
    ],
    clinicalSignificance:
      "La enfermedad renal es cada vez más común, particularmente en diabetes e hipertensión. La enfermedad renal en etapa terminal requiere diálisis o trasplante.",
    conditions: [
      "Enfermedad renal crónica",
      "Lesión renal aguda",
      "Cálculos renales (nefrolitiasis)",
      "Glomerulonefritis",
      "Enfermedad renal poliquística",
      "Carcinoma de células renales",
    ],
    relatedStructures: ["UBERON_0000948", "UBERON_0001255", "UBERON_0000178"],
    furtherReading: [
      "Brenner & Rector's The Kidney",
      "Comprehensive Clinical Nephrology - Johnson",
    ],
  },

  UBERON_0001255: {
    name: "Vejiga Urinaria",
    description:
      "Un órgano muscular hueco que almacena la orina producida por los riñones antes de su eliminación mediante la micción. Capaz de expandirse significativamente.",
    location:
      "Ubicada en la pelvis, posterior a la sínfisis púbica. En hombres, anterior al recto; en mujeres, anterior al útero y vagina.",
    anatomy:
      "Tiene tres capas: mucosa (epitelio de transición), muscular (músculo detrusor) y adventicia/serosa. El trígono es una región triangular donde entran los uréteres y sale la uretra.",
    keyFacts: [
      "Puede contener 400-600 mL cómodamente",
      "La capacidad máxima es de aproximadamente 800-1000 mL",
      "El deseo de orinar comienza aproximadamente a los 200-300 mL",
      "El músculo detrusor se contrae para expulsar la orina",
    ],
    clinicalSignificance:
      "La disfunción vesical es común, particularmente con el envejecimiento. El cáncer de vejiga es una de las neoplasias malignas más comunes, especialmente en fumadores.",
    conditions: [
      "Cáncer de vejiga",
      "Infecciones del tracto urinario",
      "Vejiga hiperactiva",
      "Incontinencia urinaria",
      "Vejiga neurogénica",
    ],
    relatedStructures: ["UBERON_0002113", "UBERON_0001000", "UBERON_0000989"],
    furtherReading: [
      "Campbell-Walsh Urology",
      "Bladder Pathology - Sesterhenn & Cheng",
    ],
  },

  // === ENDOCRINO ===
  UBERON_0002369: {
    name: "Glándula Suprarrenal",
    description:
      "Glándulas endocrinas pares ubicadas encima de los riñones, que producen hormonas esenciales para el metabolismo, respuesta al estrés, regulación de la presión arterial y características sexuales.",
    location:
      "Situadas encima de cada riñón en el espacio retroperitoneal. La derecha es triangular, la izquierda es crescéntica.",
    anatomy:
      "Cada glándula tiene dos regiones distintas: corteza externa (produce corticosteroides y andrógenos) y médula interna (produce catecolaminas - adrenalina y noradrenalina).",
    keyFacts: [
      "Producen más de 50 hormonas diferentes",
      "El cortisol sigue un ritmo circadiano (más alto por la mañana)",
      "La médula deriva de células de la cresta neural",
      'Esencial para la respuesta de "lucha o huida"',
    ],
    clinicalSignificance:
      "La disfunción suprarrenal puede causar condiciones potencialmente mortales. Tanto el exceso como la deficiencia de hormonas suprarrenales causan enfermedad significativa.",
    conditions: [
      "Enfermedad de Addison (insuficiencia suprarrenal)",
      "Síndrome de Cushing (exceso de cortisol)",
      "Feocromocitoma (tumor de médula suprarrenal)",
      "Incidentaloma suprarrenal",
      "Hiperplasia suprarrenal congénita",
    ],
    relatedStructures: ["UBERON_0002113", "UBERON_0002046", "UBERON_0001898"],
    furtherReading: [
      "Williams Textbook of Endocrinology",
      "The Adrenal Cortex - Idelman & Baulieu",
    ],
  },

  UBERON_0002046: {
    name: "Glándula Tiroides",
    description:
      "Una glándula endocrina en forma de mariposa en el cuello que produce hormonas tiroideas, las cuales regulan el metabolismo, crecimiento, desarrollo y temperatura corporal.",
    location:
      "Ubicada en el cuello anterior, envolviendo la parte frontal y lateral de la tráquea, justo debajo de la laringe.",
    anatomy:
      "Consiste en dos lóbulos conectados por el istmo. Contiene folículos llenos de coloide (tiroglobulina). Produce hormonas T3 y T4 y calcitonina de las células C parafoliculares.",
    keyFacts: [
      "Glándula endocrina más grande del cuerpo",
      "Requiere yodo para la síntesis hormonal",
      "La hormona tiroidea afecta prácticamente cada célula del cuerpo",
      "Peso normal es 15-25 gramos",
    ],
    clinicalSignificance:
      "Los trastornos tiroideos son comunes, afectando aproximadamente al 5% de la población. Tanto el hiper como el hipotiroidismo causan síntomas significativos.",
    conditions: [
      "Hipotiroidismo (tiroiditis de Hashimoto)",
      "Hipertiroidismo (enfermedad de Graves)",
      "Nódulos tiroideos",
      "Cáncer de tiroides",
      "Bocio",
    ],
    relatedStructures: ["UBERON_0002369", "UBERON_0001898", "UBERON_0001043"],
    furtherReading: [
      "Werner & Ingbar's The Thyroid",
      "Thyroid Disease Manager - Endocrine Education",
    ],
  },

  // === LINFÁTICO ===
  UBERON_0002106: {
    name: "Bazo",
    description:
      "El órgano linfoide más grande, que filtra la sangre, recicla hierro de glóbulos rojos viejos y sirve como reservorio de células inmunes y plaquetas.",
    location:
      "Ubicado en el cuadrante superior izquierdo del abdomen, posterior al estómago y protegido por las costillas inferiores izquierdas.",
    anatomy:
      "Contiene pulpa roja (filtra sangre) y pulpa blanca (función inmune). Recibe sangre a través de la arteria esplénica. No tiene vasos linfáticos aferentes.",
    keyFacts: [
      "Filtra aproximadamente 250 mL de sangre por minuto",
      "Puede retener aproximadamente 200 mL de sangre en reserva",
      "Elimina glóbulos rojos viejos o dañados",
      "Importante para la inmunidad contra bacterias encapsuladas",
    ],
    clinicalSignificance:
      "La esplenomegalia puede indicar varias enfermedades. Los pacientes asplénicos tienen mayor riesgo de infecciones graves con organismos encapsulados.",
    conditions: [
      "Esplenomegalia (bazo agrandado)",
      "Ruptura esplénica (trauma)",
      "Infarto esplénico",
      "Hiperesplenismo",
      "Asplenia (funcional o quirúrgica)",
    ],
    relatedStructures: ["UBERON_0002107", "UBERON_0000178", "UBERON_0002371"],
    furtherReading: [
      "The Spleen: Structure, Function and Clinical Significance",
      "Immunology of the Spleen",
    ],
  },

  // === PÁNCREAS ===
  UBERON_0001264: {
    name: "Páncreas",
    description:
      "Un órgano de doble función que sirve roles tanto digestivos (exocrinos) como hormonales (endocrinos). Produce enzimas digestivas y hormonas incluyendo insulina y glucagón.",
    location:
      "Ubicado retroperitonealmente en el abdomen superior, detrás del estómago, extendiéndose desde el duodeno hasta el bazo.",
    anatomy:
      "Dividido en cabeza, cuello, cuerpo y cola. Contiene células acinares exocrinas (enzimas digestivas) e islotes de Langerhans endocrinos (células productoras de hormonas).",
    keyFacts: [
      "Produce aproximadamente 1,5 litros de jugo pancreático diariamente",
      "Contiene aproximadamente 1 millón de islotes de Langerhans",
      "Las células beta en los islotes producen insulina",
      "Las células alfa producen glucagón",
    ],
    clinicalSignificance:
      "La disfunción pancreática afecta tanto la digestión como el metabolismo de la glucosa. El cáncer de páncreas tiene una de las tasas de supervivencia más bajas.",
    conditions: [
      "Diabetes mellitus (Tipo 1 y 2)",
      "Pancreatitis aguda y crónica",
      "Cáncer de páncreas",
      "Insuficiencia pancreática",
      "Insulinoma",
    ],
    relatedStructures: ["UBERON_0000945", "UBERON_0002107", "UBERON_0001155"],
    furtherReading: [
      "The Pancreas: An Integrated Textbook - Beger",
      "Pancreatic Cancer - Neoptolemos",
    ],
  },

  // === OJO ===
  UBERON_0000970: {
    name: "Ojo",
    description:
      "El órgano de la visión, una estructura compleja que detecta la luz y la convierte en señales electroquímicas procesadas por la corteza visual del cerebro.",
    location:
      "Alojado dentro de las órbitas óseas del cráneo, protegido por los párpados y amortiguado por grasa orbital.",
    anatomy:
      "Consiste en tres capas: externa fibrosa (córnea, esclerótica), media vascular (úvea) e interna neural (retina). Contiene cristalino, humor vítreo y fotorreceptores.",
    keyFacts: [
      "Contiene aproximadamente 130 millones de células fotorreceptoras",
      "El ojo puede distinguir aproximadamente 10 millones de colores",
      "La córnea no tiene vasos sanguíneos (transparente)",
      "La retina procesa 10 millones de bits de datos por segundo",
    ],
    clinicalSignificance:
      "El deterioro de la visión afecta significativamente la calidad de vida. Muchas condiciones oculares son tratables si se detectan tempranamente.",
    conditions: [
      "Cataratas",
      "Glaucoma",
      "Degeneración macular",
      "Retinopatía diabética",
      "Desprendimiento de retina",
    ],
    relatedStructures: ["UBERON_0000955", "UBERON_0001871", "UBERON_0000966"],
    furtherReading: [
      "Adler's Physiology of the Eye",
      "Clinical Ophthalmology - Kanski",
    ],
  },

  // Predeterminado/fallback para estructuras desconocidas
  default: {
    name: "Estructura Anatómica",
    description:
      "Una estructura anatómica identificada por la ontología UBERON. Selecciona una región resaltada para obtener información detallada.",
    location: "La ubicación varía según la estructura.",
    anatomy: "Los detalles anatómicos están disponibles al seleccionar.",
    keyFacts: [
      "Parte del cuerpo humano",
      "Identificado usando identificadores de ontología UBERON",
    ],
    clinicalSignificance:
      "La relevancia clínica depende de la estructura específica.",
    conditions: ["Varias condiciones pueden afectar esta estructura"],
    relatedStructures: [],
    furtherReading: ["Gray's Anatomy", "Netter's Atlas of Human Anatomy"],
  },
};

// Ayudante para obtener datos de estructura con fallback
export function getStructureData(uberonId) {
  return (
    anatomyData[uberonId] || {
      ...anatomyData["default"],
      name: formatStructureName(uberonId),
    }
  );
}

// Formatear ID UBERON a nombre legible
export function formatStructureName(uberonId) {
  return uberonId.replace("UBERON_", "").replace("CL_", "").replace(/_/g, " ");
}

// Obtener estructuras relacionadas que existen en nuestros datos
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
