// Level  : 0
// 문제명 : 겹치는 선분의 길이

function solution(lines) {
    var answer = 0;
    const linedArr = [];
    const sortedArr = lines.sort((a, b) => {
        if(a[0] < b[0]) return -1;
        else if(a[0] > b[0]) return 1;
        return 0;
    });
    
    const minPointLength = Math.abs(sortedArr[0][0]);
    
    for(let i = 0; i < lines.length; i++){
        for(let j = lines[i][0]; j < lines[i][1]; j++){
            if(linedArr[j+minPointLength] === undefined) linedArr[j+minPointLength] = 1;
            else linedArr[j+minPointLength]++;
        }
    }
    
    answer = linedArr.filter(el => el >= 2).length;
    
    return answer;
}