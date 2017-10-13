var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null) {
      list.tail = Node(value);
      list.head = list.tail;
      
    } else {
      list.tail.next = Node(value);
      list.tail = list.tail.next;
    }
  };
  
  list.removeHead = function() {
    var prevHead = list.head;
    list.head = list.head.next;
    return prevHead.value;
  };

  list.contains = function(target) {
    
    var recursionFunc = function (input) {
      var isValid = false;
      if (input !== null) {
        if (input.value === target) {
          isValid = true;
        } else {
          return recursionFunc(input.next);
        }
      }
      return isValid;
    };
    return recursionFunc(list.head);

  };
  
  return list;
};


var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

// list.addToTail = O(1);
// list.removeHead = O(1);
// list.contains = O(n);

