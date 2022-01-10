// function sayHelloTo(name) {
//   const message = 'Hello ' + name;
//
//   return function() {
//     console.log(message);
//   }
// }

// const helloToElena = sayHelloTo('Elena');
// const helloToIgor = sayHelloTo('Igor');

// helloToElena(); // Hello Elena
// helloToIgor(); // Hell

// function createFrameworkManager() {
//   const frameworks = ['Angular', 'React'];
  
//   return {
//     print: function() {
//       console.log(frameworks)
//     },
//     add: function(fw) {
//       frameworks.push(fw);
//     }
//   }
// }

// const manager = createFrameworkManager();

// manager.add('Vue');
// manager.print();


// Set Timeout пример

const fib = [1, 2, 3, 5, 8, 13];

for (var i = 0; i < fib.length; i++) {
  (function(j) {
    setTimeout(() => {
      console.log(`fib ${j}: ${fib[j]}`);
    }, 1500);
  })(i);
}