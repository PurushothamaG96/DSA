// Function to calculate the product of all
// elements except the current element
function productExceptSelf(arr) {
    const n = arr.length;
    const prefProduct = new Array(n).fill(1);
    const suffProduct = new Array(n).fill(1);
    const res = new Array(n);

    // Construct the prefProduct array
    for (let i = 1; i < n; i++) {
        prefProduct[i] = arr[i - 1] * prefProduct[i - 1];
    }

    // Construct the suffProduct array
    for (let j = n - 2; j >= 0; j--) {
        suffProduct[j] = arr[j + 1] * suffProduct[j + 1];
    }

    // Construct the result array using
    // prefProduct[] and suffProduct[]
    for (let i = 0; i < n; i++) {
        res[i] = prefProduct[i] * suffProduct[i];
    }

    return res;
}

// Driver Code
const arr = [1, 2, 3, 4];
const res = productExceptSelf(arr);
console.log(res.join(" "));