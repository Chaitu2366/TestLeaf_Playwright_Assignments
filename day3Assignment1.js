
function numberType(num) {

    if (num > 0) {
        return "Positive Number";
    } 
    else if (num < 0) {
        return "Negative Number";
    } 
    else {
        return "Zero";
    }
}

let result = numberType(-10);

console.log(result);



