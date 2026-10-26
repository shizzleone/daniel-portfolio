# Signal BI

## Executive summary

Signal BI is a configurable analytics workspace for teams that need to move from an executive signal to the underlying data without changing tools. I shaped the product direction, interaction model, visual system, and working React prototype around a single canvas that supports KPI tiles, charts, grids, commentary, filters, saved views, and exports.

**Role:** Product design, interaction design, design system, frontend prototyping  
**Platform:** Responsive web application  
**Prototype:** [Open the working Signal BI prototype](./rapidbi-prototype/)

## The problem

Analytics work is often split between a dashboard for the summary, a chart builder for exploration, a grid for detail, and separate tools for sharing or export. That separation makes it harder to preserve context as a user moves from “what changed?” to “why did it change?” and “what should we do next?”

The design goal was to create one workspace where the overview, the controls that shape it, and the data behind it remain connected.

## Discovery and framing

I mapped the jobs the workspace needed to support: scan a page, inspect a metric, configure a view, compare segments, comment on an observation, save a useful state, and share or export the result. I used those jobs to define the information architecture and the component states before composing the canvas.

The key design question became: **how can the interface reveal more analytical depth without making the first view feel like a data-management tool?**

## Design response

- **Composable canvas:** Users can add, arrange, resize, rename, duplicate, and remove widgets while keeping the page structure visible.
- **Progressive configuration:** Data, display, filters, and advanced settings are separated so each decision appears when it is relevant.
- **Charts and grids as peers:** A grid is a first-class analytical view with grouping, pivoting, totals, sorting, and formatting—not an afterthought beneath the chart.
- **Commentary in context:** Rich commentary and mentions let teams explain an observation beside the data that prompted it.
- **Assistant with review:** Suggested canvas changes are presented for review before they are applied, keeping automation legible and reversible.
- **Operational controls:** Saved views, local persistence, PDF/Excel export, themes, density modes, and responsive layouts carry the experience beyond a static dashboard.

## What I delivered

I translated the product model into a working React and TypeScript canvas using Salt foundations, semantic tokens, Highcharts, AG Grid, and reusable component patterns. I also created the workbench structure for foundations, components, screens, and interaction states so the system can be evaluated beyond one composed page.

## Outcome

The result is a runnable prototype that demonstrates the complete analytics loop: scan, configure, explore, explain, save, and export. It includes deterministic demo data and explicit integration seams for authenticated data, AI, data quality, and persistence gateways.

## What I learned

The strongest organizing principle was not the chart type; it was the user’s next analytical decision. When the interface keeps that decision visible, the system can support sophisticated capabilities without forcing every user to understand the underlying implementation first.
