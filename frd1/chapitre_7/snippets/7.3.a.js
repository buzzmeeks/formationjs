// --- Snippet 7.3.a
// --- destructuration de tableaux

const chiffres = [3, 4, 5];
const [a, b, c] = chiffres;

console.log(a) // 3
console.log(b) // 4
console.log(c) // 5

// Il est possible de ne destructurer qu'une partie du tableau

const [d, e] = chiffres;

console.log(d) // 3
console.log(e) // 4

// L'operateur rest peut etre utilisé lors de la destructuration

const [x, ...autres ] = chiffres;

console.log(x) // 3
console.log(autres); // [4, 5]

// Si le nombre de variables destrucurée depasse la longueur du tableau
// elles seront undefined

const [f, g, h, i, j] = chiffres;

console.log(f) // 3
console.log(g) // 4
console.log(h) // 5
console.log(i) // undefined
console.log(j) // undefined

// Il est possible de positionné des valeur par défaut lors de la destructuration

const [k, l, m=8, n=6 , o=7] = chiffres;

console.log(k) // 3
console.log(l) // 4
console.log(m) // 5
console.log(n) // 6
console.log(o) // 7

// Certaines valeurs peuvent être ignorées

const [p, , q] = chiffres;

console.log(p) // 3
console.log(q) // 5


// La destructuration peut etre utilisée pour échanger des variables

let var1 = 8;
let var2 = 9;

[var2, var1] = [var1, var2]

console.log(var1); // 9
console.log(var2); // 8