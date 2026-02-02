const sobre = document.getElementById('sobre-container');
const carta = document.getElementById('carta-container');
const botonno = document.getElementById('botonno');
const botonsi = document.querySelector('.botones[alt="si"]');

const tittle = document.getElementById('letter-tittle');
const catimg = document.getElementById('carta-gato');
const botones = document.getElementById("letter-botones")
const textofinal = document.getElementById("texto-final")

envelope.addEventListener('click', () => {
    envelope.style,display = 'none';
    letter.style.display = 'none';

    setTimeout(() => {
        document.queryselector(".carta-ventana").classlist.add("open");
    },50);
 });



 let yesScale = 1;

botonsi.style.position = "relative"
botonsi.style.transformorigin = "center center"
botonsi.style.transition = "transform 0.3s ease";

botonno.addEventListener('click', () => {
    yesScale += 2;

    if(botonsi.style.position !== fixed){
        botonsi.style.position = "fixed";
        botonsi.style.top = "50%";
        botonsi.style.left = "50%";
        botonsi.style.transform = "translate(-50%, -50%) scale(" + yesScale + ")";
        }else{
            botonsi.style.transform = "translate(-50%, -50%) scale(" + yesScale + ")";
        }
});

botonsi.addEventListener('click', () => {
    tittle.textContent = "¡SABIA YO JSJS!";

    catimg.src = 'moisegato.png';

document.querySelector(".carta-ventana").classList.add("final");

buttons.style.display = "none";

textofinal.style.display = "block";
});
