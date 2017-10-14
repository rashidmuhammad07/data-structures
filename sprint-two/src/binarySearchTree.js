var BinarySearchTree = function(value) {
  var tree = Object.create(BinaryTreeMethods);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree;
};

var BinaryTreeMethods = {};

BinaryTreeMethods.insert = function(value) {
  if (this.value > value) {
    if (this.left) {
      this.left.insert(value);
    } else {
      this.left = BinarySearchTree(value);
    }
  } else {
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = BinarySearchTree(value);
    }
  }
};

BinaryTreeMethods.contains = function(value) {
  if (this.value === value) return true;
  
  var flag = false;
  
  if (this.value > value) {
    if (this.left) flag = this.left.contains(value);
  } else {
    if (this.right) flag = this.right.contains(value);
  }
  
  return flag;
};



BinaryTreeMethods.depthFirstLog = function(callback) {
	callback(this.value);	
	if (this.left) this.left.depthFirstLog(callback);
	if (this.right) this.right.depthFirstLog(callback);
	
};