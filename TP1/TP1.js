//Punto 1
document.getElementById("titulo").innerHTML = "Hola";

const prparrafo = document.getElementsByClassName("parrafo");
if (prparrafo.length > 0) {
  prparrafo[0].style.color = "crimson";
}

const caja = document.querySelector("#contenedor");
caja.style.backgroundColor = "black";

//Punto 2
const botonClick = document.getElementById("boton");

botonClick.addEventListener("click", function () {
  alert("Click detectado");
  botonClick.innerHTML = "¡Gracias!";
});

//Punto 3
const input = document.getElementById("inputarea");
const botonTarea = document.getElementById("botontarea");
const lista = document.getElementById("ultarea");

botonTarea.addEventListener("click", function () {
  const texto = input.value.trim();
  if (texto === "") return;

  const li = document.createElement("li");
  li.textContent = texto + " ";

  //Punto 4
  const botEliminar = document.createElement("button");
  botEliminar.textContent = "Eliminar";

  botEliminar.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(botEliminar);
  lista.appendChild(li);

  input.value = "";
});

//Punto 5
const inputEmail = document.querySelector('input[type="email"]');
const inputPassword = document.querySelector('input[type="password"]');

inputEmail.style.border = "2px solid blue";

inputPassword.placeholder = "Ingrese su contraseña";
//Punto 6
const inputComentario = document.getElementById("inputComentario");
const botonPublicar = document.getElementById("botonPublicar");
const listaComentarios = document.getElementById("listaComentarios");

botonPublicar.addEventListener("click", function () {
  const texto = inputComentario.value.trim();
  if (texto === "") return;

  const li = document.createElement("li");
  li.textContent = texto + " ";

  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";

  botonEliminar.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(botonEliminar);
  listaComentarios.appendChild(li);

  inputComentario.value = "";
});