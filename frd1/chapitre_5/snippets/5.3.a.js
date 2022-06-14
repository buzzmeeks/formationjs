// --- Snippet 5.3.a
// --- .apply() avec paramètres

function ajout(a, b, c) {
    return a + b + c + this.d;
}

console.log(ajout(1, 3, 5)); // NaN
console.log(ajout.apply({ d: 2 }, [1, 3, 5])); // 11
console.log(ajout.apply({ d: 4 }, [1, 3, 5])); // 13