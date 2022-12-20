function reverseArr(arr) {
    // TODO: 여기에 코드를 작성합니다.
    if(!arr.length) return [];
    return [arr.pop()].concat(reverseArr(arr));
  }