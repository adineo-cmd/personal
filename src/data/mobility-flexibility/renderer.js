const difficultyLevels = {
  beginner: { label: 'Beginner', bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/30' },
  intermediate: { label: 'Intermediate', bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/30' },
  advanced: { label: 'Advanced', bg: 'bg-rose-500/10', text: 'text-rose-400', border: 'border-rose-500/30' },
  expert: { label: 'Expert', bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/30' },
  'all levels': { label: 'All Levels', bg: 'bg-sky-500/10', text: 'text-sky-400', border: 'border-sky-500/30' },
  'all': { label: 'All Levels', bg: 'bg-sky-500/10', text: 'text-sky-400', border: 'border-sky-500/30' },
};

function getDifficulty(item) {
  const key = (item.difficulty || 'beginner').toString().toLowerCase().trim();
  return difficultyLevels[key] || difficultyLevels.beginner;
}

function formatTitle(str) {
  if (!str) return '';
  // Insert space before uppercase letters (camelCase to Title Case)
  let result = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  return result.charAt(0).toUpperCase() + result.slice(1);
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
  const focusText = item.focusCues || item.focus_cues || item.focus;
  
  const tactical = [];
  if (item.setsReps) tactical.push(`<span class="text-[#a89984] font-bold">Sets/Reps:</span> ${item.setsReps}`);
  if (item.duration) tactical.push(`<span class="text-[#a89984] font-bold">Duration:</span> ${item.duration}`);
  if (item.contextApplication) tactical.push(`<span class="text-[#a89984] font-bold">Context:</span> ${item.contextApplication}`);
  if (item.testingProtocol) tactical.push(`<span class="text-[#a89984] font-bold">Protocol:</span> ${item.testingProtocol}`);
  if (item.scoringSystem) tactical.push(`<span class="text-[#a89984] font-bold">Scoring:</span> ${item.scoringSystem}`);
  if (item.programmingImplication) tactical.push(`<span class="text-[#a89984] font-bold">Programming:</span> ${item.programmingImplication}`);

  return `
    <div class="border border-[#3c3836] rounded-lg p-4 bg-[#282828]/30 hover:bg-[#3c3836] transition-colors flex flex-col h-full">
      <div class="flex justify-between items-start mb-2">
        <h4 class="text-[14px] font-medium text-[#ebdbb2] leading-tight">${item.name}</h4>
        <span class="text-[10px] px-2 py-0.5 rounded-full border ${diff.border} ${diff.bg} ${diff.text} whitespace-nowrap ml-2">${diff.label}</span>
      </div>
      ${item.mechanics ? `<p class="text-[12px] text-[#a89984] mb-2 italic">⚙️ ${item.mechanics}</p>` : ''}
      ${item.description ? `<p class="text-[12px] text-[#a89984] mb-2 italic">📝 ${item.description}</p>` : ''}
      
      ${tactical.length > 0 ? `
        <div class="mb-3 text-[11px] text-[#928374] space-y-1 bg-[#3c3836]/30 p-2 rounded border border-[#3c3836]/20">
          ${tactical.map(t => `<div>${t}</div>`).join('')}
        </div>
      ` : ''}

      ${anatomyArr.length ? `
        <div class="mb-3">
          <div class="text-[10px] text-[#928374] mb-1">Anatomy / Targets:</div>
          <div class="flex flex-wrap gap-1">
            ${anatomyArr.map(a => `<span class="text-[10px] px-1.5 py-0.5 rounded bg-[#3c3836] text-[#a89984] border border-[#3c3836]/50">${a}</span>`).join('')}
          </div>
        </div>
      ` : ''}

      <div class="mt-auto pt-3 border-t border-[#3c3836]/50 space-y-1.5 text-[11px] text-[#928374]">
        ${focusText ? `<div class="flex gap-2"><span>🎯</span> <span class="text-[#a89984]">${focusText}</span></div>` : ''}
        ${progArr.length ? `<div class="flex gap-2"><span>📈</span> <span class="text-[#a89984]">${progArr.join(' → ')}</span></div>` : ''}
        ${item.safety ? `<div class="flex gap-2 text-[#8ec07c]/80"><span>⚠️</span> <span>${item.safety}</span></div>` : ''}
        ${item.redFlags ? `<div class="flex gap-2 text-[#fb4934]/80"><span>🚩</span> <span>${item.redFlags}</span></div>` : ''}
      </div>
    </div>
  `;
}

function renderTemplateCard(item) {
  const diff = getDifficulty(item);
  return `
    <div class="border border-[#3c3836] rounded-lg p-4 bg-[#282828]/30 hover:bg-[#3c3836] transition-colors flex flex-col h-full">
      <div class="flex justify-between items-start mb-2">
        <h4 class="text-[14px] font-medium text-[#ebdbb2] leading-tight">${item.name}</h4>
        <span class="text-[10px] px-2 py-0.5 rounded-full border ${diff.border} ${diff.bg} ${diff.text} whitespace-nowrap ml-2">${diff.label}</span>
      </div>
      ${item.description ? `<p class="text-[12px] text-[#a89984] mb-2 italic">📝 ${item.description}</p>` : ''}
      ${item.mechanics ? `<p class="text-[12px] text-[#a89984] mb-2">⚙️ ${item.mechanics}</p>` : ''}
      
      <div class="mt-auto pt-3 border-t border-[#3c3836]/50 space-y-1.5 text-[11px] text-[#928374]">
        ${item.duration ? `<div class="flex gap-2"><span>⏱️</span> <span class="text-[#a89984]">Duration: ${item.duration}</span></div>` : ''}
        ${item.frequency ? `<div class="flex gap-2"><span>🔄</span> <span class="text-[#a89984]">Frequency: ${item.frequency}</span></div>` : ''}
        ${item.intensity ? `<div class="flex gap-2"><span>🔥</span> <span class="text-[#a89984]">Intensity: ${item.intensity}</span></div>` : ''}
        ${item.contextApplication ? `<div class="flex gap-2"><span>🎯</span> <span class="text-[#a89984]">${item.contextApplication}</span></div>` : ''}
      </div>
    </div>
  `;
}

function renderPrescriptionCard(item) {
  return `
    <div class="border border-[#3c3836] rounded-lg p-4 bg-[#282828]/30 hover:bg-[#3c3836] transition-colors flex flex-col h-full">
      <div class="flex justify-between items-start mb-2">
        <h4 class="text-[14px] font-medium text-[#ebdbb2] leading-tight">${item.name}</h4>
        <span class="text-[10px] px-2 py-0.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 whitespace-nowrap ml-2">${item.difficulty || 'All Levels'}</span>
      </div>
      ${item.mechanics ? `<p class="text-[12px] text-[#a89984] mb-2 italic">⚙️ ${item.mechanics}</p>` : ''}
      ${item.priorityAreas?.length ? `
        <div class="mb-3">
          <div class="text-[10px] text-[#928374] mb-1">Priority Areas:</div>
          <div class="flex flex-wrap gap-1">
            ${item.priorityAreas.map(a => `<span class="text-[10px] px-1.5 py-0.5 rounded bg-[#3c3836] text-[#a89984] border border-[#3c3836]/50">${a}</span>`).join('')}
          </div>
        </div>
      ` : ''}
      ${item.contextApplication ? `<div class="mt-auto pt-3 border-t border-[#3c3836]/50 text-[11px] text-[#928374]"><span class="text-[#a89984] font-bold">Context:</span> ${item.contextApplication}</div>` : ''}
    </div>
  `;
}

export function renderSystemPage(systemData) {
  const { curriculum, keyPrinciples, color, assessmentProtocols, periodizationFrameworks, combinedSessionTemplates, sportSpecificPrescriptions, combatSystemIntegration, progressionTracking } = systemData;
  const html = { principles: '', toc: '', techniques: '', assessments: '', periodization: '', templates: '', prescriptions: '', integration: '', tracking: '' };

  if (keyPrinciples && keyPrinciples.length > 0) {
    let str = '<div class="mt-6 pt-4 border-t border-[#3c3836]"><div class="text-[11px] font-medium text-[#a89984] mb-2">Core Principles</div><div class="flex flex-wrap gap-2">';
    keyPrinciples.forEach(p => { str += `<span class="text-[10px] px-2.5 py-1 rounded-full border ${color}">${p}</span>`; });
    html.principles = str + '</div></div>';
  }

  const tocItems = [];
  if (curriculum?.techniques && Object.values(curriculum.techniques).some(arr => arr?.length)) tocItems.push({ id: 'techniques', label: 'Techniques & Protocols', icon: '🦴' });
  if (assessmentProtocols) tocItems.push({ id: 'assessments', label: 'Assessment Protocols', icon: '📊' });
  if (periodizationFrameworks) tocItems.push({ id: 'periodization', label: 'Periodization', icon: '📅' });
  if (combinedSessionTemplates) tocItems.push({ id: 'templates', label: 'Session Templates', icon: '📋' });
  if (sportSpecificPrescriptions) tocItems.push({ id: 'prescriptions', label: 'Sport Prescriptions', icon: '🥋' });
  if (combatSystemIntegration) tocItems.push({ id: 'integration', label: 'System Integration', icon: '🔗' });
  if (progressionTracking) tocItems.push({ id: 'tracking', label: 'Progression Tracking', icon: '📈' });

  if (tocItems.length > 0) {
    let str = '<nav class="sticky top-24 z-30 bg-[#1d2021]/90 backdrop-blur border-b border-[#3c3836] mb-8"><div class="max-w-7xl mx-auto px-6 py-3"><div class="flex flex-wrap gap-2 overflow-x-auto scrollbar-hide">';
    tocItems.forEach(item => { str += `<a href="#${item.id}" class="toc-link px-3 py-1.5 text-xs rounded-full border border-[#3c3836] bg-transparent text-[#928374] hover:bg-[#3c3836] hover:text-[#ebdbb2] transition-colors whitespace-nowrap">${item.icon} ${item.label}</a>`; });
    html.toc = str + '</div></div></nav>';
  }

  if (curriculum?.techniques) {
    const entries = Object.entries(curriculum.techniques).filter(e => e[1] && e[1].length);
    if (entries.length > 0) {
      let str = '<section id="techniques" class="scroll-mt-32"><div class="flex items-center gap-2 mb-6 pb-3 border-b border-[#3c3836]"><span class="text-2xl">🦴</span><h2 class="text-2xl font-medium text-[#ebdbb2]">Techniques & Protocols</h2></div>';
      entries.forEach(entry => {
        str += `<div class="mb-8"><h3 class="text-lg font-medium text-[#ebdbb2] mb-4 capitalize">${formatTitle(entry[0])}</h3><div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">`;
        entry[1].forEach(item => { str += `<div>${renderTechniqueCard(item)}</div>`; });
        str += '</div></div>';
      });
      html.techniques = str + '</section>';
    }
  }

  if (assessmentProtocols) {
    let str = '<section id="assessments" class="scroll-mt-32"><div class="flex items-center gap-2 mb-6 pb-3 border-b border-[#3c3836]"><span class="text-2xl">📊</span><h2 class="text-2xl font-medium text-[#ebdbb2]">Assessment Protocols</h2></div>';
    if (assessmentProtocols.jointByJointScreen?.length) {
      str += `<div class="mb-8"><h3 class="text-lg font-medium text-[#ebdbb2] mb-4">Joint-by-Joint Screen</h3><div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">`;
      assessmentProtocols.jointByJointScreen.forEach(item => { str += `<div>${renderTechniqueCard(item)}</div>`; });
      str += '</div></div>';
    }
    if (assessmentProtocols.flexibilityAssessment?.length) {
      str += `<div class="mb-8"><h3 class="text-lg font-medium text-[#ebdbb2] mb-4">Flexibility Assessment</h3><div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">`;
      assessmentProtocols.flexibilityAssessment.forEach(item => { str += `<div>${renderTechniqueCard(item)}</div>`; });
      str += '</div></div>';
    }
    html.assessments = str + '</section>';
  }

  if (periodizationFrameworks) {
    let str = '<section id="periodization" class="scroll-mt-32"><div class="flex items-center gap-2 mb-6 pb-3 border-b border-[#3c3836]"><span class="text-2xl">📅</span><h2 class="text-2xl font-medium text-[#ebdbb2]">Periodization Frameworks</h2></div>';
    if (periodizationFrameworks.microcycleTemplates?.length) {
      str += `<div class="mb-8"><h3 class="text-lg font-medium text-[#ebdbb2] mb-4">Microcycle Templates</h3><div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">`;
      periodizationFrameworks.microcycleTemplates.forEach(item => { str += `<div>${renderTemplateCard(item)}</div>`; });
      str += '</div></div>';
    }
    if (periodizationFrameworks.mesocycleTemplates?.length) {
      str += `<div class="mb-8"><h3 class="text-lg font-medium text-[#ebdbb2] mb-4">Mesocycle Templates</h3><div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">`;
      periodizationFrameworks.mesocycleTemplates.forEach(item => { str += `<div>${renderTemplateCard(item)}</div>`; });
      str += '</div></div>';
    }
    if (periodizationFrameworks.macrocycleTemplates?.length) {
      str += `<div class="mb-8"><h3 class="text-lg font-medium text-[#ebdbb2] mb-4">Macrocycle Templates</h3><div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">`;
      periodizationFrameworks.macrocycleTemplates.forEach(item => { str += `<div>${renderTemplateCard(item)}</div>`; });
      str += '</div></div>';
    }
    html.periodization = str + '</section>';
  }

  if (combinedSessionTemplates) {
    let str = '<section id="templates" class="scroll-mt-32"><div class="flex items-center gap-2 mb-6 pb-3 border-b border-[#3c3836]"><span class="text-2xl">📋</span><h2 class="text-2xl font-medium text-[#ebdbb2]">Combined Session Templates</h2></div>';
    if (combinedSessionTemplates.templates?.length) {
      str += '<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">';
      combinedSessionTemplates.templates.forEach(item => { str += `<div>${renderTemplateCard(item)}</div>`; });
      str += '</div>';
    }
    html.templates = str + '</section>';
  }

  if (sportSpecificPrescriptions) {
    let str = '<section id="prescriptions" class="scroll-mt-32"><div class="flex items-center gap-2 mb-6 pb-3 border-b border-[#3c3836]"><span class="text-2xl">🥋</span><h2 class="text-2xl font-medium text-[#ebdbb2]">Sport-Specific Prescriptions</h2></div>';
    if (sportSpecificPrescriptions.prescriptions?.length) {
      str += '<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">';
      sportSpecificPrescriptions.prescriptions.forEach(item => { str += `<div>${renderPrescriptionCard(item)}</div>`; });
      str += '</div>';
    }
    html.prescriptions = str + '</section>';
  }

  if (combatSystemIntegration) {
    let str = '<section id="integration" class="scroll-mt-32"><div class="flex items-center gap-2 mb-6 pb-3 border-b border-[#3c3836]"><span class="text-2xl">🔗</span><h2 class="text-2xl font-medium text-[#ebdbb2]">Combat System Integration</h2></div>';
    if (combatSystemIntegration.techniqueMapping?.length) {
      str += '<div class="grid gap-4 md:grid-cols-2">';
      combatSystemIntegration.techniqueMapping.forEach(item => { 
        str += `<div class="border border-[#3c3836] rounded-lg p-4 bg-[#282828]/30 hover:bg-[#3c3836] transition-colors">
          <h4 class="text-[14px] font-medium text-[#ebdbb2] mb-3">${item.name}</h4>
          ${item.mappings ? `<div class="space-y-2">
            ${item.mappings.map(m => `<div class="text-[11px] text-[#928374] bg-[#3c3836]/30 p-2 rounded border border-[#3c3836]/20">
              <span class="text-[#a89984] font-bold">${m.technique}:</span> Needs ${m.mobilityNeed} | Flex: ${m.flexibilityNeed}
            </div>`).join('')}
          </div>` : ''}
          ${item.integrationPoints ? `<div class="space-y-2">
            ${item.integrationPoints.map(m => `<div class="text-[11px] text-[#928374] bg-[#3c3836]/30 p-2 rounded border border-[#3c3836]/20">
              <span class="text-[#a89984] font-bold">${m.conditioningElement}:</span> Mob: ${m.mobilityIntegration} | Flex: ${m.flexibilityIntegration}
            </div>`).join('')}
          </div>` : ''}
        </div>`; 
      });
      str += '</div>';
    }
    html.integration = str + '</section>';
  }

  if (progressionTracking) {
    let str = '<section id="tracking" class="scroll-mt-32"><div class="flex items-center gap-2 mb-6 pb-3 border-b border-[#3c3836]"><span class="text-2xl">📈</span><h2 class="text-2xl font-medium text-[#ebdbb2]">Progression Tracking</h2></div>';
    if (progressionTracking.trackingTools?.length) {
      str += '<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">';
      progressionTracking.trackingTools.forEach(item => { str += `<div>${renderTemplateCard(item)}</div>`; });
      str += '</div>';
    }
    html.tracking = str + '</section>';
  }

  return { html };
}