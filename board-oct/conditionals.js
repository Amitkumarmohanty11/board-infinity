/*In JavaScript we have the following conditional statements:

Use IF to specify a block of code to be executed, if a specified condition is true
Use ELSE to specify a block of code to be executed, if the same condition is false
Use ELSE IF to specify a new condition to test, if the first condition is false
Use SWITCH to specify many alternative blocks of code to be executed*/



//if condition

/*if(condition)
{

}*/

const a=10
const b=100
if(a<=b)
{ 
    console.log(b)
}


//if else condition

/*if(condition)
{

}
else
{

}*/

const x=10
const y=100
if(x>=y)
{ 
    console.log(X + "is gratter")
}
else{
    console.log(y + "is gratter")
}


//else if 
/* if(condition)
    {

    }
    else if(condition)
    {

    }
    esle
    {

    }*/

    const d=89
    const e=56
    const f=90
    if(d>e && d>f)
    {
        console.log(d + "is gratter")
    }
    else if(e>d && e>f)
    {
        console.log(e + "is gratter")
    }
    else{
        console.log(f + "is gratter")
    }

//orogram for homework

    const s="edge"
    const t="chrome"
    const u="opera"
    const o="opera"
    if(o==s || o==t || o==u )
    {
        console.log("We support these browsers")
    }
    else
    {
        console.log("We do not support this browsera. please select again")
    }


    //switch case
    /* switch()
        {
            ......

            break;
        }
        default:*/


        let browser='Opera'

        switch(browser)
        {
            case  "Edge":
            case  "Opera":
            case  "Browser":
                console.log("We support these browsers")
                break;
        default:
                console.log("We do not support this browsera. please select again")
            

        }
