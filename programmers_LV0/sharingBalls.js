// Level  : 0
// 문제명 : 구슬을 나누는 경우의 수

function solution(balls, share) {
    return factorial(balls) / (factorial(balls - share) * factorial(share));
}

function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
}
