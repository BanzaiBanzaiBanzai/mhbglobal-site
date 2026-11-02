# MHB Global Sweden website

Updated: 2026-11-02. Goal: bilingual mobile-first website with working enquiries, reviewed locally before publication.

**Current state: public website OFFLINE; relaunch NOT READY.** Web Developer owns implementation. Provider evidence/retention setup, lead mail readiness and final owner approval remain open. Local rendered QA is complete within the scope recorded below; actual HTTPS-origin delivery belongs controlled deployment acceptance. Historical successful releases below are evidence only, not current readiness. Current task detail is in RELAUNCH-01–06 and ANALYTICS-01–02 below.

| Milestone | Status | Trigger | Exit gate |
|---|---|---|---|
| M0 Design | DONE | User approved layout; requested navy-blue palette | Approved direction and replacement media screened |
| M1 Working preview | IN PROGRESS | Local privacy/form fixes complete | Current rendered/mobile QA and final owner look |
| M2 Relaunch | IN PROGRESS | Owner resumes preparation; final look before launch | Verified providers/form/mail, final local QA and approved deployment |

| ID | Priority/status | Task / owner | Depends on | Acceptance evidence |
|---|---|---|---|---|
| BUILD-01 | P1 DONE | Revise mobile design and service copy / Team Lead IT | None | Navy-blue company palette; retained layout; cafe with yellow chairs and kids corner in hero/cards; bright white salon with terracotta chairs; card images flush-aligned |
| QA-01 | P1 DONE | Verify local release candidate / Web Developer | BUILD-01 | 320/390/1280/1440px checks;9tests on isolated release;25-file public manifest and header baseline. Live edge/delivery acceptance separate |
| REVIEW-01 | P1 DONE | Review revised design / Hasnain | BUILD-01 | User approved navy/gold preview on 2026-10-31 |
| FORM-01 | P1 BLOCKED | Finalise business enquiry delivery / Web Developer | Provider/account access | Kontakt routing and Reply-To verified; processor/transfer terms and retention setup open. Production-origin Inbox acceptance follows approved deployment |
| SEO-01 | P1 DONE | SEO and delivery foundations / Team Lead IT | BUILD-01 | Static SV/EN HTML, canonical/hreflang, sitemap, metadata, responsive WebP, public-only dist and security headers |
| RELEASE-01 | P1 PLANNED | Relaunch approved version / Web Developer | RELAUNCH-03, RELAUNCH-04, RELAUNCH-05 and final approval | Public hosting deleted; no current release. Prior release evidence retained in historical entries |

| CONCEPT-01 | P1 DONE | Approved concept artwork / Team Lead IT | None | Historical interactive prototypes superseded by approved static artwork with visual click feedback; no booking/order flows |
| REVIEW-02 | P1 PLANNED | Final owner look / Hasnain | RELAUNCH-05 | http://192.168.1.30:5194/#examples; preserve approved design, no repeated full redesign review |

## Historical evidence and checkpoints (31 October 2026)
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
| RELAUNCH-03 | P1 BLOCKED | Finalise enquiry providers and retention / Web Developer + Hasnain | Provider clarification and operating setup | Signed in;Kontakt verified/routed;Reply-To correct. Article28/transfer evidence and storage/log/backup handling remain open; manual retention package prepared |
| RELAUNCH-04 | P1 BLOCKED | Verify mail authentication and delivery / Team Lead IT | DMARC and outbound delivery/header verification | Lead confirms mhbglobal.se DKIM Valid/Enabled; DNS CNAMEs resolve. DMARC and actual outbound signed-message tests remain open |
| RELAUNCH-05 | P1 IN PROGRESS | Final local QA and owner look / Web Developer + Hasnain | RELAUNCH-03 | Local320/390/1280/1440px QA and isolated25-file release checks pass; owner final look remains. HTTPS-origin acceptance is RELAUNCH-06 |
| RELAUNCH-06 | P1 PLANNED | Restore hosting and search discovery / Team Lead IT | Final approval and blockers cleared | No deployment; preserve indexing metadata/sitemap; verify bot access, security headers and absent optional beacon after launch |

Analytics choice: start with existing aggregate server reports and Search Console/Bing verification, no client tracker. Detailed click tracking deferred. SEO foundations retained and company structured data enriched; indexing/recommendation not guaranteed. Public privacy wording remains a launch draft until actual provider arrangements are verified. Private workflow/source links: work/enquiry-operations.txt outside repository. This entry supersedes earlier completed-release/hold and pending-address statuses.

