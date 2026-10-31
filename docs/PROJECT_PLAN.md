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

| CONCEPT-01 | P1 DONE | Local website and app concepts / Team Lead IT | None | Three distinct scrolling website compositions, Swedish app interfaces; menu, appointment and quote interactions checked; 320/390px overflow checks passed |
| REVIEW-02 | P1 READY | Review approved-image click-through previews / Hasnain | CONCEPT-01 | http://127.0.0.1:5194/#examples; approved static mockups with local hotspots; no publication |

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

## Local concept revision, 2026-10-31
After launch, owner requested full website previews and matching mobile app layouts. Added editorial cafe, construction portfolio and salon booking compositions with generic industry names and minimal Swedish app labels. Gallery cards preview website + phone; expanded views have navigation and interactive app states. Seven automated checks pass, menu filtering/addition, quote selection, appointment day/time, design selection to enquiry and 320/390px overflow checks verified in internal browser; no console errors. Owner rejected generated salon directions and will supply a reference; paused photo work, retained existing photo only as a placeholder. This revision is local only; live release remains 74f164b.

## Approved artwork with local interactions, 2026-10-31
Owner approved three static website/phone compositions and requested light interaction without navigation. Replaced generated HTML compositions with exact approved images (lossless WebP, decoded pixels verified against PNGs), CSS hotspot buttons and accessible optional Swedish controls. Cafe selections, appointment selection, quote draft/summary, reopening without duplicate handlers and unchanged URL verified in internal browser. Mobile 390px: no modal overflow, alternate controls at least 44px high; no console errors. New media 012–014 saved privately with hashes and original files. Local only; production remains 74f164b.

## Maintenance and privacy review, 2026-10-31
Current public state supersedes the earlier launch notes: maintenance release a9515f3 is deployed on production main. /, /en/ and /privacy return HTTP 503 with Retry-After 3600 and no enquiry form. Full-site republishing is on hold. Local preview remains available.

| ID | Priority/status | Task / owner | Depends on | Acceptance evidence |
|---|---|---|---|---|
| DEMO-01 | P1 DONE | Limit mockups to visual click feedback / Team Lead IT | REVIEW-02 | Approved images unchanged; removed panels, messages and demo flows; cafe click verified with zero extra panels and unchanged URL; 7 tests pass |
| MAINT-01 | P1 DONE | Temporarily replace public site / Team Lead IT | User instruction | a9515f3; Swedish/English maintenance page verified in internal browser and HTTP 503 on three routes |
| PRIV-01 | P1 DONE | External GPT-6 Pro gap review / External curator | None | Review completed in external ChatGPT; private copy saved outside public repository; four material areas identified |
| PRIV-02 | P1 DONE | Disable optional client analytics / Team Lead IT | PRIV-01 | Cloudflare RUM Disable remained selected after reload; previous setting excluded EU visitors |
| PRIV-03 | P1 BLOCKED | Complete company disclosure and privacy notice / Team Lead IT + Hasnain | PRIV-01 | Await current address/public email confirmation, retention decision and verified enquiry-provider terms; existing notice is not final |
| PRIV-04 | P1 PLANNED | Verify collection contracts and mailbox / Team Lead IT + Hasnain | PRIV-01 | Establish Formspree Article 28 coverage, transfer/deletion terms and managed business mailbox coverage before restoring enquiries |

External review: https://chatgpt.com/c/6ae62644-3760-8332-863f-e29c8f279393 . Findings are a gap review, not certification. Company registration number and seat verified; full private company documents are not in this repository. Consumer Hotmail was used for the working delivery test; business mailbox is recommended for the continuing enquiry store. Thirty-day Formspree dashboard access is not evidence of deletion. No cookie banner added merely for the contact form. Initial analytics recommendation: existing server statistics plus Search Console/Bing Webmaster Tools with DNS/static verification; no new trackers or advertising. Search tools have not been configured.

Evidence outside public repository: work/maintenance-live.png, work/analytics-disabled.png, work/privacy-review-2026-10-31.txt. Preview changes checkpointed locally after this entry. Production maintenance was built from a separate worktree; future restoration must integrate main history rather than force-push.

## Owner hold, 2026-10-31
Owner paused launch pending address change and Microsoft email provisioning. Resume agenda: docs/AGENDA.txt. Earliest requested email recheck: 2026-11-03 18:48 Europe/Stockholm; no automatic job. Six-month closed/unsuccessful enquiry retention agreed in principle, implementation deferred and must cover provider copies. External source package audit running in existing Pro chat; build/seven tests reportedly pass, no-JavaScript submission bypass flagged, final report pending. Production crawler-block change 91912b6 adds robots.txt Disallow / for all compliant agents alongside maintenance 503/noindex. No full website release.
Verification: live robots.txt is exactly User-agent: * / Disallow: /, HTTP 200. Cloudflare Bot Preference Sync disabled to remove injected conflicting Allow: /. Homepage remains 503/noindex. Evidence work/crawler-block-live.png. Source audit progress saved privately; final result to collect on resume. Spreadsheet deferred in favour of the requested simple text agenda during hold.

Offline request: GitHub disconnected from Pages and verified. Permanent Pages project deletion is at the final confirmation dialog; not executed. Source/checkpoints and restoration settings saved in docs/AGENDA.txt. Public maintenance still present until removal is confirmed.
