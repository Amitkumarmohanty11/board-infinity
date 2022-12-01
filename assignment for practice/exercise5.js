/*Exercise 5: Count the total number of digits in a number
 Q. Write a program to count the total number of digits in a number using a while loop
For example, 
the number is 75869, so the output should be 5.*/

n = 75869;
function countDigit(n)


{
    let count = 0;
    while (n != 0)
    {
        n = Math.floor(n / 10);
        count++;
    }
    return count;
}
 


    
console.log( countDigit(n));
     