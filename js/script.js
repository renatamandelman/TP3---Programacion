var nombre;
var imagenes = [
    ["https://cdn.memegenerator.es/imagenes/memes/thumb/13/94/13947420.jpg",""],
    ["https://cdn.memegenerator.es/imagenes/memes/full/0/27/277525.jpg", ""],
    ["https://i.pinimg.com/564x/99/02/db/9902dbd88c58a9f435ec54aa124320b1.jpg",""],
    ["https://images3.memedroid.com/images/UPLOADED305/5e07ad7153093.jpeg", ""],
    ["https://cdn.memegenerator.es/descargar/28636752",""],
    ["https://static.wikia.nocookie.net/c66a6bcd-2bab-4800-be6f-419002fe52f6",""],
    []
]
document.getElementById("bienvenido").onclick = function (){
   nombre= prompt("Ingrese su nombre");
   var titulo = document.querySelector("h1");
   titulo.innerHTML = "Bienvenido " + nombre + "!";
   document.getElementById('botones').style.display = 'block';
  };