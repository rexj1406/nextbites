import Link from "next/link";
import RecipeGrid from "./components/RecipeGrid";
import { recipes } from "./data/recipes";

export default function Home() {
  return (
    <>
      <main className="page-shell">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot" /> GOOD FOOD, GOOD MOOD
            </p>
            <h1 id="hero-title">
              Find your
              <br />
              next <span className="title-highlight">bite.</span>
            </h1>
            <p className="hero-description">
              A little inspiration for whatever you&apos;re craving. Simple
              recipes, big feel-good energy.
            </p>
            <a className="hero-button" href="#recipes">
              Explore recipes <span aria-hidden="true">↓</span>
            </a>
            <div className="hero-note">
              <span className="avatar-stack" aria-hidden="true">
                <span>👩🏽‍🍳</span>
                <span>🧑🏻‍🍳</span>
                <span>👨🏾‍🍳</span>
              </span>
              <span>
                <strong>Made for real life</strong>
                <br />
                Tested, tasted, loved.
              </span>
            </div>
          </div>
          <div
            className="hero-art"
            role="img"
            aria-label="Illustration of a bowl of noodles"
          >
            <div className="hero-sun" />
            <span className="hero-sparkle sparkle-one" aria-hidden="true">
              ✳
            </span>
            <span className="hero-sparkle sparkle-two" aria-hidden="true">
              ✦
            </span>
            <div className="hero-food" aria-hidden="true">
              🍜
            </div>
            <div className="hero-sticker">
              <span>little</span>
              <strong>joys</strong>
              <span>on a plate</span>
            </div>
            <span className="hero-caption">YOUR NEXT COMFORT MEAL</span>
          </div>
        </section>

        <section
          className="recipes-section"
          id="recipes"
          aria-labelledby="recipes-title"
        >
          <div className="section-topline">
            <p className="eyebrow">A FEW GOOD THINGS</p>
            <span className="recipe-count">
              {String(recipes.length).padStart(2, "0")} RECIPES
            </span>
          </div>
          <div className="section-heading">
            <div>
              <h2 id="recipes-title">A little bit of everything.</h2>
              <p>Pick a mood. We&apos;ve got something good.</p>
            </div>
            <a className="text-link" href="#recipes">
              See all recipes <span aria-hidden="true">↗</span>
            </a>
          </div>
          <RecipeGrid recipes={recipes} />
        </section>
      </main>
      <footer className="site-footer" id="about">
        <Link className="brand footer-brand" href="/">
          <span className="brand-mark" aria-hidden="true">
            n
          </span>
          <span>nextbites</span>
        </Link>
        <p>Good food is always a good idea.</p>
        <span>© 2025 NextBites</span>
      </footer>
    </>
  );
}
