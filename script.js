const sobre = document.getElementById('sobre-container');
const carta = document.getElementById('carta-container');
const botonsi = document.getElementById('botonsi');
const botonno = document.getElementById('botonno');

const tittle = document.getElementById('letter-tittle');
const catimg = document.getElementById('carta-gato');
const botonesContenedor = document.getElementById("letter-botones");
const textofinal = document.getElementById("texto-final");

let yesscale = 1;

sobre.addEventListener('click', () => {
    sobre.style.display = 'none';
    carta.style.display = 'flex';

    setTimeout(() => {
        document.querySelector(".carta-ventana").classList.add("open");
    }, 50);
});

// Logic to move the NO btn

let yesScale = 1;


botonsi.style.position = "relative"
botonsi.style.transformOrigin = "center center"
botonsi.style.transition = "transform 0.3s ease";

botonno.addEventListener('click', () => {
    yesScale += 2;

    if(botonsi.style.position !== "fixed"){
        botonsi.style.position = "fixed";
        botonsi.style.top = "50%";
        botonsi.style.left = "50%";
        botonsi.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
    }else{
        botonsi.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
        }
});

botonsi.addEventListener('click', () => {
    tittle.textContent = "¡SABIA YO JSJS!";
    catimg.src = 'moisegato.png';
    
    document.querySelector(".carta-ventana").classList.add("final");
    botonsi.style.display = "none";
    botonno.style.display = "none";

textofinal.style.display = "block";
    textofinal.style.cursor = "pointer";
    textofinal.onclick = () => {
        window.open("https://widget.riservi.com/rs/eUpXNm9E", "_blank");
    };
});