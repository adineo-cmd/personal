// src/data/martial-arts/renderer.js

// 🛡️ FIX: Define difficulty levels locally to prevent import errors and circular dependencies
const difficultyLevels = {
  beginner: { label: 'Beginner', bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/30' },
  intermediate: { label: 'Intermediate', bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/30' },
  advanced: { label: 'Advanced', bg: 'bg-rose-500/10', text: 'text-rose-400', border: 'border-rose-500/30' },
  expert: { label: 'Expert', bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/30' },
  'all levels': { label: 'All Levels', bg: 'bg-sky-500/10', text: 'text-sky-400', border: 'border-sky-500/30' },
  'all': { label: 'All Levels', bg: 'bg-sky-500/10', text: 'text-sky-400', border: 'border-sky-500/30' },
};

// 🛡️ FIX: Case-insensitive difficulty lookup with .trim() to handle trailing spaces in your data
function getDifficulty(item) {
  const key = (item.difficulty || 'beginner').toString().toLowerCase().trim();
  return difficultyLevels[key] || difficultyLevels.beginner;
}

function formatTitle(str) {
  if (!str) return '';
  let result = str.charAt(0).toUpperCase();
  for (let i = 1; i < str.length; i++) {
    const char = str.charAt(i);
    if (char === char.toUpperCase() && char !== char.toLowerCase()) {
      result += ' ' + char;
    } else {
      result += char;
    }
  }
  return result;
}

function parseCommaList(val) {
  if (Array.isArray(val)) return val;
  if (!val) return [];
  return val.split(',').map(s => s.trim());
}

function parseArrowList(val) {
  if (Array.isArray(val)) return val;
  if (!val) return [];
  return val.split('→').map(s => s.trim());
}

function renderTechniqueCard(item) {
  const diff = getDifficulty(item);
  const anatomyArr = parseCommaList(item.anatomy);
  const progArr = parseArrowList(item.progression);
  const focusText = item.focus || item.focusCues || item.focus_cues;
  
  // Universal Tactical Data Block (Handles both camelCase and snake_case)
  const tactical = [];
    // Execution, Timing & Movement Dynamics
  if (item.timing) tactical.push(`<span class="text-[#a89984] font-bold">Timing:</span> ${item.timing}`);
  if (item.recovery) tactical.push(`<span class="text-[#a89984] font-bold">Recovery:</span> ${item.recovery}`);
  if (item.retraction) tactical.push(`<span class="text-[#a89984] font-bold">Retract:</span> ${item.retraction}`);
  if (item.advances) tactical.push(`<span class="text-[#a89984] font-bold">Advances:</span> ${item.advances}`);
  if (item.retreats) tactical.push(`<span class="text-[#a89984] font-bold">Retreats:</span> ${item.retreats}`);
  if (item.angles) tactical.push(`<span class="text-[#a89984] font-bold">Angles:</span> ${item.angles}`);
  if (item.pivots) tactical.push(`<span class="text-[#a89984] font-bold">Pivots:</span> ${item.pivots}`);
  
  // Biomechanics & Targeting
  if (item.weightShift) tactical.push(`<span class="text-[#a89984] font-bold">Weight Shift:</span> ${item.weightShift}`);
  if (item.lineOfAttack) tactical.push(`<span class="text-[#a89984] font-bold">Line of Attack:</span> ${item.lineOfAttack}`);
  if (item.strikingSurface) tactical.push(`<span class="text-[#a89984] font-bold">Striking Surface:</span> ${item.strikingSurface}`);
  if (item.stance) tactical.push(`<span class="text-[#a89984] font-bold">Stance:</span> ${item.stance}`);
  if (item.stanceShift) tactical.push(`<span class="text-[#a89984] font-bold">Stance Shift:</span> ${item.stanceShift}`);
  if (item.weightDistribution) tactical.push(`<span class="text-[#a89984] font-bold">Weight Dist:</span> ${item.weightDistribution}`);
  
  // Grappling & Weapons Specifics
  if (item.grips) tactical.push(`<span class="text-[#a89984] font-bold">Grips:</span> ${item.grips}`);
  if (item.leveragePoints) tactical.push(`<span class="text-[#a89984] font-bold">Leverage:</span> ${item.leveragePoints}`);
  if (item.finish) tactical.push(`<span class="text-[#a89984] font-bold">Finish:</span> ${item.finish}`);
  
  // Conditioning Metrics
  if (item.setsReps) tactical.push(`<span class="text-[#a89984] font-bold">Sets/Reps:</span> ${item.setsReps}`);
  if (item.workRest) tactical.push(`<span class="text-[#a89984] font-bold">Work/Rest:</span> ${item.workRest}`);
  if (item.duration) tactical.push(`<span class="text-[#a89984] font-bold">Duration:</span> ${item.duration}`);
  if (item.intensity) tactical.push(`<span class="text-[#a89984] font-bold">Intensity:</span> ${item.intensity}`);
  if (item.rest) tactical.push(`<span class="text-[#a89984] font-bold">Rest:</span> ${item.rest}`);

  // 🚀 NEW: Context Application (Highly relevant for Meta & Recovery data)
  if (item.contextApplication) tactical.push(`<span class="text-[#a89984] font-bold">Context:</span> ${item.contextApplication}`);

  const defenseText = item.defenseAgainst || item.defense_against;
  if (defenseText && defenseText !== 'N/A') tactical.push(`<span class="text-[#a89984] font-bold">Defends:</span> ${defenseText}`);
  
  const counterText = item.counterSetup || item.counter_setup;
  if (counterText) tactical.push(`<span class="text-[#a89984] font-bold">Sets up:</span> ${counterText}`);

  const leverText = item.leveragePoints || item.leverage_points;

  return `
    <div class="border border-[#3c3836] rounded-lg p-4 bg-[#282828]/30 hover:bg-[#3c3836] transition-colors flex flex-col h-full">
      <div class="flex justify-between items-start mb-2">
        <h4 class="text-[14px] font-medium text-[#ebdbb2] leading-tight">${item.name} ${item.leftRightVariant ? '<span class="text-[10px] text-[#928374] ml-1">(L/R)</span>' : ''}</h4>
        <span class="text-[10px] px-2 py-0.5 rounded-full border ${diff.border} ${diff.bg} ${diff.text} whitespace-nowrap ml-2">${diff.label}</span>
      </div>
      ${item.mechanics ? `<p class="text-[12px] text-[#a89984] mb-2 italic">⚙️ ${item.mechanics}</p>` : ''}
      
      ${item.grips || leverText || item.finish || item.positions ? `
        <div class="mb-3 grid grid-cols-2 gap-x-2 gap-y-1 text-[11px] text-[#928374] bg-[#3c3836]/50 p-2 rounded border border-[#3c3836]/30">
          ${item.grips ? `<div><span class="text-[#a89984] font-bold">Grips:</span> ${item.grips}</div>` : ''}
          ${item.positions ? `<div><span class="text-[#a89984] font-bold">Pos:</span> ${item.positions}</div>` : ''}
          ${leverText ? `<div><span class="text-[#a89984] font-bold">Lever:</span> ${leverText}</div>` : ''}
          ${item.finish ? `<div><span class="text-[#a89984] font-bold">Finish:</span> ${item.finish}</div>` : ''}
        </div>
      ` : ''}

      ${tactical.length > 0 ? `
        <div class="mb-3 text-[11px] text-[#928374] space-y-1 bg-[#3c3836]/30 p-2 rounded border border-[#3c3836]/20">
          ${tactical.map(t => `<div>${t}</div>`).join('')}
        </div>
      ` : ''}

      ${anatomyArr.length ? `
        <div class="mb-3">
          <div class="text-[10px] text-[#928374] mb-1">Anatomy:</div>
          <div class="flex flex-wrap gap-1">
            ${anatomyArr.map(a => `<span class="text-[10px] px-1.5 py-0.5 rounded bg-[#3c3836] text-[#a89984] border border-[#3c3836]/50">${a}</span>`).join('')}
          </div>
        </div>
      ` : ''}

      <div class="mt-auto pt-3 border-t border-[#3c3836]/50 space-y-1.5 text-[11px] text-[#928374]">
        ${focusText ? `<div class="flex gap-2"><span>🎯</span> <span class="text-[#a89984]">${focusText}</span></div>` : ''}
        ${progArr.length ? `<div class="flex gap-2"><span>📈</span> <span class="text-[#a89984]">${progArr.join(' → ')}</span></div>` : ''}
        ${item.transitions ? `<div class="flex gap-2"><span>🔀</span> <span class="text-[#a89984]">Transitions: ${item.transitions}</span></div>` : ''}
        ${item.reflectionQuestion ? `<div class="flex gap-2 text-[#8ec07c]/90"><span>🤔</span> <span class="italic">"${item.reflectionQuestion}"</span></div>` : ''}
        ${item.safety ? `<div class="flex gap-2 text-[#8ec07c]/80"><span>⚠️</span> <span>${item.safety}</span></div>` : ''}
      </div>
    </div>
  `;
}

function renderPhysicalCard(item) {
  const diff = getDifficulty(item);
  const progArr = parseArrowList(item.progression);
  const mechanicsText = item.mechanics || item.description;
  const focusText = item.focus || item.focusCues || item.focus_cues;
  
  return `
    <div class="border border-[#3c3836] rounded-lg p-4 bg-[#282828]/30 hover:bg-[#3c3836] transition-colors flex flex-col h-full">
      <div class="flex justify-between items-start mb-2">
        <h4 class="text-[14px] font-medium text-[#ebdbb2] leading-tight">${item.name}</h4>
        <span class="text-[10px] px-2 py-0.5 rounded-full border ${diff.border} ${diff.bg} ${diff.text} whitespace-nowrap ml-2">${diff.label}</span>
      </div>
      ${item.type ? `<p class="text-[11px] text-[#a89984] mb-1 font-bold uppercase tracking-wide">${item.type}</p>` : ''}
      ${mechanicsText ? `<p class="text-[12px] text-[#a89984] mb-3 italic">⚙️ ${mechanicsText}</p>` : ''}
      
      <div class="mt-auto pt-3 border-t border-[#3c3836]/50 space-y-1.5 text-[11px] text-[#928374]">
        ${focusText ? `<div class="flex gap-2"><span>🎯</span> <span class="text-[#a89984]">${focusText}</span></div>` : ''}
        ${progArr.length ? `<div class="flex gap-2"><span>📈</span> <span class="text-[#a89984]">${progArr.join(' → ')}</span></div>` : ''}
        ${item.roundStructure || item.structure ? `<div class="flex gap-2"><span>⏱️</span> <span class="text-[#a89984]">Rounds: ${item.roundStructure || item.structure}</span></div>` : ''}
        ${item.duration ? `<div class="flex gap-2"><span>⏱️</span> <span class="text-[#a89984]">Duration: ${item.duration}</span></div>` : ''}
        ${item.safety ? `<div class="flex gap-2 text-[#8ec07c]/80"><span>⚠️</span> <span>${item.safety}</span></div>` : ''}
      </div>
    </div>
  `;
}

function renderKnowledgeCard(item) {
  return `
    <div class="bg-[#282828]/30 p-4 rounded border border-[#3c3836] hover:bg-[#3c3836] transition-colors h-full">
      <h4 class="text-[13px] font-medium text-[#ebdbb2] mb-2">${item.name}</h4>
      ${item.description ? `<p class="text-[12px] text-[#a89984] leading-relaxed">${item.description}</p>` : ''}
    </div>
  `;
}

function renderEquipmentCard(item) {
  const usageText = item.usage || item.holding_usage;
  return `
    <div class="bg-[#282828]/30 p-4 rounded border border-[#3c3836] hover:bg-[#3c3836] transition-colors h-full relative">
      ${item.mandatory === true ? `<span class="absolute top-2 right-2 text-[9px] px-1.5 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30 uppercase font-bold">Required</span>` : ''}
      ${item.mandatory === false ? `<span class="absolute top-2 right-2 text-[9px] px-1.5 py-0.5 rounded bg-zinc-500/20 text-zinc-400 border border-zinc-500/30 uppercase font-bold">Optional</span>` : ''}
      <h4 class="text-[13px] font-medium text-[#ebdbb2] mb-2 pr-16">🛡️ ${item.name}</h4>
      ${item.purpose ? `<p class="text-[12px] text-[#a89984] mb-1"><span class="text-[#928374] font-bold">Purpose:</span> ${item.purpose}</p>` : ''}
      ${usageText ? `<p class="text-[12px] text-[#a89984]"><span class="text-[#928374] font-bold">Usage:</span> ${usageText}</p>` : ''}
    </div>
  `;
}

function renderDrillCard(item) {
  const diff = getDifficulty(item);
  const chainText = item.chain || item.sequence || item.combo;
  
  return `
    <div class="border border-[#3c3836] rounded-lg p-4 bg-[#282828]/30 hover:bg-[#3c3836] transition-colors flex flex-col h-full">
      <div class="flex justify-between items-start mb-2">
        <h4 class="text-[14px] font-medium text-[#ebdbb2] leading-tight">${item.name}</h4>
        <span class="text-[10px] px-2 py-0.5 rounded-full border ${diff.border} ${diff.bg} ${diff.text} whitespace-nowrap ml-2">${diff.label}</span>
      </div>
      ${item.description ? `<p class="text-[11px] text-[#a89984] mb-2">${item.description}</p>` : ''}
      ${chainText ? `<p class="text-[12px] text-[#a89984] mb-1 font-mono bg-[#3c3836] px-2 py-1 rounded border border-[#3c3836]/50">🔗 ${chainText}</p>` : ''}
      ${item.structure ? `<p class="text-[11px] text-[#928374] mb-2 italic">⏱️ ${item.structure}</p>` : ''}
      ${item.mechanics ? `<p class="text-[11px] text-[#928374] mb-2 italic">${item.mechanics}</p>` : ''}
      ${item.purpose ? `<p class="text-[11px] text-[#928374] mb-2"><span class="font-bold text-[#a89984]">Purpose:</span> ${item.purpose}</p>` : ''}
      
      <div class="mt-auto pt-3 border-t border-[#3c3836]/50 space-y-1.5 text-[11px] text-[#928374]">
        ${item.reps ? `<div class="flex gap-2"><span>🔄</span> <span class="text-[#a89984]">Reps/Time: ${item.reps}</span></div>` : ''}
        ${item.focus ? `<div class="flex gap-2"><span>🎯</span> <span class="text-[#a89984]">${item.focus}</span></div>` : ''}
        ${item.progression ? `<div class="flex gap-2"><span>📈</span> <span class="text-[#a89984]">Prog: ${item.progression}</span></div>` : ''}
        ${item.safety ? `<div class="flex gap-2 text-[#8ec07c]/80"><span>⚠️</span> <span>${item.safety}</span></div>` : ''}
      </div>
    </div>
  `;
}

function renderTipCard(item) {
  const diff = getDifficulty(item);
  const title = item.name || item.problem || item.error || 'Common Issue';
  const errorText = item.error || item.problem;
  
  return `
    <div class="border border-[#3c3836] rounded-lg p-4 bg-[#282828]/30 hover:bg-[#3c3836] transition-colors flex flex-col h-full">
      <div class="flex justify-between items-start mb-2">
        <h4 class="text-[14px] font-medium text-[#ebdbb2] leading-tight">❌ ${title}</h4>
        <span class="text-[10px] px-2 py-0.5 rounded-full border ${diff.border} ${diff.bg} ${diff.text} whitespace-nowrap ml-2">${diff.label}</span>
      </div>
      ${errorText ? `<p class="text-[12px] text-[#fe8019] mb-2"><span class="font-bold">Issue:</span> ${errorText}</p>` : ''}
      ${item.fix ? `<p class="text-[12px] text-[#b8bb26] mb-2"><span class="font-bold">Fix:</span> ${item.fix}</p>` : ''}
      
      <div class="mt-auto pt-3 border-t border-[#3c3836]/50 text-[11px] text-[#928374]">
        ${(item.progression || item.drill) ? `<div class="flex gap-2"><span>📈</span> <span class="text-[#a89984]">Drill: ${item.progression || item.drill}</span></div>` : ''}
      </div>
    </div>
  `;
}

function renderTrainingDrillCard(name, item) {
  const formattedName = formatTitle(name);
  return `
    <div class="bg-[#282828]/30 p-4 rounded border border-[#3c3836] hover:bg-[#3c3836] transition-colors h-full">
      <h4 class="text-[13px] font-medium text-[#ebdbb2] mb-2">🏃 ${formattedName}</h4>
      ${item.description ? `<p class="text-[12px] text-[#a89984] leading-relaxed">${item.description}</p>` : ''}
    </div>
  `;
}

export function renderStylePage(styleData) {
  const { curriculum, keyPrinciples, color, precision, meta, recovery } = styleData;
  const html = { principles: '', toc: '', techniques: '', precision: '', meta: '', recovery: '', physical: '', knowledge: '', equipment: '', drills: '', tips: '' };

  if (keyPrinciples && keyPrinciples.length > 0) {
    let str = '<div class="mt-6 pt-4 border-t border-[#3c3836]"><div class="text-[11px] font-medium text-[#a89984] mb-2">Core Principles</div><div class="flex flex-wrap gap-2">';
    keyPrinciples.forEach(p => { str += `<span class="text-[10px] px-2.5 py-1 rounded-full border ${color}">${p}</span>`; });
    html.principles = str + '</div></div>';
  }

  const tocItems = [];
  if (curriculum?.techniques && Object.values(curriculum.techniques).some(arr => arr?.length)) tocItems.push({ id: 'techniques', label: 'Techniques', icon: '🥋' });
  
  // 🚀 FIXED TOC ITEMS (Handles nested data structures safely)
  if (precision) {
    const hasPrecision = Object.values(precision).some(arr => Array.isArray(arr) && arr.length > 0);
    if (hasPrecision) tocItems.push({ id: 'precision-section', label: 'Precision Combat', icon: '🎯' });
  }
  
  if (meta) {
    const metaData = meta.metaLayersData || meta;
    const layers = metaData.layers || metaData;
    const hasMeta = layers && typeof layers === 'object' && Object.values(layers).some(arr => Array.isArray(arr) && arr.length > 0);
    if (hasMeta) tocItems.push({ id: 'meta-section', label: 'Meta-Layers', icon: '🧠' });
  }
  
  if (recovery) {
    const recData = recovery.recoveryData || recovery;
    const protocols = recData.protocols || recData;
    if (Array.isArray(protocols) && protocols.length > 0) {
      tocItems.push({ id: 'recovery-section', label: 'Recovery Systems', icon: '🔄' });
    }
  }

  if (curriculum?.physicalTraining && Object.values(curriculum.physicalTraining).some(arr => arr?.length)) tocItems.push({ id: 'physical', label: 'Physical', icon: '🏋️' });
  if (curriculum?.knowledge && Object.values(curriculum.knowledge).some(arr => arr?.length)) tocItems.push({ id: 'knowledge', label: 'Knowledge', icon: '📖' });
  if (curriculum?.equipment && Object.values(curriculum.equipment).some(arr => arr?.length)) tocItems.push({ id: 'equipment', label: 'Equipment', icon: '🥊' });
  if (curriculum?.trainingDrills || curriculum?.enduranceDrills?.length || curriculum?.combinationDrills?.length) tocItems.push({ id: 'drills', label: 'Drills', icon: '🔁' });
  if (curriculum?.problemAreaTips?.length) tocItems.push({ id: 'tips', label: 'Troubleshooting', icon: '🛠️' });

  if (tocItems.length > 0) {
    let str = '<nav class="sticky top-24 z-30 bg-[#1d2021]/90 backdrop-blur border-b border-[#3c3836] mb-8"><div class="max-w-7xl mx-auto px-6 py-3"><div class="flex flex-wrap gap-2 overflow-x-auto scrollbar-hide">';
    tocItems.forEach(item => { str += `<a href="#${item.id}" class="toc-link px-3 py-1.5 text-xs rounded-full border border-[#3c3836] bg-transparent text-[#928374] hover:bg-[#3c3836] hover:text-[#ebdbb2] transition-colors whitespace-nowrap">${item.icon} ${item.label}</a>`; });
    html.toc = str + '</div></div></nav>';
  }

  if (curriculum?.techniques) {
    const entries = Object.entries(curriculum.techniques).filter(e => e[1] && e[1].length);
    if (entries.length > 0) {
      let str = '<section id="techniques" class="scroll-mt-32"><div class="flex items-center gap-2 mb-6 pb-3 border-b border-[#3c3836]"><span class="text-2xl">🥋</span><h2 class="text-2xl font-medium text-[#ebdbb2]">Techniques</h2></div>';
      entries.forEach(entry => {
        str += `<div class="mb-8"><h3 class="text-lg font-medium text-[#ebdbb2] mb-4 capitalize">${formatTitle(entry[0])}</h3><div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">`;
        entry[1].forEach(item => { str += `<div>${renderTechniqueCard(item)}</div>`; });
        str += '</div></div>';
      });
      html.techniques = str + '</section>';
    }
  }

  // 🚀 PRECISION COMBAT
  if (precision) {
    const entries = Object.entries(precision).filter(e => e[1] && Array.isArray(e[1]) && e[1].length);
    if (entries.length > 0) {
      let str = '<section id="precision-section" class="scroll-mt-32"><div class="flex items-center gap-2 mb-6 pb-3 border-b border-[#3c3836]"><span class="text-2xl">🎯</span><h2 class="text-2xl font-medium text-[#ebdbb2]">Precision Combat</h2></div>';
      entries.forEach(entry => {
        const title = entry[0].replace('precision', '').replace('Data', '');
        str += `<div class="mb-8"><h3 class="text-lg font-medium text-[#ebdbb2] mb-4 capitalize">${formatTitle(title)}</h3><div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">`;
        entry[1].forEach(item => { str += `<div>${renderTechniqueCard(item)}</div>`; });
        str += '</div></div>';
      });
      html.precision = str + '</section>';
    }
  }

  // 🚀 META-LAYERS (FIXED UNWRAPPING)
  if (meta) {
    const metaData = meta.metaLayersData || meta;
    const layers = metaData.layers || metaData;
    const entries = Object.entries(layers).filter(e => e[1] && Array.isArray(e[1]) && e[1].length);
    if (entries.length > 0) {
      let str = '<section id="meta-section" class="scroll-mt-32"><div class="flex items-center gap-2 mb-6 pb-3 border-b border-[#3c3836]"><span class="text-2xl">🧠</span><h2 class="text-2xl font-medium text-[#ebdbb2]">Meta-Layers</h2></div>';
      entries.forEach(entry => {
        str += `<div class="mb-8"><h3 class="text-lg font-medium text-[#ebdbb2] mb-4 capitalize">${formatTitle(entry[0])}</h3><div class="grid gap-4 md:grid-cols-2">`;
        entry[1].forEach(item => { str += `<div>${renderTechniqueCard(item)}</div>`; });
        str += '</div></div>';
      });
      html.meta = str + '</section>';
    }
  }

  // 🚀 RECOVERY SYSTEMS (FIXED UNWRAPPING)
  if (recovery) {
    const recData = recovery.recoveryData || recovery;
    const protocols = recData.protocols || recData;
    if (Array.isArray(protocols) && protocols.length > 0) {
      let str = '<section id="recovery-section" class="scroll-mt-32"><div class="flex items-center gap-2 mb-6 pb-3 border-b border-[#3c3836]"><span class="text-2xl">🔄</span><h2 class="text-2xl font-medium text-[#ebdbb2]">Recovery Systems</h2></div>';
      str += '<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">';
      protocols.forEach(item => { str += `<div>${renderTechniqueCard(item)}</div>`; });
      str += '</div></section>';
      html.recovery = str;
    }
  }

  if (curriculum?.physicalTraining) {
    const entries = Object.entries(curriculum.physicalTraining).filter(e => e[1] && e[1].length);
    if (entries.length > 0) {
      let str = '<section id="physical" class="scroll-mt-32"><div class="flex items-center gap-2 mb-6 pb-3 border-b border-[#3c3836]"><span class="text-2xl">🏋️</span><h2 class="text-2xl font-medium text-[#ebdbb2]">Physical Training</h2></div>';
      entries.forEach(entry => {
        str += `<div class="mb-8"><h3 class="text-lg font-medium text-[#ebdbb2] mb-4 capitalize">${formatTitle(entry[0])}</h3><div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">`;
        entry[1].forEach(item => { str += `<div>${renderPhysicalCard(item)}</div>`; });
        str += '</div></div>';
      });
      html.physical = str + '</section>';
    }
  }

  if (curriculum?.knowledge) {
    const entries = Object.entries(curriculum.knowledge).filter(e => e[1] && e[1].length);
    if (entries.length > 0) {
      let str = '<section id="knowledge" class="scroll-mt-32"><div class="flex items-center gap-2 mb-6 pb-3 border-b border-[#3c3836]"><span class="text-2xl">📖</span><h2 class="text-2xl font-medium text-[#ebdbb2]">Essential Knowledge</h2></div>';
      entries.forEach(entry => {
        str += `<div class="mb-8"><h3 class="text-lg font-medium text-[#ebdbb2] mb-4 capitalize">${formatTitle(entry[0])}</h3><div class="grid gap-4 md:grid-cols-2">`;
        entry[1].forEach(item => { str += `<div>${renderKnowledgeCard(item)}</div>`; });
        str += '</div></div>';
      });
      html.knowledge = str + '</section>';
    }
  }

  if (curriculum?.equipment) {
    const entries = Object.entries(curriculum.equipment).filter(e => e[1] && e[1].length);
    if (entries.length > 0) {
      let str = '<section id="equipment" class="scroll-mt-32"><div class="flex items-center gap-2 mb-6 pb-3 border-b border-[#3c3836]"><span class="text-2xl">🥊</span><h2 class="text-2xl font-medium text-[#ebdbb2]">Equipment & Gear</h2></div>';
      entries.forEach(entry => {
        str += `<div class="mb-8"><h3 class="text-lg font-medium text-[#ebdbb2] mb-4 capitalize">${formatTitle(entry[0])}</h3><div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">`;
        entry[1].forEach(item => { str += `<div>${renderEquipmentCard(item)}</div>`; });
        str += '</div></div>';
      });
      html.equipment = str + '</section>';
    }
  }

  const hasDrills = curriculum?.trainingDrills || curriculum?.enduranceDrills?.length || curriculum?.combinationDrills?.length;
  if (hasDrills) {
    let str = '<section id="drills" class="scroll-mt-32"><div class="flex items-center gap-2 mb-6 pb-3 border-b border-[#3c3836]"><span class="text-2xl">🔁</span><h2 class="text-2xl font-medium text-[#ebdbb2]">Drills & Combinations</h2></div>';
    if (curriculum?.trainingDrills) {
      str += '<div class="mb-8"><h3 class="text-lg font-medium text-[#ebdbb2] mb-4">Core Training Drills</h3><div class="grid gap-4 md:grid-cols-2">';
      Object.entries(curriculum.trainingDrills).forEach(entry => { str += `<div>${renderTrainingDrillCard(entry[0], entry[1])}</div>`; });
      str += '</div></div>';
    }
    if (curriculum?.enduranceDrills?.length > 0) {
      str += '<div class="mb-8"><h3 class="text-lg font-medium text-[#ebdbb2] mb-4">Endurance & Conditioning</h3><div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">';
      curriculum.enduranceDrills.forEach(item => { str += `<div>${renderDrillCard(item)}</div>`; });
      str += '</div></div>';
    }
    if (curriculum?.combinationDrills?.length > 0) {
      str += '<div class="mb-8"><h3 class="text-lg font-medium text-[#ebdbb2] mb-4">Combination Chains</h3><div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">';
      curriculum.combinationDrills.forEach(item => { str += `<div>${renderDrillCard(item)}</div>`; });
      str += '</div></div>';
    }
    html.drills = str + '</section>';
  }

  if (curriculum?.problemAreaTips?.length > 0) {
    let str = '<section id="tips" class="scroll-mt-32"><div class="flex items-center gap-2 mb-6 pb-3 border-b border-[#3c3836]"><span class="text-2xl">🛠️</span><h2 class="text-2xl font-medium text-[#ebdbb2]">Troubleshooting & Problem Areas</h2></div><div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">';
    curriculum.problemAreaTips.forEach(item => { str += `<div>${renderTipCard(item)}</div>`; });
    html.tips = str + '</div></section>';
  }

  return { html };
}