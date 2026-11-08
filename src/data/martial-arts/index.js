// src/data/martial-arts/index.js
import { UniversalCombatDatabase } from './universal-combat-system.js';
import { renderStylePage } from './renderer.js'; // 🛡️ FIX: Import renderer

// 🛡️ State management for SPA routing
let currentView = 'directory';
let currentStyle = null;

// 🛠️ Glob all .js files in the current directory
const styleModules = import.meta.glob('./*.js', { eager: true });

// 🛡️ BUILD FIX: Use a dynamic variable to prevent Vite static analysis errors 
// on utility files that don't export `styleData` (like renderer.js)
const DATA_KEY = 'styleData';

const regularStyles = Object.entries(styleModules)
  .filter(([path]) => 
    !path.includes('universal-combat-system') && // 🛡️ FIX: Correct filename filter
    !path.includes('renderer') && 
    !path.includes('index')
  )
  .map(([, module]) => module[DATA_KEY] || module.default?.[DATA_KEY])
  .filter(Boolean);

const universalSystem = UniversalCombatDatabase?.system?.styleData;

// 🚀 MERGE NEW DATABASES into the universal system object for the renderer
if (universalSystem && UniversalCombatDatabase) {
  universalSystem.precision = UniversalCombatDatabase.precision;
  universalSystem.meta = UniversalCombatDatabase.meta;
  universalSystem.recovery = UniversalCombatDatabase.recovery;
}

// 📤 EXPORTS FOR ASTRO
// 🛡️ FIX: Include universalSystem in the registry so Astro generates its static page route
export const martialArtsRegistry = universalSystem ? [...regularStyles, universalSystem] : regularStyles;
export const universalSystemData = universalSystem;

// --- RENDER FUNCTIONS ---

function renderUniversalBanner() {
  if (!universalSystem) return '';

  const principles = universalSystem.keyPrinciples || [];
  // 🛡️ FIX: Keys updated to match the exact IDs generated in renderer.js
  const sections = [
    { key: 'precision-section', icon: '🎯', label: 'Precision Combat', count: '700+ techniques', desc: 'Kyusho, nerve clusters, fascial lines, bioenergetic targets' },
    { key: 'meta-section', icon: '🧠', label: 'Meta-Layers', count: '100+ frameworks', desc: 'Philosophy, cognition, cultural adaptation, longevity' },
    { key: 'recovery-section', icon: '🔄', label: 'Recovery Systems', count: '100+ protocols', desc: 'Active, passive, mental, integrated regeneration' },
  ];

  return `
    <section id="universal-pinned" class="sticky top-0 z-50 mb-10 -mx-6 px-6 py-5 bg-[#1d2021]/95 backdrop-blur-md border-y-2 border-slate-500/40 shadow-[0_4px_20px_rgba(100,116,139,0.15)]">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div class="flex items-center gap-3">
            <span class="text-3xl">${universalSystem.icon}</span>
            <div>
              <div class="flex items-center gap-2">
                <h1 class="text-lg font-semibold text-slate-200 tracking-tight">${universalSystem.name}</h1>
                <span class="text-[9px] px-1.5 py-0.5 rounded bg-slate-500/20 text-slate-400 border border-slate-500/30 uppercase font-bold tracking-wider">Master</span>
              </div>
              <p class="text-[11px] text-slate-500 italic mt-0.5">${universalSystem.origin}</p>
            </div>
          </div>
          <button onclick="document.getElementById('universal-details').classList.toggle('hidden')" 
                  class="text-[11px] px-3 py-1.5 rounded-full border border-slate-500/30 bg-slate-500/10 text-slate-400 hover:bg-slate-500/20 hover:text-slate-300 transition-colors">
            ▾ Toggle Details
          </button>
        </div>

        <div id="universal-details" class="hidden space-y-4">
          <div class="flex flex-wrap gap-1.5 pt-2 border-t border-slate-500/20">
            ${principles.map(p => `<span class="text-[10px] px-2 py-0.5 rounded-full bg-slate-500/10 text-slate-400 border border-slate-500/30">${p}</span>`).join('')}
          </div>
          <div class="grid gap-2 md:grid-cols-3">
            ${sections.map(s => `
              <a href="#${s.key}" class="group block p-3 rounded-lg bg-[#282828]/60 border border-slate-500/20 hover:border-slate-500/50 hover:bg-[#3c3836] transition-all">
                <div class="flex items-center gap-2 mb-1">
                  <span class="text-lg">${s.icon}</span>
                  <span class="text-[12px] font-medium text-slate-300 group-hover:text-slate-100">${s.label}</span>
                  <span class="ml-auto text-[9px] px-1.5 py-0.5 rounded bg-slate-500/15 text-slate-500 font-mono">${s.count}</span>
                </div>
                <p class="text-[10px] text-slate-500 leading-snug">${s.desc}</p>
              </a>
            `).join('')}
          </div>
          <p class="text-[11px] text-slate-400 leading-relaxed pt-2 border-t border-slate-500/20">
            <span class="text-slate-300 font-medium">Synopsis:</span> ${universalSystem.description}
          </p>
        </div>

        <div class="flex flex-wrap gap-x-4 gap-y-1 text-[10px] text-slate-500 mt-2">
          <span>⚔️ <span class="text-slate-400">1000+ Techniques</span></span>
          <span>🎯 <span class="text-slate-400">7 Precision Categories</span></span>
          <span>🧠 <span class="text-slate-400">100+ Meta-Frameworks</span></span>
          <span>🔄 <span class="text-slate-400">80+ Recovery Protocols</span></span>
          <span class="ml-auto text-slate-600">v${UniversalCombatDatabase.metadata.version}</span>
        </div>
      </div>
    </section>
  `;
}

