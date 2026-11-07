import pptxgen from 'pptxgenjs';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const pres = new pptxgen();

// 16:9 widescreen layout (10 x 5.625 inches)
pres.layout = 'LAYOUT_16x9';
pres.author = 'Daniel Johnson';
pres.company = 'Product Design Leadership';
pres.title = 'Daniel Johnson — Featured Work Walkthrough & Strategic Case Studies';
pres.subject = 'Staff / Lead Product Designer Portfolio Presentation';

// Color Palette
const COLORS = {
  bg: '0B0F17',          // Obsidian dark background
  cardBg: '131B2B',      // Elevated surface
  cardBorder: '24334B',  // Subtle border
  accentMint: '10B981',  // Emerald / Mint
  accentLime: 'B6F256',  // High-contrast Lime
  accentLilac: 'A78BFA', // Violet / Lilac
  accentBlue: '38BDF8',  // Sky Blue
  accentAmber: 'F59E0B', // Amber
  textPrimary: 'F8FAFC', // Crisp white
  textSecondary: '94A3B8', // Muted slate
  textDim: '64748B',     // Dim slate
  white: 'FFFFFF',
};

const FONT_HEAD = 'Arial';
const FONT_BODY = 'Calibri';

// Helper: Add consistent slide header
function addSlideHeader(slide, category, title, subtitle) {
  // Category Pill
  slide.addText(category.toUpperCase(), {
    x: 0.8,
    y: 0.45,
    w: 3.5,
    h: 0.3,
    fontSize: 9,
    fontFace: FONT_HEAD,
    bold: true,
    color: COLORS.accentLime,
    charSpacing: 1.5,
  });

  // Title
  slide.addText(title, {
    x: 0.8,
    y: 0.72,
    w: 8.5,
    h: 0.45,
    fontSize: 20,
    fontFace: FONT_HEAD,
    bold: true,
    color: COLORS.textPrimary,
  });

  // Subtitle
  if (subtitle) {
    slide.addText(subtitle, {
      x: 0.8,
      y: 1.15,
      w: 8.5,
      h: 0.3,
      fontSize: 11,
      fontFace: FONT_BODY,
      color: COLORS.textSecondary,
    });
  }

  // Top-right subtle page watermark
  slide.addText('DANIEL JOHNSON · PORTFOLIO WALKTHROUGH', {
    x: 6.5,
    y: 0.45,
    w: 2.7,
    h: 0.3,
    fontSize: 8,
    fontFace: FONT_HEAD,
    align: 'right',
    color: COLORS.textDim,
  });
}

// ==========================================
// SLIDE 1: Title & Executive Positioning
// ==========================================
{
  const slide = pres.addSlide();
  slide.background = { color: COLORS.bg };

  // Decorative glow line
  slide.addShape(pres.ShapeType.rect, {
    x: 0.8,
    y: 1.3,
    w: 0.6,
    h: 0.06,
    fill: { color: COLORS.accentLime },
    line: { color: COLORS.accentLime, width: 0 },
  });

  slide.addText('PORTFOLIO WALKTHROUGH · 2024–2026', {
    x: 0.8,
    y: 1.5,
    w: 6.0,
    h: 0.3,
    fontSize: 10,
    fontFace: FONT_HEAD,
    bold: true,
    color: COLORS.accentLime,
    charSpacing: 2,
  });

  slide.addText('Daniel Johnson', {
    x: 0.8,
    y: 1.85,
    w: 7.5,
    h: 0.9,
    fontSize: 38,
    fontFace: FONT_HEAD,
    bold: true,
    color: COLORS.textPrimary,
  });

  slide.addText('Staff / Lead Product Designer & Design Strategist', {
    x: 0.8,
    y: 2.75,
    w: 7.5,
    h: 0.45,
    fontSize: 16,
    fontFace: FONT_BODY,
    color: COLORS.accentMint,
  });

  slide.addText(
    'Specializing in complex SaaS, data-dense fintech systems, developer platforms, and multi-platform design architectures with measurable business impact.',
    {
      x: 0.8,
      y: 3.25,
      w: 6.5,
      h: 0.7,
      fontSize: 12,
      fontFace: FONT_BODY,
      color: COLORS.textSecondary,
      lineSpacingMultiple: 1.2,
    }
  );

  // Bottom 4 Pillar Badges
  const pillars = [
    { label: 'Fintech & Wealth', sub: 'Pennwise' },
    { label: 'Autonomous AI', sub: 'NAVFlow AI' },
    { label: 'Productivity', sub: 'SimpleList' },
    { label: 'Mobility & IoT', sub: 'Motive' },
  ];

  pillars.forEach((p, idx) => {
    const xPos = 0.8 + idx * 2.15;
    slide.addShape(pres.ShapeType.roundRect, {
      x: xPos,
      y: 4.3,
      w: 2.0,
      h: 0.75,
      rectRadius: 0.08,
      fill: { color: COLORS.cardBg },
      line: { color: COLORS.cardBorder, width: 1 },
    });

    slide.addText(p.label, {
      x: xPos + 0.15,
      y: 4.4,
      w: 1.7,
      h: 0.25,
      fontSize: 10,
      fontFace: FONT_HEAD,
      bold: true,
      color: COLORS.textPrimary,
    });

    slide.addText(p.sub, {
      x: xPos + 0.15,
      y: 4.65,
      w: 1.7,
      h: 0.25,
      fontSize: 9,
      fontFace: FONT_BODY,
      color: COLORS.textDim,
    });
  });

  // Portrait image if available
  const portraitPath = path.join(projectRoot, 'public/assets/daniel-johnson-cutout.png');
  if (fs.existsSync(portraitPath)) {
    slide.addImage({
      path: portraitPath,
      x: 7.2,
      y: 1.2,
      w: 2.3,
      h: 3.8,
      sizing: { type: 'contain', w: 2.3, h: 3.8 },
    });
  }

  slide.addNotes(
    `TALKING POINTS (SLIDE 1 - 90 SECONDS):
• "Hi everyone, thank you for having me today. I'm Daniel Johnson, a Lead / Staff Product Designer with over a decade of experience designing and scaling high-complexity digital products."
• "Today I'm walking you through a curated selection of my featured work, highlighting how I approach product discovery, systems thinking, cross-functional engineering alignment, and quantifiable business outcomes."
• "I balance deep UX research rigor with high-craft execution — from 0-to-1 zero-trust AI platforms to multi-tenant fintech portals and consumer productivity tools."
• "Let's dive into the core framework that guides my design leadership."`
  );
}

