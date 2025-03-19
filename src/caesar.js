// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    //Input Verification:
    if (
      typeof shift === "undefined" ||
      shift === 0 ||
      shift > 25 ||
      shift < -25
    )
      return false;

    const inputArray = input.split("");
    const outputArray = [];
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    if (!encode) shift = -shift;

    inputArray.forEach((char) => {
      //could also do this for ignoring case :
      //const base = char >= 'a' && char <= 'z' ? 97 : 65;
      char = char.toLowerCase(); //ignores case
      let index = alphabet.indexOf(char); //Tells where the character is located relative to the alphabet for ASCII usage
      if (index === -1) {
        outputArray.push(char); // returns any non-alphabetic characters like whitespace
      } else {
        let newIndex = (index + shift) % 26; //Decode/Encode Transfomatino of Message
        if (newIndex < 0) newIndex += 26; //Negative Wraparound
        if (newIndex > 25) newIndex -= 26; //Positive Wraparound

        outputArray.push(alphabet[newIndex]);
      }
    });
    return outputArray.join(""); //Decode/Encoded Message
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
