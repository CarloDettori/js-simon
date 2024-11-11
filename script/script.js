// array vuoto per in numeri randomizzati
let extractionList = [];

// array vuoto per i numeri scelti dal user
let userGuessList = [];

// array vuoto per i numeri indovinati
let userRightAnsList = [];


// ciclo per definire i numeri estratti
let extractionButton = document.getElementById("extraction");
function extractionTrigger() {
    while (extractionList.length < 5) {
        let i = 0
        if (extractionList.includes(userGuessList[i])) {
        } else {
            extractionList.push(generaNumeroRandom(1, 100));
            i++;
        }
    }
    let extrationBox = document.getElementById("numbers-list")

}
extractionButton.addEventListener("click", extractionTrigger)


console.log(extractionList)

//definizione trigger di scelta dei numeri scelti dall'user
let submitButton = document.getElementById("submitB");
let imput = document.querySelectorAll("imput")
submitButton.addEventListener("click", function (event) {
    for (let i = 0; i < 5; i++)
        userGuessList.push(imput[i].value);
    //ciclo per confrontare i numeri scelti con i numeri estratti
    for (let i = 0; i < 5; i++) {
        if (extractionList.includes(userGuessList[i])) {
            userRightAnsList.push(userGuessList[i])
        }
    }
})
console.log(userGuessList)




console.log(userRightAnsList);

//class="d-none" tolto da  id="input-group"