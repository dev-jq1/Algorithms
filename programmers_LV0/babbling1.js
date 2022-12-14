// Level  : 0
// 문제명 : 옹알이

function solution(babbling) {
    answer = 0;
    const baby = ["aya", "ye", "woo", "ma"];
    // let tempStr = "";
    for (let i = 0; i < babbling.length; i++) {
        let tempStr = babbling[i];
        let rpCnt = 0;
        for (let j = 0; j < baby.length; j++) {
            if (tempStr.includes(baby[j])) {
                tempStr = tempStr.replace(baby[j], "_");
                rpCnt++;
            }
        }

        let compareStr = "";
        for (let k = 0; k < rpCnt; k++) {
            compareStr += "_";
        }

        if (tempStr === compareStr) {
            answer++;
            // tempStr = "";
        }
    }
    return answer;
}

function solution2(babbling) {
    let words = ["aya", "ye", "woo", "ma"];
    let newArr = [];
    babbling.forEach((x) => {
        words.forEach((y) => {
            if (x.includes(y)) {
                x = x.replace(y, 1);
                newArr.push(x);
            }
        });
    });
    return newArr.filter((el) => !isNaN(Number(el))).length;
}
