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

//definizione trigger di scelta dei numeri scelti dall'user
let check = document.querySelector("button");
let imput = document.querySelectorAll("imput")
check.addEventListener("click", function (event) {
    for (let i = 0; i < 5; i++)
        userGuess.push(imput[i].value);
})
console.log(userGuess)



