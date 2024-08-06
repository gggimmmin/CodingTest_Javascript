function solution(array) {
    const answer = array.sort(function(a,b){
        return a-b;
    })
    const len = array.length;
    const mid = Math.floor(len/2);
    return answer[mid];
}