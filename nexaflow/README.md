# NexaFlow — AI Workflow Automation Platform

NexaFlow empowers modern engineering, product, and operations teams to design, test, and deploy resilient autonomous AI workflows without writing boilerplate glue code.

---

## Overview

NexaFlow bridges the gap between raw AI model inference and enterprise business logic. From multi-agent orchestration and deterministic data transformation to real-time incident triaging and continuous telemetry monitoring, NexaFlow delivers a production-grade interface for mission-critical automation.

---

## Core Features

- **Visual Workflow Builder**: Intuitive node-based canvas for assembling triggers, AI reasoning engines, transform scripts, and third-party actions.
- **Interactive Test Lab**: In-browser execution simulator for testing synthetic payloads, inspecting JSON diffs, and debugging execution steps in real time.
- **Quarterly Delivery Roadmap**: Transparent milestone timeline detailing upcoming platform capabilities, verified CI/CD releases, and delivery targets.
- **Live Telemetry & Analytics**: High-density operational dashboards tracking request throughput, latency distribution, token usage, and health trends.
- **Granular Entitlements & Pricing**: Transparent plan tiers with interactive billing cadences, feature matrices, and quota management.
- **Zero-Flicker SPA Routing**: Seamless client-side routing with automatic path preservation and GitHub Pages 404 fallback handling.
- **Responsive & Accessible**: Designed desktop-first with mobile optimizations, strict contrast ratios, and fluid tactile interactions.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | Modern UI library with concurrent rendering and hooks |
| **TypeScript 5.8** | Static type checking and strict interface safety |
| **Vite 6** | High-performance build tool and local development server |
| **Tailwind CSS 4** | Atomic, high-velocity utility styling |
| **Motion** | Fluid, spring-physics micro-interactions and transitions |
| **Lucide React** | Consistent, scalable vector iconography |
| **Recharts** | Responsive charts for throughput and performance telemetry |
| **Sonner** | Accessible, non-intrusive toast notifications |

---

## Getting Started

### Prerequisites

- **Node.js**: `v20.0.0` or higher
- **npm**: `v10.0.0` or higher

### Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd nexaflow
npm install
```

### Local Development

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Building for Production

Compile the TypeScript codebase and bundle static assets into `dist/`:

```bash
npm run build
```

### Previewing Production Build

Preview the production build locally:

```bash
npm run preview
```

### Code Quality & Type Verification

Run the TypeScript compiler to verify zero type errors:

```bash
npm run lint
```

---

## Automated GitHub Pages Deployment

This repository includes a zero-config GitHub Actions workflow (`.github/workflows/deploy.yml`) configured for automatic, 1-click deployments to GitHub Pages.

### Setup Instructions

1. Push this repository to GitHub.
2. In your GitHub repository, navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. Push a commit to `main` or `master` (or trigger manually via **Actions** > **Deploy to GitHub Pages** > **Run workflow**).
5. GitHub Actions will automatically install dependencies, build the production bundle, and publish your site with automatic repository subpath routing and SPA fallback.

---

## License

Proprietary — All rights reserved. Prepared for client handover.
