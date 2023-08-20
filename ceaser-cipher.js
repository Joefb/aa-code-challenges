//Write a method caesarCipher that takes in a string and a number.
//The function should return a new string where every character of the original is shifted num characters in the alphabet.

//0. create alphabet var
//1. create cipherWord var to hold cipher word
//2. iterate string
//3. each char look up index in alphabet
//4. add num to index to get new char
//5. add new char to cipherWord
//6. return cipherWord

// Feel free to use this variable:
// const alphabet = "abcdefghijklmnopqrstuvwxyz";

function caesarCipher(string, num) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let cipherWord = "";

    for (i = 0; i < string.length; i++) {
        let newIdx = 0;
        if (alphabet.indexOf(string[i])  + num > alphabet.length) {
            cipherWord += alphabet[num - 1];
        } else {
            newIdx = alphabet.indexOf(string[i])  + num;
            cipherWord += alphabet[newIdx];
        }


    }

    return cipherWord;

}

console.log(caesarCipher("apple", 1)); // "bqqmf"
console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
console.log(caesarCipher("zebra", 4)); // "difve"
