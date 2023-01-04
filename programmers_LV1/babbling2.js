// !Level  : 1
// ?문제명 : 옹알이2

function solution(babbling) {
    var answer = 0;
    const baby = ["aya", "ye", "woo", "ma"];
    const check = babbling.map(el => {
        while(el.includes("aya") || el.includes("ye") || el.includes("woo") || el.includes("ma")){
            el = el.replace(/aya|ye|woo|ma/i, idx => baby.indexOf(idx));
        }
        return el;
    }).filter(el => !isNaN(el) && !(el.includes("00") || el.includes("11") || el.includes("22") || el.includes("33")))
    console.log(check);
    return answer;
}

function solution2(babbling) {
    const regexp1 = /(aya|ye|woo|ma)\1+/;   //(aya|ye|woo|ma)\1 : 괄호안의 내용을 그룹1로 그룹화하여 한번 이상 반복되는 것을 정규식으로 설정.
    const regexp2 = /^(aya|ye|woo|ma)+$/;
  
    return babbling.reduce((ans, word) => (
        !regexp1.test(word) && regexp2.test(word) ? ++ans : ans
        ), 0);
  }

console.log(solution(["aya", "yee", "u", "maa"]))
console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]))