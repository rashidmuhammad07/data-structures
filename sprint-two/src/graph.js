var Graph = function() {
  this.nodes = {};
};

Graph.prototype.addNode = function(node) {
  this.nodes[node] = Node(node);
};

Graph.prototype.contains = function(node) {
	for (var key in this.nodes) {
		if (this.nodes[key].value === Node(node).value) {
			return true;
		}
	}
	return false;
};

Graph.prototype.removeNode = function(node) {
}

Graph.prototype.hasEdge = function(fromNode, toNode) {
};

Graph.prototype.addEdge = function(fromNode, toNode) {
	 this.nodes[fromNode].next = this.nodes[toNode];
};

Graph.prototype.removeEdge = function(fromNode, toNode) {
};

Graph.prototype.forEachNode = function(cb) {
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};