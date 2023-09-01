//Write a function primeFactors that accepts a number as an argument. 
//The function should return an array containing all of the prime numbers that can divide the given number.

//1. create isprime fun to check if num prime 
//  - iterate 2 to num
//  - if num mod counter 0 return false
//  - else return true

let isPrime = function(num) {
    
    if (num < 2) {
            return false;
        }
        
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    
    return true;
};

//2. create funct that takes in num
//  - create arr to return
//  - iterate 2 to num
//  - if i prime and num % i = 0 then push i to arr
//  - return arr

function primeFactors(num) {
    newArr = []; 
    
    for (let i = 2; i <= num; i++) {
        if (isPrime(i) && num % i === 0) {
            newArr.push(i);
        }
    }
    
    return newArr;
}



console.log(primeFactors(12));  // [2, 3]
console.log(primeFactors(7));   // [7]
console.log(primeFactors(16));  // [2]
console.log(primeFactors(30));  // [2, 3, 5]
console.log(primeFactors(35));  // [5, 7]
console.log(primeFactors(49));  // [7]
console.log(primeFactors(128)); // [2]
