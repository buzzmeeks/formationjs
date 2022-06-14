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
console.log(result); // 