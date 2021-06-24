const saludo = prompt("Hola");
const escribaSuNombre = prompt("Por favor ingrese su nombre");
const escribaSuApellido = prompt("Por favor ingrese su apellido");
const escribaSuEdad = parseInt(prompt("Ingrese su edad"));
if (saludo == "hola") {
  console.log("El usuario no es un robot");
} else if (saludo === "Hola") {
  console.log("El usuario no es un robot");
} else if (saludo != "hola") {
  console.log("El usuario es un robot");
} else if (saludo != "Hola") {
  console.log("El usuario es un robot");
}

if (escribaSuEdad <= 21) {
  alert("Hola Eres menor de edad y no puedes comprar estos productos");
}
