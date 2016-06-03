var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = limitedArray.get(i);
  console.log(i);
  if(!bucket){
    bucket = [[k, v]];
  }

  else if(bucket){
    for (var j = 0; j < bucket.length; j++) {
      var instanceOfBucket = bucket[j];
        if(instanceOfBucket[0] === k){
          instanceOfBucket[1] = v;
        }
        else if(!instanceOfBucket[0]){
          instanceOfBucket.push([k, v])
        }
    }
 }

};

HashTable.prototype.retrieve = function(k){

};

HashTable.prototype.remove = function(k){

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
