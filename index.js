// Problem 1
// x = herbivore, y = preadtor, z = weight
function access(x, y, z) {
  if ((x === true && y === false) || (z < 50 && y === false)) {
    console.log("The animal may roam");
  } else {
    console.log("No roam");
  }
}

access(false, false, 57);
//=======================================================//

//Problem 2
//1. The person must be a child (under 12 years old) OR a senior (65 years or older).
//2. The person must either be a resident OR have a valid membership card. x
function themepark(agee, resident, membership) {
  if (agee < 12 || agee > 65 || resident === true || membership === true) {
    console.log("Discount applied");
  } else {
    console.log("Discount invalid");
  }
}
