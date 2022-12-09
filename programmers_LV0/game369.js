// Level  : 0
// 문제명 : 369게임

function solution(order) {
    var answer = 0;
    
    const orderArr = [...String(order)].map(el => Number(el));
    
    orderArr.map(el => {
        if(el === 3 || el === 6 || el === 9) answer++;
    })
    
    return answer;
}