// Auto-generated runtime loader (thin Canvas shell).
// Self-resolving: commit sha terbaru via GitHub API -> artifact commit-pinned jsDelivr
// (immutable, kebal stale-cache @main). Fallback: @main cdn -> fastly.
(function () {
  var REPO = "arulbarker/canvas-vostudio";
  var MAIN_BASES = ["https://cdn.jsdelivr.net/gh/arulbarker/canvas-vostudio@main","https://fastly.jsdelivr.net/gh/arulbarker/canvas-vostudio@main"];

  var _origAdd = document.addEventListener;
  document.addEventListener = function (type, listener, opts) {
    if (type === 'DOMContentLoaded' && document.readyState !== 'loading') {
      Promise.resolve().then(function () { try { listener(); } catch (e) { console.error(e); } });
      return;
    }
    return _origAdd.call(this, type, listener, opts);
  };

  async function resolveBases() {
    var bases = [];
    try {
      var r = await fetch('https://api.github.com/repos/' + REPO + '/commits/main', { cache: 'no-store' });
      if (r.ok) { var j = await r.json(); if (j && j.sha) bases.push('https://cdn.jsdelivr.net/gh/' + REPO + '@' + j.sha); }
    } catch (e) { console.warn('SHA resolve skipped:', e); }
    return bases.concat(MAIN_BASES);
  }
  async function fetchFirst(bases, path) {
    var lastErr;
    for (var i = 0; i < bases.length; i++) {
      try { var res = await fetch(bases[i] + path, { cache: 'no-cache' }); if (res.ok) return { res: res, base: bases[i] }; lastErr = new Error('HTTP ' + res.status); }
      catch (e) { lastErr = e; }
    }
    throw lastErr || new Error('All CDN bases failed for ' + path);
  }
  async function loadScript(url, isModule) {
    var res = await fetch(url, { cache: 'no-cache' });
    if (!res.ok) throw new Error('Fetch ' + url + ' -> HTTP ' + res.status);
    var code = await res.text();
    var blobUrl = URL.createObjectURL(new Blob([code], { type: 'text/javascript' }));
    return new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = blobUrl; if (isModule) s.type = 'module';
      s.onload = function () { resolve(); };
      s.onerror = function () { reject(new Error('Failed to execute ' + url)); };
      document.body.appendChild(s);
    });
  }
  function showError(msg) {
    document.body.innerHTML = '<div style="padding:24px;color:#1a1420;background:#ffffff;font-family:system-ui;min-height:100vh;">'
      + '<h2 style="margin:0 0 12px">Boot error</h2><pre style="white-space:pre-wrap;word-break:break-word">' + (msg || 'Unknown') + '</pre>'
      + '<p style="margin-top:16px;opacity:.7">Buka DevTools console untuk detail.</p></div>';
  }
  (async function boot() {
    try {
      var bases = await resolveBases();
      var first = await fetchFirst(bases, '/body.html');
      var CDN = first.base;
      console.log('[bootstrap] CDN base:', CDN);
      var bodyHtml = await first.res.text();
      var loader = document.getElementById('__loader');
      if (loader) loader.remove();
      document.body.insertAdjacentHTML('afterbegin', bodyHtml);
      try {
        var cssRes = await fetch(CDN + '/styles.css', { cache: 'no-cache' });
        if (cssRes.ok) {
          var st = document.createElement('style'); st.setAttribute('data-vo-fresh', '1');
          st.textContent = await cssRes.text(); document.head.appendChild(st);
          document.querySelectorAll('link[rel="stylesheet"][href*="styles.css"]').forEach(function (l) {
            if (l.href.indexOf('canvas-vostudio') !== -1) l.parentNode.removeChild(l);
          });
        }
      } catch (cssErr) { console.warn('Style refresh skipped:', cssErr); }
      await loadScript(CDN + '/bundle-classic.js', false);
      await loadScript(CDN + '/bundle-module.js', true);
    } catch (err) {
      console.error('Bootstrap failed:', err);
      showError(err && err.message ? err.message : String(err));
    }
  })();
})();
