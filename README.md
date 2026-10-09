# Daniel Johnson portfolio

A responsive, multi-page React portfolio built with Vite, Tailwind CSS and official shadcn/ui Button and Sheet components. The dark editorial direction includes an optional light theme, saved locally across pages.

## Local development

```sh
npm ci
npm run dev
```

The development server opens at `http://127.0.0.1:5173`.

## Production

```sh
npm run build
npm run check
npm run preview -- --host 127.0.0.1 --port 4173
```

Deploy the generated **dist/** directory to a static host. The source HTML entrypoints require Vite; do not publish the source folder as a static website. Ten case studies and `about.html` are built. Legacy Pattern Library and UBA URLs redirect to IreTV and Pulse. Relative asset URLs also support hosting under a repository subpath.

## Editing

- `src/projects.json`: project ordering, summaries, roles, case-study narrative and gallery assets.
- `src/main.jsx`: shared header, theme control, mobile menu, homepage, About page, contact, image dialog and case-study views.
- `src/styles.css`: semantic light/dark tokens and responsive page styling.
- `src/components/ui/`: shadcn/ui components installed through its official CLI, with local utility imports.
- `assets/`: original portraits, résumé and project visuals, plus captures of the existing product interfaces.
- `src/image-sizes.json`: intrinsic raster dimensions used to prevent layout shifts. Update when replacing assets.
- `design-qa.md`: visual comparison and interaction verification notes.

## Content and access

The homepage features NAVFlow AI, Enta and Metric OS, with a dedicated Sendory innovation feature and six additional projects including IreTV and Pulse. Each case study has ten chapters through validation and delivery. Responsive sticky-note boards connect user needs, friction points and design responses. Public product demos and local project captures illustrate the interfaces. Research hypotheses and proposed validation remain labeled. Original pages remain available in Git history at `05b862c`.

The existing session-based portfolio password flow is retained. This is a client-side presentation gate, not server-side authorization: its content and password are included in client code. Do not use it to protect confidential material. Real private hosting/authentication is a separate deployment choice.

Vercel builds the site using `vercel.json`. GitHub Pages uses `.github/workflows/deploy.yml` to build, validate and deploy `dist/` on pushes to `main`.
