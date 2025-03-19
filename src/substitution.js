// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    input = input.toLowerCase();
    const inputArray = input.split("");
    const outputArray = [];
    const originalAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    if (alphabet?.length !== 26) return false; //must be 26 characters for substitution alphabet
    const checkDuplicates = new Set(alphabet);
    if (checkDuplicates.size !== alphabet.length) return false; //checks that all characters in the substitution alphabet are unique

    if (encode) {
      // Encode
      inputArray.forEach((char) => {
        let index = originalAlphabet.indexOf(char); //Tells where the character is located relative to the alphabet for ASCII usage
        if (index === -1) {
          outputArray.push(char); // returns any non-alphabetic characters like whitespace
        }
        outputArray.push(alphabet[index]);
      });
    } else {
      // Decode
      inputArray.forEach((char) => {
        let index = alphabet.indexOf(char); //Tells where the character is located relative to the alphabet for ASCII usage
        if (index === -1) {
          outputArray.push(char); // returns any non-alphabetic characters like whitespace
        }
        outputArray.push(originalAlphabet[index]);
      });
    }
    return outputArray.join(""); //Decode/Encoded Message
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
