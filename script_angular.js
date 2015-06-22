var app = angular.module("MyApp",[]);

UserInputs = app.controller("UserInputs", function(){

  this.foobar = 5;

  this.myFunction = function(){
    console.log("hello");
  }

  setInterval(this.myFunction, 1000);

}); // Controller