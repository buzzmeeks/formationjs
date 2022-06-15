# Javascript Avancé, ES6 (FRD1)

Cette formation adresse quelques concepts avancés de la programmation en Javascript et explore quelques nouveautés apportées par ES6 (ES2015).

## 4. Closure

Une closure est une combinaison d'une fonction et de l'environnement dans lequel elle a été créée (environnement lexical).

Une closure donne à une fonction interne l'accès au scope de la fonction qui l'encapsule.

En d'autre terme, une fonction se rappelle toujours de l'environnement dans lequel elle a été créée.

En JavaScript, une closure est créée au moment ou la fonction est créée.

```
// --- Snippet 4.1.a
// --- environnement lexical

function externe() {
    const nom = 'Rogénie';

    function interne() {
        console.log(`Bonjour ${nom}`);
    }

    interne();
}

externe(); // Bonjour Rogénie
```

```
// --- Snippet 4.1.b
// --- closure

function externe() {
    const nom = 'Sophorine';

    function interne() {
        console.log(`Bonjour ${nom}`);
    }

    return interne;
}

const maClosure = externe();
maClosure(); // Bonjour Sophorine
```

```
// --- Snippet 4.1.c
// --- function factory

function bonjourFactory(nom) {

    function interne() {
        console.log(`Bonjour ${nom}`);
    }

    return interne;
}

const bonjourNahomée = bonjourFactory('Nahomée');
const bonjourMarcelise = bonjourFactory('Marcelise');

// Ces deux fonctions partagent la même definition
// mais ont deux environnements lexicaux différents

bonjourNahomée(); // Bonjour Nahomée
bonjourMarcelise(); // Bonjour Marcelise
```

Des fonctions peuvent faire parti de l'environnement lexical, mimant ainsi des fonctions privées que l'on pourrait retrouver dans d'autre langages.

```
// --- Snippet 4.1.d
// --- fonction privée

const compteur = function() {
    let leCompteur = 0;

    function changeCompteur(valeur) {
        leCompteur += valeur;
    }

    return {
        incrémente: function() {
            changeCompteur(1);
        },
        décrémente: function() {
            changeCompteur(-1);
        },
        getCompteur: function() {
            return leCompteur;
        }
    }
}

// On initialise notre objet
// à ce moment des closures sont créées
// pour les fonctions incrémente, decrémente et getCompteur
// celles-ci partagent un seul environnement lexical
const monCompteur = compteur();

console.log(monCompteur.getCompteur()); // 0

monCompteur.incrémente();
monCompteur.incrémente();
monCompteur.incrémente();
console.log(monCompteur.getCompteur()); // 3

monCompteur.décrémente();
console.log(monCompteur.getCompteur()); // 2
```

Chaque closure a accès a 3 scopes : 
- Le sien (local scope)
- Le scope de la fonction externe où elle a été créée (outer function scope)
- le scope global (global scope)

Dans le cas ou la fonction externe a elle même été créée dans une autre fonction, la fonction interne a aussi accès au scope de la fonction encapsulant la fonction externe. On créé ainsi une chaine de scope.

```
// --- Snippet 4.1.e
// --- chaine de scope

// scope global
const d = 3;
function somme(a) {
    return function(b) {
        return function(c) {
            return a + b + c + d;
        }
    }
}

console.log(somme(2)(4)(7)); // 16
```

Exercices :

- Créer une fonction qui prend 2 chiffres en paramètre; si les 2 paramètres sont renseignés la fonction doit retourner leur produit, si un seul paramètre est renseigné la fonction doit retourner une fonction qui peut être appellée plus tard avec un autre paramètre et retourner enfin le produit.

Exemple :
```
multi(2, 3) => 6
multi(2) => multi2 => multi2(4) => 8
```

- Créer une fonction qui prend en parametre une chiffre représentant une nombre de tentatives. Cette fonction doit creer un nombre aleatoire entre 1 et 10 [ Math.floor(Math.random() * 10) ] et retourner une fonction prenant un autre nombre en parametre et permettant d'essayer de deviner le nombre aleatoire. Cette fonction indique si le nombre donné est trop haut ou trop bas, ou si il correspond au nombre aleatoire. Si le nombre de tentative est atteint ou si le nombre a été trouvé, la fonction ne donne plus d'indice.

Exemple :
```
creerJeu(3) => jeu
jeu(1) => Trop petit
jeu(5) => Trop grand
jeu(4) => Trop grand
jeu(3) => Désolé le jeu est terminé

creerJeu(4) => jeu
jeu(2) => Trop petit
jeu(5) => Bravo !!
jeu(6) => Désolé le jeu est terminé
```


for (let i = 0; i < 30; i++) {
    jeu(Math.floor(Math.random() * 10));
}