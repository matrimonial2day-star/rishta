// ============================================
// PROFILES DATA - RishtaBandhan
// ============================================

const PROFILES = [
  {
    id: 'P001', name: 'Priya Sharma', age: 26, gender: 'female',
    city: 'Delhi', state: 'Delhi', religion: 'Hindu', caste: 'Brahmin',
    education: 'MBA Finance', profession: 'Business Analyst', income: '8-12 LPA',
    height: "5'4\"", complexion: 'Fair', maritalStatus: 'Never Married',
    photo: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=500&fit=crop',
    about: 'Simple, fun-loving girl from Delhi. Love traveling, cooking, and reading books. Looking for a caring life partner.',
    verified: true, premium: false,
    hobbies: ['Traveling', 'Cooking', 'Reading'],
    family: { type: 'Nuclear', status: 'Middle Class', father: 'Government Employee', mother: 'Homemaker' }
  },
  {
    id: 'P002', name: 'Anjali Verma', age: 24, gender: 'female',
    city: 'Mumbai', state: 'Maharashtra', religion: 'Hindu', caste: 'Kayastha',
    education: 'B.Tech Computer Science', profession: 'Software Engineer', income: '12-18 LPA',
    height: "5'3\"", complexion: 'Wheatish', maritalStatus: 'Never Married',
    photo: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=500&fit=crop',
    about: 'Tech-savvy, ambitious girl. Work at a leading IT company in Mumbai. Love music, yoga, and street food.',
    verified: true, premium: true,
    hobbies: ['Music', 'Yoga', 'Coding'],
    family: { type: 'Joint', status: 'Upper Middle Class', father: 'Business', mother: 'Teacher' }
  },
  {
    id: 'P003', name: 'Sneha Patel', age: 27, gender: 'female',
    city: 'Ahmedabad', state: 'Gujarat', religion: 'Hindu', caste: 'Patel',
    education: 'MBBS', profession: 'Doctor', income: '15-20 LPA',
    height: "5'2\"", complexion: 'Fair', maritalStatus: 'Never Married',
    photo: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=500&fit=crop',
    about: 'Doctor by profession, foodie by heart. Completed MBBS from Gujarat University. Looking for a well-educated partner.',
    verified: true, premium: true,
    hobbies: ['Gardening', 'Painting', 'Cricket'],
    family: { type: 'Nuclear', status: 'Upper Class', father: 'Doctor', mother: 'Homemaker' }
  },
  {
    id: 'P004', name: 'Rahul Kumar', age: 29, gender: 'male',
    city: 'Bangalore', state: 'Karnataka', religion: 'Hindu', caste: 'Yadav',
    education: 'M.Tech', profession: 'Senior Software Engineer', income: '20-25 LPA',
    height: "5'10\"", complexion: 'Wheatish', maritalStatus: 'Never Married',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
    about: 'Working in top MNC in Bangalore. Down-to-earth, family-oriented. Love cricket, movies, and traveling.',
    verified: true, premium: false,
    hobbies: ['Cricket', 'Traveling', 'Movies'],
    family: { type: 'Joint', status: 'Middle Class', father: 'Teacher', mother: 'Homemaker' }
  },
  {
    id: 'P005', name: 'Arjun Singh', age: 31, gender: 'male',
    city: 'Chandigarh', state: 'Punjab', religion: 'Sikh', caste: 'Jat',
    education: 'MBA', profession: 'Marketing Manager', income: '15-20 LPA',
    height: "6'0\"", complexion: 'Fair', maritalStatus: 'Never Married',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop',
    about: 'Punjabi munda from Chandigarh. Fun-loving, ambitious. Fitness freak and love cooking Punjabi food.',
    verified: true, premium: true,
    hobbies: ['Gym', 'Cooking', 'Bikes'],
    family: { type: 'Joint', status: 'Upper Middle Class', father: 'Business', mother: 'Doctor' }
  },
  {
    id: 'P006', name: 'Nidhi Agarwal', age: 25, gender: 'female',
    city: 'Jaipur', state: 'Rajasthan', religion: 'Hindu', caste: 'Agarwal',
    education: 'CA', profession: 'Chartered Accountant', income: '12-16 LPA',
    height: "5'4\"", complexion: 'Fair', maritalStatus: 'Never Married',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop',
    about: 'CA from ICAI. Simple girl from Jaipur. Love Rajasthani culture, dance, and traveling to hill stations.',
    verified: true, premium: false,
    hobbies: ['Dance', 'Art', 'Traveling'],
    family: { type: 'Joint', status: 'Upper Middle Class', father: 'Business', mother: 'Homemaker' }
  },
  {
    id: 'P007', name: 'Vikash Mishra', age: 28, gender: 'male',
    city: 'Lucknow', state: 'Uttar Pradesh', religion: 'Hindu', caste: 'Brahmin',
    education: 'LLB', profession: 'Advocate', income: '8-12 LPA',
    height: "5'8\"", complexion: 'Wheatish', maritalStatus: 'Never Married',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop',
    about: 'Lawyer practicing at Lucknow High Court. Serious about life, values family traditions. Looking for educated partner.',
    verified: true, premium: false,
    hobbies: ['Reading', 'Chess', 'Badminton'],
    family: { type: 'Joint', status: 'Middle Class', father: 'Government Employee', mother: 'Teacher' }
  },
  {
    id: 'P008', name: 'Pooja Tiwari', age: 23, gender: 'female',
    city: 'Pune', state: 'Maharashtra', religion: 'Hindu', caste: 'Brahmin',
    education: 'BDS', profession: 'Dentist', income: '8-10 LPA',
    height: "5'3\"", complexion: 'Fair', maritalStatus: 'Never Married',
    photo: 'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=400&h=500&fit=crop',
    about: 'Dentist working in Pune. Cheerful, fun-loving. Love Bollywood music, badminton, and cooking.',
    verified: false, premium: false,
    hobbies: ['Music', 'Badminton', 'Cooking'],
    family: { type: 'Nuclear', status: 'Middle Class', father: 'Teacher', mother: 'Nurse' }
  },
];

