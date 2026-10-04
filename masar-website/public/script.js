/* =====================================================================
   Masar — site behavior
   Edit the CONFIG / DATA blocks below; the rest wires up the page.
   ===================================================================== */

// WhatsApp number in international format, digits only (placeholder — replace)
const WA_NUMBER = '201042464651';

// Reviews section: set to true once real reviews are added to REVIEWS below
const SHOW_REVIEWS = false;

// Countries shown in the hero picker (Gulf first, then "anywhere")
const ORIGINS = [
  { id: 'sa', code: 'RUH', ar: 'السعودية', en: 'Saudi Arabia' },
  { id: 'ae', code: 'DXB', ar: 'الإمارات', en: 'UAE' },
  { id: 'kw', code: 'KWI', ar: 'الكويت', en: 'Kuwait' },
  { id: 'qa', code: 'DOH', ar: 'قطر', en: 'Qatar' },
  { id: 'bh', code: 'BAH', ar: 'البحرين', en: 'Bahrain' },
  { id: 'om', code: 'MCT', ar: 'عُمان', en: 'Oman' },
  { id: 'world', code: 'ANY', ar: 'دولة أخرى', en: 'Another country' }
];

// Extra countries for the contact form dropdown (after the Gulf list)
const MORE_COUNTRIES = [
  { id: 'iq', ar: 'العراق', en: 'Iraq' },
  { id: 'jo', ar: 'الأردن', en: 'Jordan' },
  { id: 'ye', ar: 'اليمن', en: 'Yemen' },
  { id: 'ps', ar: 'فلسطين', en: 'Palestine' },
  { id: 'sy', ar: 'سوريا', en: 'Syria' },
  { id: 'sd', ar: 'السودان', en: 'Sudan' },
  { id: 'ly', ar: 'ليبيا', en: 'Libya' }
];

