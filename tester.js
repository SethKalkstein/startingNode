console.log("Hello everyone, how are you doing?");

const greeting = () => console.log("Hello, how are you doing?");

const callFunction = (theFunction) => theFunction();

const goodByeFunParam = (aName) => console.log("good Bye (Fun Param) " + aName());

const goodByePrimParam =  (aName) => console.log("good Bye (Prim Param) " + aName);

callFunction(greeting);

callFunction( () => goodByeFunParam(()=>"Bob"));

callFunction( () => goodByePrimParam("Bob"));

const nameGenerator = (nameArray) => nameArray[Math.floor( (Math.random() ) * nameArray.length) ];

const someNames = ["Gerald", "Nikkia", "Gertrude", "Stacy", "Maria", "Min", "Paul", "Dom" ];

callFunction( () => goodByeFunParam( () => nameGenerator(someNames)));

callFunction( () => goodByePrimParam(nameGenerator(someNames)));

//same as above but with traditional notation
callFunction( function() {
  return goodByeFunParam(function(){
    return "This and the following are not arrow notation, but they're cool anyway";
  });
});

callFunction( function() {
  return goodByeFunParam(function(){
    return nameGenerator(someNames);
  });
});

// callFunction( function {
//   goodByeFunParam(function(){
//     nameGenerator(someNames)})});

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
