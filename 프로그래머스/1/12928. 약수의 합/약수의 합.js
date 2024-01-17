function solution(n) {
    var answer = [];
    for ( let i = 1; i <= n; i++) {
        if ( n % i === 0 ) {
            answer.push(i);
        }
    }
    var correct = 0;
    for ( let i = 0; i < answer.length; i++) {
        correct += answer[i]
    }
    return correct;
}