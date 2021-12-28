//Data Types

// null, undefined, boolean, number, string, object, symbol, bigint

// console.log(typeof null); // object (it's language-specific);
// console.log(typeof undefined); // undefined
// console.log(typeof true); // boolean
// console.log(typeof 0); // number
// console.log(typeof '"Javascript') // string
// console.log(typeof {}) // object 
// console.log(typeof Symbol('js')) // symbol

// console.log(typeof function() {}) // function, but all functions are objects
// console.log(typeof BigInt(1)); // BigInt, Big Integer
// console.log(typeof NaN); // Number (But it's Not a Number);



// Type conversion

// let language = 'JavaScript';

// if (language) {  
//   console.log('language is defined');
// } // language was converted to boolean (true);

// '', 0, null, undefined, NaN, false // falsy values
// console.log(Boolean(''));
// console.log(Boolean(0));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));
// console.log(Boolean(false));

// Not falsy values:

// console.log(Boolean([]));
// console.log(Boolean({}));
// console.log(Boolean(function() {}));
// console.log(Boolean(-1));



// Strings and Numbers

// console.log(1 + '2'); // '12'
// console.log('' + 1 + 0); // '10'
// console.log('' - 1 + 0); // - 1
// console.log('3' * '8'); // 24
// console.log(4 + 10 + 'px'); // 14px
// console.log('px' + 5 + 10); // px510
// console.log('42' - 40); // 2
// console.log('42px' - 2); // NaN
// console.log(null + 2); // 2
// console.log(undefined + 42); // NaN

// == vs ===

// console.log(2 == '2') // true
// console.log(2 === '2') // false
// console.log(undefined == null) // true
// console.log(undefined === null) // false
// console.log(false == '0'); // true
// console.log(true == 1); // true
// console.log(true === 1); // false

// STRANGE:

// console.log(false == '') // true
// console.log(false == []) // true
// console.log(false == {}) // false
// console.log('' == 0) // true
// console.log('' == []) // true
// console.log('' == {}) // false
// console.log(0 == []) // true
// console.log(0 == {}) //false
// console.log(0 == null) // false