// ==========================================
// SLIDE 2: Leadership Framework & 4 Pillars
// ==========================================
{
  const slide = pres.addSlide();
  slide.background = { color: COLORS.bg };

  addSlideHeader(
    slide,
    'Design Leadership Operating Model',
    'The 4 Pillars of Product Design Excellence',
    'How I bridge user needs, engineering feasibility, and business growth'
  );

  const pillars = [
    {
      num: '01',
      title: 'Product & UX Strategy',
      badge: 'DISCOVERY TO IMPACT',
      color: COLORS.accentLime,
      points: [
        'Root-cause problem framing through customer inquiry',
        'Direct alignment with business revenue & retention KPIs',
        'De-risking technical complexity before writing code',
      ],
    },
    {
      num: '02',
      title: 'Design × Eng Systems',
      badge: 'SCALE & ACCESSIBILITY',
      color: COLORS.accentMint,
      points: [
        'Tokenized, cross-platform design architectures',
        'WCAG AAA accessible contrast & keyboard navigation',
        'Zero-drift Storybook and Figma sync workflows',
      ],
    },
    {
      num: '03',
      title: 'Interaction & Clarity',
      badge: 'FRICTION ELIMINATION',
      color: COLORS.accentLilac,
      points: [
        'Cognitive load reduction across data-dense views',
        'Stateful micro-interactions with immediate feedback',
        'Plain-language IA that replaces internal jargon',
      ],
    },
    {
      num: '04',
      title: 'Prototyping & Delivery',
      badge: 'HIGH-VELOCITY CRAFT',
      color: COLORS.accentBlue,
      points: [
        'Functional interactive prototypes for rapid validation',
        'Tight pair-designing with frontend engineers',
        'Post-launch quantitative instrumentation & telemetry',
      ],
    },
  ];

  pillars.forEach((p, idx) => {
    const xPos = 0.8 + idx * 2.15;
    const yPos = 1.6;

    // Card background
    slide.addShape(pres.ShapeType.roundRect, {
      x: xPos,
      y: yPos,
      w: 2.05,
      h: 3.4,
      rectRadius: 0.1,
      fill: { color: COLORS.cardBg },
      line: { color: COLORS.cardBorder, width: 1 },
    });

    // Accent header pill
    slide.addShape(pres.ShapeType.roundRect, {
      x: xPos + 0.15,
      y: yPos + 0.15,
      w: 0.45,
      h: 0.28,
      rectRadius: 0.06,
      fill: { color: p.color },
      line: { color: p.color, width: 0 },
    });

    slide.addText(p.num, {
      x: xPos + 0.15,
      y: yPos + 0.17,
      w: 0.45,
      h: 0.25,
      fontSize: 10,
      fontFace: FONT_HEAD,
      bold: true,
      color: '000000',
      align: 'center',
    });

    slide.addText(p.badge, {
      x: xPos + 0.65,
      y: yPos + 0.18,
      w: 1.25,
      h: 0.25,
      fontSize: 7.5,
      fontFace: FONT_HEAD,
      bold: true,
      color: p.color,
    });

    // Title
    slide.addText(p.title, {
      x: xPos + 0.15,
      y: yPos + 0.55,
      w: 1.75,
      h: 0.55,
      fontSize: 13,
      fontFace: FONT_HEAD,
      bold: true,
      color: COLORS.textPrimary,
    });

    // Divider
    slide.addShape(pres.ShapeType.rect, {
      x: xPos + 0.15,
      y: yPos + 1.15,
      w: 1.75,
      h: 0.02,
      fill: { color: COLORS.cardBorder },
      line: { color: COLORS.cardBorder, width: 0 },
    });

    // Bullet points
    const bulletText = p.points.map((pt) => `• ${pt}`).join('\n\n');
    slide.addText(bulletText, {
      x: xPos + 0.15,
      y: yPos + 1.25,
      w: 1.75,
      h: 2.0,
      fontSize: 9.5,
      fontFace: FONT_BODY,
      color: COLORS.textSecondary,
      lineSpacingMultiple: 1.15,
    });
  });

  slide.addNotes(
    `TALKING POINTS (SLIDE 2 - 2 MINUTES):
• "Great design isn't just about beautiful Figma screens; it's an operating system for how teams solve problems."
• "My leadership rests on four core pillars:
  1. Product & UX Strategy: Grounding every feature in customer problem severity and business revenue goals.
  2. Systems Thinking: Creating bulletproof design tokens and component kits that eliminate handoff friction and scale to hundreds of engineers.
  3. Content & Interaction Clarity: Ruthlessly stripping away internal jargon and cognitive clutter so users accomplish tasks intuitively.
  4. Rapid Delivery & Code Realism: Building interactive prototypes to validate with real users before writing engineering tickets."
• "Next, let's look at how this methodology played out across my flagship projects."`
  );
}

