// Level  : 0
// 문제명 : 치킨 쿠폰

function solution(chicken) {
    var answer = 0;
    let remainedCoupon = 0;

    while (true) {
        answer += parseInt(chicken / 10);
        remainedCoupon += chicken % 10;

        if (parseInt(chicken / 10) < 10) {
            remainedCoupon += parseInt(chicken / 10);
            answer += parseInt(remainedCoupon / 10);
            if ((remainedCoupon % 10) + parseInt(remainedCoupon / 10) >= 10)
                answer += 1;
            break;
        }

        chicken = parseInt(chicken / 10);
    }
    return answer;
}

function solution2(chicken) {
    var answer = 0;
    let coupon = chicken;

    while (coupon >= 10) {
        answer += parseInt(coupon / 10);
        coupon = parseInt(coupon / 10) + (coupon % 10);
    }

    return answer;
}

console.log(solution2(1999));
