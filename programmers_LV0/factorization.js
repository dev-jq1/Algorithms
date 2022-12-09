// Level  : 0
// 문제명 : 소인수 분해

function solution(n) {
    var answer = [];
    //n까지의 소수를 담는 배열을 구한다.
    //배열을 filter n % element === 0 요소를 answer에 push.
    const yaksu = [];
    for(let i = 2; i <= n; i++){
        if( n % i === 0) yaksu.push(i);
    }
    
    return yaksu.filter(ele => {
        let cnt = 0;
        for(let i = 1; i <= ele; i++ ){
            if(ele % i === 0) cnt++;
        }
        if( cnt === 2 ) return true;
        else return false;
    })
}