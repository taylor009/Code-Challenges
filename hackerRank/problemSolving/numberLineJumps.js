// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
    let meet = 'NO';
    for(let i = 1; i <= 1000; i++){
        if((v1 * i) + x1 === (v2 * i) + x2){
            meet = 'YES';
            break;
        };
    }
    return meet;
}