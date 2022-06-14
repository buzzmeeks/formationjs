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