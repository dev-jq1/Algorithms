// !Level  : 1
// ?문제명 : 콜라 문제

function solution(give, take, coke) {
    var answer = 0;
    let bottle = coke;

    while (coke >= give) {
        answer += parseInt(bottle / give) * take;
        bottle = parseInt(bottle / give) * take + (bottle % give);
    }

    return answer;
}