//Write a function moreDotLessDash that accepts a string as an argument.
//The function should return a boolean indicating whether or not the string contains more dots (.) than dashes (-).

// Your code here

//1. create 2 vars to hold counters
//2. iterate over string
//3. if char is . add 1 to counter
//  -3a. if char is - add 1 to counter
//4. if dots > dash return true else false

function moreDotLessDash(string) {
    let dots = 0;
    let dash = 0;

    for (i = 0; i < string.length; i++) {
        if (string[i] === ".") {
            dots++;
        } else if (string[i] === "-") {
            dash++;
        }
    }

    //if (dots > dash) {
    //    return true;
    //}
    // return false;

    return dots > dash;
}


console.log(moreDotLessDash('2-D arrays are fun. I think.'));           // true
console.log(moreDotLessDash('Morse code is great.'));                   // true
console.log(moreDotLessDash('.... . -.--'));                            // true
console.log(moreDotLessDash('.--. .-. --- --. .-. .- -- -- . .-.'));    // false
console.log(moreDotLessDash('high-flying acrobat.'));                   // false
