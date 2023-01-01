const fib_arr = [0, 1];
function fibonacci(n) {
    if (fib_arr[n] !== undefined) return fib_arr[n];
    else {
        let fib = fibonacci(n - 1) + fibonacci(n - 2);
        fib_arr.push(fib);
        return fib;
    }
}

let fibonacci2 = function (n) {
    const memo = [0, 1];
    const aux = (n) => {
        if (memo[n] !== undefined) return memo[n];
        memo[n] = aux(n - 1) + aux(n - 2);
        return memo[n];
    };
    return aux(n);
};
