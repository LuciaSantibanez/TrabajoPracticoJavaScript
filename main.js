//1.Introduccion a JavaScript

/*EJERCICIO 2
//declarar y asignar las variables
let a = 5;
let b = 10;
let c= a+b;

//imprimir resultado por consola
console.log("La suma de a + b es:", c);
*/

/*EJERCICIO 3
function mostrarNombre(){
//pedir nombre y almacenar en una variable
let nombre = prompt("¿Cuál es tu nombre?");
//imprimir saludo
console.log("Hola,", nombre,"!");
}
const buttonEje3 = document.getElementById("eje1_3")
buttonEje3.addEventListener("click", ()=>{mostrarNombre()});
*/


//2.Operadores lógicos y condicionales

/*EJERCICIO 1
//declarar y asignar variables
let a = 10;
let b = 14;
let c;
//determinar cual es el mayor
if(a>b){
    c=a;
}else{
    c=b;
}
console.log("El mayor es:",c)
*/

/*EJERCICIO 2
function parImpar(){
//pedir al usuario un numero 
let numeroIngresado = prompt("Ingresa un número y te dire si es par o impar");
if((numeroIngresado % 2) == 0 ){
    console.log("El número",numeroIngresado,", es par");
}else{
    console.log("El número",numeroIngresado,", es impar");
}
}
const buttonEje5 = document.getElementById("eje2_2")
buttonEje5.addEventListener("click", ()=>{parImpar()});
*/


//3.Operadores de asignación y bucles

/*EJERCICIO 1
//inicializar la variable en 10
let numero = 10;
//bucle while que se ejecuta mientras la variable sea mayor que 0
while(numero > 0){
    console.log(numero); //imprimir valor actual de la variable
    numero --; //restar 1 en cada iteracion
}
*/

/*EJERCICIO 2
let numeroIngresado;
function mayor100(){
do{
    //pedir al usuario que ingrese un número
    numeroIngresado = prompt("Ingrese un número mayor a 100:")
}while(numeroIngresado<=100){ //repetir mientras el numero sea menor que 100
    //mostrar el numero valido ingrsado por el usuario en la consola
    console.log("Ingresaste un número mayor a 100:", numeroIngresado);
}
}
const buttonEje7 = document.getElementById("eje3_2")
buttonEje7.addEventListener("click", ()=>{mayor100()});
*/

//4.Funciones de Javascript

/*EJERCICIO 1
//definir la funcion esPar
let numero;
function esPar(numero){
    //verificar si el numero es par
    if((numero % 2) == 0)
        console.log("El número",numero,"es par:", true);
    else{
        console.log("El número",numero,"es par:", false);
    }
};
console.log(esPar(8));
console.log(esPar(1));
*/

/*EJERCICIO 2
function convertirCelsiusAFahrenheit(celsius){
    //formula para convertir celsius a fahrenheit
    let fahrenheit = celsius * 1.8 + 32;
    return fahrenheit; //retornar el valor en fahrenheit
}
//mostrar el resultado en consola
console.log("30°C son equivalentes a", convertirCelsiusAFahrenheit(30),"°F");   
*/

//5.Objetos en JavaScript

/*EJERCICIO 1
//definir objeto persona
let persona = {
    nombre:"Ana",
    edad:30,
    ciudad: "Mendoza",
    //metodo para cambiar la ciudad
    cambiarCiudad: function(nuevaCiudad){
        this.ciudad = nuevaCiudad; 
    }
}
//mostrar las propiedades iniciales en la consola
console.log("Antes de cambiar la ciudad:");
console.log("Nombre: " + persona.nombre);
console.log("Edad: " + persona.edad);
console.log("Ciudad: " + persona.ciudad);
//método para cambiar la ciudad
persona.cambiarCiudad("Barcelona");
//mostrar las propiedades actualizadas en la consola
console.log("\nDespués de cambiar la ciudad:");
console.log("Nombre: " + persona.nombre);
console.log("Edad: " + persona.edad);
console.log("Ciudad: " + persona.ciudad);
*/

/*EJERCICIO 2
let libro = {
    titulo: "El Quijote",
    autor: "Paulo Coelho",
    año:1900,
}
//metodo para determinar si el libro es antiguo o no
function comprobarAntiguedad(){
    if((2024-libro.año)>10){
        console.log("El libro:",libro.titulo, "es antiguo", true);
    }else{
        console.log("El libro:",libro.titulo, "es antiguo", false);
    }
}
comprobarAntiguedad();
*/


