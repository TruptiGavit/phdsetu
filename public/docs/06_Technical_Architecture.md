Document 06 of 10 -- Technical Architecture

# Technical Architecture & System Design

The complete engineering blueprint for building PhDSetu -- India's first career infrastructure platform for 2,12,000+ PhD scholars. From database schemas to AI pipelines, PWA strategies to DPDP compliance.

12

Architecture Domains

5

Product Layers

8

Week MVP Sprint

200K+

Target User Scale

### Architecture Document Map

  * 01 Tech Stack Recommendation
  * 02 System Architecture & Diagrams
  * 03 Database Schema Design
  * 04 AI/ML Integration Architecture
  * 05 PWA Implementation
  * 06 Search & Discovery Engine
  * 07 Security & DPDP Compliance
  * 08 Vernacular Language Support
  * 09 Mobile App Architecture (Phase 2)
  * 10 DevOps & Infrastructure
  * 11 API Design & Integration
  * 12 Development Roadmap & Sprint Plan



Section 01

## Tech Stack Recommendation

Every technology choice is justified against PhDSetu's core constraints: mobile-first scholars on poor connectivity, limited founding team (4 people), AI-heavy feature set, DPDP compliance, and a path from 5K to 200K users without re-architecture.

#### Frontend Framework

Next.js 16 + React 19 (PWA)

**Why Next.js:** Server-side rendering (SSR) ensures fast first paint on low-end Android devices common in Indian regional universities. App Router with React Server Components reduces client-side JavaScript by 40-60%, critical for 3G/4G networks. Built-in image optimization (next/image) with automatic WebP/AVIF conversion. ISR (Incremental Static Regeneration) for career guides and resource pages -- they serve instantly from CDN while staying fresh.

**PWA via Serwist:** Serwist (modern replacement for next-pwa) integrates with Next.js 16's Turbopack bundler. Handles service worker lifecycle, precaching, and runtime caching strategies natively. Background sync for offline form submissions.

**Alternatives rejected:** Nuxt/Vue (smaller hiring pool in India), Remix (less mature PWA story), plain React SPA (no SSR, terrible for SEO and low-bandwidth users).

#### Backend Framework

Node.js 22 LTS + NestJS

**Why Node.js + NestJS:** TypeScript end-to-end (frontend + backend) means one language across the entire stack -- critical for a 2-developer team. NestJS provides opinionated structure (modules, guards, interceptors, pipes) that prevents the spaghetti code problem of raw Express. Built-in support for WebSockets (for real-time community features), Bull queue integration (for background jobs), and Swagger auto-generation.

**Why not Python/Django:** Django is excellent but introduces a second language. The team is small; cognitive overhead of context-switching between TypeScript and Python reduces velocity. Python is reserved for the AI/ML microservice where the ecosystem is genuinely superior.

**Architecture note:** Modular monolith using NestJS modules. Each product layer (Research Passport, Career Pathfinder, etc.) is a self-contained module that can be extracted into a microservice later if load demands it.

#### Database Layer

PostgreSQL 16 + Redis 7 + pgvector

**PostgreSQL:** ACID-compliant, handles complex relational queries (scholar-mentor-institution-job relationships), JSONB columns for flexible schema evolution (Research Passport metadata varies by discipline). Row-level security (RLS) for DPDP-compliant data access controls. Full-text search via tsvector as a baseline before Meilisearch adoption.

**Redis:** Session management, OTP verification (TTL-based expiry), API rate limiting (sliding window), real-time leaderboard/activity feeds, LLM response caching (semantic cache for Career Translator).

**pgvector:** PostgreSQL extension for vector embeddings. Stores scholar profile embeddings for semantic search ("find scholars with similar research interests"), career path similarity matching, and skill-gap analysis. Avoids the operational overhead of a separate vector database like Pinecone at early scale.

#### Search Engine

Meilisearch (Primary) + PostgreSQL FTS (Fallback)

**Why Meilisearch over Elasticsearch:** Meilisearch is purpose-built for instant search with typo tolerance, multi-language support, and faceted filtering -- exactly what Research Passport search needs. Written in Rust, it uses 10x less RAM than Elasticsearch (critical for cost control). Single binary deployment, zero-config. Native Hindi/regional language tokenization.

**Elasticsearch rejected for MVP:** Operationally complex (JVM tuning, cluster management, shard balancing). Overkill for <50K documents. Reserved as an upgrade path when document count exceeds 500K and complex aggregation queries are needed.

**PostgreSQL FTS as Day-1 fallback:** tsvector + ts_rank provide reasonable full-text search without any additional infrastructure. Sufficient for MVP with <10K profiles.

#### AI/ML Infrastructure

LiteLLM Gateway + Anthropic Claude + OpenAI GPT-4o

**AI Gateway (LiteLLM):** Open-source proxy that sits between the app and LLM providers. Enables multi-model routing (simple tasks -> Claude Haiku at $0.25/M tokens, complex translations -> Sonnet at $3/M), automatic failover between providers, semantic caching (30-60% cost reduction on repeated queries), and per-user token budgets.

**Model strategy:** Anthropic Claude Sonnet 4 for Career Translator (superior instruction following for structured output). OpenAI GPT-4o-mini as cost-optimized fallback. Google Gemini 2.5 Flash for multilingual translation tasks (strong Indic language performance).

**Python microservice:** FastAPI-based service for AI/ML pipelines, deployed separately. Handles Career Translator, skill matching, career path recommendations. Communicates with main backend via internal REST API.

#### File Storage & CDN

Cloudflare R2 + Cloudflare CDN

**Why R2 over S3:** Zero egress fees (S3 egress costs can spiral with 200K users downloading career guides, research papers, and course materials). S3-compatible API means zero code changes if migration is ever needed. Integrated with Cloudflare's global CDN (310+ edge locations, including 8 in India -- Mumbai, Chennai, New Delhi, Hyderabad, Kolkata, Bengaluru, Kochi, Ahmedabad).

**Storage categories:** Profile photos and documents (R2 with signed URLs, 30-day expiry). Career guides and public resources (R2 with CDN cache, 7-day TTL). Course videos for Skill Studio (R2 with HLS streaming via Cloudflare Stream). Thesis PDFs and Research Passport attachments (R2 with access controls).

#### Authentication

Email + OTP (Scholars) | SSO (Institutions) | OAuth (Employers)

**Scholar auth (mobile-first):** Email + 6-digit OTP via SMS (MSG91/Twilio India) or WhatsApp Business API. No password to remember -- critical for scholars who may use shared devices. OTP stored in Redis with 5-minute TTL, rate-limited to 5 attempts per 15 minutes.

**Institutional SSO:** SAML 2.0/OIDC integration for IITs, NITs, and central universities that have institutional identity providers. Enables university admin dashboards with pre-verified scholar enrollment.

**Employer auth:** Google/Microsoft OAuth for convenience. Email verification + company domain validation for job posting access. Multi-factor authentication (TOTP) for admin-level employer accounts.

**Implementation:** NextAuth.js v5 (Auth.js) with custom credential providers. JWT tokens (15-minute access, 7-day refresh) with httpOnly cookies. Session stored in Redis for instant revocation.

#### Hosting & Deployment

Vercel (Frontend) + Railway (Backend) + Neon (DB)

**Phase 1 (MVP, <10K users):** Vercel for Next.js frontend (automatic edge deployment, ISR, image optimization). Railway for NestJS backend + FastAPI AI service (managed containers, auto-scaling, built-in CI/CD). Neon for PostgreSQL (serverless Postgres, auto-scaling, branching for dev/staging).

**Phase 2 (10K-50K users):** Migrate backend to AWS ECS Fargate (container orchestration). RDS PostgreSQL with read replicas. ElastiCache for Redis. S3 or R2 remains for storage.

**Phase 3 (50K-200K users):** Full AWS with EKS (Kubernetes), Aurora PostgreSQL (auto-scaling storage), CloudFront CDN. Multi-AZ deployment in ap-south-1 (Mumbai).

**Cost rationale:** Vercel + Railway + Neon costs ~$50-100/month at MVP scale, compared to ~$300-500/month for AWS from day one. Premature cloud infrastructure is the #1 budget killer for Indian startups.

