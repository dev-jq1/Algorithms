// Level  : 0
// 문제명 : A로 B 만들기

function solution(before, after) {
    return [...before].sort().join('') === [...after].sort().join('') ? 1 : 0;
}