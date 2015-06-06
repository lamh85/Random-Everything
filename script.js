var squares = [];

var makeSquare = function(red,green,blue,height,width,radius,left,top) {
  return {
    background: "rgb(" +red+ "," +green+ "," +blue+ ")",
    height: height+ "px",
    width: width+ "px",
    borderRadius: radius+ "%",
    position: "relative",
    left: left+ "%",
    top: top+ "%"
  }
}

var makeRandom = function(limit) {
  return Math.round(limit * Math.random());
}

for (i = 1; i < makeRandom(20); i++ ) {
  squares.push(
    makeSquare(makeRandom(255),makeRandom(255),makeRandom(255),makeRandom(200),makeRandom(200),makeRandom(100),makeRandom(100),makeRandom(100))
  ) // Push into array
}

var renderSquares = function(){
  for (i = 0; i < squares.length; i ++) {
    $('body').append( $('div').css(squares[i]) );
  }
}

var myDiv = $.create("div");

// Math.random()





var ScreenWidth = $('body').width;
var ScreenHeight = $('body').height;

// Math.random()

$('body').append("hello world");

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