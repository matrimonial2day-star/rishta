# Rishta.com - Free Matrimony Website

India's trusted free matrimony website built with pure HTML, CSS & JavaScript.

---

## 📁 File Structure

```
rishta-website/
│
├── index.html          ← Homepage (Main page)
├── search.html         ← Search Profiles page
├── profile.html        ← Profile Detail page
├── header.html         ← Header/Navbar (shared across all pages)
├── footer.html         ← Footer (shared across all pages)
├── styles.css          ← Global CSS styles
├── manifest.json       ← PWA manifest (Add to Home Screen)
└── README.md           ← This file
```

---

## 🌐 Live URL (after GitHub Pages setup)

```
https://matrimonial2day-star.github.io/rishta/
```

---

## ✅ Features Included

- 🏠 Homepage with Hero, Search, Why Us, Profiles, Stories, Plans, Blog, CTA
- 🔍 Search Page with filters (age, gender, religion, city, education)
- 👤 Profile Detail Page (bio, details, family, horoscope, similar profiles)
- 🔐 Register + OTP verification flow
- 🔑 Login Modal (Phone / Email)
- 💎 Membership Plans (₹199 / ₹499 / ₹999)
- 📱 PWA — Add to Home Screen (like an app)
- 🔔 Membership expiry notifications
- 📲 Install banner
- 🎨 White + Red + Gold theme
- ✅ Fully mobile responsive
- 🌐 All content in English

---

## 🚀 How to Use on GitHub Pages

1. Upload all files to your GitHub repository
2. Go to Settings → Pages → Source: main branch
3. Wait 2-3 minutes
4. Visit: `https://YOUR-USERNAME.github.io/REPO-NAME/`

---

## 🔧 How Header & Footer Work

Every page loads `header.html` and `footer.html` via JavaScript fetch:

```javascript
async function loadHTML(id, file) {
  const r = await fetch(file);
  document.getElementById(id).innerHTML = await r.text();
}
loadHTML('header-placeholder', 'header.html');
loadHTML('footer-placeholder', 'footer.html');
```

**Note:** This only works when served from a web server (GitHub Pages, Netlify etc).
It will NOT work if you open files directly from your computer (file:// protocol).

---

## 📱 Mobile Responsive

- Navbar collapses to hamburger menu on mobile
- All grids adjust: 4-col → 2-col → 1-col
- Hero section stacks vertically on small screens
- Touch-friendly buttons and forms

---

Made with ❤️ — Rishta.com
