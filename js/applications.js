const vacancies = [
  { id: 1, title: "General Manager", type: "Full Time", location: "Dunmow, UK", salary: "85,000 - 95,000", applicants: 4 },
  { id: 2, title: "Human Resources Manager", type: "Full Time", location: "Preston, UK", salary: "45,000 - 55,000", applicants: 3 },
  { id: 3, title: "Data Scientist", type: "Full Time", location: "Manchester, UK", salary: "60,000 - 75,000", applicants: 2 },
  { id: 4, title: "Software Engineer", type: "Full Time", location: "Leeds, UK", salary: "50,000 - 65,000", applicants: 5 },
  { id: 5, title: "Marketing Director", type: "Full Time", location: "London, UK", salary: "70,000 - 90,000", applicants: 2 }
];

const applicants = [
  { id: 1, vacancyId: 1, name: "Simon Jackson", email: "simon.jackson@email.com", phone: "+44 7940 064357", distance: "No Location", score: 87, status: "shortlisted", skills: 76, history: 80, education: 100, duties: 92, overall: 87, industry: "Logistics", alignedIndustries: ["Logistics", "Healthcare", "Pharmaceuticals", "Government Agencies", "International Shipping"], summary: "The candidate has extensive leadership experience, strategic planning skills, and a strong financial acumen, which align well with the General Manager position. Their proven track record in team development and stakeholder engagement is also a significant asset.", jobHistory: [ { title: "Strategic Customer Development Director (UK)", company: "Kuehne + Nagel", dates: "February 2021 - Present" }, { title: "Key Account Management Director (UK)", company: "Kuehne + Nagel", dates: "November 2016 - January 2021" }, { title: "Head of Telesales and Independents (Group)", company: "Alliance Healthcare (WBA)", dates: "January 2015 - October 2017" } ], aiOpinion: "Yes, the candidate appears to be a good match for the General Manager position. Their extensive leadership experience and commercial skills align with the job requirements, despite the lack of direct industry experience." },
  { id: 2, vacancyId: 1, name: "Arogundade Olatunde", email: "a.olatunde@email.com", phone: "+44 7712 334455", distance: "333 miles", score: 87, status: "shortlisted", skills: 80, history: 75, education: 90, duties: 88, overall: 87, industry: "FMCG", alignedIndustries: ["FMCG", "Retail", "Supply Chain"], summary: "Strong operational background with multi-site management experience. Demonstrates clear leadership capability and a data-driven approach to performance management.", jobHistory: [ { title: "Operations Director", company: "Unilever PLC", dates: "March 2019 - Present" }, { title: "Regional Manager", company: "Tesco", dates: "June 2014 - February 2019" } ], aiOpinion: "The candidate brings solid operational credentials and a track record of leading large teams. Distance may be a consideration but relocation should not be ruled out." },
  { id: 3, vacancyId: 1, name: "Slater Jinkinson", email: "s.jinkinson@email.com", phone: "+44 7800 221133", distance: "No Location", score: 84, status: "shortlisted", skills: 72, history: 78, education: 85, duties: 80, overall: 84, industry: "Manufacturing", alignedIndustries: ["Manufacturing", "Engineering", "Logistics"], summary: "Experienced general management professional with a background in lean manufacturing and continuous improvement. Strong communicator with board-level reporting experience.", jobHistory: [ { title: "General Manager", company: "Rolls-Royce PLC", dates: "January 2018 - Present" }, { title: "Plant Manager", company: "BAE Systems", dates: "April 2012 - December 2017" } ], aiOpinion: "A credible candidate with direct general management experience. Manufacturing background may not fully align but transferable skills are evident." },
  { id: 4, vacancyId: 1, name: "Aj Punchihewa", email: "aj.punchihewa@email.com", phone: "+44 7933 667788", distance: "33 miles", score: 84, status: "shortlisted", skills: 70, history: 82, education: 88, duties: 79, overall: 84, industry: "Technology", alignedIndustries: ["Technology", "SaaS", "Professional Services"], summary: "Dynamic leader with a technology and professional services background. Proven ability to scale teams and drive revenue growth in competitive markets.", jobHistory: [ { title: "Managing Director", company: "Civica UK", dates: "September 2020 - Present" }, { title: "Head of Operations", company: "Capita PLC", dates: "February 2016 - August 2020" } ], aiOpinion: "The candidate is entrepreneurial and commercially astute. Their tech-sector focus may require some adjustment to a traditional GM remit but leadership quality is evident." },
  { id: 5, vacancyId: 2, name: "Rachel Whitmore", email: "r.whitmore@email.com", phone: "+44 7888 112233", distance: "12 miles", score: 91, status: "shortlisted", skills: 88, history: 90, education: 95, duties: 85, overall: 91, industry: "HR / People", alignedIndustries: ["HR", "Recruitment", "Professional Services"], summary: "Senior HR professional with deep expertise in employment law, talent acquisition, and organisational development. CIPD Level 7 qualified.", jobHistory: [ { title: "HR Director", company: "Travis Perkins PLC", dates: "January 2019 - Present" }, { title: "Senior HR Business Partner", company: "Balfour Beatty", dates: "March 2014 - December 2018" } ], aiOpinion: "Strong match. The candidate brings strategic HR experience at director level with a track record of delivering people programmes across complex organisations." },
  { id: 6, vacancyId: 2, name: "Dean Metcalfe", email: "d.metcalfe@email.com", phone: "+44 7766 998877", distance: "45 miles", score: 78, status: "loved", skills: 74, history: 76, education: 80, duties: 72, overall: 78, industry: "Public Sector", alignedIndustries: ["Public Sector", "NHS", "Local Government"], summary: "HR generalist with public sector experience. Solid understanding of TUPE, restructuring, and workforce planning in large organisations.", jobHistory: [ { title: "Head of HR", company: "Lancashire County Council", dates: "June 2017 - Present" }, { title: "HR Manager", company: "NHS Trust", dates: "September 2011 - May 2017" } ], aiOpinion: "Competent candidate with relevant HR experience. Public sector background may not transfer directly to a commercial environment without further evidence." },
  { id: 7, vacancyId: 2, name: "Priya Nair", email: "p.nair@email.com", phone: "+44 7700 445566", distance: "No Location", score: 65, status: "rejected", skills: 60, history: 62, education: 70, duties: 58, overall: 65, industry: "Retail", alignedIndustries: ["Retail", "E-commerce"], summary: "HR coordinator with five years of experience in retail environments. Limited strategic exposure and no board-level reporting experience to date.", jobHistory: [ { title: "HR Coordinator", company: "Next PLC", dates: "August 2019 - Present" }, { title: "HR Administrator", company: "Primark", dates: "January 2017 - July 2019" } ], aiOpinion: "Not a strong match at this time. The candidate lacks the seniority and strategic experience required for this HR Manager role." },
  { id: 8, vacancyId: 3, name: "Marcus Chen", email: "m.chen@email.com", phone: "+44 7855 334422", distance: "5 miles", score: 93, status: "shortlisted", skills: 95, history: 88, education: 100, duties: 90, overall: 93, industry: "Data / Analytics", alignedIndustries: ["Data Science", "AI", "FinTech"], summary: "PhD-qualified data scientist with expertise in machine learning, NLP, and large-scale data pipelines. Published researcher and conference speaker.", jobHistory: [ { title: "Principal Data Scientist", company: "HSBC Global", dates: "April 2020 - Present" }, { title: "Data Scientist", company: "Experian", dates: "July 2016 - March 2020" } ], aiOpinion: "Excellent match. The candidate exceeds the technical requirements and brings applied commercial experience at scale. Highly recommended for interview." },
  { id: 9, vacancyId: 3, name: "Fiona Gallagher", email: "f.gallagher@email.com", phone: "+44 7911 667700", distance: "28 miles", score: 80, status: "loved", skills: 78, history: 80, education: 82, duties: 75, overall: 80, industry: "Consulting", alignedIndustries: ["Management Consulting", "Analytics", "Insurance"], summary: "Data scientist turned analytics consultant with strong Python and R skills. Experienced in delivering insight projects for financial services clients.", jobHistory: [ { title: "Senior Analytics Consultant", company: "Deloitte", dates: "March 2018 - Present" }, { title: "Data Analyst", company: "Aviva", dates: "September 2014 - February 2018" } ], aiOpinion: "Good candidate with solid analytical skills and client-facing experience. A step up in seniority from current role but has demonstrated capability for growth." }
];

