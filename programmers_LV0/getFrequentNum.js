// Level  : 0
// 문제명 : 최빈값 구하기

function solution(array) {
    const chkObj = {};
    array.map(el => {
        if(!(el in chkObj)) chkObj[el] = 1;
        else chkObj[el]++;
    });
    
    let max = Object.values(chkObj).reduce((acc, cur) => {
        if(acc > cur) return acc;
        else return cur;
    });
    
    console.log(chkObj);
    for(key in chkObj){
        if(chkObj[key] !== max) delete chkObj[key];
    }
    console.log(Object.keys(chkObj));
    return Object.keys(chkObj).length === 1 ? Object.keys(chkObj)[0] : -1;
}


function solution2(array) {
    let obj = {}
    for(let el of array){
        if (obj[el] === undefined) obj[el] = 1
        else obj[el]++
    }
    sortedArr = Object.entries(obj).map(el=>el[1]).sort((a,b)=>(b-a))
    if (sortedArr[0] === sortedArr[1]) return -1
    else return +(Object.keys(obj).find(key=>obj[key]===sortedArr[0]))
}
console.log(solution([1,2,3,3,3,4,5,6,6,6,6,6,6,6,4,4,4,4,5,5,5]));