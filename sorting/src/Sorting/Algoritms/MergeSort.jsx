export function MergeSort(array) {
    var plan = {
        sorted: [],
        pos: [],
        swap: []
    };
    mergeSortRec(array, 0, array.length - 1, plan);
    console.log('sorted->');
    plan.sorted = array;
    for (var step = 0; step < plan.pos.length; step++) {
        console.log(`Step ${step} \n pos ${plan.pos[step]} \n Swap: ${plan.swap[step]}`);
    }
    return plan;
}

function merge(array, beg, mid, end, plan) {
    var start = mid + 1;

    plan.pos.push([beg, start]);
    plan.swap.push(false);
    if (array[mid] <= array[start]) {
        return;
    }
    while (beg <= mid && start <= end) {

        if (array[beg] <= array[start]) {
            beg++;
            plan.pos.push([beg, start]);
            plan.swap.push(false);
        }
        else {
            var value = array[start];
            var index = start;

            while (index !== beg) {

                plan.pos.push([index, index - 1]);
                plan.swap.push(true);

                array[index] = array[index - 1];
                index--;
            }
            array[beg] = value;
            beg++;
            mid++;
            start++;
        }
    }

}

function mergeSortRec(array, beg, end, plan) {
    if (beg < end) {
        let mid = Math.floor((beg + end) / 2);
        mergeSortRec(array, beg, mid, plan);


        mergeSortRec(array, mid + 1, end, plan);


        merge(array, beg, mid, end, plan);


    }
}