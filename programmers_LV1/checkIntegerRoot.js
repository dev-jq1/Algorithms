// Level  : 1
// 문제명 : 정수 제곱근 판별

function solution(n) {
    return parseInt(Math.sqrt(n))**2 === n ? (Math.sqrt(n)+1)**2 : -1;
}