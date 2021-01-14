/*En document es donde suceden todos los eventos
referentes al teclado por eso es que usamos document
pare detectar el evento y no el canvas con una var
como botton*/

//keyup es para detectar teclas... y keydown??

var teclas={LEFT:37, DOWN:38, RIGHT:39, UP:40};
var cuadro=document.getElementById("area_dibujo");
var papel =cuadro.getContext("2d");
var colorfuente="blue";
var grosor=3;

var fuente=
{
   verde :document.getElementById("colorVerde"),
   azul :document.getElementById("colorAzul"),
   negro : document.getElementById("colorNegro"),
   rojo :document.getElementById("colorRojo"),
   blanco : document.getElementById("colorBlanco"),
   grueso : document.getElementById("grosor1"),
   delgado : document.getElementById("grosor2")
    
}
fuente.verde.addEventListener("click", cambiarColorVerde );
fuente.azul.addEventListener("click", cambiarColorAzul );
fuente.negro.addEventListener("click", cambiarColorNegro );
fuente.rojo.addEventListener("click", cambiarColorRojo );
fuente.blanco.addEventListener("click", cambiarColorBlanco );
fuente.grueso.addEventListener("click", cambiarGrosorMas );
fuente.delgado.addEventListener("click", cambiarGrosorMenos );
document.addEventListener("keyup",dibujarTeclado);


var x=150,y=150;
var click=false;
dibujarLinea("red", x-1, y-1, x+1, y+1, papel);
    document.addEventListener("mousedown",dibujarMouse);
    document.addEventListener("mouseup",soltarMouse);
    document.addEventListener("mousemove",pintarMouse);

function dibujarTeclado(evento)
{
    var colorcito=colorfuente;
    var movimiento=10;
switch(evento.keyCode)
{
case teclas.UP: 
    dibujarLinea(colorcito,x,y,x,y+movimiento,papel);
    y=y+movimiento;
    break;
case teclas.DOWN:
    dibujarLinea(colorcito,x,y,x,y-movimiento,papel);
    y=y-movimiento;
    break;
case teclas.LEFT:
    dibujarLinea(colorcito,x,y,x-movimiento,y,papel);
    x=x-movimiento;
    break;
case teclas.RIGHT:
    dibujarLinea(colorcito,x,y,x+movimiento,y,papel);
    x=x+movimiento; 
    break;
}
}
function dibujarLinea(color,xInicial,yInicial,xFianl,yFianl,lienzo)
{
    lienzo.beginPath();
    lienzo.lineWidth=grosor;
    lienzo.strokeStyle=color;
    lienzo.moveTo(xInicial,yInicial);
    lienzo.lineTo(xFianl,yFianl);
    lienzo.stroke();
    lienzo.closePath();



}
function dibujarMouse(evento2)
{
var colorcito=colorfuente;
 click=true;
x=(evento2.layerX+1);
y=(evento2.layerY+1);  
    dibujarLinea(colorcito,x,y  ,evento2.layerX-1,evento2.layerY-1,papel);
    x=evento2.layerX;
    y=evento2.layerY;  
    
}
function soltarMouse(evento)
{
     click=false;

}
function pintarMouse(evento)
{
var colorcito=colorfuente;
x=(evento.layerX+1);
y=(evento.layerY+1);  
    if (click==true){
    dibujarLinea(colorcito,x,y  ,evento.layerX-1,evento.layerY-1,papel);
    x=evento.layerX;
    y=evento.layerY;  
    }    
}
function cambiarColorVerde()
{
    colorfuente="green";
}
function cambiarColorRojo()
{
    colorfuente="red";
}
function cambiarColorBlanco()
{
    colorfuente="white";
}
function cambiarColorNegro()
{
    colorfuente="black";
}
function cambiarColorAzul()
{
    colorfuente="blue";
}
function cambiarGrosorMas()
{
grosor++;
}
function cambiarGrosorMenos()
{
grosor--;
}