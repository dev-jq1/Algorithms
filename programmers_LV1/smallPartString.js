// !Level  : 1
// ?문제명 : 크기가 작은 부분문자열

function solution(t, p) {
    const origin = [...t];
    const result = [];
    let temp = "";
    for (let i = 0; i < origin.length; i++) {
        temp += origin[i];
        if (temp.length === p.length) {
            if (Number(temp) <= Number(p)) result.push(temp);
            temp = "";
            i = i - (p.length - 1);
        }
    }
    return result.length;
}
