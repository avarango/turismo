
let usuarioNombre = prompt("Cual es tu nombre?"); 
let usuarioCorreo = prompt("Ingresa tu correo para recibir info y ofertas.")

console.log("Bienvenid@ " + usuarioNombre);
document.write("Bienvenid@ " + usuarioNombre);


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
    // Verificar si los inputs no son null y son números
    return (num1 !== null && num2 !== null && !isNaN(num1) && !isNaN(num2));
}

let muestraResultado = sumarPrompt();
console.log("La suma es:", muestraResultado);

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
