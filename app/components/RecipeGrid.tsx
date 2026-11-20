"use client";

import { useState } from "react";
import type { Recipe } from "../data/recipes";
import RecipeCard from "./RecipeCard";

export default function RecipeGrid({ recipes }: { recipes: Recipe[] }) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const visibleRecipes = recipes.filter((recipe) =>
    `${recipe.title} ${recipe.cuisine}`.toLowerCase().includes(normalizedQuery),
  );

  return (
    <div className="recipe-grid-area">
      <div className="recipe-search">
        <label htmlFor="recipe-search">Find a recipe</label>
        <div className="search-input-wrap">
          <span className="search-icon" aria-hidden="true">
            ⌕
          </span>
          <input
            id="recipe-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by recipe or cuisine..."
            autoComplete="off"
          />
        </div>
        <span className="search-result-count" aria-live="polite">
          {visibleRecipes.length}{" "}
          {visibleRecipes.length === 1 ? "recipe" : "recipes"}
        </span>
      </div>

      {visibleRecipes.length === 0 ? (
        <p className="empty-state" role="status">
          No recipes match “{query}”. Try another recipe or cuisine.
        </p>
      ) : (
        <div className="recipe-grid">
          {visibleRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}
