// --- Snippet 7.2.a
// --- Rest

function somme(...tousMesArguments) {
    return tousMesArguments.reduce(function(acc, nombre) {
        return acc + nombre;
    }, 0)
}

console.log(somme(1, 2)) // 3
console.log(somme(1, 2, 5)) // 8
console.log(somme(1, 2, 5, 3)) // 11