// --- Render Profile Cards ---
function renderProfileCard(profile, small = false) {
  return `
    <div class="profile-card lift">
      <div class="profile-card-img zoom-wrap">
        <img src="${profile.photo}" alt="${profile.name}" loading="lazy" />
        ${profile.verified ? '<span class="profile-card-badge verified"><i class="fas fa-check-circle"></i> Verified</span>' : ''}
        ${profile.premium ? '<span class="profile-card-badge" style="top:44px;background:linear-gradient(135deg,#f39c12,#d68910)">⭐ Premium</span>' : ''}
      </div>
      <div class="profile-card-body">
        <div class="profile-card-name">${profile.name}</div>
        <div class="profile-card-age">${profile.age} yrs • ${profile.city}, ${profile.state}</div>
        <div class="profile-card-info">
          <span class="profile-tag"><i class="fas fa-graduation-cap"></i> ${profile.education}</span>
          <span class="profile-tag"><i class="fas fa-briefcase"></i> ${profile.profession}</span>
          <span class="profile-tag"><i class="fas fa-pray"></i> ${profile.religion}</span>
        </div>
        <div class="profile-card-actions">
          <button class="btn btn-primary" onclick="window.location.href='profile-detail.html?id=${profile.id}'">
            <i class="fas fa-eye"></i> View
          </button>
          <button class="btn btn-outline" onclick="sendInterest('${profile.id}', '${profile.name}')">
            <i class="fas fa-heart"></i> Interest
          </button>
        </div>
      </div>
    </div>`;
}

// --- Featured Profiles on Home Page ---
const featuredContainer = document.getElementById('featuredProfiles');
if (featuredContainer) {
  const shuffled = PROFILES.sort(() => 0.5 - Math.random()).slice(0, 4);
  featuredContainer.innerHTML = shuffled.map(p => renderProfileCard(p)).join('');
}

// --- All Profiles Page ---
const allProfilesContainer = document.getElementById('allProfiles');
if (allProfilesContainer) {
  renderAllProfiles(PROFILES);
}

function renderAllProfiles(list) {
  if (!allProfilesContainer) return;
  if (list.length === 0) {
    allProfilesContainer.innerHTML = `
      <div style="text-align:center;padding:60px;grid-column:1/-1;color:var(--text-light)">
        <i class="fas fa-search" style="font-size:3rem;margin-bottom:16px;display:block;opacity:0.4"></i>
        <h3>Koi profile nahi mila</h3>
        <p>Apne filters change karein</p>
      </div>`;
    return;
  }
  allProfilesContainer.innerHTML = list.map(p => renderProfileCard(p)).join('');
}

