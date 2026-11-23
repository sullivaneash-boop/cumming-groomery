# Booking and integrations

## Pawfinity

The shared Book Appointment control reads the provider name and destination from `content/site.ts`. It opens an HTTPS site in the current tab and describes the handoff to assistive technology. The current destination is the salon's public Pawfinity company page. The old slug supplied in the brief returned 404. The working replacement returned 200, matched the business address and phone, and displayed the new-client and returning-client entry points. [Current company page](https://crm.pawfinity.com/the-cumming-groomery/)

| User | Handoff |
| --- | --- |
| New client | Company page → New Client Application → Pawfinity handles intake |
| Returning client | Company page → Client Login → Pawfinity handles account access |
| Questions, pricing or availability | Click to call the salon. The site also provides a click-to-email link. |

Direct booking slots were not confirmed. The website presents the outbound action as a route to the existing provider, with phone available for confirming an appointment. No credentials, test applications, client records or appointment requests were used.

Pawfinity's booking documentation describes capabilities enabled by the service provider. Its privacy policy prohibits displaying its site information on third-party sites via an external API or iframe, and the terms restrict access beyond published interfaces. Keep the ordinary outbound link. Any future embedded or API integration needs a vendor-approved interface, terms review and owner approval. [Pawfinity booking features](https://www.pawfinity.com/features/online-booking/) · [Pawfinity privacy policy](https://info.pawfinity.com/privacy-policy/) · [Pawfinity terms](https://www.pawfinity.com/terms/)

## Owner-controlled decisions

- Confirm the new-client process, application approval, login path and appointment confirmation language.
- If Pawfinity changes, update the HTTPS URL, provider label and client guidance in the central settings and retest the public entry points. The components consume a provider-neutral configuration.
- Confirm the Google Maps pin and obtain the official Business Profile URL. Directions currently use an address-based Google Maps link.
- Enable a gift-card link only when the owner supplies an existing approved destination.
- If needed, scope an email-backed inquiry form with sandbox testing, spam protection, minimal personal information and a confirmed recipient. The demo currently sends no form submissions.
