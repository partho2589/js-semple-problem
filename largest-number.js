function largestNumber( a, b, c){
    largest =0;
    if ( a>b && a>c){
        largest=a
    }
    else if ( b>a && b>c ){
        largest=b
    }
    else{largest=c}
    return largest
}
console.log( largestNumber( 20, 30, 50))