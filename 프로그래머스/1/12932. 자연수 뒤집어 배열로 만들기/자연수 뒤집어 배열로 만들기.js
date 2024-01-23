function solution(n) {
    let newArray = [];
    while (n > 0) {
        let array = n % 10;
        newArray.unshift(array);
        n = Math.floor(n / 10);
    }
    newArray.reverse();
    return newArray;
}