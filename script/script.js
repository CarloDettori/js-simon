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
    let i = 0;
    while (extractionList.length < 5) {
        if (extractionList.includes(userGuessList[i])) {
        } else {
            extractionList.push(generaNumeroRandom(1, 100));
            i++;
        }
    }
    for (let i = 0; i < extractionList.length; i++) {
        extractionBox.innerHTML += `<h2>${extractionList[i]}</h2>`
    }
    let timer = document.getElementById("timer");
    let timerValue = 10;
    let formBox = document.getElementById("answers-form")
    timer.innerHTML = timerValue
    function subtract1Second() {
        if (timerValue == 0) {
            clearInterval()
            timer.classList.add("d-none");
            extractionBox.classList.add("d-none")
            formBox.classList.remove("d-none")
            let newText = document.getElementById("instructions")
            newText.innerText = "Scrivi i numeri"
        } else {
            timer.innerHTML = --timerValue;
        }
    }
    const timerInterval = setInterval(subtract1Second, 1000)
}
extractionButton.addEventListener("click", extractionTrigger)



//console.log(extractionList)

//definizione trigger di scelta dei numeri scelti dall'user e comparsa messaggio dei risultati
let submitButton = document.getElementById("submitB");

let resultText = document.getElementById("message")
submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    let imputList = document.querySelectorAll
        ("input")
    console.log(imputList)
    for (let i = 0; i < 5; i++) {
        userGuessList.push(parseInt(imputList[i].value));
    }
    console.log(imputList)
    //ciclo per confrontare i numeri scelti con i numeri estratti
    for (let i = 0; i < 5; i++) {
        if (extractionList.includes(parseInt(userGuessList[i]))) {
            userRightAnsList.push(parseInt(userGuessList[i]))
        }
    }
    resultText.classList.add("d-block")
    resultText.innerText = `Hai indovinato ${userRightAnsList.length} numeri!`
    console.log(userGuessList, userRightAnsList)
})
//console.log(userRightAnsList)




//console.log(userRightAnsList);

//class="d-none" tolto da  id="input-group"