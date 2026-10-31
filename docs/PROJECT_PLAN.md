# MHB Global Sweden website

Updated: 2026-10-31. Goal: bilingual mobile-first website with working enquiries, reviewed locally before publication.

| Milestone | Status | Trigger | Exit gate |
|---|---|---|---|
| M0 Design | DONE | User approved layout; requested navy-blue palette | Approved direction and replacement media screened |
| M1 Working preview | DONE | Implementation and feedback | User visual approval of revised preview |
| M2 Launch | DONE | User approves revised preview | Release build, deployment and live verification |

| ID | Priority/status | Task / owner | Depends on | Acceptance evidence |
|---|---|---|---|---|
| BUILD-01 | P1 DONE | Revise mobile design and service copy / Team Lead IT | None | Navy-blue company palette; retained layout; cafe with yellow chairs and kids corner in hero/cards; bright white salon with terracotta chairs; card images flush-aligned |
| QA-01 | P1 DONE | Verify revised site / Team Lead IT | BUILD-01 | 7 node tests; actual SV/EN selection replacement and preservation, mobile menu, privacy navigation, successful submission and inbox confirmation; no horizontal overflow at 320px |
| REVIEW-01 | P1 DONE | Review revised design / Hasnain | BUILD-01 | User approved navy/gold preview on 2026-10-31 |
| FORM-01 | P1 DONE | Connect enquiry delivery / Team Lead IT | None | Formspree myeenkwa; storage and Formshield enabled; test in dashboard; owner confirmed inbox receipt |
| SEO-01 | P1 DONE | SEO and delivery foundations / Team Lead IT | BUILD-01 | Static SV/EN HTML, canonical/hreflang, sitemap, metadata, responsive WebP, public-only dist and security headers |
| RELEASE-01 | P1 DONE | Publish approved version / Team Lead IT | REVIEW-01 | Live at https://mhbglobal.se; release dist deployed; bilingual routes, images and live enquiry verified |

## Evidence and checkpoint
Baseline checkpoint: 85b29ef. Updated local Git checkpoint follows this revision. No remote push or deployment.
Seven automated tests pass. Public image payload: 513,070 bytes for three 1200px files; 185,922 bytes for three 640px files. Source image archive verified: 9 assets, 27 files on 2026-10-31. External ChatGPT visual screening found no concrete high-risk issue in the replacement images; no reverse-image search performed.
Enquiry test sent 2026-10-31, visible in Formspree and owner-confirmed in inbox. Current free plan: 50/month and 30-day dashboard archive.

## Colour revision, 2026-10-31
User retained the layout and requested a blue company palette, more natural colourful cafe and brighter salon. Updated both responsive exports and all hero/card/dialog consumers. Cafe retains green example branding; salon has independent white/terracotta styling. English card top and image-to-caption gaps measured as zero at 1100px (floating-point tolerance). Seven automated checks passed. External curator identified no concrete high-risk issue in either replacement. Records stay private. No publication.

## Gold accent trial, 2026-10-31
Muted Swedish gold added only to primary company actions (header/hero quote, form review, final send), with navy text. Layout, photos and independent sample-brand buttons unchanged. Local review only.

## Production launch, 2026-10-31
User approved publication. Release 74f164b deployed through Cloudflare Pages production main; deployment 56a84780-f8e1-4528-a64c-01bfb2391567. Build command: node tools/build.mjs --release; output: dist. Swedish/English home and privacy routes return 200, indexing enabled, security headers present, all six live image hashes match saved exports. Live form test accepted; browser reported no console errors. Seven automated tests passed. Media originals, derivatives, screening reports and publication hashes retained privately in the Google Drive media library; archive verified.
