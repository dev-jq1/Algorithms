// Level : 0
// 문제명 : 중복된 문자 제거

function solution(my_string) {
    var answer = '';
    const strObj = {};
    [...my_string].map(el =>{
        if(!(el in strObj)) strObj[el] = 1;
    })

    return Object.keys(strObj).join('');
}