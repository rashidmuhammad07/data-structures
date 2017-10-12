var Stack = function() {
  var newInstance = Object.create(stackMethods);
  newInstance.storage = {};
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
