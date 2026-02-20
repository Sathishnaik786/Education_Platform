# National Education Intelligence Dashboard (NEID)

## Executive Overview
The **National Education Intelligence Dashboard (NEID)** is an industrial-grade, production-capable strategic command center designed for Ministry-level oversight and operational governance of national education systems. Built with a focus on data-driven decision-making, it aggregates hyperscale educational metrics into actionable insights for Ministers, Senior Administrators, and Policy Analysts.

The platform provides a unified "Single Source of Truth," enabling stakeholders to transition seamlessly from high-level national trends to granular institutional performance through a rigorous multi-tier drilldown architecture.

## Vision & Purpose
Education governance at the national level often suffers from fragmented data silos and delayed reporting cycles. NEID exists to solve the "latency-to-action" gap by providing a real-time command center philosophy.

### Problem Statement
Traditional education management systems function as static databases rather than active intelligence layers. This leads to:
- Invisible dropout trends until the academic year ends.
- Budget lapses due to lack of real-time utilization tracking.
- Misalignment between curriculum output and industry demand.

### Strategic Philosophy
NEID operates as a proactive intelligence layer that identifies risks before they become systemic failures, transforming government from a reactive auditor into a strategic architect of human capital.

## Core Capabilities

### 1. Strategic vs. Operational Modes
- **Strategic Mode**: Designed for executive leadership, focusing on National Impact, Forecasting, and Executive Insights. It prioritizes "signal over noise."
- **Operational Mode**: Tailored for administrators, focusing on Institution Rankings, Governance Monitoring, and Scholarship Pipeline management.

### 2. Tier-Based Hierarchy & Drilldown
The system enforces a strict hierarchical navigation model:
- **Tier 1 (National)**: Aggregate KPIs across all education levels.
- **Tier 2 (Level)**: Specialized views for Primary, Secondary, High School, College, and University.
- **Tier 3 (District)**: Geographical performance clustering.
- **Tier 4 (Institution)**: Granular operational data for specific schools or universities.

### 3. Risk & Signal Layer (RAG System)
A sophisticated **Red-Amber-Green (RAG)** system is integrated into every view:
- **Critical (Red)**: Urgent policy or operational failures (e.g., Dropout surge >15%).
- **Warning (Amber)**: Moderate risks requiring monitoring (e.g., Budget utilization <60% in Q3).
- **Stable (Green)**: Performance meeting or exceeding national benchmarks.

### 4. Forecast & Predictive Modules
Utilizes mathematical simulation models to project enrollment growth, scholarship demand, and budget requirements out to 2031 based on adjustable policy parameters.

## Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | Vite + React 18 | High-performance frontend engine |
| **Language** | TypeScript | Strict type safety and enterprise maintainability |
| **State Management** | Zustand | Centralized store for tiered navigation and levels |
| **Global Filters** | React Context API | Cross-component synchronization for time/region filters |
| **Server State** | TanStack Query | Optimized data fetching and caching layer |
| **UI System** | Tailwind CSS + shadcn/ui | Design system consistency and accessibility |
| **Charts** | Recharts | Complex data visualization and trend analysis |
| **Animation** | Framer Motion | Fluid micro-interactions and cognitive load reduction |
| **Validation** | Zod + React Hook Form | Type-safe form handling and schema validation |
| **Tooling** | ESLint + Vitest | Code quality enforcement and unit testing |

## Architecture Overview

NEID follows a domain-driven architectural pattern separated by strategic intent.

### ASCII Architecture Map
```text
[CLIENT LAYER]
 ├── [ROUTING] (React Router v6) -> URL-driven state
 ├── [STATE LAYER]
 │    ├── FilterContext (Year, Region, Program)
 │    └── DashboardStore (Zustand: Level, District, State)
 └── [UI LAYER]
      ├── [PAGES] (LayoutDashboard -> Domain Pages)
      ├── [FEATURE COMPONENTS] (Charts, Simulations, Rankers)
      └── [CORE UI] (Button, Card, Sheet - shadcn/ui)

[DATA LAYER]
 ├── [ABSTRACTION] (useDashboardSync - URL-to-Store synchronization)
 ├── [MOCK API] (Centralized dashboardData.ts)
 └── [TYPES] (Strict interfaces for Tier, KPI, and Metric)
```

