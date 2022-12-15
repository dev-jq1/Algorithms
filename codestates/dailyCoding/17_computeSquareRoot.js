function computeSquareRoot(num) {
    // TODO: 여기에 코드를 작성합니다.
    const decimals = [1, 0.1, 0.01, 0.001];
    let init = 0;
    let end = num;
    for (let i = 0; i < decimals.length; i++) {
        for (let j = init + decimals[i]; j < end; j += decimals[i]) {
            if (j ** 2 <= num && num < (j + decimals[i]) ** 2) {
                init = j;
                end = init + decimals[i];
                // console.log(init);
            }
        }
    }
    return +init.toFixed(2);
}

function computeSquareRoot2(num) {
    let findInteger;
    let findDecimal;
    let findDecimal2;
    let findDecimal3;

    for (let i = 1; i < num; i += 1) {
        if (i ** 2 <= num && num < (i + 1) ** 2) findInteger = i;
    }

    for (let i = findInteger; i < findInteger + 1; i += 0.1) {
        if (i ** 2 <= num && num < (i + 0.1) ** 2) findDecimal = i;
    }

    for (let i = findDecimal; i < findDecimal + 0.1; i += 0.01) {
        if (i ** 2 <= num && num < (i + 0.01) ** 2) findDecimal2 = i;
    }

    for (let i = findDecimal2; i < findDecimal2 + 0.01; i += 0.001) {
        if (i ** 2 <= num && num < (i + 0.001) ** 2) findDecimal3 = i;
    }

    return +findDecimal3.toFixed(2);
}

function computeSquareRoot3(num) {
    const diffs = [1, 0.1, 0.01, 0.001];
    let base = 1;
    for (let i = 0; i < diffs.length; i++) {
      while (base * base < num) {
        base = base + diffs[i];
        console.log(base);
      }
  
      if (base * base === num) {
        return base;
      } else {
        base = base - diffs[i];
      }
    }
    return Number(base.toFixed(2));
  }

function computeSquareRoot4(num) {

}

console.log(computeSquareRoot(8));


