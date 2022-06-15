// --- Snippet 7.1.b
// --- Spread : elements d'un tableau

const chiffres = [5, 8, 9];

const nouveauxChiffres = [ ...chiffres, 9, 0 ]

console.log(nouveauxChiffres); // [5, 8, 9, 9, 0]