WISDOM DIGITAL — MULTI-PAGE NAVIGATION REFACTOR

Refactor the current Wisdom Digital React portfolio from an overly long single-page scrolling experience into a clean, professional multi-page website.

IMPORTANT:
Do NOT redesign the entire website from scratch.
Do NOT change the approved branding, pricing, services, copy, visual identity, or business positioning unless absolutely necessary.
The goal of this task is to improve INFORMATION ARCHITECTURE and NAVIGATION.

==================================================

1. # CORE OBJECTIVE

The current website contains too many sections and encourages endless scrolling.

Convert the important sections into dedicated React routes/pages so visitors can navigate directly to the information they want.

The website should feel like a professional freelance web-development business website, NOT an endless landing page.

Use React Router if it is not already implemented.

================================================== 2. TARGET ROUTE STRUCTURE
==================================================

Create the following routes:

/
Home

/services
Services

/work
Portfolio / Our Work

/pricing
Pricing

/process
How It Works

/care
Website Care Plans

/about
About Wisdom Digital

/faq
Frequently Asked Questions

/contact
Contact / Start a Project

================================================== 3. HOMEPAGE
==================================================

The homepage should NOT contain every section from the existing website.

Keep the homepage focused on conversion and introduce the business quickly.

Recommended homepage structure:

1. Navbar
2. Hero
3. Short problem/value section
4. Short services overview
5. Selected work / featured projects
6. Short pricing preview
7. Short process preview
8. Final CTA
9. Footer

Do NOT place the full pricing tables, full FAQ, full care plans, full About section, and every service description on the homepage.

Each of those should link to its dedicated page.

The homepage should be relatively concise.

================================================== 4. NAVBAR
==================================================

Use a clean navigation:

Home
Services
Work
Pricing
Process
Care Plans
About
FAQ

Primary CTA:

Start a Project

The navigation links should use React Router routes rather than hash anchors.

BAD:

/#services
/#pricing
/#contact

GOOD:

/services
/pricing
/contact

Do not use href="#section" for primary navigation.

================================================== 5. SERVICES PAGE
==================================================

Move the detailed service information here.

Display:

Starter Website
Business Website
Premium Website
Custom Web Solution

Each service should have:

- Name
- Target customer
- Description
- Features
- Starting price
- CTA

The CTA should link to:

/contact

Do not create unnecessary cards simply to fill space.

Use a varied, editorial layout rather than turning every piece of information into a card.

================================================== 6. WORK PAGE
==================================================

Create a dedicated portfolio page.

Show Wisdom Digital's demonstration and client projects.

Each project should have:

- Large visual preview
- Project name
- Business category
- Short description
- Problem solved
- Key features
- View Project CTA

Demo projects must be clearly labelled as:

"Concept Project"
or
"Demo Website"

Do not present fictional businesses as real clients.

For future real clients, allow individual project pages such as:

/work/chicken-town

Do NOT put every project into an enormous homepage carousel.

================================================== 7. PRICING PAGE
==================================================

Move the complete pricing information here.

Packages:

Starter
$200–$300
NLe 4,560–6,840

Business
$350–$450
NLe 7,980–10,260

Premium
$500–$700
NLe 11,400–15,960

Custom
$800–$1,000+
NLe 18,240–22,800+

Domain:

From $15/year

Clearly explain that domain registration is separate from website development.

Include a CTA:

"Start a Project"

================================================== 8. PROCESS PAGE
==================================================

Create a dedicated page explaining:

01 — Tell Us About Your Business
02 — Consultation
03 — Proposal
04 — We Build
05 — Review
06 — Launch

Keep the page visually engaging but concise.

End with:

"Ready to get started?"

CTA:

Start a Project

================================================== 9. CARE PLANS PAGE
==================================================

Move the detailed Website Care plans here.

Essential Care
$20/month
NLe 456/month

Business Care
$35/month
NLe 798/month

Premium Care
$50/month
NLe 1,140/month

Custom Care
From $100+/month
From NLe 2,280+/month

Clearly state:

"Website Care is optional. You can receive your completed website without subscribing to a monthly care plan."

================================================== 10. ABOUT PAGE
==================================================

Move the detailed Wisdom Digital introduction here.

Explain:

- What Wisdom Digital is
- Who it serves
- What it believes
- The type of work it does
- Founder information

Keep this focused on Wisdom Digital as a freelance business.

Do NOT turn this into a software-engineering résumé.

Do NOT add:

- GitHub statistics
- Coding skills lists
- Algorithm experience
- WeatherNow
- TaskFlow
- Developer résumé content

Those belong to the separate software-engineering portfolio.

================================================== 11. FAQ PAGE
==================================================

Move the complete FAQ here.

Use an accordion interface.

