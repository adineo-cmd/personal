// src/data/content.js - All portfolio content

export const personalInfo = {
  name: 'Aditya Yadav',
  username: 'adineo-cmd',
  title: 'Full-Stack Developer & AI/ML Engineer',
  description: 'Building clean, scalable web applications and exploring AI-powered solutions with a focus on NLP, RAG concepts, and conversational systems.',
  email: 'theadityayadav107@gmail.com',
  location: 'Kolkata, India',
  github: 'https://github.com/adineo-cmd',
  linkedin: 'https://linkedin.com/in/aditya-yadav-cmd',
  leetcode: null, // No public LeetCode profile confirmed
  resumeUrl: '/Resume.pdf'
};

export const aboutText = `Full-stack developer with a strong foundation in Python, experienced in frontend frameworks (React, Astro, Angular) and backend systems (Node.js, FastAPI). Actively building real-world projects involving AI/ML (NLP, transformer models, semantic search), responsive UIs, and cloud-native architectures. Passionate about open-source contribution and creating user-centric, scalable applications.`;

export const certifications = [
  {
    title: 'Machine Learning and Deep Learning Specialization',
    issuer: 'Coursera',
    period: '2024 – 2025',
    description: 'Completed comprehensive training in ML algorithms, neural networks, and deep learning architectures. Applied supervised and unsupervised learning techniques to real-world datasets and projects.'
  },
  {
    title: 'Full Stack Web Development and Cybersecurity',
    issuer: 'LinkedIn Learning',
    period: '2023 – 2024',
    description: 'Gained hands-on experience building responsive web applications using React, Django, and modern web technologies. Studied cybersecurity fundamentals including network security, encryption, and vulnerability assessment.'
  }
];

export const education = [
  {
    degree: 'B.Tech in CSIT',
    institution: 'University of Engineering and Management',
    location: 'Newtown, Kolkata, India',
    period: '2023 – Expected 2027',
    description: 'CGPA: 8.24/10.0. Coursework includes AI/ML, full-stack development, databases, and cloud technologies.'
  },
  {
    degree: 'ICSE & ISC',
    institution: 'Orient Day School',
    location: 'Kolkata, India',
    period: '2013 – 2023',
    description: 'ICSE (Class X): 81.3%, ISC (Class XII): 69.5%'
  }
];

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
    year: '2025',
    events: [
      {
        month: 'AUG 2025',
        title: 'Backend Development Roadmap Started',
        detail: 'Following roadmap.sh with task-based learning'
      },
      {
        month: 'JUN 2025',
        title: 'Started Full-Stack Learning',
        detail: 'HTML, CSS, JS, React, Flask/Django planning'
      },
      {
        month: 'JUN 2025',
        title: 'Linux Customization Mastery',
        detail: 'GNOME, Kitty, Fastfetch, btop, themes & extensions'
      },
      {
        month: 'JUN 2025',
        title: 'Terminal Power Setup',
        detail: 'ZSH, Starship, Nerd Fonts, Atuin'
      },
      {
        month: 'MAY 2025',
        title: 'Advanced Algorithms & DSA',
        detail: 'Sorting, DP, Graphs, NP-Completeness'
      },
      {
        month: 'MAY 2025',
        title: 'C Language Added',
        detail: 'Preferred language for algorithms & low-level logic'
      },
      {
        month: 'APR 2025',
        title: 'Git & GitHub Workflow',
        detail: 'Version control, README optimization, projects'
      },
      {
        month: 'MAR 2025',
        title: 'Python Learning Streak',
        detail: 'Projects + structured learning combined'
      }
    ]
  },
  {
    year: '2024',
    events: [
      {
        month: 'DEC 2024',
        title: 'Linux Dual Boot Setup',
        detail: 'Windows + Ubuntu with performance tuning'
      },
      {
        month: 'NOV 2024',
        title: 'Explored Arch / BlackArch Linux',
        detail: 'Downloaded ISO and studied installation'
      },
      {
        month: 'OCT 2024',
        title: 'System Automation Interest',
        detail: 'Backup, restore, customization scripting'
      },
      {
        month: 'SEP 2024',
        title: 'Discovered Open Source Ecosystem',
        detail: 'Tools, communities, and contribution paths'
      },
      {
        month: 'AUG 2024',
        title: 'Started Python Seriously',
        detail: 'Moved from basics to applied learning'
      },
      {
        month: 'JUL 2024',
        title: 'Tech Career Focused',
        detail: 'Backend, AI, and system-level skills'
      },
      {
        month: 'JUN 2024',
        title: 'B.Tech – 3rd Year',
        detail: 'Aligned academics with real-world skills'
      }
    ]
  }
];