const TRACKS = {
  bachelor: {
    ar: {
      name: 'البكالوريوس', title: 'البكالوريوس في الجامعات المصرية', format: 'حضوري',
      intro: 'لخريجي الثانوية العامة الراغبين في الالتحاق بأي جامعة مصرية، حكومية أو خاصة، من اختيار التخصص حتى القبول النهائي.',
      cta: 'تحقق من أهليتك',
      items: [
        ['اختيار الجامعة والتخصص', 'نقارن بين الجامعات الحكومية والخاصة حسب مجموعك وأهدافك المهنية.'],
        ['معادلة الشهادة الثانوية', 'نتابع معادلة شهادتك الصادرة من بلدك لدى الجهات المصرية المختصة.'],
        ['التقديم والمتابعة', 'نقدّم نيابة عنك ونتابع ملفك أولًا بأول حتى صدور القبول.'],
        ['الاستقرار بعد القبول', 'إرشادات حول السكن والتسجيل الجامعي للقادمين من خارج مصر.']
      ]
    },
    en: {
      name: "Bachelor's", title: "Bachelor's degrees in Egypt", format: 'On campus',
      intro: 'For secondary-school graduates who want to join any Egyptian university, public or private, from choosing a major to final admission.',
      cta: 'Check your eligibility',
      items: [
        ['University and major', 'We compare public and private universities based on your grades and career goals.'],
        ['Certificate equivalency', 'We follow up on the equivalency of your home-country certificate with the Egyptian authorities.'],
        ['Application and follow-up', 'We apply on your behalf and track your file until admission is confirmed.'],
        ['Settling in', 'Guidance on housing and university registration for students arriving from abroad.']
      ]
    }
  },
  postgrad: {
    ar: {
      name: 'ماجستير ودكتوراه', title: 'الدراسات العليا: ماجستير ودكتوراه', format: 'أونلاين / حضوري',
      intro: 'لأصحاب المؤهلات الجامعية الراغبين في استكمال دراستهم العليا في مصر، حضوريًا أو عن بعد بالكامل.',
      cta: 'استفسر عن برنامجك',
      items: [
        ['ماجستير حضوري أو أونلاين', 'نطابق تخصصك السابق مع البرامج المتاحة، وننسق التقديم مع الجامعة.'],
        ['دكتوراه بإشراف أكاديمي', 'نساعدك في تحديد مجال البحث والمشرف والمتطلبات الأكاديمية.'],
        ['معادلة المؤهلات', 'نتابع معادلة شهادتك الجامعية السابقة لدى الجهات المصرية المختصة.']
      ]
    },
    en: {
      name: "Master's & PhD", title: "Postgraduate study: master's and PhD", format: 'Online / on campus',
      intro: 'For degree holders who want to continue their studies in Egypt, on campus or fully online.',
      cta: 'Ask about your program',
      items: [
        ["Master's, on campus or online", 'We match your previous degree with available programs and coordinate your application.'],
        ['PhD with academic supervision', 'We help you define your research area, supervisor and academic requirements.'],
        ['Credential equivalency', 'We follow up on the equivalency of your previous degree with the Egyptian authorities.']
      ]
    }
  },
  certs: {
    ar: {
      name: 'الشهادات المهنية', title: 'الشهادات والدورات المهنية', format: 'أونلاين / حضوري',
      intro: 'برامج تدريبية وشهادات معتمدة لتطوير مهاراتك المهنية، متاحة أونلاين أو حضوريًا حسب البرنامج.',
      cta: 'اسأل عن البرامج المتاحة',
      items: [
        ['اختيار الشهادة المناسبة', 'نرشح لك البرنامج الأنسب لمجالك المهني وأهدافك.'],
        ['التسجيل والمتابعة', 'نتابع خطوات التسجيل معك حتى بدء البرنامج فعليًا.']
      ]
    },
    en: {
      name: 'Certifications', title: 'Professional certificates', format: 'Online / on campus',
      intro: 'Accredited training programs to build your professional skills, online or on campus depending on the program.',
      cta: 'Ask about available programs',
      items: [
        ['Choosing the right certificate', 'We recommend the program that best fits your field and goals.'],
        ['Enrollment and support', 'We guide you through registration until the program starts.']
      ]
    }
  }
};

/* ---------- UNIVERSITY LOGO CAROUSEL ----------
   Add a university: drop a transparent PNG in assets/unis/ and add a line here. */
const UNIVERSITIES = [
  { logo: 'assets/unis/cairo.png', ar: 'جامعة القاهرة', en: 'Cairo University' },
  { logo: 'assets/unis/ain-shams.png', ar: 'جامعة عين شمس', en: 'Ain Shams University' },
  { logo: 'assets/unis/alexandria.png', ar: 'جامعة الإسكندرية', en: 'Alexandria University' },
  { logo: 'assets/unis/mansoura.png', ar: 'جامعة المنصورة', en: 'Mansoura University' },
  { logo: 'assets/unis/zagazig.png', ar: 'جامعة الزقازيق', en: 'Zagazig University' },
  { logo: 'assets/unis/kafrelsheikh.png', ar: 'جامعة كفر الشيخ', en: 'Kafrelsheikh University' }
];

/* ---------- REVIEWS ----------
   Replace these samples with real testimonials (get the student's permission first).
   Remove `sample: true` once an entry is real. `track`: bachelor | postgrad | certs */