### The Unified TypeScript Principle

With a 2-developer founding team, every technology choice must minimize cognitive overhead. TypeScript end-to-end (Next.js frontend + NestJS backend + Prisma ORM + shared type definitions) means a single schema change propagates from database to API to UI with compile-time safety. The only exception is the AI/ML microservice in Python, where the ecosystem advantage (LangChain, transformers, scikit-learn) is overwhelming. This is a deliberate, contained boundary -- not a free-for-all polyglot architecture.

### Complete Tech Stack Summary

Layer | Technology | Version | Purpose | License  
---|---|---|---|---  
Frontend| Next.js + React| 16 / 19| SSR PWA with App Router| MIT  
PWA| Serwist| 10+| Service worker + caching| MIT  
Styling| Tailwind CSS| 4.x| Utility-first CSS framework| MIT  
Backend| NestJS + Node.js| 11 / 22 LTS| Modular monolith API| MIT  
AI Service| FastAPI + Python| 0.115 / 3.12| LLM pipelines, ML models| MIT  
ORM| Prisma| 6.x| Type-safe database access| Apache 2.0  
Primary DB| PostgreSQL| 16| Relational data + JSONB| PostgreSQL  
Vector DB| pgvector| 0.7+| Embeddings for semantic search| MIT  
Cache/Queue| Redis| 7.x| Sessions, OTP, rate limits, cache| SSPL  
Search| Meilisearch| 1.x| Full-text instant search| MIT  
AI Gateway| LiteLLM| Latest| Multi-model routing + caching| MIT  
File Storage| Cloudflare R2| -| Zero-egress object storage| Proprietary  
Auth| Auth.js (NextAuth v5)| 5.x| Multi-provider authentication| ISC  
Background Jobs| BullMQ| 5.x| Job queues (Redis-backed)| MIT  
Real-time| Socket.IO| 4.x| WebSocket for community/chat| MIT  
Email| Resend| API| Transactional email| SaaS  
SMS/OTP| MSG91| API| Indian SMS delivery| SaaS  
i18n| next-intl| 4.x| Internationalization framework| MIT  
Monitoring| Sentry + Better Stack| -| Error tracking + uptime| SaaS  
  
Section 02

## System Architecture

A modular monolith that scales. The architecture starts simple enough for two developers to ship an MVP in 8 weeks, yet has clear extraction boundaries when load demands microservices.

### Monolith-First, Microservices-Ready

PhDSetu starts as a **modular monolith** -- a single deployable unit with strict module boundaries enforced by NestJS's module system. Each product layer (Research Passport, Career Pathfinder, etc.) is a self-contained module with its own controllers, services, and repository layer. The only exception is the AI/ML service, which is a separate FastAPI microservice from day one because of its distinct language runtime (Python), different scaling profile (GPU-bound vs CPU-bound), and independent deployment cadence. This approach ships 3x faster than microservices while preserving the option to extract any module into a standalone service when a specific bottleneck emerges.

### High-Level System Architecture
    
    
    ╔══════════════════════════════════════════════════════════════════════════════════════╗
    ║                              CLIENT LAYER                                          ║
    ╚══════════════════════════════════════════════════════════════════════════════════════╝
    
        ┌─────────────────┐   ┌─────────────────┐   ┌──────────────────┐   ┌──────────────────┐
        │  PWA Web App    │   │  iOS App (P2)   │   │  Android App(P2) │   │  Admin Dashboard │
        │  Next.js 16     │   │  React Native   │   │  React Native    │   │  Next.js         │
        │  + Serwist PWA  │   │  + Expo         │   │  + Expo          │   │  (Internal)      │
        └────────┬────────┘   └────────┬────────┘   └─────────┬────────┘   └─────────┬────────┘
                 │                          │                      │                      │
                 └──────────────────────────┴──────────────────────┴──────────────────────┘
                                                      │
    ╔══════════════════════════════════════════════════════════════════════════════════════╗
    ║                              EDGE / CDN LAYER                                      ║
    ╚══════════════════════════════════════════════════════════════════════════════════════╝
    
                  ┌──────────────────────────────────────────────────────────┐
                  │           Cloudflare CDN (310+ PoPs, 8 in India)        │
                  │  ┌──────────┐  ┌───────────┐  ┌──────────┐  ┌─────────┐ │
                  │  │ WAF/DDoS │  │ SSL Term  │  │ Bot Mgmt │  │ Caching │ │
                  │  └──────────┘  └───────────┘  └──────────┘  └─────────┘ │
                  └─────────────────────────┬────────────────────────────────┘
                                            │
    ╔══════════════════════════════════════════════════════════════════════════════════════╗
    ║                              API GATEWAY / LOAD BALANCER                           ║
    ╚══════════════════════════════════════════════════════════════════════════════════════╝
    
                  ┌──────────────────────────────────────────────────────────┐
                  │              API Gateway (Nginx / AWS ALB)               │
                  │  ┌──────────┐  ┌───────────┐  ┌──────────┐  ┌─────────┐ │
                  │  │Rate Limit│  │ Auth Check│  │ Routing  │  │ Logging │ │
                  │  └──────────┘  └───────────┘  └──────────┘  └─────────┘ │
                  └──────────┬────────────────────────────────┬──────────────┘
                             │                                        │
    ╔══════════════════════════════════════════════════════════════════════════════════════╗
    ║                              APPLICATION LAYER                                     ║
    ╚══════════════════════════════════════════════════════════════════════════════════════╝
    
        ┌─────────────────────────────────────────┐     ┌────────────────────────────┐
        │     MAIN API SERVER (NestJS)            │     │   AI/ML SERVICE (FastAPI)  │
        │                                         │     │                            │
        │  ┌───────────────┐ ┌────────────────┐   │     │  ┌──────────────────────┐  │
        │  │Research Passport│ │Career Pathfinder│  │     │  │ Career Translator    │  │
        │  │    Module      │ │    Module      │   │     │  │ (LLM Pipeline)       │  │
        │  └───────────────┘ └────────────────┘   │     │  └──────────────────────┘  │
        │  ┌───────────────┐ ┌────────────────┐   │     │  ┌──────────────────────┐  │
        │  │Mentor Network │ │Opportunity     │   │     │  │ Skill Matching       │  │
        │  │    Module      │ │Engine Module   │   │     │  │ Engine               │  │
        │  └───────────────┘ └────────────────┘   │     │  └──────────────────────┘  │
        │  ┌───────────────┐ ┌────────────────┐   │     │  ┌──────────────────────┐  │
        │  │Skill Studio   │ │Community/Forum │   │     │  │ Career Path          │  │
        │  │    Module      │ │    Module      │   │     │  │ Recommender          │  │
        │  └───────────────┘ └────────────────┘   │     │  └──────────────────────┘  │
        │  ┌───────────────┐ ┌────────────────┐   │     │  ┌──────────────────────┐  │
        │  │Auth & User    │ │Notification    │   │     │  │ LiteLLM Gateway      │  │
        │  │    Module      │ │    Module      │   │     │  │ (Multi-Model Router) │  │
        │  └───────────────┘ └────────────────┘   │     │  └──────────────────────┘  │
        └─────────────┬───────────────────────────┘     └─────────────┬──────────────┘
                      │                                                   │
                      └─────────────────────┬─────────────────────────────┘
                                            │
    ╔══════════════════════════════════════════════════════════════════════════════════════╗
    ║                              DATA LAYER                                            ║
    ╚══════════════════════════════════════════════════════════════════════════════════════╝
    
      ┌──────────┐  ┌──────────┐  ┌───────────┐  ┌───────────┐  ┌───────────────┐
      │PostgreSQL│  │  Redis   │  │Meilisearch│  │Cloudflare │  │  BullMQ       │
      │ 16 +     │  │  7.x     │  │  1.x      │  │    R2     │  │ Job Queues    │
      │ pgvector │  │(Cache/Q) │  │ (Search)  │  │ (Storage) │  │ (Background)  │
      └──────────┘  └──────────┘  └───────────┘  └───────────┘  └───────────────┘
    
    ╔══════════════════════════════════════════════════════════════════════════════════════╗
    ║                              EXTERNAL SERVICES                                     ║
    ╚══════════════════════════════════════════════════════════════════════════════════════╝
    
      ┌──────────┐  ┌──────────┐  ┌───────────┐  ┌───────────┐  ┌───────────────┐
      │ Anthropic│  │  OpenAI  │  │  MSG91    │  │  Resend   │  │   Sentry      │
      │ Claude   │  │  GPT-4o  │  │  (SMS)    │  │  (Email)  │  │  (Monitoring) │
      └──────────┘  └──────────┘  └───────────┘  └───────────┘  └───────────────┘
    

