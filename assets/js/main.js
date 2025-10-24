
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (nav.classList.contains('open')){
          nav.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // Theme is always dark; removed toggle logic

  // Optional: swap BASE_URL placeholders for local preview
  const base = document.querySelector('link[rel=canonical]')?.getAttribute('href') || '';
  document.querySelectorAll('script[type="application/ld+json"]').forEach(s => {
    try { s.textContent = s.textContent.replaceAll('{BASE_URL}', base); } catch(e){}
  });
  document.querySelectorAll('meta[property="og:url"], meta[property="og:image"], link[rel="canonical"]').forEach(el => {
    const v = el.getAttribute('content') || el.getAttribute('href');
    if (v && v.includes('{BASE_URL}')){
      const updated = v.replace('{BASE_URL}', base);
      if (el.hasAttribute('content')) el.setAttribute('content', updated);
      if (el.hasAttribute('href')) el.setAttribute('href', updated);
    }
  });
});
