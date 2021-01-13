/*En document es donde suceden todos los eventos
referentes al teclado por eso es que usamos document
pare detectar el evento y no el canvas con una var
como botton*/

//keyup es para detectar teclas... y keydown??

var teclas={LEFT:37, DOWN:38, RIGHT:39, UP:40};
document.addEventListener("keyup",dibujarTeclado);
var cuadro=document.getElementById("area_dibujo");
var papel =cuadro.getContext("2d");
var x=150,y=150;
dibujarLinea("red", x-1, y-1, x+1, y+1, papel);
console.log(document);
console.log(window);
console.log(area_dibujo);
    document-addEventListener("mouseup",dibujarMouse);
function dibujarTeclado(evento)
{
    var colorcito="blue";
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
    lienzo.lineWidth=3;
    lienzo.strokeStyle=color;
    lienzo.moveTo(xInicial,yInicial);
    lienzo.lineTo(xFianl,yFianl);
    lienzo.stroke();
    lienzo.closePath();



}
function dibujarMouse(evento)
{
console.log(evento);
}
