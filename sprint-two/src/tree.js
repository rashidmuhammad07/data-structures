var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  
  newTree.value = value;
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	this.children.push(Tree(value));
};
// O(1)

treeMethods.contains = function(target) {
  var flag = false;
  if (this.value === target) flag = true;
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      flag = true;
    }
  }
  return flag;
};
// O(1) || O(n2)
