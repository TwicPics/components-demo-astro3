import { Category, type Planet } from "../types";

export const planets: Planet[] = [
  {
    category: Category.Telluric,
    cover: "astro/mercury.jpg",
    name: "Mercury",
    subtitle: "The swiftest planet.",
    slug: "1",
  },
  {
    category: Category.Telluric,
    cover: "astro/venus.jpg",
    name: "Venus",
    subtitle: "Earth's superheated twin sister.",
    slug: "2",
  },
  {
    category: Category.Telluric,
    cover: "astro/earth.jpg",
    name: "Earth",
    subtitle: "Home",
    slug: "3",
  },
  {
    category: Category.Telluric,
    cover: "astro/mars.jpg",
    name: "Mars",
    subtitle: "The Red Planet",
    slug: "4",
  },
  {
    category: Category.Gaseous,
    cover: "astro/jupiter.jpg",
    name: "Jupiter",
    subtitle: "King of the planets.",
    slug: "5",
  },
  {
    category: Category.Gaseous,
    cover: "astro/saturn.jpg",
    name: "Saturn",
    subtitle: "Jewel of solar system.",
    slug: "6",
  },
  {
    category: Category.Gaseous,
    cover: "astro/uranus.jpg",
    name: "Uranus",
    subtitle: "The original ice giant.",
    slug: "7",
  },
  {
    category: Category.Gaseous,
    cover: "astro/neptune.jpg",
    name: "Neptune",
    subtitle: "The farthest planet.",
    slug: "8",
  },
];
