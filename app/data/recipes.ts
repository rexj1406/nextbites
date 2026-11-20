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
  ingredients: string[];
  steps: string[];
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
    ingredients: [
      "1 ball pizza dough",
      "1/3 cup tomato sauce",
      "4 oz fresh mozzarella, torn",
      "Fresh basil leaves",
      "1 tbsp olive oil",
    ],
    steps: [
      "Heat the oven to 475°F (245°C) with a baking tray inside.",
      "Stretch the dough into a round and spread the tomato sauce over it.",
      "Scatter mozzarella over the sauce and drizzle with olive oil.",
      "Bake for 10–14 minutes, until the crust is golden and the cheese bubbles.",
      "Finish with fresh basil and let it cool for a minute before slicing.",
    ],
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
    ingredients: [
      "1 cup cooked quinoa",
      "1 ripe avocado, sliced",
      "1/2 cup cucumber, chopped",
      "1/2 cup edamame",
      "2 tbsp green goddess dressing",
    ],
    steps: [
      "Add the warm quinoa to a wide serving bowl.",
      "Arrange the avocado, cucumber, and edamame on top.",
      "Spoon over the green goddess dressing.",
      "Toss gently just before eating, adding more dressing if you like.",
    ],
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
    ingredients: [
      "2 packs ramen noodles",
      "4 cups vegetable broth",
      "2 tbsp white miso paste",
      "1 tbsp chili crisp",
      "2 soft-boiled eggs",
      "2 scallions, sliced",
    ],
    steps: [
      "Bring the vegetable broth to a gentle simmer in a saucepan.",
      "Whisk a ladle of warm broth into the miso until smooth, then stir it back in.",
      "Cook the ramen noodles in the broth according to the package directions.",
      "Divide the noodles and broth between two bowls.",
      "Top with halved eggs, chili crisp, and sliced scallions.",
    ],
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
    ingredients: [
      "1 cup all-purpose flour",
      "1 tbsp sugar",
      "1 tsp baking powder",
      "3/4 cup milk",
      "1 egg",
      "1 cup mixed berries",
    ],
    steps: [
      "Whisk the flour, sugar, and baking powder together in a bowl.",
      "In another bowl, whisk the milk and egg, then stir into the dry ingredients.",
      "Warm a lightly buttered pan over medium heat.",
      "Pour in small rounds of batter and cook until bubbles form; flip and cook until golden.",
      "Serve warm with berries and your favorite syrup.",
    ],
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
    ingredients: [
      "1 can chickpeas, drained",
      "1/2 cup fresh parsley",
      "1 garlic clove",
      "1 tsp ground cumin",
      "2 pita breads",
      "2 tbsp tahini sauce",
    ],
    steps: [
      "Pulse the chickpeas, parsley, garlic, and cumin until finely chopped.",
      "Shape the mixture into small, firm patties.",
      "Pan-fry the patties in a little oil for 3–4 minutes per side until crisp.",
      "Warm the pita and fill with falafel and tahini sauce.",
      "Add crunchy vegetables if you have them, then serve straight away.",
    ],
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
    ingredients: [
      "5 oz dark chocolate, chopped",
      "2 eggs, separated",
      "1 tbsp sugar",
      "3/4 cup heavy cream",
      "1/2 tsp vanilla extract",
    ],
    steps: [
      "Melt the chocolate gently, then leave it to cool until just warm.",
      "Whip the cream with the vanilla until soft peaks form.",
      "Whisk the egg yolks into the cooled chocolate.",
      "Beat the egg whites with the sugar until glossy peaks form.",
      "Fold the cream and egg whites into the chocolate, spoon into cups, and chill for at least 2 hours.",
    ],
  },
];

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}
