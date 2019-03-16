function Ninja(name) {
    
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;
    
    
    this.showStats = function() {
        console.log("Name: " + this.name + " Strength: " + strength + " Speed: " + speed + " Health: " + this.health);
        return this;
    }


    this.kick = function(ninja) {
        ninja.health -= strength * 15;
        console.log(ninja.name + " was kicked by " + this.name + " and lost 15 Health!");
        return this;
    }

    Ninja.prototype.sayName = function() {
        console.log("My name is: " + this.name);
        return this;
    }

    Ninja.prototype.drinkSake = function() {
        this.health +=10;
        return this;
    }

    Ninja.prototype.punch = function(ninja) {
        ninja.health -= 5;
        console.log(ninja.name + " was punched by " + this.name + " and lost 5 Health!");
        return this;
    }

    Ninja.prototype.kick = function(ninja){
        strength = health - 15;
    }

}



var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");


blueNinja.punch(redNinja);

blueNinja.showStats();

blueNinja.kick(redNinja);