const jobs = {
  'site-manager': {
    title: 'SITE MANAGER',
    location: 'Ribble Valley, Lancashire',
    type: 'Permanent',
    closes: '30 June 2026',
    desc: "Lead site operations for Vital Synergy's commercial M&E projects across Lancashire. Manage subcontractors, maintain programme compliance, and ensure quality delivery on time and within budget.",
    caption: "🔨 We're hiring a Site Manager! Join the Vital Synergy team in Ribble Valley. Permanent role, competitive package. Apply now 👇\n\n#MandE #Hiring #Lancashire #Engineering #SiteManager",
    img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900&h=500&fit=crop&auto=format&q=80',
    locationShort: 'Ribble Valley'
  },
  'bookkeeper': {
    title: 'PART-TIME BOOKKEEPER',
    location: 'Ribble Valley, Lancashire',
    type: 'Part-Time',
    closes: '30 June 2026',
    desc: 'Support the finance function with day-to-day bookkeeping, invoice processing and reconciliation. Ideal for an experienced bookkeeper seeking flexible hours.',
    caption: "📊 Flexible Part-Time Bookkeeper role now available at Vital Synergy HQ, Ribble Valley. Great opportunity for an experienced bookkeeper. Apply today 👇\n\n#Finance #PartTime #Lancashire #Hiring #Bookkeeper",
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=500&fit=crop&auto=format&q=80',
    locationShort: 'Ribble Valley'
  },
  'electrical-estimator': {
    title: 'ELECTRICAL ESTIMATOR',
    location: 'Read, Lancashire',
    type: 'Permanent',
    closes: '30 June 2026',
    desc: "Prepare accurate tender submissions and costings for electrical and M&E projects across Vital Synergy's commercial and industrial portfolio. Previous estimating experience essential.",
    caption: "⚡ Electrical Estimator wanted at Vital Synergy, Read HQ. Permanent role with a leading M&E company. If you've got the skills, we want to hear from you 👇\n\n#Electrical #MandE #Estimator #Lancashire #Hiring",
    img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=900&h=500&fit=crop&auto=format&q=80',
    locationShort: 'Read HQ'
  },
  'gas-engineer': {
    title: 'REACTIVE GAS ENGINEER',
    location: 'Burnley, Lancashire',
    type: 'Permanent',
    closes: '30 June 2026',
    desc: 'Carry out reactive gas maintenance, boiler servicing and emergency callouts across a portfolio of domestic and commercial properties. Gas Safe registration essential.',
    caption: "🔥 Reactive Gas Engineer vacancy in Burnley. Join the Vital Synergy team — permanent role, competitive pay, great team. Gas Safe registered? Apply now 👇\n\n#GasSafe #PlumbingAndHeating #Lancashire #Hiring #GasEngineer",
    img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&h=500&fit=crop&auto=format&q=80',
    locationShort: 'Burnley'
  }
};

let activeJob = 'site-manager';

function autoResize(el) {
  el.style.height = 'auto';
  el.style.height = el.scrollHeight + 'px';
}

function updatePreview(jobKey) {
  const job = jobs[jobKey];
  if (!job) return;
  activeJob = jobKey;

  // Main social card
  const imgEl = document.getElementById('preview-img');
  if (imgEl) { imgEl.style.opacity = '0'; setTimeout(() => { imgEl.src = job.img; imgEl.style.opacity = '1'; }, 180); }

  const titleEl = document.getElementById('preview-title');
  if (titleEl) titleEl.textContent = job.title;

  const metaEl = document.getElementById('preview-meta');
  if (metaEl) {
    metaEl.innerHTML = `
      <li><i class="fa-solid fa-location-dot" aria-hidden="true"></i> ${job.location}</li>
      <li><i class="fa-regular fa-calendar" aria-hidden="true"></i> Closes: ${job.closes}</li>
      <li><i class="fa-solid fa-briefcase" aria-hidden="true"></i> ${job.type}</li>`;
  }

  // Caption
  const captionEl = document.getElementById('post-caption');
  if (captionEl) { captionEl.value = job.caption; autoResize(captionEl); }

  // Gallery thumbnails
  [0, 1, 2].forEach(i => {
    const t = document.getElementById(`gallery-title-${i}`);
    const l = document.getElementById(`gallery-loc-${i}`);
    if (t) t.textContent = job.title;
    if (l) l.textContent = job.locationShort;
  });

  // Job description
  const descEl = document.getElementById('job-desc');
  if (descEl) descEl.textContent = job.desc;

  // Sidebar active state
  document.querySelectorAll('.dash-job-item').forEach(item => {
    const isActive = item.dataset.job === jobKey;
    item.classList.toggle('active', isActive);
    item.setAttribute('aria-selected', String(isActive));
  });
}

// Auto-resize caption textarea on manual edits
const captionTextarea = document.getElementById('post-caption');
if (captionTextarea) {
  captionTextarea.addEventListener('input', () => autoResize(captionTextarea));
  autoResize(captionTextarea);
}

// Job list click & keyboard
const jobList = document.getElementById('dash-job-list');
if (jobList) {
  jobList.addEventListener('click', e => {
    const item = e.target.closest('.dash-job-item');
    if (item) updatePreview(item.dataset.job);
  });
  jobList.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      const item = e.target.closest('.dash-job-item');
      if (item) { e.preventDefault(); updatePreview(item.dataset.job); }
    }
  });
}

// Platform preview tab switching
const tabContainer = document.getElementById('platform-tabs');
if (tabContainer) {
  tabContainer.addEventListener('click', e => {
    const tab = e.target.closest('.platform-tab');
    if (!tab) return;
    tabContainer.querySelectorAll('.platform-tab').forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');

    // Adjust aspect ratio for different platforms
    const preview = document.getElementById('social-preview');
    if (!preview) return;
    const ratios = { linkedin: '1200/627', facebook: '1200/627', instagram: '1/1', whatsapp: '1/1' };
    preview.style.aspectRatio = ratios[tab.dataset.platform] || '1200/627';
  });
}

// Sidebar search filter
const searchInput = document.getElementById('dash-search');
if (searchInput) {
  searchInput.addEventListener('input', e => {
    const q = e.target.value.toLowerCase();
    document.querySelectorAll('.dash-job-item').forEach(item => {
      const title = item.querySelector('.dash-job-item__title')?.textContent.toLowerCase() ?? '';
      const meta  = item.querySelector('.dash-job-item__meta')?.textContent.toLowerCase() ?? '';
      item.hidden = q.length > 0 && !title.includes(q) && !meta.includes(q);
    });
  });
}

// Publish All — visual feedback only (demo)
const publishBtn = document.getElementById('btn-publish-all');
if (publishBtn) {
  publishBtn.addEventListener('click', () => {
    const orig = publishBtn.innerHTML;
    publishBtn.innerHTML = '<i class="fa-solid fa-check" aria-hidden="true"></i> Published!';
    publishBtn.disabled = true;
    setTimeout(() => { publishBtn.innerHTML = orig; publishBtn.disabled = false; }, 2500);
  });
}
