var duplicateDivs;
var excess;
var counter = 1;
var maximumShapes = 500;

// Use DRY principle on Math.random() method
var makeRandom = function(range, minimum) {
  (typeof minimum == 'undefined') && (minimum = 0);
  return minimum + Math.round(range * Math.random());
};

var makeSquareCssRandom = function() {
  return {
    background:     "rgb(" +makeRandom(255)+ "," +makeRandom(255)+ "," +makeRandom(255)+ ")",
    opacity:        Math.random() * 0.7 + 0.1,
    width:          makeRandom( $('body').width() / 6 ), // Max value is 1/6 of <body> width
    height:         makeRandom( $('body').width() / 6 ),
    borderRadius:   makeRandom(100)+ "%",
    transform:      "rotate(" +makeRandom(180)+ "deg)",
    position:       "absolute",
    left:           makeRandom(95)+ "%",
    top:            makeRandom(95)+ "%",
    zIndex:         -1
  }
};

var animateNew = function(){
  // Render the shapes
  for (i = 1; i < ( makeRandom(10,20) ); i++ ) {
    $('div.clone-me').clone().css( makeSquareCssRandom() ).addClass('duplicate').removeClass('clone-me').animate(
        makeSquareCssRandom(), makeRandom(5000) // Create random CSS and random duration
      ).appendTo('body');
  }
  // Remove the excess
  duplicateDivs = $('.duplicate');
  if ( duplicateDivs.length > maximumShapes ) {
    excess = duplicateDivs.length - maximumShapes;
    for (i = 1; i < excess; i++) {
      duplicateDivs.eq(makeRandom(excess)).remove();
    }
  }

  for (i = 1; i < (duplicateDivs.length/4); i++ ){
    // Randomly choose an existing DIV and animate it
    duplicateDivs.eq(makeRandom( duplicateDivs.length/4 )).animate( makeSquareCssRandom(),makeRandom(5000) )
  }

  console.log("Iteration number " +counter+ ". Number of shapes: " +duplicateDivs.length);
  counter ++;
};

// Run for first time
animateNew();

setInterval(animateNew, 2000);