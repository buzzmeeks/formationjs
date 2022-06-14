# Javascript Avancé, ES6 (FRD1)

Cette formation adresse quelques concepts avancés de la programmation en Javascript et explore quelques nouveautés apportées par ES6 (ES2015).

## 5. Contexte et this

### 5.1 this

*this* est un mot clé qui référence un objet. 

Si *this* est invoqué depuis le scope global ou dans une fonction seule, il réferencera l'objet global (*window* dans un navigateur, *global* dans node.js)

Si *this* est invoqué dans une fonction seule en mode strict, il sera undefined.

Si *this* est invoqué dans une methode d'objet, il réferencera l'objet en question.

*this* ne peut pas être réassigné : ce n'est pas une variable.

```
// --- Snippet 5.1.a
// --- this global

console.log(this); // {} -> Objet global node.js
```

```
// --- Snippet 5.1.b
// --- this function globale

function testThis() {
  console.log(this);
}

testThis(); 
// {} -> Objet global node.js
// + infos de contexte d'execution
```

```
// --- Snippet 5.1.c
// --- this function globale, mode strict

'use strict';

function testThis() {
  console.log(this);
}

testThis(); // undefined
```

```
// --- Snippet 5.1.d
// --- this, methode d'objet

const personne = {
    prenom: 'Anasthème',
    nom: 'Dupont',
    testThis: function() {
        console.log(this);
    }
}

personne.testThis();
// { prenom: 'Anasthème', nom: 'Dupont', testThis: [Function: testThis] }
```

### 5.2 Call

*.call()* est une fonction disponible sur toutes les fonctions. Elle permet d'executer une fonction en lui donnant une valeur précise pour *this*.

*.call()* prend en premier paramètre la valeur de *this* pour l'execution de la fonction. On peut ensuite lui passer tous les paramètres qu'on pourrait passer la fonction à executer.

```
// --- Snippet 5.2.a
// --- .call()

function salut() {
    return `Salut ${this.nom}`;
}

console.log(salut()); // Salut undefined
console.log(salut.call({ nom: 'Bob'})); // Salut Bob
console.log(salut.call({ nom: 'Ashki'})); // Salut Ashki
``` 

```
// --- Snippet 5.2.b
// --- .call() avec paramètres

function ajout(a, b, c) {
    return a + b + c + this.d;
}

console.log(ajout(1, 3, 5)); // NaN
console.log(ajout.call({ d: 2 }, 1, 3, 5)); // 11
console.log(ajout.call({ d: 4 }, 1, 3, 5)); // 13
```

### 5.3 Apply

*.apply()* a le même fonctionnement que *.call()*, à savoir : éxecuter une fonction en definissant son contexte, sauf que les paramètres de la fonction, s'il y en a, sont passé dans un tableau.

*.apply()* prend donc deux paramètres uniquement:
- la valeur de *this*
- un tableau de paramètres qui correspondent aux paramètres de la fonction executée; l'ordre des membres de ce tableau correspond a l'ordre des paramètres passés a la fonction

```
// --- Snippet 5.3.a
// --- .apply() avec paramètres

function ajout(a, b, c) {
    return a + b + c + this.d;
}

console.log(ajout(1, 3, 5)); // NaN
console.log(ajout.apply({ d: 2 }, [1, 3, 5])); // 11
console.log(ajout.apply({ d: 4 }, [1, 3, 5])); // 13
```


### 5.4 Bind

*.bind()* est une fonction disponible sur toutes les fonctions. Elle retourne une nouvelle fonction, semblable a la fonction originale (celle sur laquelle *.bind()* est appelée), mais avec un contexte et tout ou une partie de ses paramètres de définis.

```
// --- Snippet 5.4.a
// -- .bind()

function ajout(a, b, c) {
    return a + b + c + this.d;
}

const ajoutContextualisé = 
  ajout.bind({ d: 2 });
console.log(ajoutContextualisé(1, 3, 5)); // 11

const ajoutContextualiséAvecUnParamètre = 
  ajout.bind({ d: 2 }, 1);
console.log(ajoutContextualiséAvecUnParamètre(3, 5)); // 11

const ajoutContextualiséAvecDeuxParamètres = 
  ajout.bind({ d: 2 }, 1, 3);
console.log(ajoutContextualiséAvecDeuxParamètres(5)); // 11

const ajoutContextualiséAvecTousSesParamètres = 
  ajout.bind({ d: 2 }, 1, 3, 5);
console.log(ajoutContextualiséAvecTousSesParamètres()); // 11

```