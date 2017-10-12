var Queue = function() {
 this.storage = {};
};

var queueMethods = {};

Queue.prototype.enqueue = function (value) {
  var keys = Object.keys(this.storage);
    if (keys.length === 0) {
      this.storage[0] = value;
    } else {
      var leng = keys.length;
      while (leng) { 
        this.storage[leng] = this.storage[leng - 1]; 
        leng--;
      }
      this.storage[0] = value;
    }
}

Queue.prototype.dequeue = function (value) {
  var keys = Object.keys(this.storage);
  var temp = this.storage[keys.length - 1];
  delete this.storage[keys.length - 1];
  return temp;
  }

Queue.prototype.size = function (value) {
  var keys = Object.keys(this.storage);
    return keys.length;
}

var test = new Queue();