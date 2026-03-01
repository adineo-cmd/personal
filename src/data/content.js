// src/data/content.js - All portfolio content

export const personalInfo = {
  name: 'Adineo',
  username: 'adineo-cmd',
  title: '',
  description: 'A personal site for documentary of life, projects, and random thoughts.',
};

export const aboutText = `
Hi, i’m aditya aka adineo. I write code, and currently working on some projects.

Most days revolve around linux, side projects, workouts or cycling, and following curiosity wherever it decides to take.

This website is my personal snapshot — honest, unfinished, and always changing.
`;

export const skills = {
  'AI/ML': ['TensorFlow', 'PyTorch', 'Pandas', 'OpenCV', 'NLP', 'Deep Learning', 'Transformer Models'],
  'Languages': ['Python', 'TypeScript', 'JavaScript', 'Java', 'C', 'SQL'],
  'Frontend': ['Astro', 'React', 'Angular', 'Tailwind CSS', 'HTML', 'CSS'],
  'Backend': ['Node.js', 'FastAPI', 'Django', 'Express.js', 'Flask', 'REST API'],
  'Databases': ['MongoDB', 'MySQL', 'PostgreSQL', 'Oracle Database'],
  'Cloud & DevOps': ['AWS', 'Google Cloud Platform', 'Docker', 'Kubernetes', 'Firebase', 'GitHub Actions', 'CI/CD'],
  'Tools': ['Git', 'GitHub', 'Vim', 'Linux', 'Ubuntu', 'Windows', 'VS Code']
};

