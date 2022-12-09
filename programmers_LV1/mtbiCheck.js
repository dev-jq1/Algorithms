// Level  : 1
// 문제명 : 성격 유형 검사하기(2022 KAKAO TECH INTERNSHIP)
//! 2022 KAKAO TECH INTERNSHIP

function solution(survey, choices) {
    var answer = '';
    const type = [['R','T'],['C','F'],['J','M'],['A','N']];
    const typeTable = {};
    survey.map((element,idx) => {
        const [first, second] = element.split("");
        if(4 < choices[idx]){
            if(!(second in typeTable)) typeTable[second] = Math.abs(4-choices[idx]);
            else typeTable[second] += Math.abs(4-choices[idx]);
        }else{
            if(!(first in typeTable)) typeTable[first] = Math.abs(4-choices[idx]);
            else typeTable[first] += Math.abs(4-choices[idx]);
        }
    })

    type.map(element => {
        const [first, second] = element;
        if(!(first in typeTable)) typeTable[first] = 0;
        if(!(second in typeTable)) typeTable[second] = 0;
        if(typeTable[first] >= typeTable[second]) answer += first;
        else answer+= second;
    })

    return answer;
}

// console.log(solution(["AN", "CF", "MJ", "RT", "NA"],[5, 3, 2, 7, 5]));