// ==========================================
// SLIDE 3: Pennwise (Fintech / Wealth)
// ==========================================
{
  const slide = pres.addSlide();
  slide.background = { color: COLORS.bg };

  addSlideHeader(
    slide,
    'Flagship 01 · Wealth Management & Fintech',
    'Pennwise · 4-Pillar Financial Compass & Wealth Simulator',
    'Transforming fragmented personal balance sheets into actionable, stress-free projections'
  );

  // Left Content Column
  const leftX = 0.8;
  const colW = 4.2;

  // Challenge Box
  slide.addShape(pres.ShapeType.roundRect, {
    x: leftX,
    y: 1.6,
    w: colW,
    h: 1.05,
    rectRadius: 0.08,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.cardBorder, width: 1 },
  });

  slide.addText('THE CORE CHALLENGE', {
    x: leftX + 0.2,
    y: 1.7,
    w: colW - 0.4,
    h: 0.2,
    fontSize: 8.5,
    fontFace: FONT_HEAD,
    bold: true,
    color: COLORS.accentLime,
  });

  slide.addText(
    'Users suffered from "financial paralysis" across 5+ disconnected bank, brokerage, and crypto accounts with zero visibility into long-term compounding solvency.',
    {
      x: leftX + 0.2,
      y: 1.95,
      w: colW - 0.4,
      h: 0.6,
      fontSize: 9.5,
      fontFace: FONT_BODY,
      color: COLORS.textSecondary,
      lineSpacingMultiple: 1.15,
    }
  );

  // Solution Box
  slide.addShape(pres.ShapeType.roundRect, {
    x: leftX,
    y: 2.75,
    w: colW,
    h: 1.45,
    rectRadius: 0.08,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.cardBorder, width: 1 },
  });

  slide.addText('STRATEGIC UX INTERVENTIONS', {
    x: leftX + 0.2,
    y: 2.85,
    w: colW - 0.4,
    h: 0.2,
    fontSize: 8.5,
    fontFace: FONT_HEAD,
    bold: true,
    color: COLORS.accentMint,
  });

  const solPoints = [
    '4-Pillar Financial Compass (Liquid, Growth, Defense, Tax-Shield)',
    '2036 What-If Scenario Simulator with real-time Monte Carlo curves',
    'Zero-anxiety micro-actions replacing high-stress percentage charts',
  ];
  slide.addText(solPoints.map((s) => `• ${s}`).join('\n'), {
    x: leftX + 0.2,
    y: 3.1,
    w: colW - 0.4,
    h: 0.95,
    fontSize: 9.5,
    fontFace: FONT_BODY,
    color: COLORS.textSecondary,
    lineSpacingMultiple: 1.2,
  });

  // Metrics Bar
  const metrics = [
    { num: '+38%', lbl: '30-Day Retention' },
    { num: '4.8/5', lbl: 'Confidence Score' },
    { num: '<90s', lbl: 'Net Worth Sync' },
  ];
  metrics.forEach((m, idx) => {
    const mX = leftX + idx * 1.43;
    slide.addShape(pres.ShapeType.roundRect, {
      x: mX,
      y: 4.3,
      w: 1.35,
      h: 0.75,
      rectRadius: 0.06,
      fill: { color: '0E241B' },
      line: { color: '059669', width: 1 },
    });
    slide.addText(m.num, {
      x: mX,
      y: 4.38,
      w: 1.35,
      h: 0.35,
      fontSize: 14,
      fontFace: FONT_HEAD,
      bold: true,
      color: COLORS.accentMint,
      align: 'center',
    });
    slide.addText(m.lbl, {
      x: mX,
      y: 4.75,
      w: 1.35,
      h: 0.25,
      fontSize: 8,
      fontFace: FONT_BODY,
      color: COLORS.textSecondary,
      align: 'center',
    });
  });

  // Right Visual Column (Screenshots)
  const rightX = 5.3;
  const rightW = 4.0;
  const pImg1 = path.join(projectRoot, 'public/assets/pennwise/hero-cover.png');
  const pImg2 = path.join(projectRoot, 'public/assets/pennwise/dashboard-compass.png');

  if (fs.existsSync(pImg1)) {
    slide.addImage({
      path: pImg1,
      x: rightX,
      y: 1.6,
      w: rightW,
      h: 1.6,
      sizing: { type: 'contain', w: rightW, h: 1.6 },
    });
  }
  if (fs.existsSync(pImg2)) {
    slide.addImage({
      path: pImg2,
      x: rightX,
      y: 3.3,
      w: rightW,
      h: 1.75,
      sizing: { type: 'contain', w: rightW, h: 1.75 },
    });
  }

  slide.addNotes(
    `TALKING POINTS (SLIDE 3 - PENNWISE - 2.5 MINUTES):
• "In Pennwise, we tackled one of the biggest friction points in consumer fintech: financial anxiety caused by fragmented account dashboards."
• "Instead of confronting users with overwhelming tables of red and green stock tickers, I designed the '4-Pillar Financial Compass' which categorizes capital into Liquid, Growth, Defense, and Tax-Shield buckets."
• "The defining innovation is the 2036 What-If Scenario Simulator: users can drag life milestones (e.g. buying a house, taking sabbatical) and see real-time Monte Carlo probability curves update in milliseconds."
• "Result: +38% increase in 30-day retention and a 4.8 out of 5 confidence score in post-onboarding user surveys."
• "Figma Source Link for Recruiters: https://www.figma.com/design/NZbmIQrN9GMHgTasujs7Xv/Pennwise-%E2%80%94-Personal-Finance-App (Inspect component variants, 16 modules, and semantic token sets)."`
  );
}

// ==========================================
// SLIDE 4: NAVFlow AI (Autonomous Ops)
// ==========================================
{
  const slide = pres.addSlide();
  slide.background = { color: COLORS.bg };

  addSlideHeader(
    slide,
    'Flagship 02 · Enterprise AI & Autonomous Systems',
    'NAVFlow AI · Autonomous Workflow Orchestration Engine',
    'Creating transparency, human-in-the-loop validation, and cost telemetry for enterprise AI agents'
  );

  const leftX = 0.8;
  const colW = 4.2;

  slide.addShape(pres.ShapeType.roundRect, {
    x: leftX,
    y: 1.6,
    w: colW,
    h: 1.05,
    rectRadius: 0.08,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.cardBorder, width: 1 },
  });

  slide.addText('THE CORE CHALLENGE', {
    x: leftX + 0.2,
    y: 1.7,
    w: colW - 0.4,
    h: 0.2,
    fontSize: 8.5,
    fontFace: FONT_HEAD,
    bold: true,
    color: COLORS.accentLime,
  });

  slide.addText(
    'Autonomous AI pipelines act as "black boxes." Engineering leaders lacked visibility into reasoning loops, hallucination failure modes, and ballooning API token costs.',
    {
      x: leftX + 0.2,
      y: 1.95,
      w: colW - 0.4,
      h: 0.6,
      fontSize: 9.5,
      fontFace: FONT_BODY,
      color: COLORS.textSecondary,
      lineSpacingMultiple: 1.15,
    }
  );

  slide.addShape(pres.ShapeType.roundRect, {
    x: leftX,
    y: 2.75,
    w: colW,
    h: 1.45,
    rectRadius: 0.08,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.cardBorder, width: 1 },
  });

  slide.addText('STRATEGIC UX INTERVENTIONS', {
    x: leftX + 0.2,
    y: 2.85,
    w: colW - 0.4,
    h: 0.2,
    fontSize: 8.5,
    fontFace: FONT_HEAD,
    bold: true,
    color: COLORS.accentMint,
  });

  const solPoints = [
    'Interactive DAG pipeline canvas showing node status in real-time',
    'Human-in-the-loop review tollgates with one-click diff approvals',
    'Token consumption and latency attribution breakdown per step',
  ];
  slide.addText(solPoints.map((s) => `• ${s}`).join('\n'), {
    x: leftX + 0.2,
    y: 3.1,
    w: colW - 0.4,
    h: 0.95,
    fontSize: 9.5,
    fontFace: FONT_BODY,
    color: COLORS.textSecondary,
    lineSpacingMultiple: 1.2,
  });

  const metrics = [
    { num: '62%', lbl: 'Fewer Failures' },
    { num: '3.4x', lbl: 'Faster Triage' },
    { num: '$42k', lbl: 'Token Spend Saved' },
  ];
  metrics.forEach((m, idx) => {
    const mX = leftX + idx * 1.43;
    slide.addShape(pres.ShapeType.roundRect, {
      x: mX,
      y: 4.3,
      w: 1.35,
      h: 0.75,
      rectRadius: 0.06,
      fill: { color: '1E1B4B' },
      line: { color: '6366F1', width: 1 },
    });
    slide.addText(m.num, {
      x: mX,
      y: 4.38,
      w: 1.35,
      h: 0.35,
      fontSize: 14,
      fontFace: FONT_HEAD,
      bold: true,
      color: COLORS.accentLilac,
      align: 'center',
    });
    slide.addText(m.lbl, {
      x: mX,
      y: 4.75,
      w: 1.35,
      h: 0.25,
      fontSize: 8,
      fontFace: FONT_BODY,
      color: COLORS.textSecondary,
      align: 'center',
    });
  });

  // Right Visual
  const rightX = 5.3;
  const rightW = 4.0;
  const nImg = path.join(projectRoot, 'public/assets/navflow/executive-dashboard-wide.png');
  if (fs.existsSync(nImg)) {
    slide.addImage({
      path: nImg,
      x: rightX,
      y: 1.6,
      w: rightW,
      h: 3.45,
      sizing: { type: 'contain', w: rightW, h: 3.45 },
    });
  }

  slide.addNotes(
    `TALKING POINTS (SLIDE 4 - NAVFLOW AI - 2.5 MINUTES):
• "NAVFlow AI addresses the most critical barrier to enterprise AI adoption: the lack of trust and inspectability in multi-agent autonomous systems."
• "I designed an interactive Directed Acyclic Graph (DAG) interface that makes agent decision paths visual and deterministic."
• "Crucially, we introduced 'Human-in-the-Loop Tollgates'—where an agent can pause, present its confidence score and reasoning trace, and request human sign-off before executing irreversible actions."
• "Impact: 62% reduction in hallucination errors slipping into production and 3.4x faster root-cause triage for devops engineers."`
  );
}

