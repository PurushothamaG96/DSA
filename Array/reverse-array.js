//https://www.geeksforgeeks.org/dsa/program-to-reverse-an-array/

// Input: arr[] = [1, 4, 3, 2, 6, 5]  
// Output:  [5, 6, 2, 3, 4, 1]

// Solution 1: Using two pointer approach
function reverseArray(arr){
    if(!arr || arr.length === 0) return arr;
    let left = 0;
    let right = arr.length - 1;

    while(left < right){
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr
}

const arr =[1, 4, 3, 2, 6, 5];
console.log(reverseArray(arr));