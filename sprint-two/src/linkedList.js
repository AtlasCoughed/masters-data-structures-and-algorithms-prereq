var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if(this.head === null){
      this.head = Node(value);
      this.tail = this.head;
    }
    else{
      this.tail.next = Node(value);
      this.tail = this.tail.next;
    }
    this.tail.value = value;
  };


  list.removeHead = function(){
    var newLead = this.head.next;
    var currentHead = this.head.value;
    delete this.head;
    this.head = newLead;
    return currentHead;

      };

  list.contains = function(target){
    var current = this.head;
    while(current !== null){
      if(current.value === target){
        return true;
      }
      current = current.next;
    }
    return false;
  };

  return list;
};

function Node(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 Time complexity = Linear

 */
//
