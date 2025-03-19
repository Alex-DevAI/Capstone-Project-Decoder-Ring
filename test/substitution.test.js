// Write your tests here!
const { substitution } = require("../src/substitution.js");
const expect = require("chai").expect;

describe("Substitution Cipher Shift", () => {
  it("should encode and decode based on the substitution cipher", () => {
    const actual1 = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"); //encode
    const expected1 = "jrufscpw";
    expect(actual1).to.equal(expected1);

    const actual2 = substitution(
      "jrufscpw",
      "xoyqmcgrukswaflnthdjpzibev",
      false
    ); //decode
    const expected2 = "thinkful";
    expect(actual2).to.equal(expected2);
  });
  it("should check if the output is still a string", () => {
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"); //> 'jrufscpw'
    expect(actual).to.be.a("string");
  });
  it("should ensure that spaces are maintained throughout", () => {
    const actual = substitution(
      "You are an excellent spy",
      "xoyqmcgrukswaflnthdjpzibev"
    ); //> 'elp xhm xf mbymwwmfj dne'
    expect(actual).to.have.lengthOf(24); // even characters passed and length (including whitespace) was maintained
  });
  it("should ignore Capital letters in the message when substituting", () => {
    const actual1 = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"); //> 'jrufscpw'
    const actual2 = substitution("THINKFUL", "xoyqmcgrukswaflnthdjpzibev"); //> 'jrufscpw'
    const expected = "jrufscpw";
    expect(actual1).to.equal(expected);
    expect(actual2).to.equal(expected);
  });
  it("should ensure that the alphabet supplied exists and has exactly 26 characters or returns false", () => {
    const actual1 = substitution("message", "$wae&zrdxtfcygvuhbijnokmplab"); //Length is 28 instead of 26 characters
    expect(actual1).to.be.false;

    const actual2 = substitution("message"); //No alphabet provided
    expect(actual2).to.be.false;
  });
  it("should ensure that all letters in the supplied alphabet parameter are unique or returns false", () => {
    const actual = substitution("message", "$wae&zrdxtfcygvuhbijvuhbplab"); //vuhb is repeated in this alphabet while still maintaining 26 characters
    expect(actual).to.be.false;
  });
});
