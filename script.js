/* ============================================================
   NexusAnalytics — script.js (v2 mejorado)
   ============================================================ */

/* ── Navegación entre páginas ── */
const navItems = document.querySelectorAll(".nav-item");
const pages    = document.querySelectorAll(".page");
const pageTitle = document.getElementById("pageTitle");

const pageTitles = {
  "dashboard-section":     "Business <span>Dashboard</span>",
  "analytics-section":     "Analytics <span>Avanzados</span>",
  "reportes-section":      "Reportes <span>Q2 2026</span>",
  "clientes-section":      "Gestión de <span>Clientes</span>",
  "ventas-section":        "Panel de <span>Ventas</span>",
  "productos-section":     "Inventario de <span>Productos</span>",
  "integraciones-section": "Config de <span>Integraciones</span>"
};

function showPage(targetId) {
  pages.forEach(p => p.classList.remove("active"));
  navItems.forEach(i => i.classList.remove("active"));

  const target = document.getElementById(targetId);
  if (target) target.classList.add("active");

  const activeNav = document.querySelector(`.nav-item[data-page="${targetId}"]`);
  if (activeNav) activeNav.classList.add("active");

  if (pageTitle && pageTitles[targetId]) {
    pageTitle.innerHTML = pageTitles[targetId];
  }

  // Cerrar sidebar en móvil al navegar
  closeSidebar();
}

navItems.forEach(item => {
  item.addEventListener("click", () => {
    showPage(item.getAttribute("data-page"));
  });
});

/* ── Hamburger / Sidebar móvil ── */
const hamburgerBtn   = document.getElementById("hamburgerBtn");
const sidebar        = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");

function openSidebar() {
  sidebar.classList.add("open");
  sidebarOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeSidebar() {
  sidebar.classList.remove("open");
  sidebarOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

if (hamburgerBtn) {
  hamburgerBtn.addEventListener("click", () => {
    sidebar.classList.contains("open") ? closeSidebar() : openSidebar();
  });
}

if (sidebarOverlay) {
  sidebarOverlay.addEventListener("click", closeSidebar);
}

/* ── Reloj en vivo ── */
function updateClock() {
  const el = document.getElementById("lastUpdate");
  if (el) el.textContent = new Date().toLocaleTimeString("es-AR");
}
updateClock();
setInterval(updateClock, 1000);

/* ── Filtros de tiempo ── */
const timeButtons = document.querySelectorAll(".time-btn");
const chartBadge  = document.getElementById("chart-period-badge");

const periodLabels = {
  "7d":  "Últimos 7 días",
  "30d": "Últimos 30 días",
  "90d": "Últimos 90 días",
  "1y":  "Último año"
};

timeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    timeButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const range = btn.dataset.range;
    if (chartBadge && periodLabels[range]) {
      chartBadge.textContent = periodLabels[range];
    }

    // Feedback visual en los KPIs (simulación de actualización)
    animateKpiUpdate();
    showToast(`Vista actualizada: ${periodLabels[range] || range}`);
  });
});

function animateKpiUpdate() {
  document.querySelectorAll(".kpi-value").forEach(el => {
    el.style.opacity = "0.3";
    el.style.transform = "translateY(4px)";
    setTimeout(() => {
      el.style.transition = "opacity 0.3s, transform 0.3s";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 200);
  });
}

/* ── Botón exportar ── */
const exportBtn = document.getElementById("exportBtn");
if (exportBtn) {
  exportBtn.addEventListener("click", () => {
    showToast("Generando reporte... Estará listo en breve.");
  });
}

/* ── Modal de contratos ── */
const modal       = document.getElementById("contractModal");
const closeModal  = document.getElementById("closeModal");
const closeModal2 = document.getElementById("closeModal2");

function openContractModal(btn) {
  const client = btn.dataset.client || "—";
  const value  = btn.dataset.value  || "—";
  const status = btn.dataset.status || "—";
  const date   = btn.dataset.date   || "—";

  document.getElementById("modal-client").textContent = client;
  document.getElementById("modal-value").textContent  = value;
  document.getElementById("modal-date").textContent   = date;

  const statusEl = document.getElementById("modal-status");
  statusEl.innerHTML = "";
  const pill = document.createElement("span");
  pill.className = "status-pill " + (
    status === "Activo"   ? "active"  :
    status === "Pendiente"? "pending" : "closed"
  );
  pill.textContent = status;
  statusEl.appendChild(pill);

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

document.querySelectorAll(".open-contract").forEach(btn => {
  btn.addEventListener("click", () => openContractModal(btn));
});

function closeContractModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

if (closeModal)  closeModal.addEventListener("click",  closeContractModal);
if (closeModal2) closeModal2.addEventListener("click", closeContractModal);

if (modal) {
  modal.addEventListener("click", e => {
    if (e.target === modal) closeContractModal();
  });
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeContractModal();
});

/* ── Filtros de actividad ── */
const activityFilters = document.querySelectorAll(".activity-filter");
const feedItems       = document.querySelectorAll("#activity-feed .feed-item");

activityFilters.forEach(filter => {
  filter.addEventListener("click", () => {
    activityFilters.forEach(f => f.classList.remove("active"));
    filter.classList.add("active");

    const category = filter.dataset.filter;

    feedItems.forEach(item => {
      if (category === "all" || item.dataset.category === category) {
        item.style.display = "flex";
        item.style.animation = "fadeUp 0.3s ease both";
      } else {
        item.style.display = "none";
      }
    });
  });
});

/* ── Toast notifications ── */
function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}

// Exponer globalmente para uso en onclick inline
window.showToast = showToast;