Questions should include:

- How much does a website cost?
- How long does a website take?
- Do I need a domain?
- Can customers contact my business through WhatsApp?
- Can you add my products or menu?
- Can customers book appointments?
- Do I have to pay monthly?
- What happens after my website is finished?
- Can you update my website after launch?
- Do you work with businesses outside Sierra Leone?

Do not display all answers permanently if an accordion provides a cleaner experience.

================================================== 12. CONTACT PAGE
==================================================

Create a dedicated contact / project enquiry page.

Heading:

"Let's Talk About Your Business."

Include:

Full Name
Business Name
Phone / WhatsApp
Email
Business Type
Website Package
Estimated Budget
Project Description

Primary button:

"Send Enquiry"

Also provide:

"Chat on WhatsApp"

The contact page should be extremely easy to find.

================================================== 13. FOOTER
==================================================

Create a consistent footer across every page.

Include:

Wisdom Digital
Short business description

Company:
About
Work
Process
FAQ

Services:
Starter
Business
Premium
Custom

Contact:
WhatsApp
Email
Start a Project

Copyright:

© 2026 Wisdom Digital. All rights reserved.

================================================== 14. INTERNAL LINKING
==================================================

Every page should naturally direct visitors to the next relevant action.

Examples:

Services → Pricing
Services → Contact
Work → Contact
Pricing → Contact
Process → Contact
Care Plans → Contact
About → Contact
FAQ → Contact

Do not make users scroll through the entire website to find the next action.

Use normal React Router navigation.

================================================== 15. RESPONSIVE NAVIGATION
==================================================

Desktop:

Logo | Home | Services | Work | Pricing | Process | Care Plans | About | FAQ | Start a Project

Mobile:

Logo | Menu

The mobile menu should contain all major routes.

The navigation must remain usable on phones.

================================================== 16. URL REQUIREMENTS
==================================================

Use clean URLs:

/services
/work
/pricing
/process
/care
/about
/faq
/contact

Do NOT create URLs such as:

/#services
/#pricing
/#work

These should be actual routes.

================================================== 17. SEO
==================================================

Each route should have an appropriate:

<title>
<meta name="description">
canonical URL

Examples:

Home:
Wisdom Digital | Professional Websites for Growing Businesses

Services:
Website Design & Development Services | Wisdom Digital

Work:
Our Work | Wisdom Digital

Pricing:
Website Pricing | Wisdom Digital

Contact:
Start a Project | Wisdom Digital

Ensure sitemap.xml contains the actual indexable routes rather than hash fragments.

Example:

https://wisdomdigital.dev/
https://wisdomdigital.dev/services
https://wisdomdigital.dev/work
https://wisdomdigital.dev/pricing
https://wisdomdigital.dev/process
https://wisdomdigital.dev/care
https://wisdomdigital.dev/about
https://wisdomdigital.dev/faq
https://wisdomdigital.dev/contact

================================================== 18. DESIGN PRINCIPLE
==================================================

The goal is NOT to create more pages just for the sake of having pages.

The goal is:

FEWER SECTIONS PER PAGE

- CLEAR NAVIGATION
- BETTER INFORMATION HIERARCHY
- FASTER ACCESS TO IMPORTANT INFORMATION
- LESS ENDLESS SCROLLING

Each page should feel intentional.

Do not fill pages with unnecessary cards.

Use:

- Large visual sections
- Editorial layouts
- White space
- Typography
- Project imagery
- Simple feature lists
- Occasional cards where they genuinely improve organization

Avoid making every piece of content a card.

================================================== 19. DO NOT BREAK EXISTING FUNCTIONALITY
==================================================

Before modifying the application:

1. Inspect the current project structure.
2. Identify the existing components.
3. Reuse existing components where appropriate.
4. Preserve the current visual identity.
5. Preserve responsive behavior.
6. Preserve existing forms and interactions.
7. Preserve existing project links.
8. Do not delete useful components without a reason.

Refactor incrementally.

================================================== 20. FINAL QUALITY CHECK
==================================================

After implementation, verify:

- Every navbar link works.
- Every CTA works.
- Browser back/forward navigation works.
- Directly visiting each route works.
- Mobile navigation works.
- No broken links exist.
- No unnecessary hash navigation remains.
- No excessive homepage scrolling remains.
- Pricing remains accurate.
- USD and NLe prices remain accurate.
- Demo projects are clearly identified.
- Contact CTA is easily accessible.
- Sitemap reflects the new route structure.
- robots.txt references the sitemap.
- Each page has appropriate SEO metadata.

Most importantly:

Wisdom Digital should feel like a professional freelance web-development business that is easy for a business owner to understand and hire—not like a developer portfolio or an endlessly scrolling AI-generated landing page.
