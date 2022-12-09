// Level  : 0
// 문제명 : 문자열 나누기

function solution(s) {
    var answer = 0;

    for (let i = 0; i < s.length; i++) {
        let same = 0;
        let different = 0;
        answer++;
        for (let j = i; j < s.length; j++) {
            if (s[i] === s[j]) same++;
            else different++;
            if (same === different) {
                i = j;
                break;
            }
        }
        if( same !== different) break;
    }
    return answer;
}

console.log(solution("bbbbbb"))