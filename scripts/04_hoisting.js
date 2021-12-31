//Javascript перемещает funtion declaration в верх кода при воспроизведении.

// console.log(sum(1, 41)); // 42

// function sum(a, b) {
//   return a + b;
// }


// Function expression не имеет hoisting

// console.log(sum()) // type error

// const sum = (a, b) => a + b;



//Мы получим в 1 случае undefined так как JS уже знает о том что переменная i есть, но еще не получил значение.

// console.log(i) // undefined

// var i = 42;

// console.log(i) // 42


// Hoisting есть только у устаревшего ключевого слова var i

// console.log(num); // reference error

// const num = 42;

// console.log(num);