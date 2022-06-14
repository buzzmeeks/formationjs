// --- Snippet 3.1.a
// --- .filter()

const chiffres = [2, 6, 3, 9];

const chiffresPlusGrandQue5 = chiffres.filter(function(element) {
    return element > 5;
});

console.log(chiffresPlusGrandQue5); // [6, 9]