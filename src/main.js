/**
 * Explorador de Anatomía Humana - Aplicación Principal
 * Referencia anatómica interactiva con ontología UBERON
 */

import { getStructureData, getRelatedStructures } from "./anatomyData.js";
import { audioFeedback } from "./audioFeedback.js";

// Traducciones de nombres anatómicos
let translations = {};

// Estado de la aplicación
const state = {
  currentView: "male",
  selectedStructure: null,
  history: [],
  zoom: 1,
  maxHistory: 8,
};

// Referencias a elementos del DOM
let elements = {};

/**
 * Cargar traducciones de nombres anatómicos
 */
async function loadTranslations() {
  try {
    const res = await fetch("/locales/es.json");
    if (res.ok) {
      translations = await res.json();
    }
  } catch (err) {
    console.warn("No se pudieron cargar las traducciones:", err);
  }
}

/**
 * Obtener nombre traducido para un ID UBERON
 */
function getTranslatedName(id, fallbackName) {
  // 1) Buscar en traducciones
  if (translations[id]) {
    return translations[id];
  }
  // 2) Usar nombre del SVG si existe
  if (fallbackName) {
    return capitalizeWords(fallbackName);
  }
  // 3) Formatear el ID como fallback
  return formatIdToName(id);
}

/**
 * Inicializar la aplicación
 */
async function init() {
  // Cachear elementos del DOM
  cacheElements();

  // Cargar traducciones
  await loadTranslations();

  // Cargar diagramas SVG
  await loadDiagrams();

  // Configurar listeners de eventos
  setupEventListeners();

  // Inicializar audio (se habilitará en la primera interacción del usuario)
  document.addEventListener("click", initAudio, { once: true });
  document.addEventListener("keydown", initAudio, { once: true });

  console.log("Explorador de Anatomía Humana inicializado");
}

/**
 * Cachear referencias a elementos del DOM
 */
function cacheElements() {
  elements = {
    diagramContainer: document.getElementById("diagram-container"),
    maleDiagram: document.getElementById("male-diagram"),
    brainDiagram: document.getElementById("brain-diagram"),
    viewButtons: document.querySelectorAll(".view-btn"),
    tabs: document.querySelectorAll(".tab"),
    tabPanes: document.querySelectorAll(".tab-pane"),
    structureName: document.getElementById("structure-name"),
    ontologyId: document.getElementById("ontology-id"),
    historyItems: document.getElementById("history-items"),
    zoomIn: document.getElementById("zoom-in"),
    zoomOut: document.getElementById("zoom-out"),
    zoomReset: document.getElementById("zoom-reset"),
    // Paneles de contenido
    overviewPlaceholder: document.getElementById("overview-placeholder"),
    overviewContent: document.getElementById("overview-content"),
    anatomyContent: document.getElementById("anatomy-content"),
    clinicalContent: document.getElementById("clinical-content"),
    referencesContent: document.getElementById("references-content"),
    // Campos de contenido
    structureDescription: document.getElementById("structure-description"),
    keyFacts: document.getElementById("key-facts"),
    structureLocation: document.getElementById("structure-location"),
    structureAnatomy: document.getElementById("structure-anatomy"),
    relatedStructures: document.getElementById("related-structures"),
    clinicalSignificance: document.getElementById("clinical-significance"),
    commonConditions: document.getElementById("common-conditions"),
    ontologyLinks: document.getElementById("ontology-links"),
    furtherReading: document.getElementById("further-reading"),
  };
}

/**
 * Inicializar retroalimentación de audio
 */
function initAudio() {
  audioFeedback.init();
}

/**
 * Load SVG diagrams from the anatomogram package
 */
