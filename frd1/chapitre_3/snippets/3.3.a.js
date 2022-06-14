// --- Snippet 3.3.a
// -- .reduce()

const chiffres = [3, 6, 8];

const somme = chiffres.reduce(
    // fonction reducer
    function(acc, element) {
        return acc + element;
    },
    // valeur initiale de l'accumulateur
    0
);

console.log(somme); // 17