/* vinx.hu cookie banner. Add before </body>: <script src="/cookie-banner.js" defer></script>
   Put any tracking/analytics loader inside loadOptionalScripts(); it only runs after Accept. */
(function () {
  var KEY = 'cookie-consent';
  function loadOptionalScripts() {
    // e.g. add the Google Analytics script here
  }
  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  if (saved === 'accepted') { loadOptionalScripts(); return; }
  if (saved === 'declined') return;

  var css = document.createElement('style');
  css.textContent = '#cc-bar{position:fixed;left:50%;bottom:16px;transform:translateX(-50%);width:min(720px,calc(100% - 24px));z-index:9999;background:#2e2623;color:#e8ddd0;padding:1rem 1.25rem;border-radius:14px;box-shadow:0 8px 30px rgba(58,42,37,.35);display:flex;flex-wrap:wrap;gap:.75rem 1rem;align-items:center;justify-content:space-between;font:15px/1.5 "PT Serif",Georgia,serif}' +
    '#cc-bar a{color:#fff}#cc-bar span{flex:1 1 280px}#cc-bar button{font:inherit;border-radius:999px;padding:.5rem 1.4rem;cursor:pointer}' +
    '#cc-yes{background:#e8ddd0;color:#2e2623;border:1px solid #e8ddd0}#cc-no{background:transparent;color:#e8ddd0;border:1px solid #e8ddd0}' +
    '#cc-bar button:focus-visible{outline:3px solid #fff;outline-offset:2px}';
  document.head.appendChild(css);

  var bar = document.createElement('div');
  bar.id = 'cc-bar';
  bar.setAttribute('role', 'dialog');
  bar.setAttribute('aria-label', 'Cookie consent');
  bar.innerHTML = '<span>We use cookies to understand how the site is used. See our <a href="privacy.html">privacy policy</a>.</span>' +
    '<button id="cc-no" type="button">Decline</button><button id="cc-yes" type="button">Accept</button>';
  document.body.appendChild(bar);

  function choose(v) {
    try { localStorage.setItem(KEY, v); } catch (e) {}
    bar.remove();
    if (v === 'accepted') loadOptionalScripts();
  }
  document.getElementById('cc-yes').onclick = function () { choose('accepted'); };
  document.getElementById('cc-no').onclick = function () { choose('declined'); };
})();
