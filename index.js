class Ninja {
    constructor(name){
        this.name = name;
        this.health = 100
        this.speed = 3
        this.strength = 3
        
    }

    sayName() {
        console.log("My name is "+ this.name)
    }

    showStats(){
        console.log(this)
    }

    drinkSake(){
        this.health += 10
    }
}   


const ninja1 = new Ninja("Hayabusa");
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();