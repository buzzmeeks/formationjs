# Javascript Avancé, ES6 (FRD1)

Cette formation adresse quelques concepts avancés de la programmation en Javascript et explore quelques nouveautés apportées par ES6 (ES2015).

## 2. Template literals (Template strings)

Les *template literals* sont delimités par des backquotes (`). Ils permettent de faire de l'interpolation de string, des strings multiline et des constructions un peu plus avancées appelées templates tagués (*tagged templates*).

Ils sont plus souvent appelés *template strings* parce qu'on s'en sert principalement pour faire de l'interpolation de string. Cepedant, dans leur forme complexe, ils peuvent etres utilisés avec une fonction de tag qui peut renvoyer autre chose qu'une string.

### 2.1 Syntaxe

```
// --- Snippet 2.1.a
// --- syntaxe

`Ceci est un texte`;

`Ceci est un texte sur
plusieurs lignes.`;

`Ceci est un texte avec une ${expression} evaluée`;

// La fonction "maFonctionDeTag" sera appelée avec
// comme premier argument la string complete
// et comme arguments suivants les valeurs de substitution
maFonctionDeTag`Un texte avec ${valeur} de ${substitution}`;

```

### 2.2 String multiline

```
// --- Snippet 2.2.a
// --- multiline

console.log('Ceci est une string multiligne\n' + 
' classique');

console.log(`Ceci est une string multiligne
sous forme de template string`);

```

### 2.3 Interpolation

Sans template literals, pour combiner une chaine avec des expressions, il convient d'utiliser la concatenation de chaine avec l'operateur (*+*).

Cela peut vite devenir contraignant et peu lisible.

Avec les template literals, on peut utiliser l'interpolation (*${}*) pour evaluer des expressions directement dans la chaine de caractère.

```
// --- Snippet 2.3.a
// --- interpolation

const a = 5;
const b = 8;
const c = 3;

// Sans template literals
console.log('La somme des valeurs ' + a + ', ' + b + 'et ' + c + ' vaut ' + (a + b + c));

// Avec template literals
console.log(`La somme des valeurs ${a}, ${b} et ${c} vaut ${a + b + c}`);

```

### 2.4 Template taggués

Les templates taggués (tagged templates) sont une version avancée des template literals. Ils permettent de manipuler une chaine de caractère et differents placeholder d'expression a travers une fonction customisée.

```
// --- Snippet 2.4.a
// --- tagged templates

// Cette fonction interpolera uniquement les prenoms
function interpolationPrenoms(chaine, personne1, personne2) {
  
  // le premier argument est un tableau contenant
  // toutes les parties de la chaine de caractère
  // originale splitée autour des placeholders
  const partie1 = chaine[0]; // "J'ai deux amis : "
  const partie2 = chaine[1]; // " et "
  const partie3 = chaine[2]; // "."
  
  // les arguments suivants sont les expression 
  // inserée dans la chaine, dans l'ordre d'apparition
  const prenom1 = personne1.split(' ')[0]; // Adélix
  const prenom2 = personne2.split(' ')[0]; // Calisthème
  
  return `${partie1}${prenom1}${partie2}${prenom2}${partie3}`;
}

const ami1 = 'Adélix Balasthème';
const ami2 = 'Calisthème Poltus'
const result = interpolationPrenoms`J'ai deux amis : ${ami1} et ${ami2}.`;
console.log(result); // J'ai deux amis : Adélix et Calisthème
```

La fonction de tag étant personnalisées, les templates taggués peuvent retourner autre chose qu'une chaine de caractère.

```
// --- Snippet 2.4.b
// --- tagged templates (2)

// Cette fonction compte le nombre de caractère
// d'une chaine, apres interpolation
function compteCaractère(chaine, personne1, personne2) {
    const partie1 = chaine[0]; // "J'ai deux amis : "
    const partie2 = chaine[1]; // " et "
    const partie3 = chaine[2]; // "."

    const chaineInterpolee = `${partie1}${personne1}${partie2}${personne2}${partie3}`;

    return chaineInterpolee.length;
}

const ami1 = 'Adélix Balasthème';
const ami2 = 'Calisthème Poltus'
const result = compteCaractère`J'ai deux amis : ${ami1} et ${ami2}.`;
console.log(result); // 56
```

Exercices : 

- Ecrire une fonction de tagged template qui inverse la ou les string interpolées (utiliser la fonction reverse() des chaines de caractères).

Exemple :
```
prenom = 'Adrien' 
Je m'appelle ${prenom} => Je m'appelle neirdA
```

- Ecrire une fonction de tagged template qui double le ou les chiffres interpolés

Exemple: 
```
chiffre = 3
Le double vaut ${chiffre} => Le double vaut 6
```