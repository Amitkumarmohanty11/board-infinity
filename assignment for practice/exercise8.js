 /*let x=50

for(let i=25; i<=x; i++)
{
    if(i%2==1)
{
    console.log(i);
}
else
{
    console.log(i);
}
}

/*var x=4

if(x%2==0)
{
    console.log(x);
}
else 
{
    console.log(x);
}*/

function primeNumber(n) {
    for (let i = 2; i < n; i++) {
      if (n % i == 0) {
        return "this is not a prime number";
      }
    }
    return "this is a prime number";
  }
  
  console.log(primeNumber(43));
