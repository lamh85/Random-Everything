var duplicateDivs = [];
var excess;

// To simplify the Math.random syntax
var makeRandom = function(limit) {
  return Math.round(limit * Math.random());
};

var makeSquareCssRandom = function() {
  return {
    background: "rgb(" +makeRandom(255)+ "," +makeRandom(255)+ "," +makeRandom(255)+ ")",
    opacity: Math.random,
    width: makeRandom(300)+ "px",
    height: makeRandom(300)+ "px",
    borderRadius: makeRandom(100)+ "%",
    transform: "rotate(" +makeRandom(180)+ "deg)",
    position: "absolute",
    left: makeRandom(95)+ "%",
    top: makeRandom(95)+ "%"
  }
};

var renderSquares = function(){
  // Render the shapes
  for (i = 1; i < ( makeRandom(10)+20 ); i++ ) {
    $('div.clone-me:last').clone().css( makeSquareCssRandom() ).addClass('duplicate').removeClass('clone-me').animate(
        makeSquareCssRandom(), makeRandom(5000) // Create random CSS and random duration, max 10 seconds
      ).appendTo('body');
  }
  // Remove the excess
  duplicateDivs = $('.duplicate');
  if ( duplicateDivs.length > 2000 ) {
    excess = duplicateDivs.length - 2000;
    for (i = 1; i < excess; i++) {
      duplicateDivs.eq(makeRandom(excess)).remove();
    }
  }
  console.log("Number of shapes: " +duplicateDivs.length);
};

// Run for first time
renderSquares();

setInterval(renderSquares,1000);