// ==========================================
// SLIDE 5: BlueWave SaaS (Maritime & Geospatial)
// ==========================================
{
  const slide = pres.addSlide();
  slide.background = { color: COLORS.bg };

  addSlideHeader(
    slide,
    'Flagship 03 · Maritime Logistics & Geospatial OS',
    'BlueWave · Global Fleet Orchestration & Telemetry OS',
    'Real-time satellite AIS vessel tracking, interactive sea corridors, and predictive port berthing'
  );

  const leftX = 0.8;
  const colW = 4.2;

  slide.addShape(pres.ShapeType.roundRect, {
    x: leftX,
    y: 1.6,
    w: colW,
    h: 1.05,
    rectRadius: 0.08,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.cardBorder, width: 1 },
  });

  slide.addText('THE CORE CHALLENGE', {
    x: leftX + 0.2,
    y: 1.7,
    w: colW - 0.4,
    h: 0.2,
    fontSize: 8.5,
    fontFace: FONT_HEAD,
    bold: true,
    color: COLORS.accentLime,
  });

  slide.addText(
    'Global logistics operators and harbor dispatchers relied on delayed email manifests and disconnected GPS sheets, leaving them blind to weather delays, canal bottlenecks, and fuel spikes.',
    {
      x: leftX + 0.2,
      y: 1.95,
      w: colW - 0.4,
      h: 0.6,
      fontSize: 9.5,
      fontFace: FONT_BODY,
      color: COLORS.textSecondary,
      lineSpacingMultiple: 1.15,
    }
  );

  slide.addShape(pres.ShapeType.roundRect, {
    x: leftX,
    y: 2.75,
    w: colW,
    h: 1.45,
    rectRadius: 0.08,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.cardBorder, width: 1 },
  });

  slide.addText('STRATEGIC UX INTERVENTIONS', {
    x: leftX + 0.2,
    y: 2.85,
    w: colW - 0.4,
    h: 0.2,
    fontSize: 8.5,
    fontFace: FONT_HEAD,
    bold: true,
    color: COLORS.accentMint,
  });

  const solPoints = [
    'Interactive vector maritime map with 60 FPS pan/zoom and radar pulses',
    'Interactive voyage scrubber simulating 20-day transit and canal slots',
    'Automated port turnaround HUD and container slot capacity distribution',
  ];
  slide.addText(solPoints.map((s) => `• ${s}`).join('\n'), {
    x: leftX + 0.2,
    y: 3.1,
    w: colW - 0.4,
    h: 0.95,
    fontSize: 9.5,
    fontFace: FONT_BODY,
    color: COLORS.textSecondary,
    lineSpacingMultiple: 1.2,
  });

  const metrics = [
    { num: '+44%', lbl: 'Dispatch Speed' },
    { num: '6.2x', lbl: 'Faster Triage' },
    { num: '$8.4M', lbl: 'Fuel Waste Saved' },
  ];
  metrics.forEach((m, idx) => {
    const mX = leftX + idx * 1.43;
    slide.addShape(pres.ShapeType.roundRect, {
      x: mX,
      y: 4.3,
      w: 1.35,
      h: 0.75,
      rectRadius: 0.06,
      fill: { color: '0E2A38' },
      line: { color: '38BDF8', width: 1 },
    });
    slide.addText(m.num, {
      x: mX,
      y: 4.38,
      w: 1.35,
      h: 0.35,
      fontSize: 14,
      fontFace: FONT_HEAD,
      bold: true,
      color: COLORS.accentBlue,
      align: 'center',
    });
    slide.addText(m.lbl, {
      x: mX,
      y: 4.75,
      w: 1.35,
      h: 0.25,
      fontSize: 8,
      fontFace: FONT_BODY,
      color: COLORS.textSecondary,
      align: 'center',
    });
  });

  // Right Visual
  const rightX = 5.3;
  const rightW = 4.0;
  const bwImg = path.join(projectRoot, 'public/assets/bluewave/fleet-live-map.png');
  if (fs.existsSync(bwImg)) {
    slide.addImage({
      path: bwImg,
      x: rightX,
      y: 1.6,
      w: rightW,
      h: 3.45,
      sizing: { type: 'contain', w: rightW, h: 3.45 },
    });
  }

  slide.addNotes(
    `TALKING POINTS (SLIDE 5 - BLUEWAVE - 2.5 MINUTES):
• "BlueWave showcases my expertise in complex geospatial UI, IoT hardware telemetry, and supply chain logistics."
• "We designed an interactive vector-based maritime control center that tracks 22 global vessels in real time with sub-10-second AIS satellite updates."
• "A core breakthrough was our Interactive Voyage Scrubber: rather than guessing when a vessel reaches the Suez Canal, operators can scrub along the trade lane to preview tidal clearances and berthing availability in seconds."
• "Impact: +44% dispatch efficiency and $8.4M in annual fuel waste eliminated."
• "Figma Source Link for Recruiters: https://www.figma.com/design/oKSX4bEtEcHoUe3DoGaAsO/BlueWave-SaaS (Inspect page organization, HIFI specs, Design System, and container bay layouts)."`
  );
}

