import runConfetti from './confetti.js';

var formInicio = document.getElementById("form-start");

var seccionInicio = document.getElementById("home");

var seccionPreguntas = document.getElementById("questions");

var indicePreguntaActual = 0;

formInicio.addEventListener("submit", function(event) {
    event.preventDefault();

    //var nombre = document.getElementById("name").value;

    var nombre = event.target.name.value;

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

    let template = preguntaActual.answers.map(function(answer, index) {
        return `
        <button 
            class="btn btn-answer"
            data-index=${index}
        >
        ${answer.answer}
        </button>`;
    }).join("");

    divRespuestas.innerHTML = template;

    agregarEventoClickRespuestas();
}

function agregarEventoClickRespuestas() {
    let botones = document.querySelectorAll(".btn-answer");

    botones.forEach(function(boton, index) {
        boton.addEventListener("click", onAnswerClick);
    })
}

function onAnswerClick(event) {
    let numRespuesta = event.target.dataset.index;
    let preguntaActual = PREGUNTAS[indicePreguntaActual];

    let respuesta = preguntaActual.answers[numRespuesta];

    validarRespuesta(respuesta);
}

function validarRespuesta(respuesta) {
    if(respuesta.isRight) alert("Acertaste")
    else alert("Respuesta Incorrecta");

    indicePreguntaActual++;

    if(indicePreguntaActual == PREGUNTAS.length) {
        runConfetti();
        alert("Has terminado con el Quizz");
        return;
    }
    cargarPregunta();
}
