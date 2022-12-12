// Level  : 1
// 문제명 : 신고 결과 받기
//! 2022 KAKAO BLIND RECRUITMENT

function solution(id_list, report, k) {
    var answer = [];
    const reporters = {};
    const reportedUsers = {};
    const bannedUsers = [];
    
    [...new Set(report)].map(element => {
        const [from, to] = element.split(" ");
        if(!(from in reporters)) {
            reporters[from] = [];
            reporters[from].push(to);
        }else reporters[from].push(to);

        if(!(to in reportedUsers)) reportedUsers[to] = 1;
        else reportedUsers[to]++;
    })

    id_list.map(element => {
        if(!(element in reporters)) reporters[element] = [];
    })

    for(key in reportedUsers){
        if(reportedUsers[key] >= k) bannedUsers.push(key);
    }

    id_list.map(user => {
        let cnt = 0;
        for(let i = 0; i < bannedUsers.length; i++){
            if(reporters[user].includes(bannedUsers[i])) cnt++
        }
        answer.push(cnt);
    })

    // console.log(reporters);
    // console.log(reportedUsers);
    // console.log(bannedUsers);

    return answer;
}

// console.log(solution(["muzi", "frodo", "apeach", "neo"],["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"],2));
// console.log(solution(["con", "ryan"],["ryan con", "ryan con", "ryan con", "ryan con"],3));
