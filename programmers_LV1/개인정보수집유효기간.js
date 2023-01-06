// !Level  : 1
// ?문제명 : 개인정보 수집 유효기간
// !2023 KAKAO BLIND RECRUITMENT

function solution(today, terms, privacies) {
    const numToday = Number(today.split(".").join(""));

    const termTable = {};
    terms.map((term) => {
        const [type, period] = term.split(" ");
        termTable[type] = Number(period);
    });

    const expireDate = privacies.map((data) => {
        const [date, type] = data.split(" ");
        let [year, month, day] = date.split(".").map((str) => Number(str));

        const compare = month + termTable[type];
        if (compare > 12) {
            year = compare % 12 === 0 ? year + parseInt(compare / 12) - 1 : year + parseInt(compare / 12);
            month = compare % 12 === 0 ? month + (termTable[type] % 12) : compare % 12;
        } else month += termTable[type];

        month = month < 10 ? `0${month}` : month;
        day = day < 10 ? `0${day}` : day;

        return Number(`${year}${month}${day}`);
    });

    const result = [];
    expireDate.map((date, idx) => {
        if (numToday >= date) result.push(idx + 1);
    });

    return result;
}
