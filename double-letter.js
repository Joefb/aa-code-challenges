//Write a function doubleLetterCount that takes in a string and returns the number of times that the same letter repeats twice in a row.

//1. create counter var
//2. iterate string
//3. if current char = next char then counter++
//4. return counter

function doubleLetterCount(string) {
    // your code here
    let counter = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i + 1]) {
            counter++;
        }
    }

    return counter;
}

console.log(doubleLetterCount("the jeep rolled down the hill"));  // 3
console.log(doubleLetterCount("bootcamp")); // 1
