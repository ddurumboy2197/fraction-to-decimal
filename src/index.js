function fractionToDecimal(numerator, denominator) {
    if (numerator === 0) return '0';
    
    let result = '';
    if ((numerator < 0) ^ (denominator < 0)) result += '-';
    
    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);
    
    result += Math.floor(numerator / denominator);
    
    let remainder = numerator % denominator;
    if (remainder === 0) return result;
    
    result += '.';
    
    let decimalMap = {};
    while (remainder !== 0) {
        if (remainder in decimalMap) {
            let index = decimalMap[remainder];
            result = result.slice(0, index) + '(' + result.slice(index) + ')';
            return result;
        }
        
        decimalMap[remainder] = result.length;
        
        remainder *= 10;
        result += Math.floor(remainder / denominator);
        remainder %= denominator;
    }
    
    return result;
}

console.log(fractionToDecimal(1, 2)); // 0.5
console.log(fractionToDecimal(2, 3)); // 0.(6)
console.log(fractionToDecimal(4, 9)); // 0.(4)
console.log(fractionToDecimal(1, 6)); // 0.1(6)
console.log(fractionToDecimal(7, 12)); // 0.(5)(8)
