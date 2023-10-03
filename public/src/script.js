// me gustaria declararle mi amor a ella pero solo se declarar variables
const cBotones = document.getElementsByClassName("cuadro");
const TJugadores = document.getElementsByClassName("containerPlayer");

let turno = "X";

// Supongamos que tienes un array cBotones que contiene los botones del juego.

for (let i = 0; i < cBotones.length; i++) {
    cBotones[i].addEventListener("click", () => {
        const h3Element = TJugadores[0].querySelector("h3"); // Supongamos que el turno se muestra en el primer elemento de TJugadores.

        if (h3Element.textContent === "Turno de: X") {
            h3Element.textContent = "Turno de: O";
            turno = "O";
        } else {
            h3Element.textContent = "Turno de: X";
            turno = "X";
        }

        // Aquí actualizamos el contenido del botón que se presionó.
        if (cBotones[i].textContent === "" && turno === "X") {
            cBotones[i].textContent = "O";
        } else if (cBotones[i].textContent === "" && turno === "O") {
            cBotones[i].textContent = "X";
        }
    });
}

const miBoton = document.getElementById("cuadro");

miBoton.addEventListener("click", () => {
    console.log("Botón clickeado");
    miImagen.style.visibility = "hidden";
    miBoton.style.backgroundColor = "white";
});

const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
