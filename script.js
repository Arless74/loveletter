const sobre = document.getElementById("sobre");
const carta = document.getElementById("carta");
const pregunta = document.getElementById("pregunta");

const abrirPregunta = document.getElementById("abrirPregunta");

const botonSi = document.getElementById("si");
const botonNo = document.getElementById("no");

const mensaje = document.getElementById("mensaje");

/* =========================
   FRASES
========================= */
const frases = [
    "yo sé que sí 😌",
    "piénsalo otra vez ❤️",
    "no puedes huir 😏",
    "te amo más 💖",
    "ya lo sabías 😳",
    "el botón no está tímido 😶",
    "inténtalo otra vez 😂"
];

let contador = 0;
let tamaño = 1;

/* =========================
   ABRIR SOBRE
========================= */
sobre.addEventListener("click", () => {
    sobre.classList.add("abierto");

    setTimeout(() => {
        sobre.style.display = "none";
        carta.classList.remove("oculto");

    }, 900);
});

/* =========================
   ABRIR CARTA
========================= */
abrirPregunta.addEventListener("click", () => {
    carta.classList.add("oculto");
    pregunta.classList.remove("oculto");
});

/* =========================
   BOTÓN NO
========================= */
botonNo.addEventListener("mouseover", moverNo);
botonNo.addEventListener("click", moverNo);

function moverNo(){

    const contenedor = document.querySelector(".botones");
    const rect = contenedor.getBoundingClientRect();

    const x = Math.random() * (rect.width - botonNo.offsetWidth);
    const y = Math.random() * (rect.height - botonNo.offsetHeight);

    botonNo.style.left = x + "px";
    botonNo.style.top = y + "px";

    mensaje.innerText = frases[contador % frases.length];
    contador++;

    /* CRECER BOTÓN SI */
    tamaño += 0.1;
    botonSi.style.transform = `scale(${tamaño})`;
}

/* =========================
   BOTÓN SI
========================= */
botonSi.addEventListener("click", () => {

    document.body.innerHTML = `
    
        <div class="final">
            <h1>Te Amo mi bbshita 💖</h1>
            <div class="corazon">
                ❤️
            </div>
        </div>
    
    `;

    iniciarLluvia();
});

/* =========================
   LLUVIA
========================= */
function iniciarLluvia(){

    const textos = [
        "Te amo ❤️",
        "Eres todo 💖",
        "Siempre tú ✨",
        "Mi lugar favorito eres tú 💕",
        "Contigo todo ❤️"
    ];

    setInterval(() => {

        const div = document.createElement("div");
        div.classList.add("lluvia");

        div.innerText =
            textos[Math.floor(Math.random() * textos.length)];

        div.style.left =
            Math.random() * window.innerWidth + "px";

        div.style.fontSize =
            (20 + Math.random() * 20) + "px";

        document.body.appendChild(div);

        setTimeout(() => {
            div.remove();
        }, 5000);

    }, 250);
}