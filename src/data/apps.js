export const apps = [
  {
    id: "trimix",
    slug: "trimix",
    name: "Trimix: 3-Min Workout",
    tagline: "Quick guided workouts. Anytime, anywhere.",
    description:
      "Stay active with 3-minute guided workouts, strength plans, reminders, progress tracking, and supportive coach audio. Designed for real life — no equipment needed.",
    category: "Health & Fitness",
    rating: 4.8,
    downloads: "10K+",
    accent: "#00d4aa",
    icon: "💪",
    screenshots: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=700&fit=crop",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=700&fit=crop",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=700&fit=crop",
    ],
    features: [
      "3-min micro workouts",
      "Strength training plans",
      "Coach audio & reminders",
      "Progress & streak tracking",
      "No equipment needed",
    ],
  },
  {
    id: "streak-fighter",
    slug: "streak-fighter",
    name: "Streak Fighter: Habit Tracker",
    tagline: "Build habits. Fight for your streak. Level up your life.",
    description:
      "Streak Fighter turns daily habit tracking into an epic RPG journey. Build habits, maintain your streak, earn XP, level up your character, and unlock trophies. Fight to keep your streak alive and become the best version of yourself.",
    category: "Lifestyle",
    rating: 0,
    downloads: "New",
    accent: "#ff4757",
    icon: "⚔️",
    screenshots: [],
    features: [
      "Daily habit tracking with streak system",
      "RPG-style progression: XP, levels & ranks",
      "Strength, focus, discipline & energy stats",
      "Unlock titles, skins & trophies",
      "Google Sign-In for cross-device sync",
      "Offline support with auto-sync",
      "Habit schedules & smart reminders",
    ],
  },
];

export function getAppBySlug(slug) {
  return apps.find((app) => app.slug === slug);
}
