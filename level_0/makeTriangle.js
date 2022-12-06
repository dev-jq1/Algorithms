// Level : 0
// 문제명 : 삼각형의 완성조건 (2)

function solution(sides) {
    var answer = 0;
    sides.sort((a,b) => b-a);
    for(let i=sides[0]+1; i < sides[0]+sides[1]; i++){
        answer++;
    }
    for(let i=sides[0]-sides[1]+1; i <= sides[0]; i++){
        answer++;
    }
    
    return answer;
}

function solution2(sides) {
    return Math.min(sides)*2-1;
}