// !Level  : 1
// ?문제명 : 나머지가 1이 되는 수 찾기
// 월간 코드 챌린지 시즌3

function solution(n) {
    for (let i = 2; i <= n - 1; i++) {
        if ((n - 1) % i === 0) return i;
    }
}
