// Level  : 0
// 문제명 : 겹치는 선분의 길이

function solution(lines) {
    var answer = 0;
    const linedArr = [];
    const sortedArr = lines.sort((a, b) => {
        if(a[0] < b[0]) return -1;
        else if(a[0] > b[0]) return 1;
        return 0;
    });
    // console.log(sortedArr);
    const minPointStart = Math.abs(sortedArr[0][0]);
    // console.log(minPointStart);
    
    //minPointStart는 시작값이 -1이 되는 부분이 있기 때문에 배열의 인덱스에 접근하기 위해선 0부터 시작하는 배열의 인덱스 특성상 minPointStart를 더해준 것이다.
    //배열의 각 인덱스 공간을 선분의 길이가 1인 공간으로 생각해서 각 선분이 지나가는 위치를 +1 씩 배열 인덱스에 저장한다.
    //모든 선분을 다 돌아서 각 인덱스의 값이 2 이상인 부분이 두 선분이 겹치는 공간이므로 lindeArr에서 2 이상인 값들을 filter하고 그 length 를 구하면 된다.
    for(let i = 0; i < lines.length; i++){
        for(let j = lines[i][0]; j < lines[i][1]; j++){
            if(linedArr[j+minPointStart] === undefined) linedArr[j+minPointStart] = 1;
            else linedArr[j+minPointStart]++;
        }
    }
    
    answer = linedArr.filter(el => el >= 2).length;
    // console.log(linedArr)
    return answer;
}

function solution2(lines) {
    let line = new Array(200).fill(0);
    lines.forEach(([a, b]) => {
        for(; a < b; a++) line[a+100]++;
    });

    return line.reduce((a, c) =>  c > 1 ? a + 1 : a, 0)
}

console.log(solution([[0, 5], [3, 9], [1, 10]]))