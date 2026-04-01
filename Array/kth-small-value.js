// Given an integer array arr[] and an integer k, your task is to find and return the kth smallest element in the given array.

// Note: The kth smallest element is determined based on the sorted order of the array.

// Examples :

// Input: arr[] = [10, 5, 4, 3, 48, 6, 2, 33, 53, 10], k = 4
// Output: 5
// Explanation: 4th smallest element in the given array is 5.
// Input: arr[] = [7, 10, 4, 3, 20, 15], k = 3
// Output: 7
// Explanation: 3rd smallest element in the given array is 7.

function kthSmallest(arr, k) {
    if(!arr || !arr.length || k <= 0 || k > arr.length) return null;
    arr.sort((a, b) => a - b);
    return arr[k - 1]
}

const arr1 = [10, 5, 4, 3, 48, 6, 2, 33, 53, 10];
const arr2 = [7, 10, 4, 3, 20, 15];
console.log(kthSmallest(arr1, 4));
console.log(kthSmallest(arr2, 3));

// space complexity: O(1) used constant space to store the result
// time complexity: O(n log n) used sort method to sort the array