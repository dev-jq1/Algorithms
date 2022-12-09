// Level  : 0
// 문제명 : 직사각형 넓이 구하기

function solution(dots) {
    dots.sort((a,b) => a[0] - b[0]);
    let width = dots[2][0] - dots[0][0];
    let height = dots[1][1] - dots[0][1];
    
    return width*height;
}