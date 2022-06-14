// --- Snippet 3.1.b
// --- .filter() avec tous les paramètres du callback

const chiffres = [6, 8, 12, 9, 3, 7];

const chiffresPairsAuxIndexPairs = chiffres.filter(function(elem, index, tableau) {
    return (index % 2 === 0) && (tableau[index] % 2 === 0);
});

console.log(chiffresPairsAuxIndexPairs) // [6, 12]