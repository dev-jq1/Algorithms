// !Level  : 1
// ?문제명 : [1차] 다트 게임
// !2018 KAKAO BLIND RECRUITMENT

function solution(dartResult) {
    let getNum = dartResult;
    let getOper = dartResult;
    while (true) {
        let beforeReplace = getNum;
        getNum = getNum.replace(/[A-Z]/g, " ").replace(/[#*]/g, "");
        getOper = getOper.replace(/\d{1,2}/g, " ");
        if (beforeReplace === getNum) break;
    }
    let [first, second, third] = getNum.split(" ");
    let [firstOp, secondOp, thirdOp] = getOper.trim().split(" ");
    console.log(firstOp)
    console.log(secondOp)
    console.log(thirdOp)

    console.log(first)
    console.log(second)
    console.log(third)
    first = Math.pow(first, firstOp[0] === 'S' ? 1 : firstOp[0] === 'D' ? 2 : 3);
    second = Math.pow(second, secondOp[0] === 'S' ? 1 : secondOp[0] === 'D' ? 2 : 3);
    third = Math.pow(third, thirdOp[0] === 'S' ? 1 : thirdOp[0] === 'D' ? 2 : 3);
    console.log(first)
    console.log(second)
    console.log(third)

    if (firstOp[1]) {
        if (firstOp[1] === "*") first = first * 2;
        else first = first * -1;
    }
    if (secondOp[1]) {
        if (secondOp[1] === "*") {
            first = first * 2;
            second = second * 2;
        } else second = second * -1;
    }
    if (thirdOp[1]) {
        if (thirdOp[1] === "*") {
            second = second * 2;
            third = third * 2;
        } else third = third * -1;
    }
    console.log(first)
    console.log(second)
    console.log(third)

    return first + second + third;
}

console.log(solution("1S*2T*3S"));


function solution2(dartResult) {
    const bonus = { 'S': 1, 'D': 2, 'T': 3 },
          options = { '*': 2, '#': -1, undefined: 1 };

    let darts = dartResult.match(/\d.?\D/g);
    console.log(darts);
    for (let i = 0; i < darts.length; i++) {
        let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
            score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];
        console.log(split);
        if (split[3] === '*' && darts[i - 1]) darts[i - 1] *= options['*'];

        darts[i] = score;
    }

    return darts.reduce((a, b) => a + b);
}

console.log(solution2("1S*2T*3S"));