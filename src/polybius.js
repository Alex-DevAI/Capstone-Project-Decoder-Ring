// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    const polybGrid = [
      { a: 11 },
      { b: 21 },
      { c: 31 },
      { d: 41 },
      { e: 51 },
      { f: 12 },
      { g: 22 },
      { h: 32 },
      { "(i/j)": 42 },
      { k: 52 },
      { l: 13 },
      { m: 23 },
      { n: 33 },
      { o: 43 },
      { p: 53 },
      { q: 14 },
      { r: 24 },
      { s: 34 },
      { t: 44 },
      { u: 54 },
      { v: 15 },
      { w: 25 },
      { x: 35 },
      { y: 45 },
      { z: 55 },
    ];
    input = input.toLowerCase();
    const outputArray = [];
    const inputArray = input.split("");

    if (encode) {
      inputArray.forEach((char) => {
        if (char === "i" || char === "j") {
          outputArray.push(42); // check for i and j
        } else {
          const index = polybGrid.findIndex((obj) => obj[char] !== undefined); // find corresponding number for character
          if (index === -1) {
            outputArray.push(char); // just add whitespace
          } else {
            outputArray.push(polybGrid[index][char]); // add found number to encoded message
          }
        }
      });
    } else {
      //Decode
      if ((input.match(/[^\s]/g) || []).length % 2 !== 0) return false;
      for (let i = 0; i < inputArray.length; i = i + 2) {
        //iterates through array two characters at a time
        if (/\s/.test(inputArray[i])) {
          outputArray.push(inputArray[i]); //pushes space to decoded message
          i = i - 1; // Assuming only one space is used between words
        } else {
          pair = `${inputArray[i] + inputArray[i + 1]}`; //combines first two numbers to compare against polybGrid numbers
          matchingPair = polybGrid.find(
            (obj) => Object.values(obj)[0] === parseInt(pair) // returns object that aligns based on matching numbers
          );
          outputArray.push(Object.keys(matchingPair)[0]); // pushes key to decoded message as a letter
        }
      }
    }
    return outputArray.join(""); //Decode/Encoded Message
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
