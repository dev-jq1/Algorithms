// Level  : 0
// 문제명 : 컨트롤 제트

function solution(s) {
    var answer = 0;
    const sArr = s.split(" ");
    // console.log(sArr);
    if(!sArr.includes("Z")) answer = sArr.reduce((acc, cur) => +acc + +cur);
    else{
        for(let i = 0; i < sArr.length; i++){
            if(sArr[i+1] === 'Z' || sArr[i] === 'Z') continue;
            else answer += +sArr[i];

            // if(!isNaN(+sArr[i])) answer += +sArr[i];
            // else answer -= Number(sArr[i-1]);

            // if(sArr[i+1] === 'Z'){
            //     sArr = sArr.slice(0, i).concat(sArr.slice(i+2));
            //     i = -1;
            //     continue;
            // }else if(sArr[i] === 'Z'){
            //     sArr = sArr.slice(i+1);
            //     i = -1;
            //     continue;
            // }else if(!sArr.includes("Z")) answer += +sArr[i];
        }
    }
    return answer;
}