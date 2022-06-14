# Javascript Avancé, ES6 (FRD1)

Cette formation adresse quelques concepts avancés de la programmation en Javascript et explore quelques nouveautés apportées par ES6 (ES2015).

## 1. Déclaration de variables : var, let et const

Comment déclarer des variables en javascript; scope et hoisting.

### 1.1 var
Avant ES6, il s'agissait du moyen le plus fréquent de déclarer des variables. 
 - Scopé globalement quand il est déclaré en dehors d'une fonction
 - Scopé a la **fonction** quand il est déclaré dans une fonction

```
// --- Snippet 1.1.a
// --- var et scope

var animal = 'pingouin';

function maFonction() {
  var animal2 = 'fourmi';
}

console.log(animal)  // 'pingouin'
console.log(animal2) // error : animal2 is not defined
```

Hoisiting : les déclarations (mais pas les affectations) de variables et de fonctions sont 'déplacées' au début du code par l'interpreteur javascript.
Les variables declarées avec var sont initialisées par défaut a **undefined**.

```
// --- Snippet 1.1.b
// --- hoisting
  
console.log(animal); // undefined
var animal = 'gazelle';

/**
* Sera interpreté comme
* var animal = undefined;
* console.log(animal); //undefined
* animal = 'gazelle';
*/
```

### 1.2 let

Permet de declarer et, optionnellement, d'assigner une variable dans le scope d'un **bloc**.

```
// --- Snippet 1.2.a
// --- Let

let animal = 'pingouin';

if (true) {
  let animal2 = 'canard';
  console.log(animal2); // 'canard'
}

console.log(animal); // 'pingouin'
console.log(animal2); // error : animal2 is not defined
```

Avec let la reaffectation est possible.

```
// --- Snippet 1.2.b
// --- Let : reaffectation

let animal = 'pingouin';

if (true) {
  animal = 'canard';
}

console.log(animal); // 'canard'
```

Mais pas la redélcaration

```
// --- Snippet 1.2.c
// --- Let : redéclaration

let animal = 'pingouin';
let animal = 'lion'; // error : Identifier 'animal' has already been declared
```

Hoisiting : les déclarations (mais pas les affectations) de variables et de fonctions sont 'déplacées' au début du code par l'interpreteur javascript.
Les variables declarées avec let ne sont pas initialisées par défaut.

```
// --- Snippet 1.2.d
// --- Let : hoisting

console.log(animal); // error : Cannot access 'animal' before initialization
let animal = 'pingouin'; 

/**
 * Sera interpreté comme
 * let animal;
 * console.log(animal);
 * animal = 'pingouin';
 */

// !!! Le hoisting existe bien 
// mais il n'y a pas d'affectation par defaut avec let
```



### 1.3 const

Comme *let*, *const* permet de declarer et, optionnellement, d'assigner une variable dans le scope d'un **bloc**.

```
// --- Snippet 1.3.a
// --- Const

const animal = 'pingouin';

if (true) {
  const animal2 = 'canard';
  console.log(animal2); // 'canard'
}

console.log(animal); // 'pingouin'
console.log(animal2); // error : animal2 is not defined
```

*const* ne permet pas la redeclaration.

```
// --- Snippet 1.3.b
// --- Const : redeclaration impossible

const animal = 'pingouin';
const animal = 'lion'; // error : Identifier 'animal' has already been declared
```

Hoisiting : les déclarations (mais pas les affectations) de variables et de fonctions sont 'déplacées' au début du code par l'interpreteur javascript.
Les variables declarées avec const ne sont pas initialisées par défaut.

```
// --- Snippet 1.3.c
// --- Const : hoisting

console.log(animal); // error : Cannot access 'animal' before initialization
const animal = 'pingouin'; 

/**
 * Sera interpreté comme
 * const animal;
 * console.log(animal);
 * animal = 'pingouin';
 */

// !!! Le hoisting existe bien 
// mais il n'y a pas d'affectation par defaut avec const
```


Contrairement a *let*, *const* ne permet pas la reaffectation d'une variable.

```
// --- Snippet 1.3.d
// --- Const : reaffectation impossible

const animal = 'pingouin';
animal = 'canard'; // error : Assignment to constant variable.
```

Cependant, les propriétés d'un objet et les membres d'un tableau declarés avec *const* peuvent être modifiés.

```
// --- Snippet 1.3.e
// --- Const : modification des proprietes

const animal = {
    name: 'toto',
    espece: 'pingouin',
}

animal.name = 'titi';
animal.sexe = 'f';

console.log(animal); // { name: 'titi', espece: 'pingouin', sexe: 'f' }

const animalList = ['pingouin', 'girafe'];
animalList.push('lion');
animalList[3] = 'colibri';

console.log(animalList); // ['pingouin', 'girafe', 'lion', 'colibri']
```

**Il convient d'utiliser const partout ou cela est possible. Cela permettra d'eviter de problemes de scope ou de hoisiting de var, et des erreurs de reaffectation.**

---