export const goals = [
  { id: 19, text: 'Family Trip', completed: true },
  { id: 20, text: 'Friends Trip', completed: true },
  { id: 21, text: 'Run 100-mile ultra', completed: false },
  { id: 22, text: 'Cycle across India', completed: false },
  { id: 23, text: 'Swim in ocean', completed: true },
  { id: 24, text: 'Complete silent retreat', completed: false },
  { id: 25, text: 'Live without plastic', completed: false },
  { id: 26, text: 'Read 100 books', completed: false },
  { id: 27, text: 'Write a novel', completed: false },
  { id: 28, text: 'Learn to play guitar', completed: false },
  { id: 29, text: 'Compose original song', completed: false },
  { id: 30, text: 'Build a treehouse', completed: false },
  { id: 31, text: 'Grow own food', completed: false },
  { id: 32, text: 'Visit seven continents', completed: false },
  { id: 33, text: 'Trek Himalayan trails', completed: false },
  { id: 34, text: 'See Northern Lights', completed: false },
  { id: 35, text: 'Camp under stars', completed: false },
  { id: 36, text: 'Backpack solo Asia', completed: false },
  { id: 37, text: 'Dive coral reef', completed: false },
  { id: 38, text: 'Attend Burning Man', completed: false },
  { id: 39, text: 'Ride cross-country train', completed: false },
  { id: 40, text: 'Explore ancient ruins', completed: false },
  { id: 41, text: 'Volunteer abroad', completed: false },
  { id: 42, text: 'Mentor young creators', completed: false },
  { id: 43, text: 'Sponsor child education', completed: false },
  { id: 44, text: 'Host community workshop', completed: false },
  { id: 45, text: 'Plant 100 trees', completed: false },
  { id: 46, text: 'Build rainwater system', completed: false },
  { id: 47, text: 'Go one month offline', completed: false },
  { id: 48, text: 'Practice daily gratitude', completed: false },
  { id: 49, text: 'Journal every day', completed: false },
  { id: 50, text: 'Meditate one year straight', completed: false },
  { id: 51, text: 'Master headstand pose', completed: false },
  { id: 52, text: 'Run NYC Marathon', completed: false },
  { id: 53, text: 'Finish ultramarathon race', completed: false },
  { id: 54, text: 'Bike coastal highway', completed: false },
  { id: 55, text: 'Climb mountain peak', completed: false },
  { id: 56, text: 'Kayak through fjords', completed: false },
  { id: 57, text: 'Hike desert canyon', completed: false },
  { id: 58, text: 'Sail across sea', completed: false },
  { id: 59, text: 'Photograph wildlife safari', completed: false },
  { id: 60, text: 'Take parents flying', completed: false },
  { id: 61, text: 'Reconnect old friends', completed: false },
  { id: 62, text: 'Forgive someone deeply', completed: false },
  { id: 63, text: 'Leave positive legacy', completed: false },
  { id: 64, text: 'Create time capsule', completed: false },
  { id: 65, text: 'Live in mountains', completed: false },
  { id: 66, text: 'Build tiny home', completed: false },
  { id: 67, text: 'Cook global cuisine', completed: false },
  { id: 68, text: 'Bake bread weekly', completed: false },
  { id: 69, text: 'Learn pottery basics', completed: false },
  { id: 70, text: 'Paint landscape scene', completed: false },
  { id: 71, text: 'Draw every day', completed: false },
  { id: 72, text: 'Collect vinyl records', completed: false },
  { id: 73, text: 'Own music instruments', completed: false },
  { id: 74, text: 'Sing in public', completed: false },
  { id: 75, text: 'Dance without fear', completed: false },
  { id: 76, text: 'Watch sunrise daily', completed: false },
  { id: 77, text: 'Stargaze all night', completed: false },
  { id: 78, text: 'Walk barefoot beach', completed: true },
  { id: 79, text: 'Swim at dawn', completed: false },
  { id: 80, text: 'Run forest trail', completed: false },
  { id: 81, text: 'Climb waterfall rocks', completed: false },
  { id: 82, text: 'Float down river', completed: false },
  { id: 83, text: 'Sleep in hammock', completed: false },
  { id: 84, text: 'Watch meteor shower', completed: false },
  { id: 85, text: 'Visit Amazon rainforest', completed: false },
  { id: 86, text: 'Cross Sahara Desert', completed: false },
  { id: 87, text: 'Walk historic pilgrimage', completed: false },
  { id: 88, text: 'Attend cultural festival', completed: false },
  { id: 89, text: 'Learn local language', completed: true },
  { id: 90, text: 'Teach something valuable', completed: false },
  { id: 91, text: 'Give public talk', completed: false },
  { id: 92, text: 'Start book club', completed: false },
  { id: 93, text: 'Organize charity run', completed: false },
  { id: 94, text: 'Clean city streets', completed: false },
  { id: 95, text: 'Build community garden', completed: false },
  { id: 96, text: 'Adopt rescue animal', completed: false },
  { id: 97, text: 'Raise indoor plants', completed: false },
  { id: 98, text: 'Compost kitchen waste', completed: false },
  { id: 99, text: 'Use only reusable items', completed: false },
  { id: 100, text: 'Wear handmade clothes', completed: false },
  { id: 101, text: 'Craft wooden furniture', completed: false },
  { id: 102, text: 'Knit winter scarf', completed: false },
  { id: 103, text: 'Write family history', completed: true },
  { id: 104, text: 'Record oral stories', completed: false },
  { id: 105, text: 'Map ancestral roots', completed: false },
  { id: 106, text: 'Celebrate small wins', completed: true },
  { id: 107, text: 'Wake before sunrise', completed: false },
  { id: 108, text: 'Fast for clarity', completed: false },
  { id: 109, text: 'Try cold shower', completed: true },
  { id: 110, text: 'Carry no phone day', completed: true },
  { id: 111, text: 'Help stranger daily', completed: false },
  { id: 112, text: 'Say thank you more', completed: true },
  { id: 113, text: 'Listen without interrupting', completed: false },
  { id: 114, text: 'Ask better questions', completed: true },
  { id: 115, text: 'Accept imperfection gladly', completed: false },
  { id: 116, text: 'Embrace quiet moments', completed: false },
  { id: 117, text: 'Walk without destination', completed: false },
  { id: 118, text: 'Sit in silence', completed: true },
  { id: 119, text: 'Breathe mindfully daily', completed: false },
];

