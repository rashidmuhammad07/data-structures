var Stack = function() {
  var someInstance = {};
  var storage = {};
  someInstance.push = function(value) {
    var key = Object.keys(storage).length;
    storage[key] = value;
  };

  someInstance.pop = function() {
    var key = Object.keys(storage).length - 1;
    var temp = storage[key];
    delete storage[key];
    return temp;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };
  
  return someInstance;
};
