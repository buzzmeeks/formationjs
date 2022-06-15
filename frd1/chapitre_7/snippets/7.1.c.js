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