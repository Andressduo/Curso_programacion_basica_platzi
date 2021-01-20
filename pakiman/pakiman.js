class Pakiman
{
 constructor(n,v,a)
{
this.imagen=new Image();
this.nombre=n;
this.vida=v;    
this.ataque=a;
this.imagen.src= imagenes[this.nombre];
}
hablar()
{
    alert(this.nombre);
}
mostrar()
{
document.body.appendChild(this.imagen);
document.write("<p>");
document.write("<strong><h2>" + this.nombre + "</strong></h2><br>");
document.write("<strong> Ataque= " + this.ataque + "</strong><br>");
document.write("<strong> Vida=" + this.vida + "</strong><br>");
document.write("<hr />");
document.write("</p>");
}
}