// Write your tests here!
const { caesar } = require("../src/caesar.js");
const expect = require("chai").expect;

describe("Caesar Cipher Shift", () => {
  it("should check if the shift value is not present (equal to 0, < -25, > 25), if it's not, return false", () => {
    const actual0 = caesar("thinkful"); // if shift is not present
    expect(actual0).to.be.false;

    const actual1 = caesar("thinkful", 0); // if shift is 0
    expect(actual1).to.be.false;

    const actual2 = caesar("thinkful", -26); // if shift is -25
    expect(actual2).to.be.false;

    const actual3 = caesar("thinkful", 26); // if shift is 25
    expect(actual3).to.be.false;
  });
  it("should maintain spaces and any non-alphabetic characters in the message", () => {
    const expected = "bpqa qa i amkzmb umaaiom!";
    const actual = caesar("This is a secret message!", 8);
    expect(actual).to.equal(expected);
  });
  it("should ignore Capital letters in the message when shifting", () => {
    const expected = "this is a secret message!";
    const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
    expect(actual).to.equal(expected);
  });
  it("should wrap the letter shifted around the alphabet when the shift would reach the front or end of the alphabet", () => {
    const expected1 = "bpqvsnct";
    const actual1 = caesar("thinkful", 8); // positive wraparound
    expect(actual1).to.equal(expected1);

    const expected2 = "sdhzstwl";
    const actual2 = caesar("alphabet", -8); // negative wraparound
    expect(actual2).to.equal(expected2);
  });
});
