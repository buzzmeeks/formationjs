# Javascript Avancé, ES6 (FRD1)

Cette formation adresse quelques concepts avancés de la programmation en Javascript et explore quelques nouveautés apportées par ES6 (ES2015).

## 6. Fonction fléchée (Arrow function)

Les fonctions fléchées sont une alternative compacte à l'écriture de fonctions. Elles ont cependant quelques limitations et ne peuvent pas être utilisées dans toutes les situations.

```
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

```

Attention ! Les fonctions fléchées n'ont pas leur propre binding sur *this* et *arguments*

```
// --- Snippet 6.1.b
// --- fonction fléchée et this

const personne = {
    prenom: 'Lauridias',
    nom: 'Juventin',
    bonjour1: function() {
        console.log(`Bonjour ${this.prenom} ${this.nom}`);
    },
    bonjour2: () => {
        console.log(`Bonjour ${this.prenom} ${this.nom}`);
    },
    arguments1: function(a, b) {
        console.log(arguments);
    },
    arguments2: (a, b) => {
        console.log(arguments);
    }
}

personne.bonjour1(); // Bonjour Lauridias Juventin
personne.bonjour2(); // Bonjour undefined undefined
personne.arguments1(2, 7); // [Arguments] { '0': 2, '1': 7 }
personne.arguments2(2, 7); // [Arguments] { /* ... */ } <- les arguments du scope global

```


