/* const fave = [0, 1];
for( let i=2; i<=10; i++){
    fave[i]= fave [i-1] + fave [i-2]
}
console.log(fave); */

/* function fabonaceNumber ( n){
    const fabo = [ 0, 1]
    for ( let i=2; i<=n; i++){
        fabo[i] = fabo[ i-1] + fabo[ i-2];
    }
    return fabo;
}
console.log( fabonaceNumber( 'lant')); */

function fabonaceNumber ( n){
     if (typeof n != 'number'){
         return 'sorry sir this input is wrong'
     }
     if ( n < 0){
         return 'pleace, creac number'
     }
    const fabo = [ 0, 1]
    for ( let i=2; i<=n; i++){
        fabo[i] = fabo[ i-1] + fabo[ i-2];
    }
    return fabo;
}
console.log( fabonaceNumber( -20));