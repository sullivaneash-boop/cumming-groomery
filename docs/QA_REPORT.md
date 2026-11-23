# QA report

Tested November 23, 2026 in Chrome via Playwright against the production-mode Next.js server on loopback.

## Build and responsive coverage

- `npm run build` and `npm run typecheck` passed. The five public pages were prerendered.
- Checked Home, Services, Gallery, About and Visit at 375, 430, 768 and 1440px. All routes returned 200, loaded their tested imagery and fit the viewport without horizontal overflow.
- Reviewed screenshots of the homepage at all four widths, Gallery on small mobile, and each secondary route on desktop. Adjusted the tablet hero and desktop headline wrapping during QA.
- Ran axe WCAG 2.0, 2.1 and 2.2 rules across the five page states and an open gallery dialog at every width. The final 24 scans reported zero violations in the selected rules. The initial scan caught service links whose visible labels did not match their accessible names. The correction is reflected in the final scan.
- Chrome reported no JavaScript page errors or failed Next.js asset responses during automated navigation.

## Performance

Early Lighthouse runs showed a brief footer shift when the static route rendered a generic loading fallback. The direct-loading pages now render their completed markup without that fallback. The homepage image is high priority, and site navigation prefetching is disabled to reserve initial bandwidth for page content.

Lighthouse 12.8.2 ran three times on Home in Chrome at 412 × 823 with mobile simulation and throttling. The final local lab medians were:

| Measure | Median |
| --- | --- |
| Performance | 93 / 100 |
| Accessibility | 100 / 100 |
| Largest Contentful Paint | 3.19 seconds |
| Cumulative Layout Shift | 0.0024 |
| Total Blocking Time | 27.5 milliseconds |

The final layout shift is below the 0.1 target. The 2.5-second LCP target was missed in this test profile. The largest element was the salon portrait. Measure on the authorized host and real devices before making a production performance claim.

## Functional checks

| Area | Check |
| --- | --- |
| Navigation | Opened each header and footer route. Exercised the mobile menu, Escape dismissal and focus return. Verified the mobile booking bar. |
| Home | Opened service card anchors, general services link, gallery link and about link. Expanded and collapsed all five FAQs. |
| Gallery | Checked counts for all, dogs, cats and salon. Used Enter to open the viewer, arrow keys and the next control to navigate, Escape and close to dismiss, and verified focus return. Checked optional controls are hidden for a single-image filter. |
| Booking | Checked all link destinations and exercised the external navigation. The public Pawfinity listing and application returned 200 on separate read-only requests. The previous slug returned 404. |
| Contact | Checked displayed business details, telephone and email link values, and the complete address in the maps destination. |
| SEO | Checked page titles and descriptions, noindex response header and page metadata, and parsed LocalBusiness JSON-LD. |
| Error handling | Checked the 404 status, branded recovery page and home link. |

The booking navigation test intercepted the browser request once the destination matched. A separate live read verified the provider pages. The team did not place calls, send email, submit a client application or request an appointment. No live fault was injected to trigger the error boundary and no field data was collected. Keyboard checks covered the interactive paths above. The automated scans do not establish WCAG conformance.
