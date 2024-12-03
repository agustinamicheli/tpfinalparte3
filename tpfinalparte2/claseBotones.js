class Botones {
  constructor(bx_, by_, ancho_, alto_, texto_, xTexto_, yTexto_) {
    this.bx= bx_;
    this.by = by_;
    this.ancho = ancho_;
    this.alto = alto_;
    this.texto = texto_;
    this.xTexto = xTexto_;
    this.yTexto = yTexto_;
  }

  mostrar() {
    push();
    noStroke();
    if (this.detectar(this.bx, this.by, this.ancho, this.alto)) {
      fill(237, 150, 84);
    } else {
      fill(237, 165, 110);
    }
    rect(this.bx, this.by, this.ancho, this.alto, this.alto/4);
    fill(255);
    textSize(18);
    text(this.texto, this.xTexto, this.yTexto);
    pop();
  }

  detectar() {
     if(mouseIsPressed && mouseX<this.bx + this.ancho && mouseX>this.bx-this.ancho && mouseY >this.by-this.alto && mouseY < this.by+this.alto){
       return true
    }
  }
}
