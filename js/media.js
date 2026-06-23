const jobs = {
  'site-manager': {
    title: 'SITE MANAGER',
    location: 'Ribble Valley, Lancashire',
    type: 'Permanent',
    closes: '30 June 2026',
    caption: "🔨 We're hiring a Site Manager! Join the Calderforge team in Ribble Valley. Permanent role, competitive package. Apply now 👇\n\n#MandE #Hiring #Lancashire #Engineering #SiteManager",
    img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900&h=500&fit=crop&auto=format&q=80',
    status: 'live',
    socials: { linkedin: true, facebook: true, instagram: false, whatsapp: false },
    boards: { indeed: true, cvlibrary: true, linkedin: false, verelogic: true },
    schedule: { date: '2026-06-10', time: '09:00' }
  },
  'bookkeeper': {
    title: 'PART-TIME BOOKKEEPER',
    location: 'Ribble Valley, Lancashire',
    type: 'Part-Time',
    closes: '30 June 2026',
    caption: "📊 Flexible Part-Time Bookkeeper role now available at Calderforge HQ, Ribble Valley. Great opportunity for an experienced bookkeeper. Apply today 👇\n\n#Finance #PartTime #Lancashire #Hiring #Bookkeeper",
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=500&fit=crop&auto=format&q=80',
    status: 'draft',
    socials: { linkedin: true, facebook: false, instagram: true, whatsapp: false },
    boards: { indeed: true, cvlibrary: true, linkedin: true, verelogic: false },
    schedule: { date: '2026-06-12', time: '10:00' }
  },
  'electrical-estimator': {
    title: 'ELECTRICAL ESTIMATOR',
    location: 'Read, Lancashire',
    type: 'Permanent',
    closes: '30 June 2026',
    caption: "⚡ Electrical Estimator wanted at Calderforge, Read HQ. Permanent role with a leading M&E company. If you've got the skills, we want to hear from you 👇\n\n#Electrical #MandE #Estimator #Lancashire #Hiring",
    img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=900&h=500&fit=crop&auto=format&q=80',
    status: 'live',
    socials: { linkedin: true, facebook: true, instagram: false, whatsapp: true },
    boards: { indeed: true, cvlibrary: false, linkedin: true, verelogic: true },
    schedule: { date: '2026-06-08', time: '08:30' }
  },
  'gas-engineer': {
    title: 'REACTIVE GAS ENGINEER',
    location: 'Burnley, Lancashire',
    type: 'Permanent',
    closes: '30 June 2026',
    caption: "🔥 Reactive Gas Engineer vacancy in Burnley. Join the Calderforge team — permanent role, competitive pay, great team. Gas Safe registered? Apply now 👇\n\n#GasSafe #PlumbingAndHeating #Lancashire #Hiring #GasEngineer",
    img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&h=500&fit=crop&auto=format&q=80',
    status: 'draft',
    socials: { linkedin: false, facebook: true, instagram: true, whatsapp: true },
    boards: { indeed: true, cvlibrary: true, linkedin: false, verelogic: false },
    schedule: { date: '2026-06-15', time: '09:00' }
  }
};

function autoResize(el) {
  el.style.height = 'auto';
  el.style.height = el.scrollHeight + 'px';
}

