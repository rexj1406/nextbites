export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  category: string;
  description: string;
  color: string;
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian",
    category: "Comfort food",
    description: "Crispy crust, sweet tomato, and a little pool of melty mozzarella.",
    color: "peach",
  },
  {
    id: "green-goddess-bowl",
    title: "Green Goddess Bowl",
    emoji: "🥑",
    minutes: 20,
    difficulty: "Easy",
    cuisine: "California",
    category: "Fresh & light",
    description: "A bright, crunchy bowl with creamy avocado and herby dressing.",
    color: "sage",
  },
  {
    id: "spicy-ramen",
    title: "Spicy Miso Ramen",
    emoji: "🍜",
    minutes: 30,
    difficulty: "Medium",
    cuisine: "Japanese",
    category: "Comfort food",
    description: "A cozy, savory broth with noodles and just the right kick.",
    color: "butter",
  },
  {
    id: "berry-pancakes",
    title: "Berry Cloud Pancakes",
    emoji: "🥞",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "American",
    category: "Something sweet",
    description: "Fluffy weekend pancakes piled high with juicy berries.",
    color: "lilac",
  },
  {
    id: "crispy-falafel",
    title: "Crispy Falafel Pita",
    emoji: "🧆",
    minutes: 40,
    difficulty: "Medium",
    cuisine: "Middle Eastern",
    category: "Fresh & light",
    description: "Golden, herby falafel tucked into warm pita with tahini.",
    color: "mint",
  },
  {
    id: "chocolate-mousse",
    title: "Chocolate Mousse",
    emoji: "🍫",
    minutes: 15,
    difficulty: "Easy",
    cuisine: "French",
    category: "Something sweet",
    description: "Rich, silky chocolate that feels fancy but couldn't be simpler.",
    color: "rose",
  },
];
