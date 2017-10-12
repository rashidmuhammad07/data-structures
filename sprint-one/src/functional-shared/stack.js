var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var Stack = function() {
  var newInstance = {};
  newInstance.storage = {};
  
  extend(newInstance, stackMethods);
  return newInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  var key = Object.keys(this.storage).length;
  this.storage[key] = value;
};

stackMethods.pop = function() {
  var key = Object.keys(this.storage).length - 1;
  var temp = this.storage[key];
  delete this.storage[key];
  return temp;
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};


var test = new Stack();
test.push('Hello World');
console.log(test);
// console.log(test.size())