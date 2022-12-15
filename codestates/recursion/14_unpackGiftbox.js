function unpackGiftbox(giftBox, wish) {
    // TODO: 여기에 코드를 작성합니다.
    for(let i = 0; i < giftBox.length; i++){
        if(giftBox[i] === wish) return true;
        else if(Array.isArray(giftBox[i])){
            if(unpackGiftbox(giftBox[i], wish)) return true;
        }
    }
    return false;
}

console.log(unpackGiftbox(['macbook', ['eyephone', [], ['postcard']], 'iphone'], 'iphone'));
// console.log(unpackGiftbox(['pen', [[], 'iphone'], ['ps5', ['book', [], 'airpods']]], 'airpods'));
