/* ============ AYARLAR ============ */
const WHATSAPP_NUMBER = '905528173422'; // Başında + olmadan, ülke koduyla
const WHATSAPP_TEXT = 'Merhaba, web sitesi için teklif almak istiyorum.';
const PHONE_DISPLAY = '+90 552 817 3422'; // Ekranda görünen telefon
const EMAIL = 'merhaba@pixelatolye.com';
const INSTAGRAM_HANDLE = '@pixelatolye';
const INSTAGRAM_URL = 'https://instagram.com/pixelatolye';

/* ============ PROJE VERİLERİ & MOCKUP ============ */
function mockup(c1, c2, label) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs>
    <rect width="800" height="500" fill="#0f1117"/>
    <rect x="60" y="50" width="680" height="400" rx="24" fill="#171a22" stroke="#ffffff" stroke-opacity=".08"/>
    <circle cx="100" cy="86" r="6" fill="#ffffff" fill-opacity=".25"/><circle cx="122" cy="86" r="6" fill="#ffffff" fill-opacity=".18"/><circle cx="144" cy="86" r="6" fill="#ffffff" fill-opacity=".12"/>
    <rect x="90" y="118" width="620" height="170" rx="18" fill="url(#g)"/>
    <rect x="120" y="150" width="300" height="22" rx="11" fill="#fff" fill-opacity=".9"/>
    <rect x="120" y="186" width="220" height="12" rx="6" fill="#fff" fill-opacity=".55"/>
    <rect x="120" y="230" width="110" height="34" rx="17" fill="#fff"/>
    <rect x="90" y="310" width="196" height="110" rx="16" fill="#fff" fill-opacity=".06"/>
    <rect x="302" y="310" width="196" height="110" rx="16" fill="#fff" fill-opacity=".06"/>
    <rect x="514" y="310" width="196" height="110" rx="16" fill="#fff" fill-opacity=".06"/>
    <text x="400" y="480" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#ffffff" fill-opacity=".35">${label}</text>
  </svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

const projects = [
  {
    title: 'Klinik Psikolog Randevu Sitesi',
    category: 'Sağlık & Danışmanlık',
    description: 'Sakin ve güven veren bir arayüz, tek dokunuşla WhatsApp randevusu ve yerel aramalar için optimize edilmiş içerik yapısı.',
    image: mockup('#10b981', '#047857', 'Klinik Psikolog Randevu Sitesi'),
    tags: ['Randevu', 'Yerel SEO', 'Mobil Öncelikli'],
    liveUrl: '#'
  },
  {
    title: 'Peyzaj & Bahçe Hizmetleri Portföyü',
    category: 'Hizmet & Portföy',
    description: 'Önce-sonra galerileri ve hizmet bölgelerini öne çıkaran, görsel ağırlıklı ama hafif kalan bir portföy sitesi.',
    image: mockup('#f59e0b', '#b45309', 'Peyzaj & Bahçe Hizmetleri'),
    tags: ['Galeri', 'Hızlı Yükleme', 'Teklif Formu'],
    liveUrl: 'https://ustaellerbahce.com/'
  },
  {
    title: 'Yerel İşletme Vitrin Sitesi',
    category: 'Esnaf & KOBİ',
    description: 'Çalışma saatleri, harita ve ürün vitrini bir arada; müşterilerin işletmeyi saniyeler içinde bulup aramasını sağlayan sade bir site.',
    image: mockup('#f97316', '#9a3412', 'Yerel İşletme Vitrin Sitesi'),
    tags: ['Vitrin', 'Harita', 'Google İşletme'],
    liveUrl: '#'
  }
];

/* ============ YARDIMCILAR & STATİK ALANLAR ============ */
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// WhatsApp bağlantıları
const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;
document.querySelectorAll('[data-wa]').forEach(a => a.href = waHref);

// Telefon / e-posta / Instagram bağlantıları
document.querySelectorAll('[data-phone-link]').forEach(a => a.href = `tel:+${WHATSAPP_NUMBER}`);
document.querySelectorAll('[data-phone-text]').forEach(el => el.textContent = PHONE_DISPLAY);
document.querySelectorAll('[data-mail-link]').forEach(a => a.href = `mailto:${EMAIL}`);
document.querySelectorAll('[data-mail-text]').forEach(el => el.textContent = EMAIL);
document.querySelectorAll('[data-ig-link]').forEach(a => a.href = INSTAGRAM_URL);
document.querySelectorAll('[data-ig-text]').forEach(el => el.textContent = INSTAGRAM_HANDLE);

// Görsel hata kontrolü
const aboutImg = document.getElementById('about-img');
if (aboutImg) {
  aboutImg.addEventListener('error', () => { aboutImg.src = mockup('#f59e0b', '#92400e', 'Çalışma Alanı'); }, { once: true });
}

// Yıl bilgisi
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

