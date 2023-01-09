// !Level  : 1
// ?문제명 : 실패율

function solution(N, stages) {
    const failRate = {};
    for(let i = 1; i <= N ; i++){
        const reach = stages.filter(stage => stage >= i).length;
        const noClear = stages.filter(stage => stage === i).length;
        failRate[i] = noClear/reach;
    }
    const result = Object.entries(failRate);
    return result.sort((a,b) => {
        if(a[1] <= b[1]) return 1;
        else if(a[1] > b[1]) return -1;
    }).map(el => Number(el[0]));
}

function solution2(N, stages) {
    const failRate = [];
    for(let i = 1; i <= N ; i++){
        const reach = stages.filter(stage => stage >= i).length;
        const noClear = stages.filter(stage => stage === i).length;
        failRate.push([i, noClear/reach]);
    }
    return failRate.sort((a,b) => b[1] - a[1]).map(el => el[0]);
}

console.log(solution(5, [2,1,2,6,2,4,3,3]))