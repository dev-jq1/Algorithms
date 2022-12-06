// Level : 0
// 문제명 : 문자열 밀기

function solution(A, B) {
    let answer = -1;
    let arr = [...A];
    for(let i = 0; i < A.length; i++){
        if(arr.join('') === B){
            answer = i;
            break;
        }
        arr.unshift(arr.pop());
    }
    return answer;
}

function solution2(A, B){
    return (B+B).indexOf(A);
}

