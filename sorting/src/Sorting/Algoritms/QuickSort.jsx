export function QuickSort(array) {
    var plan = {
        sorted: [],
        pos: [],
        swap: [],
        isPartition: []
    };
    console.log(":p")
    console.log(plan);

    quickSortRec(array, 0, array.length - 1, plan);
    console.log(array);
    plan.sorted = array;
    console.log(plan);
    return plan;
}

function quickSortRec(array, start, end, plan) {
    console.log(":)");
    console.log(plan);
    if (start === end || end < start || start < 0 || end >= array.length) {
        return;
    }
    var pivot = partition(array, start, end, plan);

    quickSortRec(array, start, pivot - 1, plan);

    quickSortRec(array, pivot + 1, end, plan);

}

function partition(array, start, end, plan) {
    var pivot = Math.floor((end + start) / 2);
    var key = array[pivot];

    plan.pos.push([pivot, pivot]);
    plan.swap.push(true);
    plan.isPartition.push(true);
    // console.log('-------------------------');
    // console.log(`Begining ${start}} and end ${end}`)
    // console.log(`pivot ${pivot} and key ${key}`);
    // console.log(array);
    // console.log(`swappingn ${array[pivot]} at position ${pivot} with ${array[end]} at position ${end}`);
    console.log(plan);
    plan.pos.push([pivot, end]);
    plan.swap.push(true);
    plan.isPartition.push(false);
    swap(array, pivot, end);
    // console.log(array);

    var left = start;
    var right = end - 1;
    plan.pos.push([left, right]);
    plan.swap.push(false);
    while (left < right) {
        while (left < end && array[left] <= key) {
            left += 1;
            plan.pos.push([left, right]);
            plan.swap.push(false);
            plan.isPartition.push(false);
        }
        while (right >= start && array[right] > key) {
            right -= 1;
            plan.pos.push([left, right]);
            plan.swap.push(false);
            plan.isPartition.push(false);
        }
        if (left < right) {
            // console.log(`swappingn ${array[left]} at position ${left} with ${array[right]} at position ${right}`);
            swap(array, left, right);
            plan.pos.push([left, right]);
            plan.swap.push(true);
            console.log(array);
        }
    }
    if (array[left] > key) {
        // console.log(`swappingn ${array[left]} at position ${left} with ${key} at position ${end}`);
        swap(array, left, end);
        plan.pos.push([left, end]);
        plan.swap.push(true);
        plan.isPartition.push(false);
        //console.log(array);
    }
    pivot = left;
    // console.log(`pivot pos ${pivot}`)
    // console.log('-------------------------');
    return pivot;
}

function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}