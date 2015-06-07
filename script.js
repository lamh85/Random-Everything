var duplicateDivs;
var excess;
var counter = 1;

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

var animateExisting = function(element){
  element.animate( makeSquareCssRandom(),makeRandom(5000) );
};

var animateNew = function(){
  // Render the shapes
  for (i = 1; i < ( makeRandom(10)+20 ); i++ ) {
    $('div.clone-me:last').clone().css( makeSquareCssRandom() ).addClass('duplicate').removeClass('clone-me').animate(
        makeSquareCssRandom(), makeRandom(5000) // Create random CSS and random duration
      ).appendTo('body');
  }
  // Remove the excess
  duplicateDivs = $('.duplicate');
  if ( duplicateDivs.length > 500 ) {
    excess = duplicateDivs.length - 500;
    for (i = 1; i < excess; i++) {
      duplicateDivs.eq(makeRandom(excess)).remove();
    }
  }

  for (i = 1; i < (duplicateDivs.length/4); i++ ){
    animateExisting(
      duplicateDivs.eq(makeRandom( duplicateDivs.length/4 ))
    )
  }

  console.log("Iteration number " +counter+ ". Number of shapes: " +duplicateDivs.length);
  counter ++;
};

// Run for first time
animateNew();

setInterval(animateNew,1000);
