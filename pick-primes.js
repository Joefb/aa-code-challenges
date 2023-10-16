//Write a function pickPrimes that takes in an array of numbers and returns a new array containing only the prime numbers.

//1. create helper func isPrime, 1 para int 
//  - if int < 2 ret false
//  - iterate 2 to int
//  - if int mod i = 0 ret false
//  - else ret true

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    
    return true;
} 

//2. create func, 1 para array
//  - create new array
//  - iterate 0 to array length
//  - if num isPrime then push to new array
//  - return new array

function pickPrimes(array) {
    let primesArr = [];
    
    for (let i = 0; i < array.length; i++) {
        if (isPrime(array[i])) {
            primesArr.push(array[i]);
        }
    }
    
    return primesArr;
}


console.log(pickPrimes([2, 3, 4, 5, 6]));  // [2, 3, 5]
console.log(pickPrimes([101, 20, 103, 2017]));  // [101, 103, 2017]