// State
let selectedVacancyId = null;
let selectedApplicantId = null;
let activeTab = 'all';
let activeDetailTab = 'profile';
let vacancySearch = '';
let applicantSearch = '';

// Utils
function getInitials(name) {
  return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
}

const AVATAR_PALETTE = ['#124B8A', '#2196D4', '#EB5324', '#16a34a', '#7c3aed', '#db2777'];
function avatarColor(name) {
  return AVATAR_PALETTE[name.charCodeAt(0) % AVATAR_PALETTE.length];
}

// Render vacancy list (column 1)
function renderVacancies() {
  const list = document.getElementById('vacancy-list');
  const select = document.getElementById('vacancy-select');
  const filtered = vacancies.filter(v => v.title.toLowerCase().includes(vacancySearch));

  // Populate the mobile select
  if (select) {
    select.innerHTML = vacancies.map(v =>
      `<option value="${v.id}" ${v.id === selectedVacancyId ? 'selected' : ''}>${v.title} — ${v.applicants} applicant${v.applicants !== 1 ? 's' : ''}</option>`
    ).join('');
  }

  if (!filtered.length) {
    list.innerHTML = '<p style="font-size:0.75rem;color:rgba(255,255,255,0.25);padding:1rem;text-align:center;">No vacancies found</p>';
    return;
  }

  list.innerHTML = filtered.map(v => `
    <div class="apps-vacancy-card ${v.id === selectedVacancyId ? 'apps-vacancy-card--active' : ''}"
         data-id="${v.id}" role="button" tabindex="0" aria-selected="${v.id === selectedVacancyId}">
      <div class="apps-vacancy-card__top">
        <span class="apps-vacancy-card__title">${v.title}</span>
        <span class="apps-vacancy-badge">${v.applicants}</span>
      </div>
      <span class="apps-vacancy-card__type">${v.type}</span>
      <span class="apps-vacancy-card__loc">
        <i class="fa-solid fa-location-dot" aria-hidden="true"></i>${v.location}
      </span>
      <span class="apps-vacancy-card__salary">
        <i class="fa-solid fa-pound-sign" aria-hidden="true"></i>${v.salary}
      </span>
    </div>
  `).join('');

  list.querySelectorAll('.apps-vacancy-card').forEach(el => {
    el.addEventListener('click', () => selectVacancy(parseInt(el.dataset.id)));
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectVacancy(parseInt(el.dataset.id));
      }
    });
  });
}

