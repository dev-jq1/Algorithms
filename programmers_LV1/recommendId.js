// !Level  : 1
// ?문제명 : 신규 아이디 추천
// ? 2021 KAKAO BLIND RECRUITMENT

function solution(new_id) {
    let answer = new_id;
    answer = answer
        .toLowerCase()
        .match(/[0-9a-z._-]/g).join('')
        .replace(/[.]{2,}/g, '.')
        .replace(/^[.]|[.]$/g, '')
        .replace(/^$/g, "a")
        // .replace(regExp6, el => el)

    if(answer.length > 15){
        answer = answer.slice(0,15);
        if(answer[answer.length-1] === ".") {
            answer = answer.slice(0,14);
        }
    }

    if(answer.length < 3){
        for(let i = answer.length; i < 3; i++){
            answer += answer[answer.length-1];
        }
    }
    return answer;
}

const solution2 = new_id =>
    new_id.toLowerCase()
          .replace(/[^\w-_.]/g, "")
          .replace(/\.+/g, ".")
          .replace(/^\.|\.$/g, "")
          .replace(/^$/, "a")
          .match(/^.{0,14}[^.]/)[0]
          .replace(/^(.)$/, "$1$1$1")
          .replace(/^(.)(.)$/, "$1$2$2");

console.log(solution("...!@BaT#*..y.abcdefghijklm")) //-> "bat.y.abcdefghi"
console.log(solution("z-+.^.")) //-> "z--"
console.log(solution("=.=")) //-> "aaa"
console.log(solution("123_.def")) //-> "123_.def"
console.log(solution("abcdefghijklmn.p")) //abcdefghijklmn