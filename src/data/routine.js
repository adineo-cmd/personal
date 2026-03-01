// src/data/routine.js
// Budget-Friendly Longevity Routine for College Students (IST)
// Based on healthy principles without the expensive Blueprint costs

export const dailyRoutine = [
  {
    time: '08:30 AM',
    period: 'Morning',
    title: 'Wake Up & Hydrate',
    description: 'Drink 2 glasses of warm water. Open windows for fresh air & sunlight.',
    icon: '☀️',
    priority: 'high',
    details: {
      duration: '15 mins',
      cost: '₹0',
      tip: 'Avoid phone for first 20 mins to reduce anxiety.'
    }
  },
  {
    time: '08:45 AM',
    period: 'Morning',
    title: 'Basic Supplements (Optional)',
    description: 'Only if needed: Vitamin D3 (common deficiency) or Multivitamin. Consult doctor.',
    icon: '💊',
    priority: 'low',
    details: {
      duration: '5 mins',
      cost: '₹2-5/day',
      tip: 'Food first! Supplements are secondary.'
    }
  },
  {
    time: '09:00 AM',
    period: 'Morning',
    title: 'Movement & Breathwork',
    description: '10 mins stretching/yoga + 5 mins deep breathing. No gym needed.',
    icon: '🧘',
    priority: 'high',
    details: {
      duration: '15 mins',
      cost: '₹0',
      tip: 'Use YouTube free yoga videos (e.g., Yoga With Adriene).'
    }
  },
  {
    time: '09:15 AM',
    period: 'Morning',
    title: 'Cold Shower',
    description: 'End your regular shower with 30-60 seconds of cold water.',
    icon: '🚿',
    priority: 'medium',
    details: {
      duration: '10 mins',
      cost: '₹0',
      tip: 'Boosts alertness and circulation without expensive plunges.'
    }
  },
  {
    time: '09:30 AM',
    period: 'Morning',
    title: 'Breakfast',
    description: 'Mess/Home food: Eggs, Paratha, Poha, or Oats. Focus on protein.',
    icon: '🍳',
    priority: 'high',
    details: {
      duration: '30 mins',
      cost: '₹20-50',
      tip: 'Avoid sugary cereals. Add fruits if possible.'
    }
  },
  {
    time: '10:00 AM',
    period: 'Midday',
    title: 'Deep Study Session 1',
    description: 'Attend lectures or self-study. Phone on silent/DND.',
    icon: '📚',
    priority: 'high',
    details: {
      duration: '90 mins',
      cost: '₹0',
      tip: 'Use Pomodoro technique (25 min study + 5 min break).'
    }
  },
  {
    time: '11:30 AM',
    period: 'Midday',
    title: 'Walk & Hydrate',
    description: '10 mins walk outside (sunlight) + drink water.',
    icon: '🚶',
    priority: 'medium',
    details: {
      duration: '15 mins',
      cost: '₹0',
      tip: 'Natural light helps regulate sleep cycle.'
    }
  },
  {
    time: '11:45 AM',
    period: 'Midday',
    title: 'Deep Study Session 2',
    description: 'Continue classes, assignments, or coding.',
    icon: '💻',
    priority: 'high',
    details: {
      duration: '90 mins',
      cost: '₹0',
      tip: 'Batch similar tasks to save mental energy.'
    }
  },
  {
    time: '01:15 PM',
    period: 'Afternoon',
    title: 'Lunch',
    description: 'Mess/Home food: Dal, Rice, Roti, Sabzi. Eat slowly.',
    icon: '🍛',
    priority: 'high',
    details: {
      duration: '45 mins',
      cost: '₹50-100',
      tip: 'Fill half plate with vegetables if available.'
    }
  },
  {
    time: '02:00 PM',
    period: 'Afternoon',
    title: 'Power Nap (Optional)',
    description: '20 mins nap max. Set alarm. Helps memory consolidation.',
    icon: '😴',
    priority: 'low',
    details: {
      duration: '20 mins',
      cost: '₹0',
      tip: 'Dont sleep longer than 30 mins or you will feel groggy.'
    }
  },
  {
    time: '02:30 PM',
    period: 'Afternoon',
    title: 'Light Study / Admin',
    description: 'Emails, notes organization, easy readings.',
    icon: '📝',
    priority: 'medium',
    details: {
      duration: '90 mins',
      cost: '₹0',
      tip: 'Low energy time, do low-focus tasks.'
    }
  },
  {
    time: '04:00 PM',
    period: 'Evening',
    title: 'Snack & Social',
    description: 'Fruits, nuts, or tea. Connect with friends.',
    icon: '🫖',
    priority: 'medium',
    details: {
      duration: '30 mins',
      cost: '₹10-20',
      tip: 'Social connection is key for mental health.'
    }
  },
  {
    time: '04:30 PM',
    period: 'Evening',
    title: 'Personal Projects',
    description: 'Coding, hobbies, side projects, or learning new skills.',
    icon: '🎨',
    priority: 'medium',
    details: {
      duration: '90 mins',
      cost: '₹0',
      tip: 'Build things that matter to you.'
    }
  },
  {
    time: '06:00 PM',
    period: 'Evening',
    title: 'Free Time / Light Prep',
    description: 'Relax, prep gym bag, light stretching, or listen to podcasts.',
    icon: '🎧',
    priority: 'low',
    details: {
      duration: '120 mins',
      cost: '₹0',
      tip: 'Use this buffer to transition into workout mode.'
    }
  },
  {
    time: '08:00 PM',
    period: 'Night',
    title: 'Exercise',
    description: 'Commercial gym session, running, or bodyweight workout.',
    icon: '🏋️',
    priority: 'high',
    details: {
      duration: '90 mins',
      cost: '₹8-9/day (₹250/month budget gym)',
      tip: 'Stick to your ₹250/mo budget. Look for student discounts or off-peak plans!'
    }
  },
  {
    time: '09:30 PM',
    period: 'Night',
    title: 'Dinner (Post-Workout)',
    description: 'Protein-rich meal: Eggs, Dal, Paneer, Chicken + Rice/Roti. Replenish glycogen.',
    icon: '🍛',
    priority: 'high',
    details: {
      duration: '30 mins',
      cost: '₹50-100',
      tip: 'Eat within 45 mins post-workout for optimal recovery.'
    }
  },
  {
    time: '10:00 PM',
    period: 'Night',
    title: 'Wind Down & Digital Sunset',
    description: 'No screens. Light stretching, journal, or chat with family. Phone away.',
    icon: '📖',
    priority: 'high',
    details: {
      duration: '30 mins',
      cost: '₹0',
      tip: 'Blue light kills sleep quality. Let your body cool down post-meal.'
    }
  },
  {
    time: '10:30 PM',
    period: 'Night',
    title: 'Pre-Sleep Routine',
    description: 'Gratitude journal, meditation, or deep breathing. Room cool and dark.',
    icon: '🌙',
    priority: 'medium',
    details: {
      duration: '15 mins',
      cost: '₹0',
      tip: 'Signal to your body that its time to sleep.'
    }
  },
  {
    time: '10:45 PM',
    period: 'Night',
    title: 'Sleep',
    description: '7.5 hours. Critical for muscle recovery, memory, and growth.',
    icon: '😴',
    priority: 'high',
    details: {
      duration: '7.5 hours',
      cost: '₹0',
      tip: 'Keep room cool and dark. Post-workout sleep boosts recovery.'
    }
  }
];

