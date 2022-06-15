/*
const input = [14, 15, 17, 5];

const moyenne = input.reduce(function(acc, note, index, tab) {
    return acc + (note/tab.length);
}, 0);

console.log(moyenne)

const panier = [
    { article: 'peignoir', nombre: 4, prix: 15 },
    { article: 'brosse', nombre: 1, prix: 12 },
    { article: 'serviette', nombre: 2, prix: 20 },
];

const result = panier.reduce(function(acc, element, index, tableau) {
    acc.nbArticles += element.nombre;
    acc.prixTotal += element.nombre * element.prix;
    if (tableau.length === index - 1) {
        return `Votre panier contient ${acc.nbArticles} pour un total de ${acc.prixTotal}`
    } else {
        return acc;
    }
}, { nbArticles: 0, prixTotal: 0 });
*/

function tralala(a, b) {
  console.log(arguments.length);
  console.log(arguments);
}

tralala(3, 8, 8, 89, 78);
tralala(4);