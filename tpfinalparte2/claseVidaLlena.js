class VidaLlena {
  constructor(x, y, ruta) {
    this.x = x;
    this.y = y;
    this.ruta = ruta;
    this.imag = null;
    this.visible=true;
  }

  preload() {
    this.imag = loadImage(this.ruta);
  }

  mostrar() {
    if (this.imag && this.visible) {
      image(this.imag, this.x, this.y);
    }
  }

  eliminarVida() {
    this.imag = null;
  }
  
  ocultar(){
    this.visible=false;
  }
}
