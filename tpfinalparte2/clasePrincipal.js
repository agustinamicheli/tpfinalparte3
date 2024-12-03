class Principal {
  constructor() {
    this.fondo= new Fondo(0, 110, "data/fondo.png");
    this.avion= new Avion(10, 170, "data/avion.png");
    this.palmera= new Palmera(1200, 210, "data/palmera.png");
    this.piedra = new Piedra(640, 268, "data/piedra.png");
    this.pajaro= new Pajaro(900, 150, "data/pajaro.png");
    this.vidasLlenas=[];
    this.vidasLlenas[0]= new VidaLlena(550, 120, "data/corazonLleno.png");
    this.vidasLlenas[1]= new VidaLlena(590, 120, "data/corazonLleno.png");
    this.vidasVacias=[];
    this.vidasVacias[0]= new VidaVacia(550, 120, "data/corazonVacio.png");
    this.vidasVacias[1]= new VidaVacia(590, 120, "data/corazonVacio.png");
    this.finalizado=false;
    this.resultado="";
    this.tiempo=40;
    this.tiempoIniciado=null;
  }


  preload() {
    this.fondo.preload();
    this.avion.preload();
    this.palmera.preload();
    this.piedra.preload();
    this.pajaro.preload();
    for (let i=0; i<2; i++) {
      this.vidasLlenas[i].preload();
      this.vidasVacias[i].preload();
    }
  }

  mostrar() {
    this.fondo.mostrar();
    this.avion.mostrar();
    for (let i=0; i<2; i++) {
      this.vidasLlenas[i].mostrar();
      this.vidasVacias[i].mostrar();
    }
  }

  iniciar(desplazamiento) {
    if (this.tiempoIniciado==null) {
      this.tiempoIniciado=millis();
    }
    let tiempoActual= millis()-this.tiempoIniciado;
    let tiempoRestante= this.tiempo - Math.floor(tiempoActual/1000);
    if (tiempoRestante >=0) {
      fill(0);
      textSize(15);
      text(tiempoRestante, 10, 130);
      if (desplazamiento > 8) {
        this.piedra.mostrar();
        this.piedra.mover();

        if (desplazamiento > 12) {
          this.pajaro.mostrar();
          this.pajaro.mover();

          if (desplazamiento > 18) {
            this.palmera.mostrar();
            this.palmera.mover();
          }
        }
      }

      if (this.piedra.colision(this.avion.x, this.avion.y)) {
        this.piedra.x=width+ 300; 
        this.descontarVida();
      }

      if (this.palmera.colision(this.avion.x, this.avion.y)) {
        this.palmera.x=width+300;
        this.descontarVida();
      }
      if (this.pajaro.colision(this.avion.x, this.avion.y)) {
        this.pajaro.x=width+400;
        this.descontarVida();
      }
    } else {
      this.jugadorGana();
    }
  }

  reiniciar() {
    for (let i=0; i<2; i++) {
      this.vidasLlenas[i].visible=true;
      this.vidasVacias[i].visible=false;
    }
    this.finalizado=false;
    this.resultado="";
    this.tiempoIniciado=null;
    this.tiempo=40;
    this.piedra.reiniciar();
    this.palmera.reiniciar();
    this.pajaro.reiniciar();
  }

  jugadorGana() {
    this.finalizado=true;
    this.resultado="gana";
  }

  jugadorPierde() {
    this.finalizado=true;
    this.resultado="pierde";
  }

  teclaPresionada(keyCode) {
    if (this.avion) {
      this.avion.teclaPresionada(keyCode);
    }
  }

  descontarVida() {
    for (let i=0; i<2; i++) {
      if (this.vidasLlenas[i].visible) {
        this.vidasLlenas[i].ocultar();
        this.vidasVacias[i].activar();
        if (i==1) {
          this.jugadorPierde();
        }
        break;
      }
    }
  }
}
