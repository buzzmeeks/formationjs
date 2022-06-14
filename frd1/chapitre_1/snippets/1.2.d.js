// --- Snippet 1.2.d
// --- Let : hoisting

console.log(animal); // error : Cannot access 'animal' before initialization
let animal = 'pingouin'; 

/**
 * Sera interpreté comme
 * let animal;
 * console.log(animal);
 * animal = 'pingouin';
 */

// !!! Le hoisting existe bien 
// mais il n'y a pas d'affectation par defaut avec let