// --- Profile Detail Page ---
function loadProfileDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  if (!id) return;
  const profile = PROFILES.find(p => p.id === id);
  if (!profile) return;

  document.title = `${profile.name} - RishtaBandhan`;
  const c = document.getElementById('profileDetailContent');
  if (!c) return;

  c.innerHTML = `
    <div class="profile-detail">
      <div class="profile-sidebar">
        <div class="profile-photos zoom-wrap">
          <img src="${profile.photo}" alt="${profile.name}" />
        </div>
        <div class="profile-actions">
          ${profile.verified ? '<div class="alert alert-success"><i class="fas fa-check-circle"></i> Verified Profile</div>' : ''}
          <button class="btn btn-primary btn-full btn-lg" onclick="sendInterest('${profile.id}', '${profile.name}')">
            <i class="fas fa-heart"></i> Interest Bhejein
          </button>
          <button class="btn btn-outline btn-full" onclick="toggleSave('${profile.id}', '${profile.name}', this)">
            <i class="far fa-bookmark"></i> Save Profile
          </button>
          <button class="btn btn-full" style="background:linear-gradient(135deg,#25d366,#128c7e);color:white;" 
                  onclick="showToast('Premium membership ki zaroorat hai!','error')">
            <i class="fab fa-whatsapp"></i> WhatsApp Karein
          </button>
          <button class="btn btn-gold btn-full" onclick="window.location.href='register.html'">
            <i class="fas fa-phone"></i> Contact Dekhein (Premium)
          </button>
        </div>
      </div>
      <div class="profile-main">
        <div class="profile-info-section">
          <h2 style="font-size:2rem;color:var(--secondary);margin-bottom:4px">${profile.name}</h2>
          <p style="color:var(--text-light);margin-bottom:16px">
            <i class="fas fa-map-marker-alt" style="color:var(--primary)"></i> ${profile.city}, ${profile.state} &nbsp;|&nbsp;
            <i class="fas fa-user" style="color:var(--primary)"></i> ${profile.age} Years
          </p>
          <p style="color:var(--text);font-size:0.95rem;line-height:1.8">${profile.about}</p>
        </div>
        <div class="profile-info-section">
          <h3>Basic Information</h3>
          <div class="info-grid">
            <div class="info-item"><label>Age</label><span>${profile.age} Years</span></div>
            <div class="info-item"><label>Height</label><span>${profile.height}</span></div>
            <div class="info-item"><label>Religion</label><span>${profile.religion}</span></div>
            <div class="info-item"><label>Caste</label><span>${profile.caste}</span></div>
            <div class="info-item"><label>Marital Status</label><span>${profile.maritalStatus}</span></div>
            <div class="info-item"><label>Complexion</label><span>${profile.complexion}</span></div>
          </div>
        </div>
        <div class="profile-info-section">
          <h3>Education & Career</h3>
          <div class="info-grid">
            <div class="info-item"><label>Education</label><span>${profile.education}</span></div>
            <div class="info-item"><label>Profession</label><span>${profile.profession}</span></div>
            <div class="info-item"><label>Income</label><span>${profile.income}</span></div>
            <div class="info-item"><label>Location</label><span>${profile.city}</span></div>
          </div>
        </div>
        <div class="profile-info-section">
          <h3>Family Details</h3>
          <div class="info-grid">
            <div class="info-item"><label>Family Type</label><span>${profile.family.type}</span></div>
            <div class="info-item"><label>Family Status</label><span>${profile.family.status}</span></div>
            <div class="info-item"><label>Father</label><span>${profile.family.father}</span></div>
            <div class="info-item"><label>Mother</label><span>${profile.family.mother}</span></div>
          </div>
        </div>
        <div class="profile-info-section">
          <h3>Hobbies & Interests</h3>
          <div style="display:flex;flex-wrap:wrap;gap:10px">
            ${profile.hobbies.map(h => `<span class="profile-tag" style="padding:8px 16px;font-size:0.9rem">${h}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>`;
}

loadProfileDetail();

// --- Search / Filter ---
window.applyFilters = function() {
  const gender = document.getElementById('filterGender')?.value;
  const religion = document.getElementById('filterReligion')?.value;
  const minAge = parseInt(document.getElementById('filterAgeMin')?.value || '18');
  const maxAge = parseInt(document.getElementById('filterAgeMax')?.value || '60');
  const city = document.getElementById('filterCity')?.value?.toLowerCase();
  const education = document.getElementById('filterEdu')?.value?.toLowerCase();

  let filtered = PROFILES.filter(p => {
    if (gender && gender !== 'all' && p.gender !== gender) return false;
    if (religion && religion !== 'all' && p.religion.toLowerCase() !== religion.toLowerCase()) return false;
    if (p.age < minAge || p.age > maxAge) return false;
    if (city && !p.city.toLowerCase().includes(city)) return false;
    if (education && !p.education.toLowerCase().includes(education)) return false;
    return true;
  });

  renderAllProfiles(filtered);
  const count = document.getElementById('resultsCount');
  if (count) count.textContent = `${filtered.length} profiles mile`;
};

window.resetFilters = function() {
  renderAllProfiles(PROFILES);
  const count = document.getElementById('resultsCount');
  if (count) count.textContent = `${PROFILES.length} profiles`;
};
