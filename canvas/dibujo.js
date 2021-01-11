var d=document.getElementById("dibujito");
var lienzo=d.getContext("2d");
dibujarLinea("black",0,0,100,200);
function dibujarLinea(color,xInicial,yInicial,xFianl,yFianl)
{
    lienzo.beginPath();
    lienzo.strokeStyle=color;
    lienzo.moveTo(xInicial,yInicial);
    lienzo.lineTo(xFianl,yFianl);
    lienzo.stroke();
    lienzo.closePath();



}
