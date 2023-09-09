//Write a function fizzBuzz(max) that accepts a number as an arg. 
//The function should return an array containing all positive numbers less than max that are divisible by either 3 or 5, but not both.

//1. create funct, para max
//  - create array
//  - iterate 0 to max
//  - if i mod 3 or 5 = 0 and not 3 and 5
//  - push i to array

function fizzBuzz(max) {
    let array = [];
    
    for (i = 1; i < max; i++) {
        if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 ===0)) {
            array.push(i);
        }
    }
    
    return array;
}

console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 
