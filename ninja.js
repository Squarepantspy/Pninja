//practica tarea
class ninja {
    constructor(nombre){
        this.nombre= nombre;
        this.salud= 100;
        this.velocidad= 3;
        this.fuerza=3;
    }

    sayName(){
        console.log(`El nombre del ninja es ${this.nombre}`);
    }
    showStats(){
        console.log( `Las especificaciones del ninja son nombre : ${this.nombre} , fuerza : ${this.fuerza} , velocidad : ${this.velocidad} , salud :${this.salud}  `);
    }
    drinkSafe(){
        this.salud+=10;
    }


}

const ninja1 = new ninja("Hazbullah"); // creamos una instancia/objeto de ninja y lo llamamos ninja1
ninja1.sayName();
ninja1.showStats();

ninja1.drinkSafe(); //llamamos al metodo aumentar salud
ninja1.showStats(); //comprobacion si funciona el metodo drinkSafe() de la clase ninja