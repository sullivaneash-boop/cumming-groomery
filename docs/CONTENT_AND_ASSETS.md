# Content and assets

The user supplied the logo and a folder of real photos from the salon's Facebook materials and requested that the demo use them. The application ships these real photos. Image files are locally served and web-optimized, with orientation applied and source metadata stripped during conversion. The license and consent for a public production website require confirmation with Shelby.

| Optimized file | Supplied filename prefix | Use |
| --- | --- | --- |
| `supplied-brand.jpg` | 780672639 | Three-dog mark shown in the header, original attachment |
| `hero.webp` | 753206440 | Homepage portrait and dog gallery |
| `coat.webp` | 812315153 | Full Grooming example card |
| `long-coat.webp` | 809184063 | Coat photo and Bath & Brush example card |
| `cat.webp` | 771814786 | Cat grooming and gallery, one of two identical files |
| `salon.webp` | 784597783 | Salon interior, approach and gallery |
| `blue-bandana.webp` | 791296399 | Dog gallery |
| `speckled-dog.webp` | 730573599 | Dog gallery |
| `pink-bandana.webp` | 830068107 | Dog gallery |
| `dark-dog.webp` | 876819576 | Dog gallery |

The supplied photo selection avoids identifiable staff portraits pending approval and preserves the visual context of the salon. Locally generated concepts were superseded and removed from the application assets.

The gallery data records whether each item is a salon or concept photo. An approved portfolio and any future illustrative collection have distinct rendering surfaces. For each replacement, add the optimized file, descriptive alt text, visible caption, category and provenance in `content/gallery.ts`. Use `content/services.ts` for service card photo changes. Review the crops at mobile and desktop sizes.

Display and body fonts are locally installed Fontsource packages for Playfair Display and DM Sans. Both ship under the SIL Open Font License. [Playfair Display](https://fontsource.org/fonts/playfair-display) · [DM Sans](https://fontsource.org/fonts/dm-sans)

The home service links and gallery lineup use the supplied transparent cutouts, cropped to their visible alpha bounds and converted to WebP. Their source files are `dog-cutout1.png`, `dogcutout2.png`, `dogcutout3.png` and `cat-cutout1.png` in the supplied cutouts folder. Replace the corresponding files under `public/images/cutouts/` when approved imagery changes.
