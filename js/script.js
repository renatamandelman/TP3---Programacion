var nombre;
var numRandom;
var intervalId;
var labelInput = document.getElementById("input");
var input = document.querySelector("input");
var imgQuery = document.querySelector("img");
var alt = document.getElementById("textoAlt");
var imagenes = [
  [
    "https://images.pagina12.com.ar/styles/focal_3_2_960x640/public/2022-05/508136-doberman_0.jpg?h=4bf1c8f5&itok=f0a4DTc8",
    "",
  ],
  [
    "https://images.pagina12.com.ar/styles/width960/public/2022-05/508136-rott_0.jpg?itok=92t3YlJM",
    "",
  ],
  [
    "https://loyaldogshop.es/wp-content/uploads/2021/09/beagle-ladrando.jpg",
    "",
  ],
  [
    "https://media.traveler.es/photos/613760adcb06ad0f20e11980/master/w_1600%2Cc_limit/202931.jpg",
    "",
  ],
  [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN4HJhnJo07reTM0Lta1HoTollHloqsqRUVw&usqp=CAU",
    "",
  ],
  [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzaS0EwJ--inZ2UfnDJoxfZOdDPVFuW01v-g&usqp=CAU",
    "",
  ],
  [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyuV8_BN6-fg-tUWVpYBs2BEDIcuV9P8RY8w&usqp=CAU",
    "",
  ],
  [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP2h9rapycZRZjJupxHiIsQ63Ud2JKCtAzFQ&usqp=CAU",
    "",
  ],
  [
    "https://fotografias.antena3.com/clipping/cmsimages01/2022/08/12/F30768A2-C006-4CF1-8701-6026559DB725/mas-4000-perros-utilizados-experimentos-cientificos-buscan-hogar-adopcion_97.jpg?crop=1920,1080,x0,y0&width=1600&height=900&optimize=low&format=webply",
    "",
  ],
  [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg5DIZeWMHqQD7LgZGRL6f1GcMKdHoSbNJlgsePa3aRMi2k4MSEwm1MLR4wr1xrD8LwRA&usqp=CAU",
    "",
  ],
];
var colores = [
  ["rojo", "FF0000"],
  ["azul", "0000FF"],
  ["negro", "000000"],
  ["gris", "808080"],
  ["blanco", "FFFFFF"],
  ["verde", "008000"],
  ["amarillo", "FFFF00"],
  ["violeta", "EE82EE"],
];
// boton para agregar nombre en el h1 y mostrar lo demas
document.getElementById("bienvenido").onclick = function () {
  if (input.value == "") {
    labelInput.style.display = "block";

  } else {
    labelInput.style.display = "none";
  document.getElementById("botones").style.display = "block";

  }

};
document.getElementById("enviar").onclick = function(){
 
  var nombre = input.value;
  var titulo = document.querySelector("h1");
  titulo.innerHTML = "Bienvenido " + nombre + "!";
  labelInput.style.display = "none";
  document.getElementById("botones").style.display = "block";
}
//funcion para obtener imagen random y agregarla al tag
function imagenRandom() {
  numRandom = Math.round(Math.random() * (imagenes.length - 1));
  // console.log(numRandom);
  imgQuery.setAttribute("src", imagenes[numRandom][0]);
}
// boton para imagenes random cada 3 segs
document.getElementById("randomIntervalo").onclick = function () {
  intervalId = setInterval(function () {
    imagenRandom();
    if (imagenes[numRandom][1] == "") {
      alt.style.display = "none";
    } else{
      alt.innerHTML = imagenes[numRandom][1];
      alt.style.display="block"
    }
  }, 3000);
};
// boton para imagenes random
document.getElementById("cambiarImagen").onclick = function () {
  clearInterval(intervalId);
  imagenRandom();
  if (imagenes[numRandom][1] == "") {
    alt.style.display = "none";
  }
};
//boton para agregar texto al alt
document.getElementById("agregarTexto").onclick = function () {
  imagenes [numRandom][1] = prompt("Ingresar texto alternativo");
  // console.log(imagenes[numRandom][1]);
  imgQuery.setAttribute("alt", imagenes [numRandom][1]);

  // console.log(imagenes[numRandom]);
};
// click en imagen y aparece el alt
imgQuery.onclick = function () {
  if (alt.style.display === "none" && imagenes[numRandom][1] != "") {
    alt.style.display = "block";
    alt.innerHTML = imagenes[numRandom][1];
  } else if (imagenes[numRandom][1] == "") {
    alert("No hay una descripción para esta foto");
  } else if (alt.style.display === "block") {
    alt.style.display = "none";
  }
};
// costumizar boton
document.getElementById("costumizar").onclick = function () {
  var color = prompt("ingrese un color de fondo").toLowerCase();
  var hexa;
  for (var i = 0; i < colores.length; i++) {
    if (colores[i][0] === color) {
      hexa = colores[i][1];
      // console.log(hexa);
    }
  }
  if (hexa) {
    imgQuery.style.border = "5px solid #" + hexa;
    imgQuery.style.borderRadius = "2em";
  } else {
    imgQuery.style.border = "5px solid #000000";
    imgQuery.style.borderRadius = "2em";
  }
};
//deshacer costumizacion de la imagen
document.getElementById("deshacer").onclick = function () {
  imgQuery.style.border = "none";
  imgQuery.style.borderRadius = "0";
};
