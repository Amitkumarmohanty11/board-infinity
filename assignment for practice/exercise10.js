/*Exercise 10: Find the factorial of a given number
Write a program to use the loop to find the factorial of a given number.
The factorial (symbol: !) means to multiply all whole numbers from the chosen number down to 1.
For example: calculate the factorial of 5
5! = 5 × 4 × 3 × 2 × 1 = 120
Expected output:
120
*/

/*let fact=1;
function factorial(x)
{
    for(let i=1; i<=x; i++)
    {
        
        fact=fact * i;
        
        
    }
    console.log(fact);

}

factorial(5)
*/



let num=5;
let fact=1;


for( num; num>=1;num--)
{
    fact=fact*num;

    


}
console.log(fact);






