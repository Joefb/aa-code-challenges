//Write a function avgVal(arr) that accepts an array as an arg. 
//The function should return the average of all values in the array. If the array is empty, it should return null.

//1. create funct that takes arr
//  - if arr empty return null 
//  - create sum var
//  - iterate arr, add nums to sum var
//  - return sum var / arr len

let avgVal = function(arr) {
    if (arr.length === 0) {
        return null;
    }
    
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        sum += num;
    }
    
    return sum / arr.length; 
    
};

console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null
