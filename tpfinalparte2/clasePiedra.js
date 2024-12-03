class Piedra {
  constructor(x, y, ruta) {
    this.x = x;
    this.y = y;
    this.ruta = ruta;
    this.imag = null;
  }

  preload() {
    this.imag = loadImage(this.ruta);
  }

  mostrar() {
    if (this.imag) {
      image(this.imag, this.x, this.y);
    }
    noStroke();
    noFill();
    ellipse(this.x+40, 300, 60, 60);
  }

  mover() {
    this.x --;
    if (this.x<-50) {
      this.x=width+50;
    }
  }

  colision(x_, y_) {
    this.distancia= dist(this.x, this.y, x_, y_)
      if (this.distancia<90) {
      return true
    }
  }
    reiniciar(){
       this.x= 640;
       this.y= 268;
  }
}
