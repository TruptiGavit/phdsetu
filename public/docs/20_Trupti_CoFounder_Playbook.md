PhDSetu • Co-Founder Playbook

# Trupti Gavit

Co-Founder & Chief Technology Officer

The complete technical operating manual for building India's first dedicated career infrastructure platform for PhD scholars. From architecture decisions to deployment pipelines — everything the CTO needs, every single week. 

30

Month Roadmap

4

Build Phases

12

Playbook Sections

25K+

Target Users

IIT-B

B.Tech MEMS '19

// trupti.config.ts  
const cto = {  
  name: "Trupti Gavit",  
  role: "Co-Founder & CTO",  
  stack: ["Next.js", "Python", "AI/ML"],  
  mission: "Build PhDSetu",  
  ntseScholar: true,  
  ruralRoots: true,  
};  
export default cto; 

## ☰ Operating Manual Index

[01 Executive Summary & Role Definition](#sec1) [02 Phase-Wise Technical Task Plan](#sec2) [03 Technical Architecture Decisions](#sec3) [04 Weekly Development Routine](#sec4) [05 MVP Feature Specification](#sec5) [06 AI/ML Development Roadmap](#sec6) [07 DevOps & Infrastructure](#sec7) [08 Coordination with Co-Founders](#sec8) [09 Team Building (Technical)](#sec9) [10 Key Performance Indicators](#sec10) [11 Tools & Development Environment](#sec11) [12 90-Day Technical Roadmap Checklist](#sec12)

01

Role Definition

## Executive Summary & Role Definition

As Co-Founder & CTO, Trupti owns every line of code, every architectural decision, and every technical hire at PhDSetu. She is the bridge between the community's needs and the platform that serves them. 

🛠

### Trupti Gavit — CTO

Technical architecture, product development, AI/ML systems, platform engineering, DevOps, security & compliance. Builds the entire stack from database to deployment.

🌈

### Sonali — CEO

Community building, PhD scholar networking, user feedback pipeline, content strategy, external partnerships, and university relationships.

📊

### Radha — CSO

Strategy, market analysis, competitive positioning, go-to-market, business model design, fundraising narrative, and data-driven decision frameworks.

### Why Trupti Is Uniquely Qualified

#### Technical Depth

  * **B.Tech IIT Bombay** (MEMS, 2019) — rigorous engineering foundation
  * **NTSE Scholar** — proven aptitude from early years
  * **Full-stack developer:** Flutter, Next.js, React, Python, Supabase, Firebase
  * **AI pipeline builder:** LLM integration, NLP, prompt engineering
  * **Founder of KaryoSetu Technologies:** built and shipped a production platform



#### Lived Understanding

  * **Rural-born** from a farming family in Maharashtra — knows Tier 2/3 India firsthand
  * **Low-bandwidth empathy:** builds for users on 2G/3G networks, not fiber broadband
  * **Mother's sacrifice** funded her education — every feature she builds carries that weight
  * **Vision-to-code:** She builds what she envisions — both the code and the mission
  * **KaryoSetu** is a rural empowerment platform — she has done this before



⚡

#### Unique Advantage

Trupti understands both cutting-edge technology (AI pipelines, cloud infrastructure, modern web frameworks) AND the reality of underserved users (intermittent connectivity, low-end devices, vernacular needs). This dual perspective is PhDSetu's deepest technical moat — she will never build a platform that works only in metro cities.

### CTO Coordination Model

The three co-founders operate as a tightly coupled triad. Every technical decision connects to community feedback (Sonali) and strategic direction (Radha).

Flow | Source | To Trupti As | Trupti's Action  
---|---|---|---  
User Needs | Sonali (community feedback) | Feature requests, pain points, UX complaints | Translate into user stories, prioritize in sprint backlog  
Strategy | Radha (market analysis) | Competitive threats, partnership requirements, positioning | Evaluate technical feasibility, estimate effort, propose phasing  
Tech → Business | Trupti (architecture) | Technical constraints, timelines, trade-offs | Communicate in plain language; demo working prototypes  
Metrics | All three | KPIs, user growth, engagement data | Build analytics dashboards, present data weekly  
  
### Time Commitment

### Phase 0 (Months 1–3)

**8–10 hrs/week** — Part-time. Architecture planning, tech stack evaluation, schema design. Building community knowledge alongside Sonali.

### Phase 1+ (Month 4 onwards)

**Full-time** — 45–55 hrs/week. Hands-on coding, team management, sprint execution. PhDSetu becomes the primary professional commitment.

02

Development Phases

## Phase-Wise Technical Task Plan

A month-by-month, week-by-week breakdown of what Trupti builds across 30 months. From zero code to a scaled platform serving 25,000+ PhD scholars. 

P0

### Planning & Architecture

Foundation before code — decisions that shape everything

Months 1–3 • Part-Time

Month 1 • Weeks 1–2

#### Technology Stack Evaluation & Decision Document

  * Research and benchmark: Next.js vs. Remix vs. Nuxt for frontend (SSR/SSG needs)
  * Evaluate backend: NestJS (TypeScript ecosystem) vs. FastAPI (Python, AI synergy) vs. hybrid
  * Database comparison: PostgreSQL (relational strengths) + Redis (caching) vs. alternatives
  * Auth solutions: NextAuth.js vs. Firebase Auth vs. Supabase Auth vs. custom JWT
  * Hosting cost modeling: Vercel + Railway vs. AWS (EC2/ECS) vs. DigitalOcean
  * Write a formal `TECH_STACK_DECISION.md` with rationale for each choice
  * Review with Radha (cost implications) and Sonali (user-facing impact)



Month 1 • Weeks 3–4

#### Database Schema & API Specification

  * Design PostgreSQL schema: Users, ResearchPassports, Resources, Jobs, Forums, Messages
  * Define relationships, indexes, and migration strategy
  * Write OpenAPI 3.0 specification for all MVP endpoints (~40 endpoints)
  * Define authentication flows: signup, login, password reset, social auth
  * Document data privacy requirements (DPDP Act compliance from schema level)
  * Create ERD diagrams for co-founder review



Month 2

#### Design System & Wireframe Review

  * Create design tokens: colors, typography, spacing, shadows (Figma or code-first)
  * Build component library spec: buttons, inputs, cards, modals, navigation patterns
  * Review Sonali's wireframes — identify technical constraints early
  * Accessibility audit of design choices (WCAG 2.1 AA target)
  * Low-bandwidth design review: image sizes, font loading, critical CSS strategy
  * Mobile-first responsive breakpoints definition
  * Create UI component storybook plan



Month 3

#### Development Environment & DevOps Foundation

  * Repository setup: monorepo (Turborepo/Nx) or polyrepo decision
  * CI/CD pipeline: GitHub Actions for linting, testing, deployment
  * Coding standards document: ESLint, Prettier, commit conventions
  * Docker configuration for local development
  * Staging environment on Railway/Render
  * Environment variable management strategy
  * Testing framework setup: Jest/Vitest (unit), Playwright (E2E)
  * Database migration tooling: Prisma or Drizzle ORM setup



📄

#### Phase 0 Deliverables

Tech Stack Decision Document • PostgreSQL Schema + ERD • OpenAPI 3.0 Spec (~40 endpoints) • Design System Tokens • CI/CD Pipeline • Coding Standards Doc • Local Dev Environment

P1

### MVP Build & Beta Launch

Full-time development — ship the first version to real scholars

Months 4–8 • Full-Time

### Month 4 — Authentication & Research Passport

##### Week 1

  * Next.js project scaffold with TypeScript
  * NestJS/FastAPI backend scaffold
  * PostgreSQL + Prisma/Drizzle connection
  * Email/password authentication flow
  * JWT token management & refresh logic



##### Week 2

  * Social auth (Google, LinkedIn)
  * Email verification system
  * Password reset flow
  * Rate limiting on auth endpoints
  * Session management & security headers



##### Week 3

  * Research Passport: profile creation wizard
  * Fields: thesis title, domain, skills, publications
  * Profile photo upload (Cloudflare R2)
  * Profile completion progress indicator
  * Responsive profile view page



##### Week 4

  * Basic search: scholars by domain, university, skills
  * Search indexing setup
  * Public profile URLs (SEO-friendly slugs)
  * Integration tests for all auth flows
  * Code review session — establish review culture



### Month 5 — Resource Hub, Job Board & Community

##### Week 1

  * Resource Hub: CMS-like content model
  * Categories: CV guides, networking tips, industry insights
  * Rich text editor for content creation
  * Resource tagging & filtering system



##### Week 2

  * Job/Opportunity Board: listing model
  * Job posting form (for employers)
  * Job search with filters (domain, location, type)
  * Job save/bookmark functionality
  * Application tracking (applied, shortlisted, etc.)



##### Week 3

  * Community Forum: thread model, replies, upvotes
  * Forum categories aligned with PhD domains
  * Markdown support in posts
  * User @mentions and notifications



##### Week 4

  * Cross-feature integration testing
  * Mobile responsiveness pass on all new pages
  * Performance audit: Lighthouse score > 80
  * Bug fixing sprint + code quality review



### Month 6 — AI Career Translator v1 & Notifications

##### Week 1

  * AI Career Translator: architecture design
  * OpenAI API integration (GPT-4 or equivalent)
  * Prompt engineering: thesis → industry language
  * Input validation & safety guardrails



##### Week 2

  * Career Translator UI: input form, results display
  * Usage tracking & rate limiting (cost control)
  * Output caching (same inputs → cached results)
  * Feedback collection on AI output quality



##### Week 3

  * Notification system: in-app + email
  * Notification preferences per user
  * Email templates (transactional): welcome, job match, forum reply
  * Push notification groundwork (PWA service worker)



##### Week 4

  * Full integration test of AI pipeline
  * Load testing on AI endpoints
  * Fallback handling (API failures, timeouts)
  * Cost analysis: API spend per user interaction



### Month 7 — Employer Dashboard, Admin Panel & Analytics

##### Week 1

  * Employer Dashboard: company profile, job management
  * Employer authentication & role-based access
  * Applicant pipeline view per job listing



##### Week 2

  * Admin Panel: user management, content moderation
  * Admin dashboard with platform metrics
  * Feature flags for gradual rollout
  * Audit logging for admin actions



##### Week 3

  * Analytics integration: PostHog or Mixpanel
  * Custom event tracking (profile completion, job applications, AI usage)
  * Funnel analysis setup (signup → profile → first job application)



##### Week 4

  * Internal analytics dashboard for co-founders
  * Weekly report generation (automated)
  * User feedback collection mechanism (in-app)
  * Security audit of all dashboards (role-based access)



### Month 8 — Testing, Optimization & Beta Launch

##### Week 1

  * End-to-end testing: all critical user flows
  * Cross-browser testing (Chrome, Firefox, Safari, Edge)
  * Mobile device testing (Android Chrome, iOS Safari)
  * Accessibility audit (screen reader, keyboard navigation)



##### Week 2

  * Performance optimization: code splitting, lazy loading
  * Image optimization pipeline (WebP, responsive sizes)
  * Database query optimization (EXPLAIN ANALYZE)
  * CDN configuration (Cloudflare)



##### Week 3

  * Security hardening: OWASP top 10 review
  * DPDP Act compliance final audit
  * Penetration testing (basic)
  * Data backup & recovery test



##### Week 4

  * Beta launch to 100–200 scholars from community
  * Feedback collection & triage system
  * Monitoring dashboards go-live (Sentry, uptime)
  * On-call rotation setup for launch period
  * Post-launch retrospective with Sonali & Radha



🎯

#### Developer Hiring & Management (Months 5–8)

By Month 5, hire 2 junior-mid developers. Trupti leads sprint planning, writes tickets with clear acceptance criteria, reviews all PRs, and pair-programs on complex features. She codes ~60% of the time; the rest is architecture, review, and coordination. Developers own feature branches; Trupti owns `main`.

P2

### AI Features & Growth

Intelligent platform — from MVP to smart infrastructure

Months 9–18 • Full-Time

### Months 9–11: AI Engine Expansion

  * AI-powered CV/profile feedback engine — analyzes Research Passport and suggests improvements for industry readability
  * Skill-job matching algorithm — vector embeddings for semantic matching between scholar skills and job requirements
  * Thesis Abstract Analyzer — NLP pipeline that extracts transferable skills from thesis text
  * AI cost optimization: caching, batching, model selection per task
  * Bias testing framework for all AI outputs



### Months 12–14: Search & Vernacular

  * Elasticsearch or Meilisearch integration for full-text search across all content
  * Vernacular UI support — Hindi first, then Marathi, Telugu
  * i18n architecture: separate translation files, RTL readiness
  * Search autocomplete, fuzzy matching, domain-specific synonyms
  * Search analytics: what scholars search for → content strategy



### Months 15–16: Mobile & Analytics

  * Mobile responsiveness overhaul — PWA optimization for offline access
  * Analytics dashboard for community health (engagement, retention, cohort analysis)
  * A/B testing infrastructure (feature flags + analytics integration)
  * Application Performance Monitoring (APM) — Sentry performance tracing



### Months 17–18: Scale Infrastructure

  * Database optimization for 25K+ users (connection pooling, read replicas)
  * Horizontal scaling: containerization with Docker, orchestration readiness
  * CDN optimization for static assets across India
  * Rate limiting & DDoS protection hardening
  * Automated scaling policies and cost alerts



P3

### Scale & Native Apps

National platform — mobile-first, enterprise-ready

Months 19–30 • Full-Time

### Months 19–22: Native Mobile App

  * React Native or Flutter app (leverage Trupti's Flutter expertise)
  * Shared business logic between web and mobile
  * Offline-first architecture for intermittent connectivity
  * Push notifications (FCM/APNs integration)
  * App store optimization (ASO) for Play Store & App Store



### Months 23–25: Microservices & Real-Time

  * Microservices migration where needed (AI service, notification service, search service)
  * Real-time features: WebSocket-based chat, live notifications
  * Event-driven architecture (message queues for async processing)
  * Advanced AI: thesis-to-industry translator with domain-specific fine-tuning



### Months 26–28: Enterprise & Multi-Region

  * Multi-region deployment (primary India, CDN global)
  * Enterprise API for employers (bulk job posting, candidate search, ATS integration)
  * SLA dashboard for enterprise clients
  * Advanced analytics: PhD Career Report data pipeline



### Months 29–30: Hardening & Future

  * Security audit by external firm
  * Performance benchmarking at scale (100K+ users readiness)
  * Technical debt cleanup sprint
  * Architecture documentation for future CTO succession
  * Open-source contribution strategy (developer community)



03

Architecture

## Technical Architecture Decisions

Key technology choices Trupti must evaluate, decide, and document. Each decision includes the options, trade-offs, and the recommended pick based on PhDSetu's constraints. 

Frontend

**Next.js (SSR/SSG)** for SEO on public pages, React SPA patterns for authenticated dashboard. Best of both worlds — server rendering for discoverability, client-side interactivity for the app.

Next.js 14+ (App Router)

Backend

**NestJS** (TypeScript, shared types with frontend) vs. **FastAPI** (Python, native AI/ML synergy). Recommended: NestJS for core API + FastAPI microservice for AI endpoints — leverages both ecosystems.

NestJS + FastAPI (AI)

Database

**PostgreSQL** — robust relational DB for structured data (profiles, jobs, forums). Add **Redis** for session caching, rate limiting, and frequently-accessed data. pgvector extension for AI embeddings.

PostgreSQL + Redis

Search

**Meilisearch** (simpler ops, typo-tolerant, fast setup) vs. **Elasticsearch** (more powerful, higher ops burden). Start with Meilisearch; migrate to Elasticsearch if scale demands it.

Meilisearch → ES

AI / LLM

**OpenAI API** (best quality, higher cost) vs. **Open-source** (Llama, Mistral — lower cost, self-hosted) vs. **Hybrid**. Start with OpenAI for quality; add open-source for cost-sensitive features.

Hybrid (OpenAI + OSS)

File Storage

**Cloudflare R2** (S3-compatible, zero egress fees) — ideal for a budget-conscious startup. Profile photos, resumes, resources. Signed URLs for private files.

Cloudflare R2

Authentication

**NextAuth.js** (tight Next.js integration, multiple providers) with custom JWT layer. Social login via Google + LinkedIn. Passwordless (magic link) as secondary option.

NextAuth.js + JWT

Hosting

**Vercel** (frontend — zero-config Next.js) + **Railway** (backend + DB + Redis — simple scaling, good free tier). Migrate to AWS (ECS/Fargate) in Phase 3 if needed.

Vercel + Railway

CDN

**Cloudflare** — free tier covers most needs. DDoS protection, edge caching, SSL, analytics. Indian PoPs for low latency in Tier 2/3 cities.

Cloudflare

Monitoring

**Sentry** (error tracking + performance) + **Uptime Kuma** (self-hosted uptime monitoring) or Better Uptime. Alerts to Slack.

Sentry + Uptime Kuma

Analytics

**PostHog** (open-source, self-hostable, feature flags + analytics in one) vs. Mixpanel (better UX, higher cost). PostHog for budget and flexibility.

PostHog

ORM

**Prisma** (mature, great DX, auto-generated types) vs. **Drizzle** (lighter, SQL-first). Prisma for team productivity; Drizzle if performance is critical later.

Prisma ORM

📚

#### Decision Document Template

For every architecture decision, Trupti writes a lightweight ADR (Architecture Decision Record): `Context → Options → Decision → Consequences`. These live in `/docs/adr/` in the repo and are the single source of truth for "why we chose X."

### System Architecture Overview
    
    
    ┌─────────────────────────────────────────────────────────────┐
    │                     PHDSETU ARCHITECTURE                    │
    ├─────────────────────────────────────────────────────────────┤
    
      Client Layer
      ├── Next.js PWA (SSR + SPA)  ──→  Vercel Edge
      ├── Flutter Mobile App (Phase 3)
      └── Employer Portal (Next.js)
    
      CDN & Edge
      └── Cloudflare (Cache, DDoS, SSL, R2 Storage)
    
      API Gateway
      └── NestJS (REST + GraphQL optional)
          ├── Auth Module (NextAuth + JWT)
          ├── User Module (Research Passport)
          ├── Resource Module (Content CMS)
          ├── Jobs Module (Board + Applications)
          ├── Forum Module (Threads + Replies)
          ├── Notification Module (Email + Push)
          └── Admin Module (Dashboard + Moderation)
    
      AI Service (FastAPI microservice)
      ├── Career Translator (LLM)
      ├── CV Feedback Engine
      ├── Skill-Job Matcher (pgvector)
      └── Thesis Analyzer (NLP)
    
      Data Layer
      ├── PostgreSQL (Primary DB + pgvector)
      ├── Redis (Cache + Sessions + Rate Limiting)
      └── Meilisearch (Full-text Search)
    
      Observability
      ├── Sentry (Errors + Performance)
      ├── PostHog (Analytics + Feature Flags)
      └── Uptime Kuma (Health Monitoring)
    

04

Weekly Cadence

## Weekly Development Routine

Trupti's optimized weekly rhythm — balancing deep coding, AI work, team coordination, and co-founder alignment. Open this every Monday morning. 

MONDAY

#### Sprint Planning & Architecture

09:00–10:30 Sprint planning: review backlog, assign stories, set week's goals  
10:30–12:00 Code review: review all pending PRs from developers  
13:00–14:00 Architecture decisions / tech debt review  
14:00–18:00 Feature development (focus block) 

TUESDAY

#### Deep Work — Core Feature Development

09:00–13:00 Core feature development (no meetings, no Slack)  
14:00–18:00 Core feature development continued  
NO-MEETING DAY   
_Silence notifications. Deep flow state. This is where the hardest code gets written._

WEDNESDAY

#### Development + User Feedback Sync

09:00–12:00 Core feature development  
12:00–13:00 Standup with Sonali: user feedback relay, community insights, feature requests  
14:00–16:00 Translate feedback into tickets / adjust current sprint  
16:00–18:00 Development or pair programming with developers 

THURSDAY

#### AI/ML Work & Integration Testing

09:00–13:00 AI/ML development: model tuning, prompt engineering, pipeline work  
14:00–16:00 Integration testing: test feature interactions, API contracts  
16:00–18:00 Bug triage and fixes from testing 

FRIDAY

#### Review, Documentation & Strategy Sync

09:00–11:00 Code review: all remaining PRs must be merged or returned  
11:00–12:30 Documentation: API docs, architecture notes, README updates  
13:30–14:30 Weekly sync with Radha: strategy alignment, metric review, roadmap check  
14:30–16:00 Sprint retrospective (bi-weekly) or tech debt work  
16:00–17:00 Next week's sprint pre-planning 

💡

#### Time Discipline Rules

**Tuesday is sacred.** No meetings, no Slack, no calls. This is the only way to get 8 hours of uninterrupted deep work. Protect it fiercely.  
**Meetings are capped:** max 2 hours of meetings per day (except Monday). If it can be async, it should be async.  
**Coding target:** 25–30 hours/week of actual coding time (Phase 1). This drops to 15–20 hours as team grows.

05

Product Spec

## MVP Feature Specification

Detailed specification for every feature in the MVP. For each: user stories, data model outline, key API endpoints, and UI components. 

👤

### Research Passport (Scholar Profile)

#### User Stories

  * As a PhD scholar, I can create a comprehensive profile that translates my research into industry-readable language
  * As a scholar, I can track my profile completion percentage and get guidance on what to add
  * As an employer, I can view a scholar's Research Passport and understand their skills at a glance
  * As a scholar, I can generate a shareable public URL for my profile



#### Data Model

`ResearchPassport`: user_id (FK), thesis_title, thesis_abstract, research_domain, university, department, advisor_name, enrollment_year, expected_completion, skills[] (JSON), publications[] (JSON), work_experience[] (JSON), profile_photo_url, linkedin_url, google_scholar_url, video_pitch_url, profile_slug (unique), completion_score (computed), created_at, updated_at

#### API Endpoints

  * `POST /api/passport` — Create Research Passport
  * `GET /api/passport/:slug` — Get public profile
  * `PATCH /api/passport/:id` — Update profile fields
  * `POST /api/passport/:id/photo` — Upload profile photo
  * `GET /api/passport/search?q=&domain;=&university;=` — Search scholars



#### UI Components

  * Multi-step profile creation wizard (5 steps with progress indicator)
  * Profile view page (public — responsive card layout)
  * Profile edit page (inline editing with auto-save)
  * Skill tag input with autocomplete (curated skill taxonomy)
  * Publication list with DOI auto-fetch



📚

### Resource Hub (Curated Career Resources)

#### User Stories

  * As a scholar, I can browse curated career resources organized by category and relevance
  * As a scholar, I can save resources to my personal reading list
  * As an admin, I can create, edit, and publish resources with rich text and media
  * As a scholar, I can upvote helpful resources to surface the best content



#### Data Model

`Resource`: id, title, slug, content (rich text), summary, category_id (FK), tags[] (JSON), author_id (FK), featured_image_url, external_url, resource_type (article | guide | template | video), upvote_count, view_count, status (draft | published | archived), published_at, created_at, updated_at

#### API Endpoints

  * `GET /api/resources?category=&type;=&sort;=` — List resources with filters
  * `GET /api/resources/:slug` — Get single resource
  * `POST /api/resources` — Create resource (admin only)
  * `POST /api/resources/:id/upvote` — Upvote resource
  * `POST /api/resources/:id/save` — Save to reading list



#### UI Components

  * Resource grid with category sidebar navigation
  * Resource detail page with related resources sidebar
  * Reading list page (saved resources)
  * Admin: rich text editor (Tiptap/Editor.js) with image upload



💼

### Job / Opportunity Board

#### User Stories

  * As a scholar, I can search jobs filtered by domain, location, type (postdoc, industry, PSU, startup)
  * As a scholar, I can apply to jobs and track my application status
  * As an employer, I can post job listings with PhD-specific requirements
  * As a scholar, I can set job alerts for my preferred domains and locations



#### Data Model

`Job`: id, title, description (rich text), company_id (FK), location, remote_policy (onsite | remote | hybrid), job_type (postdoc | industry | psu | startup | faculty | research), domain_tags[], required_skills[], salary_range, application_deadline, external_apply_url, status, posted_by, created_at

`Application`: id, job_id (FK), user_id (FK), cover_letter, resume_url, status (applied | reviewed | shortlisted | rejected | hired), applied_at

#### API Endpoints

  * `GET /api/jobs?domain=&location;=&type;=&sort;=` — Search jobs
  * `POST /api/jobs` — Post job (employer only)
  * `POST /api/jobs/:id/apply` — Apply to job
  * `GET /api/applications` — Scholar's application history
  * `POST /api/alerts` — Create job alert subscription



#### UI Components

  * Job listing page with filter sidebar (domain, location, type, salary range)
  * Job detail page with company info, apply button, save button
  * Application tracker dashboard (kanban-style status board)
  * Employer: job posting form with preview



💬

### Community Forum

#### User Stories

  * As a scholar, I can post questions and discussions in domain-specific categories
  * As a scholar, I can reply to threads, upvote answers, and @mention peers
  * As a mentor, I can provide guidance and have my responses highlighted
  * As a user, I receive notifications when someone replies to my thread



#### Data Model

`Thread`: id, title, body (markdown), category_id, author_id, tags[], upvote_count, reply_count, is_pinned, is_locked, last_activity_at, created_at

`Reply`: id, thread_id (FK), author_id (FK), body (markdown), upvote_count, is_accepted, parent_reply_id (for nesting), created_at

#### API Endpoints

  * `GET /api/forum/threads?category=&sort;=` — List threads
  * `POST /api/forum/threads` — Create thread
  * `POST /api/forum/threads/:id/replies` — Reply to thread
  * `POST /api/forum/:type/:id/upvote` — Upvote thread or reply



🤖

### AI Career Translator v1

#### User Stories

  * As a scholar, I can input my thesis title and abstract and receive an industry-readable translation of my skills
  * As a scholar, I can see suggested job roles that match my research expertise
  * As a scholar, I can rate the AI output to improve future results



#### Data Model

`TranslationRequest`: id, user_id (FK), input_text, input_type (thesis_abstract | skill_description | cv_text), output_text, suggested_roles[], model_used, tokens_used, feedback_rating (1-5), created_at

#### API Endpoints

  * `POST /api/ai/translate` — Submit text for career translation
  * `GET /api/ai/translate/:id` — Get translation result
  * `POST /api/ai/translate/:id/feedback` — Rate output quality
  * `GET /api/ai/usage` — User's AI usage stats (rate limit info)



#### UI Components

  * Translation wizard: paste thesis abstract → loading animation → results card
  * Results display: translated skills, suggested roles, industry keywords
  * Feedback widget: thumbs up/down + optional comment
  * Usage meter showing remaining free translations



⚙

### Admin Dashboard

#### User Stories

  * As an admin, I can view platform-wide metrics (users, jobs, applications, AI usage)
  * As an admin, I can manage users (suspend, verify, change roles)
  * As an admin, I can moderate forum content and reported items
  * As an admin, I can manage feature flags for gradual rollout



#### Key Metrics Dashboard

  * Total users, daily/weekly active users, new signups trend
  * Profile completion rates, job application rates
  * AI usage and cost tracking
  * Community health: posts per day, reply rate, time to first response



🏢

### Employer Portal (Basic)

#### User Stories

  * As an employer, I can create a company profile with logo, description, and culture info
  * As an employer, I can post PhD-relevant jobs and manage their lifecycle
  * As an employer, I can view and filter applicants for each job listing
  * As an employer, I can search the scholar database by skills and domain



#### API Endpoints

  * `POST /api/employers/register` — Register employer account
  * `GET /api/employers/:id/dashboard` — Employer metrics
  * `GET /api/employers/:id/jobs/:jobId/applicants` — View applicants
  * `PATCH /api/applications/:id/status` — Update application status



06

Artificial Intelligence

## AI/ML Development Roadmap

PhDSetu's AI systems are the platform's deepest competitive moat. This roadmap covers architecture, prompt engineering, model selection, evaluation, and cost control for every AI feature. 

### AI Career Translator — Deep Dive

#### Architecture

  * **Input pipeline:** Thesis abstract / skill description → preprocessing (cleanup, tokenization check) → prompt construction → LLM API call → response parsing → output formatting
  * **Prompt engineering:** System prompt establishes role as "PhD-to-Industry career translator." Few-shot examples from real BARC-to-Momentive, lab-to-startup transitions. Chain-of-thought for complex translations.
  * **Output structure:** JSON with fields: translated_summary, key_skills (industry language), suggested_roles (3–5), industry_keywords, confidence_score
  * **Caching layer:** Redis cache with semantic similarity key (hash of normalized input). Cache hit ratio target: >30% within 6 months.



#### Fine-Tuning Plan

  * **Phase 1:** Pure prompt engineering with GPT-4. Collect user feedback data (thumbs up/down, corrections).
  * **Phase 2:** After 1,000+ rated translations, fine-tune an open-source model (Llama 3 / Mistral) on the feedback-corrected dataset.
  * **Phase 3:** A/B test fine-tuned model vs. GPT-4 on quality. Switch cost-sensitive endpoints to fine-tuned model.



### CV Feedback Engine

  * **How it works:** Scholar uploads CV (PDF/DOCX) → text extraction → section detection (education, research, skills) → LLM analysis → structured feedback
  * **Feedback areas:** Industry readability score, missing sections, skills translation quality, action verb usage, quantification opportunities
  * **Models:** GPT-4 for quality feedback; open-source NER model for section detection (spaCy or Hugging Face)
  * **Privacy:** CVs processed in-memory, not stored permanently. User explicitly consents to processing.



### Skill-Job Matching

  * **Algorithm:** Vector embeddings (OpenAI ada or sentence-transformers) for both scholar skills and job requirements
  * **Storage:** pgvector extension in PostgreSQL for efficient similarity search
  * **Matching pipeline:** Generate embeddings on profile save / job post → cosine similarity search → rank by score → filter by location/type preferences
  * **Delivery:** Weekly "Jobs For You" email digest + in-app notification for high-match (>0.85 similarity) jobs



### Thesis Abstract Analyzer

  * **NLP pipeline:** Input thesis abstract → NER (extract technologies, methodologies, materials) → keyword extraction (RAKE/TF-IDF) → domain classification → skill mapping
  * **Output:** Transferable skills list, related industry domains, similar scholars (vector similarity on abstracts)
  * **Tech:** spaCy + custom NER model trained on 500+ annotated thesis abstracts. Hugging Face Transformers for domain classification.



### Bias Testing & Evaluation

  * **Bias testing:** Test AI outputs across gender, university tier, domain, geography. Flag systematic disparities.
  * **Evaluation metrics:** Human rating accuracy (target: 4.0+/5.0), role suggestion relevance (hit rate), translation coherence (BLEU-like metric)
  * **A/B framework:** Every AI feature has a control path. Measure engagement lift: do AI-translated profiles get more employer views?
  * **Cost tracking:** Per-feature API cost dashboard. Alert if any feature exceeds budget by 20%.



💰

#### AI Cost Optimization Strategy

**Rate limiting:** 5 free career translations/month for basic users, unlimited for premium. **Caching:** Cache identical/similar requests (semantic hash). **Model routing:** Use GPT-3.5/Mistral for simple tasks, GPT-4 only for complex translations. **Batching:** Batch embedding generation (profiles + jobs) in overnight cron jobs. **Target:** <₹2 per AI interaction at scale.

07

Infrastructure

## DevOps & Infrastructure

Everything that keeps PhDSetu running reliably, securely, and within budget. From CI/CD to compliance. 

### CI/CD Pipeline Design
    
    
    # .github/workflows/deploy.yml — Simplified view
    
    name: PhDSetu CI/CD
    
    on:
      push: { branches: [main, staging] }
      pull_request: { branches: [main] }
    
    jobs:
      lint-and-test:
        ├── ESLint + Prettier (code quality)
        ├── TypeScript type-check (tsc --noEmit)
        ├── Unit tests (Vitest, coverage > 80%)
        └── E2E tests (Playwright, critical flows)
    
      build:
        ├── Next.js build (SSR pages, static assets)
        ├── NestJS build (compiled TypeScript)
        └── Docker image (backend + AI service)
    
      deploy-staging:  (on push to staging)
        ├── Vercel Preview (frontend)
        └── Railway Staging (backend + DB)
    
      deploy-production:  (on push to main)
        ├── Vercel Production (frontend)
        ├── Railway Production (backend)
        ├── DB Migration (Prisma migrate)
        └── Sentry Release (source maps upload)
    

### Security Hardening Checklist

### Application Security

  * HTTPS everywhere (Cloudflare SSL)
  * CORS configured for allowed origins only
  * Rate limiting on all public endpoints (Redis-backed)
  * Input validation (Zod schemas on every endpoint)
  * SQL injection prevention (parameterized queries via ORM)
  * XSS prevention (React's built-in escaping + CSP headers)
  * CSRF protection (SameSite cookies + CSRF tokens)
  * Security headers: HSTS, X-Frame-Options, X-Content-Type-Options



### Data & DPDP Act Compliance

  * Data minimization: only collect what's needed
  * Consent management: explicit opt-in for data processing
  * Data access requests: API for users to download their data
  * Right to erasure: full account deletion within 72 hours
  * Data encryption at rest (PostgreSQL + Cloudflare R2)
  * PII anonymization in logs (structured logging, no raw PII)
  * Data processing register (who accesses what data, when)
  * Privacy policy generated from actual data practices



### Database Backup & Recovery

Strategy| Frequency| Retention| Tool  
---|---|---|---  
Automated snapshot| Daily at 02:00 IST| 30 days| Railway / pg_dump  
WAL archiving| Continuous| 7 days| PostgreSQL WAL  
Cross-region backup| Weekly| 90 days| Cloudflare R2  
Recovery test| Monthly| —| Restore to staging  
  
### Monitoring & Alerting

### Error Tracking

**Sentry** — captures frontend and backend exceptions with full stack traces. Source maps uploaded on deploy. Alert on new error types immediately.

### Uptime Monitoring

**Uptime Kuma** (self-hosted) — monitors API health, database, Redis, search. Alerts to Slack and email within 1 minute of downtime.

### Performance / APM

**Sentry Performance** — transaction tracing for slow API endpoints. Track P50/P95/P99 latencies. Alert if P95 > 500ms.

### Cost Tracking

💲

#### Monthly Infrastructure Budget (Phase 1)

Vercel Pro: ~$20/mo • Railway (backend + DB + Redis): ~$25–40/mo • Cloudflare (free tier): $0 • Sentry (team): ~$26/mo • OpenAI API: ~$50–100/mo • Meilisearch Cloud: ~$30/mo • Total target: **< $200/month** for the first 5,000 users. Track weekly, alert if any service spikes >30%.

08

Co-Founder Ops

## Coordination with Co-Founders

PhDSetu has three co-founders with distinct domains. Trupti's success depends on clean communication channels with Sonali and Radha. 

S

#### Sonali (CEO) → Trupti: User Requirements Pipeline

  * **Weekly standup (Wednesday 12:00):** Sonali shares community feedback, top user complaints, feature requests from WhatsApp/LinkedIn group
  * **Format:** Sonali fills a shared Notion template: "User said X → They need Y → Suggested priority (high/medium/low)"
  * **Trupti's action:** Convert into user stories with acceptance criteria within 48 hours. Respond with feasibility + effort estimate.
  * **Rule:** If a request touches more than 3 days of dev work, Trupti schedules a 30-min deep dive with Sonali before committing
  * **Escalation:** If Sonali reports a critical bug from users, Trupti treats it as P0 — same-day investigation



R

#### Radha (CSO) → Trupti: Strategy-to-Tech Translation

  * **Weekly sync (Friday 13:30):** Radha shares strategic priorities, competitive intelligence, partnership requirements
  * **Example:** Radha says "Employer X wants API access for bulk hiring." Trupti evaluates: build now vs. later, effort, architecture impact.
  * **Trupti's action:** Translate strategic goals into technical milestones. Push back with data if timeline is unrealistic.
  * **Rule:** Every strategy item gets a technical feasibility score: 1 (easy, <1 week) to 5 (hard, needs architecture change)
  * **Shared artifact:** Quarterly roadmap doc where strategy goals map to sprint epics



### Sprint Demo Format

Every 2 weeks, Trupti runs a 30-minute sprint demo for Sonali and Radha. The format is designed for non-technical co-founders:

  1. **What we built (10 min):** Live demo of new features. Sonali and Radha click through themselves. No slides, only the real product.
  2. **What we learned (5 min):** Key metrics from analytics. User behavior insights. AI accuracy improvements.
  3. **What's next (5 min):** Next sprint's priorities. Any trade-offs or decisions needed from CEO/CSO.
  4. **Blockers (5 min):** Anything Trupti needs from Sonali (community data) or Radha (strategic clarity).
  5. **Open Q &A; (5 min):** Co-founders ask questions. Trupti explains in plain language — no jargon.



### Communicating Technical Constraints

### Instead of Saying This...

  * "The API rate limit on the LLM provider creates a bottleneck in the async processing pipeline"
  * "We need to refactor the database schema to support polymorphic associations"
  * "The CI/CD pipeline is failing due to a flaky E2E test in the auth module"



### Say This Instead

  * "The AI tool can only handle 50 users at once right now. We need 2 days to make it handle 500."
  * "Adding employer profiles requires a 3-day rework of how we store data. Worth it — saves 2 weeks later."
  * "Our automated testing caught a bug. I'm fixing it today. No impact on users."



### When to Push Back on Feature Requests

✋

#### Trupti's Push-Back Framework

**Push back when:** The request contradicts the current phase's priorities, would take >2 weeks, requires architecture changes, or has no clear user benefit yet. **How:** "I understand why this matters. Here's what it would cost us in time and what we'd delay. Can we revisit this in Phase X instead?" **Never:** Say "no" without offering an alternative or timeline. Always give Sonali/Radha a path forward. 

09

Engineering Culture

## Team Building (Technical)

From solo developer to engineering team. How Trupti hires, onboards, reviews, and builds a culture of quality. 

### Hiring Developers

### Interview Process (4 stages)

  1. **Resume screen (15 min):** Look for: any project shipped to real users, GitHub activity, willingness to learn. Ignore: college tier. PhDSetu hires for capability, not credentials.
  2. **Technical screen (45 min, async):** Small take-home: build a mini CRUD API or a UI component matching a design. Evaluate: code quality, testing, documentation, Git usage.
  3. **Pair programming (60 min, live):** Build a feature together on a real PhDSetu codebase branch. Evaluate: how they think, ask questions, handle ambiguity, communicate.
  4. **Culture fit (30 min, with Sonali):** Do they care about the mission? Are they empathetic to underserved users? Can they work in a startup environment?



### Code Review Standards

### PR Requirements

  * Every PR must have a description: what changed, why, how to test
  * All PRs require at least 1 review (Trupti reviews all in early stages)
  * No PRs larger than 400 lines (break into smaller PRs)
  * All tests must pass before merge (enforced by CI)
  * No `console.log`, no hardcoded secrets, no TODO without issue link



### Review Culture

  * Reviews are learning opportunities, not gatekeeping
  * Ask questions ("Why did you choose X?") rather than dictate ("Use Y instead")
  * Approve with suggestions when changes are minor
  * Target review turnaround: <4 hours during work hours
  * Pair-program on complex PRs instead of async review



### Onboarding New Developers

Day| Activity| Owner  
---|---|---  
Day 1| Environment setup (Docker, repo clone, env vars). Walk through architecture doc. First build & run.| Trupti  
Day 2| Codebase tour: folder structure, key modules, data flow. Read API spec. Ask questions.| Trupti  
Day 3| First "good first issue" — small bug fix or UI tweak. Submit first PR.| New dev  
Day 4-5| Pair programming on a real feature. Learn review process. Attend standup.| Trupti + New dev  
Week 2| Own a small feature end-to-end. Write tests. Get reviewed. Ship to staging.| New dev  
Week 3-4| Full sprint participation. Own 2–3 stories per sprint. Autonomous PR submission.| New dev  
  
### Technical Debt Management

⚒

#### The 20% Rule

Every sprint reserves 20% of capacity for tech debt reduction. This is non-negotiable — even during launch crunch. Tech debt items are tracked in the backlog with a tech-debt label. Prioritized by: impact on developer velocity, risk of production issues, and effort to fix. Trupti reviews the tech debt backlog monthly and escalates if it grows beyond 30 items.

### Documentation Requirements

  * **API documentation:** Auto-generated from OpenAPI spec (Swagger UI). Updated with every endpoint change.
  * **Architecture Decision Records (ADRs):** Written for every significant technical choice. Stored in `/docs/adr/`.
  * **README.md:** Always up-to-date with setup instructions, environment variables, and development workflow.
  * **Inline code comments:** Only for non-obvious logic. No narration of what code does — code should be self-documenting.
  * **Runbook:** For production incidents — step-by-step guides for common issues (DB connection failures, API rate limits, deployment rollbacks).



10

Metrics

## Key Performance Indicators

What Trupti measures weekly to ensure the platform is healthy, fast, and reliable. Every number has a target and an alert threshold. 

80%+

Test Coverage

Alert if < 70%

99.5%

Platform Uptime

Alert if < 99%

<2s

Page Load (P95)

Alert if > 3s

<200ms

API Response (P95)

Alert if > 500ms

90+

Lighthouse Score

Alert if < 80

<4h

Bug Resolution (P1)

Alert if > 8h

4.0+

AI Accuracy (out of 5)

Alert if < 3.5

20+

Sprint Velocity (pts/sprint)

Track trend, not absolute

### KPI Monitoring Schedule

Metric Category| Frequency| Tool| Reviewed With  
---|---|---|---  
Sprint velocity & burn-down| Daily| GitHub Projects / Linear| Development team  
Bug count & resolution time| Daily| Sentry + GitHub Issues| Trupti (self-review)  
Uptime & API latency| Real-time (alerts)| Uptime Kuma + Sentry| Trupti (on-call)  
Test coverage| Every PR (automated)| CI/CD pipeline| Code reviewer  
Page load performance| Weekly| Lighthouse CI + PostHog| Trupti  
AI accuracy & cost| Weekly| Custom dashboard| All co-founders (Friday sync)  
Infrastructure cost| Weekly| Vercel/Railway billing| Radha (budget alignment)  
User-reported issues| Via Sonali (Wednesday sync)| Notion + Slack| Sonali → Trupti  
  
11

Tooling

## Tools & Development Environment

The complete toolkit for PhDSetu engineering — from IDE to deployment to AI development. 

💻

### IDE: VS Code / Cursor

Extensions: ESLint, Prettier, Prisma, Tailwind CSS IntelliSense, GitLens, Error Lens, Thunder Client (API testing), GitHub Copilot

🛠

### Version Control: GitHub

Branch strategy: `main` (prod) → `staging` (test) → `feature/*` (dev). PR-based workflow. Protected branches with required reviews.

📋

### Project Management: Linear

Cycles (sprints), issues with labels (feature, bug, tech-debt), roadmap view. GitHub integration for auto-linking PRs to issues.

💬

### Communication: Slack

Channels: #engineering, #deploys (CI/CD notifications), #alerts (Sentry + uptime), #general. Async-first culture.

🎨

### Design Handoff: Figma

Shared design system with dev-friendly tokens. Inspect mode for spacing/colors. Comment threads for design discussions.

📝

### Documentation: Notion

Team wiki: architecture docs, meeting notes, decisions log. Public-facing: changelog. Also consider GitHub Wiki for code-adjacent docs.

🤖

### AI Dev: Jupyter + Python

Jupyter notebooks for prompt engineering experiments. Python virtualenv with: openai, langchain, transformers, spacy, pandas, numpy.

📦

### Containerization: Docker

Docker Compose for local dev (PostgreSQL, Redis, Meilisearch, backend). Production: Docker images deployed via Railway.

🔎

### API Testing: Postman / Bruno

API collection for all endpoints. Environment variables for local/staging/prod. Automated test suites for regression testing.

12

First 90 Days

## 90-Day Technical Roadmap Checklist

30 specific, actionable tasks for the first 90 days. Print this. Check them off. This is the critical path to MVP. 

### Days 1–30: Foundation

  * ✓ **1.** Finalize and document technology stack decision (Next.js, NestJS, PostgreSQL, Redis)
  * ✓ **2.** Design complete PostgreSQL schema with ERD — all tables, relationships, indexes
  * ✓ **3.** Write OpenAPI 3.0 specification for all MVP endpoints (~40 endpoints)
  * ✓ **4.** Set up GitHub organization, repositories, branch protection rules
  * ✓ **5.** Configure CI/CD pipeline (GitHub Actions: lint, test, build, deploy)
  * ✓ **6.** Create Docker Compose file for local development environment
  * ✓ **7.** Set up coding standards: ESLint config, Prettier config, commit message format (Conventional Commits)
  * ✓ **8.** Create design tokens document / Tailwind config aligned with Figma designs
  * ✓ **9.** Set up staging environment (Vercel preview + Railway staging)
  * ✓ **10.** Write comprehensive README with setup instructions, architecture overview, contribution guide



### Days 31–60: Core Build

  * ✓ **11.** Implement authentication: email/password + Google + LinkedIn OAuth
  * ✓ **12.** Build Research Passport: profile creation wizard (5 steps)
  * ✓ **13.** Implement file upload (profile photo, resume) to Cloudflare R2
  * ✓ **14.** Build basic search: scholars by domain, university, skills
  * ✓ **15.** Implement Resource Hub with CMS, categories, and rich text editor
  * ✓ **16.** Build Job Board: listing page, detail page, application flow
  * ✓ **17.** Build Community Forum: threads, replies, upvotes, @mentions
  * ✓ **18.** Write unit tests for all API endpoints (target: 80% coverage)
  * ✓ **19.** Hire 2 developers — complete interview process, extend offers
  * ✓ **20.** Onboard developers: environment setup, codebase tour, first PRs merged



### Days 61–90: AI + Polish + Launch

  * ✓ **21.** Build AI Career Translator v1: prompt engineering, API integration, UI
  * ✓ **22.** Implement notification system (in-app + transactional email via Resend/SendGrid)
  * ✓ **23.** Build Employer Portal: company profile, job posting, applicant view
  * ✓ **24.** Build Admin Dashboard: user management, content moderation, metrics
  * ✓ **25.** Integrate PostHog analytics: custom events, funnels, feature flags
  * ✓ **26.** Performance optimization: Lighthouse > 90, API P95 < 200ms
  * ✓ **27.** Security audit: OWASP top 10 review, DPDP compliance check, pen test
  * ✓ **28.** Set up monitoring: Sentry (errors + performance) + Uptime Kuma
  * ✓ **29.** E2E testing with Playwright: critical user flows (signup, profile, apply, translate)
  * ✓ **30.** Beta launch: deploy to production, invite 100–200 scholars, begin feedback loop



🏁

#### Day 90 Success Criteria

A live platform at `phdsetu.com` with: user authentication, Research Passport profiles, Resource Hub with 20+ articles, Job Board with 10+ listings, Community Forum, AI Career Translator v1, Employer Portal (basic), Admin Dashboard, analytics tracking, error monitoring, and 100+ real beta users providing feedback. The codebase is well-documented, tested (80%+ coverage), and maintained by a 3-person team (Trupti + 2 developers).

PhDSetu

Co-Founder & CTO Playbook — Trupti Gavit

"She builds what she envisions — both the code and the vision."

B.Tech IIT Bombay (MEMS '19) • NTSE Scholar • Founder, KaryoSetu Technologies  
Document generated as part of the PhDSetu Co-Founder Playbook Series 
