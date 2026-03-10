# 💍 Luxury Resort & Wedding Venue — Web Application

A fully responsive luxury wedding venue landing page built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Supabase**.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [Features](#features)
- [Components](#components)
- [Fonts](#fonts)
- [Responsive Design](#responsive-design)
- [Deployment](#deployment)

---

## 🌟 Overview

This is a luxury resort and wedding venue landing page developed as part of a test task. The application includes a fully functional booking system, interactive UI components, and database integration via Supabase.

**Live Features:**
- Pixel-perfect implementation from Figma design
- Booking modal with form validation
- Supabase database integration for form submissions
- Fully responsive across desktop, tablet, and mobile
- Smooth animations and transitions throughout

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 15+ | React framework with App Router |
| TypeScript | 5+ | Type safety throughout |
| Tailwind CSS | 4+ | Utility-first styling |
| Supabase | Latest | PostgreSQL database + API |
| Lucide React | 0.383.0 | Icon library |
| Google Fonts | — | Playfair Display + Poppins |

---

## 📁 Project Structure

```
wedding-app/
├── app/
│   ├── actions/
│   │   └── submitBooking.ts       # Server action for form submission
│   ├── globals.css                # Global styles + CSS variables
│   ├── layout.tsx                 # Root layout with fonts
│   └── page.tsx                   # Home page — assembles all sections
│
├── components/
│   ├── sections/                  # Full page sections
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── HistorySection.tsx
│   │   ├── VisionsSection.tsx
│   │   ├── PackagesSection.tsx
│   │   ├── PricingAccordion.tsx
│   │   ├── VenueCarousel.tsx
│   │   ├── VenueShowcase.tsx
│   │   ├── CateringSection.tsx
│   │   ├── DreamSection.tsx
│   │   ├── MemoriesSection.tsx
│   │   ├── QuoteSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── ContactFormSection.tsx
│   │   ├── LocationSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   │
│   └── ui/                        # Reusable UI components
│       └── BookingModal.tsx
│
├── lib/
│   └── supabase.ts                # Supabase client configuration
│
├── types/
│   └── index.ts                   # TypeScript type definitions
│
├── public/
│   └── images/                    # Static images and assets
│
├── .env.local                     # Environment variables (not committed)
├── next.config.ts                 # Next.js configuration
├── tailwind.config.ts             # Tailwind configuration
└── tsconfig.json                  # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** v18 or higher
- **npm** v9 or higher
- **Git**

### Installation

**1. Clone the repository:**
```bash
git clone https://github.com/yourusername/wedding-app.git
cd wedding-app
```

**2. Install dependencies:**
```bash
npm install
```

**3. Set up environment variables:**
```bash
# Create .env.local file in the root
cp .env.example .env.local
# Then fill in your Supabase credentials
```

**4. Run the development server:**
```bash
npm run dev
```

**5. Open in browser:**
```
http://localhost:3000
```

---

## 🔐 Environment Variables

Create a `.env.local` file in the root of your project:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

> ⚠️ Never commit `.env.local` to version control. It is already listed in `.gitignore`.

---

## 🗄 Database Setup

This project uses **Supabase (PostgreSQL)** for storing booking submissions.

### Create the Bookings Table

Run this SQL in your Supabase SQL Editor:

```sql
-- Create bookings table
create table bookings (
  id uuid default gen_random_uuid() primary key,
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  event_date date not null,
  guest_count integer not null,
  package_type text not null check (package_type in ('Basic', 'Premium', 'Luxury')),
  message text,
  status text default 'pending' check (status in ('pending', 'confirmed', 'cancelled')),
  created_at timestamp with time zone default timezone('utc', now())
);

-- Enable Row Level Security
alter table bookings enable row level security;

-- Allow anyone to submit a booking
create policy "Anyone can submit a booking"
  on bookings for insert
  with check (true);

-- Only authenticated users can view bookings
create policy "Only admins can view bookings"
  on bookings for select
  using (auth.role() = 'authenticated');
```

### Bookings Table Schema

| Column | Type | Description |
|---|---|---|
| `id` | UUID | Auto-generated primary key |
| `first_name` | text | Guest's first name |
| `last_name` | text | Guest's last name |
| `email` | text | Contact email |
| `phone` | text | Contact phone number |
| `event_date` | date | Requested wedding date |
| `guest_count` | integer | Number of expected guests |
| `package_type` | text | Basic / Premium / Luxury |
| `message` | text | Additional notes (optional) |
| `status` | text | pending / confirmed / cancelled |
| `created_at` | timestamp | Auto-generated submission time |

---

## ✨ Features

### 🎯 Core Features
- **Pixel-perfect Figma implementation** — every section matches the approved design
- **Fully responsive** — optimized for desktop, tablet, and mobile
- **Booking modal** — triggered from pricing cards with full form validation
- **Supabase integration** — form submissions stored securely in PostgreSQL
- **Server Actions** — form data sent via Next.js server actions (never exposed to browser)
- **Smooth animations** — hover effects, transitions, and accordion animations

### 📱 Interactive Components
- **Navbar** — sticky with mobile hamburger menu
- **Venue Carousel** — image slider with arrow navigation, slide counter, and dot indicators
- **Pricing Accordion** — expandable pricing rows with price display
- **FAQ Accordion** — expandable questions inside a bordered container
- **Booking Modal** — popup form with validation triggered from pricing cards
- **Contact Modal** — popup form triggered from "Schedule a Tour" button
- **Google Maps** — embedded map in Location section with "Get Directions" link

### 🔒 Form Validation
All forms include:
- Required field validation
- Email format validation
- Real-time error clearing on input
- Loading state during submission
- Success state after submission

---

## 🧩 Components

### Sections (in page order)

| Component | Description |
|---|---|
| `Navbar` | Sticky top navigation with mobile menu |
| `HeroSection` | Full viewport hero with couple image + green panel |
| `HistorySection` | "A History of Romance" — text + gazebo image |
| `VisionsSection` | "Nourishing Visions" — ballroom image + text |
| `PackagesSection` | 3 pricing cards with booking modal buttons |
| `PricingAccordion` | Expandable pricing list with image |
| `VenueCarousel` | Full-width image slider with navigation |
| `VenueShowcase` | Two venue images with white label overlays |
| `CateringSection` | Food image + cuisine details |
| `DreamSection` | Staging text + table setting image |
| `MemoriesSection` | 4-photo memory grid |
| `QuoteSection` | Dark green testimonial quote |
| `FAQSection` | Bordered accordion FAQ list |
| `ContactFormSection` | Full booking form with textarea |
| `LocationSection` | Google Maps embed + contact details |
| `ContactSection` | CTA with 3 contact items + modal trigger |
| `Footer` | 4-column dark green footer |

### UI Components

| Component | Description |
|---|---|
| `BookingModal` | Reusable booking form modal with validation |

---

## 🔤 Fonts

Two Google Fonts are used, loaded via `next/font/google` for optimal performance:

| Font | Usage | Tailwind Class |
|---|---|---|
| **Playfair Display** | All headings (h1, h2, h3) | `font-playfair` |
| **Poppins** | Body text, labels, buttons | `font-poppins` |

Fonts are self-hosted by Next.js at build time — no external requests, no layout shift.

---

## 📐 Responsive Design

Breakpoints follow Tailwind CSS defaults:

| Breakpoint | Screen Size | Layout |
|---|---|---|
| Default | < 768px (mobile) | Single column, stacked |
| `md:` | ≥ 768px (tablet) | Two columns |
| `lg:` | ≥ 1024px (desktop) | Full multi-column layout |

Key responsive patterns used:
```
flex-col md:flex-row    → stacks on mobile, side by side on desktop
grid-cols-1 md:grid-cols-3  → single column to 3 columns
hidden md:flex          → hide on mobile, show on desktop
order-2 md:order-1      → reorder elements between mobile/desktop
```

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

**1. Push to GitHub:**
```bash
git add .
git commit -m "initial commit"
git push origin main
```

**2. Connect to Vercel:**
- Go to [vercel.com](https://vercel.com)
- Click "New Project"
- Import your GitHub repository
- Click "Deploy"

**3. Add Environment Variables in Vercel:**
- Go to Project Settings → Environment Variables
- Add `NEXT_PUBLIC_SUPABASE_URL`
- Add `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Redeploy

### Build for Production Locally
```bash
npm run build
npm start
```

---

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## 🎨 Color Palette

| Color | Hex | Usage |
|---|---|---|
| Primary Green | `#2D5741` | Buttons, icons, accents |
| Light Green | `#4a7c59` | Hover states |
| Gold Accent | `#c9a96e` | Decorative dividers |
| Cream | `#F5F1E8` | Section backgrounds |
| Dark Text | `#0A0A0A` | Headings |
| Muted Text | `#6b6b6b` | Body paragraphs |

---

## 👨‍💻 Author

Built as part of a frontend development test task.

---

## 📄 License

This project is for assessment purposes only.