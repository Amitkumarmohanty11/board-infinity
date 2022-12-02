/*Exercise 11: Reverse a given integer number
Given:
76542
Expected output:
24567
*/

/*Note- We can not directly reverse a integer number so ..fast convert number to string ..then use .split method  now we got a array inside the 
array we got a string like ['123']. now separate the string using .split("") then it look likes ["1","2","3"]. then */ 

function reverse(num)
{
    let x= num.toString().split("").reverse().join("");

    console.log(x);
}
reverse(123)


