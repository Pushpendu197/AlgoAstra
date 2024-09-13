
export function SelectionSort(array) {
    var plan = {
        sorted: [],
        pos: [],
        swap: []
    };
    let minidx = 0;
    for (let i = 0; i < array.length - 1; i++) {
        minidx = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minidx]) {
                minidx = j;
            }
            plan.pos.push([minidx, j]);
            plan.swap.push(false);
        }
        swap(array, minidx, i);

        plan.pos.push([minidx, i]);
        plan.swap.push(true);

        plan.pos.push([minidx, i]);
        plan.swap.push(false);
    }
    plan.sorted = array;
    console.log(array);
    return plan;
}

function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}