const vacancies = [
  { id: 1, title: "Site Manager", type: "Permanent", location: "Ribble Valley", salary: "45,000 - 55,000", applicants: 4 },
  { id: 2, title: "Part-Time Bookkeeper", type: "Part-Time", location: "Ribble Valley", salary: "24,000 - 28,000 pro rata", applicants: 4 },
  { id: 3, title: "Electrical Estimator", type: "Permanent", location: "Read, Lancashire", salary: "40,000 - 50,000", applicants: 3 },
  { id: 4, title: "Reactive Gas Engineer", type: "Permanent", location: "Burnley", salary: "32,000 - 42,000", applicants: 5 }
];

const applicants = [
  { id: 1, vacancyId: 1, name: "James Hartley", email: "j.hartley@email.com", phone: "+44 7812 345678", distance: "8 miles", score: 89, status: "shortlisted", skills: 85, history: 90, education: 82, duties: 88, overall: 89, industry: "M&E Engineering", alignedIndustries: ["M&E Engineering", "Construction", "Facilities Management"], summary: "Experienced site manager with 12 years in commercial M&E projects across the North West. Strong track record delivering projects on time and within budget with subcontractor management experience.", jobHistory: [ { title: "Site Manager", company: "Dodd Group", dates: "January 2019 - Present" }, { title: "Site Supervisor", company: "NG Bailey", dates: "March 2013 - December 2018" } ], aiOpinion: "Strong match. The candidate brings direct M&E site management experience in a comparable commercial environment. Highly recommended for interview." },
  { id: 2, vacancyId: 1, name: "David Crossley", email: "d.crossley@email.com", phone: "+44 7799 234567", distance: "22 miles", score: 83, status: "shortlisted", skills: 80, history: 84, education: 78, duties: 82, overall: 83, industry: "Construction", alignedIndustries: ["Construction", "M&E Engineering", "Facilities Management"], summary: "Site manager with a background in building services and mechanical installation. Familiar with NEC and JCT contracts and experienced in coordinating multi-trade programmes.", jobHistory: [ { title: "Site Manager", company: "Amey PLC", dates: "June 2016 - Present" }, { title: "Mechanical Supervisor", company: "Kier Group", dates: "September 2010 - May 2016" } ], aiOpinion: "Good candidate with transferable site management experience. Mechanical bias may need broadening but core skills are well aligned." },
  { id: 3, vacancyId: 1, name: "Sarah Buckley", email: "s.buckley@email.com", phone: "+44 7955 678901", distance: "15 miles", score: 76, status: "progress", skills: 74, history: 77, education: 72, duties: 76, overall: 76, industry: "Construction", alignedIndustries: ["Construction", "Project Management", "Social Housing"], summary: "Assistant site manager stepping up with strong organisational and reporting skills. Experience managing subcontractor schedules across social housing and commercial refurbishment schemes.", jobHistory: [ { title: "Assistant Site Manager", company: "Wates Group", dates: "April 2020 - Present" }, { title: "Project Coordinator", company: "Eric Wright Group", dates: "July 2017 - March 2020" } ], aiOpinion: "Capable candidate making the step up to site manager. Supervision experience is developing well but may need closer mentoring initially." },
  { id: 4, vacancyId: 1, name: "Tom Warrington", email: "t.warrington@email.com", phone: "+44 7733 112233", distance: "41 miles", score: 64, status: "rejected", skills: 62, history: 66, education: 59, duties: 63, overall: 64, industry: "Civil Engineering", alignedIndustries: ["Civil Engineering", "Infrastructure", "Highways"], summary: "Site manager from a civil engineering background seeking a move into the building services sector. Limited direct M&E experience but strong programme management skills.", jobHistory: [ { title: "Site Manager", company: "Costain", dates: "February 2018 - Present" }, { title: "Site Engineer", company: "Galliford Try", dates: "August 2013 - January 2018" } ], aiOpinion: "Not an ideal match at this stage. Civil engineering background does not translate directly to the M&E environment required for this role." },
  { id: 5, vacancyId: 2, name: "Helen Marsden", email: "h.marsden@email.com", phone: "+44 7888 445566", distance: "5 miles", score: 92, status: "shortlisted", skills: 90, history: 94, education: 88, duties: 92, overall: 92, industry: "Finance / Bookkeeping", alignedIndustries: ["Bookkeeping", "SME Finance", "Construction Finance"], summary: "Highly experienced bookkeeper with 18 years of practice specialising in SMEs within the construction and engineering sectors. Proficient in Xero, Sage, and QuickBooks.", jobHistory: [ { title: "Senior Bookkeeper", company: "Self-Employed (Construction Clients)", dates: "January 2012 - Present" }, { title: "Accounts Assistant", company: "Gleeds", dates: "March 2006 - December 2011" } ], aiOpinion: "Excellent match. The candidate brings specialist construction finance experience on a part-time basis, which is precisely what this role requires." },
  { id: 6, vacancyId: 2, name: "Claire Atkinson", email: "c.atkinson@email.com", phone: "+44 7766 334455", distance: "33 miles", score: 80, status: "shortlisted", skills: 78, history: 81, education: 76, duties: 80, overall: 80, industry: "Retail Finance", alignedIndustries: ["Retail Finance", "SME Accounts", "Bookkeeping"], summary: "Bookkeeper with eight years of experience across retail and hospitality businesses. Competent in day-to-day accounts processing, invoice handling, and monthly reconciliation.", jobHistory: [ { title: "Bookkeeper", company: "The Restaurant Group", dates: "September 2018 - Present" }, { title: "Accounts Assistant", company: "Matalan", dates: "June 2015 - August 2018" } ], aiOpinion: "Solid bookkeeping candidate. Sector background differs from construction but core skills are transferable and availability is part-time." },
  { id: 13, vacancyId: 2, name: "Joanne Blackwell", email: "j.blackwell@email.com", phone: "+44 7822 667788", distance: "11 miles", score: 85, status: "progress", skills: 84, history: 86, education: 82, duties: 85, overall: 85, industry: "Finance / Bookkeeping", alignedIndustries: ["Bookkeeping", "SME Finance", "Engineering Support"], summary: "Part-qualified AAT bookkeeper with seven years of experience supporting small engineering and trades businesses. Confident with purchase and sales ledger, bank reconciliation, and CIS returns.", jobHistory: [ { title: "Bookkeeper", company: "J&B Mechanical Services", dates: "March 2020 - Present" }, { title: "Accounts Administrator", company: "Fylde Coast Electrical", dates: "January 2017 - February 2020" } ], aiOpinion: "Good fit for the role. Sector experience in engineering businesses is directly relevant and the candidate's part-time availability aligns well with the company's requirements." },
  { id: 7, vacancyId: 2, name: "Paul Reddington", email: "p.reddington@email.com", phone: "+44 7700 556677", distance: "19 miles", score: 68, status: "rejected", skills: 64, history: 70, education: 62, duties: 68, overall: 68, industry: "Public Sector Finance", alignedIndustries: ["Public Sector", "Local Government", "Payroll"], summary: "Finance officer transitioning from public sector to private practice. Limited exposure to commercial bookkeeping software and the invoice processing volumes typical of an engineering business.", jobHistory: [ { title: "Finance Officer", company: "Burnley Borough Council", dates: "April 2016 - Present" }, { title: "Payroll Administrator", company: "Lancashire County Council", dates: "September 2011 - March 2016" } ], aiOpinion: "Not the strongest match. The candidate is in transition and lacks direct bookkeeping experience in a commercial setting." },
  { id: 8, vacancyId: 3, name: "Ryan Beaumont", email: "r.beaumont@email.com", phone: "+44 7855 223344", distance: "7 miles", score: 94, status: "shortlisted", skills: 96, history: 91, education: 90, duties: 94, overall: 94, industry: "M&E Engineering", alignedIndustries: ["M&E Engineering", "Electrical Contracting", "Building Services"], summary: "Electrical estimator with 10 years of experience pricing commercial and industrial projects. Proficient in Causeway Estimating and has tendered projects up to £4m in value.", jobHistory: [ { title: "Senior Electrical Estimator", company: "Spie Engineering", dates: "February 2018 - Present" }, { title: "Electrical Estimator", company: "Elta Group", dates: "June 2013 - January 2018" } ], aiOpinion: "Outstanding match. The candidate exceeds the core requirements and brings directly relevant sector experience. Priority interview recommended." },
  { id: 9, vacancyId: 3, name: "Faisal Ahmed", email: "f.ahmed@email.com", phone: "+44 7911 778899", distance: "54 miles", score: 81, status: "progress", skills: 80, history: 82, education: 76, duties: 84, overall: 81, industry: "M&E Engineering", alignedIndustries: ["M&E Engineering", "Mechanical Contracting", "Quantity Surveying"], summary: "Estimator with a mechanical engineering bias transitioning into combined M&E estimating. Has priced heating, ventilation, and combined services packages for commercial clients.", jobHistory: [ { title: "Mechanical Estimator", company: "Imtech Engineering", dates: "March 2019 - Present" }, { title: "Estimating Assistant", company: "Mitsubishi Electric", dates: "September 2015 - February 2019" } ], aiOpinion: "Good candidate with a relevant technical background. Electrical knowledge is developing and would benefit from pairing with an experienced estimator initially." },
  { id: 14, vacancyId: 3, name: "Craig Dempsey", email: "c.dempsey@email.com", phone: "+44 7744 223399", distance: "38 miles", score: 58, status: "rejected", skills: 55, history: 60, education: 52, duties: 56, overall: 58, industry: "Electrical Installation", alignedIndustries: ["Electrical Installation", "Domestic Wiring", "PAT Testing"], summary: "Electrician seeking a move into estimating without formal estimating experience. No familiarity with estimating software and limited exposure to commercial or industrial project scopes.", jobHistory: [ { title: "Electrician", company: "Self-Employed", dates: "June 2018 - Present" }, { title: "Electrical Improver", company: "Bright Spark Electrical", dates: "September 2014 - May 2018" } ], aiOpinion: "Not suitable for this role at this time. The candidate has no estimating experience and lacks the commercial project background required to price M&E tenders independently." },
  { id: 10, vacancyId: 4, name: "Mark Shuttleworth", email: "m.shuttleworth@email.com", phone: "+44 7877 889900", distance: "12 miles", score: 90, status: "shortlisted", skills: 88, history: 92, education: 84, duties: 90, overall: 90, industry: "Gas Engineering", alignedIndustries: ["Gas Engineering", "Heating", "Facilities Maintenance"], summary: "Gas Safe registered engineer with 14 years of reactive maintenance and boiler servicing experience across domestic and light commercial portfolios. Full driving licence held.", jobHistory: [ { title: "Reactive Gas Engineer", company: "Mitie Group", dates: "November 2016 - Present" }, { title: "Gas Service Engineer", company: "British Gas Business", dates: "March 2010 - October 2016" } ], aiOpinion: "Excellent match. The candidate's Gas Safe registration and reactive maintenance background align precisely with the role requirements." },
  { id: 11, vacancyId: 4, name: "Darren Nuttall", email: "d.nuttall@email.com", phone: "+44 7733 990011", distance: "29 miles", score: 84, status: "shortlisted", skills: 82, history: 86, education: 78, duties: 84, overall: 84, industry: "Gas Engineering", alignedIndustries: ["Gas Engineering", "Social Housing", "Planned Maintenance"], summary: "Gas Safe registered engineer with social housing maintenance experience. Competent in boiler fault diagnostics and first-fix repairs. Holds ACS accreditation.", jobHistory: [ { title: "Gas Engineer", company: "Fortem Solutions", dates: "January 2018 - Present" }, { title: "Heating Engineer", company: "United Utilities", dates: "April 2012 - December 2017" } ], aiOpinion: "Strong candidate well suited to the reactive gas role. Social housing background translates well to portfolio-based maintenance." },
  { id: 15, vacancyId: 4, name: "Wayne Priestley", email: "w.priestley@email.com", phone: "+44 7811 334422", distance: "26 miles", score: 55, status: "rejected", skills: 52, history: 56, education: 48, duties: 54, overall: 55, industry: "Plumbing", alignedIndustries: ["Plumbing", "Domestic Heating", "Bathroom Fitting"], summary: "Plumber with no gas qualifications seeking a gas engineering role. Not currently Gas Safe registered and has no boiler servicing or reactive callout experience.", jobHistory: [ { title: "Plumber", company: "Self-Employed", dates: "October 2019 - Present" }, { title: "Plumbing Labourer", company: "Hargreaves Plumbing", dates: "May 2016 - September 2019" } ], aiOpinion: "Not suitable. The candidate does not hold Gas Safe registration, which is an essential requirement for this role. Application cannot progress without this qualification." },
  { id: 16, vacancyId: 4, name: "Stacey Holgate", email: "s.holgate@email.com", phone: "+44 7900 556644", distance: "58 miles", score: 62, status: "rejected", skills: 60, history: 63, education: 58, duties: 62, overall: 62, industry: "Facilities Management", alignedIndustries: ["Facilities Management", "HVAC", "Building Maintenance"], summary: "Facilities operative with some exposure to heating systems in a support capacity. Gas Safe registered for domestic work only, with no reactive commercial callout experience.", jobHistory: [ { title: "Facilities Operative", company: "ISS Facilities Services", dates: "January 2021 - Present" }, { title: "Maintenance Assistant", company: "Sodexo", dates: "July 2017 - December 2020" } ], aiOpinion: "Insufficient experience for the reactive gas role. Domestic-only Gas Safe scope and no independent callout history make the candidate unsuitable at this stage." },
  { id: 12, vacancyId: 4, name: "Kevin O'Brien", email: "k.obrien@email.com", phone: "+44 7800 112200", distance: "47 miles", score: 74, status: "progress", skills: 72, history: 75, education: 70, duties: 74, overall: 74, industry: "Plumbing", alignedIndustries: ["Plumbing", "Gas Heating", "Domestic Maintenance"], summary: "Plumber and gas engineer with experience in domestic new-build and light maintenance. Gas Safe registered but limited reactive commercial call-out experience to date.", jobHistory: [ { title: "Gas Plumber", company: "Persimmon Homes", dates: "August 2019 - Present" }, { title: "Plumbing Apprentice / Improver", company: "Graham Plumbing Services", dates: "September 2015 - July 2019" } ], aiOpinion: "Potential candidate for the role. Reactive commercial experience is limited but the technical foundation is solid. A trial period may be appropriate." }
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
      `<option value="${v.id}" ${v.id === selectedVacancyId ? 'selected' : ''}>${v.title} - ${v.applicants} applicant${v.applicants !== 1 ? 's' : ''}</option>`
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
        <div class="applicant-info__top">
          <span class="applicant-name">${a.name}</span>
          <div class="score-badge score-badge--${a.status}" aria-label="Score: ${a.score}%">${a.score}%</div>
        </div>
        <div class="applicant-info__bottom">
          <span class="applicant-email"><i class="fa-solid fa-envelope" aria-hidden="true"></i>${a.email}</span>
          <span class="applicant-distance">${a.distance}</span>
        </div>
      </div>
      <div class="applicant-meta">
        <span class="applicant-distance">${a.distance}</span>
        <div class="score-badge score-badge--${a.status}" aria-label="Score: ${a.score}%">${a.score}%</div>
        <span class="status-badge status-badge--${a.status}">${a.status}</span>
      </div>
      <div class="applicant-actions">
        <button class="action-btn action-btn--reject" data-applicant="${a.id}" data-action="rejected" aria-label="Reject ${a.name}">
          <i class="fa-solid fa-xmark" aria-hidden="true"></i>
        </button>
        <button class="action-btn action-btn--shortlist" data-applicant="${a.id}" data-action="shortlisted" aria-label="Shortlist ${a.name}">
          <i class="fa-solid fa-check" aria-hidden="true"></i>
        </button>
        <button class="action-btn action-btn--progress" data-applicant="${a.id}" data-action="progress" aria-label="Progress ${a.name}">
          <i class="fa-solid fa-arrow-up" aria-hidden="true"></i>
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
  const color = value >= 80 ? '#2196D4' : value >= 70 ? '#8b5cf6' : '#EB5324';
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
        <span class="kpi-ring__pct" style="color:${color}">${value}%</span>
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
  const panelEl = document.getElementById('detail-panel');

  if (!selectedApplicantId) {
    emptyEl.style.display = '';
    contentEl.style.display = 'none';
    contentEl.innerHTML = '';
    panelEl.classList.remove('detail-panel--active');
    return;
  }

  const a = applicants.find(ap => ap.id === selectedApplicantId);
  if (!a) return;

  emptyEl.style.display = 'none';
  contentEl.style.display = '';
  panelEl.classList.add('detail-panel--active');

  contentEl.innerHTML = `
    <div class="detail-profile-header">
      <div class="detail-profile-header__avatar" style="background:${avatarColor(a.name)}">${getInitials(a.name)}</div>
      <div class="detail-profile-header__info">
        <div class="detail-profile-header__name">${a.name}</div>
        <div class="detail-profile-header__sub">${a.email} &middot; ${a.phone}</div>
      </div>
      <div class="score-badge" style="${(c => `border-color:${c};background:${c}1a;color:${c}`)(a.score >= 80 ? '#2196D4' : a.score >= 70 ? '#8b5cf6' : '#EB5324')}">${a.score}%</div>
    </div>
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
