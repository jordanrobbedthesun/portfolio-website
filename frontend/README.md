This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

<!-- ESP32 feature removed due to hosting restrictions -->

## Images: easy add/change workflow

You can add images in two ways:

1) Explicit list in data files (simple):
- Edit `app/data/recipes.ts` and provide the `images` array for a recipe.

2) Drop-in folder (no code edits):
- Create a folder under `public/images/recipes/<your-folder>` and drop your images there (jpg, jpeg, png, webp, gif).
- In `app/data/recipes.ts`, set `imagesDir: "/images/recipes/<your-folder>"` for that recipe and omit the `images` array.
- The app will auto-list files in that folder at runtime (server-side) and render them only when the recipe is expanded.

Projects and Involvements can also load images from folders without code changes:

- Put images under `public/projects/<project-id>/` or `public/involvements/<slug>/`.
- In the data object, set `imagesDir: "/projects/<project-id>"` (or `/involvements/<slug>`). If `images` is omitted, the UI will fetch `/api/images?dir=...` at runtime to list files.

Notes:
- Recipes page resolves images server-side (no network roundtrip) if you use `imagesDir` there.
- Home page sections fetch via `/api/images` when you expand an item or open the demo modal; that keeps initial load light.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
