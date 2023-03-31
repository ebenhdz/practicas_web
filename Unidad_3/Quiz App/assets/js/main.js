var formInicio = document.getElementById("form-start");

var seccionInicio = document.getElementById("home");

var seccionPreguntas = document.getElementById("questions");

var indicePreguntaActual = 0;

formInicio.addEventListener("submit", function(event) {
    event.preventDefault();

    var nombre = document.getElementById("name").value;

    if (nombre.trim() == "") {
        alert("Ingresa tu nombre");
        return;
    }

    seccionInicio.classList.remove("section-visible");

    seccionPreguntas.classList.add("section-visible");

    cargarPregunta();
});

function cargarPregunta() {
    let preguntaActual = PREGUNTAS[indicePreguntaActual];

    let tituloPreguntas = document.querySelector(".questions__title");

    let textoPreguntas = document.querySelector(".question__text");

    let divRespuestas = document.querySelector(".answers");

    tituloPreguntas.innerHTML = `Question ${indicePreguntaActual + 1} of ${PREGUNTAS.length}`;

    textoPreguntas.innerHTML = preguntaActual.name;

    let template = preguntaActual.answers.map(function(answer) {
        return `<button class="btn">${answer.answer}</button>`;
    }).join("");

    divRespuestas.innerHTML = template;
}