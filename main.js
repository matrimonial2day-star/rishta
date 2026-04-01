// ============================================
// MAIN.JS - RishtaBandhan
// ============================================

// --- Navbar Scroll Effect ---
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) navbar?.classList.add('scrolled');
  else navbar?.classList.remove('scrolled');
});

// --- Hamburger Menu ---
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
});

// --- Counter Animation ---
function animateCounter(el, target, duration = 1800) {
  let start = 0;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    el.textContent = Math.floor(progress * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  };
  requestAnimationFrame(step);
}

const counterEls = document.querySelectorAll('.stat-num');
let countersStarted = false;
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !countersStarted) {
      countersStarted = true;
      counterEls.forEach(el => {
        const target = parseInt(el.dataset.target || '0');
        animateCounter(el, target);
      });
    }
  });
}, { threshold: 0.3 });
if (counterEls.length) counterObserver.observe(counterEls[0]);

// --- Scroll Reveal ---
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });
revealEls.forEach(el => revealObserver.observe(el));

// --- Toast Notification ---
window.showToast = function(msg, type = 'success') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <div style="display:flex;align-items:center;gap:10px">
      <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}" 
         style="color:${type === 'success' ? '#00b894' : '#e74c3c'};font-size:1.2rem"></i>
      <span style="font-family:Nunito,sans-serif;font-size:0.9rem;font-weight:600">${msg}</span>
    </div>`;
  document.body.appendChild(toast);
  setTimeout(() => { toast.classList.add('hide'); setTimeout(() => toast.remove(), 300); }, 3000);
};

// --- Local Storage Helpers ---
window.RishtaDB = {
  get: (key) => { try { return JSON.parse(localStorage.getItem(key)); } catch { return null; } },
  set: (key, val) => { try { localStorage.setItem(key, JSON.stringify(val)); } catch {} },
  remove: (key) => localStorage.removeItem(key),
  isLoggedIn: () => !!localStorage.getItem('rishta_user'),
  getUser: () => { try { return JSON.parse(localStorage.getItem('rishta_user')); } catch { return null; } },
};

// --- Interest / Like Functionality ---
window.sendInterest = function(profileId, profileName) {
  if (!RishtaDB.isLoggedIn()) {
    window.location.href = 'login.html';
    return;
  }
  const interests = RishtaDB.get('interests') || [];
  if (!interests.includes(profileId)) {
    interests.push(profileId);
    RishtaDB.set('interests', interests);
    showToast(`Interest sent to ${profileName}! ❤️`);
  } else {
    showToast('Interest already sent!', 'error');
  }
};

window.toggleSave = function(profileId, profileName, btn) {
  if (!RishtaDB.isLoggedIn()) {
    window.location.href = 'login.html';
    return;
  }
  const saved = RishtaDB.get('saved_profiles') || [];
  const idx = saved.indexOf(profileId);
  if (idx === -1) {
    saved.push(profileId);
    RishtaDB.set('saved_profiles', saved);
    if (btn) btn.innerHTML = '<i class="fas fa-bookmark"></i> Saved';
    showToast(`${profileName} saved!`);
  } else {
    saved.splice(idx, 1);
    RishtaDB.set('saved_profiles', saved);
    if (btn) btn.innerHTML = '<i class="far fa-bookmark"></i> Save';
    showToast(`${profileName} removed from saved.`);
  }
};

// --- Auth Guard ---
window.requireAuth = function(redirectTo = 'login.html') {
  if (!RishtaDB.isLoggedIn()) {
    window.location.href = redirectTo;
    return false;
  }
  return true;
};

// --- Logout ---
window.logout = function() {
  localStorage.removeItem('rishta_user');
  showToast('Logged out successfully!');
  setTimeout(() => window.location.href = 'index.html', 1000);
};