// ==========================================
// SLIDE 6: SimpleList (Bento & Productivity)
// ==========================================
{
  const slide = pres.addSlide();
  slide.background = { color: COLORS.bg };

  addSlideHeader(
    slide,
    'Flagship 04 · Productivity & Multi-Device SaaS',
    'SimpleList · Keyboard-First Bento Task Management',
    'High-craft productivity combining modular Bento information architecture with live multiplayer'
  );

  const leftX = 0.8;
  const colW = 4.2;

  slide.addShape(pres.ShapeType.roundRect, {
    x: leftX,
    y: 1.6,
    w: colW,
    h: 1.05,
    rectRadius: 0.08,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.cardBorder, width: 1 },
  });

  slide.addText('THE CORE CHALLENGE', {
    x: leftX + 0.2,
    y: 1.7,
    w: colW - 0.4,
    h: 0.2,
    fontSize: 8.5,
    fontFace: FONT_HEAD,
    bold: true,
    color: COLORS.accentLime,
  });

  slide.addText(
    'Task apps oscillate between overly rigid enterprise databases (Jira) or bare-bones note pads (Apple Notes). Users lacked modular organization that stays out of their flow.',
    {
      x: leftX + 0.2,
      y: 1.95,
      w: colW - 0.4,
      h: 0.6,
      fontSize: 9.5,
      fontFace: FONT_BODY,
      color: COLORS.textSecondary,
      lineSpacingMultiple: 1.15,
    }
  );

  slide.addShape(pres.ShapeType.roundRect, {
    x: leftX,
    y: 2.75,
    w: colW,
    h: 1.45,
    rectRadius: 0.08,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.cardBorder, width: 1 },
  });

  slide.addText('STRATEGIC UX INTERVENTIONS', {
    x: leftX + 0.2,
    y: 2.85,
    w: colW - 0.4,
    h: 0.2,
    fontSize: 8.5,
    fontFace: FONT_HEAD,
    bold: true,
    color: COLORS.accentMint,
  });

  const solPoints = [
    'Keyboard-first command palette (Cmd+K) with instant search',
    'Bento Grid modular cards: Today, Queue, Backlog, and Pinned',
    'Real-time multiplayer presence with soft lilac visual hierarchy',
  ];
  slide.addText(solPoints.map((s) => `• ${s}`).join('\n'), {
    x: leftX + 0.2,
    y: 3.1,
    w: colW - 0.4,
    h: 0.95,
    fontSize: 9.5,
    fontFace: FONT_BODY,
    color: COLORS.textSecondary,
    lineSpacingMultiple: 1.2,
  });

  const metrics = [
    { num: '<120ms', lbl: 'Command Latency' },
    { num: '99.4%', lbl: 'Task Completion' },
    { num: 'Live', lbl: 'Vercel Prototype' },
  ];
  metrics.forEach((m, idx) => {
    const mX = leftX + idx * 1.43;
    slide.addShape(pres.ShapeType.roundRect, {
      x: mX,
      y: 4.3,
      w: 1.35,
      h: 0.75,
      rectRadius: 0.06,
      fill: { color: '281438' },
      line: { color: 'C084FC', width: 1 },
    });
    slide.addText(m.num, {
      x: mX,
      y: 4.38,
      w: 1.35,
      h: 0.35,
      fontSize: 14,
      fontFace: FONT_HEAD,
      bold: true,
      color: COLORS.accentLilac,
      align: 'center',
    });
    slide.addText(m.lbl, {
      x: mX,
      y: 4.75,
      w: 1.35,
      h: 0.25,
      fontSize: 8,
      fontFace: FONT_BODY,
      color: COLORS.textSecondary,
      align: 'center',
    });
  });

  // Right Visuals
  const rightX = 5.3;
  const rightW = 4.0;
  const sImg1 = path.join(projectRoot, 'public/assets/simplelist/hero-header.png');
  const sImg2 = path.join(projectRoot, 'public/assets/simplelist/bento-features.png');
  if (fs.existsSync(sImg1)) {
    slide.addImage({
      path: sImg1,
      x: rightX,
      y: 1.6,
      w: rightW,
      h: 1.65,
      sizing: { type: 'contain', w: rightW, h: 1.65 },
    });
  }
  if (fs.existsSync(sImg2)) {
    slide.addImage({
      path: sImg2,
      x: rightX,
      y: 3.35,
      w: rightW,
      h: 1.7,
      sizing: { type: 'contain', w: rightW, h: 1.7 },
    });
  }

  slide.addNotes(
    `TALKING POINTS (SLIDE 5 - SIMPLELIST - 2 MINUTES):
• "SimpleList demonstrates my focus on craft, typography, and micro-interactions in consumer-grade SaaS."
• "We pioneered a modular Bento grid layout where tasks, reminders, and team mentions sit in responsive tiles without feeling cramped."
• "Every interaction is keyboard-accessible with sub-120 millisecond responsiveness. I also coded a live production prototype on Vercel to test touch gestures and multiplayer presence directly with beta testers."`
  );
}

