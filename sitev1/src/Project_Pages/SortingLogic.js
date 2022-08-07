
export function is_sorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

export function shuffle(arr) {
    let new_arr = arr.slice();
    for (let i = 0; i < new_arr.length; i++) {
        let j = Math.floor(Math.random() * new_arr.length);
        let temp = new_arr[i];
        new_arr[i] = new_arr[j];
        new_arr[j] = temp;
    }
    return new_arr;
}