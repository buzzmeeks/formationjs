// --- Snippet 2.3.a
// --- interpolation

const a = 5;
const b = 8;
const c = 3;

// Sans template literals
console.log('La somme des valeurs ' + a + ', ' + b + 'et ' + c + ' vaut ' + (a + b + c));

// Avec template literals
console.log(`La somme des valeurs ${a}, ${b} et ${c} vaut ${a + b + c}`);