// ==========================================
// SLIDE 6: Motive (Mobility & Luxury EV)
// ==========================================
{
  const slide = pres.addSlide();
  slide.background = { color: COLORS.bg };

  addSlideHeader(
    slide,
    'Flagship 04 · Mobility, IoT & Automotive',
    'Motive · Connected Luxury EV Rental & Digital Key',
    'Bridging high-end automotive industrial design with seamless hardware-to-mobile handoffs'
  );

  const leftX = 0.8;
  const colW = 4.2;

  slide.addShape(pres.ShapeType.roundRect, {
    x: leftX,
    y: 1.6,
    w: colW,
    h: 1.05,
    rectRadius: 0.08,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.cardBorder, width: 1 },
  });

  slide.addText('THE CORE CHALLENGE', {
    x: leftX + 0.2,
    y: 1.7,
    w: colW - 0.4,
    h: 0.2,
    fontSize: 8.5,
    fontFace: FONT_HEAD,
    bold: true,
    color: COLORS.accentLime,
  });

  slide.addText(
    'Airport car rental is notorious for 45-minute counter queues, paperwork, and vehicle discovery confusion in dark multi-level parking garages.',
    {
      x: leftX + 0.2,
      y: 1.95,
      w: colW - 0.4,
      h: 0.6,
      fontSize: 9.5,
      fontFace: FONT_BODY,
      color: COLORS.textSecondary,
      lineSpacingMultiple: 1.15,
    }
  );

  slide.addShape(pres.ShapeType.roundRect, {
    x: leftX,
    y: 2.75,
    w: colW,
    h: 1.45,
    rectRadius: 0.08,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.cardBorder, width: 1 },
  });

  slide.addText('STRATEGIC UX INTERVENTIONS', {
    x: leftX + 0.2,
    y: 2.85,
    w: colW - 0.4,
    h: 0.2,
    fontSize: 8.5,
    fontFace: FONT_HEAD,
    bold: true,
    color: COLORS.accentMint,
  });

  const solPoints = [
    'Cinematic 3D vehicle stage with realistic battery & trim specs',
    'NFC & Bluetooth Low Energy (BLE) digital key provisioning in app',
    'Haptic turn-by-turn indoor parking guidance to the exact stall',
  ];
  slide.addText(solPoints.map((s) => `• ${s}`).join('\n'), {
    x: leftX + 0.2,
    y: 3.1,
    w: colW - 0.4,
    h: 0.95,
    fontSize: 9.5,
    fontFace: FONT_BODY,
    color: COLORS.textSecondary,
    lineSpacingMultiple: 1.2,
  });

  const metrics = [
    { num: '82%', lbl: 'Digital Key Adoption' },
    { num: '<90s', lbl: 'Stall to Driving' },
    { num: '4.9/5', lbl: 'App Store Rating' },
  ];
  metrics.forEach((m, idx) => {
    const mX = leftX + idx * 1.43;
    slide.addShape(pres.ShapeType.roundRect, {
      x: mX,
      y: 4.3,
      w: 1.35,
      h: 0.75,
      rectRadius: 0.06,
      fill: { color: '0E2A38' },
      line: { color: '38BDF8', width: 1 },
    });
    slide.addText(m.num, {
      x: mX,
      y: 4.38,
      w: 1.35,
      h: 0.35,
      fontSize: 14,
      fontFace: FONT_HEAD,
      bold: true,
      color: COLORS.accentBlue,
      align: 'center',
    });
    slide.addText(m.lbl, {
      x: mX,
      y: 4.75,
      w: 1.35,
      h: 0.25,
      fontSize: 8,
      fontFace: FONT_BODY,
      color: COLORS.textSecondary,
      align: 'center',
    });
  });

  // Right Visuals
  const rightX = 5.3;
  const rightW = 4.0;
  const mImg1 = path.join(projectRoot, 'public/assets/motive/hero-light-mode.png');
  const mImg2 = path.join(projectRoot, 'public/assets/motive/flow-discovery-detail.png');
  if (fs.existsSync(mImg1)) {
    slide.addImage({
      path: mImg1,
      x: rightX,
      y: 1.6,
      w: rightW,
      h: 1.65,
      sizing: { type: 'contain', w: rightW, h: 1.65 },
    });
  }
  if (fs.existsSync(mImg2)) {
    slide.addImage({
      path: mImg2,
      x: rightX,
      y: 3.35,
      w: rightW,
      h: 1.7,
      sizing: { type: 'contain', w: rightW, h: 1.7 },
    });
  }

  slide.addNotes(
    `TALKING POINTS (SLIDE 6 - MOTIVE - 2 MINUTES):
• "Motive highlights my experience designing for connected hardware and IoT ecosystems."
• "The physical-digital handoff is where traditional car rentals fail. We designed an end-to-end contactless flow: reservation, NFC digital key pairing, and haptic stall location."
• "Users go from walking off the terminal jet bridge to unlocking their EV in under 90 seconds, with an 82% voluntary digital key adoption rate."`
  );
}

// ==========================================
// SLIDE 7: RapidBI (Dev Tools & Systems)
// ==========================================
{
  const slide = pres.addSlide();
  slide.background = { color: COLORS.bg };

  addSlideHeader(
    slide,
    'Flagship 05 · Developer Tools & Enterprise Systems',
    'RapidBI · Self-Serve Enterprise Analytics & Token System',
    'Scaling data exploration for non-technical analysts while enforcing strict design token parity'
  );

  const leftX = 0.8;
  const colW = 4.2;

  slide.addShape(pres.ShapeType.roundRect, {
    x: leftX,
    y: 1.6,
    w: colW,
    h: 1.05,
    rectRadius: 0.08,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.cardBorder, width: 1 },
  });

  slide.addText('THE CORE CHALLENGE', {
    x: leftX + 0.2,
    y: 1.7,
    w: colW - 0.4,
    h: 0.2,
    fontSize: 8.5,
    fontFace: FONT_HEAD,
    bold: true,
    color: COLORS.accentLime,
  });

  slide.addText(
    'Executive decision-makers waited 3–5 days for data engineering teams to write custom SQL queries and build static board presentations.',
    {
      x: leftX + 0.2,
      y: 1.95,
      w: colW - 0.4,
      h: 0.6,
      fontSize: 9.5,
      fontFace: FONT_BODY,
      color: COLORS.textSecondary,
      lineSpacingMultiple: 1.15,
    }
  );

  slide.addShape(pres.ShapeType.roundRect, {
    x: leftX,
    y: 2.75,
    w: colW,
    h: 1.45,
    rectRadius: 0.08,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.cardBorder, width: 1 },
  });

  slide.addText('STRATEGIC UX INTERVENTIONS', {
    x: leftX + 0.2,
    y: 2.85,
    w: colW - 0.4,
    h: 0.2,
    fontSize: 8.5,
    fontFace: FONT_HEAD,
    bold: true,
    color: COLORS.accentMint,
  });

  const solPoints = [
    'Drag-and-drop commerce canvas with virtualized high-density pivot grids',
    'Full Storybook design token architecture syncing Figma & React',
    'Conversational AI assistant generating charts from natural language',
  ];
  slide.addText(solPoints.map((s) => `• ${s}`).join('\n'), {
    x: leftX + 0.2,
    y: 3.1,
    w: colW - 0.4,
    h: 0.95,
    fontSize: 9.5,
    fontFace: FONT_BODY,
    color: COLORS.textSecondary,
    lineSpacingMultiple: 1.2,
  });

  const metrics = [
    { num: '4.2x', lbl: 'Faster Reports' },
    { num: '100%', lbl: 'Token Parity' },
    { num: 'Zero', lbl: 'Manual SQL for Execs' },
  ];
  metrics.forEach((m, idx) => {
    const mX = leftX + idx * 1.43;
    slide.addShape(pres.ShapeType.roundRect, {
      x: mX,
      y: 4.3,
      w: 1.35,
      h: 0.75,
      rectRadius: 0.06,
      fill: { color: '2D1B0E' },
      line: { color: 'F59E0B', width: 1 },
    });
    slide.addText(m.num, {
      x: mX,
      y: 4.38,
      w: 1.35,
      h: 0.35,
      fontSize: 14,
      fontFace: FONT_HEAD,
      bold: true,
      color: COLORS.accentAmber,
      align: 'center',
    });
    slide.addText(m.lbl, {
      x: mX,
      y: 4.75,
      w: 1.35,
      h: 0.25,
      fontSize: 8,
      fontFace: FONT_BODY,
      color: COLORS.textSecondary,
      align: 'center',
    });
  });

  // Right Visuals
  const rightX = 5.3;
  const rightW = 4.0;
  const rImg1 = path.join(projectRoot, 'public/assets/rapidbi/canvas-commerce.png');
  const rImg2 = path.join(projectRoot, 'public/assets/rapidbi/storybook-workbench.png');
  if (fs.existsSync(rImg1)) {
    slide.addImage({
      path: rImg1,
      x: rightX,
      y: 1.6,
      w: rightW,
      h: 1.65,
      sizing: { type: 'contain', w: rightW, h: 1.65 },
    });
  }
  if (fs.existsSync(rImg2)) {
    slide.addImage({
      path: rImg2,
      x: rightX,
      y: 3.35,
      w: rightW,
      h: 1.7,
      sizing: { type: 'contain', w: rightW, h: 1.7 },
    });
  }

  slide.addNotes(
    `TALKING POINTS (SLIDE 7 - RAPIDBI - 2 MINUTES):
• "RapidBI showcases my technical fluency in developer tools, complex data tables, and enterprise design systems."
• "I led both the UX architecture of the visual canvas and the technical token architecture in Storybook."
• "We achieved 100% token synchronization between Figma and production React components, completely eliminating visual regression bugs across 20+ scrum squads."`
  );
}

