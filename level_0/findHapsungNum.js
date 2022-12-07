// Level  : 0
// 문제명 : 합성수 찾기

function solution(n) {
    const answer = [];
    const primeArr = [];
    
    for(let i = 2; i <= n; i++){
        let cnt = 0;
        for(let j = 1; j <= i; j++){
            if(i % j === 0) cnt++;
        }
        if(cnt === 2) primeArr.push(i);
    }
    
    for(let i = 2; i <= n; i++){
        answer.push(i);
    }
    
    for(let i = 0; i < primeArr.length; i++){
        answer.pop(primeArr[i]);    
    } 
    
    return answer.length;
}