export const routineTips = [
  'Sleep is the cheapest performance enhancer. Prioritize 7-8 hours.',
  'Sunlight in the morning is free medicine for your circadian rhythm.',
  'Walk everywhere possible. Aim for 8,000-10,000 steps daily.',
  'Drink water consistently. Carry a reusable bottle.',
  'Eat whole foods (dal, rice, veggies) over processed snacks.',
  'Study in focused blocks. Avoid multitasking.',
  'Connect with friends. Loneliness impacts health as much as smoking.',
  'Limit caffeine after 4 PM to protect sleep.',
  'Use free apps for meditation (Insight Timer, YouTube).',
  'Consistency > Perfection. Dont stress if you miss a day.',
  'Post-workout protein within 45 mins speeds up recovery.'
];

export const budgetHealthHacks = [
  'Find a local budget gym under ₹250/month (ask about student/off-peak rates).',
  'Pay quarterly for discounts: ₹750/3 months often beats monthly pricing.',
  'Eat mess food but prioritize protein (eggs, dal, paneer).',
  'Walk or cycle to the gym instead of using cabs/autos.',
  'Use free meditation resources online.',
  'Drink tap water (filtered) instead of bottled.',
  'Sleep in a cool, dark room (no AC needed, just ventilation).',
  'Bodyweight exercises on rest days keep you consistent for free.',
  'Read books from library instead of buying.',
  'Prep your gym bag the night before to reduce friction.'
];

export const weeklyTargets = {
  sleep: '50+ hours (7+ hours/night)',
  work: '30+ hours (focused deep work)',
  steps: '60,000+ steps (8,500/day)',
  water: '20+ liters (3L/day)',
  exercise: '4 sessions (45+ mins each)',
  sunlight: '7+ hours (1 hour/day)',
  processedSugar: 'Minimal',
  screenTime: '< 4 hours leisure/day'
};