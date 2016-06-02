var Queue = function(storage, count) {
  this.storage = {};
  this.count = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
}

Queue.prototype.dequeue = function() {
  this.count && this.count--;
  var result = this.storage["0"];
  delete this.storage["0"];
  var lengthOfStorage = Object.keys(this.storage).length;
     for(var i =0; i < lengthOfStorage; i++) {
       this.storage[i] = this.storage[(i+1)];
     }
  return result;
}

Queue.prototype.size = function() {
  return this.count;
}



