export const games = [
  {
    id: 1,
    slug: "sort-garbage",
    title: "Sort Garbage",
    tagline: "The Ultimate Recycling Adventure",
    description:
      "Teaches kids and families the importance of recycling. Sort trash into colorful bins and become a recycling hero! Features Magnet Power, Speed Boost, Auto-Sort, and Score Multiplier.",
    downloads: "0+",
    rating: 0,
    reviews: 0,
    image:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop&q=80",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.boyinfuture.sortgarbage",
    category: "Puzzle",
    accent: "#00d4aa",
  },
  {
    id: 2,
    slug: "cricket-destruction",
    title: "Cricket Destruction",
    tagline: "Smash Your Way to Victory",
    description:
      "Ultimate cricket action with powerful hits and explosive gameplay. Destroy obstacles, score massive runs, and dominate the cricket field with spectacular shots.",
    downloads: "100+",
    rating: 0,
    reviews: 0,
    image:
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&h=600&fit=crop&q=80",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.boyinfuture.cricketdestruction",
    category: "Sports",
    accent: "#ff6b35",
  },
  {
    id: 3,
    slug: "zombie-alien-space-adventure",
    title: "Zombie Alien: Space Adventure",
    tagline: "Run Through the Galaxy",
    description:
      "Run through space across interesting levels. Avoid dangerous weapons and obstacles. Features dynamic platforms, various planets, and three knockback lives. No annoying ads!",
    downloads: "5,000+",
    rating: 4.6,
    reviews: 45,
    image:
      "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800&h=600&fit=crop&q=80",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.boyinfuture.ZombieAlienSpaceAdventure",
    category: "Action",
    accent: "#9c27b0",
  },
  {
    id: 4,
    slug: "auto-express-highway-heist",
    title: "Auto Express: Highway Heist",
    tagline: "Survive the Dangerous Highway",
    description:
      "Fast-paced action through dangerous highways with deadly traps and powerful enemies. Indian-themed environments with relentless obstacles and unique challenges.",
    downloads: "50+",
    rating: 0,
    reviews: 0,
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop&q=80",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.boyinfuture.autoexpress",
    category: "Racing",
    accent: "#f5c542",
  },
];

export function getGameBySlug(slug) {
  return games.find((game) => game.slug === slug);
}