// !Level  : 1
// ?문제명 : 수박수박수박수박수?

function solution(n) {
    var answer = '수';
    for(let i = 1; i < n; i++) {
        answer += answer[i-1] === "수" ? "박" : "수";
    }
    return answer;
}