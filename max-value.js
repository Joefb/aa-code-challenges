//Write a function maxValue(nums) that takes in an array of numbers as an arg. 
//The function should return the largest number of the array. If the array is empty, the function should return null.

//1. create funct that takes in arr
//  - if arr empty return null
//  - create maxNum var to arr 0
//  - iterate arr
//  - if num > maxNum then num = maxNum
//  - return maxNum

let maxValue = function(arr) {
    if (arr.length === 0) {
        return null;
    }
    
    let maxNum = arr[0];
    
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (num > maxNum) {
            maxNum = num;
        }
    }
    
    return maxNum;
}



console.log(maxValue([4, 6, 3, 5, 42, 4])); // 42
console.log(maxValue([-2, -3, -7, 3 ])); // 3
console.log(maxValue([])); // null
