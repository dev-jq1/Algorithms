function solution(emergency) {
    const originalArr = [...emergency];
    emergency.sort((a,b) => b-a);
    return originalArr.map(el => emergency.indexOf(el)+1);
}