class Pajaro {
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
    ellipse(this.x+20, 190, 30, 30);
  }
  mover() {
    this.x --;
    if (this.x<-50) {
      this.x=width+50;
    }
  }
  colision(x_, y_) {
    this.distancia= dist(this.x+20, 190, x_+110, y_+65)
      if (this.distancia<25) {
      return true
    }
  }

  reiniciar() {
    this.x= 900;
    this.y= 150;
  }
}