### Folder Structure
- `src/pages/`: domain-specific views (Impact, Governance, Scholarship).
- `src/components/dashboard/`: Smart widgets with internal logic.
- `src/components/ui/`: Atomic design primitives.
- `src/store/`: Centralized state management.
- `src/hooks/`: Reusable business logic and sync utilities.

## Data Hierarchy Model

The platform enforces data integrity through a strictly enforced aggregation model:

```text
National Intelligence
 └── Education Tier (University, Secondary, etc.)
      └── State/Region
           └── District Cluster
                └── Institution
                     └── Student Metric (Future Layer)
```

**Aggregation Integrity**: All KPIs are calculated bottom-up, ensuring that national completion rates are mathematically linked to institutional performance.

## Risk & Executive Intelligence Layer

The **Executive Insight Panel** serves as the primary decision-making interface. 
- **Risk Thresholds**: Pre-configured variables for dropout rates, budget delays, and skill gaps.
- **Heatmap Prioritization**: Automatically surfaces "Critical" signals to the top of the interface.
- **Decision-First Layout**: Metrics are paired with "Priority Recommendations" to move stakeholders from observation to action.

## Performance & Scalability Strategy

- **URL-First Governance**: Navigation state is mirrored in the URL, allowing deep-linking and state persistence across ministry departments.
- **Memoization**: Heavy computation for the **Forecast Simulator** is handled via `useMemo` to ensure UI fluidity at scale.
- **Aggressive Unmounting**: Heavy chart components are intelligently unmounted or lazy-loaded to preserve browser memory during extended sessions.
- **Centralized Aggregation**: Data is normalized into a `DashboardData` record to prevent prop-drilling and redundant calculations.

## Accessibility & UX Considerations

- **Strategic Calm Mode**: A curated dark-mode palette reduces eye strain for power users (administrators) during long-form analysis.
- **Micro-Animations**: Framer Motion is used sparingly to direct focus toward changing metrics without increasing cognitive load.
- **Hierarchy Indicators**: Clear breadcrumb and tier labeling ensure users never lose context within deep drilldown paths.

## Installation & Setup

### Prerequisites
- Node.js 18.x or higher
- npm or bun

### Setup Instructions
```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Start development server
npm run dev

# Execute unit tests
npm run test

# Build for production
npm run build
```

## Deployment Strategy

The application is designed for **Static Site Generation (SSG)** or **Client-Side Rendering (CSR)** to ensure maximum portability across government hosting environments:
- **Vercel/Netlify**: Optimized for edge deployment.
- **G-Cloud / Private Servers**: Can be hosted as raw static assets on Nginx or Apache.
- **Integration Readiness**: The `TanStack Query` layer is pre-configured to swap the mock data provider for a REST/GraphQL API without breaking UI components.

## Roadmap

1. **Phase 1 (Complete)**: UI Design System, Tiered Navigation, Mock Data Aggregation.
2. **Phase 2**: Real-time API Integration, National Data Ingestion.
3. **Phase 3**: AI Predictive Analytics (ML-based dropout forecasting).
4. **Phase 4**: Composite Education Health Index (Multi-metric weighting).
5. **Phase 5**: Role-Based Access Control (RBAC) for District vs. National officers.

## Contribution Guidelines

- **Branching**: `feat/` for features, `fix/` for bugs, `docs/` for documentation.
- **Commits**: Conventional Commits standard (`feat:`, `fix:`, `chore:`).
- **Quality**: PRs require passing tests and zero ESLint/TypeScript errors.

## License
MIT License - Proprietary for National Education Governance implementation.
