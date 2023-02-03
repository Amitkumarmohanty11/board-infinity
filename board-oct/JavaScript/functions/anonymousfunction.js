
//Annymous Function

/*Annymous Function does not have their own identity that means if you create an Annymous Function like this .
 this will resultout to be a  syntax error 
  ..Annymous Function is look like similar to function declaration  but it has no name but according to 
  Ecmascript specification a function statement should always have a name so this is a invalid syntax 

  example..
  
  */

  /*function () {
    console.log(" b called")
  }
  
  */
  // output show--function statement require a function name.


  //use of  Annymous Function.
// Annymous Function are used in a place where functions are used as values ..








//------------------------------------------------------------------------------------------------------------------


//Function Statement. or Declaration
/*
function a(){
    console.log("a called");
}
a();

//Function Expression 
var b= function(){
    console.log(" b called")

}
b();
*/

// Q.--Difference between  function Declaration or Statement v/s function expression .

/*
a();//  show output-- a called
b();//  show output-- b is not a function ---because we can not call before 


//Function Statement. or Declaration
function a(){
    console.log("a called");
}


//Function Expression 
var b= function(){
    console.log(" b called")

}

*/

//-------------------------------------------------------------------------------------------------------


//Q--Difference between function parameters v/s Arguments..


//function parameters.
//these level and identifier which gets those values are known as parameter 
var b= function( parameter1, parameter2)// this is parameter
{
    console.log(" b called")

}
b();


//function Arguments..
//the values pass inside a function are known as arguments.
var b= function( parameter1, parameter2)// this is parameter
{
    console.log(" b called")

}
b(2,4);// this is Arguments.



//--------------------------------------------------------------------------------------------

//Q-- What is First class function 
/*
Ans-The ability of function to be used as values and can be pass this in an argument to another function and
 can be returned from the functions is this ability is known as first class function in javascript
*/
//example.

var b= function(param1){
    return function xyz(){

    }
}

console.log(b());

//function is the first class citizens