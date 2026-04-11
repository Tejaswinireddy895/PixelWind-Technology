# Pixelwind Technologies — Next.js App

## 🚀 Quick Start

```bash
npm install
npm run dev
# → http://localhost:3000
```

---

## 📧 Email Setup (Contact Form)

Copy the example env file and fill in your Gmail credentials:

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=yourcompany@gmail.com
SMTP_PASS=your_gmail_app_password
CONTACT_RECEIVER=yourcompany@gmail.com
```

**To get a Gmail App Password:**
1. Go to Google Account → Security → 2-Step Verification (enable it)
2. Then: Security → App passwords → Create one for "Mail"
3. Paste the 16-character password into `SMTP_PASS`

---

## 🔗 All Routes

| URL | Page |
|-----|------|
| `/` | Homepage |
| `/web-development` | Web Development |
| `/app-development` | App Development |
| `/ui-ux-design` | UI/UX Design |
| `/digital-marketing` | Digital Marketing |
| `/cloud-devops` | Cloud & DevOps |
| `/it-training` | IT Training |
| `/corporate-training` | Corporate Training |
| `/staffing` | Staffing |
| `/placement` | Placement Assistance |
| `/it-consulting` | IT Consulting |
| `/blockchain` | Blockchain |
| `/geneai` | Generative AI |
| `/machine-learning` | Machine Learning |
| `/datascience-analytics` | Data Science & Analytics |
| `/business-intelligence` | Business Intelligence |
| `/about` | About Us |
| `/contact` | Contact |

---

## ✅ Bugs Fixed

| Error | Fix |
|-------|-----|
| `Unsupported Server Component type: undefined` | All `src/services/*.tsx` files have `"use client"` — JSX elements in data arrays cannot be passed through Server Components |
| Hydration mismatch (`&#x27;` vs `'`) | All CSS is in `globals.css` + Tailwind, zero `<style>` tags in JSX |
| Footer links did nothing | All footer links use Next.js `<Link href="...">` with correct routes |
| Contact form only faked submission | Real `POST /api/contact` route using `nodemailer` sends formatted HTML email to your inbox |
| SmartTech cards not clickable | Each AI card is a `<Link href="/geneai">` etc. with its own dedicated page |
| Required field validation missing | Name, email, message required with red inline error messages before submit |
