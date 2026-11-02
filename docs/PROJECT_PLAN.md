# MHB Global Sweden website

Updated: 2026-11-02. Goal: bilingual mobile-first website with working enquiries, reviewed locally before publication.

| Milestone | Status | Trigger | Exit gate |
|---|---|---|---|
| M0 Design | DONE | User approved layout; requested navy-blue palette | Approved direction and replacement media screened |
| M1 Working preview | DONE | Implementation and feedback | User visual approval of revised preview |
| M2 Relaunch | IN PROGRESS | Owner resumes preparation; final look before launch | Verified providers/form/mail, final local QA and approved deployment |

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

## Hosting offline confirmed, 2026-10-31
User completed Cloudflare Pages deletion. Inventory verified project absent; mhbglobal.se and mhbglobal-site.pages.dev both return DNS ENOTFOUND. No website is served at either address in current verification. Earlier maintenance-live/pending-removal status is superseded. Restore settings and pending minimum legal/email work are recorded in docs/AGENDA.txt. Local-only hold remains in effect.

## Business mailboxes configured, 2026-10-31
Owner authorised execution after workflow explanation. Primary mailbox elin@mhbglobal.se; login unchanged hasnain@mhbglobalab.onmicrosoft.com. Created kontakt and support shared mailboxes, granted owner Full Access + Send As and verified owner UPN in both Send As lists. Support alias migrated, historical user-mailbox messages preserved. MX/SPF checked. No additional licences or test emails. Evidence work/business-mailboxes-created.png. Outlook propagation/end-to-end tests remain pending; website hold remains.

## Two-way email tests completed, 2026-10-31
Owner authorised testing with private Hotmail UK. Connector sent three diagnostic messages; Outlook web confirmed receipt in Elin, Kontakt and Support inboxes. Replies automatically used the matching From address. Connector query scoped to the Hotmail Inbox confirmed all three replies received (19:37:50, 19:38:48, 19:39:38 UTC), with correct sender addresses/display names. Full Access and Send As verified in practice. Evidence: work/support-two-way-test.png outside public repository; test messages retained in mailboxes. No credentials changed, no account sign-out, no extra licences, no website publication. DKIM/DMARC audit and wider-provider deliverability remain outside these tests. Existing local checkpoint before tests: d9980a8.

## Same-tab mailbox access, 2026-10-31
Added Support and Kontakt to owner Outlook sidebar through current Chrome session; both additions confirmed. Switched to Support Inbox and verified test message in same tab. Three roots visible; no new access permissions, accounts or messages. Evidence work/chrome-shared-mailboxes.jpg.

## Microsoft outbound restriction escalation, 2026-10-31
Verified both shared-mailbox Gmail NDRs: 550 5.7.708 AS(7910), originating 20:06:10/20:06:15 UTC. Submitted email support case 2610311420000346 with extracted report attachment; Open, Sev C, agent assignment pending. Requested trial IP exception if applicable and investigation/removal of restriction. Owner Hotmail UK is contact. Private diagnostics and screenshot in work/outbound-failure-reports.txt and work/microsoft-outbound-ticket.png. No resolution claimed; no new test sends or domain changes. Next Microsoft response, retest and authentication review. Prior Hotmail success does not establish Gmail delivery.

## Billing archive and support status, 2026-11-02
Checked Hotmail UK: latest reply on case 2610311420000346 received 2026-11-01T22:12:55Z; internal review pending, engineer expects Monday-shift update. No further input requested and no resolution confirmed. Existing Hotmail tests passed, shared-mailbox Gmail outbound failures remain unresolved.

Invoice G195177491 (2026-10-31, SEK 0.00, no payment needed) was verified previously in admin centre. Download/archive is BLOCKED because internal browser access is disabled in Work settings; email searches found no attached invoice. Located existing Drive receipts folder and OpenAI naming convention; no substitute document created. Archive original PDF after access resumes and verify next receipt number in register. Check one-user paid renewal settings before trial conversion. Current authoritative next steps reconciled in AGENDA.txt; website remains offline and local-only.

## Launch preparation resumed, 2026-11-02
Owner confirms existing Vällingby address, reports Microsoft restriction fixed, asks for no design changes and phone LAN preview. Verified address and VAT from private tax document. Local preview responds HTTP200 at http://192.168.1.30:5194/; private-network interface only, no firewall/router change. Phone reachability not independently verified.

| ID | Priority/status | Task / owner | Depends on | Acceptance evidence |
|---|---|---|---|---|
| RELAUNCH-01 | P1 DONE | Collect final external source audit / Team Lead IT | None | Read completed Privacy Gap Review; material source fixes implemented locally; nine automated checks pass |
| RELAUNCH-02 | P1 DONE | Prepare verified disclosures and minimal form / Team Lead IT | Owner address confirmation | SV/EN address, org/VAT, direct contact, basis/rights/retention text; optional name/service; no-JS submission disabled with email fallback |
| RELAUNCH-03 | P1 BLOCKED | Finalise enquiry providers and retention / Team Lead IT + Hasnain | Browser access/account terms | Private monthly manual workflow drafted; Formspree recipient, processor terms, storage and mailbox folders not applied |
| RELAUNCH-04 | P1 BLOCKED | Verify mail authentication and delivery / Team Lead IT | Browser access | Owner says restriction fixed; SPF present, public DMARC/standard DKIM records absent; obtain exact tenant values and retest |
| RELAUNCH-05 | P1 IN PROGRESS | Final local QA and owner look / Team Lead IT + Hasnain | RELAUNCH-03 | Nine tests pass; rendered/mobile QA pending; design/assets unchanged |
| RELAUNCH-06 | P1 PLANNED | Restore hosting and search discovery / Team Lead IT | Final approval and blockers cleared | No deployment; preserve indexing metadata/sitemap; verify bot access, security headers and absent optional beacon after launch |

Analytics choice: start with existing aggregate server reports and Search Console/Bing verification, no client tracker. Detailed click tracking deferred. SEO foundations retained and company structured data enriched; indexing/recommendation not guaranteed. Public privacy wording remains a launch draft until actual provider arrangements are verified. Private workflow/source links: work/enquiry-operations.txt outside repository. This entry supersedes earlier completed-release/hold and pending-address statuses.
