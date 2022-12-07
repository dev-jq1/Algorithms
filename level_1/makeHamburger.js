// Level  : 1
// 문제명 : 햄버거 만들기

function solution(ingredient) {
    var answer = 0;
    let makingBelt = [];
    for(let i = 0; i < ingredient.length; i++){
        makingBelt.push(ingredient[i]);
        let lastIndex = makingBelt.length-1;
        if(makingBelt[lastIndex] === 1 && 
           makingBelt[lastIndex-1] === 3 && 
           makingBelt[lastIndex-2] == 2 && 
           makingBelt[lastIndex-3] == 1){
            makingBelt.pop();
            makingBelt.pop();
            makingBelt.pop();
            makingBelt.pop();
            answer++;
        }
    }
    return answer;
}

console.log(solution([2,1,1,2,3,1,2,3,1]));
console.log(solution([1, 1, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1]));
console.log(solution([1, 2, 2, 3, 1]));
console.log(solution([1,2,1,2,3,1,3,1,2,3,1,2,3,1]));