## Website ownership handover, 2026-11-02
Owner requested a dedicated Web Developer worker (GPT-6 Astra, medium reasoning) responsible for website development, SEO/AI discovery, analytics/reporting, cookie/privacy arrangements, enquiry flow, QA and deployment preparation. Team Lead IT coordinates wider company IT and receives reports. Worker thread: 01a19d3d-4b4a-7f02-a0d3-b5021ca76e8b, same workspace, MHB Global IT sidebar. Existing AGENDA.txt and this plan remain authoritative; no duplicate task tracker. Preserve approved design; public deployment still waits for readiness and owner's final look. Worker owns subsequent website edits to avoid concurrent changes. Analytics reporting should support date-range traffic, countries, available page/referrer trends, search visibility and enquiries, separating bots/sampling/unknowns; select manageable existing/free tools from current primary documentation. No automatic recurring job or paid service authorised.

## Web Developer initial assessment, 2026-11-02
Web Developer accepted website ownership and reviewed agenda, implementation checkpoint and private operations notes. LAN preview still returns200. Current official Cloudflare documentation supports using existing free server reports for basic traffic/country reporting; detailed page/referrer data is plan-dependent and must be verified in this account. On-demand report procedure documented privately in work/enquiry-operations.txt, with period comparison, source/metric definitions, bot limitations and separate search/enquiry figures. No trackers, paid plans, credentials, scheduled jobs or account settings changed. Internal browser unavailable; Formspree/tenant/hosting account verification and rendered QA remain blocked.

| ID | Priority/status | Task / owner | Depends on | Acceptance evidence |
|---|---|---|---|---|
| ANALYTICS-01 | P1 DONE | Select initial analytics/report workflow / Web Developer | Owner delegation | Current official Cloudflare docs reviewed; free aggregate server reports plus search tools; private reporting procedure saved |
| ANALYTICS-02 | P1 BLOCKED | Verify account reporting and search ownership / Web Developer | Internal browser and hosting restoration | No account access/configuration claimed; confirm actual metrics and DNS/static ownership verification |

Open launch gates unchanged: Formspree business routing/processor and retention evidence; mailbox retention implementation; exact tenant DKIM/DMARC and delivery verification; rendered/mobile QA; final owner look and approval.

## Release procedure and provider clarification prepared, 2026-11-02
Private Formspree clarification draft saved at work/formspree-clarification-draft.txt; not sent. It asks for Free-plan processing roles/Article28 terms, transfer mechanism and annexes, subprocessors and submission/log/backup retention, including storage-disabled behaviour. AGENDA.txt now distinguishes predeployment gates, live-only checks and rollback. Top-level QA/form/release statuses corrected; earlier successful-release evidence retained as history. No code/design/account changes or redundant tests.

## Existing rollback artifact verified, 2026-11-02
Found existing separate maintenance worktree release/maintenance at91912b6; no duplicate created. Its dist contains only _worker.js, index.html and robots.txt. Invoked actual Worker fetch handler locally: five HTML paths return503, Retry-After3600, noindex/no-store, restrictive CSP and no form/script; robots returns200/disallow-all. SHA256 inventory and test limits saved privately in work/maintenance-fallback-verification.txt. Not a Cloudflare-edge or browser-rendering test. Normal LAN preview and approved design untouched. Agenda now gives exact advanced-mode fallback path/deployment requirement.
SV/EN notice and private cleanup procedure agree: six-month threshold after last meaningful contact, next monthly review, normally within seven months. Formspree clarification draft now matches that timing and explicitly avoids claiming automatic provider deletion. Provider draft remains unsent; account-dependent launch gates remain pending.

## Internal browser QA resumed, 2 November 2026
Restored a single LAN preview listener at 192.168.1.30:5194 after no listener was found. No firewall changes. Internal browser 390x844 rendered hero inspection passed; zero broken images or horizontal overflow. Cafe selection, English translation, replacement by construction selection, optional-field review, Escape dialog/menu focus and keyboard privacy navigation passed. No console errors/warnings. No submission sent. Private evidence: work/browser-qa-2026-11-02.txt. Formspree is signed out; owner sign-in requested before provider settings/routing inspection. Design unchanged; publication hold remains.

## Current external-review and account gates, 2 November 2026
The completed Privacy Gap Review (chat 6ae62644-3760-8332-863f-e29c8f279393) has been collected; RELAUNCH-01 is complete. Its material source findings were addressed at checkpoint 9398e98 and subsequent QA is recorded above. No duplicate external audit started. This source review does not close provider/account gates: Formspree business routing, applicable processing/transfer terms, storage/log/backup retention, mailbox retention setup, actual hosting analytics coverage and final deployment checks remain open. Formspree sign-in handoff is retained without login polling. Team Lead IT owns Microsoft authentication separately and reports tenant status NoDKIMKeys for mhbglobal.se; worker will not make simultaneous mailbox/DNS changes. Public hosting remains offline and final owner approval is required.


