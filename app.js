// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `Kalvian-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `Kalvian-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.
var Kalvium_1 = 'XYZW';
var Kalvium_2 = 'ABCD';
console.log("The driver's name is", Kalvium_1);
console.log("The navigator's name is", Kalvium_2);
// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
var value_1 = Kalvium_1.length;
var value_2 = Kalvium_2.length;
for (i = 0; value_1 > i; i++) {
  for (k = 0; value_2 > k; k++) {
    if (i > k) {
      var g = `The driver has the longest name,${value_1}`;
    } else if (i < k) {
      var g = `It seems that the navigator has the longest name,${value_2}`;
    } else {
      var g = `Wow, you both have equally long names,${value_1}`;
    }
  }
}
console.log(g);

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String Kalvian - a and i are vowels. Print Kalvian a i a 1 4 5.
var names = 'Mukilan';
var d = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
var f = 'no vowels';
b = '';
q = '';
for (var i = 0; i < names.length; i++) {
  var currentChar = names[i];
  var isVowel = false;
  for (var j = 0; j < d.length; j++) {
    if (currentChar === d[j]) {
      isVowel = true;

      break;
    }
  }

  if (isVowel) {
    b += d[j] + ' ';
    q += i + ' ';
  }
}
console.log(b, q);

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
// var w=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// var l=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var j = 'HellO Mukilan';
let p = 0;
let n = 0;
for (let i = 0; i < j.length; i++) {
  var u = isUpperCase(j[i]);
  if (u) {
    p += 1;
  } else {
    n += 1;
  }
}
console.log(p);
console.log(n);
function isUpperCase(char) {
  return char === char.toUpperCase() && char !== char.toLowerCase();
}

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "Kalvian"
let l = Kalvium_1.split('');
h = '';
for (let i = 0; i < l.length; i++) {
  h += l[i] + ' ';
}
console.log(h);
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. Example "naivlaK"
k="";
for(i=Kalvium_2.length-1;i>=0;i--){
    k+=Kalvium_2[i]+""
}
console.log(k);
// 3.3 Merge both the characters such that driver is followed by Navigator like "DriverName NavigatorName"
// - Now bring the NavigatorName to the start and send DriverName to the back like "NavigatorName DriverName"
console.log(Kalvium_2,Kalvium_1);
// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
if(Kalvium_1>Kalvium_2){
  console.log(`The driver's name is ${Kalvium_1}`);
}
else if(Kalvium_2>Kalvium_1){
  console.log(`The Navigtor's name is ${Kalvium_2}`);
}
else{
  console.log("What?! You both have the same name");
}
// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin'
