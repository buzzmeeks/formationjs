// --- Snippet 1.1.b
// --- hoisting
  
console.log(animal); // undefined
var animal = 'gazelle';

/**
* Sera interpreté comme
* var animal = undefined;
* console.log(animal); //undefined
* animal = 'gazelle';
*/