
let usuarioNombre = prompt("Cual es tu nombre?"); 
let usuarioCorreo = prompt("Ingresa tu correo para recibir info y ofertas.")

console.log("Bienvenid@ " + usuarioNombre);
document.write("Bienvenid@ " + usuarioNombre);

let hora = 24;
while (hora > 23) {
    hora = prompt("Que hora es? (0-23)");
    hora = parseInt(hora);
} 

let color = prompt("Ingresa un color");
if (color !== null) {
 document.body.style.backgroundColor = color;
}

function sumarPrompt() {
    let num1 = prompt("Ingrese el primer número:");
    let num2 = prompt("Ingrese el segundo número:");
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    let suma = num1 + num2;
    return suma;
}

function validarEntrada(num1, num2) { 
    return (num1 !== null && num2 !== null && !isNaN(num1) && !isNaN(num2));
}

let muestraResultado = sumarPrompt();
console.log("La suma es:", muestraResultado);

function obtenerCalificacion() {
    let calificacion = prompt("¿Qué calificación de estrellas nos darías, 1-5?");
    calificacion = parseInt(calificacion);
    return calificacion;
}

function mostrarImagen() {
    let imagen = document.createElement("img");
    imagen.src = "Estrella_amarilla.png";
    imagen.alt = "Estrella";
    imagen.style.width = "50px";  
    imagen.style.height = "auto";
    imagen.classList.add("estrella");  
    return imagen;
}
 
function mostrarImagenes() {
    let calificacion = obtenerCalificacion();
    
    if (calificacion >= 1 && calificacion <= 5) {
        let body = document.body;
        for (let i = 0; i < calificacion; i++) {
            let imagen = mostrarImagen();
            body.appendChild(imagen);
        }
    } else {
        alert("Por favor, introduce un número válido entre 1 y 5.");
    }
}

mostrarImagenes();

let usuarioEdad = prompt("¿Cuál es tu edad?");
usuarioEdad = parseInt(usuarioEdad);

while (isNaN(usuarioEdad) || usuarioEdad < 0) {
    usuarioEdad = prompt("Por favor, introduce una edad válida:");
    usuarioEdad = parseInt(usuarioEdad);
}

if (usuarioEdad >= 18) {
    alert("Acceso permitido.");
} else {
    alert("No puedes acceder siendo menor.");
    window.close(); // Cierra la ventana actual inmediatamente
}

