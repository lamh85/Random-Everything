var makeSquareCss = function(red,green,blue,opacity,width,height,radius,rotate,left,top) {
  return {
    background: "rgb(" +red+ "," +green+ "," +blue+ ")",
    opacity: opacity,
    width: width+ "px",
    height: height+ "px",
    borderRadius: radius+ "%",
    transform: "rotate(" +rotate+ "deg)",
    position: "absolute",
    left: left+ "%",
    top: top+ "%"
  }
}

var makeRandom = function(limit) {
  return Math.round(limit * Math.random());
}

var makeSquareCssRandom =  function(){
  return makeSquareCss(
    makeRandom(255), // red
    makeRandom(255), // green
    makeRandom(255), // blue
    Math.random(), // opacity
    makeRandom(300), // width
    makeRandom(300), // height
    makeRandom(100), // border-radius
    makeRandom(360), // rotate
    makeRandom(100), // left
    makeRandom(100) // top
  );
}

for (i = 1; i < ( makeRandom(50)+50 ); i++ ) {
  $('div.clone-me:last').clone().css( makeSquareCssRandom() ).addClass('duplicate').removeClass('clone-me').animate(
      makeSquareCssRandom(), makeRandom(10000) // Create random CSS and random duration, max 10 seconds
    ).appendTo('body');
}