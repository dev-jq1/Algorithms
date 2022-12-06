function solution(ingredient) {
    var answer = 0;
    const hamburger = [1,2,3,1]
    let makingBelt = [];
    let makingIndex = 0;
    let popCnt = 0;
    
    for(let i = 0; i < ingredient.length; i++){
        if(popCnt % 4 !== 0 || popCnt === 0) makingBelt.push(ingredient[i]);
        if(popCnt === 4) popCnt = 0;

      
        
        if(makingBelt[makingBelt.length-1] !== hamburger[makingIndex]) makingIndex = 0;
        if(makingBelt[makingBelt.length-1] === hamburger[makingIndex]) {
            if(makingIndex === hamburger.length - 1){
                answer++;
                makingBelt.pop();
                makingBelt.pop();
                makingBelt.pop();
                makingBelt.pop();
                popCnt+=4;
                i--;
                makingIndex = 0;
                for(let j = 0; j < makingBelt.length; j++){
                    if(makingBelt[j] === hamburger[j]) makingIndex++;
                }
                continue;
            }
            makingIndex++;
        }
    }
    return answer;
}




function solution2(ingredient) {
    var answer = 0;
    const hamburger = '1231';
    let temp = [...ingredient].join('');
    if(!ingredient.join('').indexOf(hamburger)) return 0;
    else{
        let index;
        while(temp.indexOf(hamburger) !== -1){
            index = temp.indexOf(hamburger);
            temp = temp.slice(0,index).concat(temp.slice(index+4));
            answer++;
        }
    }
    
    return answer;
}

console.log(solution([2,1,1,2,3,1,2,3,1]));
console.log(solution([1, 1, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1]));
console.log(solution([1, 2, 2, 3, 1]));
console.log(solution([1,2,1,2,3,1,3,1,2,3,1,2,3,1]));