async function loadDiagrams() {
  const svgPaths = {
    male: "/node_modules/@ebi-gene-expression-group/anatomogram/lib/svg/homo_sapiens.male.svg",
    brain:
      "/node_modules/@ebi-gene-expression-group/anatomogram/lib/svg/homo_sapiens.brain.svg",
  };

  // Show loading state
  elements.maleDiagram.innerHTML =
    '<div class="loading-indicator"><div class="loading-spinner"></div><span>Loading anatomy...</span></div>';
  elements.brainDiagram.innerHTML =
    '<div class="loading-indicator"><div class="loading-spinner"></div><span>Loading brain...</span></div>';

  try {
    // Load both SVGs in parallel
    const [maleSvg, brainSvg] = await Promise.all([
      fetch(svgPaths.male).then((r) => r.text()),
      fetch(svgPaths.brain).then((r) => r.text()),
    ]);

    // Inject SVGs
    elements.maleDiagram.innerHTML = maleSvg;
    elements.brainDiagram.innerHTML = brainSvg;

    // Process SVGs
    processSvg(elements.maleDiagram.querySelector("svg"));
    processSvg(elements.brainDiagram.querySelector("svg"));

    // Set up structure interactions
    setupStructureInteractions(elements.maleDiagram);
    setupStructureInteractions(elements.brainDiagram);
  } catch (error) {
    console.error("Error loading SVGs:", error);
    elements.maleDiagram.innerHTML =
      '<p class="error">Failed to load anatomy diagram</p>';
    elements.brainDiagram.innerHTML =
      '<p class="error">Failed to load brain diagram</p>';
  }
}

/**
 * Process SVG after loading - apply default styling and fix visibility
 */
function processSvg(svg) {
  if (!svg) return;

  // Remove visibility:hidden attributes
  svg.querySelectorAll('[visibility="hidden"]').forEach((el) => {
    el.removeAttribute("visibility");
  });

  // Remove style attributes that hide elements
  svg.querySelectorAll('[style*="visibility"]').forEach((el) => {
    el.style.visibility = "";
  });

  // Find all UBERON and CL elements and ensure they're visible with default styling
  const anatomicalElements = svg.querySelectorAll(
    '[id^="UBERON_"], [id^="CL_"]'
  );

  anatomicalElements.forEach((element) => {
    // Remove any inline fill:none or stroke:none
    if (element.style) {
      element.style.fill = "";
      element.style.stroke = "";
    }

    // Also process child paths
    element
      .querySelectorAll("path, polygon, ellipse, circle, rect")
      .forEach((child) => {
        if (child.style) {
          child.style.fill = "";
          child.style.stroke = "";
        }
        // Remove fill="none" and stroke="none" attributes
        if (child.getAttribute("fill") === "none") {
          child.removeAttribute("fill");
        }
        if (child.getAttribute("stroke") === "none") {
          child.removeAttribute("stroke");
        }
      });

    // Remove fill="none" and stroke="none" from the group itself
    if (element.getAttribute("fill") === "none") {
      element.removeAttribute("fill");
    }
    if (element.getAttribute("stroke") === "none") {
      element.removeAttribute("stroke");
    }
  });

  // Make SVG responsive
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "100%");
  svg.style.maxWidth = "100%";
  svg.style.maxHeight = "550px";
}

/**
 * Configurar interacciones para estructuras anatómicas
 */
function setupStructureInteractions(container) {
  const anatomicalElements = container.querySelectorAll(
    '[id^="UBERON_"], [id^="CL_"]'
  );

  anatomicalElements.forEach((element) => {
    // Obtener el elemento title para el nombre de la estructura
    const titleEl = element.querySelector("title");
    const svgName = titleEl ? titleEl.textContent : null;
    // Usar nombre traducido
    const structureName = getTranslatedName(element.id, svgName);

    // Eventos de hover
    element.addEventListener("mouseenter", (e) => {
      audioFeedback.playHover();
      showTooltip(e, element.id, structureName);
    });

    element.addEventListener("mousemove", (e) => {
      updateTooltipPosition(e);
    });

    element.addEventListener("mouseleave", () => {
      hideTooltip();
    });

    // Click event
    element.addEventListener("click", () => {
      selectStructure(element.id, structureName);
    });
  });
}

/**
 * Format UBERON ID to readable name (just the numeric part)
 */
function formatId(id) {
  return id
    .replace("UBERON_", "")
    .replace("CL_", "")
    .replace(/_/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Format UBERON ID to a fallback readable name
 */
function formatIdToName(id) {
  return id.replace("UBERON_", "").replace("CL_", "");
}

/**
 * Capitalize each word in a string
 */
function capitalizeWords(str) {
  if (!str) return "";
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

/**
 * Set up all event listeners
 */
function setupEventListeners() {
  // View switcher buttons
  elements.viewButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const view = btn.dataset.view;
      if (view !== state.currentView) {
        switchView(view);
      }
    });
  });

  // Tab buttons
  elements.tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      switchTab(tab.dataset.tab);
    });
  });

  // Zoom controls
  elements.zoomIn.addEventListener("click", () => {
    audioFeedback.playButtonClick();
    zoomDiagram(1.2);
  });

  elements.zoomOut.addEventListener("click", () => {
    audioFeedback.playButtonClick();
    zoomDiagram(0.8);
  });

  elements.zoomReset.addEventListener("click", () => {
    audioFeedback.playButtonClick();
    resetZoom();
  });

  // Keyboard navigation
  document.addEventListener("keydown", handleKeyboard);
}