export const projects = [
  {
    title: 'WebVault',
    description: 'A curated repository of websites and resources across domains with a clean, responsive UI built using Astro and Tailwind CSS. Implemented search and filtering functionality with domain-wise categorization and a scalable Node.js + MongoDB backend.',
    tags: ['Astro', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    categories: ['full-stack', 'web-development'],
    githubUrl: 'https://github.com/adineo-cmd',
    liveUrl: null,
    featured: true
  },
  {
    title: 'RoadmapX',
    description: 'A structured learning platform offering step-by-step career roadmaps in business, finance, science, and management. Features interactive progress dashboards with milestone tracking powered by a FastAPI backend and PostgreSQL.',
    tags: ['Astro', 'FastAPI', 'PostgreSQL', 'Tailwind CSS'],
    categories: ['full-stack', 'education'],
    githubUrl: 'https://github.com/adineo-cmd',
    liveUrl: null,
    featured: true
  },
  {
    title: 'AI Chat Assistant',
    description: 'Conversational AI assistant that answers queries using a multi-domain knowledge base. Integrated vector embeddings and transformer models for semantic search, achieving ~85% accuracy in contextual responses.',
    tags: ['Python', 'TensorFlow', 'PyTorch', 'Flask', 'NLP'],
    categories: ['ai', 'machine-learning', 'nlp'],
    githubUrl: 'https://github.com/adineo-cmd',
    liveUrl: null,
    featured: true
  }
];

export const timelineData = [
  {
    year: '2026',
    events: [
      {
        month: 'FEB 2026',
        title: 'Learning AI Agents & Workflows',
        detail: 'Studying LangChain, LangGraph, RAG systems, and conversational AI architecture'
      },
      {
        month: 'Full Year',
        title: 'B.Tech 4th Year (Final Year)',
        detail: 'CSIT @ UEM Kolkata – AI/ML engineering specialization'
      }
    ]
  },
  {
    year: '2025',
    events: [
      {
        month: 'DEC 2025',
        title: 'Digha Getaway with College Friends',
        detail: 'Weekend coastal escape – beaches, seafood, and sunset memories at West Bengal\'s shoreline'
      },
      {
        month: 'NOV 2025',
        title: 'Kalighat Pilgrimage',
        detail: 'Family visit to Kolkata\'s sacred Kali temple – spiritual reflection and cultural roots'
      },
      {
        month: 'OCT 2025',
        title: 'Digha Family Retreat',
        detail: 'Weekend with parents – ocean waves, shared meals, and screen-free bonding'
      },
      {
        month: 'JUN 2025',
        title: 'Full-Stack & Dev Environment Mastery',
        detail: 'HTML/CSS/JS/React + Linux customization (GNOME, ZSH, Starship, Kitty)'
      },
      {
        month: 'APR 2025',
        title: 'Git & GitHub Workflow',
        detail: 'Version control mastery, project documentation'
      },
      {
        month: 'FEB 2025',
        title: 'Eco Park Visit with College Friends',
        detail: 'Exploring Kolkata\'s largest urban park – green trails, boating, and evening hangout with UEM classmates'
      },
      {
        month: 'Full Year',
        title: 'B.Tech 3rd Year',
        detail: 'CSIT @ UEM Kolkata – AI/ML specialization track'
      },
      {
        month: 'OCT 2025 – Present',
        title: 'AI Engineer Intern',
        detail: 'Stealth AI Startup – building production-grade voice agents and RAG workflows'
      },
      {
        month: 'MAR – JUL 2025',
        title: 'AI Engineer Intern',
        detail: 'ZuduAI – developing conversational AI systems and post-call analysis pipelines'
      }
    ]
  },
  {
    year: '2024',
    events: [
      {
        month: 'DEC 2024',
        title: 'Puri Coastal Pilgrimage',
        detail: 'Family journey to Odisha\'s sacred shores – Jagannath Temple darshan, beach walks, and Bengali seafood feasts'
      },
      {
        month: 'OCT 2024',
        title: 'Durga Puja with College Friends',
        detail: 'First college-era pandal hopping – discovering Kolkata\'s artistic installations with UEM peers'
      },
      {
        month: 'DEC 2024',
        title: 'Linux Dual Boot Setup',
        detail: 'Windows + Ubuntu 24.04 performance-tuned system'
      },
      {
        month: 'SEP 2024',
        title: 'System Automation',
        detail: 'Scripting for backups, restores & desktop customization'
      },
      {
        month: 'AUG 2024',
        title: 'Open Source Ecosystem',
        detail: 'Discovered tools, communities & contribution pathways'
      },
      {
        month: 'JUL 2024',
        title: 'Serious Python Journey',
        detail: 'Transitioned from basics to applied development'
      },
      {
        month: 'Full Year',
        title: 'B.Tech 2nd Year',
        detail: 'CSIT @ UEM Kolkata – core CS fundamentals & data structures'
      }
    ]
  },
  {
    year: '2023',
    events: [
      {
        month: 'OCT 2023',
        title: 'Durga Puja with School Friends',
        detail: 'Final school-year celebrations – pandal tours across Behala and South Kolkata'
      },
      {
        month: 'MAY 2023',
        title: 'ISC Completion (Class XII)',
        detail: 'Orient Day School, Behala, Kolkata – 69.5% (Computer Science stream)'
      },
      {
        month: 'Full Year',
        title: 'B.Tech 1st Year Start',
        detail: 'CSIT @ University of Engineering & Management, Newtown, Kolkata'
      },
      {
        month: 'Full Year',
        title: 'Family Home in Behala',
        detail: 'Settled permanently in parents\' newly purchased home in Behala after school completion'
      }
    ]
  },
  {
    year: '2022',
    events: [
      {
        month: 'OCT 2022',
        title: 'Durga Puja with School Friends',
        detail: 'Class X board prep break – joyful pandal hopping with Orient Day School friends'
      },
      {
        month: 'MAY 2022',
        title: 'ICSE Completion (Class X)',
        detail: 'Orient Day School, Behala, Kolkata – 81.3% with strong mathematics & computer fundamentals'
      }
    ]
  },
  {
    year: '2021',
    events: [
      {
        month: 'OCT 2021',
        title: 'Durga Puja with School Friends',
        detail: 'Early teenage bonding – exploring Behala\'s neighborhood pandals with classmates'
      },
      {
        month: 'Full Year',
        title: 'Class IX Studies',
        detail: 'Orient Day School, Behala – strengthening foundations in mathematics and computer science'
      }
    ]
  },
  {
    year: '2020',
    events: [
      {
        month: 'FEB 2020',
        title: 'Mayapur Pilgrimage',
        detail: 'Family visit to ISKCON\'s spiritual hub – serene ghats, kirtan sessions, and cultural immersion'
      },
      {
        month: 'OCT 2020',
        title: 'Durga Puja with Family',
        detail: 'Pandemic-era celebrations – intimate family rituals at home during lockdown'
      },
      {
        month: 'Full Year',
        title: 'Class VIII Studies',
        detail: 'Orient Day School, Behala – adapting to remote learning during pandemic'
      }
    ]
  },
  {
    year: '2019',
    events: [
      {
        month: 'DEC 2019',
        title: 'Kolkata Science & Nature Day',
        detail: 'Family expedition – Alipore Zoo wildlife encounters, Birla Planetarium cosmos exploration, and Birla Museum cultural artifacts'
      },
      {
        month: 'OCT 2019',
        title: 'Durga Puja with Family',
        detail: 'Traditional celebrations – accompanying parents to ancestral pandals in Behala'
      },
      {
        month: 'Full Year',
        title: 'Class VII Studies',
        detail: 'Orient Day School, Behala – early exposure to logical puzzles and basic computing'
      }
    ]
  },
  {
    year: '2013–2018',
    events: [
      {
        month: 'APR 2013',
        title: 'Admission to Orient Day School',
        detail: 'Secured admission to Class 3 at Behala campus – beginning of 10-year academic journey'
      },
      {
        month: '2013',
        title: 'Family Home Purchase in Behala',
        detail: 'Parents bought permanent residence in Behala, Kolkata – relocated from maternal grandparents\' home'
      },
      {
        month: '2013–2018',
        title: 'Orient Day School (Classes 3–8)',
        detail: 'Behala campus – foundational years in mathematics, English literature, and early tech curiosity'
      },
      {
        month: '2013–2023',
        title: 'Behala Residence',
        detail: 'Family home in Behala, Kolkata – base for school years and early college'
      }
    ]
  },
  {
    year: '2012',
    events: [
      {
        month: 'MAR 2012',
        title: 'Relocated to Maternal Grandparents\' Home',
        detail: 'Moved in with grandparents after skipping Class 2 – beginning of independent learning phase'
      },
      {
        month: '2012',
        title: 'Self-Directed Learning Year',
        detail: 'Explored mathematics puzzles, English literature, basic logic games – cultivated independent learning habits'
      },
      {
        month: '2012',
        title: 'Baguiati to Grandparents\' Transition',
        detail: 'Relocated within Kolkata after Calcutta Public School – preparatory year before Orient Day School'
      }
    ]
  },
  {
    year: '2004–2011',
    events: [
      {
        month: '2009–2011',
        title: 'Calcutta Public School',
        detail: 'Baguiati, Kolkata – Upper Nursery (2009) → Class 1 (2010–2011)'
      },
      {
        month: '2009–2010',
        title: 'Tarakeshwar First Pilgrimage',
        detail: 'Early childhood family visit to the sacred Shiva temple – first spiritual journey during kindergarten years'
      },
      {
        month: '2004–2011',
        title: 'Childhood in Baguiati',
        detail: 'Family residence in Baguiati, Kolkata – formative years near airport area'
      }
    ]
  },
  {
    year: '2004',
    events: [
      {
        month: '2004',
        title: 'Born',
        detail: 'Lake Town Nursing Home, Kolkata – 700089, West Bengal, India'
      }
    ]
  }
];

// ── GOALS: One-time achievements & major life milestones ────────────────
export const goals = [
  // ── Life & Relationships ──────────────────────
  { id: 19, text: 'Family Trip', completed: true },
  { id: 20, text: 'Friends Trip', completed: true },
  { id: 60, text: 'Take parents flying', completed: false },
  { id: 61, text: 'Reconnect old friends', completed: false },
  { id: 62, text: 'Forgive someone deeply', completed: false },
  { id: 63, text: 'Leave positive legacy', completed: false },
  { id: 106, text: 'Celebrate small wins', completed: true },
  { id: 112, text: 'Say thank you more', completed: true },
  { id: 113, text: 'Listen without interrupting', completed: false },
  { id: 114, text: 'Ask better questions', completed: true },
  { id: 115, text: 'Accept imperfection gladly', completed: false },

  // ── Exploration & Adventure ───────────────────
  { id: 33, text: 'Trek Himalayan trails', completed: false },
  { id: 35, text: 'Camp under stars', completed: false },
  { id: 36, text: 'Backpack solo Asia', completed: false },
  { id: 65, text: 'Live in mountains', completed: false },
  { id: 77, text: 'Stargaze all night', completed: false },
  { id: 78, text: 'Walk barefoot beach', completed: true },
  { id: 85, text: 'Visit Amazon rainforest', completed: false },
  { id: 86, text: 'Cross Sahara Desert', completed: false },
  { id: 87, text: 'Walk historic pilgrimage', completed: false },
  { id: 55, text: 'Climb mountain peak', completed: false },
  { id: 57, text: 'Hike desert canyon', completed: false },
  { id: 81, text: 'Climb waterfall rocks', completed: false },

  // ── Endurance Challenges ──────────────────────
  { id: 21, text: 'Run 100-mile ultra', completed: false },
  { id: 52, text: 'Run NYC Marathon', completed: false },
  { id: 53, text: 'Finish ultramarathon race', completed: false },
  { id: 80, text: 'Run forest trail', completed: false },
  { id: 93, text: 'Organize charity run', completed: false },

  // ── Creative Expression & Hobbies ─────────────
  { id: 28, text: 'Learn to play guitar', completed: false },
  { id: 29, text: 'Compose original song', completed: false },
  { id: 140, text: 'Play a musical instrument well', completed: false },
  { id: 75, text: 'Dance without fear', completed: false },
  { id: 27, text: 'Write a novel', completed: false },
  { id: 136, text: 'Write long-form essays', completed: false },
  { id: 59, text: 'Photograph wildlife safari', completed: false },
  { id: 142, text: 'Master photography basics', completed: false },
  { id: 143, text: 'Learn video editing skills', completed: false },
  { id: 101, text: 'Craft wooden furniture', completed: false },
  { id: 102, text: 'Knit winter scarf', completed: false },

  // ── Movement Arts & Combat ────────────────────
  { id: 120, text: 'Build elite strength physique', completed: false },
  { id: 121, text: 'Master strength training', completed: false },
  { id: 122, text: 'Train boxing fundamentals', completed: false },
  { id: 123, text: 'Learn Muay Thai striking', completed: false },
  { id: 124, text: 'Train MMA grappling basics', completed: false },
  { id: 125, text: 'Practice combat conditioning', completed: false },
  { id: 131, text: 'Learn archery basics', completed: false },
  { id: 132, text: 'Train fencing footwork', completed: false },
  { id: 133, text: 'Learn firearm safety & discipline', completed: false },

  // ── Learning & Digital Mastery ────────────────
  { id: 89, text: 'Learn local language', completed: true },
  { id: 139, text: 'Learn a new spoken language', completed: false },
  { id: 137, text: 'Read philosophy deeply', completed: false },
  { id: 138, text: 'Study world history', completed: false },
  { id: 150, text: 'Master typing speed and accuracy', completed: false },
  { id: 151, text: 'Reach 100 WPM typing speed', completed: false },
  { id: 153, text: 'Master data structures & algorithms', completed: false },
  { id: 154, text: 'Write clean, readable code', completed: false },
  { id: 155, text: 'Build full-stack applications', completed: false },
  { id: 156, text: 'Contribute to open source projects', completed: false },
  { id: 157, text: 'Automate daily tasks with code', completed: false },
  { id: 158, text: 'Understand system design basics', completed: false },
  { id: 159, text: 'Master debugging skills', completed: false },

  // ── Wilderness & Navigation ───────────────────
  { id: 129, text: 'Hike alone in wilderness', completed: false },
  { id: 130, text: 'Learn wilderness navigation', completed: false },

  // ── Urban Exploration ─────────────────────────
  { id: 160, text: 'Practice urban exploration safely', completed: false },
  { id: 161, text: 'Explore abandoned structures', completed: false },
  { id: 162, text: 'Navigate city at night alone', completed: false },
  { id: 164, text: 'Document hidden city spaces', completed: false },

  // ── Service & Community ───────────────────────
  { id: 41, text: 'Volunteer abroad', completed: false },
  { id: 42, text: 'Mentor young creators', completed: false },
  { id: 43, text: 'Sponsor child education', completed: false },
  { id: 44, text: 'Host community workshop', completed: false },
  { id: 45, text: 'Plant 100 trees', completed: false },
  { id: 94, text: 'Clean city streets', completed: false },
  { id: 95, text: 'Build community garden', completed: false },
  { id: 111, text: 'Help stranger daily', completed: false },

  // ── Discipline & Resilience Challenges ────────
  { id: 24, text: 'Complete silent retreat', completed: false },
  { id: 47, text: 'Go one month offline', completed: false },
  { id: 48, text: 'Practice daily gratitude', completed: false },
  { id: 50, text: 'Meditate one year straight', completed: false },
  { id: 108, text: 'Fast for clarity', completed: false },
  { id: 109, text: 'Try cold shower', completed: true },
];

// ── HABITS: Recurring daily/weekly practices ────────────────────────────
export const habits = [
  // ── Mindfulness & Mental Health ───────────────
  { text: 'Daily meditation (10+ mins)', completed: false },
  { text: 'Breathe mindfully daily', completed: false },
  { text: 'Sit in silence (5+ mins)', completed: true },
  { text: 'Practice daily gratitude', completed: false },
  { text: 'Journal consistently', completed: false },

  // ── Sleep & Rest ──────────────────────────────
  { text: 'Read 30 mins before bed', completed: true },
  { text: 'Wake before sunrise', completed: false },
  { text: 'Watch sunrise daily', completed: false },

  // ── Physical Health ───────────────────────────
  { text: 'Cold shower daily', completed: true },
  { text: 'Exercise 5x per week', completed: false },
  { text: 'Stretch every morning', completed: false },

  // ── Learning & Growth ─────────────────────────
  { text: 'Read 20 pages daily', completed: false },
  { text: 'Practice music daily', completed: false },
  { text: 'Practice touch typing daily', completed: false },
  { text: 'Learn something new daily', completed: false },

  // ── Discipline & Character ────────────────────
  { text: 'Train mental toughness daily', completed: false },
  { text: 'Live with self-discipline', completed: false },
  { text: 'Reflect on day before sleep', completed: false },
];

export const books = [
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    status: 'reading',
    rating: null,
    coverColor: '#E6E1D3'
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt & David Thomas',
    status: 'reading',
    rating: null,
    coverColor: '#2F3A44'
  },
  {
    title: 'Deep Work',
    author: 'Cal Newport',
    status: 'reading',
    rating: null,
    coverColor: '#1C1C1C'
  },
  {
    title: 'Building a Second Brain',
    author: 'Tiago Forte',
    status: 'reading',
    rating: null,
    coverColor: '#F5EFE6'
  },

  // 🧠 Thinking & Philosophy
  {
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    status: 'reading',
    rating: null,
    coverColor: '#E0C68C'
  },
  {
    title: 'Meditations',
    author: 'Marcus Aurelius',
    status: 'reading',
    rating: null,
    coverColor: '#BFA37C'
  },

  // ⚙️ Systems, Work & Craft
  {
    title: 'The Almanack of Naval Ravikant',
    author: 'Eric Jorgenson',
    status: 'reading',
    rating: null,
    coverColor: '#F5F5F5'
  },
  {
    title: 'Show Your Work!',
    author: 'Austin Kleon',
    status: 'reading',
    rating: null,
    coverColor: '#FFFFFF'
  },

  // 🚀 Growth & Resilience
  {
    title: "Can't Hurt Me",
    author: 'David Goggins',
    status: 'reading',
    rating: null,
    coverColor: '#2C2C2C'
  }
];
