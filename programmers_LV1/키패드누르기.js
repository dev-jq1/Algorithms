// !Level  : 1
// ?문제명 : 키패드 누르기
// !2020 카카오 인턴십

function solution(numbers, hand) {
    const matrix = { 
                    1 : [0,3], 2:[1,3],  3 :[2,3],
                    4 : [0,2], 5:[1,2],  6 :[2,2],
                    7 : [0,1], 8:[1,1],  9 :[2,1],
                   '*': [0,0], 0:[1,0], '#':[2,0] 
                }
    const current = {"left": '*', "right": '#'}

    function getDistance(cur, pad) {
        return Math.abs(cur[0]-pad[0]) + Math.abs(cur[1]-pad[1]);
    }
    return numbers.map(pad => {
        if(pad === 1 || pad === 4 || pad === 7){
            current.left = pad;
            return 'left';
        }
        if(pad === 3 || pad === 6 || pad === 9){
            current.right = pad;
            return 'right';
        }
        if(getDistance(matrix[current.left], matrix[pad]) === getDistance(matrix[current.right], matrix[pad])){
            current[hand] = pad;
            return hand;
        }else{
            if(getDistance(matrix[current.left], matrix[pad]) < getDistance(matrix[current.right], matrix[pad])){
                current.left = pad;
                return 'left'
            }else{
                current.right = pad;
                return 'right'
            }
        }
    }).map(el => el === 'right' ? 'R' : 'L').join('');
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")) // "LRLLLRLLRRL"
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left")) // "LRLLRRLLLRR"
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right")) // "LLRLLRLLRL"