const REVIEWS = [
  {
    sample: true, track: 'bachelor', country: 'kw', rating: 5,
    ar: { name: 'اسم الطالب', text: 'مكان نص رأي الطالب: كيف ساعده فريق مسار في اختيار الجامعة وتجهيز الأوراق حتى صدور القبول.' },
    en: { name: 'Student name', text: "Student testimonial goes here: how Masar's team helped them choose a university and prepare their papers through to admission." }
  },
  {
    sample: true, track: 'postgrad', country: 'ae', rating: 5,
    ar: { name: 'اسم الطالبة', text: 'مكان نص رأي طالبة دراسات عليا: تجربتها في التقديم للماجستير ومتابعة معادلة شهادتها.' },
    en: { name: 'Student name', text: "A postgraduate student's testimonial goes here: their experience applying for a master's and following up on equivalency." }
  },
  {
    sample: true, track: 'bachelor', country: 'om', rating: 5,
    ar: { name: 'ولي أمر', text: 'مكان رأي ولي أمر: شعوره بالاطمئنان مع المتابعة المستمرة لملف ابنه أو ابنته.' },
    en: { name: 'Parent', text: "A parent's testimonial goes here: the reassurance of regular updates on their child's file." }
  },
  {
    sample: true, track: 'certs', country: 'jo', rating: 4,
    ar: { name: 'اسم المتدرب', text: 'مكان رأي أحد المتدربين في برامج الشهادات المهنية وخطوات التسجيل.' },
    en: { name: 'Trainee name', text: 'A trainee testimonial goes here about the professional certificate program and the registration steps.' }
  }
];

/* ---------- BLOG ----------
   To publish a post: add an object here. Give it a `url` (e.g. 'blog/my-post.html')
   and a `date` ('2026-10-05'); posts without a url show as "Coming soon". */
const BLOG_CATEGORIES = {
  all: { ar: 'الكل', en: 'All' },
  admissions: { ar: 'القبول', en: 'Admissions' },
  documents: { ar: 'الأوراق والمعادلة', en: 'Documents' },
  life: { ar: 'الحياة في مصر', en: 'Life in Egypt' }
};
const POSTS = [
  {
    cat: 'admissions', url: null, date: null, minutes: 6,
    ar: { title: 'كيف يتم القبول في الجامعات المصرية للطلاب الوافدين؟', excerpt: 'نظرة عامة على مراحل التقديم من اختيار الجامعة حتى خطاب القبول.' },
    en: { title: 'How admission to Egyptian universities works for international students', excerpt: 'An overview of the application stages, from choosing a university to the acceptance letter.' }
  },
  {
    cat: 'documents', url: null, date: null, minutes: 5,
    ar: { title: 'معادلة الشهادة: ما الذي تجهزه قبل التقديم', excerpt: 'قائمة الأوراق التي يحتاجها ملفك وكيف توثقها في بلدك.' },
    en: { title: 'Certificate equivalency: what to prepare before you apply', excerpt: 'The documents your file needs and how to authenticate them at home.' }
  },
  {
    cat: 'life', url: null, date: null, minutes: 7,
    ar: { title: 'شهرك الأول في القاهرة: السكن والتسجيل', excerpt: 'نصائح عملية لأول أسابيعك في مصر بعد صدور القبول.' },
    en: { title: 'Your first month in Cairo: housing and registration', excerpt: 'Practical advice for your first weeks in Egypt after admission.' }
  }
];

const UI = {
  ar: {
    fromWorld: 'من أي مكان في العالم… إلى أي جامعة مصرية',
    fromPlace: c => `من ${c}… إلى الجامعات المصرية`,
    anywhere: 'من أي مكان', other: 'دولة أخرى', soon: 'قريبًا', read: 'اقرأ المقال', min: m => `${m} دقائق قراءة`,
    errName: 'اكتب اسمك الكامل.', errPhone: 'اكتب رقم جوال صحيح مع رمز الدولة.', errTrack: 'اختر المسار المطلوب.',
    sentTitle: 'تم تجهيز رسالتك', sentBody: 'فتحنا لك محادثة واتساب برسالة جاهزة. إن لم تُفتح، استخدم الزر بالأسفل.',
    openWa: 'افتح واتساب', again: 'إرسال طلب آخر',
    msg: d => `السلام عليكم، أنا ${d.name}.\nأقيم في: ${d.country}\nالمسار المطلوب: ${d.track}\nرقمي: ${d.phone}${d.message ? '\n\n' + d.message : ''}`
  },
  en: {
    fromWorld: 'From anywhere in the world to any Egyptian university',
    fromPlace: c => `From ${c} to Egypt's universities`,
    anywhere: 'Anywhere', other: 'Other country', soon: 'Coming soon', read: 'Read article', min: m => `${m} min read`,
    errName: 'Enter your full name.', errPhone: 'Enter a valid phone number including the country code.', errTrack: 'Choose a track.',
    sentTitle: 'Your message is ready', sentBody: "We've opened a WhatsApp chat with your message filled in. If it didn't open, use the button below.",
    openWa: 'Open WhatsApp', again: 'Send another request',
    msg: d => `Hello, I'm ${d.name}.\nI live in: ${d.country}\nTrack: ${d.track}\nMy number: ${d.phone}${d.message ? '\n\n' + d.message : ''}`
  }
};

