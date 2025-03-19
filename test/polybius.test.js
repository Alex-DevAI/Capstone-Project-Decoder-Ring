// Write your tests here!
const { polybius } = require("../src/polybius.js");
const expect = require("chai").expect;

describe("Polybius Cipher Shift", () => {
  it("should check if the output is still a string", () => {
    const actual = polybius("thinkful"); //> "4432423352125413"
    expect(actual).to.be.a("string");
  });
  it("should ensure the number of characters in the string (excluding spaces) should be even or return false", () => {
    const actual1 = polybius("3251131343 2543241341", false); //> "hello world"
    expect(actual1).to.have.lengthOf(11); // even characters passed and length (including whitespace) was maintained

    const actual2 = polybius("44324233521254134", false); //> false because odd number of characters in string
    expect(actual2).to.be.false;
  });
  it("should ignore Capital letters in the message when transforming", () => {
    const actual1 = polybius("Hello World"); //> '3251131343 2543241341'
    const actual2 = polybius("hello world"); //> '3251131343 2543241341'
    const expected = "3251131343 2543241341";
    expect(actual1).to.equal(expected);
    expect(actual2).to.equal(expected);
  });
  it("should encode to 42 when i and j are used as input and decode to (i/j)", () => {
    const expected1 = "th(i/j)nkful";
    const actual1 = polybius("4432423352125413", false); // decode to (i/j)
    expect(actual1).to.equal(expected1);

    const expected2 = "4432423352125413";
    const actual2 = polybius("thinkful"); // encode to 42
    expect(actual2).to.equal(expected2);
  });
});
