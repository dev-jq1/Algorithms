// !Level  : 1
// ?문제명 : 로또의 최고 순위와 최저 순위
// !2021 Dev-Matching: 웹 백엔드 개발자(상반기)

function solution(lottos, win_nums) {
    let matchCount = 0;
    let zeroCount = 0;
    const rank = { 6: 1, 5: 2, 4: 3, 3: 4, 2: 5, 1: 6, 0: 6 };
    // console.log(lottos.join(''))
    win_nums.map((num) => {
        // if (lottos.find((el) => el === num)) matchCount++;
        const regExp = new RegExp(`${num}`, 'g')
        if(regExp.test(lottos)) matchCount++;
    });
    zeroCount = lottos.filter((num) => num === 0).length;
    
    console.log(matchCount);
    console.log(zeroCount);
    return [rank[matchCount+zeroCount], rank[matchCount]];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
