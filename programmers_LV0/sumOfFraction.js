// Level  : 0
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


function solution2(denum1, num1, denum2, num2) {
    let denum = num1*denum2 + num2*denum1;
    let num = num1*num2;
    let result = 1
    for (let i=2; i<=Math.min(denum, num); i++){
        if (denum%i===0 && num%i===0) result = i
    }
    return [denum/result, num/result]
}

function fnGCD(a, b){
    return (a%b)? fnGCD(b, a%b) : b;
}

function solution3(denum1, num1, denum2, num2) {
    let denum = denum1*num2 + denum2*num1;
    let num = num1 * num2;
    let gcd = fnGCD(denum, num); //최대공약수

    return [denum/gcd, num/gcd];
}