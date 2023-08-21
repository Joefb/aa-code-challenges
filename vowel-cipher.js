//Write a function vowelCipher that takes in a string and returns a new string where every vowel becomes the next vowel in the alphabet.


//0. create cipher string var
//1. create a vowels var
//2. iterate string chars
//3. if char is vowel get index and 1 to get next vowel
//4. add next vowel to cipher var
//5. return cipher var

function vowelCipher(string) {
    let cipher = "";
    let vowels = "aeiou";

    for (i = 0; i < string.length; i++) {
        let vowelIdx = 0;
        let newVowelIdx = 0;

        if (vowels.includes(string[i])) {
            vowelIdx = vowels.indexOf(string[i]) + 1;
            newVowelIdx = vowelIdx % vowels.length;
            cipher += vowels[newVowelIdx];
        } else {
            cipher += string[i];
        }
    }

    return cipher;
}


console.log(vowelCipher("bootcamp")); // "buutcemp"
console.log(vowelCipher("paper cup")); // "pepir cap"
