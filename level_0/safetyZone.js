// Level : 0
// 문제명 : 안전지대

function solution(board) {
    var answer = 0;
    const mineZone = [];

    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board.length; j++){
            if(board[i][j] === 1) mineZone.push([i,j]);
        }
    }

    for(let k = 0; k < mineZone.length; k++){
        for(let i = mineZone[k][0] - 1; i <= mineZone[k][0] + 1; i++){
            if( i < 0 || i > board.length-1) continue;
            for(let j = mineZone[k][1] - 1; j <= mineZone[k][1] + 1; j++){
                if( j < 0 || j > board.length-1) continue;
                board[i][j]++;
            }
        }    
    }

    board.map(col => col.map(el => {
        if(el === 0) answer++;
    }))

    return answer;
}