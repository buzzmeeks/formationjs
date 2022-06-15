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