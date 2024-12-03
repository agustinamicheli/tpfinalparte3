class Avion {
  constructor(x, y, ruta) {
    this.x = x;
    this.y = y;
    this.ruta = ruta;
    this.imag = null;
    this.vidas = 2;
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
    ellipse(this.x+110,this.y+65, 30, 30);
  }

  teclaPresionada(keyCode) {
    if (keyCode == UP_ARROW) {
      this.moverArriba();
    } else if (keyCode == DOWN_ARROW) {
      this.moverAbajo();
    }
  }

  moverArriba() {
    if (this.y >80) {
      this.y -= 1;
    }
  }

  moverAbajo() {
    if (this.y <260) {
      this.y += 1;
    }
  }
}
