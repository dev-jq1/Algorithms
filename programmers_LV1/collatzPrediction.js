// !Level  : 1
// ?문제명 : 콜라츠 추측

function solution(num) {
    if(num === 1) return 0;
    for(let i = 0; i < 500; i++){
        if(num === 1) return i;
        if(num % 2 === 0) num = num / 2;
        else num = num * 3 + 1;
    }
    return -1;
}

