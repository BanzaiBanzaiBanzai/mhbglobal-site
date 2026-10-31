# MHB Global Sweden website

Updated: 2026-10-31. Goal: implement a bilingual, mobile-first company website for local review before publication.

| Milestone | Status | Trigger | Exit gate |
|---|---|---|---|
| M0 Design | DONE | Approved visual direction and media | Cream/teal design, Swedish default, three screened photos |
| M1 Working preview | IN PROGRESS | Implementation request | Browser checks and user visual review |
| M2 Launch | PLANNED | User approves preview and delivery setup | Form delivery tested, privacy completed, deployment authorized |

| ID | Priority/status | Task / owner | Depends on | Acceptance evidence |
|---|---|---|---|---|
| BUILD-01 | P1 DONE | Implement bilingual responsive site / Team Lead IT | None | HTML/CSS/JS; approved cafe, house and salon photos; smaller mobile headings and inline actions |
| QA-01 | P1 DONE | Verify preview / Team Lead IT | BUILD-01 | Verified SV/EN, 320/390/768px no horizontal overflow, desktop visual review, all three dialogs, design-to-form, required/email validation, local review and privacy navigation; no console errors |
| REVIEW-01 | P1 READY | Review working design / Hasnain | BUILD-01 | http://127.0.0.1:5194; no deployment |
| FORM-01 | P1 PLANNED | Connect contact delivery / Team Lead IT | REVIEW-01 | Managed provider and verified recipient required; preview does not send |
| RELEASE-01 | P1 PLANNED | Final privacy and publish / Team Lead IT | FORM-01 | Requires user approval and delivery verification |

## Checkpoint
Local branch: preview/company-website. No remote push. Parking website unchanged.
