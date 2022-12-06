// Level : 0
// 문제명 : 분수의 덧셈

function solution(denum1, num1, denum2, num2) {
    var answer = [];
    
    let bunmo = num1 * num2;
    let bunja = denum1 * num2 + denum2 * num1;
    answer = [bunja, bunmo]
    const yaksuBunmo = [];
    for(let i = 1; i <= bunmo; i++){
        if(bunmo % i === 0) yaksuBunmo.push(i);
    }
    
    const yaksuBunja = [];
    for(let i = 1; i <= bunja; i++){
        if(bunja % i === 0) yaksuBunja.push(i);
    }
    const gongYaksu = [];
    yaksuBunmo.forEach(el => {
        if(yaksuBunja.includes(el)) gongYaksu.push(el);
    })
    
    answer = answer.map(el => el / gongYaksu[gongYaksu.length-1]);
    
    return answer;
}