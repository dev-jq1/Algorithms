// Level  : 1
// 문제명 : 자연수 뒤집어 배열로 만들기

function solution(n) {
    return [...String(n)].reverse().map(el => Number(el));
}