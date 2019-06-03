function poppinBottles(num) {

  var initialBottles = Math.floor(num / 2);

  var inv = {bottles: initialBottles, caps: initialBottles, empties: initialBottles};

  inv = redeem(inv);

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

      return redeem(obj);
    } else {

      if (obj.empties >= 2) {

        obj.bottles += 1;
        obj.caps += 1;
        obj.empties -= 1;

        return redeem(obj);
      }
    }
  }
}



module.exports = poppinBottles;