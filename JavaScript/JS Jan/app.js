//implementing closure
//a closure gives an access to an outer functions scope from an inner function
//closure is a function in lexical enviroment, The lexical enviroment can consist of variables declared outside the function, but accessible within the function.
//with function closures, we can access,modify the outerscope variable with an inner function..
//similar we can use to set get method using this closure, its called encapsulation.

function outFnc() {
  let outerVar = 0;

  return {
    increment: function () {
      outerVar++;
    },
    decrement: function () {
      outerVar--;
    },
    getOuterVar: function () {
      return outerVar;
    },
  };
}

const obj1 = outFnc();
obj1.increment();
obj1.increment();
obj1.increment();
obj1.decrement();
console.log(obj1.getOuterVar());

// variables created without var, let or const are always global variables, even if they are created inside in the function.

// Javascript Hoisting
//defn: Hoisting is a default behaviour of javascript of moving declarations at the top (it can be to top of current scope, which can function or current script).
//Javascript declarations are Hoisted,
//Therefore a variable can be used before its declared.
//But variable of let & const are hoisted at top of block but are not intialized.//TDZ (temporal dead zone)
//Hoisting only allows declaration and not initialization.

carname = "tata";
console.log(carname, x); //tata undefined

var x = 5; //its is hoisted but not initialized.
var carname;

//Hoisting applies to variable declaration as well as function declaration
myFunction(20, 30); //function Hoisting

function myFunction(a, b) {
  console.log(a + b);
}

//self invoking functions
//defn: Self invoking functions are automatically invoked, without being called.
const x = function (a, b) {
  return a + b;
}; //function expression

const val = x(10, 22);
console.log(val);

(function () {
  console.log("hello world, self-invoke function");
})();

//Functions are Objects, it has methods and properties,
function myFunction(a, b) {
  return arguments.length;
}

//
function myFunction(a, b) {
  return a * b;
}

let text = myFunction.toString();

//Arrow-functions
//short syntax for writing function expression, you dont need the function keyword, return keyword (if the statement is single line) and curly brackets anymore
//Arrow functions do not have their own this
//Arrow functions cannot be hoisted

//map
//A Map remembers the original insertion order of the keys.
const fruits = new Map();
fruits.set("apples", 333);
fruits.set("bananas", 444);

console.log(fruits.get("apples"));
fruits.forEach((value, key) => console.log(value, key));

const letter = new Set();
letter.add("a");
letter.add("b");

letter.forEach((value) => console.log(value));

//class
//class is a template for javascript object.
class Mera {
  constructor(a, b) {
    this.x = a;
    this.y = b;
  }

  add(x, y, z) {
    return x + y + z;
  }
  sub(x, y) {
    return x - y;
  }
}

const mera = new Mera(10, 20);
console.log(mera.x, mera.y);

//Promise is an object which return value in near future, it could be either success indicated by resolve, or failure given by reject.

//Node is javascript runtime engine which uses v8 engine to convert javascript code to machine language
//libuv handling async IO, file system, networking and more + plus event loop
//Node single threaded=> top level code gets executed, additional 4 threads for heavy task. file, cryptography etc,then runs event loop
//Event loop: all the code of callback function (non-top-level-code) is executed in event loop.
//callback: functions that are called after sometime when some task is completed.
//Nodejs is event-driven architecture:
//Events are emitted, example after filereading, calling server etc will emit event as soon as they are done
//Event loops picks them up: it then calls the required callback function for that event.
//call backs are called,

//In short eventloop recives events, calls the callback function
//so the event loop executes this call back by call back queues.
//1) Expired timer callback, first this is executed in first phase of event loop
//2)I/O polling, 99% of our code gets executed in this phase typically, I/O means files, networking and more
//3)setImmediate callback
//4)closeCallBack, this is used when a web socket is shutdown etc

//additonal callback queues like microtasks queue is for resolved promises, and NEXTTICK Queue (to execute callbacks in the next iteration of the event loop, immediately after the current one. )

//event loop is what makes asynchronous programming possible, we need event loop because everything works on one single thread

//debouncing is a mechanism in which a function is called after certain period has passed.
//It is often applied in scenarios where a function is repeatedly called due to an event.. like scrolling and typing

const debounce = (func, delay) => {
  let timeout;

  return function (...args) {
    clearInterval(timeout);

    setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};
