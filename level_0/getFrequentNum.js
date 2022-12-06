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

console.log(solution([1,2,3,3,3,4,5,6,6,6,6,6,6,6,4,4,4,4,5,5,5]));