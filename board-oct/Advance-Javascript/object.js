/* In JavaScript, almost "everything" is an object.

1.Booleans can be objects (if defined with the new keyword)
2.Numbers can be objects (if defined with the new keyword)
3.Strings can be objects (if defined with the new keyword)
4.Dates are always objects
5.Maths are always objects
6.Regular expressions are always objects
7.Arrays are always objects
8.Functions are always objects
9.Objects are always objects


All JavaScript values, except primitives, are objects.*/

/*meanly 2 type of datatype 

1.primitive data type.
2.Nonprimitive data type.


1.primitive data types are.

string
number
boolean
null
undefined
symbol
bigint.

2.Nonprimitive data types are.

Object
array
function
*/

/*
JavaScript variables can also contain many values.

Objects are variables too. But objects can contain many values.

Object values are written as name : value pairs (name and value separated by a colon).*/


//Example.
//const person={firstName:"Amit",lastName:"Kumar",age:20}


//This example creates an empty JavaScript object, and then adds 4 properties:
const person = {};
person.firstName = "Amit";
person.lastName = "Kumar";
person.age = 22;
person.eyeColor = "Black"; 
console.log(person);
console.log(person.firstName + " is " +  person.age + " years old");



const y = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
  }
  console.log(y);

  const x = y;


  console.log(x.age);      
  
  x.firstName="Amit",// Will change both x.age and person.age
  x.lastName="Kumar",// Will change both x.age and person.age
  x.age=22,// Will change both x.age and person.age
  x.eyeColor="Black"// Will change both x.age and person.age
  console.log(x);