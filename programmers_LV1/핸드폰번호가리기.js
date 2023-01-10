// !Level  : 1
// ?문제명 : 핸드폰 번호 가리기

function solution(phone_number) {
    return [...phone_number].reverse().map((el,idx)=>{
        if(idx < 4) return el;
        else return '*';
    }).reverse().join('');
}