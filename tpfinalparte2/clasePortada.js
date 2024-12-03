class Portada {
  constructor() {
    this.juego = new Principal();
    this.botonIniciar = new Botones(440, 380, 100, 50, "Iniciar", 465, 410);
    this.botonCreditos = new Botones(100, 380, 100, 50, "Creditos", 115, 410);
    this.botonReiniciar = new Botones(270, 280, 100, 50, "Reiniciar", 285, 310);
    this.botonVolver = new Botones(285, 380, 100, 50, "Volver", 310, 410);
    this.estado = "Portada";
    this.desplazamiento= 0;
    this.sonido= null;
  }

  preload() {
    this.juego.preload();
    this.sonido=loadSound("data/isla.mp3");
  }

  mostrar() {
    console.log(this.estado);
    if (this.estado==="Portada") {
      this.sonido.stop();
      background(101, 192, 209);
      textSize(48);
      fill(255);
      text("La isla a Mediodia", 120, 100);
      textSize(20);
      text("Sos un avion con 2 vidas que debe recorrer la isla esquivando obstaculos durante 40 segundos. Subis y bajas con las flechas de arriba y abajo. Intenta no estrellarte!!",120,170,400);
      this.botonCreditos.mostrar();
      this.botonIniciar.mostrar();

      if (this.botonIniciar.detectar()) {
        this.estado="Juego";
      } else if (this.botonCreditos.detectar()) {
        this.estado="Creditos";
      }
    }


    if (this.estado==="Creditos") {
      background(101, 192, 209);
      fill(255);
      textSize(25);
      text("Creado y programado por:", 180, 50);
      text("Imagenes creadas por:", 200, 150);
      textSize(18);
      text("Micheli Agustina y Lopez Guadalupe", 175, 100);
      text("Adobe", 310, 200);
      this.botonVolver.mostrar();
      if (this.botonVolver.detectar()) {
        this.estado="Portada";
      }
    }

    if (this.estado==="Juego") {
      if (!this.sonido.isPlaying()) {
        this.sonido.play();
      }
      if(this.juego.finalizado){
        if(this.juego.resultado === "gana"){
          this.estado="Ganar";
        }else{
          this.estado="Perder";
        }
        this.reiniciar();
      }else{
        background(255);
        this.juego.mostrar();
        if (keyIsPressed === true) {
          this.juego.teclaPresionada(keyCode);
        }
        this.desplazamiento++;
        this.juego.iniciar(this.desplazamiento);
      }
    }

     if (this.estado==="Perder") {
       background(0);
       fill(255,0,0);
       textSize(48);
       text("GAME OVER", 180,200);
       this.botonReiniciar.mostrar();
       if (this.botonReiniciar.detectar()) {
         this.estado="Portada";
       }
     }
     
     if (this.estado==="Ganar") {
       background(0);
       fill(0,255,0);
       textSize(48);
       text("WIN", 270,200);
       this.botonReiniciar.mostrar();
       if (this.botonReiniciar.detectar()) {
         this.estado="Portada";
       }
     }
  }
  
  reiniciar(){
      this.desplazamiento= 0;
      this.juego.reiniciar();
  }
}