// ==========================================
// SLIDE 8: ShiftSnap (Workforce SaaS)
// ==========================================
{
  const slide = pres.addSlide();
  slide.background = { color: COLORS.bg };

  addSlideHeader(
    slide,
    'Flagship 06 · Workforce Logistics & Mobile SaaS',
    'ShiftSnap · Frontline Shift Swaps & Roster Orchestration',
    'Empowering hourly workers with peer-to-peer shift swaps while automating manager compliance rules'
  );

  const leftX = 0.8;
  const colW = 4.2;

  slide.addShape(pres.ShapeType.roundRect, {
    x: leftX,
    y: 1.6,
    w: colW,
    h: 1.05,
    rectRadius: 0.08,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.cardBorder, width: 1 },
  });

  slide.addText('THE CORE CHALLENGE', {
    x: leftX + 0.2,
    y: 1.7,
    w: colW - 0.4,
    h: 0.2,
    fontSize: 8.5,
    fontFace: FONT_HEAD,
    bold: true,
    color: COLORS.accentLime,
  });

  slide.addText(
    'Last-minute frontline worker callouts triggered chaotic group text chains, unfulfilled shifts, overtime compliance penalties, and store manager burnout.',
    {
      x: leftX + 0.2,
      y: 1.95,
      w: colW - 0.4,
      h: 0.6,
      fontSize: 9.5,
      fontFace: FONT_BODY,
      color: COLORS.textSecondary,
      lineSpacingMultiple: 1.15,
    }
  );

  slide.addShape(pres.ShapeType.roundRect, {
    x: leftX,
    y: 2.75,
    w: colW,
    h: 1.45,
    rectRadius: 0.08,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.cardBorder, width: 1 },
  });

  slide.addText('STRATEGIC UX INTERVENTIONS', {
    x: leftX + 0.2,
    y: 2.85,
    w: colW - 0.4,
    h: 0.2,
    fontSize: 8.5,
    fontFace: FONT_HEAD,
    bold: true,
    color: COLORS.accentMint,
  });

  const solPoints = [
    'Peer-to-peer shift swap marketplace with 1-tap claim flow',
    'Automated rule validation (overtime limits, required certifications)',
    'Single-tap manager bulk approval dashboard with audit history',
  ];
  slide.addText(solPoints.map((s) => `• ${s}`).join('\n'), {
    x: leftX + 0.2,
    y: 3.1,
    w: colW - 0.4,
    h: 0.95,
    fontSize: 9.5,
    fontFace: FONT_BODY,
    color: COLORS.textSecondary,
    lineSpacingMultiple: 1.2,
  });

  const metrics = [
    { num: '-74%', lbl: 'Unfilled Shifts' },
    { num: '91%', lbl: '14-Day Adoption' },
    { num: '3.2 hrs', lbl: 'Saved / Mgr / Wk' },
  ];
  metrics.forEach((m, idx) => {
    const mX = leftX + idx * 1.43;
    slide.addShape(pres.ShapeType.roundRect, {
      x: mX,
      y: 4.3,
      w: 1.35,
      h: 0.75,
      rectRadius: 0.06,
      fill: { color: '0E241B' },
      line: { color: '10B981', width: 1 },
    });
    slide.addText(m.num, {
      x: mX,
      y: 4.38,
      w: 1.35,
      h: 0.35,
      fontSize: 14,
      fontFace: FONT_HEAD,
      bold: true,
      color: COLORS.accentMint,
      align: 'center',
    });
    slide.addText(m.lbl, {
      x: mX,
      y: 4.75,
      w: 1.35,
      h: 0.25,
      fontSize: 8,
      fontFace: FONT_BODY,
      color: COLORS.textSecondary,
      align: 'center',
    });
  });

  // Right Visual
  const rightX = 5.3;
  const rightW = 4.0;
  const shImg = path.join(projectRoot, 'public/assets/shiftsnap/ledger-roster-screens.png');
  if (fs.existsSync(shImg)) {
    slide.addImage({
      path: shImg,
      x: rightX,
      y: 1.6,
      w: rightW,
      h: 3.45,
      sizing: { type: 'contain', w: rightW, h: 3.45 },
    });
  }

  slide.addNotes(
    `TALKING POINTS (SLIDE 8 - SHIFTSNAP - 2 MINUTES):
• "ShiftSnap highlights my commitment to user empathy for deskless frontline workers—cashiers, nurses, and warehouse crew."
• "We turned the friction of emergency shift trades into a mutual marketplace where employees can trade shifts in 2 taps, while automated background checks ensure labor compliance."
• "The result was a 74% drop in unfilled shifts and over 3 hours saved per store manager each week."`
  );
}

