// Input: arr[] = [3, 5, 4, 1, 9]
// Output: [1, 9]
// Explanation: The minimum element is 1, and the maximum element is 9.

// Input: arr[] = [22, 14, 8, 17, 35, 3]
// Output: [3, 35] 
// Explanation: The minimum element is 3, and the maximum element is 35.

// solution 1: Using two pointer approach

findMaxMin = (arr) => {
    if(!arr || !arr.length ) return [];
    let min = arr[0]; // O(1)
    let max = arr[0]; // O(1)

    for(let i = 1; i < arr.length; i++){ // -> O(n)

        const current = arr[i];
        // check min values > current
        if(current < min) min = current
        // check max values < current
        if(current > max) max = current
        
    }

    return [min, max];
}
const arr1 = [3, 5, 4, 1, 9];
const arr2 = [22, 14, 8, 17, 35, 3]
console.log(findMaxMin(arr1));
console.log(findMaxMin(arr2));


// space complexity: 0(1) used two variables to store
// time complexity: O(n) iterate through the array only once


