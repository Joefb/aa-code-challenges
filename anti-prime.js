//Write a function isAntiPrime that accepts a number as an argument. 
//The method should return true if the given number has more divisors than all positive numbers less than the given number. 
//For example, 24 is an anti-prime because it has more divisors than any positive number less than 24.


//1. create helper funct totaldivs pass in num
//  - create counter var
//  - iterate i=2 to num
//  - if num % i = 0 then counter++
//  - return counter var
let totalDivs = function(num) {
    let counter = 0;
    
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            counter++;
        }
    }
    
    return counter;
};

//2. create funct and take in num
//  - get total divisors for num
//  - iterate each i to num
//  - if i divisors > nums divs return false
// -  else return true
function isAntiPrime(num) {
    let numDivs = totalDivs(num);
    
    for (let i = 0; i < num; i++) {
        if (totalDivs(i) > numDivs) {
            return false;
        }
    }
    
    return true;
}


//console.log(totalDivs(10));
console.log(isAntiPrime(24))   // true
console.log(isAntiPrime(36))   // true
console.log(isAntiPrime(48))   // true
console.log(isAntiPrime(360))  // true
console.log(isAntiPrime(1260)) // true
console.log(isAntiPrime(27))   // false
console.log(isAntiPrime(5))    // false
console.log(isAntiPrime(100))  // false
console.log(isAntiPrime(136))  // false
console.log(isAntiPrime(1024)) // false
