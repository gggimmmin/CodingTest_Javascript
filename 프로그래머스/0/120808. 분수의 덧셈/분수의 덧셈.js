function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    
    var newNumer = numer1 * denom2 + numer2 * denom1;
    var newDenom = denom1 * denom2;
    
    var divisor = gcd(newNumer, newDenom);
    var resultNumer = newNumer / divisor;
    var resultDenom = newDenom / divisor;
    
    answer.push(resultNumer, resultDenom);
    return answer;
}

function gcd(a, b) {
    if(b===0){
        return a;
    }
    return gcd(b, a % b);
}