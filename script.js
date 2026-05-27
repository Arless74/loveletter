const sobre =
    document.getElementById("sobre");

const carta =
    document.getElementById("carta");

const pregunta =
    document.getElementById("pregunta");

const abrirPregunta =
    document.getElementById("abrirPregunta");

const botonSi =
    document.getElementById("si");

const botonNo =
    document.getElementById("no");

const mensaje =
    document.getElementById("mensaje");

/* FRASES */
const frases = [

    "yo sé que sí 😌",

    "piénsalo otra vez ❤️",

    "no puedes huir 😏",

    "te amo más 💖",

    "ya lo sabías 😳",

    "el botón no está tímido 😶"
];

let contador = 0;

let tamaño = 1;

/* =========================
   ABRIR SOBRE
========================= */
sobre.addEventListener("click", () => {

    sobre.style.pointerEvents = "none";

    gsap.to(".tapa", {

        rotateX:180,

        duration:1.3,

        ease:"power2.inOut"
    });

    gsap.to(".carta-interna", {

        y:-180,

        duration:1.2,

        delay:0.3,

        ease:"power3.out"
    });

    gsap.to(".sobre", {

        y:-10,

        duration:0.4,

        repeat:1,

        yoyo:true
    });

    setTimeout(() => {

        gsap.to(".sobre", {

            opacity:0,

            scale:0.8,

            duration:0.8,

            onComplete:() => {

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
                        ease:"elastic.out(1,0.5)"
                    }
                );
            }
        });

    },1800);
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

        onComplete:() => {

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
botonNo.addEventListener(
    "mouseover",
    moverNo
);

botonNo.addEventListener(
    "click",
    moverNo
);

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

    gsap.to(botonNo,{

        left:x,

        top:y,

        duration:0.25
    });

    mensaje.innerText =
        frases[contador % frases.length];

    contador++;

    tamaño += 0.1;

    gsap.to(botonSi,{

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

        onComplete:() => {

            document.body.innerHTML = `
            
                <div class="estrellas"></div>

                <div class="final">

                    <div class="contenido-final">

                        <h1>TE AMO 💖</h1>

                        <div class="corazon">
                            ❤️
                        </div>

                        <button
                            id="abrirTickets"
                            class="btn-ticket"
                        >
                            🎟️ Tickets
                        </button>

                    </div>

                </div>

                <div
                    class="tickets oculto"
                    id="tickets"
                >

                    <div class="tickets-contenido">

                        <h2>
                            🎟️ Cupones Canjeables
                        </h2>

                        <div class="lista-tickets">

                            <div class="ticket" data-copy="Cupón para un masaje 💆">
                                <div class="ticket-main">
                                    <span>VÁLIDO POR</span>
                                    <h3>UN MASAJE 💆</h3>
                                    <small>❤️ ❤️ ❤️</small>
                                </div>

                                <div class="ticket-side">
                                    CUPÓN
                                </div>
                            </div>

                            <div class="ticket" data-copy="Cupón para jugar cualquier juego 🎮">
                                <div class="ticket-main">
                                    <span>VÁLIDO POR</span>
                                    <h3>JUGAR LO QUE QUIERAS 🎮</h3>
                                    <small>❤️ ❤️ ❤️</small>
                                </div>

                                <div class="ticket-side">
                                    CUPÓN
                                </div>
                            </div>

                            <div class="ticket" data-copy="Cupón para un postre 🍰">
                                <div class="ticket-main">
                                    <span>VÁLIDO POR</span>
                                    <h3>UN POSTRE 🍰</h3>
                                    <small>❤️ ❤️ ❤️</small>
                                </div>

                                <div class="ticket-side">
                                    CUPÓN
                                </div>
                            </div>

                            <div class="ticket" data-copy="Cupón para cebollita acaramelizada 🧅">
                                <div class="ticket-main">
                                    <span>VÁLIDO POR</span>
                                    <h3>CEBOLLITA ACARAMELIZADA 🧅</h3>
                                    <small>❤️ ❤️ ❤️</small>
                                </div>

                                <div class="ticket-side">
                                    CUPÓN
                                </div>
                            </div>

                            <div class="ticket" data-copy="Cupón para una salida 🌙">
                                <div class="ticket-main">
                                    <span>VÁLIDO POR</span>
                                    <h3>UNA SALIDA 🌙</h3>
                                    <small>❤️ ❤️ ❤️</small>
                                </div>

                                <div class="ticket-side">
                                    CUPÓN
                                </div>
                            </div>

                            <div class="ticket" data-copy="Cupón para una My Melody 🎀">
                                <div class="ticket-main">
                                    <span>VÁLIDO POR</span>
                                    <h3>UNA MY MELODY 🎀</h3>
                                    <small>❤️ ❤️ ❤️</small>
                                </div>

                                <div class="ticket-side">
                                    CUPÓN
                                </div>
                            </div>

                            <div class="ticket" data-copy="Cupón para stickers ✨">
                                <div class="ticket-main">
                                    <span>VÁLIDO POR</span>
                                    <h3>STICKERS ✨</h3>
                                    <small>❤️ ❤️ ❤️</small>
                                </div>

                                <div class="ticket-side">
                                    CUPÓN
                                </div>
                            </div>

                            <div class="ticket" data-copy="Cupón para 1 noche de mods Sims 🖥️">
                                <div class="ticket-main">
                                    <span>VÁLIDO POR</span>
                                    <h3>1 NOCHE DE MODS SIMS 🖥️</h3>
                                    <small>❤️ ❤️ ❤️</small>
                                </div>

                                <div class="ticket-side">
                                    CUPÓN
                                </div>
                            </div>

                            <div class="ticket" data-copy="Cupón para hamburguesa 🍔">
                                <div class="ticket-main">
                                    <span>VÁLIDO POR</span>
                                    <h3>HAMBURGUESA 🍔</h3>
                                    <small>❤️ ❤️ ❤️</small>
                                </div>

                                <div class="ticket-side">
                                    CUPÓN
                                </div>
                            </div>

                            <div class="ticket" data-copy="Cupón para HandRoll 🍣">
                                <div class="ticket-main">
                                    <span>VÁLIDO POR</span>
                                    <h3>HANDROLL 🍣</h3>
                                    <small>❤️ ❤️ ❤️</small>
                                </div>

                                <div class="ticket-side">
                                    CUPÓN
                                </div>
                            </div>

                        </div>

                        <button
                            id="cerrarTickets"
                            class="cerrar-ticket"
                        >
                            Cerrar
                        </button>

                    </div>

                </div>
            
            `;

            gsap.from(".contenido-final",{

                scale:0,

                opacity:0,

                duration:1.3,

                ease:"elastic.out(1,0.4)"
            });

            iniciarLluvia();

            iniciarTickets();
        }
    });
});

