// let (ES 6) - переменные которые мы можем изменить;

// let a = 'Variable a';
// let b = 'Variable b';

// в ES 6 {} создают новую область видимости (block scope)

// {
//   a = 'New Variable A';

//   let b = 'Local Variable B';

//   console.log('Scope A', a); // New Variable A
//   console.log('Scope B', b); // Local Variable B
// }

// console.log('A', a); // New Variable A потому что мы не использовали let
// console.log('B', b); // Variable b



// const - переменные которые не изменяются;

const PORT = 8080;

PORT = 2000 // Error

const array = ['Javascript', 'is', 'awesome'];

array[0] = 'JS';
array.push('!'); // с помощью обращения к массиву мы можем изменять его даже в константе.

array = '' // Error


const obj = {};
obj.name = 'Vladislav';
obj.age = 26;

console.log(obj); // все также в порядке

delete obj.name;

console.log(obj); // все еще в порядке, просто удалили name

obj = ''; // Error