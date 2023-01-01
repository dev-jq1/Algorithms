let tiling = function (n) {
    // TODO: 여기에 코드를 작성합니다.
    let result = [0, 1, 2, 3];
    if (n <= 3) return result[n];
    for (let i = 4; i <= n; i++) {
        result[i] = result[i - 1] + result[i - 2];
    }
    return result[n];
};