//6.Arrays
/*EJERCICIO 1
//declarar arrays con numeros del 1 al 10
let numeros = [1,2,3,4,5,6,7,8,9,10];
let numerosMultiplicados = []; //array para almacenar numeros multiplicados
for(let i = 0; i<numeros.length;i++){ //bucle que recorre el array para multiplicar
    let resultado = numeros[i]*2; //multiplicar cada numero por 2
    numerosMultiplicados.push(resultado);//almacenar el resultado en el nuevo array
}
console.log("Números originales:", numeros);
console.log("Números multiplicados por 2:", numerosMultiplicados);
*/

/*EJERCICIO 2
let pares = [];
//bucle for para iterar hasta 20
for (let i = 0; i <= 20 ; i++){
    if(i %2===0){ //verificar si es par
        pares.push(i); //agregar el numero par al array
    }
}
//mostrar array en consola
console.log("Los primeros 10 números pares:", pares);
*/


//7.Introduccion al DOM

/*EJERCICIO 1
//funcion que cambia el color a azul de todos los parrafos
function cambiarcolor() {
    //obtener los elemntos de tipo <p>
    let parrafos = document.getElementsByTagName('p');
    //iterar sobre los elementos y cambiar su color
    for(let i=0; i<parrafos.length;i++){
        parrafos[i].style.color = 'blue'; //cambiar el color a azul
    }
}
const buttonEje7_1 = document.getElementById("eje7_1");
buttonEje7_1.addEventListener("click", () => { cambiarcolor() });
*/

/*EJERCICIO 2
//funcion para mostarr alerta con el valor ingresado
function mostrarAlerta() {
    const inputTexto = document.getElementById("inputTexto").value;
    alert("Has ingresado: "+inputTexto);
}
const formulario = document.getElementById("eje7_2");
formulario.addEventListener("submit", (event) => {
    event.preventDefault(); // Evitar el envío del formulario
    mostrarAlerta();
});
*/


//8.Eventos en DOM

/*EJERCICIO 1 
function mostrarElemento(elemento){
    console.log(elemento.textContent);

}
const elemento1 = document.getElementById("li1");
const elemento2 = document.getElementById("li2");
const elemento3 = document.getElementById("li3");
const elemento4 = document.getElementById("li4");
elemento1.addEventListener("click", () => { mostrarElemento(elemento1)})
elemento2.addEventListener("click", () => { mostrarElemento(elemento2)})
elemento3.addEventListener("click", () => { mostrarElemento(elemento3)})
elemento4.addEventListener("click", () => { mostrarElemento(elemento4)})
*/

/*EJERCICIO 2
// Función para deshabilitar el campo de texto
function deshabilitar() {
    inputText8_2.disabled = true; // Deshabilitar el campo
}

// Función para habilitar el campo de texto
function habilitar() {
    inputText8_2.disabled = false; // Habilitar el campo
}

const buttonEje8_2a = document.getElementById("eje8_2a");
const inputText8_2 = document.getElementById("input8_2");
buttonEje8_2a.addEventListener("click", () => { deshabilitar(inputText8_2) });
const buttonEje8_2b = document.getElementById("eje8_2b");
buttonEje8_2b.addEventListener("click", () => { habilitar(inputText8_2) });
*/


//9.LocalStorage

/*EJERCICIO 1
function guardar(input, texto) {
    const correo = input.value;  // Corregido: Usar .value en lugar de .textContent
    localStorage.setItem("datos", JSON.stringify({ correo }));
    texto.textContent = "Correo guardado: " + correo;
}

function eliminar(input, texto) {
    localStorage.removeItem("datos");  // Corregido: Pasar la clave correcta ("datos")
    texto.textContent = "Correo guardado: ";
}

function verificarCorreoGuardado(texto) {
    const datosGuardados = localStorage.getItem("datos");
    if (datosGuardados !== null) {
        const correo = JSON.parse(datosGuardados).correo;
        texto.textContent = "Correo guardado: " + correo;
    } else {
        texto.textContent = "No hay ningún correo guardado.";
    }
}

const buttonEje9_1a = document.getElementById("eje9_1a");
const buttonEje9_1b = document.getElementById("eje9_1b");
const inputEmail = document.getElementById("inputCorreo");
const texto = document.getElementById("texto1");

window.addEventListener("load", () => {
    verificarCorreoGuardado(texto);
});

buttonEje9_1a.addEventListener("click", () => { guardar(inputEmail, texto) });  // Guardar correo
buttonEje9_1b.addEventListener("click", () => { eliminar(inputEmail, texto) });  // Eliminar correo
*/


