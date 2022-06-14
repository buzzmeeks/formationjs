// --- Snippet 5.2.b
// --- .call() avec paramètres

function ajout(a, b, c) {
    return a + b + c + this.d;
}

console.log(ajout(1, 3, 5)); // NaN
console.log(ajout.call({ d: 2 }, 1, 3, 5)); // 11
console.log(ajout.call({ d: 4 }, 1, 3, 5)); // 13