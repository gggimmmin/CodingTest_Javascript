function solution(n) {
    let answer = 0;
    let a = n.toString();
    let b = a.split('').map(Number);
    for ( let i = 0; i < b.length; i++) {
        answer += b[i];
    }
    return answer;
}
