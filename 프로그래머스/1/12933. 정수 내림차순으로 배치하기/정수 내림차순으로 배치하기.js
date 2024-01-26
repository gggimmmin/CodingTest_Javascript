function solution(n) {
    let array = Array.from(String(n), Number);
    array.sort((a,b)=>b-a);
    let newArray = parseInt(array.join(''));
    return newArray;
}