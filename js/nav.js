/* ============================================
   SafePay – Navigation & Shared Interactions
   js/nav.js
   ============================================ */

'use strict';

/* ──────────────────────────────────────
   Screen routing
   Each screen links to others via data-goto="screen-name"
   or window.goto('screen-name') programmatically
────────────────────────────────────── */
const SCREENS = {
  onboarding : 'screens/onboarding.html',
  dashboard  : 'screens/dashboard.html',
  devices    : 'screens/devices.html',
  cards      : 'screens/cards.html',
  analytics  : 'screens/analytics.html',
  security   : 'screens/security.html',
  settings   : 'screens/settings.html',
};

const NAV_ITEMS = ['dashboard', 'devices', 'cards', 'analytics', 'security', 'settings'];

/**
 * Navigate to a screen
 * @param {string} screen - key in SCREENS
 */
window.goto = function(screen) {
  if (SCREENS[screen]) {
    window.location.href = SCREENS[screen];
  }
};

/**
 * Mark the active nav item based on current page filename
 */
function setActiveNav() {
  const path = window.location.pathname;
  const filename = path.split('/').pop().replace('.html', '');

  document.querySelectorAll('.nav-item[data-screen]').forEach(item => {
    const target = item.dataset.screen;
    item.classList.toggle('active', target === filename);
  });
}

/**
 * Update status bar clock
 */
function updateClock() {
  const el = document.querySelector('.status-time');
  if (!el) return;
  const now = new Date();
  const h = now.getHours().toString().padStart(2, '0');
  const m = now.getMinutes().toString().padStart(2, '0');
  el.textContent = `${h}:${m}`;
}

/**
 * Toggle switch interaction
 */
function initToggles() {
  document.querySelectorAll('.toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('on');
    });
  });
}

/**
 * data-goto click routing
 */
function initLinks() {
  document.querySelectorAll('[data-goto]').forEach(el => {
    el.addEventListener('click', () => {
      const target = el.dataset.goto;
      window.goto(target);
    });
  });
}

/**
 * Animate page elements on load
 */
function initAnimations() {
  document.querySelectorAll('.animate-in').forEach((el, i) => {
    el.style.animationDelay = `${i * 60}ms`;
  });
}

/**
 * Period tab switching (analytics)
 */
function initPeriodTabs() {
  document.querySelectorAll('.period-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const group = tab.closest('.period-tabs');
      group.querySelectorAll('.period-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
}

/* ── Boot ── */
document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  updateClock();
  setInterval(updateClock, 30000);
  initToggles();
  initLinks();
  initAnimations();
  initPeriodTabs();
});