/* =====================================================================
   State + helpers
   ===================================================================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const state = { lang: 'ar', origin: null, track: 'bachelor', formTrack: null, blogCat: 'all', revTrack: 'all', revIndex: 0 };
const t = () => UI[state.lang];
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

document.documentElement.classList.add('js');

/* ---------- Language ---------- */
function setLang(lang) {
  state.lang = lang;
  document.body.dataset.lang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  $$('.lang button').forEach(b => b.classList.toggle('on', b.dataset.lang === lang));
  try { localStorage.setItem('masar-lang', lang); } catch (e) {}
  renderAll();
}
$$('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

/* ---------- Origin picker (hero) ---------- */
function renderOrigins() {
  const wrap = $('#originChips');
  if (wrap) wrap.innerHTML = ORIGINS.map(o => `
    <button type="button" class="chip" role="radio" data-id="${o.id}" aria-checked="${state.origin === o.id}">
      ${esc(o[state.lang])}${o.id !== 'world' ? `<span class="code">${o.code}</span>` : ''}
    </button>`).join('');
  if (wrap) $$('.chip', wrap).forEach(c => c.addEventListener('click', () => pickOrigin(c.dataset.id)));
  const o = ORIGINS.find(x => x.id === state.origin);
  const line = $('#originText');
  line.textContent = !o || o.id === 'world' ? t().fromWorld : t().fromPlace(o[state.lang]);
}
function pickOrigin(id) {
  state.origin = state.origin === id ? null : id;
  renderOrigins();
  renderPass(false);
  const sel = $('#countrySelect');
  if (state.origin) sel.value = state.origin === 'world' ? 'other' : state.origin;
}

/* ---------- Tracks boarding pass ---------- */
function renderPass(animate = true) {
  const d = TRACKS[state.track][state.lang];
  const o = ORIGINS.find(x => x.id === state.origin);
  $('#passFrom').textContent = o ? o.code : 'ANY';
  $('#passFromName').textContent = o && o.id !== 'world' ? o[state.lang] : t().anywhere;
  $('#passTitle').textContent = d.title;
  $('#passIntro').textContent = d.intro;
  $('#passList').innerHTML = d.items.map(([b, s]) => `<li><b>${esc(b)}</b><span>${esc(s)}</span></li>`).join('');
  $('#passTrack').textContent = d.name;
  $('#passFormat').textContent = d.format;
  $('#passCta').textContent = d.cta;
  $$('#trackTabs button').forEach(b => b.setAttribute('aria-selected', b.dataset.track === state.track));
  if (animate && !reduced) { const p = $('#pass'); p.classList.remove('swap'); void p.offsetWidth; p.classList.add('swap'); }
}
$$('#trackTabs button').forEach(b => b.addEventListener('click', () => { state.track = b.dataset.track; renderPass(); }));
$('#trackTabs').addEventListener('keydown', e => {
  if (!['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'].includes(e.key)) return;
  const keys = Object.keys(TRACKS); let i = keys.indexOf(state.track);
  i = (i + (['ArrowDown', 'ArrowRight'].includes(e.key) ? 1 : -1) + keys.length) % keys.length;
  state.track = keys[i]; renderPass(); $(`#trackTabs [data-track="${keys[i]}"]`).focus(); e.preventDefault();
});
$('#passCta').addEventListener('click', () => { state.formTrack = state.track; renderFormTracks(); });

/* ---------- How it works: scroll-driven route + tap to expand ---------- */
const stops = $$('.stop');
let userPickedStop = false;
function openStop(stop) {
  stops.forEach(s => { const on = s === stop; s.classList.toggle('open', on); $('.stop-head', s).setAttribute('aria-expanded', on); });
}
stops.forEach(s => $('.stop-head', s).addEventListener('click', () => { userPickedStop = true; openStop(s); }));
openStop(stops[0]);
function updateRoute() {
  const route = $('#route'); const r = route.getBoundingClientRect();
  const mid = innerHeight * .55;
  const fill = Math.min(1, Math.max(0, (mid - r.top - 28) / (r.height - 56)));
  route.style.setProperty('--fill', fill.toFixed(3));
  let current = stops[0];
  stops.forEach(s => { if (s.getBoundingClientRect().top < mid) current = s; });
  stops.forEach(s => {
    const idx = +s.dataset.step, cur = +current.dataset.step;
    s.classList.toggle('passed', idx < cur); s.classList.toggle('current', idx === cur);
  });
  $('#howCount').textContent = current.dataset.step;
  if (!userPickedStop && !current.classList.contains('open')) openStop(current);
}

/* ---------- About values ---------- */
$$('.value').forEach(v => v.addEventListener('click', () => $$('.value').forEach(x => x.classList.toggle('on', x === v))));

/* ---------- University logos: auto-scroll left, click a logo to stop ---------- */
const unisTrack = $('#unisTrack'), unisName = $('#unisName');
let uniPicked = null;
function uniCard(u, i, hidden) {
  const name = u[state.lang];
  return `<button type="button" class="uni" data-i="${i}" aria-label="${esc(name)}" ${hidden ? 'tabindex="-1" aria-hidden="true"' : ''}>
    <img src="${u.logo}" alt="" draggable="false"></button>`;
}
function renderUnis() {
  // repeat the set so one half of the strip is always wider than the screen, then duplicate it for a seamless loop
  const reps = Math.max(1, Math.ceil(2200 / (UNIVERSITIES.length * 150)));
  let half = '';
  for (let r = 0; r < reps; r++) half += UNIVERSITIES.map((u, i) => uniCard(u, i, r > 0)).join('');
  const clone = UNIVERSITIES.map((u, i) => uniCard(u, i, true)).join('').repeat(reps);
  unisTrack.innerHTML = `<div class="unis-row">${half}${clone}</div>`;
  $$('.uni', unisTrack).forEach(b => b.addEventListener('click', () => pickUni(+b.dataset.i, b)));
  pickUni(uniPicked, null, true);
}
function pickUni(i, el, silent) {
  const same = uniPicked === i && (!el || el.classList.contains('on'));
  uniPicked = (!silent && same) ? null : i;
  unisTrack.classList.toggle('paused', uniPicked !== null);
  $$('.uni', unisTrack).forEach(b => b.classList.remove('on'));
  if (uniPicked !== null) (el || $(`.uni[data-i="${uniPicked}"]`, unisTrack)).classList.add('on');
  unisName.textContent = uniPicked !== null ? UNIVERSITIES[uniPicked][state.lang] : '';
}
// clicking anywhere outside the strip resumes the scroll
document.addEventListener('click', e => { if (uniPicked !== null && !e.target.closest('#unis')) pickUni(null, null, true); });

/* ---------- Reviews ---------- */
const countryName = id => { const c = [...ORIGINS, ...MORE_COUNTRIES].find(x => x.id === id); return c ? c[state.lang] : ''; };
const revList = () => REVIEWS.filter(r => state.revTrack === 'all' || r.track === state.revTrack);
function renderReviews() {
  const cats = { all: { ar: 'الكل', en: 'All' } };
  Object.keys(TRACKS).forEach(k => cats[k] = { ar: TRACKS[k].ar.name, en: TRACKS[k].en.name });
  $('#reviewFilters').innerHTML = Object.entries(cats).map(([k, v]) =>
    `<button type="button" class="chip" role="tab" data-rt="${k}" aria-selected="${state.revTrack === k}">${esc(v[state.lang])}</button>`).join('');
  $$('#reviewFilters .chip').forEach(c => c.addEventListener('click', () => { state.revTrack = c.dataset.rt; state.revIndex = 0; renderReviews(); }));

  const list = revList();
  $('#reviewsUI').hidden = !list.length; $('#reviewsEmpty').hidden = !!list.length;
  if (!list.length) return;
  $('#quoteDots').innerHTML = list.map((_, i) => `<button type="button" aria-label="${i + 1}" data-i="${i}"></button>`).join('');
  $$('#quoteDots button').forEach(b => b.addEventListener('click', () => showReview(+b.dataset.i)));
  $('#quoteStrip').innerHTML = list.map((r, i) => `
    <button type="button" class="mini" data-i="${i}">
      <span class="avatar">${esc(r[state.lang].name.trim()[0])}</span>
      <span><b>${esc(r[state.lang].name)}</b><small>${esc(countryName(r.country))} · ${esc(TRACKS[r.track][state.lang].name)}</small></span>
    </button>`).join('');
  $$('#quoteStrip .mini').forEach(b => b.addEventListener('click', () => showReview(+b.dataset.i)));
  const multi = list.length > 1;
  $('.quote-nav').style.visibility = multi ? '' : 'hidden';
  showReview(Math.min(state.revIndex, list.length - 1), false);
}
function showReview(i, animate = true) {
  const list = revList(); if (!list.length) return;
  state.revIndex = (i + list.length) % list.length;
  const r = list[state.revIndex], c = r[state.lang];
  $('#quoteStars').innerHTML = '★★★★★'.split('').map((s, k) => `<span class="${k < r.rating ? '' : 'off'}">★</span>`).join('');
  $('#quoteText').textContent = c.text;
  $('#quoteAvatar').textContent = c.name.trim()[0];
  $('#quoteName').innerHTML = esc(c.name) + (r.sample ? `<span class="sample-tag">${state.lang === 'ar' ? 'نموذج' : 'Sample'}</span>` : '');
  $('#quoteMeta').textContent = `${countryName(r.country)} · ${TRACKS[r.track][state.lang].name}`;
  $$('#quoteDots button').forEach((b, k) => b.setAttribute('aria-current', k === state.revIndex));
  $$('#quoteStrip .mini').forEach((b, k) => b.setAttribute('aria-current', k === state.revIndex));
  if (animate && !reduced) { const q = $('#quote'); q.classList.remove('swap'); void q.offsetWidth; q.classList.add('swap'); }
}
$('#quotePrev').addEventListener('click', () => showReview(state.revIndex - 1));
$('#quoteNext').addEventListener('click', () => showReview(state.revIndex + 1));
$('#reviewsUI').addEventListener('keydown', e => {
  if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
  const forward = (e.key === 'ArrowLeft') === (state.lang === 'ar');
  showReview(state.revIndex + (forward ? 1 : -1));
});
// swipe on touch screens
let sx = null;
$('#quote').addEventListener('pointerdown', e => { sx = e.clientX; });
$('#quote').addEventListener('pointerup', e => {
  if (sx === null) return; const dx = e.clientX - sx; sx = null;
  if (Math.abs(dx) < 50) return;
  const forward = (dx < 0) !== (state.lang === 'ar');
  showReview(state.revIndex + (forward ? 1 : -1));
});

/* ---------- Blog ---------- */
function renderBlog() {
  $('#blogFilters').innerHTML = Object.entries(BLOG_CATEGORIES).map(([k, v]) =>
    `<button type="button" class="chip" role="tab" data-cat="${k}" aria-selected="${state.blogCat === k}">${esc(v[state.lang])}</button>`).join('');
  $$('#blogFilters .chip').forEach(c => c.addEventListener('click', () => { state.blogCat = c.dataset.cat; renderBlog(); }));

  const list = POSTS.filter(p => state.blogCat === 'all' || p.cat === state.blogCat);
  const dateFmt = d => new Date(d).toLocaleDateString(state.lang === 'ar' ? 'ar-EG' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  $('#posts').innerHTML = list.map(p => {
    const c = p[state.lang], cat = BLOG_CATEGORIES[p.cat][state.lang];
    const foot = p.url
      ? `<span>${p.date ? dateFmt(p.date) : ''}</span><span>${t().min(p.minutes)}</span>`
      : `<span>${t().min(p.minutes)}</span><span class="soon-tag">${t().soon}</span>`;
    const inner = `<span class="post-cat">${esc(cat)}</span><h3>${esc(c.title)}</h3><p>${esc(c.excerpt)}</p><div class="post-foot">${foot}</div>`;
    return p.url ? `<a class="post" href="${esc(p.url)}">${inner}</a>` : `<article class="post soon">${inner}</article>`;
  }).join('');
  $('#postsEmpty').hidden = list.length > 0;
}

/* ---------- Contact form → WhatsApp ---------- */
function renderCountrySelect() {
  const sel = $('#countrySelect'); const prev = sel.value;
  const gulf = ORIGINS.filter(o => o.id !== 'world');
  sel.innerHTML =
    `<optgroup label="${state.lang === 'ar' ? 'دول الخليج' : 'Gulf'}">${gulf.map(o => `<option value="${o.id}">${esc(o[state.lang])}</option>`).join('')}</optgroup>` +
    `<optgroup label="${state.lang === 'ar' ? 'دول أخرى' : 'Other countries'}">${MORE_COUNTRIES.map(o => `<option value="${o.id}">${esc(o[state.lang])}</option>`).join('')}<option value="other">${t().other}</option></optgroup>`;
  if (prev) sel.value = prev;
}
function renderFormTracks() {
  $('#formTracks').innerHTML = Object.keys(TRACKS).map(k =>
    `<button type="button" class="chip" role="radio" data-track="${k}" aria-checked="${state.formTrack === k}">${esc(TRACKS[k][state.lang].name)}</button>`).join('');
  $$('#formTracks .chip').forEach(c => c.addEventListener('click', () => { state.formTrack = c.dataset.track; renderFormTracks(); }));
}
const form = $('#leadForm');
const formHTML = form.innerHTML;
function bindForm() {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const err = $('#formError'); if (!err) return;
    const name = form.elements.name.value.trim(), phone = form.elements.phone.value.trim();
    [form.elements.name, form.elements.phone].forEach(i => i.classList.remove('invalid'));
    let msg = '';
    if (name.length < 3) { msg = t().errName; form.elements.name.classList.add('invalid'); }
    else if (phone.replace(/\D/g, '').length < 8) { msg = t().errPhone; form.elements.phone.classList.add('invalid'); }
    else if (!state.formTrack) { msg = t().errTrack; }
    if (msg) { err.textContent = msg; err.hidden = false; return; }
    const sel = form.elements.country;
    const text = t().msg({ name, phone, country: sel.options[sel.selectedIndex].text, track: TRACKS[state.formTrack][state.lang].name, message: form.elements.message.value.trim() });
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener');
    form.innerHTML = `<div class="form-sent"><h3>${t().sentTitle}</h3><p>${t().sentBody}</p>
      <a class="btn btn-solid btn-block" href="${url}" target="_blank" rel="noopener">${t().openWa}</a>
      <button type="button" class="btn btn-line btn-block" id="formAgain" style="margin-top:10px">${t().again}</button></div>`;
    $('#formAgain').addEventListener('click', () => { form.innerHTML = formHTML; renderCountrySelect(); renderFormTracks(); });
  });
}
bindForm();

