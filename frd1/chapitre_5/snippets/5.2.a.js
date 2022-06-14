// --- Snippet 5.2.a
// --- .call()

function salut() {
    return `Salut ${this.nom}`;
}

console.log(salut()); // Salut undefined
console.log(salut.call({ nom: 'Bob'})); // Salut Bob
console.log(salut.call({ nom: 'Ashki'})); // Salut Ashki

