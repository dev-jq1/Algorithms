// Level  : 0
// 문제명 : 영어가 싫어요


function solution(numbers) {
    var answer = 0;
    // const numberArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const numArr = [
        ["zero", 0],
        ["one", 1],
        ["two", 2],
        ["three", 3],
        ["four", 4],
        ["five", 5],
        ["six", 6],
        ["seven", 7],
        ["eight", 8],
        ["nine", 9],
    ];
    while(isNaN(Number(numbers))){
        numArr.map(([key, value]) => {
            numbers = numbers.replace(key, value);
        })
    }
    // const numberObj = {
    //     "zero": 0,
    //     "one": 1,
    //     "two": 2,
    //     "three": 3,
    //     "four": 4,
    //     "five": 5,
    //     "six": 6,
    //     "seven": 7,
    //     "eight": 8,
    //     "nine": 9
    // }
    // // "onefourzerosixsevenonefourzerosixseven -> "14067"
    // while(isNaN(Number(numbers))){
    //         Object.keys(numberObj).map(el => {
    //         numbers = numbers.replace(el, numberObj[el]); 
    //     })
    // }  
    return +numbers;
}