function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        // Pick the element to be inserted
        const key = arr[i];
        let j = i - 1;

        // Move elements of arr[0..i-1], that are greater than key,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

// Usage:
const array = [10, 71, 36, 25, 16];
console.log("Original array:", array);
const sortedArray = insertionSort(array);
console.log("Sorted array:", sortedArray);
