// --- Snippet 2.1.a
// --- syntaxe

`Ceci est un texte`;

`Ceci est un texte sur
plusieurs lignes.`;

`Ceci est un texte avec une ${expression} evaluée`;

// La fonction "maFonctionDeTag" sera appelée avec
// comme premier argument la string complete
// et comme arguments suivants les valeurs de substitution
maFonctionDeTag`Un texte avec ${valeur} de ${substitution}`;