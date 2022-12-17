// function computeWhenDouble(money=1, interestRate, year) {
//     if (money >= 2) return year;
//     else return computeWhenDouble(money * (1 + interestRate), interestRate, year + 1);
// }


// console.log(computeWhenDouble(1, 0.07, 0));

function computeWhenDouble2(interestRate){
    let money = 1;
    // let year = 0;
    for(let i = 1;   ;i++) {
        money = money * (1+(interestRate/100));
        if(money >= 2){
            return i;
        }
    }
}

console.log(computeWhenDouble2(1));