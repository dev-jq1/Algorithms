// Level  : 0
// 문제명 : 로그인 성공?

function solution(id_pw, db) {
    var answer = '';
    const filteredDb = db.filter(el => el.includes(id_pw[0]));
    if(!filteredDb.length) return "fail";
    else{
        filteredDb.map(el => {
            if(el[1] === id_pw[1]) answer = "login";
        })
        if(answer !== "login") answer = "wrong pw";
    }
    return answer;
}