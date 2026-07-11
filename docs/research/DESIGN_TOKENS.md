# The Perfect Affair — Design Tokens

Source: https://theperfectaffair.in/ (WordPress / Salient theme, WPBakery)

## Colors
- **Primary green:** `#3F7065` (rgb 63,112,101) — buttons, footer links, brand
- **Footer gradient green:** `rgba(63,110,102,.506)` → over white
- **Dark section (Why Choose Us):** `#191919` (rgb 25,25,25)
- **Text primary:** `#000000`
- **White:** `#FFFFFF`
- **Testimonial overlay:** `rgba(10,10,10,.5)` over `testimonial-banner.jpg`

## Fonts (Google Fonts)
- **Urbanist** — hero H1 (weight 600, letter-spacing -1.86px)
- **Public Sans** — body + most headings (headings weight 300 light; body weight 400)
- **Castoro** — testimonials (serif, 20px/32px)

## Type scale
| Element | Font | Size | Weight | Notes |
|---|---|---|---|---|
| Hero H1 | Urbanist | 62px / 62px lh | 600 | ls -1.86px, white, animated text swap |
| Section heading | Public Sans | 57.6px | 300 | Why Choose / Events / Dual excellence |
| "Who We Are?" | Public Sans | 57.6px | 500 | |
| Our Services | Public Sans | 46px | 300 | left aligned |
| Stat number (04+/100+) | Public Sans | 76.8px | 300 | |
| Service card title | Public Sans | 22px | 500 | |
| Body paragraph | Public Sans | 17px / 26px | 400 | |
| Nav link | Public Sans | 16px | 500 | |
| Eyebrow (EXPERTISE) | Public Sans | 18px | 400 | ls 0.9px |
| Testimonial quote | Castoro | 20px / 32px | 400 | centered, white |
| Footer heading | Public Sans | 17px | 400 | underlined |
| Footer link | Public Sans | 17px | 400 | green #3F7065 |
| Address text | Public Sans | 21px / 33.8px | 400 | |

## Header
- Fixed. Transparent at top (white nav text, circular logo `tpa-logo-stock-circle.png`).
- On scroll (>~100px): white bg, black nav text, slight shadow. Height ~128px top → ~90px scrolled.
- Nav: Home · About · Services · Celebrations · Gallery ▾ (Photos, Videos) · Testimonials · Contact

## Buttons
- **Know More pill:** bg `#3F7065`, radius `200px`, padding `15px 25px`, white text 18px, `—` dash prefix.

## Footer
- Background: `linear-gradient(120deg, rgba(63,110,102,.506) 1%, rgba(255,255,255,.227) 65%)` over white.
- Bottom bar: white bg, black text "© 2026 The Perfect Affair. All Rights Reserved." + "Designed by OnWhitePaper".

## Section order / topology
1. Header (fixed overlay)
2. Hero — 100vh video bg (`Home-Banner-Video.mp4`, poster `home-banner.jpg`), centered white emblem `logo-white.png`, animated "Creating timeless moments./memories.", scroll indicator
3. Who We Are — 2-col: image `memories.jpg` + faint TPA watermark + heading + 2 paragraphs; second image `decor-1.jpg`
4. Tagline band — "Crafting Moments, Perfecting Celebrations, Every Time." (large centered light)
5. Our Services — heading + 6 image cards
6. Expertise — eyebrow EXPERTISE, "Dual excellence in event crafting", paragraph, stats 04+/100+, layered photos `dual-ex1.jpg` + `dual-ex2.jpg`
7. Why Choose Us — #191919, 4 full-bleed image panels w/ icon+title+subtitle
8. Events we undertake — text + Know More pill + 12 3D-icon items
9. Testimonials — dark image bg carousel, Castoro white centered, arrows, "1 / 3"
10. Footer — sage gradient, logo+tagline, Address, Quick Links, Connect, Follow Us
11. WhatsApp float button (bottom-left, #25D366)

## Image → card mapping
Services: Design & Decor=`decor1.jpg`, Entertainment=`dj.jpg`, Invitation Design=`invite.jpg`, Bespoke Returns Favours=`gifts.jpg`, Vendor Referrals=`vendor.jpg`, Management & Coordination=`manage.jpg`
Why Choose: Elegant Designs=`elegant-design.jpg`, Personalized Experiences=`custom-made.jpg`, Seamless Coordination=`coordinate.jpg`, Diverse Expertise=`Diverse.jpg`
Events 3D icons: Engagement=`Ring-Box.png`, Wedding=`Wedding-Bell.png`, Baby Shower=`Wedding-Balloon.png`, Naming Ceremony=`Wedding-Invitation.png`, Birthday=`Wedding-Cake.png`, Bachelorette=`Love-Lock.png`, House Warming Ceremony=`Wedding-Location.png`, Cocktail/Mocktail Gatherings=`Champagne-Glass-.png`, Product Release=`Wedding-Day.png`, Seminars/Conferences=`Wedding-Video-Recorder.png`, Fundraisers/Charity Events=`Wedding-Gift.png`, Runway/Fashion Show=`Wedding-Camera.png`
</content>
</invoke>