function selectVacancy(id) {
  selectedVacancyId = id;
  selectedApplicantId = null;
  activeTab = 'all';
  applicantSearch = '';
  document.getElementById('applicant-search').value = '';
  document.querySelectorAll('.apps-tab').forEach(t => t.classList.toggle('apps-tab--active', t.dataset.tab === 'all'));
  renderVacancies();
  renderApplicants();
  renderDetail();
}

// Render applicant list (column 2)
function renderApplicants() {
  const list = document.getElementById('applicant-list');
  const titleEl = document.getElementById('applicants-vacancy-title');
  const countEl = document.getElementById('applicants-count');

  const vacancy = vacancies.find(v => v.id === selectedVacancyId);
  titleEl.textContent = vacancy ? vacancy.title : 'Select a vacancy';

  let filtered = applicants.filter(a => a.vacancyId === selectedVacancyId);
  if (activeTab !== 'all') filtered = filtered.filter(a => a.status === activeTab);
  if (applicantSearch) filtered = filtered.filter(a => a.name.toLowerCase().includes(applicantSearch));

  countEl.textContent = filtered.length ? `${filtered.length} applicant${filtered.length !== 1 ? 's' : ''}` : '';

  if (!filtered.length) {
    list.innerHTML = `
      <div class="applicant-list__empty">
        <i class="fa-solid fa-users-slash" aria-hidden="true"></i>
        <p>No applicants found</p>
      </div>`;
    return;
  }

  list.innerHTML = filtered.map(a => `
    <div class="applicant-row ${a.id === selectedApplicantId ? 'applicant-row--active' : ''}" data-id="${a.id}">
      <div class="applicant-avatar" style="background:${avatarColor(a.name)}" aria-hidden="true">${getInitials(a.name)}</div>
      <div class="applicant-info">
        <span class="applicant-name">${a.name}</span>
        <span class="applicant-email"><i class="fa-solid fa-envelope" aria-hidden="true"></i>${a.email}</span>
      </div>
      <div class="applicant-meta">
        <span class="applicant-distance">${a.distance}</span>
        <div class="score-badge" aria-label="Score: ${a.score}%">${a.score}%</div>
        <span class="status-badge status-badge--${a.status}">${a.status}</span>
      </div>
      <div class="applicant-actions">
        <button class="action-btn action-btn--reject" data-applicant="${a.id}" data-action="rejected" aria-label="Reject ${a.name}">
          <i class="fa-solid fa-xmark" aria-hidden="true"></i>
        </button>
        <button class="action-btn action-btn--shortlist" data-applicant="${a.id}" data-action="shortlisted" aria-label="Shortlist ${a.name}">
          <i class="fa-solid fa-check" aria-hidden="true"></i>
        </button>
        <button class="action-btn action-btn--love" data-applicant="${a.id}" data-action="loved" aria-label="Love ${a.name}">
          <i class="fa-solid fa-heart" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  `).join('');

  list.querySelectorAll('.applicant-row').forEach(el => {
    el.addEventListener('click', e => {
      if (e.target.closest('.action-btn')) return;
      selectApplicant(parseInt(el.dataset.id));
    });
  });

  list.querySelectorAll('.action-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const applicantId = parseInt(btn.dataset.applicant);
      const action = btn.dataset.action;
      const app = applicants.find(a => a.id === applicantId);
      if (app) app.status = action;
      renderApplicants();
      if (selectedApplicantId === applicantId) renderDetail();
    });
  });
}

