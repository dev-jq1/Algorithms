// Level  : 1
// 문제명 : 가장 가까운 같은 글자

function solution(s) {
    const chkArr = [];
    return [...s].map((element,idx) => {
        let lastIndex = chkArr.lastIndexOf(element);
        chkArr.push(element);
        if(chkArr.indexOf(element) === chkArr.lastIndexOf(element)) return -1;
        else return idx - lastIndex;
    })
}