// Write a function threeIncreasing that accepts an array of numbers as an argument.
// The function should return a boolean indicating whether or not the array contains
// three consecutive numbers in consecutive increasing order, like 7, 8, 9.


//1. iterate array
//2. check if current num + 1 = next num
//   and next num + 1 = next num then return true

function threeIncreasing(arr) {
    for (let i = 0; i < arr.length; i++) {
        currentNum = arr[i];
        secondNum = arr[i + 1];
        thirdNum = arr[i + 2];

        if ((currentNum + 1 === secondNum) && (secondNum + 1 === thirdNum)) {
            return true;
        }
    }
    return false;
}



console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4]));     // true
console.log(threeIncreasing([2, 7, 8, 9]));                 // true
console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6]));        // false
console.log(threeIncreasing([1, 2, 4, 5, 2, 7, 8]));        // false
