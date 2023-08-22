//Write a function choosePrimes(nums) that takes in an array of numbers as args. 
//The function should return a new array containing the primes from the original array. 
//A prime number is a number that is only divisible by 1 and itself. Hint: consider creating a helper function to check if a number is prime!


//1. check if number is prime
//  - create helper function
//  - iterate 2 to num
//  - if any number from 2 to num has no remainder, return false
//  - else return true

let isPrime = function(num) {
    
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    
    return true;
};

//2. create main function
//  - create primes arr
//  - iterate passed in arr
//  - pass num to helper, if true push to primes arr
//  - return primes arr

function choosePrimes(arr) {
    let primes = [];
    
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if ( isPrime(num) ) {
            primes.push(num);
        }
    }
    
    return primes;
}



console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]
