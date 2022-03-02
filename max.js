const business = 450;
const minister = 650;
const armi  = 600;
// if ( business > minister){
//     console.log ('business man ar son biggest')
// }
// else{ console.log( 'minister ar son biggest')}

/* if ( business > minister && business > armi){
    console.log ( 'Business is bigger')
}
else if ( minister > business && minister > armi){
    console.log( 'minister is bigger')
}
else { console.log ( 'armi is bigger')} */


function lergestNumber ( a, b, c,){
    if( a > b && a > c){
        return a
    }
    else if ( b > a && b > c){
        return b
    }
    else{ return c}
}
// console.log ( lergestNumber ( 10, 20, 30));

function biggerNumber ( a, b, c, d, e, f ){
    if (a>b && a>c && a>d && a>e && a>f){
        return a
    }
    else if ( b>a && b>c && b>d && b>e && b>f){
        return b
    }
    else if (c>a && c>b && c>d && c>e && c>f){
        return c
    }
    else if ( d>a && d>b && d>c && d>e && d>f){
        return d
    }
    else if ( e>a && e>b && e>c && e>d && e>f){
        return e
    }
    else{return f}
}
// console.log( biggerNumber( 10,20, 300, 100, 50, 60));

// small number of function

function smallNumber( a, b, c){
    if ( a<b && a<c){
        return a
    }
    else if ( b<a && b<c){
        return b
    }
    else{ return c}
}
console.log (smallNumber( 20, 30, 10));