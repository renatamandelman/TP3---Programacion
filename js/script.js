var nombre;
var numRandom;
var imagenes = [
    ["https://imagenes.muyinteresante.es/files/composte_image/uploads/2023/09/01/64f19def1a685.jpeg",""],
    ["https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=1200,height=900,fit=cover/article/main-picture/5d679e9696b3d727716529.jpg", ""],
    ["https://t1.uc.ltmcdn.com/es/posts/5/1/6/como_saber_si_mi_perro_sera_grande_43615_600.webp",""],
    ["https://media.traveler.es/photos/613760adcb06ad0f20e11980/master/w_1600%2Cc_limit/202931.jpg", ""],
    ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN4HJhnJo07reTM0Lta1HoTollHloqsqRUVw&usqp=CAU",""],
    ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzaS0EwJ--inZ2UfnDJoxfZOdDPVFuW01v-g&usqp=CAU",""],
    ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyuV8_BN6-fg-tUWVpYBs2BEDIcuV9P8RY8w&usqp=CAU",""],
    ["https://www.nationalgeographic.com.es/medio/2023/05/30/pastor-belga-1_78c40c60_230530100802_800x800.jpg",""],
    ["https://img.huffingtonpost.es/files/image_720_480/uploads/2023/10/06/un-dogo-de-burdeos.jpeg",""],
    ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg5DIZeWMHqQD7LgZGRL6f1GcMKdHoSbNJlgsePa3aRMi2k4MSEwm1MLR4wr1xrD8LwRA&usqp=CAU",""]    
]
document.getElementById("bienvenido").onclick = function (){
   nombre= prompt("Ingrese su nombre");
   var titulo = document.querySelector("h1");
   titulo.innerHTML = "Bienvenido " + nombre + "!";
   document.getElementById('botones').style.display = 'block';
   setInterval(function() {
    document.getElementById("cambiarImagen").onclick();
}, 3000);
  };

document.getElementById("cambiarImagen").onclick = function() {
     numRandom = Math.round((Math.random() * ((9-1)+ 1) + 1));
    console.log(numRandom)
    document.querySelector("img").setAttribute("src",""+ imagenes[numRandom]+";");

}

document.getElementById("agregarTexto").onclick = function(){
    
    var texto = prompt("Ingresar texto alternativo");
    imagenes[numRandom].splice(1,1,texto);
    console.log(imagenes[numRandom])
    
}
document.querySelector("img").onclick = function(){
    
    document.getElementById("textoAlt").innerHTML = "" ;
}
