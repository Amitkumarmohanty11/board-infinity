//Q. Write a program to print the following number pattern using a loop..?

let i=1
let j=1
let pattern=""
for(let i=1; i<=5;i++)
{
    for(let j=1; j<=i; j++)
    
    {
        pattern= pattern + j;
    
    }
    pattern = pattern + "\n" ;
}
console.log(pattern);