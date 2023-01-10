// !Level  : 1
// ?문제명 : 푸드 파이트 대회

function solution(food) {
    let arrange = "";
    food.map((el,idx) => {
        arrange += String(idx).repeat(parseInt(el/2));
    })
    console.log(arrange);
    return `${arrange}0${[...arrange].reverse().join('')}`
}

console.log(solution([1, 3, 4, 6]));
console.log(solution([1, 7, 1, 2]));