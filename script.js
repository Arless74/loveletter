// =====================
// ELEMENTOS
// =====================
const intro = document.getElementById("intro");
const abrir = document.getElementById("abrir");
const carta = document.getElementById("carta");
const pregunta = document.getElementById("pregunta");

const botonNo = document.getElementById("no");
const botonSi = document.getElementById("si");
const mensaje = document.getElementById("mensaje");

// =====================
// INTRO CINEMATOGRÁFICA
// =====================
setTimeout(() => {
    intro.querySelector("h1").innerText = "Tengo algo para ti...";
}, 500);

setTimeout(() => {
    intro.querySelector("h1").innerText = "💌";
}, 2500);

setTimeout(() => {
    intro.style.opacity = "0";
    intro.style.transition = "1.5s ease";
}, 4000);

setTimeout(() => {
    intro.remove();
}, 6000);

// =====================
// EMAILJS
// =====================
if (typeof emailjs !== "undefined") {
    emailjs.init("j85VR3ctbyGgGTBgw");
}

// =====================
// FRASES
// =====================
const frases = [
    "yo sé que sí 😌",
    "piénsalo otra vez ❤️",
    "no puedes escapar 😳",
    "te estoy mirando 👀",
    "ya casi dices sí 💖"
];

let i = 0;

// =====================
// ABRIR CARTA (EFECTO SOBRE)
// =====================
abrir.addEventListener("click", () => {

    carta.style.transform = "scale(0.2) rotateX(40deg)";
    carta.style.opacity = "0";

    setTimeout(() => {
        carta.classList.add("oculto");
        pregunta.classList.remove("oculto");
    }, 700);
});

// =====================
// BOTÓN NO (SUAVE + INTELIGENTE)
// =====================
botonNo.classList.add("no-smooth");

function moverNo() {

    const rect = botonNo.getBoundingClientRect();

    let x = rect.left + (Math.random() * 200 - 100);
    let y = rect.top + (Math.random() * 200 - 100);

    x = Math.max(20, Math.min(window.innerWidth - 100, x));
    y = Math.max(20, Math.min(window.innerHeight - 100, y));

    botonNo.style.position = "fixed";
    botonNo.style.left = x + "px";
    botonNo.style.top = y + "px";

    mensaje.innerText = frases[i % frases.length];
    i++;
}

botonNo.addEventListener("mouseover", moverNo);

// =====================
// LLUVIA
// =====================
function lluvia() {

    const textos = ["Te amo ❤️","Siempre tú 💖","Eres mi mundo","Contigo todo"];

    setInterval(() => {

        const d = document.createElement("div");
        d.classList.add("lluvia");
        d.innerText = textos[Math.floor(Math.random()*textos.length)];

        d.style.left = Math.random() * window.innerWidth + "px";
        d.style.animationDuration = (6 + Math.random()*4) + "s";

        document.body.appendChild(d);

        setTimeout(() => d.remove(), 9000);

    }, 200);
}

// =====================
// FLORES
// =====================
function flores() {

    const f = ["🌸","🌷","🌺","💮","🌹"];

    setInterval(() => {

        const el = document.createElement("div");
        el.innerText = f[Math.floor(Math.random()*f.length)];

        el.style.position = "fixed";
        el.style.bottom = "0";
        el.style.left = Math.random()*window.innerWidth + "px";
        el.style.fontSize = (20 + Math.random()*40) + "px";

        el.style.animation = "crecer 5s ease forwards";

        document.body.appendChild(el);

        setTimeout(() => el.remove(), 5000);

    }, 180);
}

// =====================
// FINAL NIVEL DIOS
// =====================
botonSi.addEventListener("click", () => {

    if (typeof emailjs !== "undefined") {
        emailjs.send("service_ep9xzt9", "template_9j6s1vh", {
            time: new Date().toLocaleString(),
            message: "RESPONDIÓ QUE SÍ ❤️"
        });
    }

    document.body.innerHTML = `
        <div class="final">
            <div class="corazon-grande">❤️</div>
            <h1>TE AMO 💖</h1>
            <p>Siempre tú ✨</p>
        </div>
    `;

    flores();
    lluvia();
});