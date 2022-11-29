//What is function
/*Bulding blocks in javascript and it is a procedure a set of statements that performe some task or calculation*/


//Programming is  2 types

/*  1-OOPs
    2-Functions programming */



    //FUNCTIONS
/* -function help in code reuseablity
 step 1- create a function
 step 2- function declaration 
 step 3- function expressions
 */


//Write a program print 1 to 5 number


 function printValue()
 {
    let a=1
    while(a<=5)
    {
        console.log(a);
        a++;
    }
 }
 printValue()



 console.log("amit");


 //Write a program get different output 

 function i(x,y)
 {
    let sum = x+y;
    console.log(sum);

 }
 i(10,20);
 i(30,50)

 console.log("asit");



 function amit(x,y)
 {
    if(x==10 || x==30)
    {
        return
    }


    let sum = x+y;
    console.log(sum);
 }
 amit(10,10);
 amit(20,20);
 amit(30,30);


 console.log("ashish");


 function get(x,y)
 {
    return(x+y)

 }
 get(100,200);
 console.log(get(100,200));



 //EXECUTION CONTEXT(EC).

 /* -Everything in javascript happens inside EC

 Javascript run in 2 phases

 1-Memory creation phase
 2-Code execution phase
 */


 //let example
 console.log("butu");

 
 let num=10
 console.log(num);
 console.log("bye");

 console.log("pratik");

 let n=10
 function abc()
 {
    let n=20;
    console.log(n);
 }
 console.log(num);
 abc();
 console.log("Hii..every one");



 
