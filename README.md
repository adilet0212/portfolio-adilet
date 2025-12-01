# Adilet Masalbekov – Portfolio

My personal portfolio website which showcases my experience, projects, skills, and other information.

Live site: **https://adiletmasalbekov.vercel.app**

---

## 🌌 Features

- **Hero / Landing page**
  - Short intro, role summary, and primary CTAs (view projects, download resume).

- **About page**
  - Human, story-style overview of my background.
  - Education card with key courses from the Software Engineering Technology – AI program at Centennial College.
  - Skills grouped into categories (Programming, AI & Data, Databases, QA, Cloud & DevOps, Tools).

- **Experience page**
  - Timeline-style cards for professional & volunteer roles.
  - Focus on QA automation, AI tools, and IT service desk experience.

- **Projects page**
  - Highlighted projects with individual detail pages (`/projects/[slug]`).
  - Each project includes problem, tech stack, contributions, and outcomes.

- **Resume page**
  - Embedded / downloadable PDF resume for quick access by hiring managers.

- **Contact page**
  - Contact form with validation and email delivery via Resend.
  - Fallback “email me directly” link.

- **Global design**
  - Space-themed background with glassmorphism cards.
  - Dark mode only for a consistent visual identity.
  - Custom favicon and Open Graph image for nice previews when sharing links.

---

## 🛠 Tech Stack

- **Frontend**
  - [Next.js 16](https://nextjs.org/) (App Router, TypeScript)
  - React
  - Tailwind CSS
  - daisyUI (for some base components / styles)

- **Email / Contact**
  - [Resend](https://resend.com/) for sending contact form submissions

- **Analytics**
  - [Plausible](https://plausible.io/) (optional, via script in `RootLayout`)

- **Deployment**
  - [Vercel](https://vercel.com/)

---

## 📁 Project Structure (simplified)

```text
public/
  android-chrome-192x192.png
  android-chrome-512x512.png
  apple-touch-icon.png
  favicon-16x16.png
  favicon-32x32.png
  favicon.ico
  og.png
  /icons      # skill icons
  /images     # avatar, backgrounds, etc.
  /resume     # resume PDF

src/
  app/
    layout.tsx           # Root layout, metadata, favicon, background, header
    page.tsx             # Landing page
    about/page.tsx       # About page
    experience/page.tsx  # Experience timeline
    projects/page.tsx    # Projects listing
    projects/[slug]/page.tsx  # Project details
    resume/page.tsx      # Resume page
    contact/page.tsx     # Contact page
    api/contact/route.ts # Contact form API (Resend)

  components/
    Header.tsx
    SpaceETHBackground.tsx
    SectionHeading.tsx
    IconPill.tsx
    ContactForm.tsx
    ...other UI components


  globals.css            # Tailwind + global styles

