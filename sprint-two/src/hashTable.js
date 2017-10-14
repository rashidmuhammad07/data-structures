var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = [], flag = false;
  
  if (!this._storage.get(index)) {
    this._storage.set(index, bucket);
  } else {
    bucket = this._storage.get(index);
  }
  
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      flag = true;
      tuple[1] = v;
    }
  }
  
  if (!flag) {
    bucket.push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);
  
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket = bucket.slice(0, i).concat(bucket.slice(i + 1));
      this._storage.set(index, bucket);
    }
  }
};