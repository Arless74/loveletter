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

    sobre.style.pointerEvents = "none";

    /* abrir tapa */
    gsap.to(".tapa", {
        rotateX: 180,
        duration: 1.3,
        ease: "power2.inOut",
        transformOrigin: "top"
    });

    /* sacar carta */
    gsap.to(".carta-interna", {
        y: -120,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out"
    });

    /* rebote */
    gsap.to(".sobre", {
        y: -10,
        duration: 0.4,
        repeat:1,
        yoyo:true
    });

    setTimeout(() => {

        gsap.to(".sobre", {
            opacity:0,
            scale:0.8,
            duration:0.8,
            ease:"power2.out",
            onComplete: () => {

                sobre.style.display = "none";

                carta.classList.remove("oculto");

                gsap.fromTo(
                    ".carta",
                    {
                        opacity:0,
                        y:80,
                        scale:0.7
                    },
                    {
                        opacity:1,
                        y:0,
                        scale:1,
                        duration:1.2,
                        ease:"elastic.out(1, 0.5)"
                    }
                );
            }
        });

    }, 1800);
});

/* =========================
   ABRIR PREGUNTA
========================= */
abrirPregunta.addEventListener("click", () => {

    gsap.to(".carta", {
        opacity:0,
        y:-50,
        scale:0.8,
        duration:0.5,
        ease:"power2.in",
        onComplete: () => {

            carta.classList.add("oculto");

            pregunta.classList.remove("oculto");

            gsap.fromTo(
                ".pregunta",
                {
                    opacity:0,
                    scale:0.7
                },
                {
                    opacity:1,
                    scale:1,
                    duration:1,
                    ease:"back.out(1.7)"
                }
            );
        }
    });
});

/* =========================
   BOTÓN NO
========================= */
botonNo.addEventListener("mouseover", moverNo);
botonNo.addEventListener("click", moverNo);

function moverNo(){

    const contenedor =
        document.querySelector(".botones");

    const rect =
        contenedor.getBoundingClientRect();

    const x =
        Math.random() *
        (rect.width - botonNo.offsetWidth);

    const y =
        Math.random() *
        (rect.height - botonNo.offsetHeight);

    gsap.to(botonNo, {
        left:x,
        top:y,
        duration:0.25,
        ease:"power2.out"
    });

    mensaje.innerText =
        frases[contador % frases.length];

    contador++;

    tamaño += 0.1;

    gsap.to(botonSi, {
        scale:tamaño,
        duration:0.3
    });
}

/* =========================
   BOTÓN SI
========================= */
botonSi.addEventListener("click", () => {

    gsap.to(".pregunta", {
        opacity:0,
        scale:1.2,
        duration:0.5,
        onComplete: () => {

            document.body.innerHTML = `
            
                <div class="final">

                    <div class="contenido-final">

                        <h1>TE AMO 💖</h1>

                        <div class="corazon">
                            ❤️
                        </div>

                    </div>

                </div>
            
            `;

            gsap.from(".contenido-final", {
                scale:0,
                opacity:0,
                duration:1.3,
                ease:"elastic.out(1, 0.4)"
            });

            iniciarLluvia();
        }
    });
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

        const div =
            document.createElement("div");

        div.classList.add("lluvia");

        div.innerText =
            textos[
                Math.floor(
                    Math.random() * textos.length
                )
            ];

        div.style.left =
            Math.random() *
            window.innerWidth + "px";

        div.style.fontSize =
            (18 + Math.random() * 18) + "px";

        document.body.appendChild(div);

        gsap.fromTo(
            div,
            {
                y:-100,
                opacity:1
            },
            {
                y:window.innerHeight + 150,
                opacity:0,
                duration:10,
                ease:"none",
                onComplete: () => div.remove()
            }
        );

    }, 700);
}