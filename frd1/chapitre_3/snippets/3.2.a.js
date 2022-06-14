// --- Snippet 3.2.b
// -- .map()

const chiffres = [3, 6, 9];

const chiffresAuCarre = chiffres.map(function(element) {
    return element*element;
});

console.log(chiffresAuCarre); // [9, 36, 81]