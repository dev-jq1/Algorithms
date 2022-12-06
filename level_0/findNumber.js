// Level : 0
// 문제명 : 숫자 찾기

function solution(num, k) {    
    const numArr = [...String(num)].map(el=> Number(el));
    if(numArr.includes(k)) return numArr.indexOf(k) + 1;
    else return -1;
}