function selectApplicant(id) {
  selectedApplicantId = id;
  renderApplicants();
  renderDetail();
}

// KPI ring SVG builder
function kpiRing(label, value, isLarge = false) {
  const size = isLarge ? 64 : 52;
  const r = isLarge ? 26 : 20;
  const sw = 4;
  const circ = parseFloat((2 * Math.PI * r).toFixed(1));
  const targetOffset = parseFloat((circ * (1 - value / 100)).toFixed(1));
  const color = isLarge ? '#22c55e' : 'var(--cl-secondary)';
  const cx = size / 2;
  const cy = size / 2;

  return `
    <div class="kpi-ring ${isLarge ? 'kpi-ring--lg' : ''}">
      <div class="kpi-ring__wrap">
        <svg viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" aria-hidden="true">
          <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="${sw}"/>
          <circle class="kpi-ring__fill"
            cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${color}"
            stroke-width="${sw}" stroke-linecap="round"
            stroke-dasharray="${circ}" stroke-dashoffset="${circ}"
            transform="rotate(-90 ${cx} ${cy})"
            data-target="${targetOffset}"/>
        </svg>
        <span class="kpi-ring__pct">${value}%</span>
      </div>
      <span class="kpi-ring__name">${label}</span>
    </div>
  `;
}

function animateRings() {
  requestAnimationFrame(() => {
    document.querySelectorAll('#detail-content .kpi-ring__fill').forEach(el => {
      const target = el.dataset.target;
      el.style.transition = 'stroke-dashoffset 0.7s cubic-bezier(0.4, 0, 0.2, 1)';
      el.style.strokeDashoffset = target;
    });
  });
}

