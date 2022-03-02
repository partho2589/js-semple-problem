
/* function largestElement ( numbers){
    let largest = 0;
    for( let i = 0; i < numbers.length; i++){
        const element = numbers [i]
        if (element > largest ){
            largest = element
        }
    }
    return largest
}
const ages = [20, 30, 50, 90, 92, 30, 60, 80,];
const oldest = largestElement(ages)
console.log( oldest); */

/* function largestNumber ( numbers){
    let largest = 0;
    for( let i=0; i < numbers.length; i++ ){
        const element = numbers[i]
        if ( element > largest){
            largest = element
        }
    }
    return largest
}

const ages = [200, 62, 10, 50, 90, 80, 60, 50];
const oldest = largestNumber(ages);
console.log( largestNumber( [30, 50, 90, 60, 40, 80]));
console.log(oldest); */


function agesYear ( numbers){
    let largest = 0;
    for( let i=0; i < numbers.length; i++){
        const element = numbers[i]
        if ( element > largest){
            largest = element
        }
    }
    return largest
}

// const ages = [30, 50, 60, 40, 90, 80, 41];
// const oldests = agesYear(ages)
// console.log( oldests);

function friendAges ( number){
    let largest = 0;
    for( var i = 0; i < number.length; i++){
     const elements = number[i];
     if( elements > largest){
         largest = elements
     }
    }
    return largest
}
console.log( friendAges( [20, 30, 50, 60,]))