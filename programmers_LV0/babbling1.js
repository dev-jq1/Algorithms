// Level  : 0
// 문제명 : 옹알이

function solution(babbling) {
    answer = 0;
    const baby = ["aya", "ye", "woo", "ma"];
    // let tempStr = "";
    for(let i = 0; i < babbling.length; i++){
        let tempStr = babbling[i];
        let rpCnt = 0;
        for(let j = 0; j < baby.length; j++){
            if(tempStr.includes(baby[j])){
                tempStr = tempStr.replace(baby[j],"_");
                rpCnt++;
            }
        }

        let compareStr = "";
        for(let k = 0; k< rpCnt; k++){
            compareStr += "_";
        }
        
        if(tempStr === compareStr){
            answer++;
            // tempStr = "";
        }
    }
    return answer;
}
