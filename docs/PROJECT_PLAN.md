# MHB Global Sweden website

Updated: 2026-10-31. Goal: bilingual mobile-first website with working enquiries, reviewed locally before publication.

| Milestone | Status | Trigger | Exit gate |
|---|---|---|---|
| M0 Design | DONE | User selected cream/teal direction | Approved direction and replacement media screened |
| M1 Working preview | IN PROGRESS | Implementation and feedback | User visual approval of revised preview |
| M2 Launch | READY | User approves revised preview | Release build, deployment and live verification |

| ID | Priority/status | Task / owner | Depends on | Acceptance evidence |
|---|---|---|---|---|
| BUILD-01 | P1 DONE | Revise mobile design and service copy / Team Lead IT | None | Digital presence headline, apps, upgrades; visual shown before actions on mobile; natural house/salon images |
| QA-01 | P1 DONE | Verify revised site / Team Lead IT | BUILD-01 | 7 node tests; actual SV/EN selection replacement and preservation, mobile menu, privacy navigation, successful submission and inbox confirmation; no horizontal overflow at 320px |
| REVIEW-01 | P1 READY | Review revised design / Hasnain | BUILD-01 | http://127.0.0.1:5194; not published |
| FORM-01 | P1 DONE | Connect enquiry delivery / Team Lead IT | None | Formspree myeenkwa; storage and Formshield enabled; test in dashboard; owner confirmed inbox receipt |
| SEO-01 | P1 DONE | SEO and delivery foundations / Team Lead IT | BUILD-01 | Static SV/EN HTML, canonical/hreflang, sitemap, metadata, responsive WebP, public-only dist and security headers |
| RELEASE-01 | P1 READY | Publish approved version / Team Lead IT | REVIEW-01 | Release command prepared; remove preview noindex via release build, deploy dist only, then verify live routes and form |

## Evidence and checkpoint
Baseline checkpoint: 85b29ef. Updated local Git checkpoint follows this revision. No remote push or deployment.
Seven automated tests pass. Public image payload: 426,180 bytes for three 1200px files; 155,850 bytes for three 640px files. Source image archive verified: 9 assets, 27 files on 2026-10-31. External ChatGPT visual screening found no concrete high-risk issue in the replacement images; no reverse-image search performed.
Enquiry test sent 2026-10-31, visible in Formspree and owner-confirmed in inbox. Current free plan: 50/month and 30-day dashboard archive.
