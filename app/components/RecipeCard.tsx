import type { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <article className="recipe-card">
      <div className={`recipe-art recipe-art-${recipe.color}`}>
        <span className="recipe-category">{recipe.category}</span>
        <span className="recipe-emoji" role="img" aria-label={recipe.title}>
          {recipe.emoji}
        </span>
        <span className="save-mark" aria-hidden="true">
          +
        </span>
      </div>
      <div className="recipe-content">
        <div className="recipe-heading">
          <h3>{recipe.title}</h3>
          <span className="recipe-rating" aria-label="Rated 4.9 out of 5">
            ★ <span>4.9</span>
          </span>
        </div>
        <p className="recipe-description">{recipe.description}</p>
        <div className="recipe-meta">
          <span>◷ {recipe.minutes} min</span>
          <span>{recipe.difficulty}</span>
          <span>{recipe.cuisine}</span>
        </div>
      </div>
    </article>
  );
}
