var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = [];

  // creates a bucket under the given index if there's none
  // else updates the value of bucket to be the array under the given index
  if (!this._storage.get(index)) {
    this._storage.set(index, bucket);
  } else {
    bucket = this._storage.get(index);
  }

  // if the last element of the array exist and its first element equals to the key
    // update its value
  // else push the unique tuple into the bucket
  if (bucket[bucket.length - 1] && bucket[bucket.length - 1][0] === k) {
    bucket[bucket.length - 1][1] = v;
  } else {
    bucket.push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // get the bucket under the given index
  var bucket = this._storage.get(index);

  // iterate it and if its first element is equal to the target key
    // return the value (second element)
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // get the bucket under the given index
  var bucket = this._storage.get(index);
  // iterate bucket and find the index of the target key
  // slice the bucket to and from that index
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket = bucket.slice(0, i).concat(bucket.slice(i + 1));
      this._storage.set(index, bucket);
    }
  }
};