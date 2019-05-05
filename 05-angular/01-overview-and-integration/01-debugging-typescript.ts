//1.Setting Types

var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
//Since variable is of type string, number 9 should be put into quotes ""
myString = "9";

//2. Setting the types for function parameters

function sayHello(name: string){
    return `Hello, ${name}!`;
 }
 // This is working great:
 console.log(sayHello("Kermit"));
 // Why isn't this working? I want it to return "Hello, 9!"
 //Function parameters are of type string, so we should put 9 into quotes
 console.log(sayHello("9"));

 //3. Optional parameters

 function fullName(firstName: string, lastName: string, middleName?: string){
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
 }
 // This works:
 console.log(fullName("Mary", "Moore", "Tyler"));
 // What do I do if someone doesn't have a middle name?
 //Putting ? (optional) during declaration of variable
 console.log(fullName("Jimbo","Jones"));

 //4.Interfaces and function parameter

 interface Student {
    firstName: string;
    lastName: string;
    belts: number;
 }
 function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
 }
 const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
 }
 const jay = {
    firstName: "Jay",
    lastName: "Patel",
    //Letter "s" is omitted, it should be the same as at the property of an object (interface)
    belts: 4
 }
 // This seems to work fine:
 console.log(graduate(christine));
 // This one has problems:
 console.log(graduate(jay));

 //5. Classes and function parameters

 class Ninja {
    fullName: string;
    constructor(
       public firstName: string,
       public lastName: string){
          this.fullName = `${firstName} ${lastName}`;
       }
    debug(){
       console.log("Console.log() is my friend.")
    }
 }
 // This is not making an instance of Ninja, for some reason:
 //"new" should be included to make an instance, and two arguments are expected (as declared at constructor)
 const shane = new Ninja("Alan","Turing");
 // Since I'm having trouble making an instance of Ninja, I decided to do this:
 const turing = {
    fullName: "Alan Turing",
    firstName: "Alan",
    lastName: "Turing"
 }
 // Now I'll make a study function, which is a lot like our graduate function from above:
 function study(programmer: Ninja){
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
 }
 // Now this has problems:
 //instead of argument turing we change it to corrected instance of Ninja "shane"
 console.log(study(shane));


 //6. Arrow functions

 var increment = x => x + 1;
// This works great:
console.log(increment(3));
//delete the brackets 
var square = x => x * x;
console.log(square(4));
// This is not working:
// Parameters x,y should be passed into angular brackets
var multiply = (x,y) => x * y;
// Function body should be put into curly brackets, because it consists more than one statement
var math = (x, y) => {
   let sum = x + y;
   let product = x * y;
   let difference = Math.abs(x-y);
   return [sum, product, difference];
}


//7. Arrow functions and 'this'

class Elephant {
    constructor(public age: number){}
    //using arrow function (age is parameter)
    birthday = age=>{
       this.age++;
    }
 }
 const babar = new Elephant(8);
 setTimeout(babar.birthday, 1000)
 setTimeout(function(){
    console.log(`Babar's age is ${babar.age}.`)
    }, 2000)
