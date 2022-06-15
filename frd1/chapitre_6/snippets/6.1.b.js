// --- Snippet 6.1.b
// --- fonction fléchée et this

const personne = {
    prenom: 'Lauridias',
    nom: 'Juventin',
    bonjour1: function() {
        console.log(`Bonjour ${this.prenom} ${this.nom}`);
    },
    bonjour2: () => {
        console.log(`Bonjour ${this.prenom} ${this.nom}`);
    },
    arguments1: function(a, b) {
        console.log(arguments);
    },
    arguments2: (a, b) => {
        console.log(arguments);
    }
}

personne.bonjour1(); // Bonjour Lauridias Juventin
personne.bonjour2(); // Bonjour undefined undefined
personne.arguments1(2, 7); // [Arguments] { '0': 2, '1': 7 }
personne.arguments2(2, 7); // [Arguments] { /* ... */ } <- les arguments du scope global