function solution(x) {
    const numberString = x.toString();
    let sumOfDigits = 0;
    
    for (let i = 0; i < numberString.length; i++ ) {
        sumOfDigits += parseInt(numberString[i], 10);
    }
    
    return x % sumOfDigits === 0;
}