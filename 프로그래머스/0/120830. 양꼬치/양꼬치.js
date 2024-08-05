function solution(n, k) {
    let service = Math.floor(n/10)*2000
    return (n*12000 + k*2000) - service
} 