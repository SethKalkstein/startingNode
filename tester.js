console.log("Hello everyone, how are you doing?");

const greeting = function() { console.log("Hello, how are you doing?");}

const callFunction = function(theFunction){ theFunction(); }

callFunction(greeting);

setTimeout(()=>{
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
}, 3000);

let stopper = 0;

var timer = setInterval(()=>{
  console.log(stopper + " seconds have passed");
  if(stopper > 5){
    clearInterval(timer);
  }
  stopper ++;
}, 1000);


console.log(__filename);
