// Level  : 0
// 문제명 : 공 던지기

function solution(numbers, k) {
    var answer = 0;
    
    const oddArr = numbers.filter(el=> el%2 === 1);
    const evenArr = numbers.filter(el=> el%2 === 0);
    
    const newArr = [...oddArr, ...evenArr]
    
    if(numbers.length % 2 === 0){
        for(let i = 0; i < k; i++){
            answer = oddArr[i%oddArr.length]
        }
    }else{
        for(let i = 0; i < k; i++){
        answer = newArr[i%newArr.length]
        }    
    }

    return answer;
}