function renderStyleCard(style) {
  return `
    <div class="style-card-link group block p-5 rounded-xl border border-[#3c3836] bg-[#282828]/30 hover:bg-[#3c3836] hover:border-[#504945] transition-all cursor-pointer" data-style-id="${style.id}">
      <div class="flex items-start gap-3 mb-3">
        <span class="text-3xl">${style.icon}</span>
        <div class="flex-1 min-w-0">
          <h3 class="text-[15px] font-medium text-[#ebdbb2] group-hover:text-[#fbf1c7] truncate">${style.name}</h3>
          <p class="text-[10px] text-[#928374] mt-0.5">${style.origin}</p>
        </div>
      </div>
      <p class="text-[11px] text-[#a89984] leading-relaxed line-clamp-3">${style.description}</p>
      <div class="flex flex-wrap gap-1 mt-3">
        ${(style.keyPrinciples || []).slice(0, 2).map(p => 
          `<span class="text-[9px] px-1.5 py-0.5 rounded-full border ${style.color} truncate max-w-[140px]">${p}</span>`
        ).join('')}
      </div>
    </div>
  `;
}

// --- MAIN APP ROUTER ---

function renderApp() {
  const app = document.getElementById('app');
  if (!app) return; // 🛡️ Safety check: exit if DOM isn't ready
  
  if (currentView === 'directory') {
    app.innerHTML = `
      <div class="min-h-screen bg-[#1d2021] text-[#ebdbb2]">
        <div class="max-w-7xl mx-auto px-6 pt-20 pb-16">
          ${renderUniversalBanner()}
          <header class="mb-10">
            <h2 class="text-2xl font-medium text-[#ebdbb2] mb-1">Martial Arts Directory</h2>
            <p class="text-[12px] text-[#928374]">${martialArtsRegistry.length} styles available</p>
          </header>
          <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            ${martialArtsRegistry.map(renderStyleCard).join('')}
          </div>
        </div>
      </div>
    `;
    
    // Attach Event Listeners to Cards
    document.querySelectorAll('.style-card-link').forEach(card => {
      card.addEventListener('click', () => {
        const styleId = card.dataset.styleId;
        const selectedStyle = martialArtsRegistry.find(s => s.id === styleId);
        if (selectedStyle) {
          currentStyle = selectedStyle;
          currentView = 'detail';
          window.history.pushState({ view: 'detail', id: styleId }, '', `#${styleId}`);
          renderApp();
          window.scrollTo(0, 0); // Scroll to top on page change
        }
      });
    });

  } else if (currentView === 'detail' && currentStyle) {
    const { html } = renderStylePage(currentStyle);
    
    app.innerHTML = `
      <div class="min-h-screen bg-[#1d2021] text-[#ebdbb2]">
        <div class="max-w-7xl mx-auto px-6 pt-8 pb-16">
          
          <!-- Back Button -->
          <button id="back-to-dir" class="mb-6 text-[12px] px-3 py-1.5 rounded-full border border-[#3c3836] bg-[#282828]/50 text-[#a89984] hover:bg-[#3c3836] hover:text-[#fbf1c7] transition-colors flex items-center gap-2">
            ← Back to Directory
          </button>
          
          <!-- Style Header -->
          <header class="mb-8 pb-6 border-b border-[#3c3836]">
            <div class="flex items-center gap-4 mb-4">
              <span class="text-5xl">${currentStyle.icon}</span>
              <div>
                <h1 class="text-3xl font-bold text-[#ebdbb2] tracking-tight">${currentStyle.name}</h1>
                <p class="text-[13px] text-[#928374] mt-1">${currentStyle.origin}</p>
              </div>
            </div>
            <p class="text-[14px] text-[#a89984] leading-relaxed max-w-3xl">${currentStyle.description}</p>
            ${html.principles || ''}
          </header>

          ${html.toc || ''}
          
          <!-- Rendered Curriculum Sections -->
          <div class="space-y-12">
            ${html.techniques || ''}
            ${html.precision || ''}
            ${html.meta || ''}
            ${html.recovery || ''}
            ${html.physical || ''}
            ${html.knowledge || ''}
            ${html.equipment || ''}
            ${html.drills || ''}
            ${html.tips || ''}
          </div>
        </div>
      </div>
    `;
    
    // Back Button Logic
    document.getElementById('back-to-dir').addEventListener('click', () => {
      currentView = 'directory';
      currentStyle = null;
      window.history.pushState({ view: 'directory' }, '', window.location.pathname);
      renderApp();
    });

    // Smooth Scroll for Table of Contents
    document.querySelectorAll('.toc-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }
}

// --- BROWSER HISTORY SUPPORT (Back/Forward Arrows) ---
// 🛡️ SSR Guard: Only attach listeners if we are in the browser
if (typeof window !== 'undefined') {
  window.addEventListener('popstate', (event) => {
    if (event.state && event.state.view === 'detail') {
      const selectedStyle = martialArtsRegistry.find(s => s.id === event.state.id);
      if (selectedStyle) {
        currentStyle = selectedStyle;
        currentView = 'detail';
        renderApp();
      }
    } else {
      currentView = 'directory';
      currentStyle = null;
      renderApp();
    }
  });
}

// --- INITIALIZATION ---
function init() {
  // 🛡️ SSR Guard: Prevent execution on the server
  if (typeof window === 'undefined') return; 

  // Handle direct URL loads (e.g., user shares a link to site.com/#karate)
  const hash = window.location.hash.substring(1);
  if (hash) {
    const selectedStyle = martialArtsRegistry.find(s => s.id === hash);
    if (selectedStyle) {
      currentStyle = selectedStyle;
      currentView = 'detail';
    }
  }
  renderApp();
}

// 🛡️ Only run init() if we are in the browser
if (typeof window !== 'undefined') {
  init();
}