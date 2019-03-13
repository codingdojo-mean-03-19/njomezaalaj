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
    console.log(brendan);
}
brendan = 'super cool';
console.log(brendan); //logs super cool

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
//AFTER HOISTING BY THE INTERPRETER

var food;
food='chicken';
console.log(food);
function eat(){
    var food;
    food='half-chicken';
    console.log(food);
    food = "gone";
}
eat(); //logs chicken half-chicken
//------------------

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

var mean;
mean();
console.log(food);
mean = function(){
    var food;
    food=fish;
    console.log(food);
    var food;
    food="chicken"
    console.log(food);
}
console.log(food); //mean is not a function
//---------------

//6
//console.log(genre);
//var genre = "disco";
//rewind();
//function rewind() {
//	genre = "rock";
//	console.log(genre);
//	var genre = "r&b";
//	console.log(genre);
//}
//console.log(genre);

var genre;
genre="disco";
rewind();
function rewind(){
    var genre;
    genre="rock";
    console.log(genre);
    var genre;
    genre = "r&b";
    console.log(genre);
}
console.log(genre); //logs rock, sdisco and r&b

//----------------


//7
//dojo = "san jose";
//console.log(dojo);
//learn();
//function learn() {
//	dojo = "seattle";
//	console.log(dojo);
//	var dojo = "burbank";
//	console.log(dojo);
//}
//console.log(dojo);
//AFTER HOISTING BY THE INTERPRETER

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    var dojo;
    dojo="burbank"
    console.log(dojo);
	dojo = "seattle";
	console.log(dojo);
	
}
console.log(dojo);//logs san jose, burbank, seattle and san jose


