export const books = [
  {
    title: 'The Four Agreements',
    author: 'Miguel Ruiz',
    status: 'reading',
    rating: null,
    coverColor: '#E8DCC4'
  },
  {
    title: "Can't Hurt Me",
    author: 'David Goggins',
    status: 'reading',
    rating: null,
    coverColor: '#2C2C2C'
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    status: 'read',
    rating: '4/5',
    coverColor: '#D84315'
  },
  {
    title: "Don't sweat the small stuff",
    author: 'Richard Carlson',
    status: 'read',
    rating: '3/5',
    coverColor: '#F5F5DC'
  },
  {
    title: 'A Thousand Splendid Suns',
    author: 'Khaled Hosseini',
    status: 'chose not to finish',
    rating: '4/5',
    coverColor: '#87CEEB'
  },
  {
    title: 'Jonathan Livingston Seagull',
    author: 'Richard Bach',
    status: 'read',
    rating: '4/5',
    coverColor: '#4682B4'
  },
  {
    title: 'Never split the difference',
    author: 'Chris Voss',
    status: 'read',
    rating: '3/5',
    coverColor: '#FFFFFF'
  },
  {
    title: 'A Wild Sheep Chase',
    author: 'Haruki Murakami',
    status: 'read',
    rating: '3/5',
    coverColor: '#8B7355'
  },
  {
    title: 'The Almanack of Naval Ravikant',
    author: 'Eric Jorgenson',
    status: 'read',
    rating: '3.5/5',
    coverColor: '#F5F5F5'
  },
  {
    title: 'Dance Dance Dance',
    author: 'Haruki Murakami',
    status: 'read',
    rating: '4/5',
    coverColor: '#FFFACD'
  }
];