// Render detail panel (column 3)
function renderDetail() {
  const emptyEl = document.getElementById('detail-empty');
  const contentEl = document.getElementById('detail-content');

  if (!selectedApplicantId) {
    emptyEl.style.display = '';
    contentEl.style.display = 'none';
    contentEl.innerHTML = '';
    return;
  }

  const a = applicants.find(ap => ap.id === selectedApplicantId);
  if (!a) return;

  emptyEl.style.display = 'none';
  contentEl.style.display = '';

  contentEl.innerHTML = `
    <div class="detail-tabs">
      <button class="detail-tab ${activeDetailTab === 'profile' ? 'detail-tab--active' : ''}" data-dtab="profile">Profile</button>
      <button class="detail-tab ${activeDetailTab === 'resume' ? 'detail-tab--active' : ''}" data-dtab="resume">Resume</button>
      <button class="detail-tab ${activeDetailTab === 'jd' ? 'detail-tab--active' : ''}" data-dtab="jd">Job Description</button>
      <button class="detail-tab ${activeDetailTab === 'additional' ? 'detail-tab--active' : ''}" data-dtab="additional">Additional Info</button>
    </div>

    <div class="kpi-row">
      ${kpiRing('Skills', a.skills)}
      ${kpiRing('History', a.history)}
      ${kpiRing('Education', a.education)}
      ${kpiRing('Duties', a.duties)}
      ${kpiRing('Overall', a.overall, true)}
    </div>

    <div class="detail-body">
      <div class="detail-left">
        <h3 class="detail-name">${a.name}</h3>
        <div class="detail-field">
          <span class="detail-field__label">Location</span>
          <span class="detail-field__value">${a.distance}</span>
        </div>
        <div class="detail-field">
          <span class="detail-field__label">Email</span>
          <span class="detail-field__value">${a.email}</span>
        </div>
        <div class="detail-field">
          <span class="detail-field__label">Phone</span>
          <span class="detail-field__value">${a.phone}</span>
        </div>
        <div class="detail-field">
          <span class="detail-field__label">Industry Classification</span>
          <div class="detail-tags">
            <span class="industry-tag">${a.industry}</span>
          </div>
        </div>
        <div class="detail-field">
          <span class="detail-field__label">Aligned Industries</span>
          <div class="detail-tags">
            ${a.alignedIndustries.map(ind => `<span class="industry-tag">${ind}</span>`).join('')}
          </div>
        </div>
        <div class="detail-field">
          <span class="detail-field__label">Profile Summary</span>
          <p class="detail-summary">${a.summary}</p>
        </div>
      </div>

      <div class="detail-right">
        <h3 class="detail-section-heading">Job History</h3>
        <div class="job-history-list">
          ${a.jobHistory.map(j => `
            <div class="job-history-item">
              <span class="job-history-item__title">${j.title}</span>
              <span class="job-history-item__company">${j.company}</span>
              <span class="job-history-item__dates">${j.dates}</span>
            </div>
          `).join('')}
        </div>
        <h3 class="detail-section-heading">AI Opinion</h3>
        <p class="ai-opinion-text">${a.aiOpinion}</p>
      </div>
    </div>
  `;

  contentEl.querySelectorAll('.detail-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      activeDetailTab = btn.dataset.dtab;
      contentEl.querySelectorAll('.detail-tab').forEach(b =>
        b.classList.toggle('detail-tab--active', b.dataset.dtab === activeDetailTab)
      );
    });
  });

  animateRings();
}

// Drag-to-resize columns
function initResizable() {
  const panels = [
    document.querySelector('.vacancies-panel'),
    document.querySelector('.applicants-panel'),
    document.querySelector('.detail-panel')
  ];
  const dividers = document.querySelectorAll('.apps-divider');

  dividers.forEach((divider, idx) => {
    const leftPanel = panels[idx];
    const rightPanel = panels[idx + 1];

    divider.addEventListener('mousedown', e => {
      e.preventDefault();

      const startX = e.clientX;
      const startLeft = leftPanel.getBoundingClientRect().width;
      const startRight = rightPanel.getBoundingClientRect().width;
      const minWidth = 160;

      divider.classList.add('is-dragging');
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';

      const onMove = e => {
        const dx = e.clientX - startX;
        const newLeft = startLeft + dx;
        const newRight = startRight - dx;
        if (newLeft < minWidth || newRight < minWidth) return;
        leftPanel.style.flex = `0 0 ${newLeft}px`;
        rightPanel.style.flex = `0 0 ${newRight}px`;
      };

      const onUp = () => {
        divider.classList.remove('is-dragging');
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
      };

      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
    });
  });
}

// Initialise
document.addEventListener('DOMContentLoaded', () => {
  if (vacancies.length) {
    selectedVacancyId = vacancies[0].id;
  }

  renderVacancies();
  renderApplicants();
  renderDetail();
  initResizable();

  document.getElementById('vacancy-select').addEventListener('change', e => {
    selectVacancy(parseInt(e.target.value));
  });

  document.getElementById('vacancy-search').addEventListener('input', e => {
    vacancySearch = e.target.value.toLowerCase();
    renderVacancies();
  });

  document.getElementById('applicant-search').addEventListener('input', e => {
    applicantSearch = e.target.value.toLowerCase();
    renderApplicants();
  });

  document.querySelectorAll('.apps-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      activeTab = btn.dataset.tab;
      document.querySelectorAll('.apps-tab').forEach(b =>
        b.classList.toggle('apps-tab--active', b.dataset.tab === activeTab)
      );
      renderApplicants();
    });
  });
});
