function flattenArr(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            // answer.push(...flattenArr(arr[i]));
            answer = answer.concat(flattenArr(arr[i]));
        } else {
            // answer.push(arr[i]);
            answer = answer.concat(arr[i]);
        }
        console.log(answer);

    }
    return answer;
}


console.log(flattenArr([    [ 2, [ [3] ] ], 4, [ [ [5] ] ]    ]));