### Scaling Strategy: 5K -> 50K -> 200K Users

Scale | Architecture | Database | Infra | Est. Monthly Cost  
---|---|---|---|---  
5K Users | Single modular monolith + AI microservice | Neon Postgres (serverless) + Redis (Upstash) | Vercel + Railway | $80 - $150  
50K Users | Monolith + AI service + background workers split | RDS PostgreSQL (r6g.large) + ElastiCache + Meilisearch dedicated | AWS ECS Fargate | $500 - $900  
200K Users | Extracted microservices (auth, search, AI, notifications) + API Gateway | Aurora PostgreSQL + Redis Cluster + Elasticsearch + pgvector on dedicated instance | AWS EKS (Kubernetes) | $2,000 - $4,000  
  
#### Background Job Processing Architecture

BullMQ (Redis-backed) handles all asynchronous tasks. Jobs are processed by dedicated worker processes that can be scaled independently from the main API server.

Email Queue SMS/OTP Queue AI Processing Queue Search Indexing Queue File Processing Queue Report Generation Queue Notification Queue Audit Log Queue

**Priority levels:** Critical (OTP delivery: <5s), High (email notifications: <30s), Normal (search re-indexing: <5m), Low (report generation: <30m). Dead letter queues capture failed jobs after 3 retries with exponential backoff.

#### WebSocket Architecture for Real-Time Features

Socket.IO with Redis adapter enables horizontal scaling. WebSocket connections are used for real-time community forum updates, mentor-scholar chat, live notification delivery, and collaborative career planning sessions.

  * **Namespace isolation:** /community (forum), /mentorship (1:1 chat), /notifications (system alerts), /admin (live analytics)
  * **Room-based broadcasting:** Each forum topic, mentorship session, and institution gets a dedicated room for scoped message delivery
  * **Sticky sessions:** AWS ALB with cookie-based session affinity ensures WebSocket upgrade requests reach the same server instance
  * **Graceful degradation:** Falls back to long-polling on networks that block WebSocket connections (common in university campus firewalls)



Section 03

## Database Schema Design

PostgreSQL 16 with Prisma ORM. The schema is designed for the relational complexity of PhD career infrastructure -- scholars belong to institutions, are mentored by guides, apply for jobs posted by employers, take courses, and build Research Passports.

##### Scholar (Core User)
    
    
    model Scholar {
      id            String    @id @default(cuid())
      email         String    @unique
      phone         String?   @unique
      firstName     String
      lastName      String
      displayName   String
      avatarUrl     String?
      bio           String?   @db.Text
      phdStatus     PhdStatus // ENROLLED|SUBMITTED|DEFENDED|AWARDED
      discipline    String
      specialization String?
      enrollmentYear Int?
      completionYear Int?
      thesisTitle   String?   @db.Text
      thesisAbstract String?  @db.Text
      preferredLang String    @default("en")
      location      String?
      state         String?
      isVerified    Boolean   @default(false)
      consentGiven  Boolean   @default(false)
      consentDate   DateTime?
      lastActiveAt  DateTime?
    
      // Relations
      institution   Institution @relation
      guide         Guide?      @relation
      passport      ResearchPassport?
      applications  Application[]
      mentorSessions MentorSession[]
      enrollments   CourseEnrollment[]
      forumPosts    ForumPost[]
      skills        ScholarSkill[]
    
      @@index([discipline, state])
      @@index([phdStatus, completionYear])
      @@index([isVerified, lastActiveAt])
    }

##### ResearchPassport
    
    
    model ResearchPassport {
      id              String   @id @default(cuid())
      scholarId       String   @unique
      slug            String   @unique
      headline        String   // AI-generated industry headline
      summary         String   @db.Text
      industryTranslation String? @db.Text
      publications    Json     // [{title, journal, year, doi}]
      methodologies   String[] // Research methods
      tools           String[] // Lab/software tools
      domains         String[] // Research domains
      videoPitchUrl   String?  // 90-second pitch
      visibilityLevel Visibility @default(PUBLIC)
      embedding       Unsupported("vector(1536)")?
      completeness    Int      @default(0) // 0-100%
      viewCount       Int      @default(0)
    
      scholar         Scholar  @relation
    
      @@index([domains], type: Gin)
      @@index([methodologies], type: Gin)
    }

##### Job (Opportunity Engine)
    
    
    model Job {
      id              String    @id @default(cuid())
      title           String
      description     String    @db.Text
      type            JobType   // FULLTIME|POSTDOC|FELLOWSHIP|...
      category        JobCategory // INDUSTRY|ACADEMIA|GOVT|PSU|...
      location        String
      isRemote        Boolean   @default(false)
      salaryMin       Int?
      salaryMax       Int?
      currency        String    @default("INR")
      requiredPhd     Boolean   @default(true)
      disciplines     String[]
      requiredSkills  String[]
      applicationUrl  String?
      deadline        DateTime?
      isActive        Boolean   @default(true)
      embedding       Unsupported("vector(1536)")?
    
      employer        Employer  @relation
      applications    Application[]
    
      @@index([type, category, isActive])
      @@index([disciplines], type: Gin)
      @@index([deadline, isActive])
    }

##### Employer
    
    
    model Employer {
      id            String   @id @default(cuid())
      companyName   String
      domain        String   @unique // verified domain
      logoUrl       String?
      type          EmployerType // CORPORATE|PSU|GOVT|STARTUP|...
      sector        String
      size          CompanySize
      website       String?
      description   String?  @db.Text
      isVerified    Boolean  @default(false)
      plan          PricingPlan @default(FREE)
    
      jobs          Job[]
      users        EmployerUser[]
    }

##### Mentor & MentorSession
    
    
    model Mentor {
      id            String   @id @default(cuid())
      name          String
      email         String   @unique
      title         String   // "Sr. Scientist, BARC"
      bio           String?  @db.Text
      expertise     String[]
      careerPath    String   // "Academia → PSU → MNC"
      maxSessions   Int      @default(4) // per month
      rating        Float    @default(0)
      totalSessions Int      @default(0)
      isActive      Boolean  @default(true)
      availableSlots Json    // [{day, startTime, endTime}]
    
      sessions      MentorSession[]
    }
    
    model MentorSession {
      id            String   @id @default(cuid())
      scheduledAt   DateTime
      durationMins  Int      @default(30)
      status        SessionStatus // REQUESTED|CONFIRMED|...
      topic         String
      notes         String?  @db.Text
      rating        Int?     // 1-5 by scholar
      meetingUrl    String?
    
      scholar       Scholar  @relation
      mentor        Mentor   @relation
    }

##### Institution & Guide
    
    
    model Institution {
      id          String   @id @default(cuid())
      name        String
      type        InstitutionType // IIT|NIT|CENTRAL|STATE|...
      city        String
      state       String
      website     String?
      logoUrl     String?
      naacGrade   String?
      isPartner   Boolean  @default(false)
    
      scholars    Scholar[]
      guides      Guide[]
    }
    
    model Guide {
      id          String   @id @default(cuid())
      name        String
      email       String?
      department  String
      specialization String?
      hIndex      Int?
    
      institution Institution @relation
      scholars    Scholar[]
    }

