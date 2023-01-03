// !Level  : 1
// ?문제명 : 숫자 문자열과 영단어
// ? 2021 카카오 채용연계형 인턴쉽

function solution(s) {
    var answer = s;
    //return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
    const numArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    while(true){
        answer = answer.replace(/zero|one|two|three|four|five|six|seven|eight|nine/i, str => numArr.indexOf(str));
        if(!isNaN(answer)) break;
    }
    // s.replace(/zero/i, str=>numArr[str]);
    return Number(answer);
}

console.log(solution("23four5six7"));
console.log(solution("123"));