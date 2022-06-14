// --- Snippet 5.4.a
// -- .bind()

function ajout(a, b, c) {
    return a + b + c + this.d;
}

const ajoutContextualisé = 
  ajout.bind({ d: 2 });
console.log(ajoutContextualisé(1, 3, 5)); // 11

const ajoutContextualiséAvecUnParamètre = 
  ajout.bind({ d: 2 }, 1);
console.log(ajoutContextualiséAvecUnParamètre(3, 5)); // 11

const ajoutContextualiséAvecDeuxParamètres = 
  ajout.bind({ d: 2 }, 1, 3);
console.log(ajoutContextualiséAvecDeuxParamètres(5)); // 11

const ajoutContextualiséAvecTousSesParamètres = 
  ajout.bind({ d: 2 }, 1, 3, 5);
console.log(ajoutContextualiséAvecTousSesParamètres()); // 11