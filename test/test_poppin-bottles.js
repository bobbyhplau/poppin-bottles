var poppinBottles = require("../lib/poppin-bottles.js");
var assert = require("chai").assert;

describe("Poppin Bottles", function(){
  it("should return 15", function() {

    assert.equal(poppinBottles(10), 15);
  });

  it("should return 35", function() {

    assert.equal(poppinBottles(20), 35);
  });

  it("should return 55", function() {

    assert.equal(poppinBottles(30), 55);
  });

  it("should return 75", function() {

    assert.equal(poppinBottles(40), 75);
  });

});