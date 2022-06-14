// --- Snippet 4.1.c
// --- chaine de scope

// scope global
const d = 3;
function somme(a) {
    return function(b) {
        return function(c) {
            return a + b + c + d;
        }
    }
}

console.log(somme(2)(4)(7)); // 16