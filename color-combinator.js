/******************
 * YOUR CODE HERE *
 ******************/
function colorCombinator( color1, color2 ) {
  const R = 'red';
  const Y = 'yellow';
  const B = 'blue';
  const O = 'orange';
  const P = 'purple';
  const G = 'green';
  
  if ( R === color1 && Y === color2 ) {
    return O;

  } else if( Y === color1 && R === color2 ) {
    return O;
  
  } else if( R === color1 && B === color2 ) {
    return P;

  } else if( B=== color1 && R=== color2 ) {
    return P;
  
  } else if( Y === color1 && B === color2 ) {
    return G;
  
  } else( B === color1 && Y === color2 ) 
    return G;
  

}
















// Our setup code here. Don't touch!
if(typeof colorCombinator === 'undefined') {
  colorCombinator = undefined;
}

module.exports = colorCombinator;
