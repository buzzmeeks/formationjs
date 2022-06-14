// --- Snippet 1.1.a
// --- var et scope

var animal = 'pingouin';

function maFonction() {
  var animal2 = 'fourmi';
}

console.log(animal)  // 'pingouin'
console.log(animal2) // error : animal2 is not defined