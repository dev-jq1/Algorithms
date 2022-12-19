const bubbleSort = function (arr) {
    // TODO: 여기에 코드를 작성합니다.
    // Index 비교

    // 0,1 -> 1,2 -> 2,3 -> 3,4
    // 0,1 -> 1,2 -> 2,3
    // 0,1 -> 1,2
    // 0,1

    for (let i = 0; i < arr.length - 1; i++) {
        let cnt = 0;
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                
                // let temp = arr[j];
                // arr[j] = arr[j + 1];
                // arr[j + 1] = temp;
                
                [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
                
                cnt++;
            }
        }
        if (cnt === 0) break;
    }
    return arr;
};

console.log(bubbleSort([5, 2, 3, 1]));
console.log(0 in [1,2,3,4])