Document 17 — Governance & Trust

# AI Ethics, Accessibility & Crisis Communication

Three interconnected governance frameworks that establish PhDSetu as a platform scholars can trust — with responsible AI, inclusive design, and resilient crisis response built into the foundation.

3

Governance Frameworks

32

Policy Areas Covered

WCAG 2.1

AA Target Compliance

72h

DPDP Breach Deadline

Part A

## AI Ethics & Accuracy Framework

Governing the AI Career Translator — the LLM-based engine that converts thesis descriptions into industry-readable language — with accuracy benchmarks, bias safeguards, privacy protections, and responsible AI principles.

A.1 — Quality Assurance

Accuracy Benchmarks

The AI Career Translator must produce translations that are both faithful to the scholar's research and meaningful to industry recruiters. These benchmarks define what "good" looks like.

🎯

### Semantic Fidelity Score

Measures whether the translated profile preserves the core meaning, domain expertise, and methodological competence described in the original thesis abstract.

  * Cosine similarity between source and output embeddings ≥ 0.85
  * Named entity preservation rate ≥ 95%
  * Domain keyword retention rate ≥ 90%
  * Methodology-to-skill mapping accuracy ≥ 85%



📊

### Industry Relevance Score

Measures whether the translated output uses vocabulary and framing that industry recruiters recognise, benchmarked against real job descriptions.

  * JD keyword overlap ≥ 70% for target roles
  * Recruiter comprehension rating ≥ 4.2/5 (panel test)
  * Readability: Flesch-Kincaid grade level 10–14
  * Actionable skills extraction: ≥ 8 per profile



✅

### Human Evaluation Protocol

