// Level : 0
// 문제명 : 등수 매기기

function solution(score) {
    let answer = [];
    let rankArr = [];

    const originalScore = [...score];
    score.sort((a,b) => {
        if(a[0]+a[1] > b[0]+b[1]) return -1;
        else return 1;
    })

    for(let i = 0; i < score.length; i++){
        if(i === 0) rankArr.push(i+1);
        else{
            if(score[i][0]+score[i][1] === score[i-1][0]+score[i-1][1]) rankArr.push(rankArr[i-1]);
            else rankArr.push(rankArr.length+1);
        }
    }
    
    score.map((el, idx) => {
        answer[originalScore.indexOf(el)] = rankArr[idx];
    })

    return answer;
}

function solution2(score) {
  return score.map((el) => {
    return (
      score.filter((v) => (v[0] + v[1]) / 2 > (el[0] + el[1]) / 2).length + 1
    );
  });
}
  

console.log(solution([[80, 70], [70, 80], [30, 50], [90, 100], [100, 90], [100, 100], [10, 30]]));