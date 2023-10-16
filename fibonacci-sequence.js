//Write a function fibonacciSequence that accepts a number as an argument. 
//The function should return an array representing the fibonacci sequence up to the given length. 
//The first and second numbers of the sequence are 1 and 1. 
//To generate subsequent numbers of the sequence, we take the sum of the previous two numbers of the sequence.

//1. create func, 1 para int
//  - create new array
//  - if int = 0 then return new array
//  - else if int = 1 then return new array 1 
//  - new array = [1, 1]
//  - iterate 2 to int
//  - create addPrev var = new array i - 1 + i - 2
//  - push addPrev
//  - return new array

let fibonacciSequence = function(num) {
    // refactor
    //let sumsArr = [];
    
    if (num === 0) {
     // return sumsArr;
        return [];
    } else if (num === 1) {
        //sumsArr = [1];
        //return sumsArr;
        return [1];
    }
    
    sumsArr = [1, 1]
    
    for (let i = 2; i < num; i++) {
        let addPrev = sumsArr[i - 1] + sumsArr[i - 2];
        sumsArr.push(addPrev);
    }
    
    return sumsArr;
    
};

console.log(fibonacciSequence(4));  // [ 1, 1, 2, 3 ]
console.log(fibonacciSequence(5));  // [ 1, 1, 2, 3, 5 ]
console.log(fibonacciSequence(8));  // [ 1, 1, 2, 3, 5, 8, 13, 21 ]
console.log(fibonacciSequence(0));  // [ ]
console.log(fibonacciSequence(1));  // [ 1 ]
console.log(fibonacciSequence(2));  // [ 1, 1 ]
