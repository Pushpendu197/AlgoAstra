export function InsertionSort(array) {
    var moves = {
        sorted: [],
        pos: [],
        swap: []
    };
    console.log(array);
    for (let i = 1; i < array.length; i++) {
        var j = i - 1;
        var key = i;
        while (j >= 0 && array[key] < array[j]) {
            console.log('in');
            console.log(1);
            console.log([key, j]);
            moves.pos.push([key, j]);
            moves.swap.push(true);
            swap(array, key, j);

            moves.pos.push([key, j]);
            moves.swap.push(false);

            key = j;
            j = j - 1;
        }
        console.log('OUT');
        console.log(1);
        console.log([key, j]);
        moves.pos.push([key, j]);
        moves.swap.push(false);
    }
    moves.sorted = array;
    return moves;
}

function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}