/* ============ PROJELERİ LİSTELEME ============ */
const grid = document.getElementById('projects-grid');
if (grid) {
  grid.innerHTML = projects.map((p, i) => `
    <article class="reveal card rounded-2xl overflow-hidden flex flex-col" style="--d:${i * 90}ms">
      <div class="overflow-hidden aspect-[16/10] bg-zinc-900">
        <img src="${esc(p.image)}" alt="${esc(p.title)} ekran görüntüsü" loading="lazy" class="zoom-img w-full h-full object-cover" />
      </div>
      <div class="p-6 flex flex-col flex-1">
        <span class="text-xs font-bold text-amber-400 tracking-wide">${esc(p.category)}</span>
        <h3 class="mt-2 text-lg font-bold text-white tracking-tight">${esc(p.title)}</h3>
        <p class="mt-2 text-sm text-zinc-400 leading-relaxed">${esc(p.description)}</p>
        <div class="mt-4 flex flex-wrap gap-2">
          ${p.tags.map(t => `<span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300">${esc(t)}</span>`).join('')}
        </div>
        <a href="${esc(p.liveUrl)}" target="_blank" rel="noopener" class="mt-6 pt-1 inline-flex items-center gap-1.5 text-sm font-bold text-amber-400 hover:text-amber-300 transition">
          Canlı Siteyi Gör
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M7 17L17 7M8 7h9v9"/></svg>
        </a>
      </div>
    </article>
  `).join('');
}

/* ============ MOBİL MENÜ ============ */
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');
const icoOpen = document.getElementById('ico-open');
const icoClose = document.getElementById('ico-close');

function setMenu(open) {
  if (!menu || !menuBtn) return;
  menu.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', open);
  if (icoOpen) icoOpen.classList.toggle('hidden', open);
  if (icoClose) icoClose.classList.toggle('hidden', !open);
}

if (menuBtn && menu) {
  menuBtn.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
}

/* ============ SCROLL REVEAL ============ */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* ============ PARALLAX ARKA PLAN ============ */
const dot = document.getElementById('dotgrid');
const ga = document.getElementById('glow-a');
const gb = document.getElementById('glow-b');
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let ticking = false;

function parallax() {
  const y = window.scrollY;
  if (dot) dot.style.transform = `translate3d(0, ${-y * 0.18}px, 0)`;
  if (ga) ga.style.transform = `translate3d(0, ${-y * 0.08}px, 0)`;
  if (gb) gb.style.transform = `translate3d(0, ${-y * 0.12}px, 0)`;
  ticking = false;
}

if (!reduce && (dot || ga || gb)) {
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(parallax);
      ticking = true;
    }
  }, { passive: true });
  parallax();
}

/* ============ AKORDEON ============ */
const items = document.querySelectorAll('#faq .acc-item');
items.forEach(item => {
  const btn = item.querySelector('.acc-btn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const willOpen = !item.classList.contains('open');
    items.forEach(i => {
      i.classList.remove('open');
      const b = i.querySelector('.acc-btn');
      if (b) b.setAttribute('aria-expanded', 'false');
    });
    if (willOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

/* ============ FORMSPREE AJAX GÖNDERİMİ ============ */
const form = document.getElementById('quote-form');
const statusEl = document.getElementById('form-status');
const submitBtn = document.getElementById('form-btn');

if (form && statusEl && submitBtn) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    statusEl.className = 'text-sm min-h-[1.25rem]';
    if (!form.checkValidity()) {
      statusEl.textContent = 'Lütfen zorunlu alanları doğru şekilde doldurun.';
      statusEl.classList.add('text-amber-300');
      form.reportValidity();
      return;
    }
    submitBtn.disabled = true;
    const original = submitBtn.textContent;
    submitBtn.textContent = 'Gönderiliyor...';
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        form.reset();
        statusEl.textContent = 'Teşekkürler! Mesajınız ulaştı, en kısa sürede dönüş yapacağım.';
        statusEl.classList.add('text-emerald-400');
      } else {
        throw new Error('Sunucu hatası');
      }
    } catch (err) {
      statusEl.textContent = 'Gönderilemedi. Lütfen tekrar deneyin veya WhatsApp\'tan yazın.';
      statusEl.classList.add('text-red-400');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = original;
    }
  });
}

/* ============ TELEFON ALANI FORMATLAMA & SINIRLAMA ============ */
const phoneInput = document.getElementById('phone');

if (phoneInput) {
  phoneInput.addEventListener('focus', () => {
    if (!phoneInput.value.trim()) {
      phoneInput.value = '0';
    }
  });

  phoneInput.addEventListener('input', (e) => {
    let numbers = e.target.value.replace(/\D/g, '');

    if (numbers.length > 0 && !numbers.startsWith('0')) {
      numbers = '0' + numbers;
    }

    numbers = numbers.slice(0, 11);

    let formatted = '';
    if (numbers.length > 0) {
      formatted = numbers.substring(0, 4);
      if (numbers.length > 4) formatted += ' ' + numbers.substring(4, 7);
      if (numbers.length > 7) formatted += ' ' + numbers.substring(7, 9);
      if (numbers.length > 9) formatted += ' ' + numbers.substring(9, 11);
    }

    e.target.value = formatted;
  });

  phoneInput.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && phoneInput.value === '0') {
      phoneInput.value = '';
    }
  });

  phoneInput.addEventListener('blur', () => {
    if (phoneInput.value.trim() === '0') {
      phoneInput.value = '';
    }
  });
}