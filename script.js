const sobre = document.getElementById("sobre");
const carta = document.getElementById("carta");
const pregunta = document.getElementById("pregunta");

const abrirPregunta = document.getElementById("abrirPregunta");

const botonSi = document.getElementById("si");
const botonNo = document.getElementById("no");
const mensaje = document.getElementById("mensaje");

let frases = [
    "yo sé que sí 😌",
    "piénsalo otra vez ❤️",
    "no puedes huir 😏",
    "te amo más 💖",
    "ya lo sabías 😳"
];

let contador = 0;

/* =========================
   ABRIR SOBRE
========================= */
sobre.addEventListener("click", () => {
    sobre.classList.add("abierto");

    setTimeout(() => {
        sobre.style.display = "none";
        carta.classList.remove("oculto");
    }, 800);
});

/* =========================
   ABRIR PREGUNTA
========================= */
abrirPregunta.addEventListener("click", () => {
    carta.classList.add("oculto");
    pregunta.classList.remove("oculto");
});

/* =========================
   BOTÓN NO (NO SE PEGA)
========================= */
botonNo.addEventListener("mouseover", moverNo);
botonNo.addEventListener("click", moverNo);

function moverNo(){

    const cont = document.querySelector(".botones");
    const rect = cont.getBoundingClientRect();

    const x = Math.random() * (rect.width - 80);
    const y = Math.random() * (rect.height - 50);

    botonNo.style.left = x + "px";
    botonNo.style.top = y + "px";

    mensaje.innerText = frases[contador % frases.length];
    contador++;
}

/* =========================
   BOTÓN SI (FINAL)
========================= */
botonSi.addEventListener("click", () => {

    document.body.innerHTML = `
        <div class="final">
            <h1>TE AMO 💖</h1>
            <div class="corazon">❤️</div>
        </div>
    `;

    iniciarLluvia();
});

/* =========================
   LLUVIA
========================= */
function iniciarLluvia(){

    const textos = ["Te amo ❤️","Eres todo 💖","Siempre tú"];

    setInterval(() => {

        const div = document.createElement("div");
        div.classList.add("lluvia");

        div.innerText = textos[Math.floor(Math.random()*textos.length)];

        div.style.left = Math.random()*window.innerWidth + "px";

        document.body.appendChild(div);

        setTimeout(()=>div.remove(),5000);

    },200);
}