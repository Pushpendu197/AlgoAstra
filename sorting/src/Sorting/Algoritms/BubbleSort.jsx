export function BubbleSort(array) {
    var sorted = false;
    var moves = {
        sorted: [],
        pos: [],
        swap: []
    };
    console.log(array);


    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                moves.pos.push([j, j + 1]);
                moves.swap.push(true);
                swap(array, j, j + 1);

                moves.pos.push([j, j + 1]);
                moves.swap.push(false);
            } else {
                moves.pos.push([j, j + 1]);
                moves.swap.push(false);
            }
        }
    }
    console.log(moves);
    moves.sorted = array;
    return moves;
}
function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}