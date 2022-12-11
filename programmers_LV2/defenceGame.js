// Level  : 2
// 문제명 : 디펜스 게임

function solution(n, k, enemy) {
    let skills = k;
    let troops = n;
    const passed = [];
    for (let i = 0; i < enemy.length; i++) {
        if (enemy[i] > troops) {
            if (skills > 0) {
                if (passed.length > 1) {
                    passed.sort((a, b) => a - b);
                    troops += passed[passed.length - 1];
                    passed.pop()
                    troops -= enemy[i];
                }
                skills--;
            } else break;
        } else {
            passed.push(enemy[i]);
            troops -= enemy[i];
        }
        console.log(passed);
    }

    return passed.length + k > enemy.length ? enemy.length : passed.length+ k;
}

console.log(solution(5, 3, [4, 2, 4, 5, 3, 3, 1]));
// console.log(solution(3, 4, [3, 3, 3, 3]));
