// --- Snippet 4.1.b
// --- closure

function externe() {
    const nom = 'Sophorine';

    function interne() {
        console.log(`Bonjour ${nom}`);
    }

    return interne;
}

const maClosure = externe();
maClosure(); // Bonjour Sophorine