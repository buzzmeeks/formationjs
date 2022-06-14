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