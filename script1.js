var AG = [
    ["Familia", "Informal", "Primer agente de socialización: transmite valores, afecto y límites desde la infancia.", "Aquí se aprende la honestidad, el respeto por lo ajeno y la responsabilidad. Quien creció entendiendo que no se toma lo que no es suyo tenderá a respetar la privacidad de los datos que maneje.", "https://www.shutterstock.com/image-vector/casual-relaxed-family-walking-together-260nw-1316078318.jpg"],
    ["Escuela", "Informal", "Enseña disciplina, respeto a la autoridad y trabajo en equipo.", "Los reglamentos de laboratorio y la integridad académica (no copiar código ni plagiar proyectos) forman el hábito de trabajar con reglas claras antes de llegar al empleo.", "https://www.fides.org/app/webroot/files/appendeds/159/primopiano_15967.jpg"],
    ["Grupos de pares y comunidad", "Informal", "Compañeros de carrera, grupos de estudio y comunidades de desarrolladores controlan con presión social, deseo de aceptación, chisme, rechazo o reconocimiento.", "En la comunidad tecnológica, la revisión de código, los hackatones y los foros premian la colaboración. La presión de pares también puede empujar a probar “por reto” algo que cruza la línea, y ahí se decide la ética.", "https://png.pngtree.com/png-vector/20240604/ourmid/pngtree-group-of-cartoon-friends-standing-and-hugging-together-back-view-flat-png-image_12629163.png"],
    ["Medios de comunicación y redes", "Informal", "Difunden tendencias tecnológicas y modelos de conducta profesional, moldean la opinión pública y señalan lo aceptado o reprochable.", "Las noticias de brechas y estafas muestran el costo social del delito digital, y las redes pueden premiar o “cancelar”. Un ingeniero aprende que su conducta es visible y deja rastro.", "https://cloudfront-us-east-1.images.arcpublishing.com/semana/OIKTQJAICRD47HXSZMZJXJIAZM.jpg"],
    ["Estado e instituciones", "Formal", "Leyes del país y de la universidad, reglamentos de los laboratorios de cómputo, políticas institucionales, policía, tribunales e instituciones regulatorias.", "Define con precisión qué es delito informático y qué consecuencias tiene. El ingeniero debe conocer ese marco, porque los sistemas que construye manejan datos protegidos por ley.", "https://significado.com/img/his/politica-de-estado.jpg"]];

var BASE = {
    "Familia": "Art. 32: la familia es la base fundamental de la sociedad y cuenta con la protección del Estado.",
    "Escuela": "Art. 53: la educación y la cultura son derechos inherentes a la persona, y el Estado debe conservarlas, fomentarlas y difundirlas.",
    "Grupos de pares y comunidad": "Art. 7: se puede asociar y reunir libremente, de forma pacífica y para cualquier objeto lícito.",
    "Medios de comunicación y redes": "Art. 6: el pensamiento se expresa y se difunde con libertad, pero quien infringe la ley al usarla responde por el delito que cometa.",
    "Estado e instituciones": "Arts. 159, 172 y 193: la Policía Nacional Civil vela por la seguridad pública, el Órgano Judicial tiene la potestad exclusiva de juzgar y la Fiscalía promueve la acción penal."
};

var GAL = [
    ["Infografía de nuestro equipo", "Ciberdelitos_y_control_en_la_era_digital.png"],
    ["Captura de la política de uso aceptable", "Política_de_uso_aceptable_en_pantalla.png"],
    ["Evidencia del caso (ejemplo de correo de phishing)", "Ejemplo_simulado_de_phishing_en_español.png"]];

function slot(url, label) {
    if (url && url.indexOf('URL_') !== 0) {
        return '<div class="slot has" tabindex="0" role="button" aria-expanded="false" aria-label="Ampliar imagen: ' + label + '"><img src="' + url + '" alt="' + label + '" loading="lazy"></div>';
    }
    return '<div class="slot"><span class="hint">Imagen pendiente</span></div>';
}

var g = document.getElementById('agentGrid');
AG.forEach(function (a) {
    var inf = a[1] === "Informal";
    g.insertAdjacentHTML('beforeend', '<article class="agent">' + slot(a[4], a[0]) + '<div class="body"><span class="tag ' + (inf ? 't-inf' : 't-frm') + '">' + a[1] + '</span><h3>' + a[0] + '</h3><p>' + a[2] + '</p><p><b>En la ética del ingeniero:</b> ' + a[3] + '</p><p class="base"><b>Base constitucional:</b> ' + (BASE[a[0]] || '') + '</p></div></article>');
});

var gl = document.getElementById('gallery');
GAL.forEach(function (x) {
    gl.insertAdjacentHTML('beforeend', '<figure>' + slot(x[1], x[0]) + '<figcaption>' + x[0] + '</figcaption></figure>');
});

var MX = [
    ["f", "Formal negativa", "Prisión o prisión preventiva", "Privativa de la libertad, impuesta por un tribunal."],
    ["f", "Formal negativa", "Multa e indemnización", "Pecuniaria y patrimonial: multas, decomiso y reparación civil a las víctimas."],
    ["f", "Formal negativa", "Privación de derechos o licencias", "Inhabilitación para ejercer cargos o labores informáticas y pérdida de licencias; despido o expulsión en lo laboral y académico."],
    ["i", "Informal negativa", "Cancelación y pérdida de reputación", "Ostracismo, rumor y rechazo masivo en redes y en la comunidad técnica."],
    ["p", "Informal positiva (contraste)", "Reconocimiento por buenas prácticas", "Quien reporta una vulnerabilidad con responsabilidad gana prestigio y confianza."]];
var m = document.getElementById('matrix');
MX.forEach(function (x) { m.insertAdjacentHTML('beforeend', '<div class="mx ' + (x[0] === 'f' ? '' : x[0]) + '"><small>' + x[1] + '</small><h4>' + x[2] + '</h4><p>' + x[3] + '</p></div>') });

/* pestañas */
var tabs = document.querySelectorAll('.steps button');
tabs.forEach(function (b) {
    b.addEventListener('click', function () {
        tabs.forEach(function (t) { t.setAttribute('aria-selected', t === b) });
        document.querySelectorAll('.pane').forEach(function (p, i) { p.classList.toggle('on', i == b.dataset.p) });
    })
});