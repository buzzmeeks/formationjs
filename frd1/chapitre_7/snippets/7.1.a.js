// --- Snippet 7.1.a
// --- Spread : arguments

function somme(a, b, c) {
    return a + b + c;
}

const chiffres = [5, 8, 9];

console.log(somme(...chiffres)); // 22