/******************
 * YOUR CODE HERE *
 ******************/
function colorDeconstructor( x ) {
const R = 'red';
const Y = 'yellow';
const B = 'blue';
const O = 'orange';
const P = 'purple';
const G = 'green';

if( x === O ) {
  return R + ' and ' + Y

} else if( x === P ) {
  return R + ' and ' + B

} else( x === G)
  return B + ' and ' + Y

}












// Our setup code here. Don't touch!
if(typeof colorDeconstructor === 'undefined') {
  colorDeconstructor = undefined;
}


module.exports = colorDeconstructor;
