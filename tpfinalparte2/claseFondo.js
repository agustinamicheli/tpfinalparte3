class Fondo {
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
  }
}
