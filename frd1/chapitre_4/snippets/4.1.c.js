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