/**
 * Switch between anatomy views
 */
function switchView(view) {
  audioFeedback.playViewSwitch();

  state.currentView = view;

  // Update button states
  elements.viewButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.view === view);
  });

  // Update diagram visibility
  elements.maleDiagram.dataset.active = (view === "male").toString();
  elements.brainDiagram.dataset.active = (view === "brain").toString();

  // Reset zoom when switching views
  resetZoom();

  // Clear selection
  clearSelection();
}

/**
 * Switch between info tabs
 */
function switchTab(tabId) {
  audioFeedback.playTabSwitch();

  // Update tab buttons
  elements.tabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.tab === tabId);
  });

  // Update tab panes
  elements.tabPanes.forEach((pane) => {
    pane.classList.toggle("active", pane.id === `${tabId}-pane`);
  });
}

/**
 * Select an anatomical structure
 */
function selectStructure(id, name) {
  audioFeedback.playSelect();

  // Remove previous selection
  const previousSelected = document.querySelector(".selected");
  if (previousSelected) {
    previousSelected.classList.remove("selected");
  }

  // Find and highlight the selected element
  const element = document.getElementById(id);
  if (element) {
    element.classList.add("selected");
  }

  // Update state
  state.selectedStructure = id;

  // Add to history
  addToHistory(id, name);

  // Reset to Overview tab when selecting a new structure
  switchTab("overview");

  // Update info panel - pass the SVG title name as fallback
  updateInfoPanel(id, name);
}

/**
 * Limpiar la selección actual
 */
function clearSelection() {
  const selected = document.querySelector(".selected");
  if (selected) {
    selected.classList.remove("selected");
  }

  state.selectedStructure = null;

  // Restablecer panel de información
  elements.structureName.textContent = "Selecciona una estructura";
  elements.ontologyId.textContent = "";

  // Mostrar placeholders, ocultar contenido
  elements.overviewPlaceholder.style.display = "block";
  elements.overviewContent.style.display = "none";
  elements.anatomyContent.style.display = "none";
  elements.clinicalContent.style.display = "none";
  elements.referencesContent.style.display = "none";
}

/**
 * Actualizar el panel de información con datos de la estructura
 */
function updateInfoPanel(id, svgName = null) {
  const data = getStructureData(id);

  // Usar nombre traducido
  const displayName = getTranslatedName(id, svgName);

  // Actualizar encabezado
  elements.structureName.textContent = displayName;
  elements.ontologyId.textContent = id;

  // Ocultar placeholders, mostrar contenido
  elements.overviewPlaceholder.style.display = "none";
  elements.overviewContent.style.display = "block";
  elements.anatomyContent.style.display = "block";
  elements.clinicalContent.style.display = "block";
  elements.referencesContent.style.display = "block";

  // Ocultar placeholder en cada panel
  document.querySelectorAll(".tab-pane .placeholder-message").forEach((p) => {
    p.style.display = "none";
  });

  // Pestaña Resumen
  elements.structureDescription.textContent = data.description;
  elements.keyFacts.innerHTML = data.keyFacts
    .map((fact) => `<li>${fact}</li>`)
    .join("");

  // Pestaña Anatomía
  elements.structureLocation.textContent = data.location;
  elements.structureAnatomy.textContent = data.anatomy;

  const relatedStructures = getRelatedStructures(id);
  elements.relatedStructures.innerHTML = relatedStructures
    .map((s) => `<li data-id="${s.id}">${getTranslatedName(s.id, s.name)}</li>`)
    .join("");

  // Agregar manejadores de clic a estructuras relacionadas
  elements.relatedStructures.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", () => {
      const relatedId = li.dataset.id;
      selectStructure(relatedId, li.textContent);
    });
  });

  // Pestaña Clínica
  elements.clinicalSignificance.textContent = data.clinicalSignificance;
  elements.commonConditions.innerHTML = data.conditions
    .map((condition) => `<li>${condition}</li>`)
    .join("");

  // References tab
  const uberonUrl = `https://www.ebi.ac.uk/ols4/ontologies/uberon/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252F${id}`;
  elements.ontologyLinks.innerHTML = `
    <a href="${uberonUrl}" target="_blank" rel="noopener">${id}</a>
    <a href="https://www.ebi.ac.uk/ols4/ontologies/uberon" target="_blank" rel="noopener">UBERON Ontology</a>
  `;

  elements.furtherReading.innerHTML = data.furtherReading
    .map((reading) => `<li>${reading}</li>`)
    .join("");
}

