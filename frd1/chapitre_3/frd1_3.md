# Javascript Avancé, ES6 (FRD1)

Cette formation adresse quelques concepts avancés de la programmation en Javascript et explore quelques nouveautés apportées par ES6 (ES2015).

## 3. Manipulation de tableaux : filter, map, reduce

### 3.1 Filter

La fonction *.filter()*, accessible sur tous les tableaux, permet de créer un nouveau tableau contenant uniquement les éléments qui repondent a une condition donnée.

Cette fonction prend en parmetre une autre fonction, appellée callback, qui sera appelée pour chaque membre du tableau d'origine.

Cette fonction de callback prend trois paramètres : 
- l'element du tableau actuellement évalué
- l'index du tableau auquel se trouve cet element
- le tableau d'origine

La plupart du temps, le premier paramètre, seul, est suffisant.

Lorsque cette fonction de callback retourne une expression evaluée a *true*, l'élement du tableau correspondant sera ajouté au tableau de retour.

```
// --- Snippet 3.1.a
// --- .filter()

const chiffres = [2, 6, 3, 9];

const chiffresPlusGrandQue5 = chiffres.filter(function (element) {
    return element > 5;
});

console.log(chiffresPlusGrandQue5); // [6, 9]
```

```
// --- Snippet 3.1.b
// --- .filter() avec tous les paramètres du callback

const chiffres = [6, 8, 12, 9, 3, 7];

const chiffresPairsAuxIndexPairs = chiffres.filter(function(elem, index, tableau) {
    return (index % 2 === 0) && (tableau[index] % 2 === 0);
});

console.log(chiffresPairsAuxIndexPairs) // [6, 12]
```

### 3.1 Map

La fonction *.map()*, accessible sur tous les tableaux, permet de créer un nouveau tableau dont les éléments sont le retour d'une fonction de callback appliquée a chaque élément du tableau d'origine.

La fonction *.map()* renverra toujours un tableau de même longueur que le tableau d'origine.

Cette fonction prend en parmetre une autre fonction, appellée callback, qui sera appelée pour chaque membre du tableau d'origine.

Cette fonction de callback prend trois paramètres : 
- l'element du tableau actuellement évalué
- l'index du tableau auquel se trouve cet element
- le tableau d'origine

La plupart du temps, le premier paramètre, seul, est suffisant.

Le retour de cette fonction de callback sera un élément du tableau de retour, positionné au même index que l'élément d'origine.

```
// --- Snippet 3.2.b
// -- .map()

const chiffres = [3, 6, 9];

const chiffresAuCarre = chiffres.map(function(element) {
    return element*element;
});

console.log(chiffresAuCarre); // [9, 36, 81]
```

### 3.3 Reduce

La fonction *.reduce()*, disponible sur tous les tableaux, permet d'executer un callback appelé *reducer* sur chaque element d'un tableau.

Le retour du reducer, appelé accumulateur, est utilisé par le passage de reducer suivant.

Le retour du dernier reducer est le retour de la fonction *.reduce()*.

La fonction *.reduce()* prend deux paramètres : 
- la fonction reducer
- la valeur initiale de l'accumulateur

Le reducer prend quatre paramètres : 
- l'accumulateur (le resultat du reducer précédent)
- l'element du tableau actuellement évalué
- l'index du tableau auquel se trouve cet element
- le tableau d'origine

La plupart du temps, les deux premiers paramètres, l'accumulateur et l'element, sont suffisants.

```
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
```

Exercices : 

- Etant donné un tableau de chaines de caractère, créer un tableau contenant la longueur de chacune de ces chaines.

Exemple :
```
input = ['Bob', 'Falbala', 'Trotro'] 
output = [3, 7, 6]
```

- Etant donné un tableau de chaines de caractère, créer un tableau contenant des objets decrivant les chaines (chaine, longueur, premiere lettre) de plus de 4 caractères.

Exemple :
```
input = ['Paul', 'Alcaline', 'Boeuf', 'Chou'] 
output = [
    {
        chaine: 'Alcaline',
        longueur: 8,
        commencePar: 'A',
    },
    {
        chaine: 'Boeuf',
        longueur: 5,
        commencePar: 'B',
    },
]
```

- Etant donné un tableau de note, calculer la moyenne de ces notes.

Exemple :
```
notes = [15, 18, 16, 15]
moyenne = 16
```

- Etant donné un tableau d'objet representant le panier d'un site e-commerce, creer une chaine de caractere contenant le montant total du panier et le nombre d'article total.
Chaque objet de ce panier contient : le nom de l'article, le nombre d'article et le prix unitaire.


Exemple :
```
panier = [
    { article: 'peignoir', nombre: 4, prix: 15 },
    { article: 'brosse', nombre: 1, prix: 12 },
    { article: 'serviette', nombre: 2, prix: 20 },
]
resultat = 'Votre panier contient 7 articles pour un montant total de 112 euros'
```
