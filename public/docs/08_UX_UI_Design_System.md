Document 08 of 12

# UX/UI Design System

The complete visual language, component library, interaction patterns, and accessibility framework for PhDSetu — India's first career infrastructure platform for PhD scholars.

12

System Sections

6+

Languages Supported

AA

WCAG Compliance

320px

Min Viewport Width

## Design System Index

[01 Brand Identity](#brand) [02 Design Principles](#principles) [03 Component Library](#components) [04 Research Passport Wireframes](#passport) [05 Career Pathfinder Design](#pathfinder) [06 Onboarding Flow](#onboarding) [07 Community & Forum UX](#community) [08 Accessibility (WCAG 2.1 AA)](#accessibility) [09 Vernacular Typography](#vernacular) [10 Responsive Design System](#responsive) [11 Dark Mode](#dark-mode) [12 Prototype & Testing Plan](#testing)

Section 01

## Brand Identity

PhDSetu (PhD + Setu/Bridge) connects India's research talent to meaningful careers. The visual language must embody warmth without patronising, expertise without elitism, Indian identity without provincialism, and mission without preachiness.

### Logo Concept & Symbolism

The PhDSetu wordmark integrates bridge ("setu") symbolism with academic gravitas. The logo consists of a custom wordmark where the "S" in Setu is formed by a flowing bridge arc connecting two pillars — the left pillar representing the academic world (scholar) and the right pillar representing career destinations (industry, government, entrepreneurship).

PhDSetu

India's PhD Career Bridge

PhDSetu

Primary — Dark backgrounds

PhDSetu

Secondary — Light backgrounds

PhDSetu

Monochrome — Print/partners

#### Brand Mark Variations

PS

Monogram

🌉

App Icon

PhDSetu

Favicon (simplified)

Bridge line mark

### Primary Color Palette

Colours chosen for academic authority, warmth, and strong contrast across all Indic scripts. Every primary colour passes WCAG AA contrast (4.5:1) against its intended background.

Deep Navy

#1A1A2E

16.3:1 on white

Aa

Setu Red

#E94560

4.6:1 on white

Scholar Gold

#F0A500

Use on dark only

Aa

Depth Blue

#0F3460

11.2:1 on white

#### Secondary / Semantic Palette

Aa

Success Green

#10B981

Verified, complete

Aa

Info Blue

#3B82F6

Links, focus rings

Warning Amber

#F59E0B

Caution states

Aa

Error Rose

#F43F5E

Errors, destructive

Aa

Scholar Purple

#8B5CF6

AI, premium

Aa

Mentor Teal

#14B8A6

Mentorship, guides

#### Neutral Palette

Text Primary

#1E293B

Aa

Text Secondary

#64748B

Border

#E2E8F0

Surface

#F1F5F9

Background

#FAFBFC

Card White

#FFFFFF

### Typography System

A three-font system: Playfair Display for display/headings (academic gravitas), Inter for body/UI (screen readability, strong Indic pairing), JetBrains Mono for data and code (Research Passport metrics, LaTeX).

Career Pathfinder

Playfair Display 900 weight 48px / 1.1 Display / Hero titles

Research Passport Profile

Playfair Display 800 weight 32px / 1.2 Section headings

Component & Card Headings

Inter 700 weight 24px / 1.3 Card titles, subsections

PhDSetu serves PhD scholars from regional universities across India who face genuine information and network gaps. Most PhD scholars know only three career paths: postdoc, faculty position, or going abroad. This platform maps these paths clearly — with real stories from real people.

Inter 400 weight 16px / 1.7 Body text

Captions, helper text, and metadata labels use Inter at 14px with medium weight for improved legibility at smaller sizes.

Inter 500 weight 14px / 1.6 Captions, meta

publications: 12 | h_index: 8 | citations: 247 | salary: ₹18,00,000

JetBrains Mono 400 weight 14px / 1.6 Data, code, metrics

#### Type Scale (Desktop)

Token| Size| Weight| Line Height| Font| Usage  
---|---|---|---|---|---  
`display-xl`| 72px| 900| 1.1| Playfair| Hero only  
`display-lg`| 48px| 900| 1.1| Playfair| Page titles  
`heading-1`| 36px| 800| 1.2| Playfair| Section heads  
`heading-2`| 28px| 800| 1.2| Playfair| Sub-sections  
`heading-3`| 22px| 700| 1.3| Inter| Card titles  
`heading-4`| 18px| 700| 1.4| Inter| Sub-titles  
`body-lg`| 18px| 400| 1.8| Inter| Lead paragraphs  
`body`| 16px| 400| 1.7| Inter| Default body  
`body-sm`| 14px| 500| 1.6| Inter| Captions, meta  
`caption`| 12px| 600| 1.5| Inter| Labels, badges  
`mono`| 14px| 400| 1.6| JetBrains Mono| Code, data  
  
### Illustration Style & Iconography

The visual language uses a warm, semi-flat illustration style that represents India's diversity without stereotyping. Figures use diverse skin tones and attire (sarees, kurtas, formal wear) without defaulting to any single regional look.

#### Illustration Guidelines

  * • Semi-flat style with subtle gradients — not cartoonish, not photorealistic
  * • Warm, muted palette derived from brand colours
  * • Scholars shown in labs, libraries, conferences, industry sites
  * • Diverse representation: gender, region, ability, discipline
  * • Bridge metaphors used in empty states and onboarding
  * • SVG format for all illustrations — file size under 30KB each



#### Photography Direction

  * • Real scholars in authentic settings (not stock photos of Western campuses)
  * • Candid over posed — working in labs, presenting, collaborating
  * • Warm lighting, natural colour grading
  * • Regional university campuses — not just IITs/IISc
  * • Compressed to WebP, max 200KB, lazy loaded
  * • Alt text mandatory: descriptive, context-aware



#### Icon System

Using **Lucide Icons** (open-source, consistent 24px grid, 1.5px stroke). Custom icons for India-specific concepts where needed.

🎓 Profile

💼 Jobs

🧭 Pathfinder

💬 Community

🤝 Mentors

📚 Skill Studio

🤖 AI Translate

🌍 Language

🔔 Alerts

🔍 Search

Section 02

## Design Principles

Six core UX principles that govern every design decision on PhDSetu. Each principle directly addresses the lived reality of PhD scholars in India — from connectivity constraints to linguistic diversity.

01

### Recognition Before Transaction

Before we ask a scholar for anything (sign up, complete profile, upload data), we first show them something that recognises their work. The AI Career Translator provides instant value — translating their thesis into industry language — before any registration wall.

**Design Decision:** Onboarding starts with an AI-powered "wow moment" that immediately translates their research abstract into industry-ready career language. No login required for first translation. 

02

### Vernacular First

India's most isolated PhD scholars are in regional universities in Andhra Pradesh, Odisha, or Chhattisgarh. Content in Hindi, Telugu, Tamil, Bengali, Kannada, and Marathi is not an afterthought — it is a fundamental requirement.

**Design Decision:** Language selection is the very first screen in onboarding. All navigation, CTAs, and system messages are fully translated — not just content pages. UI accommodates 30% text expansion for Hindi. 

03

### Low Bandwidth Friendly

Many scholars access the platform on budget Android devices over 3G/4G in semi-urban and rural India. Every kilobyte matters. The platform must feel fast on a ₹7,000 smartphone with intermittent connectivity.

**Design Decision:** Skeleton screens instead of spinners. Lazy-loaded images in WebP under 200KB. Critical CSS inlined. Service worker caching for offline browsing of saved profiles and career paths. Total initial page load under 200KB. 

04

### Accessible Always

WCAG 2.1 AA is the minimum standard, not the aspiration. Every component, every interaction, every colour pairing must work for users with disabilities — including scholars with visual impairments, motor difficulties, and cognitive differences.

**Design Decision:** 4.5:1 minimum contrast for all text. 44x44px minimum touch targets. Full keyboard navigation. Screen reader-friendly ARIA labels. Reduced motion preference respected via `prefers-reduced-motion`. 

05

### Progressive Disclosure

PhD scholars' profiles are complex (publications, thesis, skills, certifications). Asking for everything upfront leads to abandonment. Show only what's needed at each stage, and reward completion incrementally.

**Design Decision:** Research Passport uses a 4-stage progressive profile builder. Profile completeness bar shows exactly what's missing. Each completion stage unlocks new features (50% = career matching, 75% = employer visibility, 100% = mentor matching). 

06

### Community-Led Trust

PhD scholars trust peer endorsements and real stories over marketing copy. Every feature must surface social proof — verified profiles, real career stories, mentor testimonials, and community-validated content.

**Design Decision:** Verified badges for authenticated scholars. "Real stories" integrated into career path pages. Community upvotes surface best advice. Founding member badges create early loyalty and social capital. 

Section 03

## Component Library

Atomic design components built for cross-device consistency, vernacular typography support, and WCAG 2.1 AA compliance. Each component is mobile-first and tested across Indic scripts.

### Button Hierarchy

Four button levels ensure clear visual hierarchy. All buttons meet 44x44px minimum touch target on mobile. Focus ring uses 3px solid blue outline with 2px offset.

Apply Now Get Started Save

Primary — Main CTAs, single per screen section

View Profile Explore Paths Details

Secondary — Supporting actions

Edit Profile Filter Cancel Skip

Outline & Ghost — Tertiary actions, cancel/dismiss

### Form Elements

Form components designed for profile-building flows. All inputs have visible labels (never placeholder-only), clear error states with inline messages, and touch-friendly sizing.

Full Name *

Research Domain Materials Science & Engineering Computer Science Chemical Engineering

Thesis Title

This helps our AI match you with relevant career paths

Email Address *

Please enter a valid email address

Research Summary

Used by Career Translator — can be in any language

### Card Designs

Four core card types across the platform. Each card is designed to be scannable at a glance, with clear visual hierarchy and actionable CTAs.

👩‍🔬

#### Dr. Priya Sharma

Materials Science & Engineering

IIT Bombay '24 | 12 Publications

✓ Verified Founding

Rheology Polymers XRD FTIR

**8** h-index **247** citations **92%** profile

#### Senior Research Scientist

Tata Chemicals R&D

🏭

Pune, MH Full-time PhD Required

Leading materials characterisation for new product development in specialty chemicals division...

₹ 18,00,000 – 28,00,000 / yr

Apply Save

👨‍🏫

Dr. Amit Verma

Industry Mentor

VP R&D, Hindustan Unilever

🏭 Industry PhD ⭐ Mentor

15+ years transitioning from IISc postdoc to FMCG R&D leadership. Mentors in formulation science, career strategy.

**34** mentees **4.9** rating **12** sessions/mo

Request Session

📝

SKILL STUDIO

#### CV That Converts

Transform your academic CV into an industry-ready resume that HR teams understand.

4 Modules 2.5 Hours Free

**1,247** enrolled Enrol

### Badge & Verification System

Badges communicate trust, role, and achievement. Each badge has a distinct colour to be identifiable even at small sizes. Badges display as inline flex elements that flow naturally with text.

✓ Verified Scholar ⭐ Mentor 🏭 Industry PhD 💎 Founding Member 🎓 PhD Guide 🛡 University Admin

**Verification process:** "Verified Scholar" requires institutional email confirmation or thesis committee verification. "Industry PhD" requires LinkedIn profile cross-reference and employer domain email. "Founding Member" is awarded to the first 1,000 scholars who complete their Research Passport. 

### Navigation Patterns

Mobile uses bottom tab navigation (5 primary destinations). Desktop uses a persistent left sidebar with collapsible sections.

#### Mobile Bottom Navigation

🏠

Home 

🧭

Paths 

💼

Jobs 

💬

Forum 

👤

Profile 

5 tabs max | Active state: filled icon + accent colour | 44x44px touch targets

#### Desktop Sidebar Structure

PhDSetu

🏠 Dashboard

📋 Research Passport

🧭 Career Pathfinder

🤖 AI Translator

💼 Job Board

💬 Community

🤝 Mentor Match

📚 Skill Studio

⚙ Settings

Section 04

## Research Passport Wireframes

The Research Passport is PhDSetu's core profile format — a standardised, verified portfolio with thesis abstract, methodology, skills map, domain keywords, and a 90-second video pitch. It replaces the traditional CV for research hiring.

### Profile Creation Flow — Progressive Disclosure

Four stages of progressive profile building. Each stage unlocks new platform features, encouraging completion without overwhelming the scholar upfront.

25%

Basic Identity

Name, email, university, department, year

Unlocks: Forum access

50%

Research Profile

Thesis title, abstract, domain, guide name

Unlocks: AI Career Matching

75%

Skills & Publications

Skills, publications, certifications

Unlocks: Employer visibility

100%

Complete Passport

Video pitch, portfolio, preferences

Unlocks: Mentor matching

### Completed Profile View — How Employers See It

The Research Passport presents a scholar's complete academic and professional profile in a structured, scannable format optimised for both mobile and desktop viewing.

Mobile View — 375px

9:41 PhDSetu 🔍 ⚙

👩‍🔬

Dr. Priya Sharma

Materials Science & Engineering

IIT Bombay | PhD 2024

✓ Verified Founding

12

Papers

8

h-index

247

Citations

92%

Complete

▶️

90-sec Video Pitch

Core Skills

Rheology Polymer Science XRD Analysis FTIR DMA

🤖 AI Career Translation

"Materials characterisation specialist with expertise in quality control, product development, and advanced testing for specialty chemicals and consumer products."

Home

Paths

Jobs

Forum

Profile

#### Profile Sections (Top to Bottom)

**1\. Header Card** — Avatar, name, department, university, year, verification badges 

**2\. Metrics Bar** — Publications count, h-index, citations, profile completeness 

**3\. Video Pitch** — 90-second embedded video with play overlay (lazy-loaded) 

**4\. Skills Visualisation** — Tag cloud with colour-coded skill categories (lab, analysis, software, domain) 

**5\. AI Career Translation** — Auto-generated industry-language summary of research expertise 

**6\. Thesis Abstract** — Expandable section with full abstract and keywords 

**7\. Publications List** — Sortable by date/citations, with DOI links and co-author tags 

**8\. Career Preferences** — Preferred roles, locations, salary range, availability timeline 

### AI Career Translator — Input/Output Screen

The AI Career Translator is the platform's signature feature and the "wow moment" in onboarding. It transforms academic research descriptions into industry-ready career language.

#### 🤖 Input Panel

Paste your research abstract or thesis summary I studied the rheological properties of silicone elastomers under shear stress, characterising their viscoelastic behaviour using dynamic mechanical analysis and correlating molecular architecture with macroscopic performance in high-temperature applications.

Accepts any language — AI handles translation

✨ Translate to Industry Language

#### ✨ AI Translation Output

INDUSTRY PROFILE SUMMARY

"Materials characterisation specialist with deep expertise in polymer testing, quality control for silicone-based products, and product development for high-performance industrial applications. Experienced in advanced analytical techniques including DMA, rheometry, and materials modelling."

MATCHED CAREER PATHS

1\. Senior R&D Scientist — Specialty Chemicals  
2\. Quality Assurance Lead — Polymer Manufacturing  
3\. Product Development Engineer — Automotive Materials  
4\. Technical Consultant — Materials Testing 

INDUSTRY KEYWORDS FOR YOUR CV

Materials Testing Quality Control Product Development Polymer Science R&D Leadership

Section 05

## Career Pathfinder Interaction Design

An interactive career exploration tool that helps PhD scholars discover career paths they never knew existed — from PSU scientist roles and IP consulting to science journalism and deep-tech startups.

### Career Map — Interactive Exploration

The Career Map is a filterable, visual directory of 50+ career paths available to PhD graduates across all disciplines. Scholars filter by domain, interest area, salary range, and location preference.

Desktop — Career Pathfinder

Filter Paths

DOMAIN

All Domains

Engineering & Technology

Life Sciences

Physical Sciences

Social Sciences

SECTOR

☐ Industry R&D

☐ Government / PSU

☐ Academia

☐ Startup / Entrepreneurship

☐ Consulting / Policy

SALARY RANGE

₹6L₹50L+

🔬

Industry R&D Scientist

Specialty Chemicals, Pharma, FMCG

₹12L – 35L

23 real stories | 47 open roles

🏛

PSU Scientist

BARC, DRDO, ISRO, CSIR Labs

₹10L – 25L

31 real stories | 12 open roles

💡

IP / Patent Consultant

Patent Law Firms, Corporate IP

₹8L – 30L

8 real stories | 15 open roles

📰

Science Journalist

Media, Publications, Policy Communication

₹6L – 18L

5 real stories | 7 open roles

### Career Path Detail Page

Each career path has a dedicated detail page with role description, salary benchmarks, required skills, real career stories from the PhDSetu community, and direct links to open positions.

Career Detail — Mobile

9:41 <- Career Path ❤

🔬

Industry R&D Scientist

Specialty Chemicals & Advanced Materials

Salary Range (India) ₹12L – 35L

Lead research projects in product development, quality characterisation, and process improvement within India's growing specialty chemicals sector... 

Required Skills

Materials Characterisation Analytical Techniques Product Development Project Management

💬 Real Story

"I moved from IISc postdoc to Tata Chemicals — the hardest part was rewriting my CV. PhDSetu's translator made that leap possible."

— Dr. Karthik M., Tata Chemicals

View 47 Open Roles ->

Home

Paths

Jobs

Forum

Profile

Section 06

## Onboarding Flow

A 5-step onboarding designed around instant value delivery. The core insight: show the scholar something extraordinary about their own research before asking them to invest in the platform.

🌍

Choose Language

Hindi, English, Telugu, Tamil, Bengali, Kannada, Marathi

➡

📝

Enter Research

Thesis topic, domain, and a short research description

➡

✨

AI Wow Moment

Instant career translation of their research — no login needed

➡

🧭

Matched Paths

See personalised career paths based on their domain and skills

➡

🤝

Join Community

Auto-join domain forum, connect with peers in the same field

### The "Wow Moment" Principle

When a PhD scholar enters their thesis topic and research summary, they should immediately receive something of real value: their research translated into industry language that an HR recruiter would understand. This first moment of "someone finally sees my research as valuable" creates lifelong loyalty. No login wall before this step — the value comes first, the account comes after.

### Onboarding Screen Details

#### Progress Indicators

A horizontal progress bar with numbered steps sits at the top of each onboarding screen. Completed steps use a filled circle with a checkmark. The current step pulses gently. Future steps are hollow circles.

✓

✓

3

4

5

#### Skip & Flexibility

Every step except language selection has a "Skip for now" ghost button. Skipped steps appear as gentle reminders in the dashboard ("Complete your Research Passport to unlock career matching"). The onboarding adapts based on what the scholar provides — if they skip the AI translation step, the dashboard highlights it as a next action.

Skip for now ->

Section 07

## Community & Forum UX

Thread-based discussions designed for academic depth — with LaTeX support for equations, code blocks for computational research, image uploads for results, and anonymous posting for sensitive topics.

### Thread Design

Discussion threads use a nested reply model (max 3 levels deep on mobile, unlimited on desktop). Each thread belongs to a domain category. Authors can mark replies as "Helpful" — surfacing best advice.

PS

Dr. Priya Sharma ✓ Verified

Materials Science • 2 hours ago

Has anyone transitioned from academic research in polymer science to an industry R&D role in India? I'm in my final year at IIT Bombay and struggling to understand how to position my rheology expertise for companies like Tata Chemicals or Asian Paints. Any advice on CV framing would be incredibly helpful. 

⬆ 24 Helpful 💬 8 Replies 🔖 Save 🔗 Share

AV

Dr. Amit Verma 🏭 Industry Mentor

VP R&D, Hindustan Unilever • 1 hour ago

Great question! I made this exact transition 15 years ago from IISc. The key insight: reframe "I studied rheological properties" as "I developed proprietary materials characterisation capabilities." Use the PhDSetu AI Translator — it does exactly this. Happy to do a mentoring session if you'd like detailed CV feedback. 

⬆ 18 Helpful 💬 Reply ✓ Marked as Best Answer

### Rich Text Editor Features

The forum editor supports academic writing needs beyond standard rich text:

**LaTeX Support** — Inline and block equations via KaTeX rendering

**Code Blocks** — Syntax-highlighted blocks for Python, R, MATLAB, Julia

**Image Uploads** — Drag-and-drop for research figures, auto-compressed to WebP

**Citations** — BibTeX import and inline citation formatting

**Tables** — Data tables with sortable columns

**Vernacular Input** — IME support for Indic script typing

### Anonymous Posting

For sensitive topics — mental health struggles, supervisor conflicts, institutional issues — scholars can post anonymously while maintaining account-level moderation capabilities.

👥

Anonymous Scholar

Chemistry • 4 hours ago

"I'm struggling with my supervisor's expectations and feeling isolated in my research. Has anyone dealt with similar challenges?"

**Privacy guarantee:** Domain category is shown (for relevant replies) but university, year, and specific research area are hidden. Moderators can still contact the author privately if safety concerns arise. 

Section 08

## Accessibility (WCAG 2.1 AA)

PhDSetu targets WCAG 2.1 AA as the minimum compliance standard, with select WCAG 2.2 criteria adopted proactively. Accessibility is not a feature — it is a requirement for every component shipped.

### Color Contrast Requirements

All text-on-background combinations must pass WCAG 2.1 AA minimum contrast ratios. The table below shows each primary combination and its measured ratio.

Text on Deep Navy 

16.3:1

✓ AAA Pass

Text Primary on White 

13.5:1

✓ AAA Pass

Text Secondary on White 

4.6:1

✓ AA Pass

Setu Red on White 

4.6:1

✓ AA Pass

Scholar Gold on Navy 

8.4:1

✓ AAA Pass

Depth Blue on White 

11.2:1

✓ AAA Pass

### Accessibility Specification Matrix

Criterion| WCAG Ref| Requirement| PhDSetu Implementation  
---|---|---|---  
**Text Contrast** | 1.4.3 AA | 4.5:1 normal text, 3:1 large text | All brand colours tested; Gold (#F0A500) restricted to dark backgrounds only  
**Non-text Contrast** | 1.4.11 AA | 3:1 for UI components and graphics | All icons, form borders, and chart elements meet 3:1 against their backgrounds  
**Focus Visible** | 2.4.7 AA | Focus indicator visible on all interactive elements | `:focus-visible` with 3px solid #3B82F6 outline, 2px offset  
**Touch Targets** | 2.5.5 AAA / 2.5.8 AA | Minimum 44x44px (target), 24x24px (minimum) | All interactive elements maintain 44x44px minimum on mobile viewports  
**Keyboard Navigation** | 2.1.1 A | All functionality available via keyboard | Tab order follows visual layout; skip-to-content link; modal traps focus  
**Screen Reader** | 4.1.2 A | All components have accessible names and roles | ARIA labels on all interactive elements; live regions for dynamic content  
**Alt Text** | 1.1.1 A | All images have text alternatives | Descriptive alt text mandatory; decorative images use `alt=""` with `role="presentation"`  
**Font Size Minimum** | 1.4.4 AA | Text resizable to 200% without loss | Minimum 14px for body, 12px for captions; all in rem units; tested at 200% zoom  
**Reduced Motion** | 2.3.3 AAA | Respect user motion preferences | `prefers-reduced-motion: reduce` disables all transitions and animations  
**Reflow** | 1.4.10 AA | Content at 320px without horizontal scroll | Single-column layout below 480px; no horizontal overflow  
**Focus Not Obscured** | 2.4.11 AA | Focused element not entirely hidden | Sticky headers have `scroll-padding-top`; modals manage focus within  
  
### Keyboard Navigation Map

Complete keyboard accessibility for all core user flows:

Key| Action| Context  
---|---|---  
`Tab`| Move to next interactive element| Global  
`Shift + Tab`| Move to previous interactive element| Global  
`Enter / Space`| Activate focused button or link| Buttons, links  
`Escape`| Close modal, dropdown, or popover| Modals, dropdowns  
`Arrow Keys`| Navigate within tabs, dropdowns, or radio groups| Tab bars, selects  
`Home / End`| Jump to first/last item in list| Lists, tabs  
`/`| Focus search input| Global (when not in text input)  
`?`| Open keyboard shortcuts help| Global  
  
### Focus Indicator Demonstration

Use Tab to navigate through these elements and observe the focus ring behaviour. Focus rings use `:focus-visible` to appear only on keyboard navigation.

Button 1 Button 2 [Link](#) Dropdown

Section 09

## Vernacular Typography

Typography recommendations for 6+ Indian languages using Google's Noto Sans superfamily — ensuring consistent visual weight, proper glyph rendering, and adequate line spacing across all supported scripts.

### Font Recommendations by Script

All Indic scripts use Noto Sans variants for consistency. Noto Sans provides harmonised x-height and weight distribution across scripts, ensuring that mixed-language UIs feel visually balanced.

Hindi (Devanagari)

PhDSetu आपके शोध करियर का सेतु है। अपनी थीसिस को इंडस्ट्री भाषा में बदलें।

Font: Noto Sans Devanagari | Size: 20px | Line-height: 1.8 | ~30% longer than English equivalent

Telugu (తెలుగు)

PhDSetu మీ పరిశోధన కెరీర్‌కు సేతువు. మీ థీసిస్‌ను పరిశ్రమ భాషలోకి మార్చండి.

Font: Noto Sans Telugu | Size: 20px | Line-height: 1.9 | Complex conjuncts need extra vertical space

Tamil (தமிழ்)

PhDSetu உங்கள் ஆராய்ச்சி வாழ்க்கைக்கான பாலம். உங்கள் ஆய்வுக்கட்டுரையை தொழில் மொழியில் மாற்றுங்கள்.

Font: Noto Sans Tamil | Size: 20px | Line-height: 1.8 | Rounded letterforms need generous spacing

Bengali (বাংলা)

PhDSetu আপনার গবেষণা ক্যারিয়ারের সেতু। আপনার থিসিসকে শিল্প ভাষায় রূপান্তর করুন।

Font: Noto Sans Bengali | Size: 20px | Line-height: 1.9 | Dense strokes — minimum 16px for readability

Kannada (ಕನ್ನಡ)

PhDSetu ನಿಮ್ಮ ಸಂಶೋಧನಾ ವೃತ್ತಿಜೀವನಕ್ಕೆ ಸೇತುವೆ. ನಿಮ್ಮ ಪ್ರಬಂಧವನ್ನು ಉದ್ಯಮ ಭಾಷೆಗೆ ಪರಿವರ್ತಿಸಿ.

Font: Noto Sans Kannada | Size: 20px | Line-height: 1.9 | Below-base consonants need vertical room

Marathi (Devanagari — मराठी)

PhDSetu तुमच्या संशोधन करिअरचा सेतू आहे। तुमचा प्रबंध उद्योग भाषेत रूपांतरित करा.

Font: Noto Sans Devanagari | Size: 20px | Line-height: 1.8 | Shares Devanagari with Hindi, different vocabulary

### Vernacular Typography Guidelines

Parameter| English (Latin)| Devanagari (Hindi/Marathi)| Telugu/Kannada| Tamil| Bengali  
---|---|---|---|---|---  
**Primary Font** | Inter | Noto Sans Devanagari | Noto Sans Telugu / Kannada | Noto Sans Tamil | Noto Sans Bengali  
**Min Body Size** | 16px | 16px | 16px | 16px | 16px  
**Line Height (body)** | 1.7 | 1.8 | 1.9 | 1.8 | 1.9  
**Text Expansion** | Baseline | +25–30% | +20–25% | +15–20% | +20–25%  
**Text Direction** | LTR | LTR | LTR | LTR | LTR  
**Underline** | Allowed | Avoid (shirorekha conflicts) | Avoid (below-base forms) | Allowed with caution | Avoid (dense strokes)  
  
### Text Expansion Handling

Hindi text is approximately 30% longer than English. This has major implications for button labels, navigation tabs, and form fields.

EN

Get Started

HI

शुरू करें

TE

ప్రారంభించండి

**Rule:** All buttons use `padding` not fixed `width`. Navigation labels are tested at maximum expansion length. Truncation with ellipsis is the fallback, never truncation without indication. 

### Language Switcher & RTL

The language switcher is a persistent UI element — always accessible from the header (desktop) or profile menu (mobile). Language preference is stored locally and synced to the user profile.

Language Switcher Placement

English

हिन्दी

తెలుగు

தமிழ்

বাংলা

ಕನ್ನಡ

**Urdu (RTL) Consideration:** Urdu uses the Perso-Arabic script and reads right-to-left. If Urdu support is added, the layout engine uses `dir="rtl"` on the `<html>` tag, CSS logical properties (`margin-inline-start` instead of `margin-left`), and mirrored navigation icons. The Noto Nastaliq Urdu font is recommended. 

Section 10

## Responsive Design System

Mobile-first responsive design with three breakpoints, a 12-column grid, and specific component adaptations for each viewport size. Optimised for India's budget device reality.

### Breakpoint Definitions

320–480px

Mobile

1 column layout  
Bottom tab nav  
Stacked cards  
Hamburger menu

481–768px

Tablet

2 column layout  
Side nav (collapsible)  
Grid cards  
Split views

769px+

Desktop

3-4 column layout  
Persistent sidebar  
Grid + list views  
Multi-panel layouts

### 12-Column Grid

A fluid 12-column grid with responsive gutters. On mobile, most content spans full width (12 columns). On tablet, primary content takes 8 columns with sidebar at 4. On desktop, the ratio adjusts to content needs.

1

2

3

4

5

6

7

8

9

10

11

12

Gutters: 16px (mobile) | 20px (tablet) | 24px (desktop) | Max container: 1100px

Breakpoint| Gutter| Margin| Max Container| Columns Used  
---|---|---|---|---  
Mobile (320–480px)| 16px| 20px| 100%| 4 (of 12)  
Tablet (481–768px)| 20px| 32px| 100%| 8 (of 12)  
Desktop (769px+)| 24px| 40px| 1100px| 12  
  
### Low-Bandwidth Optimisations

Designed for India's budget device reality — ₹7,000 smartphones on intermittent 3G/4G networks. Every optimisation targets real performance metrics on low-end devices.

Lazy Loading

All images, avatars, and video embeds load on-demand using `loading="lazy"` and Intersection Observer. Above-the-fold content loads first.

Skeleton Screens

Shimmer placeholder patterns instead of loading spinners. Users see the layout structure immediately, reducing perceived wait time by up to 40%.

Image Compression

All images served in WebP with AVIF fallback. Profile photos max 100KB. Illustrations max 30KB (SVG). `srcset` serves device-appropriate sizes.

Service Worker Caching

Core shell cached for offline browsing. Previously viewed profiles, career paths, and saved jobs accessible without network. Background sync for new data.

Critical CSS Inlined

Above-the-fold CSS inlined in `<head>`. Remaining CSS loaded asynchronously. Total critical CSS under 14KB (one TCP roundtrip).

Performance Budgets

First Contentful Paint < 1.5s. Time to Interactive < 3s. Total page weight < 200KB. JavaScript bundle < 100KB gzipped.

Section 11

## Dark Mode

A carefully designed dark theme that maintains readability, accessibility, and brand identity. Dark mode reduces eye strain for late-night browsing and saves battery on OLED devices common in India's smartphone market.

### Dark Mode Color Palette

Dark mode uses elevated surfaces rather than pure black, maintaining visual hierarchy through subtle elevation changes.

Background

#0F172A

Surface / Card

#1E293B

Elevated Surface

#334155

Border

#475569

Aa

Text Primary

#F1F5F9

Aa

Text Secondary

#94A3B8

### Component Adaptation Preview

Components adapt to dark mode by adjusting surface colours, reducing shadow opacity, and slightly desaturating accent colours to prevent visual harshness on dark backgrounds.

#### Senior R&D Scientist

Tata Chemicals • Pune, MH

Full-time PhD Required

₹18L – 28L / yr

Apply Save

👩‍🔬

Dr. Priya Sharma

Materials Science

Rheology Polymers XRD

Primary Dark Secondary Dark Outline Dark Ghost Dark

### User Preference Persistence

Dark mode preference is managed via a three-way toggle: Light, Dark, System. The default is "System" — respecting the device's `prefers-color-scheme` media query. When a user manually selects a preference, it is stored in `localStorage` for guest users and synced to the user profile for logged-in users, persisting across devices. The toggle uses CSS custom properties to swap the entire colour palette without a page reload.

### System Preference Detection

On first visit, PhDSetu checks `window.matchMedia('(prefers-color-scheme: dark)')` and applies the appropriate theme. A `change` event listener updates the theme in real-time if the user changes their system preference while the app is open. The implementation uses CSS custom properties defined on `:root` and overridden via a `[data-theme="dark"]` attribute on `<html>`, enabling instant theme switching with zero layout shift.

Section 12

## Prototype & Testing Plan

A structured approach to design validation — from tool selection through user testing with real PhD scholars to A/B testing of critical conversion flows.

### Design Tool Recommendation

Figma is the recommended primary design tool for its collaborative capabilities, prototype fidelity, and component library management.

Tool| Purpose| Why  
---|---|---  
**Figma**|  UI Design, Prototyping, Design System| Real-time collaboration, auto-layout for responsive design, Indic font support  
**FigJam**|  Workshops, User Journey Mapping| Integrated with Figma, whiteboard for research sessions  
**Maze**|  Unmoderated Usability Testing| Connects directly to Figma prototypes, quantitative metrics  
**Hotjar**|  Heatmaps, Session Recordings| Post-launch behavioural analytics on live site  
**Storybook**|  Component Documentation| Living documentation synced with codebase  
  
### User Testing Protocol

Test with 10 PhD scholars from diverse backgrounds to ensure the platform works for all of India's research community, not just IIT graduates.

Participant| University Type| Language  
---|---|---  
2 scholars| IIT / IISc (central)| English  
2 scholars| NIT / IISER| English / Hindi  
2 scholars| State University (UP/MP)| Hindi primary  
2 scholars| State University (AP/TN)| Telugu / Tamil  
1 scholar| State University (WB/Assam)| Bengali  
1 scholar| State University (KA)| Kannada  
  
**Testing conditions:** Participants test on their own devices (not lab equipment). Sessions include both WiFi and 4G connectivity. At least 3 participants use budget smartphones (under ₹15,000). Each session is 45 minutes: 5 min warm-up, 30 min task-based testing, 10 min debrief. 

### Usability Metrics & Success Criteria

Metric| Measurement| Target| Critical Flow  
---|---|---|---  
**Task Success Rate** | % of participants completing task without assistance | > 85% | Complete Research Passport to 50%  
**Time-on-Task** | Seconds from task start to successful completion | < 180 seconds | Use AI Career Translator  
**Error Rate** | % of tasks with at least one user error | < 15% | Onboarding flow completion  
**System Usability Scale (SUS)** | Standardised 10-question post-test survey (0–100) | > 72 (above average) | Overall platform experience  
**First-Click Accuracy** | % of first clicks on correct target | > 80% | Navigation to Career Pathfinder  
**Net Promoter Score (NPS)** | Would you recommend this to a peer? (0–10) | > 40 | Overall satisfaction  
  
### A/B Testing Framework

Planned A/B tests for key conversion points, prioritised by impact potential.

Test 1: Onboarding Wow Moment Placement

**A:** AI translation after language + research input (Step 3)  
**B:** AI translation immediately on homepage with just thesis paste  
**Metric:** Onboarding completion rate, time to first value 

Test 2: Profile Completion Motivation

**A:** Progress bar with feature unlock messages  
**B:** "X employers viewed profiles like yours" social proof  
**Metric:** Profile completion rate (50% → 75% → 100%) 

Test 3: Career Path Card Layout

**A:** Grid cards with salary prominent  
**B:** List view with real story snippet prominent  
**Metric:** Click-through to career path detail pages 

Test 4: Language Switcher Visibility

**A:** Header globe icon (standard)  
**B:** Floating bottom-right button with script preview  
**Metric:** Language switch rate, bounce rate by region 

### Design System Governance

This design system is a living document. It evolves with user feedback, accessibility audits, and new platform features. Every component change requires: (1) Figma update with documented rationale, (2) Storybook documentation update, (3) Accessibility re-audit of affected components, (4) Cross-browser testing (Chrome, Firefox, Safari, Samsung Internet — India's top 4 browsers), and (5) Performance regression check against budget targets. The design system is versioned using semantic versioning (MAJOR.MINOR.PATCH) and maintained alongside the codebase.

PhDSetu

UX/UI Design System — Document 08 of 12  
India's first career infrastructure platform for PhD scholars

12 Sections | 6+ Languages | WCAG 2.1 AA | Mobile-First | Dark Mode Ready

Prepared for PhDSetu founding team • Design system version 1.0 • June 2026 