function renderAll() { renderUnis(); renderOrigins(); renderPass(false); renderReviews(); renderBlog(); if ($('#countrySelect')) { renderCountrySelect(); renderFormTracks(); } }

/* ---------- Header menu ---------- */
const menuBtn = $('#menuBtn'), links = $('#links');
function setMenu(open) { links.classList.toggle('open', open); menuBtn.setAttribute('aria-expanded', open); $('#head').classList.toggle('menu-open', open); }
menuBtn.addEventListener('click', e => { e.stopPropagation(); setMenu(!links.classList.contains('open')); });
$$('#links a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('click', e => { if (links.classList.contains('open') && !e.target.closest('#links')) setMenu(false); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

/* =====================================================================
   Cinematic scroll: background fixed, content rises over it
   ===================================================================== */
const root = document.documentElement;
const photo = $('#photo'), heroCopy = $('#heroCopy'), originCard = $('#originCard'), head = $('#head');
const rail = $('#rail'), railFill = $('#railFill'), railPlane = $('#railPlane');
if (!SHOW_REVIEWS) {
  $('#reviews').hidden = true;
  $$('a[href="#reviews"]').forEach(a => { (a.closest('li') || a).hidden = true; });
}
const sectionIds = ['top', 'tracks', 'how', 'about', 'reviews', 'blog', 'contact'].filter(id => !document.getElementById(id).hidden);
const sections = sectionIds.map(id => document.getElementById(id));
let px = 0, py = 0, cx = 0, cy = 0, ticking = false;

function onScroll() {
  const max = root.scrollHeight - innerHeight;
  const y = scrollY, p = max > 0 ? Math.min(1, y / max) : 0;
  root.style.setProperty('--scroll', p.toFixed(4));
  head.classList.toggle('solid', y > 40);

  // hero text drifts up and fades faster than the page — the photo stays put
  if (!reduced) {
    const h = Math.min(1, y / innerHeight);
    heroCopy.style.translate = `0 ${-h * 120}px`;
    heroCopy.style.opacity = 1 - h * 1.3;
  }

  // journey rail
  rail.classList.toggle('show', y > innerHeight * .95);
  railFill.style.strokeDashoffset = 400 - 400 * p;
  railPlane.style.top = `${p * 100}%`;
  let active = 0;
  sections.forEach((s, i) => { if (s.getBoundingClientRect().top < innerHeight * .45) active = i; });
  $$('.rail a').forEach(a => { const i = sectionIds.indexOf(a.dataset.target); a.classList.toggle('here', i === active); a.classList.toggle('passed', i > -1 && i < active); });
  $$('#links a').forEach(a => a.classList.toggle('here', a.getAttribute('href') === '#' + sectionIds[active]));

  updateRoute();
  ticking = false;
}
addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
addEventListener('resize', onScroll);

// pointer parallax on the photo and the glass card
if (!reduced && matchMedia('(pointer: fine)').matches) {
  addEventListener('pointermove', e => { px = e.clientX / innerWidth - .5; py = e.clientY / innerHeight - .5; });
  (function frame() {
    cx += (px - cx) * .06; cy += (py - cy) * .06;
    const s = parseFloat(getComputedStyle(root).getPropertyValue('--scroll')) || 0;
    photo.style.transform = `translate3d(${cx * -22}px, ${cy * -12}px, 0) scale(${1.06 + s * .08})`;
    if (originCard) originCard.style.translate = `${cx * 14}px ${cy * 10}px`;
    requestAnimationFrame(frame);
  })();
}

/* ---------- Boot ---------- */
let startLang = 'ar';
try { startLang = new URLSearchParams(location.search).get('lang') || localStorage.getItem('masar-lang') || 'ar'; } catch (e) {}
setLang(startLang === 'en' ? 'en' : 'ar');
onScroll();
requestAnimationFrame(() => requestAnimationFrame(() => document.body.classList.add('loaded')));
