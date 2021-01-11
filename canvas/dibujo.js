var d=document.getElementById("dibujito");
var lienzo=d.getContext("2d");
dibujarLinea("black",0,0,100,200);
var x,y;
i=1;
while(i<=30)
{
    y=10 * i;
    x=10 * (i+1);
    dibujarLinea("#AAF",0,y,x,300);
    console.log(i);
    i++;
}
x=0;
y=30;
for(i=0;i<30;i++)
{
    y=(30-i)*10;
    x=10 * i;
    dibujarLinea("#AAF",x,300,300,y);
}
x=30;
y=30;
for(i=0;i<30;i++)
{
    y=(30-i)*10;
    x=(29-i)*10;
    dibujarLinea("#AAF",300,y,x,0);
    
}
x=30;
y=0;
for(i=0;i<30;i++)
{
    x=(30-i)*10;
    y=i*10;
    dibujarLinea("#AAF",x,0,0,y);
    console.log("valor x "+x+" valor y "+y+" valor i"+i);
    
}

dibujarLinea("black",1,1,1,300);
dibujarLinea("black",1,299,299,299);
dibujarLinea("black",299,299,299,1);
dibujarLinea("black",1,1,299,1);


function dibujarLinea(color,xInicial,yInicial,xFianl,yFianl)
{
    lienzo.beginPath();
    lienzo.strokeStyle=color;
    lienzo.moveTo(xInicial,yInicial);
    lienzo.lineTo(xFianl,yFianl);
    lienzo.stroke();
    lienzo.closePath();



}
