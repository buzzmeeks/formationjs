// --- Snippet 4.1.a
// --- environnement lexical

function externe() {
    const nom = 'Rogénie';

    function interne() {
        console.log(`Bonjour ${nom}`);
    }

    interne();
}

externe(); // Bonjour Rogénie