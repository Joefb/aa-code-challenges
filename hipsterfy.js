//Write a function hipsterfy(sentence) that takes in a sentence string and returns the sentence where every word is missing its last vowel.

//1. create func, 1 para str word
//  - create vowels var
//  - iterate word backwards
//  - if char vowel
//  - return slice 0 1 + i + 1

function rmLastVowel(word) {
    let vowels = "aeiou";
    
    for (let i = word.length - 1; i >= 0; i--) {
        let char = word[i];
        if (vowels.includes(char)) {
            return word.slice(0, i) + word.slice(i + 1) ;
        }
    }
}

//2. create func, 1 para str sentence
//  - split sentence
//  - interate split arr
//  - word = arr i
//  - splice i, 1, rmLastVowel(word)
//  - return split arr join

function hipsterfy(sentence) {
    let splitArr = sentence.split(" ");
    
    for (let i = 0; i < splitArr.length; i++) {
        let word = rmLastVowel(splitArr[i]);
        splitArr.splice(i, 1, word);
    }
    
    return splitArr.join(" ");
}


console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'
