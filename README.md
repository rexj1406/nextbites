# NextBites

A small recipe discovery app built with Next.js, React, and TypeScript.

## Run locally

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the home page.

## Project structure

- `app/data/recipes.ts` contains the typed recipe data.
- `app/components/RecipeCard.tsx` renders a reusable recipe card.
- `app/components/NavBar.tsx` provides shared site navigation.
- `app/page.tsx` maps the recipes into a responsive grid.
- `app/layout.tsx` wraps each page with the shared navigation.
