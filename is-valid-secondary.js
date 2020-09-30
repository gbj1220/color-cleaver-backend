/******************
 * YOUR CODE HERE *
 ******************/
const R = 'red';
const Y = 'yellow'; 
const B = 'blue';
const O = 'orange';
const P = 'purple';
const G = 'green';
const BG = 'blorgon';
const T = 'ted';
const BK = 'black';
const W = 'white';

function isValidSecondary( x ) {
  if ( x === O ) {
    return true;

  } else if ( x === P ) {
    return true;

  } else if ( x === G ) {
    return true;
  
  } else if ( x === R) {
    return false;
  
  } else if ( x === B) {
    return false;
  
  } else ( x === W ) 
    return false;

}



// Our setup code here. Don't touch!
if (typeof isValidSecondary === 'undefined') {
  isValidSecondary = undefined;
}

module.exports = isValidSecondary;
