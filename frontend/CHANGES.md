Frontend image and performance changes

- Replaced raw <img> tags with Next.js Image in:
  - app/recipes/page.tsx (responsive images, fill, sizes)
  - app/components/InvolvementSection.tsx (grid thumbnails using fill)
- Left Sidebar and Projects modal using next/image untouched (already using Image).
- Ensured images reference local `public/` paths (e.g. `/images/...`).
- Ran `next build` and `next lint`; build completed successfully.

Notes & next steps
- If you use external image hosts, add them to `next.config.ts` images.domains.
- Consider adding blurred placeholders or AVIF/webp source images for better LCP.
- Monitor service worker caching (next-pwa) to ensure updated assets get fetched when deploying.