/**
 * Add a structure to the view history
 */
function addToHistory(id, name) {
  // Remove if already in history
  state.history = state.history.filter((item) => item.id !== id);

  // Add to beginning
  state.history.unshift({ id, name });

  // Trim to max length
  if (state.history.length > state.maxHistory) {
    state.history.pop();
  }

  // Update UI
  updateHistoryUI();
}

/**
 * Actualizar la visualización del historial
 */
function updateHistoryUI() {
  if (state.history.length === 0) {
    elements.historyItems.innerHTML =
      '<span class="history-empty">Ninguna estructura vista aún</span>';
    return;
  }

  elements.historyItems.innerHTML = state.history
    .map(
      (item) =>
        `<button class="history-item" data-id="${item.id}">${getTranslatedName(
          item.id,
          item.name
        )}</button>`
    )
    .join("");

  // Agregar manejadores de clic
  elements.historyItems.querySelectorAll(".history-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      audioFeedback.playButtonClick();
      selectStructure(btn.dataset.id, btn.textContent);
    });
  });
}

/**
 * Gestión de tooltips
 */
let tooltip = null;

function createTooltip() {
  tooltip = document.createElement("div");
  tooltip.className = "anatomy-tooltip";
  tooltip.innerHTML = `
    <div class="tooltip-title"></div>
    <div class="tooltip-id"></div>
  `;
  document.body.appendChild(tooltip);
}

function showTooltip(event, id, name) {
  if (!tooltip) createTooltip();

  tooltip.querySelector(".tooltip-title").textContent = name;
  tooltip.querySelector(".tooltip-id").textContent = id;

  updateTooltipPosition(event);

  // Use requestAnimationFrame for smooth appearance
  requestAnimationFrame(() => {
    tooltip.classList.add("visible");
  });
}

function updateTooltipPosition(event) {
  if (!tooltip) return;

  const offset = 15;
  let x = event.clientX + offset;
  let y = event.clientY + offset;

  // Keep tooltip in viewport
  const rect = tooltip.getBoundingClientRect();
  if (x + rect.width > window.innerWidth) {
    x = event.clientX - rect.width - offset;
  }
  if (y + rect.height > window.innerHeight) {
    y = event.clientY - rect.height - offset;
  }

  tooltip.style.left = `${x}px`;
  tooltip.style.top = `${y}px`;
}

function hideTooltip() {
  if (tooltip) {
    tooltip.classList.remove("visible");
  }
}

/**
 * Zoom controls
 */
function zoomDiagram(factor) {
  const newZoom = state.zoom * factor;

  // Limit zoom range
  if (newZoom < 0.5 || newZoom > 3) return;

  state.zoom = newZoom;
  applyZoom();
}

function resetZoom() {
  state.zoom = 1;
  applyZoom();
}

function applyZoom() {
  const activeWrapper =
    state.currentView === "male" ? elements.maleDiagram : elements.brainDiagram;

  const svg = activeWrapper.querySelector("svg");
  if (svg) {
    svg.style.transform = `scale(${state.zoom})`;
    svg.style.transformOrigin = "center center";
  }
}

/**
 * Keyboard navigation
 */
function handleKeyboard(event) {
  // Escape to clear selection
  if (event.key === "Escape") {
    clearSelection();
    return;
  }

  // Tab numbers to switch tabs (1-4)
  if (event.key >= "1" && event.key <= "4" && !event.ctrlKey && !event.altKey) {
    const tabs = ["overview", "anatomy", "clinical", "references"];
    const index = parseInt(event.key) - 1;
    if (tabs[index]) {
      switchTab(tabs[index]);
    }
    return;
  }

  // + and - for zoom
  if (event.key === "+" || event.key === "=") {
    zoomDiagram(1.2);
    return;
  }
  if (event.key === "-") {
    zoomDiagram(0.8);
    return;
  }

  // 0 to reset zoom
  if (event.key === "0") {
    resetZoom();
    return;
  }
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
