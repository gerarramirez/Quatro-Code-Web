(function () {
  var dots = document.querySelectorAll("#q-mark .dot");
  var rows = document.querySelectorAll("#team li");
  var caption = document.getElementById("q-caption");
  var names = [
    "Gerardo de Jesús Ramírez Ramos",
    "Luis Eduardo Vázquez Villalta",
    "Carlos Francisco Torres Rodríguez",
    "Brian Alejandro Rogel Ángel"
  ];
  var idle = caption ? caption.textContent : "";

  function set(i) {
    dots.forEach(function (d) { d.classList.toggle("active", i !== null && +d.dataset.i === i); });
    rows.forEach(function (r) { r.classList.toggle("active", i !== null && +r.dataset.i === i); });
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
})();
