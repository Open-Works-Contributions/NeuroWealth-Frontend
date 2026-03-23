# NeuroWealth Web Rebuild Issue Backlog

This list is for rebuilding the frontend as a **web app** that connects to the existing backend repo.

## Foundation

### Issue 1
**Title:** Re-initialize frontend with Next.js App Router and TypeScript

**Description:**
- Set up a clean Next.js frontend baseline
- Configure TypeScript, ESLint, and environment variable handling
- Define folder structure: app, components, features, lib, hooks

**Acceptance Criteria:**
- [ ] `npm run dev` starts locally
- [ ] TypeScript strict mode enabled
- [ ] Lint command runs successfully
- [ ] Base folder structure documented

**Labels:** `frontend`, `setup`, `priority-high`

---

### Issue 2
**Title:** Create design system and UI primitives

**Description:**
- Add base tokens (colors, spacing, typography)
- Build reusable components (Button, Input, Card, Badge, Modal)
- Add dark mode support and responsive behavior

**Acceptance Criteria:**
- [ ] Shared UI components available
- [ ] Mobile + desktop responsive
- [ ] Dark mode works
- [ ] Component usage examples documented

**Labels:** `frontend`, `ui`, `priority-high`

---

## Product Surfaces

### Issue 3
**Title:** Build landing page for NeuroWealth

**Description:**
- Create marketing/home page with value proposition
- Add sections: Overview, Features, Strategies, Security
- Add clear CTAs: Connect Wallet, Open Dashboard, Join Waitlist

**Acceptance Criteria:**
- [ ] Fully responsive landing page
- [ ] SEO metadata added
- [ ] Lighthouse performance baseline captured
- [ ] CTA links wired

**Labels:** `frontend`, `landing-page`, `priority-medium`

---

### Issue 4
**Title:** Build authenticated user dashboard shell

**Description:**
- Create layout with sidebar/top nav
- Add placeholders for portfolio, activity, strategy, and settings
- Support loading/empty/error states

**Acceptance Criteria:**
- [ ] Dashboard route protected
- [ ] Layout renders on desktop and mobile
- [ ] Skeleton/loading states implemented
- [ ] Error boundary for dashboard routes

**Labels:** `frontend`, `dashboard`, `priority-high`

---

### Issue 5
**Title:** Build portfolio overview widgets

**Description:**
- Show total balance, total yield, APY, and strategy
- Add asset allocation and recent activity cards
- Pull data from backend API endpoints

**Acceptance Criteria:**
- [ ] Summary cards populated from API
- [ ] Allocation and activity visible
- [ ] Empty states handled
- [ ] Formatting for currency/percentages consistent

**Labels:** `frontend`, `portfolio`, `priority-high`

---

### Issue 6
**Title:** Build deposit and withdrawal web flows

**Description:**
- Add forms for deposit and withdrawal
- Validate amount and wallet conditions
- Show transaction lifecycle (pending, success, failure)

**Acceptance Criteria:**
- [ ] Deposit flow works against backend
- [ ] Withdrawal flow works against backend
- [ ] Validation and error messaging clear
- [ ] Success receipts/tx references shown

**Labels:** `frontend`, `transactions`, `priority-high`

---

### Issue 7
**Title:** Build strategy selection and risk profile screen

**Description:**
- Provide Conservative, Balanced, Growth strategy cards
- Explain risk/APY expectations
- Save user strategy preference via backend API

**Acceptance Criteria:**
- [ ] User can view all strategies
- [ ] User can update preference
- [ ] Backend persistence confirmed
- [ ] Strategy change confirmation UX complete

**Labels:** `frontend`, `strategy`, `priority-medium`

---

### Issue 8
**Title:** Build transaction history and activity timeline

**Description:**
- Display deposits, withdrawals, and rebalancing activity
- Support pagination/filtering by type/date/status
- Link events to tx hash where available

**Acceptance Criteria:**
- [ ] History list loads from backend
- [ ] Filters and pagination function
- [ ] Tx hash/explorer links shown when present
- [ ] Loading and no-data states implemented

**Labels:** `frontend`, `activity`, `priority-medium`

---

## Integration

### Issue 9
**Title:** Integrate wallet connection (Freighter)

**Description:**
- Add wallet connect/disconnect actions
- Show connected address and network
- Gate sensitive actions behind wallet connection

**Acceptance Criteria:**
- [ ] Freighter connect/disconnect works
- [ ] Address/network displayed
- [ ] Transaction actions require connection
- [ ] Wallet errors handled

**Labels:** `frontend`, `wallet`, `stellar`, `priority-high`

---

### Issue 10
**Title:** Implement frontend API client for backend repo

**Description:**
- Create typed API layer for auth, portfolio, strategy, and tx endpoints
- Centralize error handling and retries
- Support environment-based base URLs

**Acceptance Criteria:**
- [ ] Typed API client utilities in place
- [ ] Shared error model across pages
- [ ] Retry strategy for transient failures
- [ ] Environment switching documented

**Labels:** `frontend`, `integration`, `api`, `priority-high`

---

### Issue 11
**Title:** Add realtime updates via websocket/events

**Description:**
- Subscribe to backend events for deposits, withdrawals, rebalancing
- Update dashboard widgets without full refresh
- Show toast notifications for important events

**Acceptance Criteria:**
- [ ] Realtime connection established
- [ ] Portfolio updates live
- [ ] Notifications displayed for major events
- [ ] Reconnect logic implemented

**Labels:** `frontend`, `realtime`, `priority-medium`

---

## Quality and Delivery

### Issue 12
**Title:** Create frontend testing strategy (unit + e2e)

**Description:**
- Add unit tests for critical components and hooks
- Add e2e coverage for login, deposit, withdrawal, strategy update
- Include CI checks

**Acceptance Criteria:**
- [ ] Unit tests configured and passing
- [ ] E2E smoke tests configured and passing
- [ ] CI runs frontend tests on PRs
- [ ] Critical user journeys covered

**Labels:** `frontend`, `testing`, `priority-medium`

---

### Issue 13
**Title:** Add observability and error monitoring on frontend

**Description:**
- Capture runtime errors and failed requests
- Add analytics events for core user actions
- Build a lightweight diagnostics panel for dev/staging

**Acceptance Criteria:**
- [ ] Error monitoring wired
- [ ] Core analytics events tracked
- [ ] Diagnostics usable in non-prod
- [ ] Privacy-safe telemetry defaults

**Labels:** `frontend`, `monitoring`, `priority-medium`

---

### Issue 14
**Title:** Prepare deployment for web frontend

**Description:**
- Configure build/deploy pipeline for frontend
- Add environment config for staging/production
- Document release checklist and rollback steps

**Acceptance Criteria:**
- [ ] Staging deploy works
- [ ] Production deploy process documented
- [ ] Env vars validated in CI
- [ ] Rollback instructions tested

**Labels:** `frontend`, `devops`, `priority-high`
