import Link from "next/link";
import { notFound } from "next/navigation";
import { getRecipe, recipes } from "../../data/recipes";

export function generateStaticParams() {
  return recipes.map((recipe) => ({ id: recipe.id }));
}

export const dynamicParams = false;

export default async function RecipePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = getRecipe(id);

  if (!recipe) {
    notFound();
  }

  return (
    <main className="detail-shell">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{recipe.title}</span>
      </nav>

      <section className="detail-hero" aria-labelledby="recipe-title">
        <div
          className={`detail-art recipe-art-${recipe.color}`}
          role="img"
          aria-label={`${recipe.title} illustration`}
        >
          <span className="detail-category">{recipe.category}</span>
          <span className="detail-emoji" aria-hidden="true">
            {recipe.emoji}
          </span>
          <span className="detail-art-caption" aria-hidden="true">
            GOOD FOOD, GOOD MOOD
          </span>
        </div>
        <div className="detail-intro">
          <Link className="back-link" href="/#recipes">
            <span aria-hidden="true">←</span> All recipes
          </Link>
          <p className="eyebrow">{recipe.cuisine} kitchen</p>
          <h1 id="recipe-title">{recipe.title}</h1>
          <p className="detail-description">{recipe.description}</p>
          <div className="detail-meta">
            <div>
              <span>TIME</span>
              <strong>{recipe.minutes} min</strong>
            </div>
            <div>
              <span>DIFFICULTY</span>
              <strong>{recipe.difficulty}</strong>
            </div>
            <div>
              <span>CUISINE</span>
              <strong>{recipe.cuisine}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="detail-content" aria-label={`${recipe.title} recipe`}>
        <div className="ingredients-panel">
          <p className="eyebrow">GET YOUR INGREDIENTS</p>
          <h2>What you&apos;ll need</h2>
          <ul className="ingredients-list">
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>
                <span aria-hidden="true">✓</span>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        <div className="steps-panel">
          <p className="eyebrow">THE FUN PART</p>
          <h2>Let&apos;s make it.</h2>
          <ol className="steps-list">
            {recipe.steps.map((step, index) => (
              <li key={step}>
                <span className="step-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="detail-footer-link">
        <Link className="hero-button" href="/#recipes">
          Find another bite <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </main>
  );
}
