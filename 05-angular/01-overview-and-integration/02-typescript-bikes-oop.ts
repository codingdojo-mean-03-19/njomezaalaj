class Bike{
    price:number;
    max_speed:number;
    miles:number;
    constructor(price:number, max_speed:number){
        this.price = price;
        this.max_speed=max_speed;
        this.miles=0;
    }
    displayInfo(){
        console.log("Price:", this.price,"Maximum speed:",this.max_speed,"mph Miles:",this.miles);
        }
    ride(){
        console.log('Riding');
        this.miles +=10;
        return this;
    }
    reverse(){
        console.log('Reverse');
        if(this.miles >=5){
            this.miles-=5;
        }
        return this;
    }
}

var bike1 = new Bike(200, 25);
bike1.ride().ride().ride().reverse().displayInfo();

var bike2 = new Bike(100, 30);
bike2.ride().ride().reverse().reverse().displayInfo();

var bike3 = new Bike(140, 40);
bike3.reverse().reverse().reverse().displayInfo();
