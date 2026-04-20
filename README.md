# SaaS Dashboard UI

A responsive SaaS customer dashboard built with **React** and **Tailwind CSS v4**, scaffolded with Vite. Inspired by June.so's product analytics UI.

---

## Preview

The dashboard is a two-column grid layout featuring four main sections:

- **Top row (full width)** — Blue gradient card with a headline on the left and two floating white cards on the right: an Intercom company stats card and a Company Activation progress card
- **Bottom left** — Purple "Celebrate milestones" card with a Slack-style notification inner card, plus "Last seen" and "Activated" status badges below
- **Bottom right** — Amber "Automatic enrichment" card (AI-enriched profile data) stacked above a green "Integrated with your CRM" card with a flush bottom-right table

---

## Tech Stack

| Tool | Version |
|---|---|
| React | 19 |
| Vite | 8 |
| Tailwind CSS | v4 (via `@tailwindcss/vite`) |

---

## Project Structure

```
saas-dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx          # Root layout — 2-col responsive grid
│   │   ├── TopRowCard.jsx         # Full-width blue card (heading + white cards)
│   │   ├── IntercomCard.jsx       # Company header + metric rows
│   │   ├── ActivationCard.jsx     # "40%" heading + progress bars
│   │   ├── ProgressBar.jsx        # Reusable labeled progress bar
│   │   ├── MetricRow.jsx          # Reusable metric row (icon + label + value)
│   │   ├── BottomLeftCard.jsx     # Purple milestones card + status badges
│   │   ├── InnerInfoCard.jsx      # Slack-style notification with company details
│   │   ├── BottomRightCard.jsx    # Wrapper for enrichment + CRM cards
│   │   ├── EnrichmentCard.jsx     # Amber AI enrichment card
│   │   └── CRMCard.jsx            # Green CRM integration card with table
│   ├── App.jsx
│   ├── index.css                  # Tailwind v4 import
│   └── main.jsx
├── documentation.txt              # Full prompt/response conversation log
├── vite.config.js
└── package.json
```

---

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
```

---

## Component Overview

### `Dashboard.jsx`
Top-level layout. Renders the full-width `TopRowCard` followed by a two-column grid for the bottom row. The right column is offset down (`lg:mt-16`) to match the staggered reference design.

### `TopRowCard.jsx`
Blue gradient container spanning both columns. Uses an invisible ghost spacer to size the blue background correctly, with the real `IntercomCard` and `ActivationCard` absolutely positioned over the right side. The Activation card sits `mt-10` lower for a staggered effect.

### `IntercomCard.jsx`
Displays the Intercom company logo, name, join date, online indicator, and three metric rows (Total seats, Active seats, Active last 7 days).

### `ActivationCard.jsx`
Shows a large "40%" activation percentage and five labeled progress bars (Signed up, Setup, Aha moment, Activated, Active).

### `ProgressBar.jsx`
Reusable component. Props: `label`, `value` (0–100), `color` (Tailwind bg class).

### `MetricRow.jsx`
Reusable component. Props: `label`, `value`. Renders a lightning bolt icon, label, and right-aligned value.

### `BottomLeftCard.jsx`
Purple card with heading, description, and `InnerInfoCard`. Below the card, renders two `Badge` rows ("Last seen today", "Activated true") with green horizontal lines and an "Also done for you" cursive label with a hand-drawn arrow SVG.

### `InnerInfoCard.jsx`
Slack-style notification card showing a qualified signup event for Eoghan McCabe at Intercom, with an 8-field company detail grid.

### `EnrichmentCard.jsx`
Amber card with heading, description, a floating Intercom logo badge, and a white inner card showing AI-enriched profile fields (Website, Location, Employees, Twitter, Funding, Qualified).

### `CRMCard.jsx`
Green card with heading and description top-left. A white CRM table is pinned flush to the bottom-right corner (`absolute bottom-0 right-0`) showing Linear and HubSpot logo icons, and two company rows (Intercom 22 +3, Amie 20 -2).

---

## Responsive Behavior

| Breakpoint | Layout |
|---|---|
| `< 1024px` | Single column, all cards stacked vertically |
| `≥ 1024px` | Two-column grid, staggered offsets applied |

---

## Documentation

See [`documentation.txt`](./documentation.txt) for the full iterative build log — every prompt and the corresponding changes made during development.
