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
const monCompteur = compteur();

console.log(monCompteur.getCompteur()); // 0

monCompteur.incrémente();
monCompteur.incrémente();
monCompteur.incrémente();
console.log(monCompteur.getCompteur()); // 3

monCompteur.décrémente();
console.log(monCompteur.getCompteur()); // 2

