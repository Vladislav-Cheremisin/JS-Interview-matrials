function Cat(color, name) {
  this.color = color;
  this.name = name;
};

// const cat = new Cat('Black', 'Jack');

// console.log(cat);

function myNew(constructor, ...args) {
  const resultObj = {};

  Object.setPrototypeOf(resultObj, constructor.prototype);
  
  return constructor.apply(resultObj, args) || resultObj;
}

const cat = myNew(Cat, 'black', 'Jack');

console.log(cat);