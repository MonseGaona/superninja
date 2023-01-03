class Ninja {
    constructor(nombre, salud, fuerza, velocidad) {
    this.nombre = nombre;
    this.salud = 0;
    this.fuerza = 3;
    this.velocidad = 3;
    }
    sayName() {
        console.log(`El ninja es ${this.nombre}`);
    }
    showStats () {
        console.log(
        `El nombre es: ${this.nombre}
         la salud: ${this.salud}
         la fuerza: ${this.fuerza}
         la velocidad: ${this.velocidad}`);
    }
    drinkSake () {
        this.salud += 10;
        console.log(`Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.`);
    }
}
class Sensei extends Ninja {
    constructor(nombre, salud, velocidad, fuerza, sabiduria){
        super(nombre, salud, fuerza, velocidad);
            this.salud = 200;
            this.fuerza = 10;
            this.velocidad = 10;
            this.sabiduria = 10;
    }
    speakWisdom(){
        const mensaje = super.drinkSake();
    }
}

const superSensei = new Sensei ('Master Splinter'); 
superSensei.speakWisdom();
superSensei.showStats();