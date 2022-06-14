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