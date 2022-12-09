// Level  : 0
// 문제명 : 특이한 정렬

function solution(numlist, n) {
    var answer = numlist.sort((a,b) => {
        if(Math.abs(a-n) - Math.abs(b-n) < 0) return -1;
        if(Math.abs(a-n) - Math.abs(b-n) > 0) return 1;
        return b - a;
    })
    return answer;
}