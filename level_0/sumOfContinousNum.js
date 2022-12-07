// Level  : 0
// 문제명 : 연속된 수의 합

function solution(num, total) {
    var answer = [];
    
    let centerNum = total / num ;
    let firstNum = Math.ceil(centerNum - (num / 2));
    
    for(let i = firstNum; i < firstNum + num; i++){
        answer.push(i);
    }
    return answer;
}