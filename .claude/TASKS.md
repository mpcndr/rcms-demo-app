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
