/******************
 * YOUR CODE HERE *
 ******************/
function isValidPrimary(x) {
  const R = 'red';
  const Y = 'yellow';
  const B = 'blue';
  const O = 'orange';
  const P = 'purple';
  const G = 'green';
  const BG = 'blorgon';
  const T = 'ted';

  if (x === R) {
    return true

  } else if (x === Y) {
    return true

  } else if (x === B) {
    return true

  } else if (x === O) {
    return false

  } else if (x === BG) {
    return false
  
  } else (x === T) 
    return false
}

// Our setup code here. Don't touch!
if (typeof isValidPrimary === 'undefined') {
  isValidPrimary = undefined;
}
module.exports = isValidPrimary;
