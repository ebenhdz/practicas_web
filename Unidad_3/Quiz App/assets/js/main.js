import runConfetti from './confetti.js';

var formInicio = document.getElementById("form-start");

var seccionInicio = document.getElementById("home");

var seccionPreguntas = document.getElementById("questions");

var seccionFinal = document.getElementById("final");

var btnReiniciar = document.getElementById("btn-reiniciar");


var indicePreguntaActual = 0;

var nombreUsuario = "";
var totalAciertos = 0;
var preguntasJuegoActual = [];

formInicio.addEventListener("submit", function(event) {
    event.preventDefault();

    //var nombreUsuario = document.getElementById("name").value;

    nombreUsuario = event.target.name.value;

    if (nombreUsuario.trim() == "") {
        alert("Ingresa tu nombre");
        return;
    }

    seccionInicio.classList.remove("section-visible");

    seccionPreguntas.classList.add("section-visible");

    reniciarPreguntas();
});

btnReiniciar.addEventListener("click", function(event) {
    seccionFinal.classList.remove("section-visible");
    seccionPreguntas.classList.add("section-visible");
    reniciarPreguntas();
});

function reniciarPreguntas() {
    totalAciertos = 0;
    indicePreguntaActual = 0;
    shuffle(PREGUNTAS);
    preguntasJuegoActual = PREGUNTAS.slice(0, 3); // 0,1,2
    cargarPregunta();
}

function cargarPregunta() {
    let preguntaActual = preguntasJuegoActual[indicePreguntaActual];

    let tituloPreguntas = document.querySelector(".questions__title");

    let textoPreguntas = document.querySelector(".question__text");

    let divRespuestas = document.querySelector(".answers");

    tituloPreguntas.innerHTML = `Question ${indicePreguntaActual + 1} of ${preguntasJuegoActual.length}`;

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
    let preguntaActual = preguntasJuegoActual[indicePreguntaActual];

    let respuesta = preguntaActual.answers[numRespuesta];

    validarRespuesta(event.target, respuesta, preguntasJuegoActual);
}

function validarRespuesta(btnRespuesta, respuesta, Preguntas) {
    var botonesRespuestas = document.querySelectorAll(".answers .btn");

    botonesRespuestas.forEach(function(boton){
        boton.classList = ["btn"];
        boton.setAttribute("disabled", true);
    });

    if(respuesta.isRight) {
        btnRespuesta.classList.add("btn--correct");
        totalAciertos++;
    }
    else {
        btnRespuesta.classList.add("btn--failed");
    }

    indicePreguntaActual++;

    if(indicePreguntaActual == Preguntas.length) {
        setTimeout(runConfetti, 4000);
        setTimeout(mostrarSeccionFinal, 4000);
        return;
    }

    setTimeout(cargarPregunta, 4000);
    setTimeout(habilitarBotones, 4100);
    //cargarPregunta();
}

function habilitarBotones(botones) {
    if(botones) {
        botones.forEach(function(boton){
            boton.setAttribute("disabled", false);
        });
    }
}

function mostrarSeccionFinal() {
    seccionPreguntas.classList.remove("section-visible");
    seccionFinal.classList.add("section-visible");
    seccionFinal.querySelector(".final_usu-nombre").textContent = nombreUsuario;
    seccionFinal.querySelector(".final_puntaje_aciertos").textContent = `${totalAciertos} de ${preguntasJuegoActual.length}`;
}


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // índice aleatorio entre 0 e i
  
      // intercambia elementos array[i] y array[j]
      // usamos la sintaxis "asignación de desestructuración" para lograr eso
      // encontrarás más información acerca de esa sintaxis en los capítulos siguientes
      // lo mismo puede ser escrito como:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [array[i], array[j]] = [array[j], array[i]];
    }
  }