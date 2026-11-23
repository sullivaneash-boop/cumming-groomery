# The Cumming Groomery

An independent website concept by Peakline Media for a dog and cat grooming salon in Cumming, Georgia. It includes five pages, a responsive photo gallery, service information, contact actions, and a handoff to the salon's current Pawfinity page.

## Run locally

Requires Node.js 22 or newer and npm.

```sh
npm ci
npm run dev -- --hostname 127.0.0.1
```

Open [localhost:3000](http://localhost:3000). For a production-mode check, run `npm run typecheck`, `npm run build`, then `npm start`.

The demo needs no credentials or environment variables. Booking, call, email and directions are outbound links. The site has page-level and HTTP-header noindex directives. Use a private preview for review and keep the disclosure in place until the owner approves a public launch.

## Edit content

| Location | Purpose |
| --- | --- |
| `content/business.ts` | Verified business facts, contact links and structured data |
| `content/site.ts` | Booking provider, navigation and optional features |
| `content/services.ts` | Service cards and verification status |
| `content/faq.ts` | Common questions |
| `content/gallery.ts` and `public/images/` | Photo metadata and optimized assets |
| `content/people.ts` | Approved staff and reviews |
| `app/globals.css` | Visual tokens and responsive component styles |

## Project documents

- [Project brief](docs/PROJECT_BRIEF.md)
- [Research](docs/RESEARCH.md)
- [Design system](docs/DESIGN_SYSTEM.md)
- [Feature matrix](docs/FEATURE_MATRIX.md)
- [Integrations](docs/INTEGRATIONS.md)
- [Content and assets](docs/CONTENT_AND_ASSETS.md)
- [Launch checklist](docs/LAUNCH_CHECKLIST.md)
- [Client handoff](docs/CLIENT_HANDOFF.md)
- [Sales demo](docs/SALES_DEMO.md)
- [QA report](docs/QA_REPORT.md)
