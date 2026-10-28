(function () {
    var T = [["esmeralda", "Esmeralda"], ["atardecer", "Atardecer"], ["lavanda", "Lavanda"], ["dark", "Noche"]], r = document.documentElement, b = document.getElementById('theme'), i = 0;
    try { var s = localStorage.getItem('theme'); var j = T.findIndex(function (t) { return t[0] === s }); if (j > -1) i = j } catch (e) { }
    function ap() { r.dataset.theme = T[i][0]; b.textContent = 'Tema: ' + T[i][1]; b.setAttribute('aria-label', 'Cambiar tema. Actual: ' + T[i][1]); try { localStorage.setItem('theme', T[i][0]) } catch (e) { } }
    ap(); b.addEventListener('click', function () { i = (i + 1) % T.length; ap() })
})();
(function () {
    var HERO_IMG = 'https://blog.nubox.com/hs-fs/hubfs/C%C3%B3mo%20gestionar%20las%20redes%20sociales%20de%20una%20empresa.jpeg?width=650&height=450&name=C%C3%B3mo%20gestionar%20las%20redes%20sociales%20de%20una%20empresa.jpeg'; // o una ruta local, ej: 'img/fondo.jpg'
    var bg = document.getElementById('heroBg');
    if (HERO_IMG && HERO_IMG.indexOf('URL_') !== 0) {
        bg.style.backgroundImage = 'url("' + HERO_IMG + '")';
        bg.classList.add('custom');
    }
})();
/* imágenes: se amplían un poco al acercar el cursor y, con clic, se abre la imagen completa */
(function () {
    var hover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    var slots = document.querySelectorAll('.slot.has');
    var lb = document.createElement('div');
    lb.className = 'lb'; lb.hidden = true;
    lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-modal', 'true'); lb.setAttribute('aria-label', 'Imagen ampliada');
    lb.innerHTML = '<button type="button" class="lb-x" aria-label="Cerrar imagen">\u00d7</button><figure><img alt=""><figcaption></figcaption></figure>';
    document.body.appendChild(lb);
    var img = lb.querySelector('img'), cap = lb.querySelector('figcaption'), x = lb.querySelector('.lb-x'), last = null;
    function openLb(s) {
        var im = s.querySelector('img');
        img.src = im.currentSrc || im.src; img.alt = im.alt; cap.textContent = im.alt;
        s.classList.remove('open'); last = s;
        lb.hidden = false; document.body.style.overflow = 'hidden'; x.focus();
    }
    function closeLb() {
        if (lb.hidden) return;
        lb.hidden = true; img.removeAttribute('src'); document.body.style.overflow = '';
        if (last) last.focus({ preventScroll: true });
    }
    slots.forEach(function (s) {
        s.addEventListener('mouseenter', function () { if (hover) s.classList.add('open') });
        s.addEventListener('mouseleave', function () { s.classList.remove('open') });
        s.addEventListener('click', function () { openLb(s) });
        s.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLb(s) }
        });
    });
    lb.addEventListener('click', closeLb);
    document.addEventListener('keydown', function (e) {
        if (lb.hidden) return;
        if (e.key === 'Escape') closeLb();
        if (e.key === 'Tab') { e.preventDefault(); x.focus() }
    });
})();