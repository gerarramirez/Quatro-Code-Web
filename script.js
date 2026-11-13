(function () {
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var mark = document.getElementById("q-mark");
  var dots = document.querySelectorAll("#q-mark .dot");
  var rows = document.querySelectorAll("#team li");
  var caption = document.getElementById("q-caption");
  var names = [
    "Gerardo Ramírez",
    "Luis Vázquez",
    "Carlos Torres",
    "Bryan Rogel"
  ];
  var idle = caption ? caption.textContent : "";

  // Logo y tarjetas del equipo se iluminan juntos
  function set(i) {
    dots.forEach(function (d) { d.classList.toggle("active", i !== null && +d.dataset.i === i); });
    rows.forEach(function (r) { r.classList.toggle("active", i !== null && +r.dataset.i === i); });
    if (mark) mark.classList.toggle("has-active", i !== null);
    if (caption) {
      caption.textContent = "";
      if (i === null) { caption.textContent = idle; }
      else { var s = document.createElement("strong"); s.textContent = names[i]; caption.appendChild(s); }
    }
  }
  dots.forEach(function (d) {
    var i = +d.dataset.i;
    d.addEventListener("mouseenter", function () { set(i); });
    d.addEventListener("mouseleave", function () { set(null); });
    d.addEventListener("focus", function () { set(i); });
    d.addEventListener("blur", function () { set(null); });
    d.addEventListener("click", function () { set(i); });
  });
  rows.forEach(function (r) {
    var i = +r.dataset.i;
    r.addEventListener("mouseenter", function () { set(i); });
    r.addEventListener("mouseleave", function () { set(null); });
  });

  // Enlaces de redes pendientes: no navegan hasta que tengan URL real.
  document.querySelectorAll("a[data-pending]").forEach(function (a) {
    a.addEventListener("click", function (e) { e.preventDefault(); });
  });
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Todo lo siguiente es movimiento: se omite si la persona prefiere menos movimiento
  var els = document.querySelectorAll("[data-reveal]");
  if (reduce || !("IntersectionObserver" in window)) {
    els.forEach(function (e) { e.classList.add("in"); });
    return;
  }

  // Aparición al hacer scroll
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.15 });
  els.forEach(function (e) { io.observe(e); });

  // Contadores de las cifras
  var counters = document.querySelectorAll("[data-count]");
  var co = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      co.unobserve(en.target);
      var el = en.target, end = +el.dataset.count, t0 = null, dur = 1200;
      function tick(t) {
        if (t0 === null) t0 = t;
        var p = Math.min((t - t0) / dur, 1), e = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(end * e);
        if (p < 1) requestAnimationFrame(tick);
      }
      el.textContent = "0";
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.6 });
  counters.forEach(function (c) { co.observe(c); });

  // Barra de progreso de lectura y línea del proceso
  var bar = document.getElementById("progress"), steps = document.getElementById("steps"), ticking = false;
  function onScroll() {
    var h = document.documentElement.scrollHeight - window.innerHeight;
    if (bar) bar.style.transform = "scaleX(" + (h > 0 ? window.scrollY / h : 0) + ")";
    if (steps) {
      var r = steps.getBoundingClientRect(), vh = window.innerHeight;
      var p = Math.max(0, Math.min(1, (vh * 0.75 - r.top) / (r.height + vh * 0.2)));
      steps.style.setProperty("--p", p.toFixed(3));
    }
    ticking = false;
  }
  window.addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  // El logo del hero sigue suavemente el cursor
  var hero = document.querySelector(".hero");
  if (hero && mark && window.matchMedia("(hover: hover)").matches) {
    hero.addEventListener("pointermove", function (e) {
      var b = hero.getBoundingClientRect();
      var x = (e.clientX - b.left) / b.width - 0.5, yy = (e.clientY - b.top) / b.height - 0.5;
      mark.style.setProperty("--px", (x * 14).toFixed(1) + "px");
      mark.style.setProperty("--py", (yy * 14).toFixed(1) + "px");
    });
    hero.addEventListener("pointerleave", function () { mark.style.setProperty("--px", "0px"); mark.style.setProperty("--py", "0px"); });
  }
})();
