// Level  : 1
// 문제명 : 문자열 내 p와 y의 개수

function solution(s){
    let [pCnt, yCnt] = [0, 0];

    [...s.toLowerCase()].map(el => {
        if(el === 'p') pCnt++;
        if(el === 'y') yCnt++;
    })

    return pCnt === yCnt ? true : false;
}