// Level  : 0
// 문제명 : 잘라서 배열에 저장하기


function solution(my_str, n) {
    var answer = [];

    for(let i = 0; i < parseInt(my_str.length/n); i+=n){
        answer.push(my_str.slice(i,n));
        n+=n;
    }
    
    return answer;
}

console.log(solution())