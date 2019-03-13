//1
//GIVEN
//console.log(hello);                                   
//var hello = 'world';     
// AFTER HOISTING BY THE INTERPRETER                            


var hello;
console.log(hello); 
hello='world'; // logs undefined

//ES6

console.log(hello);
let hello = 'world';

//-------------------------------------------------------


//2
//GIVEN
//var needle = 'haystack';
//test();
//function test(){
	//var needle = 'magnet';
	//console.log(needle);
//}
//AFTER HOISTING BY THE INTERPRETER

var needle;
function test(){
    var needle;
    console.log(needle);
    needle='magnet'
}
needle='haystack';
test();
console.log(needle);

//ES6

var needle = 'haystack';
test();
function test(){
    let needle = 'magnet';
    console.log(needle);
}
//---------------------------------------------------------

//3
//GIVEN
//var brendan = 'super cool';
//function print(){
	//brendan = 'only okay';
	//console.log(brendan);
//}
//console.log(brendan);
//AFTER HOISTING BY THE INTERPRETER

var brendan;
function print(){
    brendan = 'only okay';
    console.log(brendan); // logs brendan
}
brendan = 'super cool';
console.log(brendan);

//ES6

function print(){
    let brendan ='only okay';
    brendan = 'super coo';
    console.log(brendan);
}

console.log(print());
//-----------------------------------
//4
//GIVEN
//var food = 'chicken';
//console.log(food);
//eat();
//function eat(){
	//food = 'half-chicken';
	//console.log(food);
	//var food = 'gone';
//}
////AFTER HOISTING BY THE INTERPRETER

var food;
food='chicken';
console.log(food);
function eat(){
    var food;
    food='half-chicken';
    console.log(food);
    food = "gone";
}
eat();

//5
//GIVEN
//mean();
//console.log(food);
//var mean = function() {
	//food = "chicken";
	//console.log(food);
	//var food = "fish";
	//console.log(food);
//}
//console.log(food);























