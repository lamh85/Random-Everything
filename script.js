var squares = [];
var squareCss = {};
var ScreenWidth = $('body').width;
var ScreenHeight = $('body').height;

console.log("ScreenWidth is " +ScreenWidth);
console.log("ScreenHeight is " +ScreenHeight);


var makeSquareCss = function(red,green,blue,width,height,radius,left,top) {
  return {
    background: "rgb(" +red+ "," +green+ "," +blue+ ")",
    height: height+ "px",
    width: width+ "px",
    borderRadius: radius+ "%",
    position: "absolute",
    left: left+ "%",
    top: top+ "%"
  }
}



var makeRandom = function(limit) {
  return Math.round(limit * Math.random());
}

for (i = 1; i < ( makeRandom(50)+50 ); i++ ) {
  squareCss = makeSquareCss(
    makeRandom(255), // red
    makeRandom(255), // green
    makeRandom(255), // blue
    makeRandom(200), // width
    makeRandom(200), // height
    makeRandom(100), // border-radius
    makeRandom(100), // left
    makeRandom(100) // top
  )
  $('div.clone-me:last').clone().css(squareCss).appendTo('body');
}

var renderSquares = function(){
  for (i = 0; i < squares.length; i ++) {
    $('body').append( $('div').css(squares[i]) );
  }
}



// How to style using objects:
// ///////////////////////////
// $( "p" )
//   .on( "mouseenter", function() {
//     $( this ).css({
//       "background-color": "yellow",
//       "font-weight": "bolder"
//     });
//   })
//   .on( "mouseleave", function() {
//     var styles = {
//       backgroundColor : "#ddd",
//       fontWeight: ""
//     };
//     $( this ).css( styles );
//   });