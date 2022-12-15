const fib_naive = n => {
    if(n === 0) return 0;
    else if(n === 1) return 1;
    else return fib_naive(n-1) + fib_naive(n-2)
}

// console.log(fib_naive(35));

fib_arr = [0,1]
const fib_recursive_dp = n => {
    if(n < fib_arr.length) return fib_arr[n];
    else {
        let fib = fib_recursive_dp(n-1) + fib_recursive_dp(n-2);
        fib_arr.push(fib);
        return fib;
    }
}

console.log(fib_recursive_dp(100));

const fib_bottomUp = n => {
    if( n === 0 ) return 0;
    else if( n === 1 ) return 1;
    else{
        const fib_array = [0, 1];
        for(let i = 2; i <= n; i++){
            fib_array.push(fib_array[i-1] + fib_array[i-2]);
        }
        return fib_array[n];
    }
}

// console.log(fib_bottomUp(100))