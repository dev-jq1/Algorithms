// Level : 0
// 문제명 : k의 개수

function solution(start, end, num) {
    var answer = 0;

    for (let i = start; i <= end; i++) {
        for (let j = 0; j < String(i).length; j++) {
            if (String(i)[j] === String(num)) answer++;
        }
    }

    return answer;
}
