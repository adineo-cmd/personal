export const notesIndex = {
  asciiArt: `
 ________________________________
|.==============================,|
||                              ||
||    .----.    ,               ||
||   / ><   \\  /                ||
||  |        |/\\                ||
||   \\______//\\/                ||
||   _(____)/ /                 ||
||__/ ,_ _  _/__________________||
'===\\___\\_) |===================='
     |______|
     |  ||  |
     |__||__|
     (__)(__)
------------------------------------------------
`,
  categories: [
    {
      id: "system-config",
      title: "🐧 System Configuration & Linux",
      description: "Linux distributions, GNOME customization, OS variants, and hardware setup",
      notes: [
        {
          slug: "linux-distributions",
          title: "Linux Distributions Setup",
          date: "January 10, 2026",
          excerpt: "PC setup (Ubuntu, Kali, Manjaro, NixOS) vs Laptop setup. Driver caution (Nvidia) and virtual environments (BlackArch, Parrot).",
          tags: ["linux", "os", "setup", "drivers"]
        },
        {
          slug: "gnome-customization",
          title: "GNOME Apps & Theming",
          date: "January 12, 2026",
          excerpt: "Essential apps (Tweaks, Extensions, GParted), Grub themes (Cyberpunk, Xenlism), and PowerShell atomic theme configuration.",
          tags: ["gnome", "themes", "customization", "powershell"]
        }
      ]
    },
    {
      id: "programming",
      title: "💻 Programming & Development",
      description: "Python cheat sheets, DSA roadmaps, interview preparation, and project ideas",
      notes: [
        {
          slug: "python-cheat-sheet",
          title: "Python Data Structures & Functions",
          date: "February 1, 2026",
          excerpt: "Comprehensive guide on Lists, Dicts, Counter, Deque, Heapq, Sets, Tuples, String ops, and built-in functions like map, zip, bisect.",
          tags: ["python", "cheat-sheet", "data-structures"]
        },
        {
          slug: "coding-interview-roadmap",
          title: "Coding Interview Roadmap",
          date: "February 5, 2026",
          excerpt: "4-Task Plan: Weapon of Choice (20 days), Mastering Basics (40 days), Starting Practice (60 days), Getting Better (100 days).",
          tags: ["interview", "dsa", "roadmap", "leetcode"]
        },
        {
          slug: "leetcode-must-do",
          title: "LeetCode Must-Do Lists",
          date: "February 8, 2026",
          excerpt: "Curated lists of Easy (Roman to Integer, Valid Parentheses) and Medium (Longest Palindromic Substring, Container With Most Water) problems.",
          tags: ["leetcode", "problems", "practice"]
        }
      ]
    },
    {
      id: "ai-ml",
      title: "🧠 AI & Machine Learning",
      description: "Vibe coding, AI tools, future-proofing strategies, and local LLMs",
      notes: [
        {
          slug: "vibe-coding-concept",
          title: "Vibe Coding & AI Assistance",
          date: "February 12, 2026",
          excerpt: "Writing code via natural language prompts. Tools: Copilot, Cursor, Codeium. Stats: 30% of Google code is AI-generated.",
          tags: ["ai", "vibe-coding", "automation"]
        },
        {
          slug: "ai-future-proofing",
          title: "Future-Proofing Engineering Career",
          date: "February 14, 2026",
          excerpt: "Master AI workflows, focus on architecture & system design, level up debugging/testing, and build products not just code.",
          tags: ["career", "ai", "strategy"]
        },
        {
          slug: "local-llm-resources",
          title: "Local LLMs & AI Resources",
          date: "February 16, 2026",
          excerpt: "Running LLMs locally (Oobabooga), HuggingFace, LlamaIndex, and prompt engineering guides.",
          tags: ["llm", "local-ai", "resources"]
        },
        {
          slug: "ai-tools-list",
          title: "AI Tools & Platforms",
          date: "February 18, 2026",
          excerpt: "HuggingFace, Blackbox.ai, Replit, v0.dev, Oobabooga Text-Generation-WebUI, and 50+ Open Source Options for Running LLMs Locally.",
          tags: ["ai", "tools", "platforms", "open-source"]
        }
      ]
    },
    {
      id: "cybersecurity",
      title: "🛡️ Cybersecurity & Pentesting",
      description: "Security distros, tools, OSINT, privacy practices, and communities",
      notes: [
        {
          slug: "security-distros",
          title: "Security Operating Systems",
          date: "January 20, 2026",
          excerpt: "Kali, Parrot, BlackArch, BackBox, Buscador, AttifyOS. Docker images for Kali, ZAP, and WPScan.",
          tags: ["security", "os", "kali", "docker"]
        },
        {
          slug: "pentesting-tools",
          title: "Essential Pentesting Tools",
          date: "January 22, 2026",
          excerpt: "Multi-paradigm (Metasploit), Scanners (Nessus, Nikto), Network (Nmap, Wireshark), Wireless (Aircrack-ng), and Password Cracking (Hashcat).",
          tags: ["pentesting", "tools", "hacking"]
        },
        {
          slug: "osint-framework",
          title: "OSINT Resources & Frameworks",
          date: "January 25, 2026",
          excerpt: "Frameworks (Maltego, Spiderfoot), Search Engines (Shodan, Censys), Data Breaches (Have I Been Pwned), and Social Media tools.",
          tags: ["osint", "intelligence", "research"]
        },
        {
          slug: "google-dorking",
          title: "Google Dorking Operators",
          date: "January 27, 2026",
          excerpt: "Operators (intext, intitle, site, filetype) and examples for finding vulnerable directories and sensitive files.",
          tags: ["dorking", "google", "recon"]
        },
        {
          slug: "privacy-anonymity",
          title: "Privacy & Anonymity Measures",
          date: "January 30, 2026",
          excerpt: "Tor Browser, Tails, Qubes OS, Signal, ProtonMail, VPNs, and physical security (webcam tape, Ventoy boot).",
          tags: ["privacy", "anonymity", "security"]
        },
        {
          slug: "hacking-forums",
          title: "Hacking Forums & Communities",
          date: "February 2, 2026",
          excerpt: "0x00sec, HackForums, Demon Forums, BreachForums, Dread, HackTheBox, TryHackMe, and various security news outlets.",
          tags: ["forums", "community", "learning", "security"]
        }
      ]
    },
    {
      id: "lifestyle",
      title: "💪 Fitness, Health & Finance",
      description: "Workout plans, grooming, diet, wealth strategies, and health hacks",
      notes: [
        {
          slug: "workout-plans",
          title: "Workout Plans & Exercises",
          date: "February 20, 2026",
          excerpt: "Push/Pull/Legs split, FST-7 system, and specific exercises for Chest, Back, Legs, and Abs. Includes Beginner and Advanced routines.",
          tags: ["fitness", "workout", "gym"]
        },
        {
          slug: "budget-grooming",
          title: "Budget Grooming & Skincare",
          date: "February 22, 2026",
          excerpt: "Products under ₹100 (Himalaya, Vicco, Dove), hygiene habits, and features to aim for (jawline, skin).",
          tags: ["grooming", "skincare", "budget"]
        },
        {
          slug: "diet-nutrition",
          title: "Diet & Nutrition Plan",
          date: "February 24, 2026",
          excerpt: "Staples (Whole grains, Lentils), Vegetables, Hydration, Supplements (Whey, Creatine), and Budget Diet options.",
          tags: ["diet", "nutrition", "health", "food"]
        },
        {
          slug: "finance-strategy",
          title: "Banking & Finance Strategy",
          date: "February 25, 2026",
          excerpt: "Account types (Salary, Expense, Emergency, Investment), 50/30/20 budgeting, and investment vehicles (Index Funds, Crypto).",
          tags: ["finance", "banking", "investing"]
        },
        {
          slug: "billionaire-mindset",
          title: "Billionaire Mindset & Wealth",
          date: "February 28, 2026",
          excerpt: "Embrace failure, calculated risks, delayed gratification, scalable business models, and personal branding.",
          tags: ["mindset", "wealth", "business"]
        },
        {
          slug: "health-hacks",
          title: "MEDSRX Health Hacks",
          date: "March 1, 2026",
          excerpt: "Meditation, Exercise, Diet, Sleep (7-9h), Relationships, and X-Factor (hobbies).",
          tags: ["health", "habits", "wellness"]
        }
      ]
    },
    {
      id: "productivity",
      title: "📚 Productivity & Resources",
      description: "Time management, learning resources, technical commands, and storage strategies",
      notes: [
        {
          slug: "time-management",
          title: "Time Management Techniques",
          date: "March 5, 2026",
          excerpt: "Pomodoro, Eisenhower Matrix, Time Blocking, 2-Minute Rule, and tools like Notion & Obsidian.",
          tags: ["productivity", "time-management", "focus"]
        },
        {
          slug: "learning-resources",
          title: "Free Learning Resources",
          date: "March 8, 2026",
          excerpt: "Courses (Coursera, edX), Books (Project Gutenberg, LibGen), Coding (freeCodeCamp), and Design (Canva, Unsplash).",
          tags: ["learning", "resources", "education"]
        },
        {
          slug: "wget-commands",
          title: "Wget Website Cloning Commands",
          date: "March 10, 2026",
          excerpt: "Mirroring sites, Tor usage, text-only scraping, and polite scraping flags to avoid server overload.",
          tags: ["wget", "commands", "linux", "scraping"]
        },
        {
          slug: "storage-strategy",
          title: "Contact & Storage Strategy",
          date: "March 12, 2026",
          excerpt: "Email segmentation, device usage (PC large files, Laptop research), and backup routines.",
          tags: ["storage", "backup", "organization"]
        },
        {
          slug: "free-software-tools",
          title: "Free Software & Tools",
          date: "March 15, 2026",
          excerpt: "Office (LibreOffice), Media (VLC, OBS), Security (VeraCrypt), Utilities (7-Zip, Rufus, Ventoy).",
          tags: ["software", "tools", "free", "utilities"]
        }
      ]
    }
  ]
};