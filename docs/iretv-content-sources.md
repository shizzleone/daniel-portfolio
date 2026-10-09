# IreTV case study — source record

Prepared October 8, 2026 from the saved `Christian Streaming App` project. The source application was inspected and run from its existing production build; no source changes were made there.

## Materials used

- `docs/christian-streaming-ia.md`: product lifecycle, discovery taxonomy, rental and library models, content guidance, and state requirements.
- `docs/design-system-usage.md`: existing component/token reuse and composition contract.
- `README.md`: account/library behavior and older scope description. Its payment status is superseded by the newer first-film launch checklist.
- `docs/maria-launch.md`: documented controlled rental and playback milestone, explicit remaining launch checks. No new payment, refund, or production account operation was performed for this portfolio.
- `src/components/catalog-app.tsx`: current media architecture and signed-out navigation boundary.
- First-film checkout, playback, and webhook route presence checked in the source tree.
- `audits/online-movie-catalog-flow/final/01-home-updated.png`, `05-detail-modal.png`, and `10-library.png`: earlier prototype iterations, copied unchanged. Captions identify inherited Mighty Arrow branding and sample data.
- Local browser captures: IreTV welcome and The Travails of Maria film page, saved under `assets/iretv/`.

## New presentation artifacts

- `assets/process/iretv-board.png`: generated retrospective synthesis, labeled on the image. It is not a native FigJam export or a historical workshop record.
- `IreTVWireframes` in `src/main.jsx`: code-native, responsive schematic study created for the case study. Labeled as retrospective.
- `src/case-studies.json`: project-specific narrative, including evidence boundaries, role-based hypotheses, journey, strategy, tradeoffs, evaluation plan, and reflection.

No interview quotes, research sample sizes, customer performance figures, or business-impact metrics were invented. The documented launch check is attributed to project records. The separate `iretv-broadcast` project was located but is not represented as an integrated viewer capability in this case study.

## Replacement behavior

IreTV occupies the third selected-work position. Pattern Library is removed from project and narrative data. Its old HTML route is retained solely as a redirect to IreTV so previous links remain useful. Existing source assets are retained for recoverability.
