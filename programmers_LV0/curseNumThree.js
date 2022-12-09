// Level  : 0
// 문제명 : 저주의 숫자 3

function solution(n) {

    var answer = [];

    while(true){
        for(let i = 1; ;i++ ){
            if(String(i).includes("3") || i % 3 === 0){
                continue;
            }else{
                answer.push(i);
            }
            if(answer.length === n) return answer[n-1];
        }
    }
}

console.log(String(3).includes("4"))