function cap(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function socialTogglesHTML(socials) {
  const platforms = [
    { key: 'linkedin',  icon: '<i class="fa-brands fa-linkedin-in"></i>',  label: 'LinkedIn'  },
    { key: 'facebook',  icon: '<i class="fa-brands fa-facebook-f"></i>',   label: 'Facebook'  },
    { key: 'instagram', icon: '<i class="fa-brands fa-instagram"></i>',    label: 'Instagram' },
    { key: 'whatsapp',  icon: '<i class="fa-brands fa-whatsapp"></i>',     label: 'WhatsApp'  }
  ];
  return platforms.map(p => `
    <div class="platform-toggle-item">
      <div class="platform-toggle-item__left">
        <span class="platform-icon platform-icon--${p.key}" aria-hidden="true">${p.icon}</span>${p.label}
      </div>
      <label class="toggle-switch" aria-label="Post to ${p.label}">
        <input type="checkbox" data-social="${p.key}"${socials[p.key] ? ' checked' : ''}>
        <span class="toggle-switch__slider"></span>
      </label>
    </div>`).join('');
}

function boardTogglesHTML(boards) {
  const boardList = [
    { key: 'indeed',    icon: '<i class="fa-solid fa-magnifying-glass"></i>', label: 'Indeed',     cls: 'indeed'    },
    { key: 'cvlibrary', icon: '<img src="img/cv-library-icon.png" alt="" style="width:14px;height:14px;object-fit:contain;border-radius:2px;">', label: 'CV Library', cls: 'cvlibrary' },
    { key: 'linkedin',  icon: '<i class="fa-brands fa-linkedin-in"></i>',     label: 'LinkedIn',   cls: 'linkedin'  },
    { key: 'verelogic', icon: '<i class="fa-solid fa-v"></i>',                label: 'Verelogic',  cls: 'verelogic' }
  ];
  return boardList.map(b => `
    <div class="platform-toggle-item">
      <div class="platform-toggle-item__left">
        <span class="platform-icon platform-icon--${b.cls}" aria-hidden="true">${b.icon}</span>${b.label}
      </div>
      <label class="toggle-switch" aria-label="Post to ${b.label}">
        <input type="checkbox" data-board="${b.key}"${boards[b.key] ? ' checked' : ''}>
        <span class="toggle-switch__slider"></span>
      </label>
    </div>`).join('');
}

function renderCampaigns() {
  const container = document.getElementById('campaigns-container');
  if (!container) return;

  container.innerHTML = Object.entries(jobs).map(([key, job]) => `
    <div class="vacancy-card" data-job="${key}">
      <div class="vacancy-card__header">
        <div class="vacancy-card__heading">
          <span class="vacancy-card__title">${job.title}</span>
          <span class="vacancy-card__meta">${job.location} · ${job.type}</span>
        </div>
        <span class="dash-status-badge dash-status-badge--${job.status}">${cap(job.status)}</span>
        <div class="platform-tabs" role="tablist" aria-label="Preview platform">
          <button class="platform-tab active" data-platform="linkedin" role="tab" aria-selected="true" title="LinkedIn"><i class="fa-brands fa-linkedin-in" aria-hidden="true"></i></button>
          <button class="platform-tab" data-platform="facebook" role="tab" aria-selected="false" title="Facebook"><i class="fa-brands fa-facebook-f" aria-hidden="true"></i></button>
          <button class="platform-tab" data-platform="instagram" role="tab" aria-selected="false" title="Instagram"><i class="fa-brands fa-instagram" aria-hidden="true"></i></button>
          <button class="platform-tab" data-platform="whatsapp" role="tab" aria-selected="false" title="WhatsApp"><i class="fa-brands fa-whatsapp" aria-hidden="true"></i></button>
        </div>
      </div>
      <div class="vacancy-card__body">
        <div class="vacancy-card__left">
          <div class="social-preview-card" id="social-preview-${key}">
            <div class="social-preview-card__bg">
              <img src="${job.img}" alt="" style="transition:opacity 0.18s">
              <div class="social-preview-card__overlay"></div>
            </div>
            <div class="social-preview-card__header">
              <div class="social-preview-card__logo">
                <i class="fa-solid fa-bolt" aria-hidden="true"></i>
                <span>Calderforge</span>
              </div>
              <span class="social-preview-card__pill">Now Hiring</span>
            </div>
            <div class="social-preview-card__content">
              <p class="social-preview-card__kicker">Calderforge</p>
              <h2 class="social-preview-card__title">${job.title}</h2>
              <ul class="social-preview-card__meta" aria-label="Job details">
                <li><i class="fa-solid fa-location-dot" aria-hidden="true"></i> ${job.location}</li>
                <li><i class="fa-regular fa-calendar" aria-hidden="true"></i> Closes: ${job.closes}</li>
                <li><i class="fa-solid fa-briefcase" aria-hidden="true"></i> ${job.type}</li>
              </ul>
            </div>
            <div class="social-preview-card__footer">
              <span class="social-preview-card__url">calderforge.co.uk/jobs</span>
              <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </div>
          </div>
          <div class="form-group">
            <label class="dash-label" for="post-caption-${key}">Post Caption</label>
            <textarea class="dash-input dash-textarea" id="post-caption-${key}" rows="3" aria-label="Social post caption">${job.caption.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}</textarea>
          </div>
        </div>
        <div class="vacancy-card__right">
          <div class="panel-block">
            <p class="panel-block__title">Job Actions</p>
            <div class="dash-actions">
              <button class="dash-action-btn dash-action-btn--primary"><i class="fa-solid fa-rocket" aria-hidden="true"></i> Promote</button>
              <button class="dash-action-btn"><i class="fa-solid fa-share-nodes" aria-hidden="true"></i> Share</button>
              <button class="dash-action-btn"><i class="fa-solid fa-pen" aria-hidden="true"></i> Edit</button>
            </div>
          </div>
          <div class="panel-block">
            <p class="panel-block__title">Schedule Post</p>
            <div class="schedule-inputs">
              <input type="date" class="dash-input" value="${job.schedule.date}" aria-label="Date">
              <input type="time" class="dash-input" value="${job.schedule.time}" aria-label="Time">
            </div>
            <div class="panel-actions">
              <button class="btn btn--glass btn--sm"><i class="fa-regular fa-clock" aria-hidden="true"></i> Schedule</button>
              <button class="btn btn--primary btn--sm"><i class="fa-solid fa-bolt" aria-hidden="true"></i> Post Now</button>
            </div>
          </div>
          <div class="panel-block">
            <p class="panel-block__title">Posted to Socials?</p>
            <div class="platform-toggles">${socialTogglesHTML(job.socials)}</div>
          </div>
          <div class="panel-block">
            <p class="panel-block__title">Post to Job Boards</p>
            <div class="platform-toggles">${boardTogglesHTML(job.boards)}</div>
          </div>
        </div>
      </div>
    </div>`).join('');

  // Auto-resize all captions + wire input events
  container.querySelectorAll('.dash-textarea').forEach(ta => {
    autoResize(ta);
    ta.addEventListener('input', () => autoResize(ta));
  });
}

// Platform tab switching — scoped to each card's preview
document.addEventListener('click', e => {
  const tab = e.target.closest('.platform-tab');
  if (!tab) return;
  const tabs = tab.closest('.platform-tabs');
  if (!tabs) return;
  tabs.querySelectorAll('.platform-tab').forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
  tab.classList.add('active');
  tab.setAttribute('aria-selected', 'true');
  const card = tab.closest('.vacancy-card');
  if (!card) return;
  const preview = card.querySelector('.social-preview-card');
  if (!preview) return;
  const ratios = { linkedin: '1200/627', facebook: '1200/627', instagram: '1/1', whatsapp: '1/1' };
  preview.style.aspectRatio = ratios[tab.dataset.platform] || '1200/627';
});

// Search filter — hide/show cards by title or location
const searchInput = document.getElementById('dash-search');
if (searchInput) {
  searchInput.addEventListener('input', e => {
    const q = e.target.value.toLowerCase();
    document.querySelectorAll('.vacancy-card').forEach(card => {
      const title    = card.querySelector('.vacancy-card__title')?.textContent.toLowerCase() ?? '';
      const meta     = card.querySelector('.vacancy-card__meta')?.textContent.toLowerCase() ?? '';
      card.hidden = q.length > 0 && !title.includes(q) && !meta.includes(q);
    });
  });
}

// Publish All feedback
const publishBtn = document.getElementById('btn-publish-all');
if (publishBtn) {
  publishBtn.addEventListener('click', () => {
    const orig = publishBtn.innerHTML;
    publishBtn.innerHTML = '<i class="fa-solid fa-check" aria-hidden="true"></i> Published!';
    publishBtn.disabled = true;
    setTimeout(() => { publishBtn.innerHTML = orig; publishBtn.disabled = false; }, 2500);
  });
}

renderCampaigns();
