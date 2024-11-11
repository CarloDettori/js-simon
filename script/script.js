// array vuoto per in numeri randomizzati
let extractionList = [];

// array vuoto per i numeri scelti dal user
let userGuessList = [];

// array vuoto per i numeri indovinati
let userRightAnsList = [];


// ciclo per definire i numeri estratti
let extractionButton = document.getElementById("extraction");
function extractionTrigger() {
    extractionButton.disabled = true;
    let extractionBox = document.getElementById("numbers-list")
    let countdownBox = document.getElementById("countdown")
    countdownBox.innerHTML = `<h1 id="timer"></h1>`
    while (extractionList.length < 5) {
        let i = 0;
        if (extractionList.includes(userGuessList[i])) {
        } else {
            extractionList.push(generaNumeroRandom(1, 100));
            i++;
        }
    }
    for (let i = 0; i < extractionList.length; i++) {
        extractionBox.innerHTML += `<h2>${extractionList[i]}</h2>`
    }
    let timer = 10

    function subtract1Second() {
        if (timer == 0) {
            clearInterval()
        }
        timer--
    }
    setInterval(subtract1Second(), 1000)
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