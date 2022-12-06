function solution(polynomial) {
    const element = polynomial.split(" + ");

    let sumX = 0;
    let sumNum = 0;

    element.filter(el => el.includes("x")).map(el => {
        if(el.length === 1) sumX += 1;
        else{
            sumX += Number(el.slice(0,el.length-1));
        }
    })
    element.filter(el => !el.includes("x")).map(el => {
        sumNum += Number(el);
    })

    if(sumX === 0 && sumNum === 0){
        return ``;
    }else if(sumX !== 0 && sumNum !== 0){
        if(Math.abs(sumX) === 1) return sumX === 1 ? `x + ${sumNum}` : `-x + ${sumNum}`;
        return sumNum > 0 ? `${sumX}x + ${sumNum}`
                          : `${sumX}x - ${Math.abs(sumNum)}`
    }else{
        if(sumX === 0){
            return sumNum > 0 ? `${sumNum}` : `-${Math.abs(sumNum)}`;
        }else{
            // if(Math.abs(sumX) === 1) return sumX === 1 ? `x` : `-x`;
            if(Math.abs(sumX) === 1) return `x`;
            return `${sumX}x`;
        }
    }

}

console.log(solution("3x + -2x"));