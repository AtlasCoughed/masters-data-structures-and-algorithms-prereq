var Stack = function(){
  var someInstance = Object.create(stackMethods);

  // Use an object with numeric keys to store values
  // Implement the methods below
  someInstance.storage = {};
  someInstance.count = 0;
  return someInstance;
};


stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.count] = value;
  this.count++;
  console.log(this)
};

stackMethods.pop = function(){
  this.count && this.count--;
  var result = this.storage[this.count];
  delete this.storage[this.count];
  return result;
};

stackMethods.size = function(){
  return this.count;
};


//assuming(extendsConstructor).expect(constructorPropertyCount).to.be.above(0);
