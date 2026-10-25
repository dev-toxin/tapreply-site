// Pilot request form — progressive enhancement, no backend, no third parties.
// Builds a readable pre-filled e-mail and opens the user's mail app.
// Future: if form.dataset.endpoint is set, POST there instead (Cloudflare Pages Function / Formspree).
(function () {
  var form = document.getElementById('pilot-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    if (form.dataset.endpoint) return; // a real handler is configured — let the browser submit
    if (!form.reportValidity()) return;
    e.preventDefault();

    var lines = [];
    var labels = {};
    form.querySelectorAll('label, legend').forEach(function (el) {
      var input = el.tagName === 'LEGEND' ? el.parentElement.querySelector('input') : el.querySelector('input, select, textarea');
      var text = el.tagName === 'LEGEND' ? el.textContent : (el.querySelector('span') || {}).textContent;
      if (input && text && !labels[input.name]) labels[input.name] = text.trim();
    });

    var data = new FormData(form);
    var seen = {};
    data.forEach(function (_, key) {
      if (seen[key]) return;
      seen[key] = true;
      var value = data
        .getAll(key)
        .map(function (v) {
          return String(v).trim();
        })
        .filter(Boolean)
        .join(', ');
      if (value) lines.push((labels[key] || key) + ': ' + value);
    });

    var href =
      'mailto:' +
      form.dataset.to +
      '?subject=' +
      encodeURIComponent(form.dataset.subject + (data.get('venue') ? ' — ' + data.get('venue') : '')) +
      '&body=' +
      encodeURIComponent(lines.join('\n') + '\n');
    window.location.href = href;
  });
})();
