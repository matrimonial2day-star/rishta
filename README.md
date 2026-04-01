# 💕 RishtaBandhan - Complete Matrimonial Website

A fully functional matrimonial website built with pure HTML, CSS, and JavaScript — ready to deploy on **GitHub Pages** (no backend required!).

---

## 🌐 Live Demo

> After deploying on GitHub Pages, your site will be live at:
> `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

---

## 📁 File Structure

```
matrimonial/
│
├── index.html              ← Home Page (Hero, Search, Profiles, Plans)
├── login.html              ← Login Page
├── register.html           ← Multi-step Registration (3 steps)
├── profiles.html           ← All Profiles with Filter
├── profile-detail.html     ← Individual Profile Detail
├── search.html             ← Advanced Search with Filters
├── dashboard.html          ← User Dashboard (after login)
├── success-stories.html    ← Couple Stories
├── about.html              ← About Us
├── contact.html            ← Contact + FAQ
│
├── css/
│   ├── style.css           ← Main Stylesheet
│   └── animations.css      ← All Animations
│
├── js/
│   ├── main.js             ← Core JS (navbar, counters, toast, auth)
│   └── profiles-data.js    ← Profile Data + Rendering
│
└── README.md
```

---

## ✅ Features

| Feature | Description |
|---------|-------------|
| 🏠 Home Page | Hero section, quick search, featured profiles, plans |
| 🔍 Advanced Search | Filter by gender, religion, age, city, education |
| 👤 Profile Cards | Photo, details, send interest, save |
| 📄 Profile Detail | Full info, family details, contact actions |
| 📝 Register | 3-step registration with validation |
| 🔑 Login | Email/password login with demo mode |
| 📊 Dashboard | Stats, matches, interests, messages |
| 💌 Interests | Send/receive interest system |
| 🔖 Saved Profiles | Save profiles for later |
| 💬 Contact Page | Form + FAQ accordion |
| 💕 Success Stories | Couple testimonials |
| 📱 Mobile Responsive | Works on all screen sizes |
| 🎨 Animations | Smooth hover, scroll reveal, counters |
| 💾 Local Storage | All data saved in browser |

---

## 🚀 Deploy on GitHub Pages

### Step 1: Create Repository
1. GitHub par jaayein → **New Repository**
2. Name dein (e.g. `matrimonial-website`)
3. Public rakhen
4. **Create repository** click karein

### Step 2: Upload Files
```bash
# Method 1: Git se
git init
git add .
git commit -m "Initial matrimonial website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git push -u origin main
```

Ya phir GitHub website par **"Add file → Upload files"** se directly upload karein.

### Step 3: Enable GitHub Pages
1. Repository → **Settings**
2. Left sidebar mein **"Pages"** click karein
3. Source: **"Deploy from a branch"**
4. Branch: **main**, Folder: **/ (root)**
5. **Save** click karein
6. 2-3 minute mein site live ho jaayegi!

---

## ✏️ Customize Kaise Karein

### Website Name Change Karein
`index.html`, `login.html` etc. mein search karein:
```
RishtaBandhan
```
Aur apna naam daal dein.

### Color Theme Badlein
`css/style.css` mein top par:
```css
:root {
  --primary: #c0392b;  /* Yahan apna main color daalein */
  --secondary: #2c3e50;
}
```

### Profiles Add Karein
`js/profiles-data.js` mein `PROFILES` array mein naya object add karein:
```javascript
{
  id: 'P009', name: 'Aapka Naam', age: 25, gender: 'female',
  city: 'City', state: 'State', religion: 'Hindu',
  education: 'B.Tech', profession: 'Engineer', income: '10-15 LPA',
  height: "5'4\"", complexion: 'Fair', maritalStatus: 'Never Married',
  photo: 'https://your-photo-url.jpg',
  about: 'About me...', verified: true, premium: false,
  hobbies: ['Reading', 'Music'],
  family: { type: 'Nuclear', status: 'Middle Class', father: 'Job', mother: 'Homemaker' }
}
```

### Contact Details Badlein
`contact.html` aur `footer` section mein apna:
- Phone number
- Email address
- Office address
update karein.

---

## 🛠️ Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, Grid, Flexbox, Animations
- **Vanilla JavaScript** — No frameworks needed
- **LocalStorage** — User data storage
- **Google Fonts** — Playfair Display + Nunito
- **Font Awesome 6** — Icons
- **Unsplash** — Demo photos

---

## 📱 Browser Support

✅ Chrome | ✅ Firefox | ✅ Safari | ✅ Edge | ✅ Mobile Browsers

---

## 📞 Support

Koi problem ho toh Issues section mein bataein!

---

**Made with ❤️ for finding perfect life partners!**
