// Level  : 0
// 문제명 : OX퀴즈

function solution(quiz) {
    var answer = [];
    const textArr = quiz.map(str => [...str].filter(el => el !== ' ').join(''));
    // console.log(textArr);

    let operator=[];
    let inNumber = [];
    const inNumberArr = [];
    let tempNum = '';

    for(let i = 0; i < textArr.length; i++){
        for(let j = 0; j < textArr[i].length; j++){
            if(textArr[i][j] === '=') continue;
            if(isNaN(Number(textArr[i][j]))){
                if(!isNaN(Number(textArr[i][j+1])) && isNaN(Number(textArr[i][j-1]))){
                    tempNum += textArr[i][j];
                }
                // console.log(tempNum);
                continue;
            }else{
                tempNum += String(textArr[i][j]);
                tempNum = Number(tempNum);
                // console.log(tempNum);
                if(isNaN(Number(textArr[i][j+1]))){
                    inNumber.push(tempNum);
                    tempNum = '';
                    if(textArr[i][j+1] !== '=' && textArr[i][j+1] !== undefined) operator.push(textArr[i][j+1]);
                }
            }
        }
        inNumberArr.push(inNumber);
        inNumber = [];
    } 

    // console.log("operator: "+operator)
    // console.log(inNumberArr);
    
    for(let i = 0; i < inNumberArr.length; i++){
        if(operator[i] === '+'){
            if(inNumberArr[i][0] + inNumberArr[i][1] === inNumberArr[i][2]) answer.push("O");
            else answer.push("X")
        }else{
            if(inNumberArr[i][0] - inNumberArr[i][1] === inNumberArr[i][2]) answer.push("O");
            else answer.push("X")
        }
    }
    
    return answer;
}


function solution2(quiz) {
    return quiz.map(str => {
        const [calc, result] = str.split(" = ");
        return eval(calc) === +result ? "O" : "X";
    })
}