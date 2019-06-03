var args = process.argv[2];

var bottlesEarned = 0;
var capsEarned = 0;

var passObj;

console.log("TOTAL BOTTLES: " + poppinBottles(args));
console.log("REMAINING BOTTLES: " + passObj.empties);
console.log("REMAINING CAPS: " + passObj.caps);

console.log("TOTAL EARNED:");
console.log("  BOTTLES: " + bottlesEarned);
console.log("  CAPS: " + capsEarned);

function poppinBottles(num) {

  var initialBottles = Math.floor(num / 2);

  var inv = {bottles: initialBottles, caps: initialBottles, empties: initialBottles};

  inv = redeem(inv);

  passObj = inv;

  return inv.bottles;
}

function redeem(obj) {

  if (obj.caps < 4 && obj.empties < 2) {

    return obj;
  } else {

    if (obj.caps >= 4) {

      obj.bottles += 1;
      obj.caps -= 3;
      obj.empties += 1;
      capsEarned++;

      return redeem(obj);
    } else {

      if (obj.empties >= 2) {

        obj.bottles += 1;
        obj.caps += 1;
        obj.empties -= 1;
        bottlesEarned++;

        return redeem(obj);
      }
    }
  }
}



module.exports = poppinBottles;