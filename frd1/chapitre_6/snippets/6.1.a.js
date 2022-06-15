// --- Snippet 6.1.a
// --- arrow function, syntaxe

const fonction1 = function(a, b) {
    const somme = a + b;
    return somme;
}

const fonction2 = (a, b) => {
    const somme = a + b;
    return somme;
}

console.log(fonction1(1, 3)); // 4
console.log(fonction2(1, 3)); // 4

// Si une fonction fléchée ne fait que retourner un resultat, 
// on peut enlever les accolades et le mot clé return

const fonction3 = (a, b) => a + b;

console.log(fonction3(1, 3)); // 4

// Si une fonction fléchée n'a qu'un seul paramètre
// on peut enlever les parenthèses

const square = a => a * a;

// Si une fonction fléchée a 0 ou plus de 1 paramètres
// il faut laisser les parenthèses

const bonjour = () => 'bonjour';
const somme = (a, b) => a + b;

// Si une fonction fléchée renvoit uniquement un objet literal
// il faut l'entourer de parenthèses

const getObjet = () => ({ a: 3, b: 4 });