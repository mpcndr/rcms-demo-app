# Task Board

## Epic: Payment Flow

### Done
- [x] TASK-001 | fix: separate fee/penalty QR payment from capital contribution flow | 2026-08-05 | bug | → spec: SPEC-payment-fix.md

---

## Epic: Phase 1 Completeness

### Done
- [x] TASK-002 | feat: add valuation-firm role + login + own-scope dashboard (4.5 #3) | 2026-08-05 | feature | → spec: SPEC-phase1.md
- [x] TASK-003 | feat: add Admin dashboard strip — users by type + online count (4.5 #2) | 2026-08-05 | feature | → spec: SPEC-phase1.md
- [x] TASK-004 | feat: add Master Data tab (ISIC/province/type/doc-type/valuation firms) + fix dead fee-tier edit link (4.3) | 2026-08-05 | feature | → spec: SPEC-phase1.md
- [x] TASK-005 | feat: make Asset Valuation list interactive — detail + accept-result flow (4.4/4.6) | 2026-08-05 | feature | → spec: SPEC-phase1.md
- [x] TASK-006 | feat: capture reason text on "Return for Correction" (4.8) | 2026-08-05 | feature | → spec: SPEC-phase1.md
- [x] TASK-007 | feat: add REFUNDED invoice status + channel choice (QR/Mobile/Counter) (4.9) | 2026-08-05 | feature | → spec: SPEC-phase1.md
- [x] TASK-008 | feat: add External Web Portal login + read-only lookup view (4.7) | 2026-08-05 | feature | → spec: SPEC-phase1.md
- [x] TASK-009 | feat: add User Manual & Helpdesk entry point (4.13) | 2026-08-05 | feature | → spec: SPEC-phase1.md
- [x] TASK-010 | feat: add Error/Security + SLA/Deadline example notifications (4.12) | 2026-08-05 | feature | → spec: SPEC-phase1.md
- [x] TASK-011 | chore: add MOIC logo to login hero and sidebar brand | 2026-08-05 | chore
- [x] TASK-012 | feat: 2-step login (username+password → OTP) with self-service password recovery (4.1) | 2026-08-05 | feature | → spec: SPEC-phase1.md
- [x] TASK-013 | feat: add/deactivate user profile management in Admin > Users (4.1) | 2026-08-05 | feature | → spec: SPEC-phase1.md
- [x] TASK-014 | feat: add Virtual GL ledger tab under Settings (4.8) | 2026-08-05 | feature | → spec: SPEC-phase1.md

---

## Epic: TOR Alignment (SPEC-phase1.md rewrite from client TOR)

### Done
- [x] TASK-015 | fix: replace mock fee schedule with real TOR §5.1/5.2 decree numbers | 2026-08-05 | fix | → spec: SPEC-phase1.md
- [x] TASK-016 | feat: add "labor" as 3rd capital contribution mode (TOR §3) | 2026-08-05 | feature | → spec: SPEC-phase1.md
- [x] TASK-017 | feat: split return-for-correction reason into internal/external (TOR §3 Reason Management) | 2026-08-05 | feature | → spec: SPEC-phase1.md
- [x] TASK-018 | feat: block capital-payment recording while penalty unpaid (TOR F2.10 Payment Block) | 2026-08-05 | feature | → spec: SPEC-phase1.md
- [x] TASK-019 | feat: add public QR verification lookup, no login required (TOR F5.04) | 2026-08-05 | feature | → spec: SPEC-phase1.md

Scope note: dynamic N-step approval engine, ก.1-ก.7 dynamic forms, 15-ministry integrations intentionally deferred as phase-2/architectural — out of this round per TOR §6 (phase 1 = Capital Monitoring + 4 core integrations only).

---

## Epic: Self-Service Capital Declaration

### Done
- [x] TASK-020 | feat: advanced filter panel on Enterprise List matching eBRS-style reference UI | 2026-08-06 | feature

### Done
- [x] TASK-021 | feat: adopt RCMS_Phase1_Spec.md as primary spec — 7-role RBAC (Owner/Maker/Valuation Firm/Checker/Approver/External/Admin) | 2026-08-06 | feature | → spec: RCMS_Phase1_Spec.md
- [x] TASK-022 | feat: remove Reviewer role — workflow becomes 2 stages: Checker verify → Approver sign | 2026-08-06 | feature | → spec: RCMS_Phase1_Spec.md
- [x] TASK-023 | feat: owner self-service capital payment declaration (online, no officer needed) | 2026-08-06 | feature | → spec: RCMS_Phase1_Spec.md
- [x] TASK-024 | feat: add Maker role — submits for any enterprise, distinct from Checker who only verifies | 2026-08-06 | feature | → spec: RCMS_Phase1_Spec.md
- [x] TASK-025 | feat: add Admin as its own role, separate from Approver (User mgmt/Master Data/Audit logs) | 2026-08-06 | feature | → spec: RCMS_Phase1_Spec.md

---

## Epic: Company Detail Page Retab (spec §5)

### Done
- [x] TASK-026 | feat: restructure vDetail into 4 tabs — ข้อมูลนิติบุคคล / ข้อมูลการประกอบทุน / รายการหลักประกัน / ประวัติการอนุมัติ | 2026-08-06 | feature | → spec: RCMS_Phase1_Spec.md §5

Deferred still: Maker keying out-of-network valuation reports, full SPEC-collateral.md field forms (land/building/car/machine data entry) — this pass only surfaces collateral read-only.

---

## Epic: UX Simplification (user feedback)

### Done
- [x] TASK-027 | fix: vDetail — replace timeline/tick visual with plain progress bar + due-date countdown | 2026-08-06 | fix
- [x] TASK-028 | fix: vDetail — un-tab into a single scrolling page (info/capital/collateral/audit stacked) | 2026-08-06 | fix
- [x] TASK-029 | fix: vList — merge quick-filter row + advanced panel into one always-visible filter card (added working province/ISIC filters, previously decorative) | 2026-08-06 | fix
- [x] TASK-030 | feat: convert vFin and vSet in-page tabs into sidebar submenus (context-sensitive, shown only while on that page) | 2026-08-06 | feature

---

## Epic: Full Rewrite from RCMS_Phase1_Spec.md

### Done
- [x] TASK-031 | feat: rewrite index.html from scratch off RCMS_Phase1_Spec.md — no code carried over from the old file, only the CSS theme reused | 2026-08-06 | feature | → spec: RCMS_Phase1_Spec.md
- [x] TASK-032 | feat: replace every progress-bar/gauge/timeline visual with donut charts (dashboard, detail page, owner view, mobile) — none remain anywhere | 2026-08-06 | feature

Notes: fresh data model, i18n dict, and view functions throughout; kept the same 7-role RBAC and 2-stage Checker→Approver workflow already validated in prior rounds since those came from this same spec. Verified with `node --check`, dict symmetry (347/347), and 3 new Playwright suites (47 checks total) covering login for all 7 roles, the full Maker/Owner→Checker→Approver→cert flow, valuation accept flow, admin user/master-data/GL management, mobile view, forgot-password, keyboard shortcuts, and reset — zero JS errors throughout.

---

## Epic: Post-Rewrite Feedback Round

### Done
- [x] TASK-033 | feat: valuation firm job detail modal — document list w/ open-doc links (in-network) + own-report link placeholder (out-of-network) | 2026-08-06 | feature
- [x] TASK-034 | feat: replace one-click valuation submission with a real form — declared value input + file dropzone, validated before status flips to "wait" | 2026-08-06 | feature
- [x] TASK-035 | fix: Admin dashboard now shows full capital-status overview (KPIs + by-status donut + overdue trend bar) in addition to user stats, not user stats alone | 2026-08-06 | fix
- [x] TASK-036 | feat: Add User role field constrained by organization — APB → Maker/Checker, MOIC → Approver+E-Sign/System Admin, VAL → In-network firm only — replaces free-text role input | 2026-08-06 | feature

Notes: verified with `node --check`, dict symmetry (347/347 — no new keys needed, all reused existing translations), and updated flow.py/flow2.py Playwright suites (55 checks total) covering the new valuation-firm form validation, admin dashboard overview content, and org-constrained role select — zero JS errors.

---

## Epic: Payment Flexibility & Contribution Modes

### Done
- [x] TASK-037 | fix: remove forced 30%-of-capital minimum on first instalment — add explicit "pay in full / pay partial" choice, amount field only editable in partial mode | 2026-08-06 | fix
- [x] TASK-038 | fix: remove "labor" as a capital contribution mode — only Cash and Assets remain | 2026-08-06 | fix

Notes: verified with `node --check`, dict symmetry (349/349), full regression suite (55 checks, zero JS errors) plus a targeted manual check confirming a sub-30% partial payment now submits successfully.

---

## Epic: Payment Flow Refinement (follow-up feedback)

### Done
- [x] TASK-039 | fix: restrict "pay partial" choice to enterprises that have never paid (paid===0) — once any amount is paid (PARTIAL status), every subsequent instalment must settle the full remaining balance | 2026-08-06 | fix
- [x] TASK-040 | fix: replace full/partial payment choice's full-width `.opt` card UI (looked duplicated with the cash/asset selector) with a compact `.lang`-style segmented toggle | 2026-08-06 | fix

Notes: verified with `node --check`, dict symmetry (348/348 — removed unused payFullD/payPartialD, added payFullOnly), full regression suite (55 checks, zero JS errors), and a targeted manual check confirming the toggle only appears for never-paid entities while already-partial entities are locked to full payment with a message and disabled amount field.

---

## Epic: Collateral Data Entry & Admin Dashboard Polish

### Done
- [x] TASK-041 | feat: asset-type capital declaration now renders real per-category fields (land/building/car/machine) sourced from collateral_fields (1).xlsx, category select swaps the field set live, required field validated before submit | 2026-08-06 | feature | → spec: collateral_fields (1).xlsx
- [x] TASK-042 | fix: redesign Admin dashboard layout — split into "Capital Overview" and "System Users Overview" sections with clear headers/divider, paired the lone full-width user-breakdown donut with a new org-breakdown table so both dashboard sections are visually symmetric two-column rows instead of a flat stack of unrelated cards | 2026-08-06 | fix

Notes: field set per asset category (5-6 fields each) is a curated subset of the ~30-column source spreadsheet, picked for demo relevance (identifying document no., key dimensions, location, estimated price); required field per category (deedNo/buildingName/licenseNo/machineName) blocks submission via new errAssetField message. Admin dashboard fix caught and fixed a missing closing </div> that had broken the second two-column card row into a vertical stack. Verified with `node --check`, dict symmetry (352/352), full regression suite (55 checks, zero JS errors), plus a Playwright check of asset field swapping/validation and a full-page screenshot comparison of the dashboard before/after.

---

## Epic: Entity Info Visibility

### Done
- [x] TASK-043 | fix: extract "Entity Information" into a shared entInfoCard(e) helper, pin it as the first card on every page that shows a specific entity — detail page, owner dashboard, payment/asset declaration form, and the checker/approver task review page — so it's visible for every role, including while a transaction is being filled in | 2026-08-06 | fix

Notes: previously only existed (buried mid-page) on the Maker/Checker/Approver detail page; Owner's dashboard and the declare/task-review pages had no entity identification at all. Removed the now-redundant status pill duplicated in the Capital Status card headers on vDetail/vOwnerDash since it's shown once at the top in entInfoCard now. Verified with `node --check`, full regression suite (55 checks, zero JS errors), and a Playwright screenshot check confirming the card renders first on owner dashboard, detail page, and the declare form.

---

## Epic: Entity Info / Capital Status Layout

### Done
- [x] TASK-044 | feat: put Entity Information and Capital Contribution Status side by side in a 70:30 grid (new `.split70` CSS class, responsive — collapses to 1 column under 900px) on both the entity detail page and the Owner dashboard; split the instalment schedule out of the capital-status card into its own full-width card below so it isn't squeezed into the narrow 30% column | 2026-08-06 | feature

Notes: added noMargin param to entInfoCard(e,true) so it can sit flush inside the grid instead of carrying its own bottom margin. Verified with `node --check`, full regression suite (55 checks, zero JS errors), and screenshots confirming the 70:30 layout on both pages.

---

## Epic: History Table, Collateral Click-through, Upload UX, Stepper Redesign

### Done
- [x] TASK-045 | fix: Owner dashboard — replace instalment-card list with the same "processing & approval history" table Maker/Checker/Approver see on the detail page (factored into shared historySection(e)) | 2026-08-06 | fix
- [x] TASK-046 | fix: entity detail page — remove the separate "Collateral Items" table; asset-mode history rows are now clickable (underlined "Assets" channel label) and open a coldetail modal showing the matching collateral entry (type, description, appraised value) | 2026-08-06 | fix
- [x] TASK-047 | feat: file upload dropzones (#drop, #fjDrop) now support real drag-and-drop (dragover/dragleave/drop handlers, visual .drag state) in addition to click-to-attach, via a shared wireDrop() helper; dropped files use their real filename | 2026-08-06 | feature
- [x] TASK-048 | feat: clearer upload hints — dropT now says "click to attach, or drag and drop files here", dropS/new dropSVal spell out "attach at least 1: <document types> · PDF, JPG up to 10MB" (dropSVal is valuation-report-specific, used in the firm's submission modal instead of the generic payment-doc hint) | 2026-08-06 | feature
- [x] TASK-049 | fix: Declare Capital Payment (step 1, initial submission) no longer shows any step/progress indicator; the Checker/Approver task review page replaces the old flat 3-box `.steps` bar with a numbered circle-and-connecting-line stepper (new stepCircles() helper, `.stepc` CSS) with the step description written under each circle | 2026-08-06 | fix

Notes: removed now-dead collateralEmpty dict key (collateral/colVal kept — reused in the new coldetail modal). Verified with `node --check`, dict symmetry (352/352), full regression suite (55 checks, zero JS errors), plus targeted Playwright/screenshot checks: owner dashboard shows history table not instalment cards, collateral section removed from detail page, asset history row opens coldetail modal, declare page has zero `.steps` elements, checker task page renders the new `.stepc` circle stepper.

---

## Epic: History Row Drill-in Page

### Done
- [x] TASK-050 | feat: Payment & Approval History rows (with an amount) now navigate to a new full-page transaction detail view (vTxDetail, view 'tx') instead of doing nothing / opening the old asset-only modal | 2026-08-06 | feature
- [x] TASK-051 | feat: new segmented 3-stage progress bar (`.txpbar` — explicit exception to the earlier no-progress-bar rule, confirmed with user) pinned at the very top of the transaction detail page, showing Submitted → Checker → Approver all filled since historical entries are fully processed | 2026-08-06 | feature

Notes: replaced the old data-histasset → coldetail modal path entirely — asset-mode entries now show their collateral card inline on the same full-page tx detail view instead of a separate modal, alongside the transaction's date/action/mode/amount/submitter/channel/doc-count. Added S.tx={ent,idx,back} state and a 'tx' entry to the view dispatcher; back-crumb returns to wherever the row was clicked from (detail page or owner dashboard). Verified with `node --check`, dict symmetry (352/352), full regression suite (55 checks, zero JS errors), and a screenshot confirming the progress bar renders first on the page.

---

## Epic: Checker/Approver Task Page Cleanup

### Done
- [x] TASK-052 | fix: Checker/Approver task review page — remove the "Processing history" card (redundant with the new `.stepc` circle stepper already added at the top) and its "Waiting for your verification/approval" status line; right column now goes straight from evidence to the Decision card | 2026-08-06 | fix

Notes: removed the now-unused waitYouC/waitYouA dict keys and the dead `trail` local variable in vTask() (kept the `trail` dict key itself — still used by vDeclare's sidebar preview card). Verified with `node --check`, dict symmetry (350/350), full regression suite (55 checks, zero JS errors), and a screenshot confirming both elements are gone.

---

## Epic: Stepper Visual Match to Reference

### Done
- [x] TASK-053 | fix: restyle the `.stepc` circle stepper to match a reference screenshot — completed steps now show a checkmark (✓) instead of a number, the current step gets a scaled-up ring-highlighted circle, connecting lines color through completed segments; wrapped stepCircles() output in its own card for consistency with the rest of the page | 2026-08-06 | fix
- [x] TASK-054 | fix: replaced the segmented `.txpbar` bar on the transaction detail page with the same stepCircles() component used on the Checker/Approver task page, for one consistent stepper style app-wide; removed the now-unused `.txpbar`/`.txpbarlbl` CSS | 2026-08-06 | fix

Notes: verified with `node --check`, full regression suite (55 checks, zero JS errors), and screenshots of both usages (Checker task page, transaction detail page) confirming the checkmark/ring/colored-line styling matches the reference.

---

## Epic: Remove Capital Contribution Schedule & Declare-page Processing History

### Done
- [x] TASK-055 | fix: remove the "Capital contribution schedule" (instalment-card) section from the entity detail page entirely, for every role | 2026-08-06 | fix
- [x] TASK-056 | fix: remove the "Processing history" sidebar card from the Declare Capital Payment page (step 1, initial submission) so it no longer appears for any role — same card had already been cut from the Checker/Approver task page in a prior round | 2026-08-06 | fix

Notes: deleted the now-dead instalments()/instBadge() functions, `.insts`/`.inst`/`.law` CSS, and unused dict keys (capSched, lawNote, inst1, inst2, stWait, stOver, stReview, trail). Left the underlying e.insts data model and its mutations in approve/submit/return-for-correction handlers untouched since they don't cause errors and aren't rendered anywhere — pure internal state, not dead code with a visible symptom. Verified with `node --check`, dict symmetry (342/342), full regression suite (71 checks across smoke/flow/flow2, zero JS errors), and screenshots confirming both removals.

---

## Epic: Post-Push Cleanup & Scroll-Reset Bug

### Done
- [x] TASK-057 | fix: found a second "On verification" leftover — the `afterOk`/`afterSign` dict keys mistranslated a status-summary card/row on the declare form and task review page; removed both entirely per explicit follow-up instruction to leave nothing matching that label anywhere | 2026-08-06 | fix
- [x] TASK-058 | fix: every render() call recreated `.body` as a fresh DOM node, resetting its scrollTop to 0 — most noticeable when picking an Asset category partway down the Declare Capital Payment form and getting yanked back to the top. render() now saves/restores `.body`'s scrollTop when re-rendering the same view (keyed on view+mobile state), while still resetting scroll to top on genuine page navigation | 2026-08-06 | fix

Notes: also discovered and fixed the root cause of a longer-standing confusion this session — local edits across many prior rounds had never been pushed to git, so the live GitHub Pages link stayed frozen on an old commit the whole time. Committed and pushed (3cf8ddd..f027cb7) to sync the live site. Verified the scroll fix with a Playwright check that scrolls `.body` to 400px, changes the asset category select, and confirms scrollTop is unchanged — plus a second check confirming scrollTop still resets to 0 on real page navigation. Full regression suite (55 checks) still passes, zero JS errors.

---

## Epic: Declare Form Field Relevance & Doc Checklist

### Done
- [x] TASK-059 | fix: hide "Receiving account" and "Payment date" fields on the Declare Capital Payment form when mode is Assets — they only apply to cash transfers | 2026-08-06 | fix
- [x] TASK-060 | feat: add a document checklist above the upload dropzone (new docChecklist() helper, reuses MASTER.doctype) — cash mode lists deposit slip/transfer receipt/confirmation letter marked "choose at least 1", asset mode lists valuation report as Required and asset photos as Optional | 2026-08-06 | feature
- [x] TASK-061 | fix: made the "Finance & Penalties" row in Entity Information plain/non-clickable for every role — it navigated to the Finance page which not all roles even have in their sidebar, causing an inconsistent dead-end for some | 2026-08-06 | fix
- [x] TASK-062 | fix: strengthened the render() scroll-preservation fix with a synchronous + setTimeout(0) double-apply, to also override any late native browser focus-scroll adjustment on the freshly re-created `<select>` element | 2026-08-06 | fix

Notes: removed the now-dead data-gofinpen bind handler and its S.finTab='pen' shortcut. Verified with `node --check`, dict symmetry (344/344), full regression suite (55 checks, zero JS errors), and targeted Playwright checks: fDate/fAcct hidden in asset mode, checklist renders per mode, Finance & Penalties row has cursor:auto (not pointer), and a real click+keyboard select interaction only shows a ~40px native focus adjustment instead of a full jump to scrollTop 0.

---

## Epic: Doc Checklist Redundancy Fix

### Done
- [x] TASK-063 | fix: cash-mode document checklist repeated "Choose at least 1" on all 3 rows (looked silly) — now shown once as a group header above the 3 doc names, since they're interchangeable alternatives not individually-required items; asset mode keeps its per-item Required/Optional labels since those genuinely differ per document | 2026-08-06 | fix

Notes: verified with `node --check`, full regression suite (55 checks, zero JS errors), and screenshots of both modes confirming the new grouped layout.

---

## Epic: Unify Asset Checklist Style with Cash

### Done
- [x] TASK-064 | fix: asset-mode document checklist now uses the same bordered-box-with-header style as cash mode (header label + item name) instead of the old per-row Required/Optional badge layout, for visual consistency between the two modes | 2026-08-06 | fix

Notes: docChecklist(mode) now builds a list of [header, items] groups for both modes — cash has one "Choose at least 1" group with all 3 alternatives, asset has a "Required" group (valuation report) and an "Optional" group (asset photos) — rendered through the same box markup. Verified with `node --check`, full regression suite (55 checks, zero JS errors), and a screenshot confirming the match.

---

## Epic: Login Page Background Photo

### Done
- [x] TASK-065 | feat: set MOIC01.webp (MOIC building photo) as the background of the login page's left panel, with a dark gradient overlay so the existing white title/stats/verify-link text stays fully readable | 2026-08-06 | feature

Notes: image referenced as a plain file (MOIC01.webp, ~126KB) alongside index.html, same pattern as moic-logo.png — not embedded as a data URI. Verified with `node --check`, full regression suite (71 checks across smoke/flow/flow2, zero JS errors), and a screenshot confirming the photo renders behind the login copy with good contrast.

---

## Epic: Checklist Readability Fix (Round 2)

### Done
- [x] TASK-066 | fix: previous fix over-corrected — asset mode's two sparse single-item boxes looked as odd as cash's old repetition. Redesigned docChecklist() into one cohesive bordered box with checkbox-style (☐) rows per document; per-row Required/Optional labels only shown for asset mode where they genuinely differ, cash mode gets one "Choose at least 1" footer note since it's identical across all 3 alternatives | 2026-08-06 | fix

Notes: verified with `node --check`, full regression suite (55 checks, zero JS errors), and screenshots of both modes confirming the checklist now reads naturally.

---

## Epic: Return-for-Correction Modal

### Done
- [x] TASK-067 | fix: Checker/Approver's "Decision" card — Return button now opens a modal asking for the internal/external reason before returning the case, instead of showing always-visible inline textareas with a conditionally-disabled button on the page itself | 2026-08-06 | fix

Notes: new modal type 'backreason' reuses the same reasonIntTxt/reasonExtTxt ids and S.backReasonInt/Ext state, so the underlying return logic (mutating e.insts, pushing to e.hist, removing the task) is unchanged — only the trigger and validation-error surface moved into the modal (data-openback opens it, data-back now sets S.modal.err instead of just no-op'ing when the external reason is empty). Verified with `node --check`, full regression suite (55 checks, zero JS errors), a targeted Playwright test of the full block→fill→submit flow, and a screenshot of the modal.

---

## Epic: Return-for-Correction Visual Styling

### Done
- [x] TASK-068 | fix: "Return for correction" button styled red (new `.btn.danger` class); modal buttons relabeled to Confirm/Cancel with Confirm also styled red, to visually signal this is a destructive/negative action | 2026-08-06 | fix

Notes: added a reusable `.btn.danger` CSS class (background var(--bad), darker hover) rather than one-off inline styling, and a new `confirm` dict key. Verified with `node --check`, dict symmetry (345/345), full regression suite (55 checks, zero JS errors), and a screenshot confirming both the page button and modal Confirm button render red.

---

## Epic: Stepper Placement on Task Review Page

### Done
- [x] TASK-069 | fix: moved the circle stepper (Submitted → Checker → Approver) to the very top of the Checker/Approver task review page, above Entity Information — it was rendering below it | 2026-08-06 | fix

Notes: simple reorder in vTask()'s inner assembly; vTxDetail() already had the stepper first so no change needed there. Verified with `node --check`, full regression suite (55 checks, zero JS errors), and a screenshot confirming the stepper now renders first.

---

## Epic: Valuation Firm Job Detail — Modal to Full Page

### Done
- [x] TASK-070 | feat: In-network valuation firm's job detail is now a full page (new view 'valjobdetail', vValJobDetail()) instead of a modal — shows the collateral details the enterprise entered when declaring the asset (type, description, appraised value), documents, and the submission form, with a breadcrumb back to the Valuation Portal | 2026-08-06 | feature

Notes: replaced modal-scoped state (S.modal.val/files/err) with page-level S.valI/S.valForm; removed the old 'valjobfirm' modal type entirely rather than keeping both paths. Fixed a stale sidebar-highlight condition that referenced a 'valjobdetail' view for the wrong menu item (valQueue, staff-side) — corrected to target 'valfirm' (the firm's own menu item), which is what actually navigates there now. Verified with `node --check`, full regression suite (71 checks across smoke/flow/flow2, zero JS errors — updated flow.py's assertions from S.modal to S.valForm/S.view), and a full-page screenshot confirming the collateral card renders with the real land-title/appraisal data.

---

## Epic: Task Review Action Placement

### Done
- [x] TASK-071 | fix: moved Confirm & Sign / Return for correction buttons from the sidebar "Decision" card to a dedicated action bar at the very bottom of the Checker/Approver task review page — sized to content (not full-width blocks), right-aligned; the explanatory note stays in the sidebar for context near the top | 2026-08-06 | fix

Notes: kept the note text (checkerNote/approverNote) in place in the "Decision" sidebar card since it's contextual explanation, not an action — only the two buttons moved into a new full-width card below the evidence section. Verified with `node --check`, full regression suite (55 checks, zero JS errors), and a screenshot confirming both buttons render compact and bottom-anchored.

---
