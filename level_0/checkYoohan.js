// Level  : 0
// 문제명 : 유한소수 판별하기

function solution(a, b) {
  let arrA = [];
  let arrB = [];
  let both = [];

  for (let i = 2; i <= a; i++) {
    if (a % i === 0) arrA.push(i);
  }

  for (let i = 2; i <= b; i++) {
    if (b % i === 0) arrB.push(i);
  }

  for (el of arrA) {
    if (arrB.includes(el)) both.push(el);
  }

  if (both.length) {
    a = a / both[both.length - 1];
    b = b / both[both.length - 1];
  }

  while (b !== 1) {
    if (b % 2 === 0) {
      b = parseInt(b / 2);
    } else if (b % 5 === 0) {
      b = parseInt(b / 5);
    }
    if (b === 1) return 1;
    if (b % 2 !== 0 && b % 5 !== 0) return 2;
  }
}

function solution2(a, b) {
  //최대공약수 구하기
  let n = 1;
  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) n = i;
  }

  b /= n;

  while (b % 2 === 0) b /= 2;
  while (b % 5 === 0) b /= 5;

  return b === 1 ? 1 : 2;
}

console.log(solution(7, 20));