##### Course (Skill Studio) & ForumPost
    
    
    model Course {
      id           String  @id @default(cuid())
      title        String
      description  String  @db.Text
      category     String  // CV_BUILDING|NETWORKING|...
      durationMins Int
      difficulty   Difficulty
      modules      Json    // [{title, videoUrl, order}]
      isFree       Boolean @default(true)
      price        Int?
      enrollments  CourseEnrollment[]
    }
    
    model ForumPost {
      id           String   @id @default(cuid())
      title        String
      content      String   @db.Text
      category     ForumCategory
      upvotes      Int      @default(0)
      isPinned     Boolean  @default(false)
    
      author       Scholar  @relation
      replies      ForumPost[] @relation("Replies")
      parent       ForumPost? @relation("Replies")
    }

### Indexing Strategy

Index| Table| Type| Purpose  
---|---|---|---  
`idx_scholar_discipline_state`| Scholar| B-Tree (Composite)| Filter scholars by discipline + location  
`idx_passport_domains`| ResearchPassport| GIN (Array)| Multi-value domain search  
`idx_passport_embedding`| ResearchPassport| IVFFlat (pgvector)| Semantic similarity search (ANN)  
`idx_job_type_category_active`| Job| B-Tree (Composite)| Job listing filters  
`idx_job_disciplines`| Job| GIN (Array)| PhD-discipline matching  
`idx_job_deadline_active`| Job| B-Tree (Composite)| Active jobs sorted by urgency  
`idx_session_scholar_status`| MentorSession| B-Tree (Composite)| Scholar's upcoming sessions  
`idx_forum_category_created`| ForumPost| B-Tree (Composite)| Forum listing by category + recency  
`idx_scholar_tsvector`| Scholar| GIN (tsvector)| Full-text search fallback  
  
Section 04

## AI/ML Integration Architecture

The AI Career Translator is PhDSetu's signature feature -- converting academic research descriptions into industry-readable language. This section covers the complete pipeline, from prompt engineering to cost optimization.

### Career Translator Pipeline
    
    
                            CAREER TRANSLATOR PIPELINE
    
    ┌──────────────────┐     ┌───────────────────┐     ┌──────────────────┐
    │   SCHOLAR INPUT  │     │   PRE-PROCESSING  │     │   LLM GATEWAY    │
    │                  │────▶│                   │────▶│                  │
    │ • Thesis Title   │     │ • Input Validation│     │ • LiteLLM Proxy  │
    │ • Abstract       │     │ • Language Detect │     │ • Model Router   │
    │ • Methodology    │     │ • Domain Classify │     │ • Semantic Cache  │
    │ • Skills List    │     │ • Context Build   │     │ • Token Budget   │
    └──────────────────┘     └───────────────────┘     └────────┬─────────┘
                                                                     │
                                                                     ▼
    ┌──────────────────┐     ┌───────────────────┐     ┌──────────────────┐
    │ STRUCTURED OUTPUT│     │  POST-PROCESSING  │     │  LLM INFERENCE   │
    │                  │◀────│                   │◀────│                  │
    │ • Industry Desc  │     │ • JSON Validation │     │ • Claude Sonnet  │
    │ • Skill Map      │     │ • Quality Score   │     │   (Primary)      │
    │ • Career Paths   │     │ • Embedding Gen   │     │ • GPT-4o-mini    │
    │ • Matching Score │     │ • Cache Storage   │     │   (Fallback)     │
    └──────────────────┘     └───────────────────┘     └──────────────────┘
    

P

### Prompt Engineering Strategy

The Career Translator uses a multi-stage prompting architecture rather than a single monolithic prompt:

  * **Stage 1 -- Domain Classification:** Lightweight prompt (Claude Haiku, ~200 tokens) classifies the thesis into one of 40 predefined domain categories. This determines which domain-specific system prompt to use in Stage 2.
  * **Stage 2 -- Industry Translation:** Domain-aware system prompt (Claude Sonnet, ~2000 tokens) with few-shot examples from that domain. Outputs structured JSON with industry description, transferable skills, and career path suggestions.
  * **Stage 3 -- Career Path Mapping:** Takes Stage 2 output + scholar's existing skills/preferences. Maps to 3-5 specific career paths with confidence scores and recommended next steps.



**Few-shot examples database:** 200+ manually curated thesis-to-industry translations across 40 domains, contributed by industry PhDs. These serve as in-context examples and fine-tuning data.

$

### Cost Optimization Architecture

At 200K users, uncontrolled LLM costs could exceed $15,000/month. The architecture implements four cost control layers:

  * **Semantic caching (40-60% savings):** Redis-backed cache stores embeddings of recent prompts. Queries with cosine similarity >0.92 to cached prompts return the cached response. Career Translator queries are highly repetitive across similar disciplines.
  * **Cascade routing (30-40% savings):** Simple domain classification routes to Haiku ($0.25/M tokens). Complex translations use Sonnet ($3/M). Only edge cases escalate to Opus ($15/M). 70% of queries resolve at the cheapest tier.
  * **Prompt caching (50% on repeated prefixes):** Claude's prompt caching gives 90% discount on cached system prompt tokens. System prompts (1500+ tokens each) are shared across all requests in the same domain -- cache hit rates exceed 80%.
  * **Per-user token budgets:** Free tier scholars get 3 Career Translator uses/month (est. $0.05/use). Premium scholars get unlimited. LiteLLM enforces per-user budgets at the gateway level.



#### Fine-Tuning Roadmap

Phase| Timeline| Approach| Data Required| Expected Impact  
---|---|---|---|---  
Phase 1 | Months 1-6 | Prompt engineering + few-shot examples only | 200+ curated translations | 80% quality baseline, zero training cost  
Phase 2 | Months 6-12 | Fine-tune GPT-4o-mini on PhDSetu-specific data | 2,000+ scholar-validated translations | GPT-4o-mini reaches Sonnet-level quality at 1/12th cost  
Phase 3 | Months 12-18 | Custom BERT model for domain classification + skill extraction | 10,000+ labeled examples | Replace LLM for classification tasks entirely (<$0.001/query)  
  
#### Skill Matching & Career Path Recommendation Engine

Beyond the Career Translator, the AI service powers two additional recommendation systems:

#### Skill Matching Algorithm

Computes semantic similarity between scholar skill embeddings (from Research Passport) and job requirement embeddings. Uses pgvector for approximate nearest neighbor (ANN) search with IVFFlat indexing. Match scores above 0.75 trigger job recommendation notifications. The algorithm weights methodology skills (40%), domain knowledge (35%), and tools/software (25%) based on employer survey data.

#### Career Path Recommender

