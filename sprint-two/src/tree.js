var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  
  newTree.value = value;
  newTree.children = [];
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var node = new Tree();
  
  node.value = value;
  node.children = [];
  this.children.push(node);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
