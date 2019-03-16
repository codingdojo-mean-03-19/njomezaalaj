function Ninja(name, health) {
    
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;
    
    this.sayName = function() {
        console.log("My name is: " + this.name);
    }
    this.showStats = function() {
        console.log("Name: " + this.name + " Strength: " + strength + " Speed: " + speed + " Health: " + this.health);
    }
    this.drinkSake = function() {
        betterHealth = this.health + 10;
        console.log("My health is: " + betterHealth);
    }

}

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
// -> "My ninja name is Hyabusa!"
ninja1.showStats();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"

var ninja2 = new Ninja("Njomeza");
ninja2.sayName();
ninja2.drinkSake();


