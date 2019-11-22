//for core modules, just write the name, no path needed
const events = require("events");
const util = require("util");

// const emitter = new events.EventEmitter();
//
// emitter.on("something", (mssg, a) => console.log(mssg + " " + a));
//
// emitter.emit("something", "This is something being emitted", 5);

//constructor for a Person object
const Person = function(name) {
  this.name = name;
} //can't do this constructor as an arrow function

util.inherits(Person, events.EventEmitter);

const bill = new Person("Bill");
const jane = new Person("Jane");
const shi = new Person("Shi");

let people = [bill, jane, shi];

people.forEach(person => person.on("speak", (mssg)=> console.log(`${person.name} said, "${mssg}"`)));

jane.emit("speak", "Have you seen my wig around? I don't feel complete without it.");

bill.emit("speak", "How are you?");
