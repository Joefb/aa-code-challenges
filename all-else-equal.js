//Write a function allElseEqual that takes in an array of numbers. 
//The function should return the element of the array that is equal to half of the sum of all elements of the array. 
//If there is no such element, the method should return null.
//
//
//1. create arrSum var
//  - create idx var
//  -iterate arr and sum nums
//  - check if array has num / 2. store in idx
//  - if idx = -1 return null
//  - else return sum

function allElseEqual(arr) {
    let idx = 0; 
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        //console.log(`arr ${arr[i]} | sum ${sum}`);
        sum += arr[i];
    }
    
    idx = arr.indexOf(sum / 2);
    
    if (idx === -1) {
        return "null"
    };
    
    return arr[idx];
}

console.log(allElseEqual([2, 4, 3, 10, 1])); // 10
console.log(allElseEqual([6, 3, 5, -9, 1])); // 3
console.log(allElseEqual([1, 2, 3, 4]));     // null
