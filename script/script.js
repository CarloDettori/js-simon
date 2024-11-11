// array vuoto per in numeri randomizzati
let extration = [];

// array vuoto per i numeri scelti dal user
let userGuess = [];

// array vuoto per i numeri indovinati
let userRightAns = [];

// ciclo per definire i numeri estratti
while (extration < 5) {
    extration.push(generaNumeroRandom(1, 100));
}
console.log(extration)



