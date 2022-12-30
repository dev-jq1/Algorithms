// !Level  : 0
// ?문제명 : 평행

function solution(dots) {
    var answer = 0;
    const resultObj = {};

    for (let i = 0; i < dots.length - 1; i++) {
        for (let j = i + 1; j < dots.length; j++) {
            let inclination =
                (dots[i][1] - dots[j][1]) / (dots[i][0] - dots[j][0]);
            if (!(inclination in resultObj)) resultObj[inclination] = 1;
            else resultObj[inclination]++;
        }
    }
    console.log(resultObj);
    if (Object.values(resultObj).filter((el) => el >= 2).length !== 0)
        answer = 1;
    return answer;
}


console.log(solution([[3, 5], [4, 1], [2, 4], [5, 10]]));