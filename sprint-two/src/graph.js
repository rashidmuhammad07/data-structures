  var Graph = function() {
  };

  Graph.prototype.addNode = function(node) {
    this[node] = Node(node);
  };

  Graph.prototype.contains = function(value) {
    var isValid = false;
    for (var key in this) {
      if (this[key].value === value) {
        isValid = true;
      } 
    }
    return isValid;
  };

  Graph.prototype.removeNode = function(node) {
    for (var key in this) {
      if (this[key].next === node) this[key].next = null;
      if (this[key].previous === node) this[key].previous = null;
    }
    delete this[node];
  };

  Graph.prototype.hasEdge = function(fromNode, toNode) {
    if (this[fromNode].next === this[toNode]) return true;
    if (this[fromNode].previous === this[toNode]) return true;
    
    return false;
  };

  Graph.prototype.addEdge = function(fromNode, toNode) {
    this[fromNode].next = this[toNode];
    this[toNode].previous = this[fromNode];
  };


  Graph.prototype.removeEdge = function(fromNode, toNode) {
    this[toNode].previous = null;
    this[fromNode].next = null;
  };

  Graph.prototype.forEachNode = function(cb) {
    for (var key in this) {
      cb(key);
    }
  };

