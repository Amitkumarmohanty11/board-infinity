//Q - make item price double

/* 

let costs ={ book:150, pens:100, pencils:50}

o/p== { book:300, pens:200, pencils:100}

*/

let costs ={ 
    book:150,
    pens:100,
    pencils:50
    }

    for(let key in costs){
        if(typeof costs[key] == "number"){
           let x = costs[key] *= 2;
           console.log(x);
        }

    }
   


