// !Level  : 1
// ?문제명 : 크레인 인형뽑기 게임
// !2019 카카오 개발자 겨울 인턴십

function solution(board, moves) {
    const verticalBoard = {};
    const basket = [];
    for (let j = 0; j < board.length; j++) {
        const rearrange = [];
        for (let i = board.length - 1; i > -1; i--) {
            if (board[i][j] === 0) continue;
            rearrange.push(board[i][j]);
        }
        verticalBoard[j + 1] = rearrange;
    }
    console.log(verticalBoard);

    let answer = 0;
    moves.map((move, idx) => {
        if (verticalBoard[move][verticalBoard[move].length - 1])
            basket.push(verticalBoard[move].pop());
            for(let i = 0; i < basket.length; i++){
                if(basket[basket.length-1] === basket[basket.length-2]){
                    basket.pop();
                    basket.pop();
                    answer++;
                }
            }
    });

    console.log(basket);
    console.log(answer*2)
    return answer * 2;
    // let resultBasket = basket.join("");
    // while (true) {
    //     let beforeReplace = resultBasket;
    //     resultBasket = resultBasket.replace(/([0-9]{3})\1/i, "a");
    //     if (resultBasket.length === beforeReplace.length) break;
    // } 

    // return basket.length - resultBasket.length;
}

console.log(
    solution(
        [
            [0, 0, 0, 0, 0],
            [0, 0, 1, 0, 3],
            [0, 2, 5, 0, 1],
            [4, 2, 4, 4, 2],
            [3, 5, 1, 3, 1],
        ],
        [1, 5, 3, 5, 1, 2, 1, 4]
    )
);
