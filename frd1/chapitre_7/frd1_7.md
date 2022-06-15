# Javascript Avancé, ES6 (FRD1)

Cette formation adresse quelques concepts avancés de la programmation en Javascript et explore quelques nouveautés apportées par ES6 (ES2015).

## 7. Spread, rest et destructuration

## 7.1 Spread

L'opérateur Spread ( *...* ) permet de positionner un objet iterable (tableau ou autre) là ou des arguments (pour l'appel d'une fonction) ou des éléments (pour un tableau) sont attendus.

```
// --- Snippet 7.1.a
// --- Spread : arguments

function somme(a, b, c) {
    return a + b + c;
}

const chiffres = [5, 8, 9];

console.log(somme(...chiffres)); // 22
```

```
// --- Snippet 7.1.b
// --- Spread : elements d'un tableau

const chiffres = [5, 8, 9];

const nouveauxChiffres = [ ...chiffres, 9, 0 ]

console.log(nouveauxChiffres); // [5, 8, 9, 9, 0]
```

Depuis ES7 (ES2018), l'opérateur spread peut être utilisé sur des objets.

```
// --- Snippet 7.1.c
// --- Spread : propriétés d'objet

const personne = {
    prenom: 'Génévil',
    nom: 'Izolias',
};

const personneAvecAge = { ...personne, age: 89 };

console.log(personneAvecAge); // { prenom: 'Génévil', nom: 'Izolias', age: 89 }

// Spread peut permettre de cloner un objet
const clonePersonne = { ...personne }; // personne et clonePersonne n'ont pas la même référence
```

## 7.2 Rest

Là ou Spread est utilisé pour transformer les tableaux en arguments d'appels, Rest, qui utilise la même syntaxe ( *...* ) est utilisé dans les définitions de fonctions et permet de récupérer un nombre indéfini de paramètres dans un seul tableau.

```
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
```

Attention : une définition de fonction ne peut contenir qu'un seul opérateur rest. Et s'il y a d'autres arguments, le paramètre rest doit être le dernier.

## 7.3 Destructuration

La destructuration est une syntaxe d'assignation qui permet d'extraire des valeurs de tabeaux ou des propriétés d'objet pour en faire des variables distinctes.

```
// --- Snippet 7.3.a
// --- destructuration de tableaux

const chiffres = [3, 4, 5];
const [a, b, c] = chiffres;

console.log(a) // 3
console.log(b) // 4
console.log(c) // 5

// Il est possible de ne destructurer qu'une partie du tableau

const [d, e] = chiffres;

console.log(d) // 3
console.log(e) // 4

// L'operateur rest peut etre utilisé lors de la destructuration

const [f, ...autres ] = chiffres;

console.log(f) // 3
console.log(autres); // [4, 5]

// Si le nombre de variables destrucurée depasse la longueur du tableau
// elles seront undefined

const [f, g, h, i, j] = chiffres;

console.log(f) // 3
console.log(g) // 4
console.log(h) // 5
console.log(i) // undefined
console.log(j) // undefined

// Il est possible de positionné des valeur par défaut lors de la destructuration

const [k, l, m=8, n=6 , o=7] = chiffres;

console.log(k) // 3
console.log(l) // 4
console.log(m) // 5
console.log(n) // 6
console.log(o) // 7

// Certaines valeurs peuvent être ignorées

const [p, , q] = chiffres;

console.log(p) // 3
console.log(q) // 5


// La destructuration peut etre utilisée pour échanger des variables

let var1 = 8;
let var2 = 9;

[var2, var1] = [var1, var2]

console.log(var1); // 9
console.log(var2); // 8
```


```
// --- Snippet 7.3.b
// --- destructuration d'objets

const personne = {
    prenom: 'Herménias',
    nom: 'Palémond',
}

const { prenom, nom } = personne;

console.log(prenom); // Herménias
console.log(nom); // Palémond

// Des variables avec des noms différents de ceux des propriétés peuvent être assignées

const { prenom: firstname, nom: name } = personne;

console.log(firstname); // Herménias
console.log(name); // Palémond

// Des valeurs par défaut peuvent être positionnées

const animal = {
    espece: 'Lion'
}

const { espece, sauvage = true } = animal;

console.log(espece) // Lion
console.log(sauvage) // true

// La destructuration peut intervenir dans la definition d'une fonction

function quelleEspece({ espece }) {
    console.log(`C'est un ${espece} !`);
}

quelleEspece(animal); // C'est un Lion !

// La destructuration peut intervenir la profondeur d'un objet

const voiture : {
    modele: {
        marque: 'Honda',
        declinaison: 'Civic',
    },
    couleur: 'bleue',
}

function quelleMarqueEtCouleur({ modele: { marque }, couleur }) {
    console.log(`Une ${marque} ${couleur} !`);
}

quelleMarqueEtCouleur(voiture); // Une Honda bleue !
```