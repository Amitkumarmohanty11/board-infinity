//What is Events 
/*
1.Events are occarences that happens in a system.
2.System talls as about the events so that we acn react to it.
3.System is browser in case of javascript.
4.Events are fired inside browser window.

Example...

1.when a user selects,click or hovers the curson on some element.
2. user chooses a key on the keyboard
etc...*/


/*console.log("start");

setTimeout(function x()
{
    console.log("run")
},5000);
//x()
console.log("end");
*/

console.log("star");

setTimeout(function x()
{
    console.log("run")
},5000);


fetch("https://api.netflix.com").then(function y() {
    console.log("CB Netflix");
})
console.log("end");