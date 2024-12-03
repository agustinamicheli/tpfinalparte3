class VidaVacia {
  constructor(x, y, ruta) {
    this.x = x;
    this.y = y;
    this.ruta = ruta;
    this.imag = null;
    this.visible=false;
  }

  preload() {
    this.imag = loadImage(this.ruta);
  }

  mostrar() {
    if (this.imag && this.visible) {
      image(this.imag, this.x, this.y);
    }
  }
  
  activar(){
    this.visible=true;
  }
}
