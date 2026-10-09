# Portfolio redesign QA

final result: passed

## Reference and evidence

- Source visual truth: `docs/qa/selected-reference.png`, the third displayed concept selected by the user.
- Implementation: `http://127.0.0.1:5173/`; production build also checked at port 4173.
- Desktop CSS viewport: 1330 × 1182, DPR 1, dark theme, homepage at top.
- Source image: 1330 × 1182. Native browser capture: 1315 × 1169; capture was normalized to reference dimensions for comparison (approximately uniform 1.011 scale). This is a visual comparison, not a pixel-diff assertion.
- Full-view evidence: `docs/qa/comparison-final.jpg` (source and implementation together).
- Focused typography, hero, portrait and CTA evidence: `docs/qa/hero-comparison.jpg`.
- Implementation: `docs/qa/desktop-final.png` and `docs/qa/desktop-light-final.png`.
- Responsive checks: 390 × 844, 820 × 900, 1024 × 900, and 1330 × 1182 CSS viewports. Evidence includes `mobile-dark.png`, `mobile-menu.png`, `mobile-case.png` and `tablet-820-final.png`.

## Findings and comparison history

1. P1: Primary CTA anchor inherited the foreground color over the shadcn token color, reducing contrast on the sage background. Added explicit semantic foreground for default buttons. Verified dark and light screenshots show dark-on-sage and white-on-green respectively.
2. P2: Initial hero height and project-row spacing pushed work lower than the selected reference. Reduced hero padding and project-row height, adjusted column widths, and recaptured the normalized side-by-side comparison.
3. P2: Enlarging the original portrait initially clipped its head at the hero boundary. Corrected its vertical position; final dark and light screenshots show the complete head and an intentional torso crop.
4. P2: Intermediate tablet width allowed the headline to reach the portrait. Added a 761–950px adjustment for headline and portrait scale. Recaptured at 820px; the corrected screenshot shows separation and no horizontal overflow.
5. P2: Lazy-loaded images could shift a case-study anchor after navigation. Added intrinsic dimensions for all raster assets. Rechecked the Design decisions anchor on mobile: its top settled within 60px of the viewport, and the content remained correctly positioned.
6. Development-only hot refresh logged duplicate React root initialization during implementation. Stored the development root in Vite hot data. Fresh production session reported no errors or warnings.

No actionable P0/P1/P2 findings remain in the checked states.

## Required fidelity surfaces

- **Fonts and typography:** locally bundled Inter Variable maintains the reference's restrained sans-serif hierarchy. Display headlines, readable body copy and small uppercase labels were reviewed together in the focused comparison. Mobile titles wrap without clipping.
- **Spacing and layout:** slim header, split hero, sequential image-led project rows and fine dividers follow the selected composition. Mobile becomes a single column; tablet adjustment prevents overlap.
- **Colors and tokens:** charcoal/off-white/sage dark tokens, plus the user-requested light theme with warm white, deep green and muted gray. Semantic button foregrounds corrected and verified. Focus indicators are visible in CSS and the menu/dialog keyboard paths were exercised.
- **Image quality:** original portrait and original project assets replace the concept's illustrative product mockups. Existing coded product visuals were captured for Metric OS, UBA, Grounded and Loop. These are intentional content-fidelity differences, not newly invented project imagery. Image expansion provides an uncropped view; intrinsic dimensions reserve layout space.
- **Copy and content:** selected headline retained. Positioning covers leadership and senior product design. Existing roles and experience are preserved. Project descriptions were condensed from the repository; unsupported numeric claims were not added. All eight project routes remain.

## Interaction and production checks

- Theme toggles in both directions and persists across navigation and reloads.
- Mobile shadcn Sheet opens, exposes navigation and closes after a link selection.
- Password gate rejects an incorrect password with an inline message; correct entry unlocks the session.
- Case-study section navigation and next-project links work.
- Image dialog opens; Escape closes it and returns to the page.
- Copy email reports success; mailto and LinkedIn destinations retained.
- Resume file and every referenced project asset exist in production output.
- All ten production entrypoints load. Eight case studies and About were checked in the browser at mobile width: expected heading, main landmark, no horizontal overflow, no completed broken images.
- Fresh production browser session: zero console errors/warnings.
- `npm run build`, `npm run check` passed.
- Reduced-motion styles, form labels, alt text and skip link are present. This was not a full screen-reader or WCAG conformance audit.

## Follow-up polish and scope

- P3: The source concept's portrait crop differs slightly from the supplied real portrait; identity and responsive composition take priority.
- The original password gate remains client-side presentation behavior, not server authentication.
- No external messages were sent, and no deployment or GitHub push was performed.

## Case study expansion — 2026-10-08
Status: passed for local review.

- All eight case study routes render eleven process chapters and their project-specific reconstruction board.
- Desktop Pattern Library light-theme visual inspection: hierarchy, sidebar, board, caption, and insight blocks readable.
- ShiftSnap dark-theme inspection at 390 × 844: no document overflow; board fits, explanatory text remains readable, tables have contained scrolling.
- Image lightbox opens and closes; section links navigate to their matching anchors; light/dark switching works.
- All eight routes checked for chapter count, board presence, and document overflow. No browser console errors observed.
- Production build and check script pass, including source and built process assets.
- Temporary viewport override reset after testing.
- Evidence: `docs/qa/process-desktop.png`, `docs/qa/process-mobile.png`.
- Content limitation: boards and narratives are reconstructions; validation is proposed, and historical outcome metrics are not asserted as verified.

## IreTV replacement — 2026-10-08
Status: passed for local review.

- IreTV replaces Pattern Library in project and narrative data and selected work. The legacy page redirects to `iretv.html`.
- Eleven chapters render with an evidence panel, five-stage journey, three retrospective wireframe screens, four archived/current product images, and the labeled process board.
- Desktop dark-theme review: hierarchy and three-column schematic study inspected; evidence saved in `docs/qa/iretv-wireframes-desktop.png`.
- Mobile light-theme review at actual 390 × 844 viewport: no document overflow; schematic screens stack into one column. Evidence: `docs/qa/iretv-mobile.png`.
- Process-board lightbox opens/closes; legacy redirect confirmed in browser; no browser console errors observed.
- Build and content/asset checks pass. Viewport override reset.
- Evidence limitations are documented in `docs/iretv-content-sources.md`. No production payment or user research was performed in this task.

## Portfolio language cleanup — 2026-10-08
Status: passed.

Removed the shared About panel and repetitive reconstruction language from all eight case studies. Updated all eight board subtitles to “Design synthesis · Working hypotheses” using image generation and visually inspected each output. Concept wireframes and proposed validation retain concise, accurate labels. Build, asset checks, and source scan pass; IreTV browser inspection confirms the panel is absent and new labels render. Internal source records remain in docs for maintenance.

## Additional product screens — 2026-10-08

Added ten captures of existing repository interface designs and surfaced two additional NAVFlow assets. Verified section placement across all seven non-IreTV projects with no desktop horizontal overflow. UBA payment image dialog opens and closes correctly. Production build and repository checks pass. Visual evidence: `docs/qa/additional-product-screens.png`.

## Enta, Pulse and sticky-note boards — 2026-10-08

Added Enta with Lead Designer attribution and four public product demo captures. Replaced UBA Bank Mobile with Pulse, including four public Test-mode console captures and a redirect from the former UBA route. Both have ten narrative sections, with no outcomes/reflection section. All nine studies now use responsive, text-based sticky-note synthesis boards. Verified desktop layout and 390px mobile layout without page overflow, plus light/dark presentation. Production build and asset/route/content checks pass. Pulse role uses Product design pending confirmation.