Automated metrics alone are insufficient. A dual-panel review by domain experts and HR professionals validates translation quality quarterly.

  * Panel A: 5 domain experts score research accuracy
  * Panel B: 5 HR professionals score clarity and hireability
  * Inter-rater reliability (Cohen's κ) ≥ 0.7
  * Minimum 100 profiles per quarterly evaluation cycle



📐

#### Composite Quality Index (CQI)

CQI = (0.35 × Semantic Fidelity) + (0.35 × Industry Relevance) + (0.30 × Human Evaluation). Minimum launch threshold: CQI ≥ 0.80. Any translation batch scoring below 0.75 triggers automatic human review escalation.

A.2 — Fairness & Equity

Bias Testing Framework

The Career Translator must not systematically favour certain disciplines, genders, institutions, or linguistic backgrounds over others. Bias testing is continuous, not one-time.

⚖️

### Discipline Bias Testing

Does the translator produce richer, more actionable outputs for STEM fields than for humanities, social sciences, or arts?

  * Test corpus: 50 profiles each from 10 disciplines
  * Measure: Average actionable skills count per discipline
  * Measure: Industry relevance score variance across disciplines
  * Threshold: No discipline's mean score deviates > 15% from overall mean
  * Remediation: Fine-tune prompts with discipline-specific few-shot examples



👤

### Gender Bias Testing

Does the translator use different tones, adjectives, or industry framings based on gendered names or pronouns in the source text?

  * Test: Same thesis, two versions — male-coded vs female-coded names
  * Compare: Adjective sentiment, role-level suggestions, salary-range signals
  * Test set: 200 pairs (name-swapped, identical content)
  * Threshold: Sentiment differential < 0.05 on normalised scale
  * Remediation: Name anonymisation in the prompt pipeline before translation



🏛️

### Institution Prestige Bias

Does the translator produce qualitatively better outputs for IIT/IISc scholars vs regional university scholars, even when thesis quality is equivalent?

  * Test: Identical thesis abstracts attributed to Tier-1, Tier-2, and Tier-3 institutions
  * Compare: Translation richness, role-level mapping, confidence language
  * Test set: 150 triples (same content, different institution attributions)
  * Threshold: Cross-tier score variance < 10%
  * Remediation: Strip institution names from LLM input; add post-hoc



🌐

### Language & Script Bias

Does the translator handle thesis abstracts that contain transliterated terms, Indic-language mixed text, or non-standard English equally well?

  * Test corpus: 100 profiles with Indic terms, regional phrasing
  * Compare against 100 profiles with "standard" academic English
  * Measure: Semantic fidelity drop, hallucination rate increase
  * Threshold: Fidelity drop < 8% for mixed-language inputs
  * Remediation: Pre-processing layer that normalises transliterations



### Bias Testing Cadence

Full bias audit runs quarterly. Automated fairness checks (discipline and gender baselines) run on every model update, prompt change, or provider switch. Results are published in PhDSetu's annual Responsible AI Report — accessible to all scholars from their dashboard. If any bias threshold is breached, the affected translation pipeline is paused within 24 hours until remediation is validated.

A.3 — Human Oversight

First 1,000 Profiles: Manual Review

Before fully trusting the AI pipeline, the first 1,000 AI-generated translations undergo mandatory human review. This phase calibrates the system, builds the training dataset, and establishes quality norms.

1

#### AI Generates Draft Translation

Scholar submits thesis abstract and research description. The AI Career Translator produces a draft industry-ready profile, tagged with confidence scores per section (skills, experience framing, role suggestions).

2

#### Domain Expert Review (Panel A)

A reviewer with expertise in the scholar's field verifies technical accuracy. They score: factual correctness (1–5), skill extraction accuracy (1–5), and flag any hallucinated claims. Average review time target: 12 minutes per profile.

3

#### Industry Relevance Review (Panel B)

An HR professional or industry mentor reviews the translation for recruiter readability, appropriate role mapping, and market relevance. They score: clarity (1–5), hireability (1–5), and suggest improvements.

4

#### Scholar Verification

The scholar reviews the final translation. They confirm accuracy, flag misrepresentations, and provide a consent-to-publish signal. Scholars can request up to 2 revision cycles before finalisation.

5

#### Feedback Loop → Model Improvement

All review scores, corrections, and scholar feedback are compiled into a structured training dataset. After 1,000 profiles: recalibrate prompts, establish automated quality gates, and transition to a sampling-based review model (10% random audit).

1,000

Profiles Manually Reviewed

12 min

Target Review Time

10%

Ongoing Random Audit

2

Scholar Revision Cycles

A.4 — Accuracy Safeguards

Hallucination Detection & Prevention

LLMs can fabricate skills, publications, or capabilities that a scholar never demonstrated. For a career platform, hallucination is not a minor error — it is reputational and professional damage.

🚨

### Hallucination Categories

  * **Skill fabrication:** Adding technical skills the scholar never mentioned (e.g. "machine learning" from a wet-lab chemistry thesis)
  * **Role inflation:** Suggesting senior-level roles for early-career scholars without justification
  * **Publication invention:** Referencing papers or journals that don't exist
  * **Institution embellishment:** Upgrading or misattributing the scholar's institutional affiliation
  * **Methodology conflation:** Blending techniques from different fields into a scholar's profile



🛡️

### Prevention Architecture

  * **Grounded generation:** LLM prompt strictly constrained to input text — "Only use information explicitly stated"
  * **Entity verification:** Post-generation check against input for every named entity, skill, and methodology
  * **Confidence tagging:** Each output section carries a confidence score; sections below 0.7 flagged for review
  * **Fact-checking layer:** Automated cross-reference of claimed skills against known discipline taxonomies
  * **Guardrail prompts:** System prompt includes explicit instruction: "Never add information not present in the source"



⚠️

#### Zero Tolerance for Publication Hallucination

Any AI-generated profile that references a publication, patent, or certification not verifiable in the scholar's input data is automatically rejected and routed for manual translation. This is a hard rule with no exceptions — the professional consequences of false claims on a career profile are severe.

Detection Method | What It Catches | Accuracy | Runtime  
---|---|---|---  
NER Diff Analysis | New entities in output not present in input | ~95% | < 200ms  
Embedding Distance Check | Semantic drift from source beyond threshold | ~88% | < 500ms  
Skill Taxonomy Validation | Skills outside the discipline's known taxonomy | ~92% | < 300ms  
Claim Extraction + Verification | Quantified claims (years, publications, patents) | ~85% | < 1s  
Human Spot-Check (10% sample) | Subtle contextual hallucinations missed by automation | ~99% | 12 min/profile  
  
A.5 — Continuous Improvement

Scholar Feedback Loops

Scholars are not passive recipients of AI translations — they are active quality partners. Every translation is an opportunity to improve the system.

⭐

### Immediate Rating

After receiving their translation, scholars rate it on three dimensions using a simple 5-star interface:

  * **Accuracy:** "Does this correctly represent my research?"
  * **Clarity:** "Would a non-academic understand this?"
  * **Completeness:** "Are my key skills and strengths captured?"



✏️

### Inline Corrections

Scholars can highlight specific sentences and provide corrections. These corrections are structured as (original → corrected) pairs that directly feed prompt improvement.

  * Track correction frequency per section type
  * Most-corrected sections trigger prompt redesign
  * Corrections aggregated anonymously for model tuning



📈

### Longitudinal Tracking

Track real-world outcomes: did the translated profile help the scholar get interviews, shortlists, or job offers? This closes the feedback loop from translation quality to career impact.

  * 30-day follow-up survey on recruiter responses
  * 90-day outcome tracking (interview/offer data)
  * Correlate translation quality scores with outcomes



### Feedback-Driven Iteration Cycle

Monthly aggregation of all scholar feedback → identify top 5 recurring issues → redesign prompts or add few-shot examples → A/B test new prompts against control → deploy if CQI improves ≥ 3%. Target: 15% CQI improvement in Year 1 through feedback-driven iteration alone. All scholars who contributed corrections receive a "Quality Contributor" badge on their profile.

A.6 — Honest Communication

Transparency Framework

Every scholar and employer interacting with AI-generated content must understand exactly what they are seeing — and what they are not.

💬

### User-Facing Disclosure

Every AI-translated profile displays a persistent, non-dismissable disclosure banner:

**"AI-assisted career translation"** — This profile was generated using AI to translate academic research into industry-relevant language. It is a _suggestion_ , not a definitive representation. The scholar has reviewed and approved this translation. [Learn how this works →](#)

  * Shown on every profile view (scholar and employer side)
  * Links to detailed methodology page
  * Scholar approval timestamp displayed



📋

### Methodology Documentation

A public-facing page explains — in plain language — how the AI Career Translator works, what data it uses, and what its limitations are.

  * What the AI does and doesn't do
  * What data is used (and never used)
  * How quality is measured (link to latest CQI scores)
  * How scholars can report issues
  * Model provider and version (updated on each change)
  * Annual Responsible AI Report (downloadable)



A.7 — Privacy & Data Protection

LLM Data Handling Protocol

Scholar data is sacred. No thesis abstract, personal detail, or career information is used for model training without explicit, informed, revocable consent.

🔒

### Data-in-Transit Protections

  * All API calls to LLM providers use TLS 1.3 encryption
  * PII (names, emails, phone numbers) stripped before LLM input
  * Institution names anonymised in the translation prompt
  * Unique request IDs for audit trail; no persistent session data at provider
  * API agreements: Provider must not log, store, or train on PhDSetu inputs



📜

### Consent Architecture

  * **Tier 1 (Default):** Data used only for generating the scholar's own translation. Deleted from pipeline within 24 hours.
  * **Tier 2 (Opt-in):** Anonymised data may be used to improve PhDSetu's translation quality. Scholar can revoke at any time.
  * **Tier 3 (Never):** Raw scholar data is never shared with third parties, sold, or used for LLM fine-tuning outside PhDSetu's own infrastructure.
  * Consent choices are granular, revocable, and auditable
  * DPDP Act Section 6 compliant notice-and-consent flow



🔐

#### Data Retention: 24-Hour Pipeline Purge

All intermediate data in the LLM translation pipeline — prompts, raw outputs, intermediate processing artifacts — is automatically purged within 24 hours of translation completion. Only the scholar-approved final translation is retained, linked to their consent record. Purge logs are immutable and auditable.

A.8 — Technical Infrastructure

Model Selection Criteria

Choosing the right LLM provider is a multi-dimensional decision balancing quality, cost, privacy, and vendor risk. PhDSetu evaluates models on these criteria.

Criterion | OpenAI (GPT-4o) | Anthropic (Claude) | Open Source (Llama/Mistral)  
---|---|---|---  
**Translation Quality** | Excellent — Strong at structured rewriting | Excellent — Nuanced, avoids over-claiming | Good — Requires more prompt engineering  
**Data Privacy** | Enterprise API: no training on inputs | Strong: no training by default, clear policy | Full control: self-hosted, no external calls  
**Cost per Translation** | ~₹4–8 per profile (~500 input + 800 output tokens) | ~₹5–10 per profile (similar token economics) | ~₹0.5–2 per profile (GPU infrastructure cost)  
**Latency** | 2–5 seconds | 3–6 seconds | 5–15 seconds (depends on hardware)  
**Vendor Lock-in Risk** | High — Proprietary API | Medium — Proprietary but stable | None — Full model ownership  
**India Compliance (DPDP)** | Data leaves India | Data leaves India | On-premise possible  
**Hallucination Rate** | Moderate — needs guardrails | Low — conservative by default | Variable — model-dependent  
  
### Recommended Strategy: Multi-Provider with Fallback

**Phase 1 (Launch):** Anthropic Claude as primary provider (best balance of quality, safety, and privacy). OpenAI GPT-4o as fallback for availability. **Phase 2 (Scale):** Evaluate fine-tuned open-source model (Llama 3.1 70B or Mistral Large) for cost reduction and data sovereignty. **Phase 3 (Maturity):** Hybrid — open-source for standard translations, Claude/GPT for complex edge cases. All providers accessed through an abstraction layer to enable zero-downtime switching.

A.9 — Operational Efficiency

Cost Optimisation

At scale (50,000+ profiles/year), unoptimised LLM costs become unsustainable. These strategies ensure AI quality while controlling spend.

💾

### Semantic Caching

Cache translated outputs indexed by thesis abstract embeddings. When a new input is semantically similar (cosine similarity ≥ 0.92) to a cached input, serve the cached result with minor adaptations.

  * Expected cache hit rate: 15–25% (similar methodologies across scholars in same department)
  * Cache TTL: 90 days (refreshed on model update)
  * Savings: ~20% reduction in API calls



📦

### Batch Processing

Queue non-urgent translations (profile creation, periodic refreshes) into daily batches. Use batch API endpoints for 50% cost reduction on most providers.

  * Real-time: Only for live profile preview during onboarding
  * Batch: Profile generation, periodic re-translations, bulk imports
  * Batch window: 2:00–6:00 AM IST (off-peak pricing)



🔧

### Token Management

Minimise token usage without sacrificing quality through intelligent prompt design and input preprocessing.

  * Input: Compress thesis abstracts to essential claims (remove boilerplate acknowledgements, formatting)
  * Prompts: Use structured output formats (JSON) to reduce output tokens by ~30%
  * System prompt: Reuse across batch (amortised token cost)
  * Max output cap: 800 tokens per profile section



₹4–8

Cost Per Translation

₹2–4

With Optimisation

50%

Batch API Savings

20%

Cache Hit Savings

A.10 — Ethical Foundation

Responsible AI Principles for Career Guidance

PhDSetu's AI assists career discovery — it never replaces human judgment, guarantees outcomes, or positions itself as a definitive authority on a scholar's career potential.

### 1\. No Outcome Guarantees

PhDSetu will never state or imply that using the AI Career Translator will result in a specific job, salary, or career outcome. All suggestions are framed as possibilities based on the scholar's stated experience — not predictions or promises.

**Never:** "Your profile qualifies you for a ₹25 LPA role at Reliance."

**Instead:** "Based on your expertise, roles in materials R&D; at chemical companies may be relevant. Explore these listings."

### 2\. Augment, Never Replace

AI translations are a starting point for the scholar's own career narrative — not the final word. Scholars are always encouraged to edit, personalise, and add context that the AI cannot infer from a thesis abstract alone.

### 3\. Equity by Design

The AI system is designed to serve all scholars equitably — regardless of institution tier, discipline, gender, language, or disability status. Bias testing is structural and continuous, not performative.

### 4\. Scholar Sovereignty

Scholars own their data, their translations, and their career narratives. They can delete their AI-generated profiles at any time. They can opt out of the AI system entirely and create profiles manually. The AI exists to serve them — they do not serve the AI's training needs.

### 5\. Accountable Governance

A designated Responsible AI Officer (within the founding team initially) reviews all AI-related decisions, publishes quarterly quality reports, and serves as the escalation point for scholar complaints about AI-generated content.

### 6\. Continuous Humility

PhDSetu acknowledges that AI translation is an evolving capability. The platform commits to publicly communicating known limitations, actively seeking scholar feedback, and iterating with honesty about what the system can and cannot do.

Part B

## Accessibility Audit & Compliance Plan

PhDSetu serves scholars across India, including differently-abled researchers. WCAG 2.1 AA compliance is not a checkbox — it is a commitment to ensuring every scholar can access every feature, on every device, with any assistive technology.

B.1 — Compliance Foundation

WCAG 2.1 AA Compliance Checklist

The Web Content Accessibility Guidelines (WCAG) 2.1 Level AA define 50 success criteria across four principles: Perceivable, Operable, Understandable, and Robust. This checklist maps each principle to PhDSetu-specific requirements.

#### 👁️ Perceivable

  * All non-text content (icons, images, charts) has meaningful alt text
  * Video content (webinars, mentor sessions) has captions and transcripts
  * Text can be resized up to 200% without loss of content or function
  * Colour is never the sole means of conveying information (icons + text always paired)
  * Contrast ratio ≥ 4.5:1 for normal text, ≥ 3:1 for large text (≥ 18pt / 14pt bold)
  * Audio content has visual alternatives; no auto-playing audio
  * Content reflows properly at 320px width (no horizontal scrolling)
  * Spacing adjustable: line height ≥ 1.5×, paragraph spacing ≥ 2×, letter spacing ≥ 0.12em



#### ⌨️ Operable

  * All functionality accessible via keyboard alone (no mouse-only interactions)
  * No keyboard traps — focus can always move away from any component
  * Skip navigation links on every page (skip to main content, skip to search)
  * Focus indicators visible and high-contrast (3px solid outline, offset 2px)
  * No content that flashes more than 3 times per second
  * Page titles descriptive and unique for every route
  * Focus order matches visual reading order (left-to-right, top-to-bottom)
  * Touch targets minimum 44×44 CSS pixels with 8px spacing between targets



#### 📖 Understandable

  * Page language declared in HTML lang attribute (lang="en" or lang="hi")
  * Language changes within content marked with lang attribute on the element
  * Navigation consistent across all pages (same order, same location)
  * Form inputs have visible labels (not just placeholders)
  * Error messages identify the field and describe the error in text
  * Error suggestions provided when validation fails (e.g., "Email must include @")
  * Important actions are reversible, confirmed, or reviewable before submission
  * Jargon and abbreviations explained on first use (e.g., "CQI" → tooltip with full form)



#### 🔧 Robust

  * Valid, semantic HTML5 markup (no duplicate IDs, proper nesting)
  * ARIA roles, states, and properties used correctly where native HTML is insufficient
  * Custom components (dropdowns, modals, tabs) follow WAI-ARIA Authoring Practices
  * Status messages conveyed to assistive technologies via aria-live regions
  * Works with major screen readers: NVDA (Windows), VoiceOver (macOS/iOS), TalkBack (Android)
  * Works with major browsers: Chrome, Firefox, Safari, Edge (latest 2 versions)
  * Progressive enhancement: core functionality works without JavaScript
  * Name, role, and value programmatically determinable for all UI components



B.2 — Assistive Technology

Screen Reader Compatibility Testing Plan

Screen reader compatibility is tested against all critical user journeys on PhDSetu, using the three major screen readers across desktop and mobile platforms.

Screen Reader | Platform | Browser | Test Frequency | Priority  
---|---|---|---|---  
**NVDA** | Windows 10/11 | Chrome, Firefox | Every release | Critical  
**JAWS** | Windows 10/11 | Chrome, Edge | Quarterly | High  
**VoiceOver** | macOS, iOS | Safari | Every release | Critical  
**TalkBack** | Android | Chrome | Every release | Critical  
**Narrator** | Windows 11 | Edge | Bi-annually | Medium  
  
Critical User Journeys for Screen Reader Testing

#### Registration & Onboarding

  * Sign-up form field navigation
  * Error announcement and recovery
  * Profile creation wizard (multi-step)
  * Thesis abstract input (multiline)
  * AI translation result comprehension



#### Job Search & Application

  * Search filter interaction (dropdowns, checkboxes)
  * Job listing card navigation
  * Job detail page reading order
  * Application form submission
  * Saved jobs management



#### Community & Mentorship

  * Forum post creation and reading
  * Mentor profile browsing
  * Booking a mentorship session
  * Chat/messaging interface
  * Notification centre navigation



B.3 — Keyboard Accessibility

Keyboard Navigation Map

Every feature on PhDSetu must be fully operable using only a keyboard. This map defines the keyboard interaction patterns for all major components.

Key / Combo | Action | Context  
---|---|---  
`Tab` | Move focus to next interactive element | Global  
`Shift + Tab` | Move focus to previous interactive element | Global  
`Enter / Space` | Activate buttons, links, toggles | Global  
`Escape` | Close modal, dropdown, or popover; cancel current action | Overlays, dropdowns  
`Arrow Keys ↑↓` | Navigate within dropdown menus, radio groups, tab panels | Composite widgets  
`Home / End` | Jump to first/last item in a list or menu | Lists, menus  
`Alt + S` | Skip to main content (custom shortcut) | Global  
`Alt + N` | Open notifications panel | Global (logged in)  
`/ (Slash)` | Focus search bar | Global (outside text inputs)  
  
🎯

#### Focus Management Rules

Focus indicator: 3px solid #2563eb outline with 2px offset (visible on all backgrounds). When modals open, focus moves to the first interactive element inside. When modals close, focus returns to the trigger element. After form submission errors, focus moves to the first field with an error. Tab order follows the visual reading order — never jumps across the page unexpectedly.

B.4 — Visual Design

Colour Contrast Requirements

Every colour combination used in PhDSetu's interface is tested against WCAG 2.1 AA contrast ratio requirements: ≥ 4.5:1 for normal text, ≥ 3:1 for large text and UI components.

### Approved Text Colour Combinations

#1E293B on #FFF

14.7:1 ✓

#64748B on #FFF

4.6:1 ✓

#1A1A2E on #F8FAFC

16.1:1 ✓

#FFF on #1A1A2E

16.1:1 ✓

### Approved Interactive Element Colours

#FFF on #E94560

4.6:1 ✓

#FFF on #2563EB

4.6:1 ✓

#FFF on #0F766E

5.0:1 ✓

#1E293B on #FCD34D

10.5:1 ✓

🚫

#### Rejected Colour Combinations (Do Not Use)

`#64748B on #E2E8F0` (2.4:1 — fails AA), `#FFF on #F0A500` (2.1:1 — fails AA), `#A3A3A3 on #FFF` (2.7:1 — fails AA). If gold/amber is needed for decorative or large text only, pair it with `#1E293B` text for the readable label.

B.5 & B.6 — Typography & Touch

Font Size Minimums & Touch Target Standards

Readable text and comfortably tappable targets are the foundation of an accessible interface — especially for scholars using mobile devices or who have motor impairments.

### Font Size Requirements

Element | Minimum Size | Line Height  
---|---|---  
Body text| 16px (1rem)| 1.5–1.7  
Secondary / caption text| 14px (0.875rem)| 1.5  
Small labels / badges| 12px (0.75rem)| 1.4  
Input fields| 16px (prevents iOS zoom)| 1.5  
Button text| 14px| 1.2  
Navigation links| 15px| 1.5  
  
🔍

All text must remain readable and functional when zoomed to 200% (browser zoom). Layout must reflow — no horizontal scrolling at any zoom level up to 400% at 320px viewport width.

### Touch Target Standards

Element | Minimum Size | Spacing  
---|---|---  
Buttons (primary/secondary)| 44 × 44px| 8px between  
Navigation links| 44 × 44px tap area| 8px between  
Checkboxes / radio buttons| 44 × 44px tap area| 12px between  
Icon buttons| 44 × 44px (includes padding)| 8px between  
List item actions (edit, delete)| 44 × 44px| 12px between  
Close / dismiss buttons| 44 × 44px| —  
  
📱

Visual size may be smaller for aesthetics, but the **tappable area** (including padding) must always meet the 44×44px minimum. Use CSS padding or pseudo-elements to extend hit areas without affecting visual design.

B.7 — Content Accessibility

Alt Text Guidelines

Every image, icon, chart, and visual element on PhDSetu must have appropriate alternative text — concise, descriptive, and contextually relevant.

#### Do: Effective Alt Text

  * **Profile photos:** "Profile photo of [Scholar Name]" — not "image" or "photo"
  * **Decorative icons with text:** `alt=""` (empty — the adjacent text conveys meaning)
  * **Functional icons without text:** Alt describes the action — "Search", "Close menu", "Download CV"
  * **Charts/graphs:** Alt summarises the insight — "Bar chart showing 60% of PhDs enter industry roles within 2 years"
  * **Complex infographics:** Brief alt + link to detailed text description (`aria-describedby`)
  * **Company logos:** "[Company Name] logo" — not "logo" or filename



#### Don't: Common Alt Text Mistakes

  * ❌ Starting with "Image of..." or "Picture of..." (screen readers already announce "image")
  * ❌ Using filenames as alt text (e.g., "IMG_20240315_143022.jpg")
  * ❌ Leaving alt attributes empty on meaningful images
  * ❌ Writing alt text longer than 125 characters (use `aria-describedby` for long descriptions)
  * ❌ Duplicating adjacent visible text in alt text
  * ❌ Using alt text for SEO keyword stuffing



B.8 — Motion Sensitivity

Reduced Motion Preferences

Some users experience vestibular disorders, motion sickness, or cognitive overload from animations. PhDSetu respects the `prefers-reduced-motion` media query system-wide.

### When Reduced Motion Is Active

  * All transitions reduced to instant (0ms duration) or very brief (≤ 100ms)
  * No parallax scrolling effects
  * No auto-playing animations or carousels
  * Loading spinners replaced with static "Loading..." text
  * Hover effects remain (colour changes, shadows) but without movement
  * Page transitions are instant cuts, not slides or fades



### Implementation

@media (prefers-reduced-motion: reduce) {  
  *, *::before, *::after {  
    animation-duration: 0.01ms !important;  
    animation-iteration-count: 1 !important;  
    transition-duration: 0.01ms !important;  
    scroll-behavior: auto !important;  
  }  
} 

Additionally, PhDSetu offers an in-app toggle (Settings → Accessibility → Reduce Motion) for users whose OS doesn't support the media query or who prefer per-app control.

B.9 — Multilingual Inclusion

Vernacular Accessibility

PhDSetu's mission to serve all Indian PhD scholars requires support for Indic scripts — particularly Devanagari (Hindi, Marathi, Sanskrit) and Telugu — with full screen reader compatibility.

🔤

### Devanagari Script Support

  * Font stack: Noto Sans Devanagari → Mangal → system fallback
  * Minimum font size: 18px for Devanagari body text (renders smaller than Latin at equal px)
  * Line height: ≥ 1.8 for Devanagari (matras and shirorekha need vertical space)
  * Screen reader testing: NVDA with eSpeak Hindi voice, JAWS with Vocalizer Hindi
  * Input: Support for Devanagari IME input in search and profile fields
  * lang="hi" attribute on all Hindi content blocks



🔤

### Telugu Script Support

  * Font stack: Noto Sans Telugu → Gautami → system fallback
  * Minimum font size: 18px (Telugu script has complex conjuncts)
  * Line height: ≥ 2.0 for Telugu (vowel marks extend above and below baseline)
  * Screen reader testing: NVDA with eSpeak Telugu, VoiceOver with Lekha voice
  * Input: Support for Telugu InScript and phonetic keyboard layouts
  * lang="te" attribute on all Telugu content blocks



### Phased Vernacular Rollout

**Phase 1 (Launch):** English-only with full accessibility. All UI text externalised for i18n readiness. **Phase 2 (Month 6):** Hindi interface with Devanagari support — onboarding flow, dashboard labels, help documentation. **Phase 3 (Month 12):** Telugu, Marathi, Tamil, and Bengali interfaces. Each language addition includes a screen reader testing cycle with native-speaking assistive technology users. Content remains in English with vernacular navigation chrome — not machine-translated content (which degrades accessibility, not improves it).

B.10 — User Testing

Testing Protocol with Assistive Technology Users

Automated tools catch ~30% of accessibility issues. The remaining 70% require real users with real assistive technologies navigating real tasks.

1

#### Recruit Diverse Testers

Recruit 8–12 participants representing different disability types and assistive technologies. Compensate testers ₹2,000–3,000 per session (90 minutes).

  * 2–3 blind users (screen readers: NVDA, JAWS, VoiceOver)
  * 2–3 low-vision users (screen magnification, high contrast)
  * 2–3 motor impairment users (keyboard-only, switch devices, voice control)
  * 1–2 cognitive/learning disability users (reading difficulties, ADHD)
  * 1–2 deaf/hard-of-hearing users (caption reliance)



2

#### Define Task Scenarios

Each tester completes 5 core tasks that mirror real PhDSetu usage. Tasks are presented verbally (not written) to avoid biasing the test toward sighted interaction patterns.

  * Task 1: Create an account and fill out your research profile
  * Task 2: Review your AI-generated career translation and provide feedback
  * Task 3: Search for jobs in your field and save one to favourites
  * Task 4: Find and book a session with a mentor
  * Task 5: Update your notification preferences in settings



3

#### Observe & Document

Sessions are recorded (with consent) and observed by a facilitator and a developer. Issues are categorised by severity and WCAG success criterion.

  * Critical: User cannot complete the task at all
  * Major: User completes with significant difficulty or workaround
  * Minor: Usable but suboptimal experience



4

#### Fix, Verify, Repeat

Critical issues fixed within 5 business days. Major issues within 15 business days. Re-test with the same participants to verify fixes. Testing runs before every major release and at minimum twice per year.

B.11 — Public Commitment

Accessibility Statement Template

PhDSetu publishes a living accessibility statement on its website, updated with every major release. This template follows the W3C recommended format.

### PhDSetu Accessibility Statement

**Commitment:** PhDSetu is committed to ensuring digital accessibility for all scholars, including those with disabilities. We continually improve the user experience for everyone and apply relevant accessibility standards.

  


**Standards:** PhDSetu aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. These guidelines define requirements for making web content more accessible to people with disabilities.

  


**Current Status:** [Updated with each audit] We have assessed our platform against WCAG 2.1 Level AA criteria. The following areas are fully conformant: [list]. The following areas are partially conformant: [list]. We are working to address these gaps by [date].

  


**Assistive Technology Compatibility:** PhDSetu is designed to be compatible with NVDA and JAWS screen readers on Windows, VoiceOver on macOS and iOS, and TalkBack on Android.

  


**Known Limitations:** [Honest disclosure of current gaps] Despite our efforts, some content may not yet be fully accessible. We are actively working on: [specific items with timeline].

  


**Feedback:** We welcome your feedback on the accessibility of PhDSetu. If you encounter barriers, please contact us: **accessibility@phdsetu.org**. We aim to respond within 3 business days and resolve reported issues within 15 business days.

  


**Last Updated:** [Date] | **Last Audit:** [Date] by [Auditor/Method]

B.12 — Ongoing Compliance

Continuous Compliance Monitoring Plan

Accessibility is not a one-time achievement — it requires continuous monitoring, testing, and improvement as the platform evolves.

### Automated Scanning

Runs on every deployment and nightly on production.

  * axe-core integrated into CI/CD pipeline
  * Lighthouse accessibility score tracked (target: ≥ 95)
  * Pa11y CI for regression testing on critical pages
  * WAVE browser extension for developer self-checks
  * Deployment blocked if Critical violations detected



### Manual Audits

Quarterly by internal team; annually by external experts.

  * Quarterly: Internal team tests 10 key pages with screen reader
  * Annually: Third-party WCAG audit by certified accessibility consultants
  * Annual audit report published on accessibility page
  * Remediation plan with SLAs for each finding
  * Budget: ₹2–4 lakh/year for external audits



### Community Feedback

Persistent, low-friction channels for reporting accessibility barriers.

  * Accessibility feedback widget on every page (keyboard-accessible)
  * Dedicated email: accessibility@phdsetu.org
  * Monthly review of all accessibility reports
  * SLA: 3-day response, 15-day resolution for Critical
  * Contributors acknowledged (with consent) in release notes



≥ 95

Lighthouse A11y Score

0

Critical Violations Target

3 days

Response SLA

2×/yr

User Testing Cycles

Part C

## Crisis Communication Plan

When things go wrong — data breaches, platform outages, community incidents, negative press — PhDSetu must respond with speed, transparency, and empathy. This plan ensures the team is never starting from zero in a crisis.

C.1 — Data Breach Response

Breach Response Protocol

A five-phase protocol from detection through post-mortem, aligned with the DPDP Act 2023 and global best practices. Every minute counts — the first 72 hours are defined down to the action level.

1

#### Phase 1: Detection (0–2 Hours)

Identify and confirm the breach. Automated monitoring systems (intrusion detection, anomaly alerts, data exfiltration monitors) trigger the initial alarm.

  * Automated alert triggers: Unusual data access patterns, bulk downloads, failed auth spikes, unauthorised API calls
  * On-call engineer confirms: Is this a true breach or a false positive?
  * Severity classification: P1 (active data exfiltration), P2 (unauthorised access confirmed), P3 (vulnerability discovered, no evidence of exploitation)
  * Activate Crisis Team within 30 minutes of confirmed P1/P2
  * Preserve forensic evidence: Snapshot logs, freeze affected systems



2

#### Phase 2: Assessment (2–12 Hours)

Determine the scope, impact, and root cause. This phase informs all subsequent communication and remediation decisions.

  * What data was accessed? (Personal data, thesis abstracts, career profiles, payment info)
  * How many Data Principals (scholars) are affected?
  * How was access gained? (Credential compromise, vulnerability exploitation, insider threat)
  * Is the breach contained, or is exfiltration ongoing?
  * Legal assessment: Does this trigger DPDP Act notification requirements?
  * Document findings in a confidential Incident Report



3

#### Phase 3: Notification (12–72 Hours)

Notify affected parties as required by law and by our own commitment to transparency. DPDP Act mandates notification to the Data Protection Board "without delay" — PhDSetu interprets this as within 72 hours of confirmation.

  * **Data Protection Board of India:** Formal notification within 72 hours (Form to be prescribed by DPB — use interim template below)
  * **Affected scholars:** Email notification within 72 hours — plain language, no legal jargon, specific about what was compromised
  * **If payment data involved:** Notify payment processor (Razorpay/Stripe) within 24 hours
  * **If institution data involved:** Notify partner institutions within 48 hours
  * **Board of Directors:** Brief within 24 hours of confirmed P1



4

#### Phase 4: Remediation (72 Hours – 30 Days)

Fix the vulnerability, strengthen defences, and support affected users.

  * Patch the vulnerability that enabled the breach
  * Force password resets for affected accounts
  * Revoke and reissue API keys and access tokens
  * Offer affected scholars: credit monitoring (if financial data), identity theft support, dedicated support line
  * Engage third-party forensics firm for independent investigation (P1 incidents)
  * Implement additional security controls to prevent recurrence



5

#### Phase 5: Post-Mortem (30–45 Days)

Conduct a blameless post-mortem. Publish a transparency report. Implement systemic improvements.

  * Root cause analysis document (internal, blameless)
  * Public transparency report: what happened, what was affected, what we did, what we changed
  * Update security policies and procedures based on lessons learned
  * Share anonymised findings with Indian cybersecurity community (CERT-In)
  * Board review of incident handling effectiveness
  * Schedule follow-up security audit within 60 days



C.2 — Regulatory Compliance

DPDP Act 2023 — Breach Notification Rules

The Digital Personal Data Protection Act, 2023 requires Data Fiduciaries (PhDSetu) to notify the Data Protection Board of India and affected Data Principals (scholars) in the event of a personal data breach.

### Notification to Data Protection Board

  * **Trigger:** Any breach involving personal data of Data Principals (scholars)
  * **Timeline:** "Without unreasonable delay" — PhDSetu policy: within 72 hours of breach confirmation
  * **Content:** Nature of breach, categories and approximate number of Data Principals affected, likely consequences, measures taken/proposed to mitigate
  * **Format:** As prescribed by the DPB (interim: written notification to DPB email with structured incident report)
  * **Responsible person:** Data Protection Officer or designated Grievance Officer
  * **Record retention:** Maintain breach register with all incidents and responses for 5 years



### Notification to Affected Scholars

  * **Trigger:** Same as DPB notification — PhDSetu notifies scholars in parallel
  * **Timeline:** Within 72 hours, via email and in-app notification
  * **Language:** Plain, non-technical language. Available in Hindi and English
  * **Content required:** What data was compromised, what we've done, what the scholar should do, who to contact
  * **Channel:** Email (primary), in-app banner (secondary), SMS for phone-number-compromised users
  * **Follow-up:** Status update within 7 days; final resolution notice within 30 days



⚖️

#### DPDP Act Penalties for Non-Compliance

Section 33 of the DPDP Act 2023 prescribes penalties up to ₹250 crore for significant data breaches with failure to implement adequate security safeguards, and up to ₹200 crore for failure to notify the Board and affected Data Principals. PhDSetu's breach response protocol is designed to ensure full compliance, but the founding team must treat these obligations as existential — not just regulatory checkboxes.

C.3 — Media Relations

Negative PR Handling Framework

A media response framework that balances speed with accuracy, and transparency with legal prudence.

📰

### Media Response Protocol

  * **Response window:** Acknowledge within 2 hours; substantive response within 24 hours
  * **Single point of contact:** All media inquiries route through the designated spokesperson
  * **Never:** "No comment" — always provide at minimum an acknowledgement and timeline for full response
  * **Fact-check:** Every statement reviewed by at least 2 team members before release
  * **Legal review:** Statements involving data breaches, user safety, or financial matters reviewed by legal counsel
  * **Tone:** Empathetic, factual, accountable — never defensive, dismissive, or blame-shifting



🎙️

### Spokesperson Guidelines

  * **Primary:** Founder/CEO (for mission-level crises, data breaches, major incidents)
  * **Secondary:** CTO (for technical incidents, platform outages, security questions)
  * **Never:** Individual engineers or junior team members speak to media without authorisation
  * **Bridge statements:** "We take this seriously. We are investigating. We will share our findings by [time]."
  * **Media training:** All spokespersons complete crisis media training annually
  * **Off-the-record:** Nothing is ever truly off-the-record — assume everything is quoted



C.4 — Service Continuity

Platform Downtime Communication

When PhDSetu is down — whether planned maintenance or unexpected outage — scholars, employers, and partners need to know what's happening, why, and when to expect resolution.

### Planned Maintenance

  * 72-hour advance notice via email + in-app banner
  * Maintenance window: 2:00–6:00 AM IST (minimum traffic)
  * Status page updated before, during, and after
  * Expected duration stated upfront
  * Completion confirmation email sent



### Unplanned Outage

  * Status page updated within 15 minutes of detection
  * Email to premium users within 30 minutes
  * Social media (X/Twitter) update within 30 minutes
  * Hourly updates until resolution
  * Post-incident report published within 48 hours



### Communication Channels

  * **Status page:** status.phdsetu.org (hosted externally — survives platform outage)
  * **Email:** Automated via transactional email service
  * **SMS:** For P1 incidents affecting premium/institutional users
  * **Social media:** X/Twitter, LinkedIn (real-time updates)
  * **In-app banner:** Post-recovery notice for 24 hours



Template — Outage Acknowledgement

"We are aware that PhDSetu is currently experiencing [service disruption / degraded performance]. Our engineering team is actively investigating and working to restore full service. We will provide updates every [30 minutes / 1 hour] on our status page at status.phdsetu.org. We apologise for the inconvenience and appreciate your patience."

C.5 — Community Safety

Community Crisis Management

PhDSetu's community features (forums, mentorship, messaging) create the risk of harmful content, scholar safety incidents, and mentor misconduct. Each category demands a distinct response.

### Scholar Safety Incidents

A scholar reports harassment, threats, stalking, or self-harm through the platform.

  * Immediate: Suspend the accused account pending investigation
  * Safety team contact: Respond within 1 hour during business hours
  * If physical danger indicated: Contact local law enforcement and provide the scholar with emergency helpline numbers
  * Confidential handling: Only the safety team has access to incident details
  * Resolution: Clear outcome communicated to the reporting scholar within 72 hours



### Mentor Misconduct

Reports of mentor abuse of power, inappropriate behaviour, false credentials, or commercial exploitation of scholars.

  * Immediate: Mentor profile hidden from public view
  * Investigation: Gather evidence from both parties within 5 days
  * Credential verification: Re-verify mentor's stated qualifications
  * Outcome: Permanent ban, warning, or reinstatement with monitoring
  * Scholar support: Free session with alternative verified mentor
  * If criminal: Assist scholar with formal complaint filing



### Harmful Content

Misinformation, hate speech, spam, or plagiarised content posted in community spaces.

  * Automated: Content moderation flags based on keyword and pattern analysis
  * Human review: Flagged content reviewed within 4 hours
  * Removal: Violating content removed; author notified with reason and appeal process
  * Repeat offenders: Progressive discipline (warning → 7-day suspension → permanent ban)
  * Transparency: Monthly moderation report (volume, categories, actions)



C.6 — Digital Response

Social Media Crisis Playbook

Social media crises move faster than any other type. A negative thread on X/Twitter can trend within hours. This playbook defines the escalation and response framework.

### Severity Levels

Level | Definition | Response Time  
---|---|---  
Level 1 | Individual complaint (1–5 posts, low engagement) | Respond within 2 hours  
Level 2 | Growing thread (10+ posts, moderate engagement, emerging narrative) | Respond within 1 hour; escalate to spokesperson  
Level 3 | Viral crisis (100+ posts, media pickup, trending hashtag) | Respond within 30 minutes; CEO engaged  
  
### Response Principles

  * **Acknowledge fast:** "We see this. We're looking into it." — buys time without committing to unverified facts
  * **Move to DM:** For individual complaints, move the conversation to private messages after public acknowledgement
  * **Never delete:** Deleting public criticism makes it worse. Respond, don't suppress
  * **Screenshots:** Archive the original complaint and thread — social media posts can be edited or deleted by the poster
  * **Thread replies:** For complex issues, post a threaded response (not a single tweet) with numbered steps
  * **Empathy first:** Lead with understanding, not defence. "We understand this is frustrating" before "Here's what happened"
  * **Follow up publicly:** When the issue is resolved, post the resolution publicly — don't let the complaint thread be the last word



C.7 — Stakeholder Management

Stakeholder Communication Matrix

Different crises require notifying different stakeholders at different times through different channels. This matrix eliminates guesswork during a crisis.

Crisis Type | Scholars | Employers | Institutions | Media | Board/Investors | Regulators  
---|---|---|---|---|---|---  
**Data Breach (P1)** | 72h — Email + SMS | 72h — Email | 48h — Email + Call | Reactive — Prepared statement | 24h — Call + Email | 72h — DPB notification  
**Platform Outage** | 15min — Status page | 30min — Email | If > 4h — Email | Only if > 24h | If > 4h — Brief | Not required  
**Scholar Safety Incident** | 1h — Direct to individual | Only if employer involved | If student involved — 24h | Only if public | 24h — Email brief | If criminal — Police  
**Mentor Misconduct** | 4h — To affected scholar | Not required | If mentor is affiliated — 48h | Only if public | Weekly brief | If criminal — Police  
**Negative PR / Viral Social** | If directly affected | If directly affected | If directly affected | 30min — Statement | Same day — Brief | Not required  
**AI Ethics Incident** | 24h — Email + In-app | 48h — Email | 48h — Email | Reactive — Prepared statement | 24h — Call | If data-related — DPB  
  
C.8 — Team Structure

Crisis Team Roles & Responsibilities

When a crisis hits, role ambiguity wastes critical time. Every team member knows their role before the crisis happens.

### Crisis Commander

**Who:** CEO / Founder

  * Declares crisis level (P1/P2/P3) and activates the team
  * Makes final decisions on communications and remediation
  * Serves as primary spokesperson for P1 incidents
  * Approves all external communications before release
  * Leads post-mortem review



### Technical Lead

**Who:** CTO / Lead Engineer

  * Leads technical investigation and root cause analysis
  * Coordinates containment and remediation
  * Provides technical briefings to Crisis Commander
  * Serves as secondary spokesperson for technical questions
  * Manages engineering team response



### Communications Lead

**Who:** Head of Community / Marketing

  * Drafts all external communications (email, social, press)
  * Monitors social media sentiment and reports
  * Manages media inquiries and press responses
  * Coordinates stakeholder notifications per the matrix
  * Maintains crisis communication log



### User Support Lead

**Who:** Head of Scholar Success

  * Manages increased support volume during crisis
  * Provides scripted responses for support team
  * Escalates unique or sensitive user issues to Crisis Commander
  * Tracks user impact metrics (tickets, complaints, churn)
  * Coordinates scholar-specific remediation (password resets, data recovery)



📞

#### Crisis War Room Activation

For P1 incidents: All crisis team members join a dedicated Slack/Teams channel and a continuous video call within 30 minutes of activation. War room runs 24/7 until the incident is resolved or downgraded. For P2: War room runs during business hours with on-call outside hours. For P3: Asynchronous coordination via Slack channel with daily sync meetings.

C.9 — Prepared Responses

Pre-Drafted Holding Statements

In a crisis, drafting from scratch wastes precious hours. These templates are starting points — to be customised with specifics before release, never sent verbatim without review.

Scenario: Data Breach

"We have identified a security incident that may have affected the personal data of some PhDSetu scholars. We take the security of your information extremely seriously. Upon discovery, we immediately took steps to contain the incident, began a thorough investigation, and engaged cybersecurity experts to assist. We are notifying all potentially affected scholars directly. If your data was impacted, you will receive a personal notification with specific details and recommended protective steps. We have also notified the Data Protection Board of India as required by law. We are committed to full transparency and will share a complete report once our investigation is concluded. For questions, please contact security@phdsetu.org."

Scenario: Extended Platform Outage

"PhDSetu is currently experiencing a service disruption that is affecting [specific features]. Our engineering team identified the issue at [time] and has been working continuously to restore service. We understand that many scholars depend on PhDSetu for job applications and mentorship sessions, and we sincerely apologise for the inconvenience. Current estimated restoration: [time]. We are posting real-time updates at status.phdsetu.org. If you have an urgent job application deadline, please contact support@phdsetu.org and we will assist you directly."

Scenario: AI Translation Error (Systematic)

"We have identified an issue with our AI Career Translator that affected translations generated between [date] and [date]. Some profiles may contain inaccuracies in [specific area]. We have paused the AI translation service while we investigate and correct the issue. All affected profiles are being flagged for re-translation, and affected scholars will receive updated translations within [timeline]. We remind all scholars that AI translations are suggestions — your career profile should always be reviewed and personalised by you. We apologise for this error and are implementing additional quality controls to prevent recurrence."

Scenario: Scholar Safety Incident (Public)

"We are aware of reports regarding a safety incident involving a member of the PhDSetu community. The safety of our scholars is our highest priority. We are actively investigating this matter and are cooperating with relevant authorities. To protect the privacy and safety of the individuals involved, we cannot share details of the ongoing investigation. We have taken immediate protective action, including [general action — e.g., suspending the involved account]. If any scholar feels unsafe, please reach out to our safety team at safety@phdsetu.org or call our helpline at [number]."

Scenario: Negative Media Coverage

"We are aware of recent media reports regarding [topic]. We welcome scrutiny — accountability is essential for a platform that serves India's research community. [If accurate:] We acknowledge [specific issue] and have already taken steps to address it, including [actions]. [If inaccurate:] The reports contain factual inaccuracies. The facts are [brief correction]. We have reached out to the publication to provide accurate information. We are happy to provide [journalist/outlet] with additional context and documentation. Please direct media inquiries to press@phdsetu.org."

C.10 — Learning & Improvement

Post-Crisis Review & Improvement Process

Every crisis is a failure and a learning opportunity. The post-crisis review process ensures that PhDSetu gets better with every incident — and never makes the same mistake twice.

1

#### Blameless Post-Mortem (Day 7–14)

All crisis team members participate. The post-mortem focuses on systems and processes — not individuals. Key questions:

  * What happened? (Timeline reconstruction, minute by minute)
  * Why did it happen? (Root cause, contributing factors)
  * How did we detect it? (Was detection fast enough? What would improve it?)
  * How did we respond? (What worked? What was slow or confused?)
  * What would we do differently? (Concrete, actionable changes)



2

#### Action Items & Owners (Day 14–21)

Every post-mortem produces a list of specific, assignable, time-bound action items. These are tracked in the project management system alongside regular work — not in a separate "crisis" silo that gets forgotten.

  * Each action item has: an owner, a deadline, a definition of done
  * Action items are reviewed in weekly team meetings until completed
  * Completion is verified, not just checked off



3

#### Transparency Report (Day 21–30)

For P1 incidents, PhDSetu publishes a public transparency report on its blog. This demonstrates accountability and builds trust.

  * What happened (factual, non-technical summary)
  * Who was affected and how
  * What we did to resolve it
  * What we changed to prevent recurrence
  * How scholars can reach us with continued concerns



4

#### Crisis Plan Update (Day 30–45)

The crisis communication plan itself is updated based on lessons learned. Holding statements are refined. The stakeholder matrix is adjusted. War room procedures are improved. The updated plan is shared with the entire team and a tabletop drill is scheduled within 90 days.

### Annual Crisis Preparedness

PhDSetu conducts two tabletop crisis simulations per year — one for a data breach scenario and one for a community safety scenario. The full crisis team participates. Simulations are timed and evaluated. Gaps identified during simulations are treated as P2 action items. Preparedness is not about having a plan — it's about having practiced the plan.

### PhDSetu — Document 17

AI Ethics & Accuracy Framework · Accessibility Audit & Plan · Crisis Communication Plan

Part of the PhDSetu Governance & Compliance Suite · Confidential

Last updated: June 2026 · Review cycle: Quarterly · Next review: September 2026
