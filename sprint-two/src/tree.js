var Tree = function(value){
  var newTree = {};
  _.extend(newTree, treeMethods);

  newTree.value = value;
  newTree.children = [];
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var node = Tree(value);
  this.children.push(node);
  return node;
};

treeMethods.contains = function(target){
  var result = false;

  function checkerFunction (child){
    if(child.value === target){
      result = true;
    }
    _.each(child.children, function(childNode){
      checkerFunction(childNode);
    });
  }
  checkerFunction(this);
  return result;

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
