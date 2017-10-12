var Queue = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
  // Implement the methods below
  someInstance.enqueue = function(value) {
    var keys = Object.keys(storage);
    if (keys.length === 0) {
      storage[0] = value;
    } else {
      var leng = keys.length;
      while (leng) { 
        storage[leng] = storage[leng - 1]; 
        leng--;
      }
      storage[0] = value;
    }
  };
  someInstance.dequeue = function() {
    var keys = Object.keys(storage);
    var temp = storage[keys.length - 1];
    delete storage[keys.length - 1];
    return temp;
  };
  someInstance.size = function() {
    var keys = Object.keys(storage);
    return keys.length;
  };
  return someInstance;
};

//CODE FAIRY TIP: just dequeue from front (array.shift), so in enqueu, you can just push to end of array rather than shift
//all elements down and add to front

//think of queue as a line. people join the end of the line. and you pop people off the front of the line