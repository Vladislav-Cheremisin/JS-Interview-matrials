// Контекст

// const person = {
//   surname: 'Stark',
//   knows: function(what, name) {
//     console.log(`You know ${what} ${name} ${this.surname}`);
//   },
// };

// const john = {
//   surname: 'Snow',
// }

// person.knows('all', 'Brann');
// person.knows.call(john, 'Nothing', 'John');
// person.knows.apply(john, ['Nothing', 'John']);

// const whatJohnSnowKnow = person.knows.bind(john, ...['Something', 'John']);

// whatJohnSnowKnow();


// Функции конструкторы

// function Person(name, age) {
//   this.name = name,
//   this.age = age,

//   console.log(this);
// }

// const vlad = new Person ('Vladislav', 24);


// Binding

// function logThis() {
//   console.log(this);
// }

// const num = 42;

// logThis.call(num);

// === Неявная передача контекста

// const animal = {
//   legs: 4,
//   logThis: function() {
//     console.log(this);
//   }
// }

// animal.logThis();

// === Контекст и стрелочные функции

function Cat(color) {
  this.color = color,
  
  console.log('this:', this);
  ( () => console.log('Arrow this:', this) )();
  ( function () {
    console.log('Declaration func this:', this);
  })();
}

const redCat = new Cat('red');