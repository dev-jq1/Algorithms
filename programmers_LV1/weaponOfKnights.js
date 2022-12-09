// Level  : 1
// 문제명 : 기사단원의 무기

function solution(number, limit, power) {
    const knights = Array.from({ length: number }, (_, i) => i + 1);
    let weapons = [];

    weapons = knights
        .map((element) => {
            let cntArr = [];
            for (let i = 1; i <= Math.sqrt(element); i++) {
                if (element % i === 0) {
                    cntArr.push(i);
                    if (element / i !== i) cntArr.push(element / i);
                }
            }
            return cntArr.length;
        })
        .map((element) => {
            if (element > limit) return power;
            else return element;
        });

    return weapons.reduce((pre, cur) => pre + cur);
}