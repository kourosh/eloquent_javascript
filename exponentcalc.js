//This toy program creates a function that returns the result of a base being raised to the power of an exponent.

const calc = function (base, exponent) {
    let result = 1;
    if (exponent == 0) {
        return result;
    } else {
        result = result * base;
        for (count = 0; count < exponent - 1; count++) {
            result = result * base;
        }
        return result;
    }
}
console.log(calc(0, 0));