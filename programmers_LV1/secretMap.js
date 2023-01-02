// !Level  : 1
// ?문제명 : [1차] 비밀지도
// ? 2018 KAKAO BLIND RECRUITMENT

function solution(n, arr1, arr2) {
    const combine = arr1.map((el,idx) => el | arr2[idx]).map(el => el.toString(2).padStart(n, 0));
    // console.log(combine);
    return combine.map(el=> el.replace(/1/g,"#")).map(el=>el.replace(/0/g," "));
}

console.log(solution(5,[9, 20, 28, 18, 11],[30, 1, 21, 17, 28] ));