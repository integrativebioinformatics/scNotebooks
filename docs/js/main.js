/* Single Cell Notebooks — site behaviour
   No third-party runtime dependencies. */
(function () {
  'use strict';

  var LS_THEME = 'scn-theme', LS_LANG = 'scn-lang';
  var root = document.documentElement;
  var $  = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ---------------- Theme ---------------- */
  function applyTheme(mode) {
    if (mode === 'light' || mode === 'dark') root.setAttribute('data-theme', mode);
    else root.removeAttribute('data-theme');
    $$('[data-theme-toggle]').forEach(function (b) {
      var dark = root.getAttribute('data-theme') === 'dark' ||
        (!root.hasAttribute('data-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
      var i = b.querySelector('.icon');
      if (i) i.className = 'icon ' + (dark ? 'icon-sun' : 'icon-moon');
      b.setAttribute('aria-pressed', dark ? 'true' : 'false');
    });
  }
  function currentDark() {
    return root.getAttribute('data-theme') === 'dark' ||
      (!root.hasAttribute('data-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  }
  function initTheme() {
    applyTheme(localStorage.getItem(LS_THEME));
    $$('[data-theme-toggle]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var next = currentDark() ? 'light' : 'dark';
        try { localStorage.setItem(LS_THEME, next); } catch (e) {}
        applyTheme(next);
      });
    });
  }

  /* ---------------- i18n ---------------- */
  var LANGS = window.SCN_LANGS || [];
  var DICT  = window.SCN_I18N || {};
  var PATHS = window.SCN_MODULE_PATHS || {};
  var codes = LANGS.map(function (l) { return l.code; });

  function pickLang() {
    var q = new URLSearchParams(location.search).get('lang');
    if (q && codes.indexOf(q) > -1) return q;
    var saved; try { saved = localStorage.getItem(LS_LANG); } catch (e) {}
    if (saved && codes.indexOf(saved) > -1) return saved;
    var navs = (navigator.languages || [navigator.language || 'en']);
    for (var i = 0; i < navs.length; i++) {
      var n = navs[i].toLowerCase();
      if (n.indexOf('pt') === 0) return 'pt';
      if (n.indexOf('es') === 0) return 'es';
      if (n.indexOf('zh') === 0) return 'zh';
      if (n.indexOf('en') === 0) return 'en';
    }
    return 'en';
  }

  function t(lang, key) {
    var d = DICT[lang] || DICT.en || {};
    return (key in d) ? d[key] : ((DICT.en || {})[key] || '');
  }

  function moduleHref(lang, n, depth) {
    var p = PATHS[lang] || PATHS.en; if (!p) return '#';
    var nn = (n < 10 ? '0' : '') + n;
    return (depth || '') + 'modules/' + p.dir + '/' + p.slug + nn + '/' + p.slug + nn + '.html';
  }

  /* Scripts Poppins does not cover: load a matching Noto face on demand */
  var EXTRA_FONTS = {
    zh:'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;600;700&display=swap'
  };
  function loadScriptFont(lang) {
    var href = EXTRA_FONTS[lang];
    if (!href || document.getElementById('scn-font-' + lang)) return;
    var l = document.createElement('link');
    l.id = 'scn-font-' + lang; l.rel = 'stylesheet'; l.href = href;
    document.head.appendChild(l);
  }

  function applyLang(lang, persist) {
    var meta = null;
    for (var i = 0; i < LANGS.length; i++) if (LANGS[i].code === lang) meta = LANGS[i];
    if (!meta) { meta = LANGS[0] || { code: 'en', html: 'en' }; lang = meta.code; }

    loadScriptFont(lang);
    root.setAttribute('lang', meta.html);
    root.setAttribute('data-lang', lang);

    $$('[data-i18n]').forEach(function (el) {
      var v = t(lang, el.getAttribute('data-i18n')); if (v) el.textContent = v;
    });
    $$('[data-i18n-html]').forEach(function (el) {
      var v = t(lang, el.getAttribute('data-i18n-html')); if (v) el.innerHTML = v;
    });
    $$('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split('|').forEach(function (pair) {
        var bits = pair.split(':'); var v = t(lang, bits[1]);
        if (v) el.setAttribute(bits[0], v);
      });
    });
    var mt = t(lang, 'meta.title'); if (mt && document.body.hasAttribute('data-i18n-doctitle')) document.title = mt;
    var md = $('meta[name="description"]'), mdv = t(lang, 'meta.desc');
    if (md && mdv && document.body.hasAttribute('data-i18n-doctitle')) md.setAttribute('content', mdv);

    /* Module links follow the chosen language pack */
    var depth = document.body.getAttribute('data-depth') || '';
    $$('[data-module]').forEach(function (a) {
      a.setAttribute('href', moduleHref(lang, parseInt(a.getAttribute('data-module'), 10), depth));
    });

    /* Language switcher state */
    $$('[data-lang-code]').forEach(function (b) {
      b.setAttribute('aria-current', b.getAttribute('data-lang-code') === lang ? 'true' : 'false');
    });
    $$('.lang-current').forEach(function (s) { s.textContent = lang.toUpperCase(); });

    if (persist !== false) { try { localStorage.setItem(LS_LANG, lang); } catch (e) {} }
    root.classList.remove('i18n-pending');
  }

  function initLang() {
    if (!LANGS.length) { root.classList.remove('i18n-pending'); return; }
    var pageLang = document.body.getAttribute('data-page-lang');
    var lang, persist = true;
    if (pageLang) {
      lang = pageLang;
      persist = false;
    } else {
      lang = pickLang();
    }
    applyLang(lang, persist);
    $$('[data-lang-code]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var code = btn.getAttribute('data-lang-code');
        var pageLang = document.body.getAttribute('data-page-lang');
        if (pageLang && pageLang !== code) {          /* module pages: navigate */
          var n = parseInt(document.body.getAttribute('data-page-module') || '0', 10);
          try { localStorage.setItem(LS_LANG, code); } catch (e) {}
          if (n) { location.href = moduleHref(code, n, document.body.getAttribute('data-depth') || ''); return; }
        }
        applyLang(code, true);
        closeLangMenu();
      });
    });
  }

  /* ---------------- Language dropdown ---------------- */
  function closeLangMenu() {
    $$('.lang.open').forEach(function (w) {
      w.classList.remove('open');
      var b = w.querySelector('[aria-expanded]'); if (b) b.setAttribute('aria-expanded', 'false');
    });
  }
  function initLangMenu() {
    $$('.lang').forEach(function (wrap) {
      var btn = wrap.querySelector('.lang-btn');
      if (!btn) return;
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var open = wrap.classList.toggle('open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    });
    document.addEventListener('click', closeLangMenu);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLangMenu(); });
  }

  /* ---------------- Mobile menu ---------------- */
  function initMobileMenu() {
    var btn = $('.hamburger-button'), menu = $('.mobile-menu');
    if (!btn || !menu) return;
    var scrim = $('.nav-scrim');
    if (!scrim) { scrim = document.createElement('div'); scrim.className = 'nav-scrim'; document.body.appendChild(scrim); }
    function setOpen(open) {
      menu.classList.toggle('active', open);
      scrim.classList.toggle('active', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
      if (open) { var f = menu.querySelector('a,button'); if (f) f.focus(); }
    }
    btn.setAttribute('aria-expanded', 'false');
    btn.addEventListener('click', function () { setOpen(!menu.classList.contains('active')); });
    scrim.addEventListener('click', function () { setOpen(false); });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('active')) { setOpen(false); btn.focus(); }
    });
  }

  /* ---------------- Sticky nav shadow ---------------- */
  function initStickyNav() {
    var nav = $('.navbar'); if (!nav) return;
    var onScroll = function () { nav.classList.toggle('is-stuck', window.scrollY > 8); };
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------------- Accordion ---------------- */
  function initAccordion() {
    var container = $('.mod-content'); if (!container) return;
    var headers = $$('.mod-group-header', container);
    headers.forEach(function (h, idx) {
      if (h.tagName !== 'BUTTON') return;
      var body = h.parentElement.querySelector('.mod-group-body');
      if (!body) return;
      if (!body.id) body.id = 'mod-body-' + (idx + 1);
      h.setAttribute('aria-controls', body.id);
      h.setAttribute('aria-expanded', body.classList.contains('open') ? 'true' : 'false');
      h.addEventListener('click', function () {
        var open = !body.classList.contains('open');
        headers.forEach(function (o) {
          var ob = o.parentElement.querySelector('.mod-group-body');
          if (!ob) return;
          ob.classList.remove('open'); o.setAttribute('aria-expanded', 'false');
        });
        if (open) { body.classList.add('open'); h.setAttribute('aria-expanded', 'true'); }
      });
    });
  }

  /* ---------------- Back to top ---------------- */
  function initTopButton() {
    var b = document.getElementById('myBtn'); if (!b) return;
    var onScroll = function () { b.classList.toggle('show', window.scrollY > 400); };
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
    b.addEventListener('click', function () {
      var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    });
  }
  window.topFunction = function () { window.scrollTo({ top: 0, behavior: 'smooth' }); };

  /* ---------------- Copy to clipboard ---------------- */
  function flash(btn, okLabel) {
    var prev = btn.innerHTML;
    btn.classList.add('copied');
    btn.innerHTML = '<i class="fa-solid fa-check"></i>' + (okLabel ? '<span>' + okLabel + '</span>' : '');
    setTimeout(function () { btn.innerHTML = prev; btn.classList.remove('copied'); }, 1800);
  }
  function copyText(text, btn, okLabel) {
    var done = function () { flash(btn, okLabel); };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(done).catch(function () { fallback(text, done); });
    } else fallback(text, done);
  }
  function fallback(text, done) {
    var ta = document.createElement('textarea');
    ta.value = text; ta.setAttribute('readonly', '');
    ta.style.cssText = 'position:absolute;left:-9999px';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); done(); } catch (e) {}
    document.body.removeChild(ta);
  }
  function initCopy() {
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('.copy-btn, [data-copy]');
      if (!btn) return;
      e.preventDefault();
      var text;
      if (btn.hasAttribute('data-copy')) {
        var src = document.querySelector(btn.getAttribute('data-copy'));
        text = src ? (src.innerText || src.textContent) : '';
      } else {
        var pre = btn.nextElementSibling;
        while (pre && pre.tagName !== 'PRE') pre = pre.nextElementSibling;
        if (!pre) pre = btn.parentElement.querySelector('pre');
        text = pre ? pre.innerText : '';
      }
      if (text) copyText(text.replace(/^\n+|\s+$/g, ''), btn, btn.getAttribute('data-ok') || '');
    });
    $$('.copy-btn').forEach(function (b) {
      if (!b.getAttribute('type')) b.setAttribute('type', 'button');
      if (!b.getAttribute('aria-label')) b.setAttribute('aria-label', b.getAttribute('title') || 'Copy code');
    });
  }

  /* ---------------- Lightweight R syntax highlighting ----------------
     Replaces highlight.js (~120 KB) with ~1 KB of local code.        */
  var R_KW = { 'if':1,'else':1,'for':1,'while':1,'repeat':1,'function':1,'return':1,'break':1,
               'next':1,'in':1,'TRUE':1,'FALSE':1,'NULL':1,'NA':1,'Inf':1,'NaN':1,
               'NA_integer_':1,'NA_real_':1,'NA_character_':1 };
  var R_RX = /(#[^\n]*)|("(?:[^"\\]|\\[\s\S])*"|'(?:[^'\\]|\\[\s\S])*')|(\b\d[\d.]*(?:[eE][+-]?\d+)?[Li]?\b)|([A-Za-z.][A-Za-z0-9._]*)|(%[^%\s]*%|<<-|->>|<-|->|\|>|==|!=|<=|>=|&&|\|\||[-+*\/^<>=!&|~?:$@])/g;

  function esc(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function highlightR(src) {
    var out = '', last = 0, m;
    R_RX.lastIndex = 0;
    while ((m = R_RX.exec(src)) !== null) {
      out += esc(src.slice(last, m.index));
      last = R_RX.lastIndex;
      if (m[1]) out += '<span class="hl-com">' + esc(m[1]) + '</span>';
      else if (m[2]) out += '<span class="hl-str">' + esc(m[2]) + '</span>';
      else if (m[3]) out += '<span class="hl-num">' + esc(m[3]) + '</span>';
      else if (m[4]) {
        var w = m[4], rest = src.slice(last), cls = '';
        if (R_KW[w]) cls = 'hl-kw';
        else if (/^\s*\(/.test(rest)) cls = 'hl-fn';
        else if (/^\s*=(?!=)/.test(rest)) cls = 'hl-arg';
        out += cls ? '<span class="' + cls + '">' + esc(w) + '</span>' : esc(w);
      } else out += '<span class="hl-op">' + esc(m[5]) + '</span>';
    }
    out += esc(src.slice(last));
    return out;
  }
  function initHighlight() {
    var blocks = $$('pre code.language-r, pre code.r, .code-container pre code');
    if (!blocks.length) return;
    var run = function (el) {
      if (el.dataset.hl) return;
      el.dataset.hl = '1';
      var txt = el.textContent.replace(/^[ \t]*\n+/, '').replace(/\s+$/, '');
      if (txt.length > 60000) return;
      el.innerHTML = highlightR(txt);
    };
    if (!('IntersectionObserver' in window)) { blocks.forEach(run); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { run(en.target); io.unobserve(en.target); }
      });
    }, { rootMargin: '600px 0px' });
    blocks.forEach(function (b) { io.observe(b); });
  }

  /* ---------------- Reveal on scroll ---------------- */
  function initReveal() {
    var els = $$('.reveal'); if (!els.length) return;
    if (!('IntersectionObserver' in window) ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach(function (e) { e.classList.add('in'); }); return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---------------- Section highlighting in nav ---------------- */
  function initScrollSpy() {
    var links = $$('.main-menu a[href^="#"]'); if (!links.length) return;
    var map = {};
    links.forEach(function (a) {
      var el = document.getElementById(a.getAttribute('href').slice(1));
      if (el) map[el.id] = a;
    });
    var ids = Object.keys(map); if (!ids.length || !('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          links.forEach(function (a) { a.removeAttribute('aria-current'); });
          map[en.target.id].setAttribute('aria-current', 'page');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    ids.forEach(function (id) { io.observe(document.getElementById(id)); });
  }

  /* ---------------- External link hygiene ---------------- */
  function initLinks() {
    $$('a[target="_blank"]').forEach(function (a) {
      if (!a.getAttribute('rel')) a.setAttribute('rel', 'noopener noreferrer');
    });
  }

  /* ---------------- Boot ---------------- */
  function boot() {
    initTheme();
    initLang();
    initLangMenu();
    initMobileMenu();
    initStickyNav();
    initAccordion();
    initTopButton();
    initCopy();
    initHighlight();
    initReveal();
    initScrollSpy();
    initLinks();
    root.classList.remove('i18n-pending');
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();

  /* safety: never leave the page hidden */
  setTimeout(function () { root.classList.remove('i18n-pending'); }, 1200);
})();
