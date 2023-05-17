const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

/* Bienvenidos de nuevo a la pizzeria de Nucba!🍕 

Para esta entrega vamos a estar mezclando el array de pizzas de la anterior entrega con el DOM y el Localstorage.

El ejercicio que deberán realizar es el siguiente:

👉 Les dejamos como archivo adjunto la base para realizar el ejercicio, en la cual tendrán el html y css vacíos , una carpeta img y el index.js que tendrá el nuevo array de pizzas, en donde cada pizza tendrá una propiedad imagen además de las propiedades que tenía en el ejercicio anterior.

👉 Crear un archivo HTML que tenga un input de tipo "number", un botón y un contenedor en el cual renderizar el resultado de la búsqueda que se haga. 

👉 Al apretar el botón , deberán capturar el valor ingresado en el input (Que será un número) mediante el evento "submit" si están usando un formulario o bien el evento "click" si quieren manejarlo desde el botón.

👉 Si el número ingresado en el input es valido(existe una pizza cuyo id coincida con el número ingresado en el input), se deberá renderizar en el contenedor una card con los datos de la pizza cuyo id coincida con el número ingresado en el input. La card deberá contener mínimamente el nombre, imagen y y precio de la pizza (Estilizarlo con CSS 🎨) 

🚨 Si el número ingresado no coincide con ningún id, renderizar (no sirve un alert) un mensaje de error en el contenedor. 
🚨 Si no se ingresa un número, renderizar (no sirve un alert) un mensaje de error diferente en el contenedor. 
🚨 Solo debe renderizarse una única cosa , ya sea la nueva pizza, o el nuevo mensaje de error. El resto del contenido de nuestro contenedor se deberá pisar por lo nuevo.

El input y el botón no se debén pisar, ya que debemos poder seguir haciendo busquedas.

¿Cuál es el desafío final?

Deberán guardar en localStorage la última pizza buscada y renderizada, y al recargar la página será esa pizza la que se deberá mostrar en la página. No guardar en el localstorage en caso de que lo buscado haya generado un error, solamente persistir los datos cuando se haya encontrado una pizza. */


const boton = document.querySelector(".botonEnviar");
const contenedorPizzas = document.querySelector(".contenedorPizzas");

/* Al apretar el botón , deberán capturar el valor ingresado en el input (Que será un número) mediante el evento "submit" si están usando un formulario o bien el evento "click" si quieren manejarlo desde el botón. */

let traerCard = () => {
  const inputNumero = parseInt(document.querySelector(".inputNumber").value);
  const pizzaEncontrada = pizzas.find((pizza) => pizza.id === inputNumero);

  if (pizzaEncontrada) {
    contenedorPizzas.innerHTML = `
    <h2 class="nombrePizza">${pizzaEncontrada.nombre}</h2>
    <img class="imagen" src="${pizzaEncontrada.imagen}" alt="">
    <h3>Precio: ${pizzaEncontrada.precio}</h3>
    `;
  } 
  else{
    contenedorPizzas.innerHTML = `
    <h2 class="nombrePizza">La pizza que buscas no existe.</h2>
    <img class="imagen" src="img/png-clipart-emos-crying-emoji.png" alt="">
    <h3>Vuelve a ingresar valor de ID</h3>
    `;
  }
};

/* Si no se ingresa un número, renderizar (no sirve un alert) un mensaje de error diferente en el contenedor.  */
let ingresoValor = (funcionCard) =>{
  const inputNumero = document.querySelector(".inputNumber");
  if (inputNumero.value.trim() == "") {
    contenedorPizzas.innerHTML =`
    <h2 class="nombrePizza">Error. Debe ingresar un valor al input</h2>
    <img class="imagen"  src="img/enojoNoEncontro.jpg" alt="" srcset="">
    <h3>Ingrese un valor porfavor.</h3>
    `;
  } else{
    return funcionCard
  }
}

let cargarDatos = () =>{
  ingresoValor(traerCard());
  
}

boton.addEventListener("click", cargarDatos);


/* Deberán guardar en localStorage la última pizza buscada y renderizada, y al recargar la página será esa pizza la que se deberá mostrar en la página. No guardar en el localstorage en caso de que lo buscado haya generado un error, solamente persistir los datos cuando se haya encontrado una pizza. */
window.addEventListener("load")