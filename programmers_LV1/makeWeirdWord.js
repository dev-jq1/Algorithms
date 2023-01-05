// !Level  : 1
// ?문제명 : 이상한 문자 만들기

function solution(s) {
    return s.split(" ").map(str => {
        return str.split("").map((word,idx) => {
            return idx % 2 === 0 ? word.toUpperCase() : word.toLowerCase()
        }).join("")
    }).join(" ");
}

function solution(s) {
    const strArr = s.split(" ");
    return strArr.map(str => {
        let newStr = "";
        for(let i=0; i<str.length;i++){
            if(i%2 === 0) newStr += str[i].toUpperCase();
            else newStr += str[i].toLowerCase();
        }
        return newStr;
    }).join(" ");
}