# vinx.hu launch checklist (items your developer must do on the real site)

Send this file to whoever is coding the site.

1-2, 4-9, 15, 17-18: ready-made files in this folder. The privacy, terms and 404 pages already match the site (same header, footer, fonts, beige and brown). Link paths assume pages sit in the site root (index.html, about.html, services.html, shop.html); adjust if your URLs differ.
3. Secrets off the frontend: no API keys, tokens or passwords in browser code. Keys for Shopify, Stripe, Acuity or email must live on the server or in environment variables. Rotate any key that was ever exposed.
10. Alt text: suggestions for your photos:
   - Hero: "Red BMW M2 with gold wheels parked beside a lake and white bridge"
   - Portrait: "Portrait of Vinx, photographer in Budapest"
   - Private Shoot: "Red classic Mercedes parked in front of a castle"
   - Event: "Orange sports car surrounded by a crowd at a car show"
   - Wedding: "Wedding ceremony hall with chairs and an aisle"
   - Services hero: "Dark Porsche 911 Targa parked between buildings by a harbour"
   - Instagram grid: describe each car and place in a few words
11. Compress images: convert to WebP/JPG, max ~1600px wide, under 300 KB each (squoosh.app); use loading="lazy" on everything below the first screen.
12. Page speed: test at pagespeed.web.dev, aim for 90+ on mobile.
13. Color contrast: dark brown on beige is fine, but check the white hero text over the photo (add a subtle dark overlay) and the "Pricing available..." italic text. Need 4.5:1 (webaim.org/resources/contrastchecker).
14. Mobile: confirm the viewport tag (in head-snippet.html) and test 375px width and a real phone.
16. Broken links: after launch, run brokenlinkcheck.com. Check the "Book now", Follow, Shop and Learn More buttons especially.
19. Analytics: head-snippet.html has Plausible (no cookies needed). If you use Google Analytics instead, load it only after cookie consent (cookie-banner.js).
20. One clear call to action: "Book now" is your main one. Keep it the only dark filled button in the header and use one primary button per section.
