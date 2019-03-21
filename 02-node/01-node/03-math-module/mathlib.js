module.exports = function (){
    return {
      add: function(num1, num2) { 
           // add code here 
           console.log("Add numbers " + num1 + " and " + num2 + ", the result is:", num1 + num2);
      },
      multiply: function(num1, num2) {
           // add code here 
           console.log("Multiply numbers " + num1 + " and " + num2 + ", the result is:", num1 * num2)
      },
      square: function(num) {
        // add code here 
        console.log("The square number of " + num + " is: ", num * num);
        },
       random: function(num1, num2) {
        // add code here
        console.log("The random number between " + num1 + " and " + num2 + " is:", Math.floor(Math.random() * num1)+ num2);
        }
    }
  };
  