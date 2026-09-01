Document 22 -- Engineering Blueprint

# POC Technical Specification

The complete engineering blueprint for PhDSetu's Month 4-5 Proof of Concept. Three features, four sprints, zero ambiguity. Every schema, every endpoint, every screen -- detailed enough that the team starts coding on Day 1 without a single clarifying question. 

3

POC Features

4

Two-Week Sprints

22

API Endpoints

5

Database Tables

<$30

Monthly Infra Cost

[Executive Summary](#executive-summary) [Architecture](#architecture) [Database Schema](#database) [API Specification](#api-spec) [AI Translator](#ai-translator) [UI/UX Wireframes](#ui-ux) [Sprint Plan](#sprint-plan) [Components](#components) [Environment](#env-vars) [Security](#security) [Testing](#testing) [Monitoring](#monitoring) [Costs](#costs)

### Table of Contents

  1. [Executive Summary -- Scope, Success Criteria & Timeline](#executive-summary)
  2. [System Architecture -- Stack, Diagram & Data Flow](#architecture)
  3. [Database Schema -- Complete PostgreSQL Schema with Indexes](#database)
  4. [API Specification -- 22 Endpoints with Full Contracts](#api-spec)
  5. [AI Career Translator -- Prompts, Caching & Cost Model](#ai-translator)
  6. [UI/UX Wireframes -- Every Screen Described](#ui-ux)
  7. [Sprint Plan -- 4 Sprints, Person-Level Assignment](#sprint-plan)
  8. [Component Library -- All React Components with Props](#components)
  9. [Environment Variables -- Complete Configuration](#env-vars)
  10. [Security Checklist -- DPDP, Auth & Hardening](#security)
  11. [Testing Strategy -- Unit, Integration & E2E](#testing)
  12. [Monitoring & Analytics -- Day 1 Observability](#monitoring)
  13. [Cost Estimate -- Monthly Breakdown](#costs)



Section 01

## Executive Summary

What this POC proves, what it deliberately excludes, and the measurable criteria that determine success.

✅

### What the POC Proves

The POC validates three hypotheses simultaneously: (1) Indian PhD scholars will adopt a structured "Research Passport" profile format when it provides clear career value. (2) An AI-powered thesis-to-career translator produces suggestions PhD scholars find genuinely useful. (3) A curated resource hub drives repeat engagement when content is discipline-tagged and bookmarkable. Together, these three features form the minimum viable loop: a scholar creates a profile, translates their research into career language, and discovers relevant resources -- all in a single session.

⛔

### What the POC Deliberately Excludes

No job board or job listings (Phase 2). No employer-side accounts or recruiter dashboards. No payment processing or premium tiers. No mentor matching or messaging system. No mobile app (responsive web only). No vernacular/multilingual support. No community forums or discussion threads. No integration with external ATS systems. No ORCID/Google Scholar auto-import (manual entry only in POC). No admin dashboard beyond basic resource CRUD. These are all planned for subsequent phases but intentionally excluded to ship in 8 weeks.

### Success Criteria

The POC is considered successful if all four metrics below are achieved within the stated timeframes. These numbers are deliberately conservative -- achieving 70% of any target still constitutes a viable signal.

Metric | Target | Measurement Window | Data Source  
---|---|---|---  
**Profile Adoption** | 200+ scholars create Research Passport profiles | First 2 weeks post-launch | PostgreSQL `scholar_profiles` table count  
**AI Translator Usage** | 500+ translations performed | First 30 days post-launch | PostgreSQL `ai_career_translations` count  
**AI Quality Score** | >70% rate suggestions "useful" or "very useful" (4-5 stars) | First 30 days post-launch | Average `user_rating` on translations with rating ≥ 4  
**Performance** | <2 seconds page load on 3G connections | Pre-launch audit | Lighthouse mobile throttled test, WebPageTest India server  
  
### Timeline Overview

### Sprint 1

**Weeks 1 -2:** Foundation — Auth, scaffolding, DB migrations, CI/CD pipeline, base layout.

### Sprint 2

**Weeks 3 -4:** Research Passport — Multi-step form, profile view, search, completion logic.

### Sprint 3

**Weeks 5 -6:** AI + Resources — Career Translator, Resource Hub, bookmarks, upvotes.

### Sprint 4

**Weeks 7 -8:** Polish + Launch — Dashboard, performance, mobile, SEO, production deploy.

### Team Structure

**Trupti (CTO):** Architecture oversight, AI translator R&D;, prompt engineering, caching strategy, security audit, load testing, go-live decision.  
**Dev 1 (Frontend Focus):** Next.js scaffolding, all UI pages, responsive design, component library, Playwright E2E tests.  
**Dev 2 (Backend Focus):** NestJS API, database schema & migrations, auth system, Redis integration, deployment pipelines, API tests.

Section 02

## System Architecture

A complete view of the technology stack, deployment topology, and data flow between every system component.

### Architecture Diagram
    
    
    ┌─────────────────────────────────────────────────────────────────────────────────────┐
    │                                    CLIENTS                                          │
    │                                                                                     │
    │   ┌──────────────┐    ┌──────────────┐    ┌──────────────┐                         │
    │   │  Desktop Web  │    │  Mobile Web   │    │  Tablet Web   │                         │
    │   │  (Chrome/FF)  │    │ (Safari/Chr)  │    │  (Safari)     │                         │
    │   └──────┬───────┘    └──────┬───────┘    └──────┬───────┘                         │
    │          │                   │                   │                                   │
    └──────────┼───────────────────┼───────────────────┼───────────────────────────────────┘
               │                   │                   │
               ▼                   ▼                   ▼
    ┌─────────────────────────────────────────────────────────────────┐
    │                     CLOUDFLARE CDN / WAF                         │
    │         DNS + DDoS Protection + Edge Caching + SSL              │
    └────────────────────────────┬────────────────────────────────────┘
                                 │
                  ┌──────────────┼──────────────┐
                  ▼                             ▼
    ┌──────────────────────┐       ┌──────────────────────────┐
    │    VERCEL (Frontend)  │       │   RAILWAY (Backend API)   │
    │                      │       │                          │
    │  Next.js 14 App      │       │  NestJS Application      │
    │  ├─ App Router       │       │  ├─ Auth Module          │
    │  ├─ Server Components│  ──►  │  ├─ Profiles Module     │
    │  ├─ Server Actions   │ REST  │  ├─ AI Module            │
    │  ├─ NextAuth.js      │  API  │  ├─ Resources Module    │
    │  ├─ TailwindCSS      │       │  ├─ Health Module       │
    │  └─ React Hook Form  │  ◄──  │  └─ Rate Limiter        │
    │                      │       │                          │
    │  Hosting: Vercel Free│       │  Hosting: Railway $5-10  │
    └──────────────────────┘       └─────────┬──┬─────────────┘
                                             │  │
                              ┌──────────────┘  └──────────────┐
                              ▼                                ▼
                 ┌──────────────────────┐       ┌──────────────────────┐
                 │  PostgreSQL (Neon)   │       │    Redis (Upstash)    │
                 │                     │       │                      │
                 │  Tables:            │       │  Uses:               │
                 │  ├─ users           │       │  ├─ Session store     │
                 │  ├─ scholar_profiles│       │  ├─ AI response cache │
                 │  ├─ ai_translations │       │  ├─ Rate limit state  │
                 │  ├─ resources       │       │  └─ General cache     │
                 │  └─ resource_       │       │                      │
                 │     bookmarks       │       │  TTL: 24hr AI cache   │
                 │                     │       │  TTL: 15min sessions  │
                 │  ORM: Prisma        │       │                      │
                 │  Hosting: Neon Free │       │  Hosting: Upstash Free│
                 └──────────────────────┘       └──────────────────────┘
    
                              ┌──────────────────────────────────┐
                              │        EXTERNAL SERVICES          │
                              │                                  │
                              │  ┌────────────┐ ┌────────────┐  │
                              │  │  OpenAI    │ │  Anthropic  │  │
                              │  │  GPT-4o-   │ │  Claude     │  │
                              │  │  mini      │ │  Haiku      │  │
                              │  │ (primary)  │ │ (fallback)  │  │
                              │  └────────────┘ └────────────┘  │
                              │                                  │
                              │  ┌────────────┐ ┌────────────┐  │
                              │  │ Google     │ │ Cloudflare  │  │
                              │  │ OAuth 2.0  │ │ R2 Storage  │  │
                              │  │ (auth)     │ │ (files)     │  │
                              │  └────────────┘ └────────────┘  │
                              └──────────────────────────────────┘
    

### Technology Stack Detail

Layer | Technology | Version | Rationale  
---|---|---|---  
**Frontend Framework** | Next.js with App Router | 14.2+ | Server Components reduce JS bundle for 3G performance target. Server Actions eliminate boilerplate API calls for mutations. Vercel deployment is zero-config.  
**Frontend Styling** | Tailwind CSS + shadcn/ui | 3.4+ / latest | Utility-first CSS with pre-built accessible components. No custom design system needed for POC. Tree-shaken, tiny CSS output.  
**Form Management** | React Hook Form + Zod | 7.x / 3.x | Performant uncontrolled forms for the multi-step Research Passport wizard. Zod schemas shared between client and server for validation parity.  
**Backend Framework** | NestJS with TypeScript | 10.x | Opinionated module architecture prevents spaghetti code. Built-in DI, guards, interceptors. Excellent for REST APIs. Team is TypeScript-fluent.  
**ORM** | Prisma | 5.x | Type-safe database queries generated from schema. Built-in migrations. Prevents SQL injection. Excellent PostgreSQL support.  
**Database** | PostgreSQL | 15+ | JSONB for flexible AI translation output. Array types for skills/interests. Full-text search eliminates need for separate search engine in POC. Neon provides free serverless Postgres.  
**Cache** | Redis (Upstash) | 7.x | Session management, AI response caching (24hr TTL), rate limiting state. Upstash free tier provides 10K commands/day — sufficient for POC.  
**Authentication** | NextAuth.js (Auth.js v5) | 5.x | Google OAuth + Credentials provider. JWT sessions stored in Redis. Built-in CSRF protection. Next.js native integration.  
**AI — Primary** | OpenAI GPT-4o-mini | API v1 | Cost-optimized: ~$0.15/1M input tokens, ~$0.60/1M output tokens. Structured JSON output mode. Excellent for the translation task. ~$0.002-0.005 per translation.  
**AI — Fallback** | Anthropic Claude 3.5 Haiku | API v1 | Fallback when OpenAI is down or rate-limited. Comparable quality at similar cost. Automatic failover in the AI service layer.  
**File Storage** | Cloudflare R2 | S3-compatible | S3-compatible API, zero egress fees. Used for profile photos and CV uploads. Free tier: 10GB storage, 10M class B operations/month.  
**Search** | PostgreSQL Full-Text Search | Built-in | GIN indexes on profile and resource text fields. `ts_vector` \+ `ts_query` for relevance-ranked results. Upgrade to Meilisearch in Phase 2 when data volume exceeds 10K records.  
**Frontend Hosting** | Vercel | Hobby tier | Zero-config Next.js deployment. Edge network for global CDN. Automatic preview deployments on PR. Free for hobby projects.  
**Backend Hosting** | Railway | Starter plan | Docker-based NestJS deployment. Auto-scaling. Built-in logging. $5/month base with usage-based pricing.  
**CDN / DNS** | Cloudflare | Free tier | DNS management, DDoS protection, SSL termination, edge caching for static assets, WAF rules.  
  
### Data Flow — Key User Journeys

### Sign Up & Profile Creation

**1.** User clicks "Sign in with Google" → NextAuth.js redirects to Google OAuth consent screen.  
**2.** Google returns auth code → NextAuth exchanges for tokens → creates JWT session stored in Redis.  
**3.** NextAuth creates `users` record (provider: google, email_verified: true).  
**4.** Frontend redirects to `/onboarding` multi-step form (checks if `scholar_profiles` exists for user).  
**5.** User completes 4 steps → Server Action calls NestJS `POST /api/profiles`.  
**6.** NestJS validates with Zod, computes `profile_completion_pct`, inserts into `scholar_profiles`.  
**7.** Redirect to `/dashboard`.

### AI Career Translation

**1.** User navigates to `/translate`, enters thesis abstract + selects discipline.  
**2.** Frontend calls NestJS `POST /api/ai/translate` with abstract + discipline.  
**3.** NestJS checks Redis cache for hash of (abstract + discipline). If cache hit, returns cached result instantly.  
**4.** If cache miss, calls OpenAI GPT-4o-mini with structured system prompt. If OpenAI fails, falls back to Claude Haiku.  
**5.** Parses JSON response, validates schema, computes cost_cents.  
**6.** Stores result in `ai_career_translations` \+ caches in Redis (24hr TTL).  
**7.** Returns structured career paths, skill mapping, job titles to frontend.  
**8.** User rates translation (1-5 stars) → `POST /api/ai/translations/:id/rate`.

**Monorepo Structure** The project uses a single Git repository with the following top-level structure: `apps/web/` (Next.js frontend), `apps/api/` (NestJS backend), `packages/shared/` (shared Zod schemas, TypeScript interfaces, constants), `packages/prisma/` (Prisma schema, migrations, seed data). Package manager: pnpm with workspaces. Build tool: Turborepo for parallel builds and cached task execution. 

### Repository Structure
    
    
    phdsetu/
    ├── apps/
    │   ├── web/                          # Next.js 14 frontend
    │   │   ├── app/
    │   │   │   ├── (auth)/
    │   │   │   │   ├── login/page.tsx
    │   │   │   │   ├── register/page.tsx
    │   │   │   │   └── layout.tsx
    │   │   │   ├── (main)/
    │   │   │   │   ├── dashboard/page.tsx
    │   │   │   │   ├── onboarding/page.tsx
    │   │   │   │   ├── profile/
    │   │   │   │   │   ├── [id]/page.tsx
    │   │   │   │   │   ├── edit/page.tsx
    │   │   │   │   │   └── page.tsx        # Browse/search profiles
    │   │   │   │   ├── translate/page.tsx
    │   │   │   │   ├── resources/
    │   │   │   │   │   ├── [id]/page.tsx
    │   │   │   │   │   └── page.tsx
    │   │   │   │   └── layout.tsx
    │   │   │   ├── api/auth/[...nextauth]/route.ts
    │   │   │   ├── layout.tsx
    │   │   │   └── page.tsx               # Landing page
    │   │   ├── components/
    │   │   │   ├── ui/                    # shadcn/ui primitives
    │   │   │   ├── layout/                # Navbar, Footer, Sidebar
    │   │   │   ├── profile/              # ProfileCard, ProfileForm, etc.
    │   │   │   ├── translate/            # TranslationForm, CareerPathCard
    │   │   │   ├── resources/            # ResourceCard, FilterChips
    │   │   │   └── shared/               # ErrorBoundary, EmptyState, etc.
    │   │   ├── lib/
    │   │   │   ├── auth.ts               # NextAuth config
    │   │   │   ├── api-client.ts         # Typed fetch wrapper for NestJS API
    │   │   │   └── utils.ts
    │   │   ├── hooks/                    # Custom React hooks
    │   │   ├── next.config.js
    │   │   ├── tailwind.config.ts
    │   │   └── package.json
    │   │
    │   └── api/                          # NestJS backend
    │       ├── src/
    │       │   ├── auth/
    │       │   │   ├── auth.module.ts
    │       │   │   ├── auth.controller.ts
    │       │   │   ├── auth.service.ts
    │       │   │   ├── strategies/
    │       │   │   │   ├── jwt.strategy.ts
    │       │   │   │   └── google.strategy.ts
    │       │   │   ├── guards/
    │       │   │   │   ├── jwt-auth.guard.ts
    │       │   │   │   └── roles.guard.ts
    │       │   │   └── dto/
    │       │   │       ├── register.dto.ts
    │       │   │       └── login.dto.ts
    │       │   ├── profiles/
    │       │   │   ├── profiles.module.ts
    │       │   │   ├── profiles.controller.ts
    │       │   │   ├── profiles.service.ts
    │       │   │   └── dto/
    │       │   │       ├── create-profile.dto.ts
    │       │   │       └── update-profile.dto.ts
    │       │   ├── ai/
    │       │   │   ├── ai.module.ts
    │       │   │   ├── ai.controller.ts
    │       │   │   ├── ai.service.ts
    │       │   │   ├── prompts/
    │       │   │   │   └── career-translator.prompt.ts
    │       │   │   └── dto/
    │       │   │       └── translate.dto.ts
    │       │   ├── resources/
    │       │   │   ├── resources.module.ts
    │       │   │   ├── resources.controller.ts
    │       │   │   ├── resources.service.ts
    │       │   │   └── dto/
    │       │   │       ├── create-resource.dto.ts
    │       │   │       └── query-resource.dto.ts
    │       │   ├── common/
    │       │   │   ├── interceptors/
    │       │   │   ├── filters/
    │       │   │   ├── decorators/
    │       │   │   └── pipes/
    │       │   ├── health/
    │       │   │   └── health.controller.ts
    │       │   ├── app.module.ts
    │       │   └── main.ts
    │       ├── test/
    │       │   ├── auth.e2e-spec.ts
    │       │   ├── profiles.e2e-spec.ts
    │       │   └── ai.e2e-spec.ts
    │       └── package.json
    │
    ├── packages/
    │   ├── shared/                       # Shared types, schemas, constants
    │   │   ├── src/
    │   │   │   ├── schemas/              # Zod validation schemas
    │   │   │   │   ├── auth.schema.ts
    │   │   │   │   ├── profile.schema.ts
    │   │   │   │   ├── resource.schema.ts
    │   │   │   │   └── ai.schema.ts
    │   │   │   ├── types/                # TypeScript interfaces
    │   │   │   │   ├── user.types.ts
    │   │   │   │   ├── profile.types.ts
    │   │   │   │   ├── resource.types.ts
    │   │   │   │   └── ai.types.ts
    │   │   │   └── constants/
    │   │   │       ├── disciplines.ts
    │   │   │       └── enums.ts
    │   │   └── package.json
    │   │
    │   └── prisma/                       # Database layer
    │       ├── schema.prisma
    │       ├── migrations/
    │       ├── seed.ts
    │       └── package.json
    │
    ├── turbo.json
    ├── pnpm-workspace.yaml
    ├── .env.example
    ├── .github/
    │   └── workflows/
    │       ├── ci.yml                    # Lint + test + type-check on PR
    │       └── deploy.yml                # Deploy on merge to main
    ├── docker-compose.yml                # Local dev: Postgres + Redis
    └── README.md
    

Section 03

## Database Schema

Complete PostgreSQL schema using Prisma ORM syntax. Every table, column, type, constraint, index, and relationship is defined here.

### Complete Prisma Schema
    
    
    // packages/prisma/schema.prisma
    
    generator client {
      provider = "prisma-client-js"
    }
    
    datasource db {
      provider = "postgresql"
      url      = env("DATABASE_URL")
    }
    
    // ─── ENUMS ────────────────────────────────────────────────────
    
    enum AuthProvider {
      email
      google
    }
    
    enum UserRole {
      scholar
      employer
      admin
    }
    
    enum ScholarStatus {
      pursuing_phd
      completed_phd
      postdoc
      industry
      looking
    }
    
    enum Discipline {
      chemistry
      physics
      biology
      mathematics
      computer_science
      electrical_engineering
      mechanical_engineering
      chemical_engineering
      civil_engineering
      materials_science
      environmental_science
      biotechnology
      pharmaceutical_science
      agricultural_science
      economics
      psychology
      sociology
      political_science
      history
      philosophy
      literature
      linguistics
      education
      management
      law
      social_work
      other
    }
    
    enum ContentType {
      article
      video
      template
      tool
      guide
      career_path
    }
    
    enum ResourceCategory {
      resume
      interview
      networking
      industry_knowledge
      skill_building
      mental_health
      women_in_stem
    }
    
    enum DifficultyLevel {
      beginner
      intermediate
      advanced
    }
    
    enum ProfileVisibility {
      public
      community_only
      private
    }
    
    // ─── MODELS ───────────────────────────────────────────────────
    
    model User {
      id              String          @id @default(uuid()) @db.Uuid
      email           String          @unique
      passwordHash    String?         @map("password_hash")
      name            String
      avatarUrl       String?         @map("avatar_url")
      provider        AuthProvider    @default(email)
      providerId      String?         @map("provider_id")
      emailVerified   Boolean         @default(false) @map("email_verified")
      role            UserRole        @default(scholar)
      createdAt       DateTime        @default(now()) @map("created_at")
      updatedAt       DateTime        @updatedAt @map("updated_at")
      lastLoginAt     DateTime?       @map("last_login_at")
    
      // Relations
      profile         ScholarProfile?
      translations    AiCareerTranslation[]
      bookmarks       ResourceBookmark[]
      createdResources Resource[]
    
      @@map("users")
      @@index([email])
      @@index([provider, providerId])
    }
    
    model ScholarProfile {
      id                   String             @id @default(uuid()) @db.Uuid
      userId               String             @unique @map("user_id") @db.Uuid
      headline             String?            @db.VarChar(200)
      bio                  String?            @db.Text  // max 2000 chars enforced at app level
      currentStatus        ScholarStatus?     @map("current_status")
      thesisTitle          String?            @map("thesis_title") @db.Text
      thesisAbstract       String?            @map("thesis_abstract") @db.Text  // max 5000 chars
      discipline           Discipline?
      subDiscipline        String?            @map("sub_discipline") @db.VarChar(200)
      university           String?            @db.VarChar(300)
      department           String?            @db.VarChar(200)
      enrollmentYear       Int?               @map("enrollment_year")
      completionYear       Int?               @map("completion_year")
      supervisorName       String?            @map("supervisor_name") @db.VarChar(200)
      publicationsCount    Int                @default(0) @map("publications_count")
      keySkills            String[]           @map("key_skills")
      industryInterests    String[]           @map("industry_interests")
      careerGoals          String?            @map("career_goals") @db.Text  // max 1000 chars
      linkedinUrl          String?            @map("linkedin_url")
      googleScholarUrl     String?            @map("google_scholar_url")
      orcidId              String?            @map("orcid_id")
      locationCity         String?            @map("location_city")
      locationState        String?            @map("location_state")
      willingToRelocate    Boolean            @default(false) @map("willing_to_relocate")
      openToOpportunities  Boolean            @default(true) @map("open_to_opportunities")
      profileCompletionPct Int                @default(0) @map("profile_completion_pct")
      visibility           ProfileVisibility  @default(public)
      createdAt            DateTime           @default(now()) @map("created_at")
      updatedAt            DateTime           @updatedAt @map("updated_at")
    
      // Full-text search vector (managed via raw SQL migration)
      // search_vector tsvector GENERATED ALWAYS AS (
      //   to_tsvector('english', coalesce(headline,'') || ' ' ||
      //   coalesce(thesis_title,'') || ' ' || coalesce(bio,''))
      // ) STORED;
    
      // Relations
      user                 User               @relation(fields: [userId], references: [id], onDelete: Cascade)
    
      @@map("scholar_profiles")
      @@index([discipline])
      @@index([currentStatus])
      @@index([university])
      @@index([locationState])
      @@index([openToOpportunities])
      @@index([visibility])
      @@index([profileCompletionPct])
      @@index([createdAt])
    }
    
    model AiCareerTranslation {
      id                String      @id @default(uuid()) @db.Uuid
      userId            String      @map("user_id") @db.Uuid
      inputAbstract     String      @map("input_abstract") @db.Text
      inputDiscipline   Discipline  @map("input_discipline")
      outputCareerPaths Json        @map("output_career_paths")  // JSONB
      outputSkillMapping Json       @map("output_skill_mapping") // JSONB
      outputIndustryRoles Json      @map("output_industry_roles") // JSONB
      careerNarrative   String?     @map("career_narrative") @db.Text
      modelUsed         String      @map("model_used") @db.VarChar(50)
      tokensUsed        Int         @map("tokens_used")
      costCents         Int         @map("cost_cents")
      userRating        Int?        @map("user_rating")  // 1-5, null = not yet rated
      userFeedback      String?     @map("user_feedback") @db.Text
      createdAt         DateTime    @default(now()) @map("created_at")
    
      // Relations
      user              User        @relation(fields: [userId], references: [id], onDelete: Cascade)
    
      @@map("ai_career_translations")
      @@index([userId])
      @@index([inputDiscipline])
      @@index([createdAt])
      @@index([userRating])
    }
    
    model Resource {
      id              String            @id @default(uuid()) @db.Uuid
      title           String            @db.VarChar(300)
      description     String?           @db.Text
      contentType     ContentType       @map("content_type")
      category        ResourceCategory
      url             String?           @db.Text
      bodyHtml        String?           @map("body_html") @db.Text
      authorName      String?           @map("author_name")
      source          String?
      disciplineTags  String[]          @map("discipline_tags")
      difficultyLevel DifficultyLevel   @default(beginner) @map("difficulty_level")
      isFeatured      Boolean           @default(false) @map("is_featured")
      viewCount       Int               @default(0) @map("view_count")
      upvoteCount     Int               @default(0) @map("upvote_count")
      createdById     String            @map("created_by") @db.Uuid
      createdAt       DateTime          @default(now()) @map("created_at")
      updatedAt       DateTime          @updatedAt @map("updated_at")
    
      // Relations
      createdBy       User              @relation(fields: [createdById], references: [id])
      bookmarks       ResourceBookmark[]
    
      @@map("resources")
      @@index([category])
      @@index([contentType])
      @@index([isFeatured])
      @@index([upvoteCount])
      @@index([createdAt])
    }
    
    model ResourceBookmark {
      id          String    @id @default(uuid()) @db.Uuid
      userId      String    @map("user_id") @db.Uuid
      resourceId  String    @map("resource_id") @db.Uuid
      createdAt   DateTime  @default(now()) @map("created_at")
    
      // Relations
      user        User      @relation(fields: [userId], references: [id], onDelete: Cascade)
      resource    Resource  @relation(fields: [resourceId], references: [id], onDelete: Cascade)
    
      @@unique([userId, resourceId])
      @@map("resource_bookmarks")
      @@index([userId])
      @@index([resourceId])
    }
    

### Full-Text Search Migration (Raw SQL)

This raw SQL migration adds a generated `tsvector` column and GIN index to `scholar_profiles` and `resources` for PostgreSQL full-text search. Run via `prisma migrate` with a custom SQL migration file.
    
    
    -- migrations/YYYYMMDD_add_search_vectors.sql
    
    -- Scholar Profile full-text search
    ALTER TABLE scholar_profiles
      ADD COLUMN search_vector tsvector
      GENERATED ALWAYS AS (
        to_tsvector('english',
          coalesce(headline, '') || ' ' ||
          coalesce(thesis_title, '') || ' ' ||
          coalesce(bio, '') || ' ' ||
          coalesce(sub_discipline, '') || ' ' ||
          coalesce(university, '') || ' ' ||
          array_to_string(key_skills, ' ')
        )
      ) STORED;
    
    CREATE INDEX idx_scholar_profiles_search
      ON scholar_profiles USING GIN (search_vector);
    
    -- Resource full-text search
    ALTER TABLE resources
      ADD COLUMN search_vector tsvector
      GENERATED ALWAYS AS (
        to_tsvector('english',
          coalesce(title, '') || ' ' ||
          coalesce(description, '') || ' ' ||
          coalesce(author_name, '') || ' ' ||
          array_to_string(discipline_tags, ' ')
        )
      ) STORED;
    
    CREATE INDEX idx_resources_search
      ON resources USING GIN (search_vector);
    

### Migration Strategy

**Development** Use `npx prisma migrate dev` during development. This creates SQL migration files in `packages/prisma/migrations/` and auto-applies them to the local database. Each migration is timestamped and tracked in the `_prisma_migrations` table. 

**Production** Use `npx prisma migrate deploy` in CI/CD. This runs only pending migrations without prompting. Never use `migrate dev` against production. Always review generated SQL before merging migration PRs. 

**Seed Data** The `packages/prisma/seed.ts` file pre-populates: 1 admin user, 5 sample scholar profiles (across different disciplines), 20 curated resources (at least 2 per category), and 3 sample AI translations for demo purposes. Run via `npx prisma db seed`. 

### Profile Completion Percentage Logic

The `profile_completion_pct` is computed at the application layer (not database) whenever a profile is created or updated. The formula assigns weighted points to each field:

Field| Weight| Condition  
---|---|---  
`headline`| 5 points| Non-empty string  
`bio`| 5 points| Length ≥ 50 characters  
`currentStatus`| 10 points| Any enum value selected  
`thesisTitle`| 10 points| Non-empty string  
`thesisAbstract`| 15 points| Length ≥ 100 characters  
`discipline`| 10 points| Any enum value selected  
`university`| 5 points| Non-empty string  
`department`| 5 points| Non-empty string  
`keySkills`| 15 points| Array length ≥ 3  
`industryInterests`| 10 points| Array length ≥ 1  
`careerGoals`| 5 points| Length ≥ 30 characters  
`avatarUrl` (from User)| 5 points| Non-null URL  
  
**Total possible:** 100 points. The integer value is stored directly as the percentage.

Section 04

## API Specification

Complete REST API contracts for all 22 endpoints. Every request body, response body, status code, auth requirement, and rate limit is documented with TypeScript interfaces.

**Base URL** All endpoints are prefixed with the backend base URL. Development: `http://localhost:3001/api`. Production: `https://api.phdsetu.com/api`. All requests and responses use `Content-Type: application/json`. Authentication is via `Authorization: Bearer <jwt_token>` header. 

**Standard Error Response** All error responses follow a consistent shape: `{ "statusCode": number, "message": string | string[], "error": string }`. Validation errors (400) return an array of messages. Auth errors (401/403) return a single message string. 

### Authentication Endpoints

POST /api/auth/register

Create a new user account with email and password. Sends verification email (POC: auto-verifies).

Auth: None Rate Limit: 5 req/min per IP
    
    
    // Request Body
    interface RegisterRequest {
      email: string;       // valid email, max 255 chars
      password: string;    // min 8 chars, 1 uppercase, 1 number
      name: string;        // min 2 chars, max 100 chars
    }
    
    // Response 201 Created
    interface AuthResponse {
      user: {
        id: string;
        email: string;
        name: string;
        role: 'scholar' | 'employer' | 'admin';
      };
      accessToken: string;    // JWT, expires in 15 minutes
      refreshToken: string;   // JWT, expires in 7 days
    }
    
    // Response 400: { message: ["email must be valid", "password too weak"] }
    // Response 409: { message: "User with this email already exists" }
    

POST /api/auth/login

Authenticate with email and password. Returns JWT tokens.

Auth: None Rate Limit: 10 req/min per IP
    
    
    // Request Body
    interface LoginRequest {
      email: string;
      password: string;
    }
    
    // Response 200: AuthResponse (same as register)
    // Response 401: { message: "Invalid email or password" }
    

POST /api/auth/google

Exchange Google OAuth authorization code for JWT tokens. Creates user if not exists.

Auth: None Rate Limit: 10 req/min per IP
    
    
    // Request Body
    interface GoogleAuthRequest {
      code: string;         // Google OAuth authorization code
      redirectUri: string;  // Must match registered redirect URI
    }
    
    // Response 200: AuthResponse
    // Response 400: { message: "Invalid authorization code" }
    

POST /api/auth/logout

Invalidate the current session and refresh token. Clears Redis session entry.

Auth: Bearer Token Rate Limit: 20 req/min
    
    
    // Request Body: empty
    // Response 200: { message: "Logged out successfully" }
    // Response 401: { message: "Unauthorized" }
    

POST /api/auth/forgot-password

Send password reset link to email. Always returns 200 regardless of email existence (prevents enumeration).

Auth: None Rate Limit: 3 req/min per IP
    
    
    // Request Body
    interface ForgotPasswordRequest {
      email: string;
    }
    
    // Response 200: { message: "If the email exists, a reset link has been sent" }
    

POST /api/auth/reset-password

Reset password using a valid reset token (received via email).

Auth: None Rate Limit: 5 req/min per IP
    
    
    // Request Body
    interface ResetPasswordRequest {
      token: string;           // Reset token from email link
      newPassword: string;     // min 8 chars, 1 uppercase, 1 number
    }
    
    // Response 200: { message: "Password reset successfully" }
    // Response 400: { message: "Invalid or expired reset token" }
    

GET /api/auth/me

Get the currently authenticated user's info. Used to hydrate the frontend session state.

Auth: Bearer Token Rate Limit: 30 req/min
    
    
    // Response 200
    interface MeResponse {
      id: string;
      email: string;
      name: string;
      avatarUrl: string | null;
      role: 'scholar' | 'employer' | 'admin';
      provider: 'email' | 'google';
      emailVerified: boolean;
      hasProfile: boolean;        // true if scholar_profiles record exists
      profileCompletionPct: number | null;
      createdAt: string;           // ISO 8601
    }
    
    // Response 401: { message: "Unauthorized" }
    

### Scholar Profile Endpoints

GET /api/profiles

List scholar profiles with pagination, full-text search, and filtering. Only returns profiles with `visibility: public` or `community_only` (for authenticated users).

Auth: Optional (affects visibility filter) Rate Limit: 30 req/min
    
    
    // Query Parameters
    interface ListProfilesQuery {
      page?: number;             // default: 1
      limit?: number;            // default: 20, max: 50
      search?: string;           // full-text search across headline, thesis, bio, skills
      discipline?: Discipline;   // filter by discipline enum
      status?: ScholarStatus;    // filter by current status
      university?: string;       // partial match on university name
      state?: string;            // filter by location_state
      openToOpportunities?: boolean;
      sortBy?: 'created_at' | 'completion_pct' | 'relevance';
      sortOrder?: 'asc' | 'desc';
    }
    
    // Response 200
    interface PaginatedProfilesResponse {
      data: ProfileSummary[];
      meta: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
        hasNext: boolean;
        hasPrev: boolean;
      };
    }
    
    interface ProfileSummary {
      id: string;
      userId: string;
      userName: string;
      avatarUrl: string | null;
      headline: string | null;
      currentStatus: ScholarStatus;
      discipline: Discipline;
      university: string;
      keySkills: string[];
      openToOpportunities: boolean;
      profileCompletionPct: number;
    }
    

GET /api/profiles/:id

Get a single scholar profile by profile ID. Respects visibility settings.

Auth: Optional Rate Limit: 30 req/min
    
    
    // Response 200
    interface FullProfileResponse {
      id: string;
      userId: string;
      userName: string;
      avatarUrl: string | null;
      headline: string | null;
      bio: string | null;
      currentStatus: ScholarStatus;
      thesisTitle: string | null;
      thesisAbstract: string | null;
      discipline: Discipline | null;
      subDiscipline: string | null;
      university: string | null;
      department: string | null;
      enrollmentYear: number | null;
      completionYear: number | null;
      supervisorName: string | null;
      publicationsCount: number;
      keySkills: string[];
      industryInterests: string[];
      careerGoals: string | null;
      linkedinUrl: string | null;
      googleScholarUrl: string | null;
      orcidId: string | null;
      locationCity: string | null;
      locationState: string | null;
      willingToRelocate: boolean;
      openToOpportunities: boolean;
      profileCompletionPct: number;
      visibility: ProfileVisibility;
      createdAt: string;
      updatedAt: string;
    }
    
    // Response 404: { message: "Profile not found" }
    // Response 403: { message: "This profile is private" }
    

POST /api/profiles

Create a new scholar profile for the authenticated user. Fails if user already has a profile.

Auth: Bearer Token (scholar role) Rate Limit: 5 req/min
    
    
    // Request Body
    interface CreateProfileRequest {
      headline?: string;             // max 200 chars
      bio?: string;                  // max 2000 chars
      currentStatus: ScholarStatus;
      thesisTitle?: string;
      thesisAbstract?: string;        // max 5000 chars
      discipline: Discipline;
      subDiscipline?: string;         // max 200 chars
      university: string;             // max 300 chars, required
      department?: string;            // max 200 chars
      enrollmentYear?: number;        // 1980-2030
      completionYear?: number;        // 1980-2035, nullable
      supervisorName?: string;        // max 200 chars
      publicationsCount?: number;     // min 0
      keySkills?: string[];            // max 20 items, each max 100 chars
      industryInterests?: string[];   // max 10 items
      careerGoals?: string;           // max 1000 chars
      linkedinUrl?: string;           // valid URL
      googleScholarUrl?: string;      // valid URL
      orcidId?: string;              // format: XXXX-XXXX-XXXX-XXXX
      locationCity?: string;
      locationState?: string;
      willingToRelocate?: boolean;
      openToOpportunities?: boolean;
      visibility?: ProfileVisibility; // default: public
    }
    
    // Response 201: FullProfileResponse
    // Response 400: validation errors
    // Response 409: { message: "User already has a profile" }
    

PUT /api/profiles/:id

Update an existing profile. Only the profile owner can update. Partial updates supported (only send changed fields).

Auth: Bearer Token (profile owner) Rate Limit: 20 req/min
    
    
    // Request Body: Partial<CreateProfileRequest> — all fields optional
    // Response 200: FullProfileResponse (with recalculated profileCompletionPct)
    // Response 403: { message: "You can only update your own profile" }
    // Response 404: { message: "Profile not found" }
    

GET /api/profiles/me

Get the current authenticated user's profile. Returns 404 if no profile exists (user hasn't completed onboarding).

Auth: Bearer Token Rate Limit: 30 req/min
    
    
    // Response 200: FullProfileResponse
    // Response 404: { message: "No profile found. Complete onboarding first." }
    

GET /api/profiles/completion

Get profile completion breakdown with per-field status. Used for the "complete your profile" nudge UI.

Auth: Bearer Token Rate Limit: 30 req/min
    
    
    // Response 200
    interface ProfileCompletionResponse {
      totalPct: number;
      fields: {
        fieldName: string;
        label: string;
        weight: number;
        completed: boolean;
        hint: string;
      }[];
      nextBestAction: string;  // e.g., "Add at least 3 skills to reach 60%"
    }
    

### AI Career Translator Endpoints

POST /api/ai/translate

Submit a thesis abstract and discipline to the AI Career Translator. Returns structured career path suggestions. Checks Redis cache first; on miss, calls OpenAI GPT-4o-mini (with Claude Haiku fallback).

Auth: Bearer Token Rate Limit: 5 req/min per user Max Body: 10KB
    
    
    // Request Body
    interface TranslateRequest {
      thesisAbstract: string;   // min 100, max 5000 chars
      discipline: Discipline;
      thesisTitle?: string;      // optional, improves results
    }
    
    // Response 200
    interface TranslationResponse {
      id: string;                 // translation record ID for rating
      careerPaths: {
        title: string;
        description: string;
        relevanceScore: number;   // 0.0 - 1.0
        whyItFits: string;
        companyExamples: string[];
        salaryRange?: string;
        growthOutlook: string;
      }[];
      skillMapping: {
        academicSkill: string;
        industryTranslation: string;
        relevantSectors: string[];
      }[];
      industryRoles: {
        jobTitle: string;
        company: string;
        location: string;
        whyThisRole: string;
        confidenceScore: number; // 0.0 - 1.0
      }[];
      careerNarrative: string;   // 3-sentence story
      modelUsed: string;
      cached: boolean;
    }
    
    // Response 400: { message: "Abstract must be at least 100 characters" }
    // Response 429: { message: "Rate limit exceeded. Try again in 60 seconds." }
    // Response 503: { message: "AI service temporarily unavailable" }
    

GET /api/ai/translations

Get the current user's past AI career translations. Ordered by creation date descending.

Auth: Bearer Token Rate Limit: 30 req/min
    
    
    // Query Parameters
    interface TranslationsQuery {
      page?: number;    // default: 1
      limit?: number;   // default: 10, max: 50
    }
    
    // Response 200
    interface TranslationsListResponse {
      data: {
        id: string;
        inputAbstract: string;      // truncated to 200 chars
        inputDiscipline: Discipline;
        careerPathCount: number;
        userRating: number | null;
        modelUsed: string;
        createdAt: string;
      }[];
      meta: PaginationMeta;
    }
    

POST /api/ai/translations/:id/rate

Rate a past AI translation. Can only rate own translations. Can re-rate (overwrites previous rating).

Auth: Bearer Token (translation owner) Rate Limit: 20 req/min
    
    
    // Request Body
    interface RateTranslationRequest {
      rating: number;        // integer, 1-5
      feedback?: string;     // optional text, max 1000 chars
    }
    
    // Response 200: { message: "Rating saved", averageRating: number }
    // Response 400: { message: "Rating must be between 1 and 5" }
    // Response 404: { message: "Translation not found" }
    

GET /api/ai/stats

Admin-only: Get AI usage statistics including total translations, costs, average ratings, and model distribution.

Auth: Bearer Token (admin role) Rate Limit: 10 req/min
    
    
    // Response 200
    interface AiStatsResponse {
      totalTranslations: number;
      totalTokensUsed: number;
      totalCostCents: number;
      averageRating: number;
      ratingDistribution: Record<number, number>;  // { 1: 5, 2: 10, ... }
      modelUsage: Record<string, number>;         // { "gpt-4o-mini": 450, ... }
      translationsPerDay: { date: string; count: number }[];
      topDisciplines: { discipline: string; count: number }[];
    }
    
    // Response 403: { message: "Admin access required" }
    

### Resource Hub Endpoints

GET /api/resources

List resources with pagination, full-text search, category/type/difficulty filtering.

Auth: Optional (bookmarks shown if authenticated) Rate Limit: 30 req/min
    
    
    // Query Parameters
    interface ListResourcesQuery {
      page?: number;                     // default: 1
      limit?: number;                    // default: 20, max: 50
      search?: string;                   // full-text search
      category?: ResourceCategory;       // filter
      contentType?: ContentType;         // filter
      difficulty?: DifficultyLevel;       // filter
      discipline?: string;               // matches discipline_tags array
      featured?: boolean;                // show only featured
      sortBy?: 'created_at' | 'upvotes' | 'views' | 'relevance';
      sortOrder?: 'asc' | 'desc';
    }
    
    // Response 200
    interface ResourceListResponse {
      data: {
        id: string;
        title: string;
        description: string | null;
        contentType: ContentType;
        category: ResourceCategory;
        url: string | null;
        authorName: string | null;
        source: string | null;
        disciplineTags: string[];
        difficultyLevel: DifficultyLevel;
        isFeatured: boolean;
        viewCount: number;
        upvoteCount: number;
        isBookmarked: boolean;      // false if not authenticated
        hasUpvoted: boolean;        // false if not authenticated
        createdAt: string;
      }[];
      meta: PaginationMeta;
    }
    

GET /api/resources/:id

Get a single resource with full content. Increments `view_count` (debounced, once per user per hour via Redis).

Auth: Optional Rate Limit: 30 req/min
    
    
    // Response 200: Full resource object including body_html
    // Response 404: { message: "Resource not found" }
    

POST /api/resources

Create a new resource. Admin-only endpoint.

Auth: Bearer Token (admin role) Rate Limit: 10 req/min
    
    
    // Request Body
    interface CreateResourceRequest {
      title: string;                     // max 300 chars, required
      description?: string;
      contentType: ContentType;
      category: ResourceCategory;
      url?: string;                       // valid URL for external resources
      bodyHtml?: string;                  // sanitized HTML for internal content
      authorName?: string;
      source?: string;
      disciplineTags?: string[];           // max 10 tags
      difficultyLevel?: DifficultyLevel;  // default: beginner
      isFeatured?: boolean;              // default: false
    }
    
    // Response 201: Full resource object
    // Response 403: { message: "Admin access required" }
    

PUT /api/resources/:id

Update a resource. Admin-only. Partial updates supported.

Auth: Bearer Token (admin role) Rate Limit: 10 req/min
    
    
    // Request Body: Partial<CreateResourceRequest>
    // Response 200: Full updated resource object
    // Response 403/404: standard error
    

POST /api/resources/:id/bookmark

Toggle bookmark on a resource. If bookmarked, removes bookmark. If not bookmarked, adds bookmark.

Auth: Bearer Token Rate Limit: 30 req/min
    
    
    // Request Body: empty
    // Response 200: { bookmarked: boolean } // true = was added, false = was removed
    

GET /api/resources/bookmarks

Get all resources bookmarked by the current user. Paginated.

Auth: Bearer Token Rate Limit: 30 req/min
    
    
    // Query: { page?: number, limit?: number }
    // Response 200: ResourceListResponse (isBookmarked always true)
    

POST /api/resources/:id/upvote

Toggle upvote on a resource. Increments/decrements `upvote_count` atomically.

Auth: Bearer Token Rate Limit: 30 req/min
    
    
    // Request Body: empty
    // Response 200: { upvoted: boolean, upvoteCount: number }
    

### Example Request & Response

Request
    
    
    POST /api/ai/translate
    Authorization: Bearer eyJhbGci...
    Content-Type: application/json
    
    {
      "thesisTitle": "Rheological Properties of
        Silicone Elastomers Under Dynamic
        Shear Conditions",
      "thesisAbstract": "This study investigates
        the viscoelastic behavior of polydimethyl-
        siloxane (PDMS) based elastomers under
        varying shear rates and temperatures.
        Using oscillatory rheometry and DMA,
        we characterized storage modulus, loss
        modulus, and tan delta across a frequency
        range of 0.1-100 Hz. Results show a
        critical transition at 85°C suggesting
        applications in high-temperature sealing
        and automotive gasket formulations...",
      "discipline": "chemistry"
    }
    

Response (200 OK)
    
    
    {
      "id": "c3a1b2d4-...",
      "careerPaths": [
        {
          "title": "Polymer R&D Scientist",
          "description": "Lead materials
            characterization and new
            product development",
          "relevanceScore": 0.95,
          "whyItFits": "Direct match with
            rheology and polymer
            characterization expertise",
          "companyExamples": [
            "Momentive", "Dow Silicones",
            "Wacker Chemie"
          ],
          "growthOutlook": "Strong"
        }
        // ... 5-7 more paths
      ],
      "cached": false,
      "modelUsed": "gpt-4o-mini"
    }
    

Section 05

## AI Career Translator — Deep Specification

The complete AI system design: prompts, response schemas, caching strategy, cost model, fallback chain, and evaluation framework.

### System Prompt (Full Text)

This is the exact system prompt sent to GPT-4o-mini. It is version-controlled in `apps/api/src/ai/prompts/career-translator.prompt.ts` and can be A/B tested by storing variants.
    
    
    // SYSTEM PROMPT — Career Translator v1.0
    
    You are PhDSetu Career Translator, an expert career advisor specializing in helping Indian
    PhD scholars discover industry career paths that match their research expertise.
    
    Your role is to translate academic research experience into industry-relevant career
    opportunities, with a specific focus on the Indian job market and Indian companies that
    actively hire PhDs.
    
    ## YOUR TASK
    Given a PhD scholar's thesis title, thesis abstract, and academic discipline, produce a
    structured career translation that maps their research skills to real-world industry
    career paths.
    
    ## INPUT FORMAT
    You will receive:
    - thesis_title: The title of the scholar's PhD thesis
    - thesis_abstract: A 100-5000 character summary of their research
    - discipline: Their academic discipline (e.g., chemistry, physics, computer_science)
    
    ## OUTPUT REQUIREMENTS
    Return a JSON object with EXACTLY this structure:
    
    ### 1. career_paths (array of 5-8 objects)
    For each career path:
    - "title": Industry career path name (e.g., "Polymer R&D; Scientist")
    - "description": 2-3 sentence description of the role and day-to-day work
    - "relevance_score": Float 0.0-1.0 indicating how directly the PhD research maps to this
      career. Score 0.9+ only for near-perfect matches. Score 0.5-0.7 for transferable-skill
      matches. Never score below 0.3.
    - "why_it_fits": 2-3 sentences explaining specifically HOW their research skills apply.
      Reference specific techniques, methodologies, or domain knowledge from their abstract.
    - "company_examples": Array of 3-5 REAL companies (prioritize Indian companies: Tata,
      Reliance, Dr. Reddy's, Infosys, Wipro, ISRO, DRDO, BARC, Hindustan Unilever, Biocon,
      Sun Pharma, ITC, Mahindra, L&T;, Asian Paints, Pidilite, etc. Include 1-2 global
      companies with India offices if relevant.)
    - "salary_range": Approximate annual salary range in INR for 0-3 years post-PhD
      (format: "₹X-Y LPA")
    - "growth_outlook": One of "Strong", "Moderate", or "Emerging"
    
    ### 2. skill_mapping (array of 5-10 objects)
    For each skill:
    - "academic_skill": The skill as the scholar would describe it (e.g., "Oscillatory
      rheometry and DMA characterization")
    - "industry_translation": How industry would describe this skill (e.g., "Materials
      characterization and quality assurance testing")
    - "relevant_sectors": Array of 2-4 industry sectors where this skill is valued
    
    ### 3. industry_roles (array of 3-5 objects)
    Specific, currently-hiring-type roles at REAL Indian companies:
    - "job_title": Exact job title (e.g., "Senior Research Scientist - Polymers")
    - "company": REAL company name (MUST be a real company that plausibly hires PhDs in
      this domain. If uncertain, flag with confidence_score below 0.6)
    - "location": City in India (e.g., "Mumbai", "Bangalore", "Hyderabad", "Pune")
    - "why_this_role": 1-2 sentences on why this specific role fits their background
    - "confidence_score": Float 0.0-1.0. Score below 0.6 means "this is an educated guess
      based on the company's known operations, not a verified current opening."
    
    ### 4. career_narrative (string)
    A compelling 3-sentence narrative that tells the story of how this scholar's PhD journey
    translates into an industry career. Write in second person ("Your research in...").
    Make it motivating, specific to their work, and avoid generic platitudes.
    
    ## CRITICAL RULES
    1. NEVER invent companies. Only mention companies you are certain exist. If unsure about
       whether a specific company hires in a domain, lower the confidence_score below 0.6.
    2. For humanities and social science PhDs, emphasize roles in: policy research, think
       tanks (ORF, CPR, IDFC Institute), EdTech (Byju's, Unacademy), development sector
       (World Bank India, UNDP, Gates Foundation), data analysis, UX research, content
       strategy, government (UPSC, state PSCs), media, and consulting.
    3. For vague or very short abstracts, acknowledge the limitation: lower relevance_scores
       across the board, include more transferable-skill paths, and add a note in the
       career_narrative about how a more detailed abstract would improve results.
    4. Always include at least one "non-obvious" career path that the scholar likely hasn't
       considered — this is the key value of the tool.
    5. Salary ranges should reflect Indian market rates for PhD holders, not global rates.
    6. All JSON field names must use snake_case exactly as specified above.
    
    ## OUTPUT FORMAT
    Return ONLY valid JSON. No markdown, no explanation, no text outside the JSON object.
    The response must parse with JSON.parse() without errors.
    

### User Prompt Template
    
    
    // User prompt — constructed per request
    
    Translate this PhD research into industry career paths:
    
    Thesis Title: {{thesis_title}}
    Discipline: {{discipline}}
    
    Thesis Abstract:
    {{thesis_abstract}}
    

### Complete Response JSON Schema
    
    
    // packages/shared/src/schemas/ai.schema.ts
    
    import { z } from 'zod';
    
    export const CareerPathSchema = z.object({
      title: z.string(),
      description: z.string(),
      relevance_score: z.number().min(0).max(1),
      why_it_fits: z.string(),
      company_examples: z.array(z.string()).min(1).max(5),
      salary_range: z.string().optional(),
      growth_outlook: z.enum(['Strong', 'Moderate', 'Emerging']),
    });
    
    export const SkillMappingSchema = z.object({
      academic_skill: z.string(),
      industry_translation: z.string(),
      relevant_sectors: z.array(z.string()).min(1).max(4),
    });
    
    export const IndustryRoleSchema = z.object({
      job_title: z.string(),
      company: z.string(),
      location: z.string(),
      why_this_role: z.string(),
      confidence_score: z.number().min(0).max(1),
    });
    
    export const TranslationOutputSchema = z.object({
      career_paths: z.array(CareerPathSchema).min(5).max(8),
      skill_mapping: z.array(SkillMappingSchema).min(5).max(10),
      industry_roles: z.array(IndustryRoleSchema).min(3).max(5),
      career_narrative: z.string().min(50).max(500),
    });
    

### Caching Strategy

### Redis Cache Design

**Cache Key:** `ai:translate:{sha256(discipline + normalized_abstract)}`  
**Normalization:** Lowercase, trim whitespace, remove punctuation, collapse multiple spaces. This ensures near-identical abstracts hit the same cache entry.  
**TTL:** 24 hours (86400 seconds).  
**Cache Value:** Full JSON response (gzipped if >1KB).  
**Cache Invalidation:** No manual invalidation in POC. TTL-based expiry only.  
**Estimated Hit Rate:** 5-15% (PhD abstracts are highly unique, but repeat usage and demo users will generate hits).

### Cost Optimization

Parameter| Value| Notes  
---|---|---  
**Primary Model** | `gpt-4o-mini` | $0.15/1M input tokens, $0.60/1M output tokens  
**Fallback Model** | `claude-3-5-haiku-latest` | $0.25/1M input, $1.25/1M output. Used when OpenAI returns 5xx or times out (>15s)  
**Avg Input Tokens/Request** | ~1,500 | System prompt (~800) + user prompt + abstract (~700)  
**Avg Output Tokens/Request** | ~1,200 | Structured JSON response with 5-8 career paths  
**Cost Per Translation** | $0.002 - $0.005 | Varies with abstract length and output complexity  
**Monthly Budget Cap** | $50 | Supports 10,000-25,000 translations/month. Implemented as a Redis counter with daily check.  
**Budget Enforcement** | Redis counter | `ai:budget:{YYYY-MM}` — incremented per request. When total_cost_cents ≥ 5000, new requests return 503 with "Monthly AI budget reached" message.  
  
### Fallback Chain

### Fallback Logic (in order)

**Step 1:** Check Redis cache. If hit → return cached result immediately (latency: ~5ms).  
**Step 2:** Call OpenAI GPT-4o-mini with 15-second timeout. If success → validate response with Zod → cache in Redis → store in DB → return.  
**Step 3 (OpenAI fails):** Call Anthropic Claude Haiku with 15-second timeout. Same validation + caching flow.  
**Step 4 (both fail):** Search DB for translations with the same discipline from the past 30 days, ordered by user_rating desc. Return the highest-rated one as a "similar translation" with a `fallback: true` flag and a message: "We couldn't generate a fresh translation right now. Here's a similar result from another scholar in your discipline."  
**Step 5 (no fallback available):** Return 503 with a user-friendly error and estimated retry time.

### Evaluation Metrics

Metric| Target| Measurement Method| Frequency  
---|---|---|---  
**User Satisfaction** | Average rating ≥ 3.5/5 | User-submitted `user_rating` field | Continuous  
**Usefulness Rate** | >70% rate 4 or 5 stars | SQL query: `COUNT(rating ≥ 4) / COUNT(rated)` | Weekly dashboard check  
**Hallucination Rate** | <5% fabricated companies | Manual audit of 100 random translations: verify each company exists and plausibly hires in the stated domain | Monthly  
**Latency (P95)** | <5 seconds end-to-end | NestJS interceptor timing: request receive → response sent | Continuous (logged)  
**Cache Hit Rate** | >5% | Redis HIT/MISS counter | Weekly  
**Fallback Rate** | <2% of requests | Counter of Claude Haiku or DB fallback usage | Weekly  
  
Section 06

## UI/UX Wireframes

Detailed text descriptions of every screen in the POC, with layout zones, component placement, and interaction behaviors. These are the design specs Dev 1 builds from.

#### 1 Landing Page / Login

The first screen every visitor sees. Must communicate what PhDSetu is and convert to sign-up within 10 seconds.

**Navigation Bar (fixed top)** PhDSetu logo (left) — "About" link — "Resources" link — "Sign In" button (outlined) — "Get Started" button (filled, accent color). On mobile: hamburger menu. 

**Hero Section (full viewport height)** Background: dark gradient matching brand. Headline: "Translate Your PhD Into a Career That Matters" (Playfair Display, 48-64px). Subheadline: "India's first career infrastructure for PhD scholars. Build your Research Passport, discover industry career paths, and access curated resources — all free." (Inter, 18px, light opacity). Two CTAs side by side: "Create Your Research Passport" (filled button, large) and "Try the AI Career Translator" (outlined button). Below CTAs: three stat cards in a row — "200K+ PhD scholars in India", "27+ disciplines covered", "Free forever for scholars". 

**How It Works (3-step section)** Three horizontal cards with icons and numbers: (1) "Build Your Research Passport" — create a structured profile that translates your research. (2) "Translate Your Research" — paste your thesis abstract, get AI-powered career path suggestions. (3) "Discover Resources" — curated guides, templates, and tools for PhD career transitions. 

**Sign-In Modal (triggered by buttons)** Centered modal with: "Sign in with Google" (large Google-branded button, primary option). Divider: "or continue with email". Email input + Password input + "Sign In" button. Below: "New to PhDSetu? Create an account" link → switches to registration fields (adds Name field + "Create Account" button). "Forgot Password?" link at bottom. 

**Footer** PhDSetu logo + tagline — Quick links (About, Resources, Privacy Policy, Terms) — "Built with care for India's PhD community" — Copyright. 

#### 2 Research Passport Onboarding (Multi-Step Form)

Shown immediately after first sign-in if no profile exists. Cannot be skipped. Must feel fast and encouraging — not like a bureaucratic form.

**Progress Bar (top, persistent across all steps)** Horizontal progress bar showing 4 steps with labels: "Basic Info" → "Research Details" → "Career Interests" → "Preview". Current step highlighted in accent color. Completed steps show checkmark. Progress percentage shown (e.g., "Step 2 of 4 — 50% complete"). 

**Step 1: Basic Information** Form fields (single column, generous spacing): Full Name (pre-filled from Google/registration, editable) — University (text input with autocomplete from top 500 Indian universities) — Department (text input) — Discipline (searchable dropdown, all 27 enum values with readable labels) — Sub-discipline (text input, optional) — Current Status (radio group: "Currently pursuing PhD", "Completed PhD", "Postdoc", "Working in industry", "Actively looking"). CTA: "Continue →" button. 

**Step 2: Research Details** Thesis Title (text input, max 300 chars with char counter) — Thesis Abstract (large textarea, min 100 / max 5000 chars with char counter, placeholder: "Paste your thesis abstract here. This will be used by our AI Career Translator to find matching career paths.") — Supervisor Name (text input) — Enrollment Year (number select 1980-2030) — Completion Year (number select, nullable, "Not yet completed" option) — Publications Count (number input, default 0) — Key Skills (tag input: type skill and press Enter, minimum 3 recommended, badges shown below input, removable). CTA: "← Back" and "Continue →" buttons. 

**Step 3: Career Interests** Industry Interests (multi-select checkboxes in a grid: Pharmaceuticals, IT/Software, Manufacturing, Consulting, EdTech, Government/PSU, Research Labs, Startups, Finance, Healthcare, Energy, Agriculture, Media, NGO/Development) — Career Goals (textarea, max 1000 chars, placeholder: "What kind of career impact do you want to make?") — Location preferences: City (text) + State (dropdown of Indian states) — Willing to Relocate (toggle switch) — Open to Opportunities (toggle switch, default on) — Profile Visibility (radio: Public, Community Only, Private). CTA: "← Back" and "Preview Profile →" buttons. 

**Step 4: Profile Preview** Full profile card rendered as it will appear to others. Profile completion percentage shown prominently (circular progress indicator). List of missing fields that would increase completion: "Add a bio (+5%)", "Add your LinkedIn URL (+bonus)". Optional fields: LinkedIn URL — Google Scholar URL — ORCID ID — Profile Photo upload (drag-and-drop zone, max 2MB, JPG/PNG). CTA: "← Back to Edit" and "Create My Research Passport ✓" (large, celebratory button). 

#### 3 Research Passport Profile View

The public-facing profile page. Clean, professional, card-based layout optimized for readability.

**Profile Header (full-width card)** Left: Avatar (80px circle, fallback to initials). Right of avatar: Name (24px, bold) — Headline (16px, muted) — University + Department (14px) — Location badge (city, state) — Status badge (colored: green for "Open to opportunities"). Far right: "Edit Profile" button (only if own profile) + Share icon button. 

**Profile Completion Meter (only visible to profile owner)** Horizontal progress bar with percentage. Below: "Complete your profile to increase visibility" + specific suggestions (e.g., "Add your thesis abstract to unlock AI Career Translation"). 

**Main Content (two-column on desktop, single on mobile)** Left column (60%): Thesis section — Title in large font, Abstract in readable paragraph, Discipline + Sub-discipline badges. Skills section — key skills as colored tag badges in a flowing grid. Career Goals — text block. Right column (40%): "Translate My Research" CTA card (accent gradient background, "See what careers match your research" + button → links to /translate pre-filled with thesis). Academic details card: Enrollment year, completion year, supervisor, publications count. Links card: LinkedIn, Google Scholar, ORCID icons with links. Industry Interests as small badges. 

#### 4 AI Career Translator

The flagship feature. Must feel magical. Input on the left, results on the right (or stacked on mobile).

**Input Section (card)** Heading: "Translate Your Research Into Career Paths". Discipline dropdown (pre-filled if user has profile). Thesis Title input (optional, helps improve results). Large textarea for thesis abstract (pre-filled from profile if exists, editable). Character count and minimum indicator. "Translate My Research" button (large, accent colored, full width). Loading state: button shows spinner + "Translating... typically takes 3-5 seconds". 

**Results Section (appears after translation completes)** _Section A — Career Paths:_ Each path as an expandable card. Collapsed view: title + relevance score (as colored bar/badge: green >0.8, yellow 0.5-0.8, gray <0.5) + growth outlook badge. Expanded view: full description, "Why It Fits" text (highlighted with the scholar's specific skills), company examples as logo-less badges, salary range. _Section B — Skill Mapping:_ Two-column table. Left column header: "Your Academic Skills". Right column header: "Industry Translation". Each row shows the mapping with relevant sectors as small badges below. _Section C — Specific Job Suggestions:_ Cards with: Job Title (bold), Company Name, Location, "Why This Role" text, Confidence indicator (high/medium/low with color). _Section D — Career Narrative:_ Blockquote-styled motivational paragraph personalized to the scholar. 

**Rating Section (bottom of results)** "How useful was this translation?" — 5-star interactive rating (click to rate, stars fill on hover). Optional feedback textarea: "Tell us how we can improve (optional)". "Submit Rating" button. After submission: "Thank you! Your feedback helps us improve." "Try Another Abstract" button — clears input, scrolls to top. "Save to My Profile" button — stores translation reference on the user's dashboard. 

#### 5 Resource Hub

A curated library of career resources. Think "Product Hunt for PhD career resources" — browsable, searchable, bookmarkable.

**Top Section** Page title: "Resource Hub" — subtitle: "Curated resources for your PhD career journey". Search bar (full width, prominent, with search icon, placeholder: "Search resources..."). Below search: Category filter chips (horizontally scrollable): All — Resume — Interview — Networking — Industry Knowledge — Skill Building — Mental Health — Women in STEM. Active chip is filled/colored. 

**Featured Resources (conditional, shown when no filters active)** Horizontal scroll row of 3-4 featured resource cards (larger, with gradient accent border). Each card: Type badge (article/video/template/etc.), Title (18px bold), Description (2 lines truncated), Discipline tags, "Featured" star badge. 

**Resource Grid** Cards in a responsive grid (3 columns desktop, 2 tablet, 1 mobile). Each ResourceCard: Content type badge (top-left, colored: blue=article, red=video, green=template, purple=tool, amber=guide, teal=career_path). Title (16px, bold, 2 lines max). Description (14px, 3 lines max, truncated). Discipline tags (small badges, max 3 shown + "+N more"). Bottom row: Upvote button with count (left), Bookmark icon button (right). Difficulty badge (bottom-left: beginner/intermediate/advanced). Click anywhere on card → navigates to resource detail or external URL. 

**Sidebar Filters (desktop only, left side)** Content Type checkboxes — Difficulty Level checkboxes — Discipline multi-select — Sort dropdown (Newest, Most Upvoted, Most Viewed). "Clear All Filters" link. 

**Pagination** Bottom of grid: "Showing 1-20 of 156 resources". Previous / Page numbers / Next buttons. 

#### 6 Dashboard

The authenticated user's home screen after login. Personalized, actionable, encouraging.

**Welcome Section (top)** "Welcome back, [First Name]!" (24px). Profile completion nudge card (if <100%): horizontal progress bar + "Complete your profile — you're at 65%. Add your thesis abstract to reach 80%." + "Complete Now →" button. 

**Quick Actions (horizontal card row)** Three action cards: (1) "Translate Your Research" → /translate (2) "Browse Resources" → /resources (3) "View Your Profile" → /profile/me. Each card has an icon, title, and brief description. 

**Recent AI Translations** Heading: "Your Recent Translations". List of up to 5 most recent translations as compact cards: Abstract preview (truncated, 100 chars) — Discipline badge — Date — Rating (stars, or "Rate this" link if unrated) — "View Full Results →" link. Empty state: "You haven't translated any research yet. Try the AI Career Translator →". 

**Bookmarked Resources** Heading: "Your Bookmarks". Grid of up to 4 bookmarked ResourceCards (compact variant). "View All Bookmarks →" link. Empty state: "No bookmarks yet. Explore the Resource Hub to find useful guides and templates →". 

**Community Stats (bottom card)** Three stats in a row: "X scholars on PhDSetu" — "Y translations performed" — "Z resources curated". These are fetched from a lightweight public stats endpoint. Subtle, encouraging — "You're part of a growing community." 

Section 07

## Sprint Plan

Four two-week sprints with person-level assignments. Every task has an owner, and every owner knows what they're building each day.

Sprint 1 — Weeks 1 & 2: Foundation

#### Project Scaffolding, Auth System, CI/CD, Base Layout

By the end of Sprint 1, a user can sign in with Google or email, see a responsive layout shell, and the full CI/CD pipeline deploys to staging on every merge.

### Dev 1 — Frontend

  * Initialize Next.js 14 with App Router
  * Configure Tailwind CSS + shadcn/ui
  * Set up NextAuth.js (Google + Credentials)
  * Build Navbar, Footer, responsive shell layout
  * Build Landing page (hero, how-it-works)
  * Build Login/Register modal UI
  * Configure typed API client (fetch wrapper)
  * Deploy to Vercel, configure preview deploys



### Dev 2 — Backend

  * Initialize NestJS project with TypeScript
  * Configure Prisma ORM + PostgreSQL connection
  * Write and run all database migrations
  * Build Auth module: register, login, JWT, Google OAuth
  * Build JWT guard + Roles guard
  * Set up Redis connection (Upstash)
  * Configure CORS, Helmet, rate limiting
  * Deploy to Railway, configure docker-compose for local dev
  * Seed database with test data



### Trupti — CTO

  * Set up monorepo (pnpm workspaces + Turborepo)
  * Configure shared packages (types, schemas)
  * Set up GitHub Actions CI/CD pipeline
  * Write .env.example with all variables
  * Begin AI Career Translator R&D;: test prompts with GPT-4o-mini playground
  * Iterate on system prompt with 10+ real abstracts
  * Define Zod schemas for all shared types
  * Architecture review, code reviews



**Sprint 1 Definition of Done** User can visit landing page → click "Sign in with Google" → authenticate → see empty dashboard shell with navbar. Backend deploys to Railway and responds to `GET /api/health`. CI pipeline runs lint + type-check + tests on every PR. 

Sprint 2 — Weeks 3 & 4: Research Passport

#### Profile Creation, View, Edit, Search, Completion Logic

By the end of Sprint 2, a user can create a complete Research Passport profile, view it, edit it, and browse other scholars' profiles with search and filters.

### Dev 1 — Frontend

  * Build multi-step onboarding form (4 steps with React Hook Form + Zod)
  * Build StepIndicator + ProgressBar components
  * Build tag input component (for skills)
  * Build Profile View page (/profile/[id])
  * Build Profile Edit page (/profile/edit)
  * Build Profile Browse/Search page (/profile)
  * Build ProfileCard component
  * Build SearchBar + FilterChips components



### Dev 2 — Backend

  * Build Profiles module (controller, service, DTOs)
  * Implement all 6 profile endpoints
  * Implement profile completion % computation
  * Implement full-text search migration + query
  * Implement pagination helper
  * Write integration tests for all profile endpoints
  * Implement visibility access control



### Trupti — CTO

  * Build AI service layer: OpenAI client + Anthropic client
  * Implement Redis caching layer for AI responses
  * Finalize and lock system prompt (v1.0)
  * Test with 30+ abstracts across disciplines
  * Implement fallback chain logic
  * Code reviews for both devs
  * Cloudflare R2 setup for file uploads



**Sprint 2 Definition of Done** User completes multi-step onboarding → profile created with computed completion % → can view and edit profile → can search/browse other profiles with filters. All profile API endpoints pass integration tests. 

Sprint 3 — Weeks 5 & 6: AI Translator + Resource Hub

#### Full AI Implementation, Resource CRUD, Bookmarks, Upvotes

By the end of Sprint 3, the AI Career Translator is fully functional with caching, and the Resource Hub is browsable with bookmarking and upvoting.

### Dev 1 — Frontend

  * Build AI Translator page (input form + results display)
  * Build CareerPathCard (expandable), SkillMappingTable
  * Build star rating component + feedback form
  * Build loading animation for translation
  * Build Resource Hub page (grid + filters + search)
  * Build ResourceCard component
  * Build bookmark toggle + upvote toggle interactions
  * Build EmptyState + ErrorBoundary components



### Dev 2 — Backend

  * Build AI module (controller, service, DTOs)
  * Integrate OpenAI + Anthropic SDKs
  * Implement translate endpoint with caching
  * Implement rating endpoint
  * Build Resources module (full CRUD)
  * Implement bookmark toggle + upvote toggle
  * Implement resource full-text search
  * Write integration tests for AI + Resources



### Trupti — CTO

  * Prompt optimization based on 50+ test translations
  * Tune response quality for humanities/social sciences
  * Implement budget cap enforcement
  * Run hallucination audit on 50 translations
  * Curate initial 50 resources across all categories
  * Code reviews, cross-team integration testing



**Sprint 3 Definition of Done** User can translate thesis abstract → see structured career paths → rate translation. Resource Hub shows 50+ curated resources with category filtering, search, bookmarks, and upvotes. AI responses cached in Redis. Fallback chain tested. 

Sprint 4 — Weeks 7 & 8: Polish + Launch

#### Dashboard, Performance, Mobile, SEO, Production Deploy

By the end of Sprint 4, the POC is production-ready, performant on 3G connections, mobile-responsive, and deployed to production infrastructure.

### Dev 1 — Frontend

  * Build Dashboard page (all sections)
  * Mobile responsiveness audit (all pages)
  * Add SEO meta tags, OpenGraph, structured data
  * Build 404 and error pages
  * Write Playwright E2E tests (signup, profile, translate)
  * Image optimization (next/image, WebP)
  * Toast notification system
  * Accessibility audit (WCAG 2.1 AA)



### Dev 2 — Backend

  * Performance optimization (query analysis, N+1 fixes)
  * Global error handling (exception filters)
  * Request logging interceptor
  * Health check endpoint with DB/Redis status
  * Production environment setup (Railway)
  * Neon PostgreSQL production database setup
  * Sentry error tracking integration
  * API documentation (auto-generated Swagger)



### Trupti — CTO

  * Load testing (k6: simulate 100 concurrent users)
  * Security audit (checklist in Section 10)
  * Lighthouse performance audit (<2s on 3G)
  * PostHog analytics integration
  * UptimeRobot monitoring setup
  * Beta user onboarding (first 20 scholars)
  * Cloudflare DNS + WAF configuration
  * Go-live decision + production deploy



**Sprint 4 Definition of Done** All features working end-to-end on production. Lighthouse mobile score ≥85\. 3 critical E2E flows passing in CI. Sentry + PostHog + UptimeRobot configured. First 20 beta users invited and able to create profiles. Domain live at phdsetu.com (or staging URL). 

Section 08

## Component Library Specification

Every React component needed for the POC, with its props interface. Built with shadcn/ui as the base, extended with custom components.

### Base UI Components (shadcn/ui)

##### <Button />

Primary interaction element. Supports loading spinner state.

variant: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' size: 'default' | 'sm' | 'lg' | 'icon' loading?: boolean disabled?: boolean asChild?: boolean

##### <Input />

Text input with label, error state, and helper text support.

type: 'text' | 'email' | 'password' | 'number' | 'url' label: string error?: string helperText?: string required?: boolean

##### <Textarea />

Multi-line text input with character counter and max length enforcement.

rows?: number (default: 4) maxLength?: number showCharCount?: boolean label: string error?: string

##### <Select />

Dropdown select with search/filter capability for long lists.

options: { value: string; label: string }[] searchable?: boolean placeholder?: string value: string onChange: (value: string) => void

##### <Card />

Container component with optional header, footer, and hover effects.

variant: 'default' | 'featured' | 'profile' | 'compact' hoverable?: boolean clickable?: boolean className?: string

##### <Badge />

Small label/tag for categorization and status indication.

variant: 'default' | 'secondary' | 'destructive' | 'outline' color?: 'red' | 'green' | 'blue' | 'yellow' | 'purple' | 'teal' removable?: boolean onRemove?: () => void

##### <Modal />

Dialog overlay for auth forms and confirmations.

open: boolean onClose: () => void title: string description?: string size?: 'sm' | 'md' | 'lg'

##### <Toast />

Notification toast for success, error, and info messages. Auto-dismisses.

type: 'success' | 'error' | 'info' | 'warning' message: string duration?: number (default: 5000ms) dismissable?: boolean

### Layout Components

##### <Navbar />

Fixed top navigation. Shows auth state (sign in vs. user avatar dropdown).

user?: User | null transparent?: boolean (for landing page hero)

##### <Footer />

Site footer with links, copyright, and branding.

minimal?: boolean (hides links for auth pages)

### Feature Components

##### <ProfileCard />

Summary card for scholar profiles in browse/search results.

profile: ProfileSummary onClick?: () => void

##### <ResourceCard />

Card for resource items with type badge, upvote, and bookmark.

resource: ResourceItem onBookmark?: () => void onUpvote?: () => void compact?: boolean

##### <CareerPathCard />

Expandable card showing a single career path from AI translation.

path: CareerPath defaultExpanded?: boolean

##### <SkillTag />

Colored tag for displaying skills with optional remove button.

label: string removable?: boolean onClick?: () => void colorIndex?: number

##### <ProgressBar />

Horizontal progress indicator with percentage label.

value: number (0-100) showLabel?: boolean color?: string size?: 'sm' | 'md' | 'lg'

##### <StepIndicator />

Multi-step progress for onboarding form wizard.

steps: { label: string; description?: string }[] currentStep: number completedSteps: number[]

##### <SearchBar />

Search input with debounced onChange and clear button.

placeholder?: string value: string onChange: (value: string) => void debounceMs?: number (default: 300)

##### <FilterChips />

Horizontally scrollable filter chip bar for categories.

options: { value: string; label: string }[] selected: string | string[] onChange: (value: string) => void multiSelect?: boolean

##### <TagInput />

Input that creates tags/badges as user types and presses Enter.

tags: string[] onChange: (tags: string[]) => void maxTags?: number placeholder?: string suggestions?: string[]

##### <StarRating />

Interactive 5-star rating input with hover preview.

value: number | null onChange: (rating: number) => void readonly?: boolean size?: 'sm' | 'md' | 'lg'

##### <LoadingSpinner />

Animated spinner for async operations. Full-page or inline.

size?: 'sm' | 'md' | 'lg' fullPage?: boolean text?: string

##### <EmptyState />

Placeholder shown when a list/section has no data.

icon?: React.ReactNode title: string description: string action?: { label: string; href: string }

##### <ErrorBoundary />

Catches rendering errors and shows a friendly fallback UI.

fallback?: React.ReactNode onError?: (error: Error) => void children: React.ReactNode

##### <Pagination />

Page navigation with previous/next and page number buttons.

currentPage: number totalPages: number onPageChange: (page: number) => void showTotal?: boolean totalItems?: number

Section 09

## Environment Variables

Complete list of all environment variables required to run the application. Copy `.env.example` to `.env` and fill in all values before starting development.
    
    
    # ──────────────────────────────────────────────────────────────
    # .env.example — PhDSetu POC Environment Variables
    # Copy this file to .env and fill in all values
    # ──────────────────────────────────────────────────────────────
    
    # ─── DATABASE ─────────────────────────────────────────────────
    DATABASE_URL="postgresql://user:password@localhost:5432/phdsetu?schema=public"
    # Neon (production): postgresql://user:pass@ep-xxx.us-east-2.aws.neon.tech/phdsetu?sslmode=require
    
    # ─── REDIS ────────────────────────────────────────────────────
    REDIS_URL="redis://localhost:6379"
    # Upstash (production): rediss://default:xxx@xxx.upstash.io:6379
    
    # ─── AUTHENTICATION ──────────────────────────────────────────
    NEXTAUTH_SECRET="generate-with-openssl-rand-base64-32"
    NEXTAUTH_URL="http://localhost:3000"
    # Production: https://phdsetu.com
    
    GOOGLE_CLIENT_ID="your-google-client-id.apps.googleusercontent.com"
    GOOGLE_CLIENT_SECRET="your-google-client-secret"
    # Get from: https://console.cloud.google.com/apis/credentials
    
    JWT_ACCESS_SECRET="generate-unique-secret-for-access-tokens"
    JWT_REFRESH_SECRET="generate-unique-secret-for-refresh-tokens"
    JWT_ACCESS_EXPIRY="15m"
    JWT_REFRESH_EXPIRY="7d"
    
    # ─── AI PROVIDERS ────────────────────────────────────────────
    OPENAI_API_KEY="sk-your-openai-api-key"
    # Get from: https://platform.openai.com/api-keys
    
    ANTHROPIC_API_KEY="sk-ant-your-anthropic-api-key"
    # Get from: https://console.anthropic.com/settings/keys
    # Used as fallback when OpenAI is unavailable
    
    AI_MONTHLY_BUDGET_CENTS="5000"
    # $50/month cap. Set higher for production scaling.
    
    # ─── FILE STORAGE (Cloudflare R2) ────────────────────────────
    R2_ACCESS_KEY_ID="your-r2-access-key"
    R2_SECRET_ACCESS_KEY="your-r2-secret-key"
    R2_BUCKET_NAME="phdsetu-uploads"
    R2_ENDPOINT="https://your-account-id.r2.cloudflarestorage.com"
    R2_PUBLIC_URL="https://uploads.phdsetu.com"
    
    # ─── APPLICATION ─────────────────────────────────────────────
    NEXT_PUBLIC_API_URL="http://localhost:3001/api"
    # Production: https://api.phdsetu.com/api
    
    NODE_ENV="development"
    # Values: development | production | test
    
    PORT="3001"
    # NestJS backend port (frontend runs on 3000)
    
    # ─── MONITORING (Sprint 4) ───────────────────────────────────
    SENTRY_DSN="https://xxx@xxx.ingest.sentry.io/xxx"
    NEXT_PUBLIC_POSTHOG_KEY="phc_your-posthog-project-key"
    NEXT_PUBLIC_POSTHOG_HOST="https://app.posthog.com"
    

**Security Warning** Never commit `.env` files to Git. The `.gitignore` must include `.env`, `.env.local`, `.env.production`. All secrets in production must be set via Railway/Vercel dashboard environment variables, not files. 

Section 10

## Security Checklist

Every security measure required before production launch. Trupti audits this checklist in Sprint 4, Week 8.

### Authentication & Authorization

  * **Password hashing:** bcrypt with 12 salt rounds. Never store plaintext. Use `@nestjs/common` bcrypt wrapper.
  * **JWT token expiry:** Access tokens expire in 15 minutes. Refresh tokens expire in 7 days. Refresh rotation: issuing a new refresh token invalidates the old one.
  * **CSRF protection:** NextAuth.js includes built-in CSRF tokens for all auth forms. For the NestJS API, the Bearer token in the Authorization header provides implicit CSRF protection.
  * **Role-based access control:** NestJS `@Roles()` decorator + `RolesGuard` on admin-only endpoints. Resource-level ownership checks in service layer (not just guards).
  * **OAuth state parameter:** NextAuth.js handles OAuth state validation automatically. Prevents CSRF on OAuth flow.
  * **Session invalidation:** On logout, delete session from Redis. On password change, invalidate all existing refresh tokens for that user.



### Data Protection

  * **DPDP Act 2023 compliance:** Collect consent at registration (checkbox: "I agree to PhDSetu's Privacy Policy and data processing terms"). Store consent timestamp. Provide data export endpoint (GET /api/auth/me/export). Provide account deletion endpoint (DELETE /api/auth/me). Display privacy policy with data processing purpose.
  * **PII encryption at rest:** Neon PostgreSQL encrypts data at rest by default (AES-256). Cloudflare R2 encrypts objects at rest.
  * **PII in logs:** Never log passwords, tokens, or full email addresses. Use request logging interceptor that redacts sensitive fields.
  * **Data retention:** AI translation inputs are stored indefinitely (needed for quality analysis). Users can delete their account and all associated data.



### API Security

  * **Rate limiting:** Per-endpoint rate limits (documented in API spec). Implemented via `@nestjs/throttler` with Redis store. Separate limits for authenticated vs. unauthenticated requests.
  * **Input sanitization:** All HTML content (bodyHtml field) sanitized with DOMPurify before storage. All text inputs validated with Zod schemas (length limits, format checks). URL inputs validated for format.
  * **SQL injection prevention:** Prisma ORM parameterizes all queries automatically. No raw SQL queries except the full-text search migration (one-time, no user input).
  * **XSS prevention:** React escapes all rendered text by default. HTML content (bodyHtml) sanitized server-side. `Content-Security-Policy` header set via Helmet.
  * **CORS configuration:** Allow only the frontend origin: `https://phdsetu.com` (production), `http://localhost:3000` (development). No wildcard `*` origins.
  * **Helmet headers:** NestJS Helmet middleware sets: X-Content-Type-Options, X-Frame-Options (DENY), X-XSS-Protection, Strict-Transport-Security, Content-Security-Policy, Referrer-Policy.
  * **File upload validation:** Profile photos: max 2MB, JPG/PNG/WebP only. CV uploads (Phase 2): max 5MB, PDF only. MIME type validation (not just extension). Virus scan deferred to Phase 2.



### Infrastructure

  * **HTTPS everywhere:** Vercel and Railway both enforce HTTPS. Cloudflare provides SSL termination. HSTS header with 1-year max-age.
  * **Environment variables:** All secrets stored in hosting provider dashboards, never in code or Git.
  * **Dependency auditing:** `npm audit` runs in CI pipeline. Dependabot configured for automated security PRs.
  * **Error messages:** Production error responses never leak stack traces, SQL queries, or internal paths. Generic "Internal Server Error" for 500s with Sentry tracking for debugging.



Section 11

## Testing Strategy

Three testing layers with clear ownership, coverage targets, and CI integration. Quality gates must pass before any PR merges.

### Unit Tests

**Framework:** Jest + ts-jest  
**Target:** 80%+ coverage on service layer  
**Owner:** Each developer writes tests for their code  
**Scope:** NestJS services (business logic), Zod schema validation, utility functions, profile completion computation, AI response parsing/validation, pagination helpers.  
**Mocking:** Prisma client mocked for DB calls. Redis mocked for cache. OpenAI/Anthropic mocked for AI calls.  
**Run:** `pnpm test` (runs all unit tests)  
**CI:** Runs on every PR, blocks merge if any test fails.

### Integration Tests

**Framework:** Jest + Supertest  
**Target:** All API endpoints tested  
**Owner:** Dev 2 (backend)  
**Scope:** Full request→response cycle for every API endpoint. Tests against a real test PostgreSQL database (Neon branch or local Docker). Validates: correct status codes, response shapes, auth enforcement, rate limiting, error cases, pagination.  
**Setup:** Before each test suite: run migrations, seed test data. After: clean up test data.  
**Run:** `pnpm test:integration`  
**CI:** Runs on every PR, uses a dedicated test database.

### E2E Tests

**Framework:** Playwright  
**Target:** 3 critical flows  
**Owner:** Dev 1 (frontend), Sprint 4  
**Critical Flows:**  
1\. **Sign Up Flow:** Landing → Sign in with email → Complete onboarding (4 steps) → See dashboard  
2\. **AI Translation Flow:** Navigate to translator → Enter abstract → Submit → See results → Rate translation  
3\. **Resource Hub Flow:** Browse resources → Filter by category → Search → Bookmark a resource → Verify in dashboard bookmarks  
**Run:** `pnpm test:e2e`  
**CI:** Runs on merge to main (not on every PR due to execution time).

### CI Pipeline (GitHub Actions)

Every PR triggers: (1) **Lint:** ESLint + Prettier check across all packages. (2) **Type Check:** `tsc --noEmit` for both frontend and backend. (3) **Unit Tests:** Jest with coverage report. (4) **Integration Tests:** Supertest against test database. (5) **Build:** Both apps must build without errors. On merge to main: all of the above + (6) **E2E Tests:** Playwright headless browser tests. (7) **Deploy:** Automatic deployment to staging (Railway + Vercel). Production deploy is manual trigger by Trupti.

Section 12

## Monitoring & Analytics

Observability from Day 1. Every metric needed to validate the POC success criteria and debug issues in production.

🚨

### Error Tracking — Sentry

**Tier:** Free (5K events/month)  
**Setup:** `@sentry/nextjs` for frontend, `@sentry/nestjs` for backend.  
**Configuration:** Capture unhandled exceptions, rejected promises, and console.error calls. Source maps uploaded on deploy for readable stack traces. Alert to Slack channel on first occurrence of any new error type. Ignore: 404s, 401s (expected auth failures), network timeouts.  
**Custom Context:** Attach user ID (never email) and current page/route to error events for faster debugging.

📊

### Product Analytics — PostHog

**Tier:** Free (1M events/month)  
**Setup:** `posthog-js` client-side SDK. Initialize in Next.js layout.  
**Key Events to Track:**  
• `user_signed_up` (provider: google/email)  
• `profile_created` (completion_pct, discipline)  
• `profile_updated` (fields_changed[])  
• `translation_requested` (discipline, abstract_length)  
• `translation_completed` (model_used, latency_ms, cached)  
• `translation_rated` (rating, has_feedback)  
• `resource_viewed` (category, content_type)  
• `resource_bookmarked` / `resource_upvoted`  
• `page_viewed` (automatic with PostHog)

✅

### API Health Checks — NestJS

**Endpoint:** `GET /api/health`  
**Checks:** Database connectivity (Prisma `$queryRaw SELECT 1`), Redis connectivity (PING), Disk space (if self-hosted), Memory usage.  
**Response:** `{ status: "ok", uptime: "12h 34m", db: "ok", redis: "ok", version: "1.0.0" }`  
**Degraded state:** Returns 200 with individual component status if any check fails. Returns 503 only if the database is down.

⏰

### Uptime Monitoring — UptimeRobot

**Tier:** Free (50 monitors, 5-minute intervals)  
**Monitors:**  
• Frontend: `https://phdsetu.com` (HTTP 200 check)  
• Backend API: `https://api.phdsetu.com/api/health` (HTTP 200 + keyword "ok")  
• Database (indirect): covered by /api/health check  
**Alerting:** Email + Slack notification on downtime. 3 retries before alerting (avoids false positives). Status page at `status.phdsetu.com` (UptimeRobot free status page).

### Key Metrics Dashboard (PostHog)

Metric| Success Target| PostHog Query| Review Frequency  
---|---|---|---  
Daily Active Users (DAU) | ≥30 by Week 4 | Unique users with any event per day | Daily  
Profile Completion Rate | ≥60% of signups complete profile | `profile_created` / `user_signed_up` | Weekly  
AI Translations per Day | ≥15/day by Week 4 | Count of `translation_completed` per day | Daily  
AI Satisfaction Rate | ≥70% rate 4-5 stars | `translation_rated` where rating ≥ 4 | Weekly  
Resource Engagement | ≥3 views per session | Average `resource_viewed` events per session | Weekly  
Page Load Time (P75) | <2 seconds | PostHog Web Vitals autocapture | Weekly  
  
Section 13

## Cost Estimate

Monthly infrastructure costs for the POC phase. Aggressively optimized to stay under $30/month using free tiers wherever possible.

### Monthly Infrastructure Costs

Vercel — Frontend Hosting $0

Hobby tier. Includes 100GB bandwidth, serverless functions, preview deploys. Sufficient for up to ~10K monthly visitors.

Railway — Backend Hosting $5-10

Starter plan with $5 credit + usage. NestJS container typically uses 256MB RAM. Auto-sleeps on inactivity.

Neon — PostgreSQL Database $0

Free tier: 0.5 GB storage, 1 project, 10 branches. Serverless auto-scaling. More than sufficient for POC data volumes.

Upstash — Redis $0

Free tier: 10,000 commands/day, 256MB. Adequate for session management, AI caching, and rate limiting at POC scale.

OpenAI API — GPT-4o-mini $10-50

Usage-based. At $0.002-0.005 per translation: 500 translations = ~$2.50, 10,000 translations = ~$25. Budget cap enforced at $50/month via Redis counter.

Anthropic API — Claude Haiku (Fallback) $0-5

Only used when OpenAI is unavailable. Expected <2% of total requests. May be $0 in months with high OpenAI availability.

Cloudflare R2 — File Storage $0

Free tier: 10GB storage, 10M Class B operations, 1M Class A operations, zero egress. Profile photos at ~200KB each = ~50K photos in free tier.

Cloudflare — DNS + CDN + WAF $0

Free tier includes DNS, basic CDN, SSL, DDoS protection, and 5 WAF rules.

Sentry — Error Tracking $0

Developer tier: 5,000 errors/month, 1 user. Sufficient for POC with low error volumes.

PostHog — Analytics $0

Free tier: 1M events/month, session replays, feature flags. Far exceeds POC needs.

UptimeRobot — Monitoring $0

Free tier: 50 monitors, 5-minute check intervals, email alerts.

Domain (phdsetu.com) — Annual ~$1/mo

~$10-12/year via Cloudflare Registrar or Namecheap. Amortized to ~$1/month.

Total Estimated (Month 1) $16-$66

**Realistic estimate: Under $30/month** at POC scale (500 translations, 200 users). The $66 upper bound assumes 10K+ translations, which would mean the POC is a runaway success and justifies the cost.

**Scaling Cost Trajectory** At 1,000 users / 5,000 translations/month: ~$50-80/month. At 10,000 users / 50,000 translations/month: ~$200-400/month (would need Railway Pro, Neon Pro, higher AI budget). This cost scaling is linear and predictable — no surprise spikes. 

**PhDSetu** — POC Technical Specification v1.0

Document 22 of the PhDSetu Planning Library • Prepared for Month 4-5 Engineering Sprint • June 2026

This document is the single source of truth for the POC build. Any clarifications or change requests should be filed as GitHub Issues and discussed before implementation diverges from this spec.
