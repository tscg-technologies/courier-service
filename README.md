# Courier & Parcel Delivery Services — Portfolio Website

A premium, modern, visually impressive, and fully responsive **Courier Service & Parcel Delivery** demonstration website developed for the **TSCG Technologies** portfolio.

> **Demonstration Notice:** This website is a frontend portfolio demonstration showcasing courier operational flows, shipment tracking simulation, and commercial parcel solutions. It is not a live courier company. No real bookings, AWB tracking numbers, pricing quotes, or parcel dispatches are generated or stored.

---

## 🚀 Key Features

1. **6 Cohesive Website Pages**:
   - `index.html`: Cinematic hero, quick action strip, 8 service cards, animated 6-stage delivery workflow, who we serve panels, interactive shipment tracking demo, feature principles, featured demo projects, and CTA.
   - `about.html`: Overview of courier logistics, 4-step approach, package classification categories, delivery operations workflow, and operational team profiles.
   - `services.html`: Dedicated deep dives into Same-Day, Express, Standard, Document, Domestic, E-commerce, Business Courier, Reverse Pickup, and Special Handling, plus an interactive FAQ accordion.
   - `business-solutions.html`: Commercial logistics solutions for e-commerce, retail, corporate, and startups, interactive Business Shipping Dashboard mockup, and a bulk courier enquiry form with client-side validation.
   - `tracking-projects.html`: Interactive tracking simulator (supporting sample reference `DEMO123456`), 8 illustrative demo projects with dynamic category filters and a detailed modal viewer, plus an interactive 5-node delivery network topology visualizer.
   - `contact.html`: Multi-section pickup booking form (Sender, Receiver, Parcel Dimensions, Delivery Preferences) with client-side validation, loading states, demo booking receipt modal, and demonstration contact details.

2. **Technology Restrictions Followed**:
   - **HTML5, CSS3, and Vanilla JavaScript only**.
   - Zero external libraries or frameworks (no React, Vue, Bootstrap, Tailwind, jQuery, GSAP, or Three.js).
   - Zero backend dependencies (no PHP, MySQL, or Node.js runtime required).
   - Static hosting ready (Hostinger, GitHub Pages, Netlify, Cloudflare Pages, Vercel).

3. **Design & Brand Identity**:
   - Modern color palette: Midnight Navy (`#101C2C`), Deep Charcoal (`#172536`), Courier Blue (`#286BD6`), Electric Cyan (`#35C6E6`), Delivery Orange (`#FF8C42`), and Light Grey (`#F2F5F8`).
   - Original abstract geometric parcel-route vector logo symbol.
   - Sticky header with backdrop blur and auto-scroll styling.
   - Mobile responsive navigation drawer and sticky mobile pickup CTA bar.
   - Full suite of high-resolution photorealistic imagery across all 30 delivery scenes and operational workflows.

---

## 📁 Project Structure

```text
courier-service/
├── index.html                  # Homepage with Tracking Demo & 6-Stage Workflow
├── about.html                  # About, Operations & Handling Standards
├── services.html               # 9 Service Deep-Dives & FAQ Accordion
├── business-solutions.html     # Commercial Solutions, Dashboard & Bulk Form
├── tracking-projects.html      # Tracking Simulator, Projects Gallery & Network Visual
├── contact.html                # 4-Section Pickup Booking Form & Dummy Info
├── images/                     # 30 high-resolution photorealistic images (.jpeg/.jpg)
├── assets/
│   ├── css/
│   │   └── style.css           # Pure custom CSS, variables, and responsive queries
│   ├── js/
│   │   └── main.js             # Vanilla JS: Tracking, Modals, Filters, & Forms
│   ├── images/
│   │   └── placeholders/       # Original SVG aspect-ratio placeholders
│   └── icons/                  # Vector icons & branding graphics
├── IMAGE-GENERATION-GUIDE.md   # Complete Google Flow prompts for all 30 images
└── README.md                   # Project overview and deployment guide
```

---

## 💻 Local Preview Instructions

You can run this website directly without building or compiling:

### Option 1: Direct File Open
Double-click `index.html` or open it with any modern web browser (Chrome, Edge, Firefox, Safari).

### Option 2: Python Local HTTP Server
In your terminal, navigate to this project folder and run:
```bash
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

### Option 3: VS Code Live Server
Right-click `index.html` in VS Code and select **Open with Live Server**.

---

## 🌐 Hostinger Static Hosting Deployment

This website is 100% static and requires no server-side compilation or database configuration.

1. **Log in to Hostinger hPanel**:
   - Navigate to **Websites** and select your domain or hosting plan.
2. **Access the File Manager**:
   - Go to **Files** &rarr; **File Manager** (`public_html`).
3. **Upload Files**:
   - Upload all files and folders maintaining the exact hierarchy:
     - `index.html`, `about.html`, `services.html`, `business-solutions.html`, `tracking-projects.html`, `contact.html` directly in `public_html`.
     - The `images/` folder containing the 30 high-resolution images.
     - The `assets/` folder with `assets/css/style.css`, `assets/js/main.js`, and `assets/images/`.
4. **Verify Deployment**:
   - Visit your domain in a browser. Test all navigation links, the tracking simulator with `DEMO123456`, and the demo booking form.

---

## 🎨 Image Generation with Google Flow

To replace the included SVG placeholders with high-resolution photography:
1. Open `IMAGE-GENERATION-GUIDE.md`.
2. Copy any of the 30 copy-ready Google Flow image-generation prompts.
3. Save the resulting image matching the exact filename (e.g. `courier-hero-delivery-van.jpg`) and place it into `assets/images/`.
4. The layouts and dimensions will remain pixel-perfect and stable.

---

## 📄 License & Attribution
Created for **TSCG Technologies** portfolio demonstration. All rights reserved.