Collaborative filtering model trained on career trajectories of platform mentors and alumni. "Scholars with similar backgrounds and skills to yours typically pursued: [R&D; Scientist at PSU (42%), Postdoc in EU (28%), Industry Researcher (20%), Science Policy (10%)]." Uses a combination of content-based filtering (profile similarity) and collaborative filtering (similar scholars' outcomes) with periodic batch retraining via scheduled BullMQ jobs.

### LLM Cost Projections

**5K users (MVP):** ~500 Career Translator queries/month at $0.05/query = $25/month. With caching, effective cost drops to ~$12/month.  
**50K users:** ~5,000 queries/month. With cascade routing + caching = $120/month.  
**200K users:** ~20,000 queries/month. With fine-tuned GPT-4o-mini + caching + classification model = $200-400/month.  
The key insight: prompt engineering and caching buy 12+ months before fine-tuning is economically justified.

Section 05

## PWA Implementation

A Progressive Web App is the right Phase 1 vehicle because the primary user -- a PhD scholar at a regional university in India -- has a budget Android phone, spotty 4G, and limited storage. PWA means zero app store friction, instant updates, and offline capability.

SW

### Service Worker Strategy

**Implementation:** Serwist (modern next-pwa replacement) with Turbopack-compatible Route Handler approach. The service worker is compiled at build time via `createSerwistRoute()` and registered client-side via `SerwistProvider`.

**Caching strategies by resource type:**

  * **Cache-First:** Static assets (fonts, images, CSS bundles) -- served from cache, updated in background
  * **Stale-While-Revalidate:** Career guides, course syllabi, FAQ pages -- instant load with background refresh
  * **Network-First:** API data (job listings, forum posts, notifications) -- fresh data when online, cached fallback when offline
  * **Network-Only:** Auth endpoints, payment flows, OTP verification -- never cached for security



OL

### Offline Capability

**Offline-first features:**

  * **Research Passport (read):** Scholar's own profile cached in IndexedDB for offline viewing and sharing
  * **Career Guides:** Downloaded career guides available offline via Cache Storage API
  * **Forum drafts:** Composed replies stored in IndexedDB, synced via Background Sync API when connectivity returns
  * **Job bookmarks:** Saved job listings cached for offline reference
  * **Course progress:** Current course module content pre-cached for uninterrupted learning



**Data persistence:** IndexedDB via `idb` library for structured offline data. Storage quota management with automatic cleanup of old cache entries when approaching device limits.

PN

### Push Notifications

**Web Push API implementation:**

  * **VAPID keys:** Generated server-side, stored in environment variables. Public key embedded in service worker for subscription.
  * **Notification categories:** Job matches (immediate), mentor session reminders (scheduled), forum replies (batched daily), career guide updates (weekly digest)
  * **Opt-in flow:** Notifications requested only after the scholar has completed their profile (not on first visit). Contextual prompt: "Get notified when new [Chemistry R&D;] jobs are posted?"
  * **Backend:** `web-push` npm package. Subscription endpoints stored in PostgreSQL. BullMQ schedules batch notification jobs.



### Performance Budgets

First Contentful Paint (FCP) < 1.8s

Largest Contentful Paint (LCP) < 2.5s

Cumulative Layout Shift (CLS) < 0.1

Interaction to Next Paint (INP) < 200ms

Lighthouse Performance Score > 90

Lighthouse PWA Score 100

Total Bundle Size (JS) < 150 KB

Time to Interactive (TTI) < 3.5s

### PWA Install Flow for Indian Scholars

The "Add to Home Screen" (A2HS) prompt is strategically timed: not on first visit (annoying), but after the scholar completes profile setup and views their first Research Passport preview. At that moment, the value is clear. The custom install banner says: _"Install PhDSetu for instant access to your Research Passport, job alerts, and career guides -- works even offline."_ On Chrome Android (90%+ of Indian scholar devices), the mini-infobar appears automatically after meeting PWA criteria. A custom "Install App" button in the navigation reinforces the option. Web app manifest includes 192x192 and 512x512 maskable icons, standalone display mode, and a PhDSetu-branded splash screen.

Section 06

## Search & Discovery Engine

Search is the critical interaction surface where scholars find jobs, employers find talent, and everyone discovers resources. The architecture combines full-text search (Meilisearch), semantic search (pgvector), and faceted filtering.

### Research Passport Search

The primary search interface for employers looking for PhD talent. Combines keyword search with faceted filters.

  * **Keyword search:** Meilisearch indexes scholar name, thesis title, abstract, disciplines, methodologies, tools, and institution name. Typo-tolerant (handles "spectroscopy" vs "spectrscopy").
  * **Faceted filters:** Research domain (chemistry, physics, CS, etc.), methodology (computational, experimental, mixed), location/state, PhD status, institution type (IIT/NIT/Central/State), graduation year range.
  * **Semantic search:** "Find researchers who work on drug delivery mechanisms" matches scholars whose abstracts are semantically related, even if they never used that exact phrase. Powered by pgvector with OpenAI text-embedding-3-small.
  * **Ranking algorithm:** Profile completeness (30%), search term relevance (40%), recency of activity (15%), verification status (15%).



### Job & Opportunity Search

PhD-specific job search with filters no general job board provides.

  * **PhD-specific filters:** Job type (postdoc, faculty, industry R&D;, PSU scientist, policy, consulting), required discipline, experience level (freshly defended, 2-5 years post-PhD, senior), salary range, remote/on-site, visa sponsorship.
  * **Smart recommendations:** Based on scholar's Research Passport embedding, auto-suggest jobs with high skill match scores. "92% match -- your expertise in polymer rheology aligns with this R&D; role."
  * **Saved searches:** Scholars save search queries and receive weekly email/push digests when new matching jobs are posted.
  * **Employer search:** Employers search by research domain, methodology, skills, and geographic preference. Boolean search support ("materials science AND (computational OR simulation)").



### Search Architecture Comparison

Feature| PostgreSQL FTS| Meilisearch| Elasticsearch  
---|---|---|---  
Setup Complexity| Built-in| Single binary| Cluster setup  
Typo Tolerance| None| Excellent| Good  
Hindi/Regional Languages| Basic| Native support| ICU plugins  
RAM Usage (50K docs)| ~0 extra| ~200 MB| ~2 GB  
Query Latency| 50-200ms| <20ms| <30ms  
Faceted Filtering| Manual| Native| Native  
Operational Cost/mo| $0| $20-50| $100-300  
**PhDSetu Decision**|  Day 1 MVP| Primary (Month 2+)| Phase 3 (200K+)  
  
Section 07

## Security & DPDP Act Compliance

PhDSetu handles sensitive personal data of scholars, including thesis abstracts, career aspirations, and institutional affiliations. The Digital Personal Data Protection Act, 2023 (and the 2025 Rules) imposes specific compliance obligations enforceable from May 2027. The architecture is designed for compliance from day one.

DT

### Data Protection by Design

  * **Encryption at rest:** PostgreSQL with Transparent Data Encryption (TDE) via pgcrypto extension. Cloudflare R2 with server-side encryption (SSE). Redis configured with `aof-use-rdb-preamble` \+ encrypted volumes.
  * **Encryption in transit:** TLS 1.3 enforced on all endpoints via Cloudflare. Internal service-to-service communication over mTLS. Database connections require SSL certificates.
  * **Data minimization:** Collect only data essential for each feature. Thesis abstract: required for Career Translator. Phone number: optional, only for OTP. Location: state-level only, not GPS.
  * **Purpose limitation:** Each data field tagged with its processing purpose in schema metadata. Employer search only surfaces data the scholar has explicitly set to PUBLIC or EMPLOYERS_ONLY visibility.
  * **Data masking:** PII fields (email, phone) masked in API responses by default. Full data exposed only to the authenticated data subject or authorized roles.



CN

### DPDP Consent Architecture

  * **Consent management:** Every data processing activity linked to a specific, granular consent. Scholars consent separately for: profile visibility to employers, AI processing of thesis abstract, email notifications, usage analytics.
  * **Consent records:** Immutable audit trail in `ConsentLog` table -- timestamp, IP address, consent version, and the specific purpose accepted. Retained for the data's lifetime plus 1 year.
  * **Consent withdrawal:** One-click withdrawal from settings dashboard. Withdrawal triggers immediate cessation of processing for that purpose. Scholar can withdraw employer visibility without deleting their account.
  * **Consent Manager readiness:** Architecture supports integration with registered Consent Managers (mandatory from November 2026) via standardized API.
  * **Privacy notice:** Standalone, plain-language notice displayed during onboarding. Available in all supported languages. Version-controlled -- changes require re-consent for affected purposes.



### Access Control (RBAC)

Role-Based Access Control with granular permissions:

  * **Scholar:** Own profile CRUD, job applications, forum posts, mentor booking
  * **Employer (Free):** Search profiles (limited/month), view public Research Passports
  * **Employer (Premium):** Unlimited search, contact scholars, post jobs, ATS integration
  * **Mentor:** View mentee profiles, session management, career advice tools
  * **Guide:** View students' profiles, endorse skills, batch enrollment
  * **University Admin:** Institutional dashboard, bulk scholar onboarding, placement analytics
  * **Platform Admin:** Full system access, content moderation, analytics, user management



### Rate Limiting & DDoS Protection

  * **Cloudflare WAF:** Layer 7 DDoS protection with bot management. Rate limiting rules at the edge before traffic reaches origin.
  * **API rate limits (Redis sliding window):** Auth endpoints: 5 req/min. Search API: 30 req/min (free), 120 req/min (premium). Career Translator: 3 req/day (free), unlimited (premium). General API: 100 req/min.
  * **Brute force protection:** Account lockout after 5 failed OTP attempts (15-minute cooldown). Progressive delays: 1s, 2s, 4s, 8s between retries.
  * **CAPTCHA:** Cloudflare Turnstile (privacy-preserving) on registration and public-facing forms.



### Audit Logging

  * **Audit scope:** All data access, modifications, deletions, and consent changes logged immutably.
  * **Log format:** `{timestamp, userId, role, action, resource, resourceId, ipAddress, userAgent, details}`
  * **Storage:** Audit logs written to a separate PostgreSQL table with append-only permissions (no UPDATE/DELETE grants). Retained for 1 year per DPDP Rules.
  * **Breach notification:** Automated breach detection pipeline: anomaly detection on access patterns -> alert to DPO -> Board notification within 72 hours -> user notification without delay.
  * **Background processing:** Audit events emitted via BullMQ to avoid impacting API response latency. Processed asynchronously by dedicated audit worker.



#### Scholar Data Visibility Controls

Scholars have granular control over what data is visible to whom. This is not just a feature -- it is a DPDP compliance requirement.

Data Field| Self| Other Scholars| Mentors| Employers (Free)| Employers (Premium)  
---|---|---|---|---|---  
Name & Photo| Full| Full| Full| Full| Full  
Email| Full| Hidden| Full| Hidden| On Request  
Phone| Full| Hidden| Hidden| Hidden| Hidden  
Thesis Abstract| Full| Full| Full| Summary| Full  
Industry Translation| Full| Hidden| Full| Teaser| Full  
Career Preferences| Full| Hidden| Full| Hidden| Aggregated  
  
Section 08

## Vernacular Language Support

The most isolated PhD scholars are not in Mumbai or Bangalore -- they are in regional universities in Andhra Pradesh, Odisha, or Chhattisgarh. Vernacular support is not a nice-to-have; it is the feature that makes PhDSetu truly for all of India's PhDs.

i18n

### Internationalization Architecture

**Framework:** `next-intl` v4 with App Router integration. Middleware-based locale detection from Accept-Language header, user preference, or URL prefix (`/hi/`, `/te/`, `/ta/`).

  * **Message format:** ICU MessageFormat standard for pluralization, gender, and number formatting across languages. JSON namespace files per module (e.g., `messages/hi/research-passport.json`).
  * **Dynamic content:** User-generated content (forum posts, job descriptions) stored in original language with on-demand AI translation via Google Gemini Flash API.
  * **Static content:** UI labels, career guides, onboarding flows professionally translated for Phase 1 languages (Hindi, Telugu, Tamil, Marathi, Bengali, Kannada). Community-contributed translations for Phase 2 languages.
  * **Fallback chain:** Preferred language -> Hindi -> English. If a string is missing in Telugu, it falls back to Hindi before English.



Aa

### Font Rendering & Script Support

  * **Devanagari (Hindi, Marathi):** Noto Sans Devanagari via Google Fonts. `font-feature-settings: 'kern', 'liga'` for proper conjunct rendering.
  * **Telugu:** Noto Sans Telugu. Complex script with stacked diacritics -- tested on Chrome Android 90+ for correct rendering.
  * **Tamil:** Noto Sans Tamil. Preloaded via `<link rel="preload">` for critical rendering path.
  * **Bengali:** Noto Sans Bengali. Requires careful line-height tuning (1.8-2.0) for readability.
  * **Kannada:** Noto Sans Kannada. Validated against ISCII standards.
  * **Urdu (RTL):** Noto Nastaliq Urdu. CSS `direction: rtl; text-align: right;` with bidirectional isolation (`<bdi>`) for mixed LTR/RTL content. Layout mirroring via CSS logical properties (`margin-inline-start` instead of `margin-left`).
  * **Font loading strategy:** `font-display: swap` for all web fonts. Subset fonts to include only characters used in UI strings (reduces download by ~60%).



### Supported Languages & Rollout Plan

Language| Script| Native Name| PhD Scholars (est.)| Direction| Phase  
---|---|---|---|---|---  
English| Latin| English| All (base)| LTR| Phase 1  
Hindi| Devanagari| हिंदी| ~55,000| LTR| Phase 1  
Telugu| Telugu| తెలుగు| ~22,000| LTR| Phase 1  
Tamil| Tamil| தமிழ்| ~20,000| LTR| Phase 1  
Marathi| Devanagari| मराठी| ~18,000| LTR| Phase 1  
Bengali| Bengali| বাংলা| ~16,000| LTR| Phase 1  
Kannada| Kannada| ಕನ್ನಡ| ~14,000| LTR| Phase 1  
Urdu| Perso-Arabic| اردو| ~8,000| **RTL**|  Phase 2  
Gujarati| Gujarati| ગુજરાતી| ~10,000| LTR| Phase 2  
Malayalam| Malayalam| മലയാളം| ~12,000| LTR| Phase 2  
Odia| Odia| ଓଡିଆ| ~6,000| LTR| Phase 3  
Punjabi| Gurmukhi| ਪੰਜਾਬੀ| ~5,000| LTR| Phase 3  
  
#### AI-Assisted Translation Workflow

For scaling translations beyond Phase 1 languages, a hybrid human+AI pipeline:

  * **Step 1:** English source strings extracted from codebase via `next-intl` extraction tooling
  * **Step 2:** Google Gemini 2.5 Flash generates initial translations (strong Indic language performance, 22 official languages supported)
  * **Step 3:** Native-speaking PhD scholar volunteers (from the community) review and correct AI translations via a translation dashboard (Crowdin or custom admin UI)
  * **Step 4:** Approved translations committed to the codebase; rejected translations feed back as fine-tuning data for improved AI translations
  * **Quality metric:** Each translated string has a "confidence score" (AI-generated: 0.7, human-reviewed: 1.0). UI displays only strings with confidence ≥ 0.85, falling back to English otherwise.



Section 09

## Mobile App Architecture (Phase 2)

Phase 2 adds native iOS and Android apps once the PWA has validated product-market fit with 20K+ active users. The mobile app targets scholars in Tier 2/3 cities where app store discovery is a stronger acquisition channel than web search.

### Decision: React Native + Expo (not Flutter)

PhDSetu's founding team is TypeScript-first (Next.js frontend + NestJS backend). React Native allows the same developers to build mobile apps without learning Dart. With Expo, the team gets managed OTA updates (skip App Store review for most changes), push notifications (Expo Notifications wrapping FCM/APNs), and streamlined builds (EAS Build). Code sharing between the Next.js web app and React Native app (shared TypeScript types, API client, validation logic) reduces duplication by ~30%. React Native developers in India are 3-4x more plentiful than Flutter developers, making future hiring significantly easier. The New Architecture (JSI, Fabric, TurboModules) has closed the performance gap with Flutter for the type of UI PhDSetu needs (forms, lists, cards -- not animation-heavy consumer apps).

### Offline-First Design

Connectivity is the defining constraint for Tier 2/3 scholars. The mobile app is designed to function meaningfully without a stable network.

  * **Local database:** WatermelonDB (SQLite-based, React Native optimized) stores the scholar's profile, saved jobs, course progress, and cached career guides locally.
  * **Sync engine:** Bidirectional sync with server when connectivity is available. Conflict resolution: server-wins for job data (authoritative source), client-wins for draft content (scholar's work is never lost).
  * **Optimistic UI:** Actions like bookmarking jobs or posting forum replies update the local UI immediately, with background sync to the server. Failed syncs queued in a retry buffer.
  * **Image optimization:** Profile photos compressed to <100KB and cached locally. Job listing images served as WebP with progressive loading.
  * **Bandwidth detection:** `NetInfo` API detects connection quality. On 2G/3G: skip non-essential images, defer analytics, reduce API payload sizes via a `slim=true` query parameter.



### Shared Codebase Strategy

Maximize code reuse between web and mobile without compromising either experience.

  * **Shared packages (monorepo):** `@phdsetu/types` (TypeScript interfaces for all API entities), `@phdsetu/api-client` (typed API functions using fetch/axios), `@phdsetu/validation` (Zod schemas for form validation), `@phdsetu/constants` (enums, config).
  * **Platform-specific UI:** Web uses Tailwind CSS + shadcn/ui components. Mobile uses React Native's own component primitives styled with Nativewind (Tailwind for RN). No shared UI components -- each platform gets native-feeling interactions.
  * **Monorepo tool:** Turborepo for managing `apps/web`, `apps/mobile`, `apps/api`, and `packages/*`. Single `pnpm` workspace.



### Push Notifications

  * **FCM (Android):** Firebase Cloud Messaging for Android push. Topic-based subscriptions: `jobs-chemistry`, `events-mumbai`, etc.
  * **APNs (iOS):** Apple Push Notification service via Expo Notifications abstraction layer.
  * **Notification types:** Job match alerts (immediate), mentor session reminders (24h + 1h before), forum replies (batched hourly), career guide updates (weekly).
  * **Deep linking:** Notifications deep-link to specific screens (job detail, session page, forum thread) via Expo Router.



### App Store Strategy

  * **ASO keywords:** "PhD jobs India", "research career", "postdoc opportunities", "academic jobs", "scientist jobs India"
  * **Category:** Education (primary), Business (secondary)
  * **Localized listings:** App Store descriptions in Hindi, Telugu, Tamil, Marathi for regional discoverability
  * **Review strategy:** In-app review prompt after 3rd successful mentor session or 5th job application -- triggered at moments of value, not randomly



### Performance Targets

  * **App size:** <25 MB (critical for 32GB budget Android phones)
  * **Cold start:** <2 seconds on mid-range devices (Redmi Note series, Samsung Galaxy M)
  * **Frame rate:** 60fps for scrolling lists and transitions
  * **Memory usage:** <150 MB peak RAM consumption
  * **Minimum OS:** Android 8+ (API 26), iOS 15+



Section 10

## DevOps & Infrastructure

Infrastructure automation that a 2-person team can actually manage. The key principle: use managed services aggressively in the early stages, migrate to self-managed only when costs demand it.

### CI/CD Pipeline

**GitHub Actions workflow:**

  * **On PR:** Lint (ESLint + Prettier) -> Type check (tsc) -> Unit tests (Vitest) -> Integration tests (Vitest + Testcontainers for PostgreSQL) -> Build verification -> Preview deployment (Vercel preview URL)
  * **On merge to main:** Full test suite -> Build -> Deploy to staging -> Smoke tests against staging -> Manual approval gate -> Production deployment
  * **AI service pipeline:** Separate workflow for FastAPI service. Python lint (ruff) -> pytest -> Docker build -> Push to container registry -> Railway/ECS deploy
  * **Database migrations:** Prisma migrate runs as a pre-deployment step. Migrations reviewed in PR via Prisma diff output.



### Monitoring & Observability

  * **Error tracking:** Sentry (free tier covers MVP). Source maps uploaded on deploy for readable stack traces. Alert rules for error rate spikes (>1% of requests).
  * **Uptime monitoring:** Better Stack (formerly Better Uptime). Health check endpoints pinged every 60s from 3 Indian locations. Incident pages with status updates.
  * **Application Performance (APM):** Sentry Performance for transaction tracing. P95 latency alerting on critical paths (login, search, Career Translator).
  * **Log aggregation:** Structured JSON logs via Pino (NestJS) and structlog (FastAPI). Shipped to Better Stack Logs (or Axiom) for searchable, retained logging.
  * **Metrics dashboard:** Grafana Cloud (free tier) with Prometheus metrics from NestJS (`@willsoto/nestjs-prometheus`). Key metrics: request rate, error rate, LLM token usage, search latency, queue depth.
  * **Real User Monitoring (RUM):** Vercel Analytics for Core Web Vitals tracking across Indian mobile devices.



### Environment Strategy

Environment| Purpose| Database| Deploy Trigger  
---|---|---|---  
Local| Developer machine| Docker Compose (PG + Redis)| Manual  
Preview| PR review| Neon branch (auto-created)| On PR open  
Staging| QA + integration testing| Neon staging branch| On merge to main  
Production| Live users| Neon production| Manual approval  
  
### Database Backup Strategy

  * **Automated backups:** Neon provides point-in-time recovery (PITR) with 7-day retention on Pro plan. AWS RDS provides automated snapshots with 35-day retention at Phase 2.
  * **Manual snapshots:** Weekly full backups to Cloudflare R2 via `pg_dump` in a scheduled GitHub Action. Encrypted with AES-256 before upload.
  * **Cross-region replication:** At 50K+ users, set up logical replication to a secondary region (ap-southeast-1, Singapore) for disaster recovery.
  * **Recovery testing:** Monthly automated restore test to a disposable Neon branch, validating backup integrity. Alarm if restore fails.
  * **RTO/RPO targets:** RTO (Recovery Time Objective) < 1 hour. RPO (Recovery Point Objective) < 5 minutes (via PITR).



### Infrastructure Cost Estimates

Service| MVP (5K Users)| Growth (50K Users)| Scale (200K Users)  
---|---|---|---  
Frontend Hosting (Vercel)| $0 (Hobby)| $20/mo (Pro)| $150/mo (Enterprise)  
Backend Hosting (Railway/ECS)| $20/mo| $200/mo| $800/mo  
Database (Neon/RDS)| $19/mo| $150/mo| $600/mo  
Redis (Upstash/ElastiCache)| $0 (Free tier)| $50/mo| $200/mo  
Search (Meilisearch Cloud)| $0 (self-hosted)| $30/mo| $100/mo  
File Storage (Cloudflare R2)| $5/mo| $30/mo| $100/mo  
CDN (Cloudflare)| $0 (Free)| $20/mo (Pro)| $200/mo (Business)  
AI/LLM APIs| $25/mo| $120/mo| $400/mo  
SMS/OTP (MSG91)| $10/mo| $80/mo| $300/mo  
Email (Resend)| $0 (Free tier)| $20/mo| $80/mo  
Monitoring (Sentry + Better Stack)| $0 (Free tiers)| $30/mo| $100/mo  
Domain + SSL| $15/yr| $15/yr| $15/yr  
Total Estimated Monthly | ~$80-100 | ~$750-900 | ~$3,000-3,500  
  
Section 11

## API Design & Integration

RESTful API with GraphQL reserved as a future optimization for the mobile app. The API is versioned, documented, and designed for both internal consumption (web/mobile clients) and external partners (universities, employers).

### Decision: REST-First, GraphQL-Later

REST is chosen for MVP because: (1) the team knows REST deeply, (2) NestJS has first-class REST support with automatic Swagger generation, (3) REST is simpler to cache at the CDN level, (4) mobile clients on slow networks benefit from predictable response sizes. GraphQL will be evaluated at 50K+ users for the mobile app, where reducing over-fetching across complex profile pages could meaningfully improve performance on 3G networks. The transition is non-breaking -- a GraphQL layer wraps existing NestJS services.

### Core API Endpoints

REST API v1
    
    
    // ─── Authentication ─────────────────────────────────────
    POST   /api/v1/auth/otp/request       // Request OTP via email/phone
    POST   /api/v1/auth/otp/verify        // Verify OTP and receive JWT
    POST   /api/v1/auth/refresh           // Refresh access token
    POST   /api/v1/auth/sso/callback      // SAML/OIDC callback for institutions
    DELETE /api/v1/auth/session           // Logout (revoke session)
    
    // ─── Scholar Profiles ───────────────────────────────────
    GET    /api/v1/scholars/me            // Get own profile
    PATCH  /api/v1/scholars/me            // Update own profile
    GET    /api/v1/scholars/:id           // Get scholar profile (visibility-filtered)
    GET    /api/v1/scholars/search        // Search scholars (Meilisearch-backed)
    
    // ─── Research Passport ──────────────────────────────────
    GET    /api/v1/passport/:slug         // Public Research Passport by slug
    PUT    /api/v1/passport/me            // Create/update own Research Passport
    POST   /api/v1/passport/me/translate  // Trigger AI Career Translation
    GET    /api/v1/passport/me/matches    // Get job matches based on passport
    
    // ─── Jobs & Opportunities ───────────────────────────────
    GET    /api/v1/jobs                   // List jobs with filters & pagination
    GET    /api/v1/jobs/:id               // Job detail
    POST   /api/v1/jobs                   // Create job (employer auth required)
    POST   /api/v1/jobs/:id/apply         // Apply to job
    GET    /api/v1/jobs/:id/applications  // List applications (employer only)
    
    // ─── Mentorship ─────────────────────────────────────────
    GET    /api/v1/mentors                // List mentors with filters
    GET    /api/v1/mentors/:id/slots      // Available booking slots
    POST   /api/v1/sessions               // Book mentor session
    PATCH  /api/v1/sessions/:id           // Update session (confirm/cancel/rate)
    
    // ─── Courses (Skill Studio) ─────────────────────────────
    GET    /api/v1/courses                // List courses
    POST   /api/v1/courses/:id/enroll     // Enroll in course
    PATCH  /api/v1/courses/:id/progress   // Update module progress
    
    // ─── Community Forum ────────────────────────────────────
    GET    /api/v1/forum/posts            // List posts with category filter
    POST   /api/v1/forum/posts            // Create post or reply
    POST   /api/v1/forum/posts/:id/upvote // Upvote a post
    
    // ─── Webhooks (Employer Integration) ────────────────────
    POST   /api/v1/webhooks/register      // Register webhook endpoint
    // Events: application.received, job.expiring, match.found
    

### API Versioning & Standards

  * **Versioning:** URL-based (`/api/v1/`) for simplicity. New major versions run in parallel for 6 months with deprecation headers (`Sunset`).
  * **Pagination:** Cursor-based (not offset-based) for stable pagination on large, changing datasets. Response includes `nextCursor` and `hasMore`.
  * **Error format:** RFC 7807 Problem Details: `{"type", "title", "status", "detail", "instance"}`.
  * **Rate limit headers:** `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` on every response.
  * **Documentation:** Auto-generated OpenAPI 3.1 spec via NestJS Swagger decorators. Hosted at `/api/docs`.



### Webhook Design for Employers

Employers can register webhooks to receive real-time notifications about their job postings and candidate activity.

  * **Events:** `application.received`, `application.withdrawn`, `job.expiring` (7 days before deadline), `match.found` (new scholar matches job requirements)
  * **Delivery:** HTTP POST with HMAC-SHA256 signature for verification. Retry with exponential backoff (3 attempts over 24 hours). Dead letter queue for permanently failing endpoints.
  * **Security:** Webhook secret per employer. Timestamp-based replay protection (reject events older than 5 minutes).
  * **Public API roadmap:** Phase 2 introduces a read-only public API for institutional partners (universities accessing their scholars' aggregated placement data, employer ATS integrations).



Section 12

## Development Roadmap

8-week sprint plan from zero to live MVP. The team: 2 full-stack developers (TypeScript), 1 AI/ML engineer (Python), 1 designer (Figma -> implementation).

### MVP Sprint Plan (8 Weeks)

#### Sprint 1: Foundation

Week 1-2

**Team allocation:** Full-stack Dev 1 (Backend setup), Full-stack Dev 2 (Frontend setup), AI/ML Eng (AI service scaffold), Designer (Design system + key screens)

  * Repository setup: Turborepo monorepo with `apps/web`, `apps/api`, `apps/ai-service`, `packages/*`
  * Database schema: Prisma models for Scholar, Institution, Guide, ResearchPassport
  * Auth flow: Email + OTP login/signup with NextAuth.js and MSG91
  * Next.js App Router setup with Tailwind CSS, next-intl (English + Hindi)
  * CI/CD pipeline: GitHub Actions, Vercel preview deployments, Railway backend deploy
  * Design system: Color palette, typography, component library (shadcn/ui customized)
  * FastAPI scaffold with LiteLLM integration and basic Career Translator prompt



#### Sprint 2: Research Passport + Career Translator

Week 3-4

  * Scholar onboarding flow: multi-step form (personal info, PhD details, thesis, skills)
  * Research Passport builder: WYSIWYG editor for summary, structured publication input, skill tagging
  * Research Passport public page: SEO-optimized, shareable URL (`phdsetu.com/p/scholar-name`)
  * Career Translator v1: Thesis abstract input -> AI processing -> industry description output
  * Profile completeness scoring and gamification (progress bar, unlock features)
  * PostgreSQL full-text search for scholar profiles (MVP search before Meilisearch)
  * Serwist PWA setup: service worker, web manifest, install prompt



#### Sprint 3: Opportunity Engine + Mentorship

Week 5-6

  * Job listing CRUD for employers (create, edit, manage, close postings)
  * Job search with PhD-specific filters (discipline, type, location, salary range)
  * Job application flow: one-click apply with Research Passport as the application
  * Mentor profiles and listing page with expertise filters
  * Session booking flow: calendar slot selection, confirmation emails, meeting link generation
  * Employer registration and dashboard (job analytics, application review)
  * Basic notification system (email + push) for job matches and session reminders
  * Meilisearch integration: index scholars and jobs, replace PostgreSQL FTS



#### Sprint 4: Community, Polish & Launch

Week 7-8

  * Community forum: categories (Career Advice, Research Help, Networking, Off-topic), post/reply, upvotes
  * Career Pathfinder v1: Interactive career map with 5 common PhD career paths, populated with mentor stories
  * Skill Studio placeholder: 3-5 initial micro-courses (CV Writing for PhDs, Networking 101, Interview Prep)
  * Admin dashboard: user analytics, content moderation tools, platform metrics
  * DPDP compliance: consent flow, privacy policy, data export/deletion API
  * Performance optimization: Lighthouse audit, bundle analysis, image optimization, code splitting
  * Offline support: IndexedDB caching for Research Passport, career guides
  * Beta testing with 50-100 scholars from founding community, bug fixes, soft launch



### Team Composition & Cost Estimate

Role| Responsibilities| Type| Monthly Cost (India)  
---|---|---|---  
**Full-Stack Developer 1** | NestJS backend, database design, API development, auth, DevOps | Full-time | ₹80K - 1.2L  
**Full-Stack Developer 2** | Next.js frontend, PWA implementation, UI components, search integration | Full-time | ₹80K - 1.2L  
**AI/ML Engineer** | Career Translator pipeline, skill matching, embedding generation, LLM optimization | Part-time / Contract | ₹60K - 1L  
**UI/UX Designer** | Design system, user flows, responsive design, vernacular typography | Part-time / Contract | ₹40K - 70K  
Total Team Cost (Monthly) |  | ₹2.6L - 4.1L  
  
### Technology Cost by Phase

Phase| Timeline| Infrastructure/mo| Team Cost/mo| Total Phase Cost  
---|---|---|---|---  
Phase 1: MVP | Months 1-3 | ₹8K ($100) | ₹3.5L | ₹10.7L  
Phase 2: Growth | Months 4-9 | ₹50K ($600) | ₹5L (expanded team) | ₹33L  
Phase 3: Scale | Months 10-18 | ₹2.5L ($3000) | ₹8L (full team) | ₹94.5L  
18-Month Total Investment |  | ₹1.38 Cr  
  
### Post-MVP Feature Roadmap

After the 8-week MVP launch, development continues in 2-week sprint cycles:

**Month 3-4:** Skill Studio with video courses, Career Pathfinder interactive map, advanced search filters, WebSocket-based real-time forum  
**Month 5-6:** Mobile app (React Native + Expo) development begins, employer premium features (ATS integration, bulk search), AI fine-tuning Phase 1  
**Month 7-9:** University admin dashboards, institutional SSO integration, multilingual content (4 additional languages), annual PhD Career Report data pipeline  
**Month 10-12:** Mobile app launch (iOS + Android), public API for institutional partners, Elasticsearch migration, advanced analytics dashboard  
**Month 13-18:** WhatsApp Bot integration for notifications, AI-powered CV builder, grant/fellowship matching engine, international expansion (SAARC countries)

### PhDSetu Technical Architecture

Document 06 of 10 in the PhDSetu Master Document Suite. This architecture is designed to evolve -- start lean, measure real usage, and scale deliberately. Every technology choice can be revisited as the platform grows.

01 -- Master Brainstorming 02 -- Market Research 03 -- Brand Identity 04 -- Content Strategy 05 -- Go-To-Market 06 -- Technical Architecture 07 -- Financial Model 08 -- Legal & Compliance 09 -- Pitch Deck 10 -- 90-Day Launch Plan

PhDSetu -- Building India's Career Infrastructure for Research Scholars -- June 2026
