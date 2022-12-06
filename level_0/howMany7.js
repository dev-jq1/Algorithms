// Level : 0
// 문제명 : 7의 개수

function solution(emergency) {
    const originalArr = [...emergency];
    emergency.sort((a,b) => b-a);
    return originalArr.map(el => emergency.indexOf(el)+1);
}