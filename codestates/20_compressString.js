function compressString(str) {
    let answer = "";
    let initIndex = 0;
    for (let i = 0; i <= str.length; i++) {
        if (str[initIndex] === str[i]) continue;
        else {
            if (i - initIndex >= 3)
                answer += `${i - initIndex}${str[initIndex]}`;
            else answer += str[initIndex].repeat(i - initIndex);
            initIndex = i;
        }
    }
    return answer;
}

console.log(compressString("wwwggoppopppp"));
//wwwggoppopppp -> 3wggoppo4p