## Mail authentication progress reported by Team Lead IT, 2 November 2026
Microsoft DKIM keys generated; both exact selector CNAMEs saved DNS-only in Cloudflare and resolved via 1.1.1.1. Microsoft activation still reports CNAME not found, so signing is not enabled. DMARC and actual signed-delivery checks remain pending. Private evidence: work/enquiry-operations.txt and work/dkim-dns-2026-11-02.png. This supersedes the earlier NoDKIMKeys status; no website-worker DNS mutations or publication. Lead also reports invoice G195177491 (SEK 0) confirmed but download stalled and archive not completed.


## Formspree account inspected, 2 November 2026
Owner completed sign-in. Free50/month account supports two linked emails. Added authorised Kontakt recipient; confirmation sent and status PENDING. Lead handling mailbox verification. Existing workflow still sends to Hotmail; no switch or storage change until verification and delivery test. Archive and Formshield enabled, CAPTCHA and account MFA disabled. Public terms/security still leave processing-role/DPA and retention evidence unresolved; existing provider clarification draft remains unsent. Private details/evidence in work/enquiry-operations.txt and work/formspree-recipient-pending-2026-11-02.png. No upgrade, publication, or external support message.

## Business enquiry routing saved, 2 November 2026
Kontakt verified after owner completion and saved as sole workflow recipient; Formspree success confirmed. Local website accepted diagnostic MHB-KONTAKT-20261102-A with owner Hotmail reply-to. Mailbox receipt/Reply-To verification delegated to lead; do not infer delivery from form success alone. Archive remains enabled; provider/retention gates and publication hold remain open. Evidence outside repo: work/formspree-kontakt-routing-2026-11-02.png.

## Kontakt test classified as junk, 2 November 2026
Lead verified marker MHB-KONTAKT-20261102-A in Kontakt Junk Email at21:21:34UTC, not Inbox. Reply-To unverified because connector omitted it. Routing changed successfully but delivery gate remains open for junk diagnosis/retest. Archive stays ON; no tenant spam protections weakened. Fixed unselected optional service payload to omit the field instead of sending Choose an option. Preview build and9tests pass; no design change or extra test submission.

## Notification header diagnosis, 2 November 2026
Actual Outlook message headers verify correct owner Reply-To and SPF/DKIM/DMARC/compauth passes for Formspree. Microsoft nevertheless classified SCL5, SFV:SPM, CAT:PHISH and delivered to Junk. Exact trigger not exposed; LAN URL contribution is unproven. No MHB-domain authentication failure shown by this inbound notification. Not-junk UI would add a persistent Safe Sender exception, so confirmation was cancelled. Archive retained; reliable Inbox retest and possible authorised provider false-positive review remain open. Private header evidence in work/formspree-notification-headers-2026-11-02.txt.

## Diagnostic message recovered without safelisting, 2 November 2026
Used Move to Inbox for the single test message and explicitly unchecked the future-sender exception before confirming. Verified diagnostic now in Inbox and Junk empty. No safelist or tenant protection changes. This manual recovery does not close the delivery gate. Next meaningful test: intended HTTPS origin during approved controlled release, with direct-contact/maintenance fallback available. No repeated local sends or spoofed production origin; archive retained. Screenshot: private work/formspree-test-recovered-2026-11-02.png.

## Consolidated prelaunch package, 2 November 2026
Local QA and isolated release verification completed;9tests pass,25public files manifested, normal preview stays noindex. Private package work/prelaunch-package-20261102.txt records exact scope and limits, provider recommendation, actionable manual retention steps, and five-stage acceptance. Keep Formspree; send one prepared standard-terms/retention clarification only after owner authorises external contact. Recipient/Reply-To verified; Junk result belongs intended HTTPS-origin controlled-deployment acceptance, not a circular predeployment requirement. Archive ON; no broad safelist. Retention folders/rule/register still need implementation; no automation or deletion installed. Curator already complete, invoices not launch gates. Design unchanged, no publication.


## Retention folder setup installed, 2 November 2026
Created Kontakt/Website enquiries with Active, Closed unsuccessful and Customers; all persisted after reload. Evidence work/kontakt-retention-folders-20261102.png. Manual Inbox/Junk triage selected for low volume; no rule hides new enquiries, bypasses filtering or deletes mail. Last-contact/due/hold lines and monthly cleanup remain in existing private operations notes, no duplicate database. No actual customer cases yet. Six-month threshold/normal seven-month cleanup includes relevant mailbox/provider copies; provider log/backups still await clarification. No deletion or scheduled job. Lead also confirms DKIM now Valid/Enabled (work/dkim-enabled-2026-11-02.png); DMARC and outbound signed-message verification remain open.

