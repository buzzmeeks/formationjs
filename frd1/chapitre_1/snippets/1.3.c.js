// --- Snippet 1.3.c
// --- Const : hoisting

console.log(animal); // error : Cannot access 'animal' before initialization
const animal = 'pingouin'; 

/**
 * Sera interpreté comme
 * const animal;
 * console.log(animal);
 * animal = 'pingouin';
 */

// !!! Le hoisting existe bien 
// mais il n'y a pas d'affectation par defaut avec const