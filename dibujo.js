var d = document.getElementById("dibujito"); //Obtener el elemento apartir de su id en HTML
var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", DibujoPorClick); //Añadir a la variable una funcion para saber cuando ocurre un evento ("Acciòn", Nombre de la funcion)
var lienzo = d.getContext("2d"); //Declarar si el lienzo será "2d o 3d"
var ancho = d.width;

//Declarar nueva función y parametros
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath(); //Arrancar un trazo en Canvas
  lienzo.strokeStyle = color; //Determinar el color de la línea
  lienzo.moveTo(xinicial, yinicial); //Indicar donde arrancará la línea
  lienzo.lineTo(xfinal, yfinal); //Función de trazar una línea
  lienzo.stroke(); //Dibujar la línea
  lienzo.closePath(); //Cerrar el trazo
}

function DibujoPorClick()
{ 
  var lineas = parseInt(texto.value); 
  // .value = Obtener el valor de un formulario 
  // parseInt = Covertir un texto a numero
  var l = 0;
  var yi, xf;
  var xi1, yf1;
  var xi2, yf2;
  var xi3, yf3;
  var colorcito = "blue";
  var colorci = "red";
  var colore = "black";
  var coloreso = "green";
  var espacio = ancho / lineas;

  for(l = 0; l < lineas; l++)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea(colorcito, 0, yi, xf, 300);

    xi1 = espacio * l;
    yf1 = espacio * (l * 1);
    dibujarLinea(colorci, xi1, 0, 300, yf1);

    xi2 = espacio * l;
    yf2 = 290 - (l * espacio);
    dibujarLinea(colore, xi2, 300, 300, yf2);

    xi3 = 300 - (l * espacio);
    yf3 = espacio * l;
    dibujarLinea(coloreso, xi3, 0, 0, yf3);
  }
}
