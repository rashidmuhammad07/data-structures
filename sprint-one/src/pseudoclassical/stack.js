var Stack = function() {
  this.storage = {};
};

Stack.prototype.push = function(value) {
  var key = Object.keys(this.storage).length;
  this.storage[key] = value;
};

Stack.prototype.pop = function() {
  var key = Object.keys(this.storage).length - 1;
  var temp = this.storage[key];
  delete this.storage[key];
  return temp;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};