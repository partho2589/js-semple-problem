/* 
const number = [ 20, 30, 40, 50, 64, 91, 97, 100, 90, 16];
let sum = 0;
for ( var i=0 ; i< number.length; i++){
     const element = number[i];
    sum = sum + element;} 
// console.log(sum);

function arraySum (number){
    let sum = 0;
    for( var i =0; i<number.length; i++){
        const element = number[i]
        sum = sum + element;
    }
    return sum
} */
// console.log( arraySum ( number));

// console.log( arraySum( [300, 500, 200]));


const clickMe = () => {
    const  inputField = document.getElementById('input-field')
  const inputText = inputField.value
    console.log(inputText)
    inputField.value = ' ';
}

const clickMy = () => {
    const click = document.getElementById('clickMe')
    const clilckText = click.value;
    console.log(clilckText)
    
}