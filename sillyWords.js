// Your code here

//1. create a var that will hold the silly word
//2. iterate through word
//3. check letter to see if vowel
//4. if not add letter to var
//5. if vowel add to var and concat p + vowel
//6. return silly word


function sillyString(word) {
    let sillyWord = "";
    let vowles = "aeiou";

    for (i = 0; i < word.length; i++) {
        if (vowles.includes(word[i])) {
            //sillyWord += word[i] + "p" + word[i];
            sillyWord += `${word[i]}b${word[i]}`;
        } else {
            sillyWord += word[i];
        }
    }


    return sillyWord;
}

console.log(sillyString('stop'));       // stobop
console.log(sillyString('that'));       // thabat
console.log(sillyString('can'));        // caban
console.log(sillyString('cats'));       // cabats
console.log(sillyString('italy'));      // ibitabaly
console.log(sillyString('scooter'));    // scobooboteber;
