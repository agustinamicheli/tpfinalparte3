//Micheli Agustina y Guadalupe Lopez
//Comision 1
//https://youtu.be/YljZ104we6I

let pantalla;

function preload() {
  pantalla= new Portada();
  pantalla.preload();
}

function setup() {
  createCanvas(640, 480);
  
}

function draw() {
  pantalla.mostrar();
  
}
