// Level  : 0
// 문제명 : 다음에 올 숫자


function solution(common) {
    var answer = 0;
    
    let scope = common[1] + (common[1] - common[0]) === common[2]
        ? 1 : 0;
    answer = scope === 1 
        ? common[common.length-1] + common[1] - common[0]
        : common[common.length-1] * (common[1]/common[0])
    return answer; 
}