/* =========================
   TICKETS
========================= */
function iniciarTickets(){

    const abrirTickets =
        document.getElementById("abrirTickets");

    const tickets =
        document.getElementById("tickets");

    const cerrarTickets =
        document.getElementById("cerrarTickets");

    abrirTickets.addEventListener("click", () => {

        tickets.classList.remove("oculto");

        gsap.fromTo(
            ".tickets-contenido",
            {
                scale:0.5,
                opacity:0
            },
            {
                scale:1,
                opacity:1,
                duration:0.7,
                ease:"back.out(1.7)"
            }
        );
    });

    cerrarTickets.addEventListener("click", () => {

        gsap.to(".tickets-contenido", {

            scale:0.7,

            opacity:0,

            duration:0.4,

            onComplete:() => {

                tickets.classList.add("oculto");
            }
        });
    });

    /* TICKETS */
    const todosTickets =
        document.querySelectorAll(".ticket");

    todosTickets.forEach(ticket => {

        ticket.addEventListener("click", async () => {

            const texto =
                ticket.dataset.copy;

            await navigator.clipboard.writeText(texto);

            ticket.classList.add("cortado");

            setTimeout(() => {

                ticket.classList.remove("cortado");

            },700);

            /* AVISO */
            const aviso =
                document.createElement("div");

            aviso.innerText =
                "🎟️ Cupón copiado";

            aviso.style.position = "fixed";
            aviso.style.bottom = "30px";
            aviso.style.left = "50%";
            aviso.style.transform = "translateX(-50%)";

            aviso.style.background = "#ff4f93";
            aviso.style.color = "white";

            aviso.style.padding = "14px 24px";

            aviso.style.borderRadius = "14px";

            aviso.style.zIndex = "9999";

            aviso.style.fontWeight = "bold";

            document.body.appendChild(aviso);

            gsap.fromTo(
                aviso,
                {
                    opacity:0,
                    y:30
                },
                {
                    opacity:1,
                    y:0,
                    duration:0.4
                }
            );

            setTimeout(() => {

                gsap.to(aviso,{
                    opacity:0,
                    y:20,
                    duration:0.4,
                    onComplete:() => aviso.remove()
                });

            },1500);

        });

    });
}

/* =========================
   LLUVIA
========================= */
function iniciarLluvia(){

    const textos = [

        "Te amo ❤️",

        "Siempre tú ✨",

        "Mi lugar favorito eres tú 💕",

        "Eres mi universo 🌙",

        "Contigo todo ❤️"
    ];

    setInterval(() => {

        const div =
            document.createElement("div");

        div.classList.add("lluvia");

        div.innerText =
            textos[
                Math.floor(
                    Math.random()*textos.length
                )
            ];

        div.style.left =
            Math.random() *
            window.innerWidth + "px";

        div.style.fontSize =
            (18 + Math.random()*18) + "px";

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
                onComplete:() => div.remove()
            }
        );

    },700);
}