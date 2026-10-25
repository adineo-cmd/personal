// src/data/content.js - All portfolio content

export const personalInfo = {
  name: 'Adineo',
  username: 'adineo-cmd',
  title: '',
  description: 'A personal site for documentary of life, projects, and random thoughts.',
};

export const aboutText = `
:) Hi, I’m aditya aka adineo. I love to explore whatever I like, and currently busy working on some projects.

Most of my days revolve around linux, side projects, workouts or exploring internet.

This website is my personal snapshot. The main reason I made this website for documenting my life and whatever I do in my day to day life. 
This website is also for a proof that there is a person like me exist(or existed) in this world knowing one day I am going to die.  
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

// data/content.js
export const timelineData = [
  {
    year: '2026',
    events: [
      {
        month: 'FEB 2026',
        title: 'Learning AI Agents & Workflows',
        detail: 'Studying LangChain, LangGraph, RAG systems, and conversational AI architecture',
        category: 'learning'
      },
      {
        month: 'Full Year',
        title: 'B.Tech 4th Year (Final Year)',
        detail: 'CSIT @ UEM Kolkata – AI/ML engineering specialization',
        category: 'education'
      }
    ]
  },
  {
    year: '2025',
    events: [
      {
        month: 'DEC 2025',
        title: 'Digha Getaway with College Friends',
        detail: 'Weekend coastal escape – beaches, seafood, and sunset memories at West Bengal\'s shoreline',
        category: 'life'
      },
      {
        month: 'NOV 2025',
        title: 'Kalighat Pilgrimage',
        detail: 'Family visit to Kolkata\'s sacred Kali temple – spiritual reflection and cultural roots',
        category: 'life'
      },
      {
        month: 'OCT 2025',
        title: 'Digha Family Retreat',
        detail: 'Weekend with parents – ocean waves, shared meals, and screen-free bonding',
        category: 'life'
      },
      {
        month: 'JUN 2025',
        title: 'Full-Stack & Dev Environment Mastery',
        detail: 'HTML/CSS/JS/React + Linux customization (GNOME, ZSH, Starship, Kitty)',
        category: 'learning'
      },
      {
        month: 'APR 2025',
        title: 'Git & GitHub Workflow',
        detail: 'Version control mastery, project documentation',
        category: 'learning'
      },
      {
        month: 'FEB 2025',
        title: 'Eco Park Visit with College Friends',
        detail: 'Exploring Kolkata\'s largest urban park – green trails, boating, and evening hangout with UEM classmates',
        category: 'life'
      },
      {
        month: 'Full Year',
        title: 'B.Tech 3rd Year',
        detail: 'CSIT @ UEM Kolkata – AI/ML specialization track',
        category: 'education'
      },
      {
        month: 'OCT 2025 – Present',
        title: 'AI Engineer Intern',
        detail: 'Stealth AI Startup – building production-grade voice agents and RAG workflows',
        category: 'project'
      },
      {
        month: 'MAR – JUL 2025',
        title: 'AI Engineer Intern',
        detail: 'ZuduAI – developing conversational AI systems and post-call analysis pipelines',
        category: 'project'
      }
    ]
  },
  {
    year: '2024',
    events: [
      {
        month: 'DEC 2024',
        title: 'Puri Coastal Pilgrimage',
        detail: 'Family journey to Odisha\'s sacred shores – Jagannath Temple darshan, beach walks, and Bengali seafood feasts',
        category: 'life'
      },
      {
        month: 'OCT 2024',
        title: 'Durga Puja with College Friends',
        detail: 'First college-era pandal hopping – discovering Kolkata\'s artistic installations with UEM peers',
        category: 'life'
      },
      {
        month: 'DEC 2024',
        title: 'Linux Dual Boot Setup',
        detail: 'Windows + Ubuntu 24.04 performance-tuned system',
        category: 'learning'
      },
      {
        month: 'SEP 2024',
        title: 'System Automation',
        detail: 'Scripting for backups, restores & desktop customization',
        category: 'project'
      },
      {
        month: 'AUG 2024',
        title: 'Open Source Ecosystem',
        detail: 'Discovered tools, communities & contribution pathways',
        category: 'learning'
      },
      {
        month: 'JUL 2024',
        title: 'Serious Python Journey',
        detail: 'Transitioned from basics to applied development',
        category: 'learning'
      },
      {
        month: 'Full Year',
        title: 'B.Tech 2nd Year',
        detail: 'CSIT @ UEM Kolkata – core CS fundamentals & data structures',
        category: 'education'
      }
    ]
  },
  {
    year: '2023',
    events: [
      {
        month: 'OCT 2023',
        title: 'Durga Puja with School Friends',
        detail: 'Final school-year celebrations – pandal tours across Behala and South Kolkata',
        category: 'life'
      },
      {
        month: 'MAY 2023',
        title: 'ISC Completion (Class XII)',
        detail: 'Orient Day School, Behala, Kolkata – 69.5% (Computer Science stream)',
        category: 'education'
      },
      {
        month: 'Full Year',
        title: 'B.Tech 1st Year Start',
        detail: 'CSIT @ University of Engineering & Management, Newtown, Kolkata',
        category: 'education'
      },
      {
        month: 'Full Year',
        title: 'Family Home in Behala',
        detail: 'Settled permanently in parents\' newly purchased home in Behala after school completion',
        category: 'life'
      }
    ]
  },
  {
    year: '2022',
    events: [
      {
        month: 'OCT 2022',
        title: 'Durga Puja with School Friends',
        detail: 'Class X board prep break – joyful pandal hopping with Orient Day School friends',
        category: 'life'
      },
      {
        month: 'MAY 2022',
        title: 'ICSE Completion (Class X)',
        detail: 'Orient Day School, Behala, Kolkata – 81.3% with strong mathematics & computer fundamentals',
        category: 'education'
      }
    ]
  },
  {
    year: '2021',
    events: [
      {
        month: 'OCT 2021',
        title: 'Durga Puja with School Friends',
        detail: 'Early teenage bonding – exploring Behala\'s neighborhood pandals with classmates',
        category: 'life'
      },
      {
        month: 'Full Year',
        title: 'Class IX Studies',
        detail: 'Orient Day School, Behala – strengthening foundations in mathematics and computer science',
        category: 'education'
      }
    ]
  },
  {
    year: '2020',
    events: [
      {
        month: 'FEB 2020',
        title: 'Mayapur Pilgrimage',
        detail: 'Family visit to ISKCON\'s spiritual hub – serene ghats, kirtan sessions, and cultural immersion',
        category: 'life'
      },
      {
        month: 'OCT 2020',
        title: 'Durga Puja with Family',
        detail: 'Pandemic-era celebrations – intimate family rituals at home during lockdown',
        category: 'life'
      },
      {
        month: 'Full Year',
        title: 'Class VIII Studies',
        detail: 'Orient Day School, Behala – adapting to remote learning during pandemic',
        category: 'education'
      }
    ]
  },
  {
    year: '2019',
    events: [
      {
        month: 'DEC 2019',
        title: 'Kolkata Science & Nature Day',
        detail: 'Family expedition – Alipore Zoo wildlife encounters, Birla Planetarium cosmos exploration, and Birla Museum cultural artifacts',
        category: 'life'
      },
      {
        month: 'OCT 2019',
        title: 'Durga Puja with Family',
        detail: 'Traditional celebrations – accompanying parents to ancestral pandals in Behala',
        category: 'life'
      },
      {
        month: 'Full Year',
        title: 'Class VII Studies',
        detail: 'Orient Day School, Behala – early exposure to logical puzzles and basic computing',
        category: 'education'
      }
    ]
  },
  {
    year: '2013–2018',
    events: [
      {
        month: 'APR 2013',
        title: 'Admission to Orient Day School',
        detail: 'Secured admission to Class 3 at Behala campus – beginning of 10-year academic journey',
        category: 'education'
      },
      {
        month: '2013',
        title: 'Family Home Purchase in Behala',
        detail: 'Parents bought permanent residence in Behala, Kolkata – relocated from maternal grandparents\' home',
        category: 'life'
      },
      {
        month: '2013–2018',
        title: 'Orient Day School (Classes 3–8)',
        detail: 'Behala campus – foundational years in mathematics, English literature, and early tech curiosity',
        category: 'education'
      },
      {
        month: '2013–2023',
        title: 'Behala Residence',
        detail: 'Family home in Behala, Kolkata – base for school years and early college',
        category: 'life'
      }
    ]
  },
  {
    year: '2012',
    events: [
      {
        month: 'MAR 2012',
        title: 'Relocated to Maternal Grandparents\' Home',
        detail: 'Moved in with grandparents after skipping Class 2 – beginning of independent learning phase',
        category: 'life'
      },
      {
        month: '2012',
        title: 'Self-Directed Learning Year',
        detail: 'Explored mathematics puzzles, English literature, basic logic games – cultivated independent learning habits',
        category: 'learning'
      },
      {
        month: '2012',
        title: 'Baguiati to Grandparents\' Transition',
        detail: 'Relocated within Kolkata after Calcutta Public School – preparatory year before Orient Day School',
        category: 'life'
      }
    ]
  },
  {
    year: '2004–2011',
    events: [
      {
        month: '2009–2011',
        title: 'Calcutta Public School',
        detail: 'Baguiati, Kolkata – Upper Nursery (2009) → Class 1 (2010–2011)',
        category: 'education'
      },
      {
        month: '2009–2010',
        title: 'Tarakeshwar First Pilgrimage',
        detail: 'Early childhood family visit to the sacred Shiva temple – first spiritual journey during kindergarten years',
        category: 'life'
      },
      {
        month: '2004–2011',
        title: 'Childhood in Baguiati',
        detail: 'Family residence in Baguiati, Kolkata – formative years near airport area',
        category: 'life'
      }
    ]
  },
  {
    year: '2004',
    events: [
      {
        month: '2004',
        title: 'Born',
        detail: 'Lake Town Nursing Home, Kolkata – 700089, West Bengal, India',
        category: 'milestone'
      }
    ]
  }
];
// ── GOALS: One-time achievements & major life milestones ────────────────
export const goals = [
  // ── TRAVEL & EXPLORE ──────────────────────
  { id: 1, text: 'Watch the sunrise over Machu Picchu', completed: true, category: 'travel' },
  { id: 2, text: 'See the Northern Lights in Iceland', completed: false, category: 'travel' },
  { id: 3, text: 'Spend a week in Kyoto during cherry blossom season', completed: false, category: 'travel' },
  { id: 4, text: 'Cross the Trans-Siberian Railway', completed: false, category: 'travel' },
  { id: 5, text: 'Walk the Camino de Santiago', completed: false, category: 'travel' },
  { id: 6, text: 'Sail through the Greek islands', completed: false, category: 'travel' },
  { id: 7, text: 'Visit all seven continents', completed: false, category: 'travel' },
  { id: 8, text: 'See the temples of Angkor Wat', completed: false, category: 'travel' },
  { id: 9, text: 'Road trip along the Pacific Coast Highway', completed: false, category: 'travel' },
  { id: 10, text: 'Sleep under the stars in the Sahara Desert', completed: false, category: 'travel' },
  { id: 11, text: 'Explore the fjords of Norway', completed: false, category: 'travel' },
  { id: 12, text: 'Visit the Galápagos Islands', completed: false, category: 'travel' },
  { id: 13, text: 'Take a hot air balloon ride over Cappadocia', completed: false, category: 'travel' },
  
  // ── ADVENTURE & THRILLS ───────────────────
  { id: 14, text: 'Skydive over a scenic landscape', completed: false, category: 'adventure' },
  { id: 15, text: 'Climb a mountain over 4,000 meters', completed: false, category: 'adventure' },
  { id: 16, text: 'Scuba dive on a coral reef', completed: false, category: 'adventure' },
  { id: 17, text: 'White-water raft a class V river', completed: false, category: 'adventure' },
  { id: 18, text: 'Learn to surf and catch a real wave', completed: false, category: 'adventure' },
  { id: 19, text: 'Paraglide over a valley', completed: false, category: 'adventure' },
  { id: 20, text: 'Do a multi-day wilderness hike', completed: false, category: 'adventure' },
  { id: 21, text: 'Bungee jump off a bridge', completed: false, category: 'adventure' },
  { id: 22, text: 'Go cave diving or spelunking', completed: false, category: 'adventure' },
  { id: 23, text: 'Cycle across an entire country', completed: false, category: 'adventure' },
  { id: 24, text: 'Swim in a bioluminescent bay at night', completed: false, category: 'adventure' },
  { id: 25, text: 'Ski a black diamond run in the Alps', completed: false, category: 'adventure' },
  
  // ── LEARNING & GROWTH ─────────────────────
  { id: 26, text: 'Learn a new language to fluency', completed: false, category: 'learning' },
  { id: 27, text: 'Read 100 classic books', completed: false, category: 'learning' },
  { id: 28, text: 'Master a musical instrument', completed: false, category: 'learning' },
  { id: 29, text: 'Write and publish a book', completed: false, category: 'learning' },
  { id: 30, text: 'Learn to code a complete application', completed: false, category: 'learning' },
  { id: 31, text: 'Take a photography masterclass', completed: false, category: 'learning' },
  { id: 32, text: 'Study astronomy and identify constellations', completed: false, category: 'learning' },
  { id: 33, text: 'Learn calligraphy or hand lettering', completed: false, category: 'learning' },
  { id: 34, text: 'Complete a marathon', completed: false, category: 'learning' },
  { id: 35, text: 'Learn chess and reach intermediate level', completed: false, category: 'learning' },
  
  // ── CREATIVE & ARTISTIC ───────────────────
  { id: 36, text: 'Paint or draw a landscape from life', completed: false, category: 'creative' },
  { id: 37, text: 'Compose an original piece of music', completed: false, category: 'creative' },
  { id: 38, text: 'Create a short film or documentary', completed: false, category: 'creative' },
  { id: 39, text: 'Build something with your hands', completed: false, category: 'creative' },
  { id: 40, text: 'Design and plant a garden', completed: false, category: 'creative' },
  { id: 41, text: 'Learn pottery or ceramics', completed: false, category: 'creative' },
  { id: 42, text: 'Write poetry and have it published', completed: false, category: 'creative' },
  { id: 43, text: 'Create a family recipe book', completed: false, category: 'creative' },
  { id: 44, text: 'Learn to dance a traditional style', completed: false, category: 'creative' },
  { id: 45, text: 'Design and sew your own clothing', completed: false, category: 'creative' },
  
  // ── FOOD & CULINARY ───────────────────────
  { id: 46, text: 'Master the art of sourdough bread', completed: false, category: 'food' },
  { id: 47, text: 'Cook a meal from every continent', completed: false, category: 'food' },
  { id: 48, text: 'Dine at a Michelin-starred restaurant', completed: false, category: 'food' },
  { id: 49, text: 'Learn to make pasta from scratch', completed: false, category: 'food' },
  { id: 50, text: 'Grow your own vegetables and herbs', completed: false, category: 'food' },
  { id: 51, text: 'Master the perfect steak', completed: false, category: 'food' },
  { id: 52, text: 'Learn to make sushi', completed: false, category: 'food' },
  { id: 53, text: 'Brew your own beer or wine', completed: false, category: 'food' },
  { id: 54, text: 'Forage for wild mushrooms', completed: false, category: 'food' },
  { id: 55, text: 'Create a signature cocktail', completed: false, category: 'food' },
  
  // ── PEOPLE & RELATIONSHIPS ────────────────
  { id: 56, text: 'Reconnect with an old friend', completed: false, category: 'people' },
  { id: 57, text: 'Mentor someone in your field', completed: false, category: 'people' },
  { id: 58, text: 'Volunteer for a cause you care about', completed: false, category: 'people' },
  { id: 59, text: 'Write letters to five people who inspired you', completed: false, category: 'people' },
  { id: 60, text: 'Host a dinner party for new friends', completed: false, category: 'people' },
  { id: 61, text: 'Forgive someone who hurt you', completed: false, category: 'people' },
  { id: 62, text: 'Perform 100 random acts of kindness', completed: false, category: 'people' },
  { id: 63, text: 'Adopt or foster an animal', completed: false, category: 'people' },
  { id: 64, text: 'Organize a community event', completed: false, category: 'people' },
  { id: 65, text: 'Teach someone a valuable skill', completed: false, category: 'people' },
  
  // ── MIND & SPIRIT ─────────────────────────
  { id: 66, text: 'Meditate for 30 days straight', completed: false, category: 'mind' },
  { id: 67, text: 'Complete a silent retreat', completed: false, category: 'mind' },
  { id: 68, text: 'Practice yoga daily for a month', completed: false, category: 'mind' },
  { id: 69, text: 'Write a letter to your future self', completed: false, category: 'mind' },
  { id: 70, text: 'Learn mindfulness and stress management', completed: false, category: 'mind' },
  { id: 71, text: 'Keep a gratitude journal for a year', completed: false, category: 'mind' },
  { id: 72, text: 'Overcome a major fear', completed: false, category: 'mind' },
  { id: 73, text: 'Practice digital detox for a month', completed: false, category: 'mind' },
  { id: 74, text: 'Learn lucid dreaming', completed: false, category: 'mind' },
  { id: 75, text: 'Achieve a state of flow in your work', completed: false, category: 'mind' },
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
    status: 'finished',
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
    status: 'finished',
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
  },

  // 📚 Want to Read
  {
    title: 'The Art of War',
    author: 'Sun Tzu',
    status: 'want',
    rating: null,
    coverColor: '#3A3A3A'
  },
  {
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    status: 'want',
    rating: null,
    coverColor: '#4A5A6A'
  },
  {
    title: 'The Lean Startup',
    author: 'Eric Ries',
    status: 'want',
    rating: null,
    coverColor: '#5A4A3A'
  }
];