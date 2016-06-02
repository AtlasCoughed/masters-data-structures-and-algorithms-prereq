var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.count = 0;

  // Implement the methods below
  return someInstance;
};

queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.count] = value;
  this.count++;
};

queueMethods.dequeue = function(){
  this.count && this.count--;
  var result = this.storage["0"];
  delete this.storage["0"];
  var len =  Object.keys(this.storage).length;
  for(var i = 0; i < len; i++) {
    this.storage[i] = this.storage[(i+1)];
  }
  return result;
};

queueMethods.size = function(){
  return this.count;
};

