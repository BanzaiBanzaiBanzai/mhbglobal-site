# MHB Global Sweden website

Local review branch: `preview/company-website`. No deployment performed.

Build with `node tools/build.mjs`, run `node preview.mjs`, open http://127.0.0.1:5194. Node 24; no dependency installation needed. The server exposes only dist/.

Swedish homepage `/`, English `/en/`, with localized privacy pages. Both locales render meaningful HTML before JavaScript runs. Switching language preserves visitor fields and updates only the managed design-selection sentence. New design selection replaces the earlier sentence.

The contact form is live against Formspree. Visitors review, then explicitly send. Formspree dashboard storage and Formshield are enabled. A real test was accepted, appeared in the dashboard, and the owner confirmed inbox delivery on 2026-10-31. Dashboard: https://formspree.io/forms/myeenkwa/submissions. To change recipient, verify the new address in Formspree Account > Linked Emails, then update the form's notification workflow. Do not put the notification address in public source. The free plan currently allows 50 submissions/month and a 30-day dashboard archive; keep important enquiries in your business records.

Run tests: `node --test tests/website.test.mjs`. Tests cover translated selection, replacement, preservation of typed notes, accepted/rejected/network submission results, static locale metadata and public package isolation.

SEO: descriptive localized titles/descriptions, canonical and hreflang links, Organization structured data, social metadata, sitemap, robots.txt, semantic headings, explicit image dimensions, lazy loading and responsive WebP images. Preview pages deliberately retain noindex. After user approval, run `node tools/build.mjs --release` and deploy ONLY dist/. Verify the live form, indexing directives and locale routes after deployment. Search Console sitemap submission follows publication; ranking is not guaranteed.

Media originals, provenance records and archives remain in the private shared library, outside this public checkout. Export images are already included; build does not regenerate them. Archive usage records updated with hashes.