// ==========================================
// SLIDE 9: 30-Minute Interview Playbook
// ==========================================
{
  const slide = pres.addSlide();
  slide.background = { color: COLORS.bg };

  addSlideHeader(
    slide,
    'Interview Execution Strategy',
    'The 30-Minute Portfolio Walkthrough Blueprint',
    'How to pace the conversation and tailor project selection to the interviewer'
  );

  const phases = [
    {
      time: '00:00 – 05:00',
      title: 'Intro & Positioning',
      desc: 'Introduce yourself, your leadership philosophy, and the 4 design pillars. Align on the interviewers priority interests.',
      color: COLORS.accentLime,
    },
    {
      time: '05:00 – 20:00',
      title: 'Deep Dive on 2 Selected Projects',
      desc: 'Pick 2 flagship projects based on the company focus:\n• AI / Enterprise: NAVFlow + RapidBI\n• Fintech / Growth: Pennwise + Motive\n• Craft / Consumer: SimpleList + Pennwise',
      color: COLORS.accentMint,
    },
    {
      time: '20:00 – 25:00',
      title: 'Systems & Collaboration',
      desc: 'Demonstrate how you collaborate with Product Managers, Data Scientists, and Frontend Engineers. Show design token rigor.',
      color: COLORS.accentLilac,
    },
    {
      time: '25:00 – 30:00',
      title: 'Interactive Q&A & Prototypes',
      desc: 'Open the live Vercel prototype, answer questions directly with data, and ask strategic questions about their roadmap.',
      color: COLORS.accentBlue,
    },
  ];

  phases.forEach((p, idx) => {
    const xPos = 0.8 + idx * 2.15;
    const yPos = 1.6;

    slide.addShape(pres.ShapeType.roundRect, {
      x: xPos,
      y: yPos,
      w: 2.05,
      h: 3.4,
      rectRadius: 0.1,
      fill: { color: COLORS.cardBg },
      line: { color: COLORS.cardBorder, width: 1 },
    });

    slide.addText(p.time, {
      x: xPos + 0.15,
      y: yPos + 0.2,
      w: 1.75,
      h: 0.25,
      fontSize: 9,
      fontFace: FONT_HEAD,
      bold: true,
      color: p.color,
    });

    slide.addText(p.title, {
      x: xPos + 0.15,
      y: yPos + 0.5,
      w: 1.75,
      h: 0.55,
      fontSize: 12,
      fontFace: FONT_HEAD,
      bold: true,
      color: COLORS.textPrimary,
    });

    slide.addShape(pres.ShapeType.rect, {
      x: xPos + 0.15,
      y: yPos + 1.1,
      w: 1.75,
      h: 0.02,
      fill: { color: COLORS.cardBorder },
      line: { color: COLORS.cardBorder, width: 0 },
    });

    slide.addText(p.desc, {
      x: xPos + 0.15,
      y: yPos + 1.25,
      w: 1.75,
      h: 2.0,
      fontSize: 9,
      fontFace: FONT_BODY,
      color: COLORS.textSecondary,
      lineSpacingMultiple: 1.15,
    });
  });

  slide.addNotes(
    `TALKING POINTS (SLIDE 9 - PLAYBOOK):
• "When presenting your portfolio in real interviews, do NOT rush through all 6 projects equally."
• "Always ask the interview panel in the first 2 minutes: 'I have deep dives across AI, Fintech, and Systems. Which domain is most top of mind for your team today?'"
• "Spend 7–8 minutes on Project 1 and 7–8 minutes on Project 2. Keep the remaining time for open technical dialogue."`
  );
}

// ==========================================
// SLIDE 10: Closing & Live Prototype Links
// ==========================================
{
  const slide = pres.addSlide();
  slide.background = { color: COLORS.bg };

  slide.addText('LET\'S CONNECT & BUILD', {
    x: 0.8,
    y: 1.0,
    w: 6.0,
    h: 0.3,
    fontSize: 10,
    fontFace: FONT_HEAD,
    bold: true,
    color: COLORS.accentLime,
    charSpacing: 2,
  });

  slide.addText('Thank You.', {
    x: 0.8,
    y: 1.35,
    w: 7.5,
    h: 0.8,
    fontSize: 36,
    fontFace: FONT_HEAD,
    bold: true,
    color: COLORS.textPrimary,
  });

  slide.addText('Ready to drive product craft and scalable design impact.', {
    x: 0.8,
    y: 2.15,
    w: 7.5,
    h: 0.4,
    fontSize: 14,
    fontFace: FONT_BODY,
    color: COLORS.accentMint,
  });

  // 4 Resource & Contact Cards
  const links = [
    {
      title: 'Interactive Prototypes',
      url: 'BlueWave & SimpleList',
      desc: 'Live functional prototypes testing AIS maritime maps, keyboard bento navigation, and state models.',
      color: COLORS.accentLilac,
    },
    {
      title: 'Figma Source Files',
      url: 'Pennwise & BlueWave',
      desc: 'Open design files showcasing file organization, semantic token sets, component variants, and HIFI specs.',
      color: COLORS.accentBlue,
    },
    {
      title: 'Full Online Portfolio',
      url: 'daniel-johnson-portfolio.vercel.app',
      desc: 'Detailed case studies, architectural pivots, synthesis signals, and design system contracts.',
      color: COLORS.accentMint,
    },
    {
      title: 'Contact & Credentials',
      url: 'LinkedIn · Dallas–Fort Worth',
      desc: 'Open for Staff / Principal / Lead Product Design and Design Strategy opportunities.',
      color: COLORS.accentLime,
    },
  ];

  links.forEach((l, idx) => {
    const xPos = 0.8 + idx * 2.15;
    const yPos = 2.8;

    slide.addShape(pres.ShapeType.roundRect, {
      x: xPos,
      y: yPos,
      w: 2.05,
      h: 2.1,
      rectRadius: 0.08,
      fill: { color: COLORS.cardBg },
      line: { color: COLORS.cardBorder, width: 1 },
    });

    slide.addText(l.title, {
      x: xPos + 0.15,
      y: yPos + 0.18,
      w: 1.75,
      h: 0.35,
      fontSize: 11,
      fontFace: FONT_HEAD,
      bold: true,
      color: l.color,
    });

    slide.addText(l.url, {
      x: xPos + 0.15,
      y: yPos + 0.52,
      w: 1.75,
      h: 0.35,
      fontSize: 9.5,
      fontFace: FONT_HEAD,
      bold: true,
      color: COLORS.textPrimary,
    });

    slide.addText(l.desc, {
      x: xPos + 0.15,
      y: yPos + 0.95,
      w: 1.75,
      h: 1.0,
      fontSize: 8.5,
      fontFace: FONT_BODY,
      color: COLORS.textSecondary,
      lineSpacingMultiple: 1.15,
    });
  });

  slide.addNotes(
    `TALKING POINTS (SLIDE 10 - CLOSING):
• "Thank you so much for your time and thoughtful questions."
• "I'd love to follow up with live prototype links or share any specific Figma design token files if your team wants a deeper look at the underlying component architecture."
• "Looking forward to our next steps together!"`
  );
}

// Generate the presentation file
const outputPublic = path.join(projectRoot, 'public/assets/Daniel_Johnson_Featured_Work_Walkthrough.pptx');
const outputDist = path.join(projectRoot, 'dist/assets/Daniel_Johnson_Featured_Work_Walkthrough.pptx');

console.log('Writing PPTX file...');
pres.writeFile({ fileName: outputPublic }).then(() => {
  console.log(`Saved PPTX to ${outputPublic}`);
  // Also copy to dist if dist exists
  try {
    if (fs.existsSync(path.dirname(outputDist))) {
      fs.copyFileSync(outputPublic, outputDist);
      console.log(`Copied PPTX to ${outputDist}`);
    }
  } catch (err) {
    console.warn('Could not copy to dist:', err.message);
  }
}).catch((err) => {
  console.error('Error generating presentation:', err);
  process.exit(1);
});
