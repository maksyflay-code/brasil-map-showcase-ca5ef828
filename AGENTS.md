<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Service images use the shared ServicePhotos component with Embla Carousel for horizontal dragging and a fixed-size media area so changing photos never changes section dimensions.
- Contact address values live in a shared data module with a focused regression test so the displayed address remains consistent.

## Static hosting build (cPanel/FTP)
- The router uses `trailingSlash: "always"` (src/router.tsx) and `vite.config.ts` prerenders `/`, `/atuacao/`, `/crea/`, `/regularidade/`, `/lgpd/` into `dist/client` — `npm run build` produces a fully static site that works on plain Apache/cPanel hosting without Node.
- All photos are plain bundled files in `src/assets` (e.g. `projetaj-logo.webp`); imports must never reference `*.asset.json` or Lovable hosted asset URLs (`/__l5e/...`), which break on external hosting. Why: the site must build as a portable static bundle.
