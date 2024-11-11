//UTILITIES FUNCTION

/**
 *
 * @param {number} min
 * @param {number} max
 *
 * @abstract Genera un numero random compreso tra min e max
 */
function generaNumeroRandom(min, max) {
    const numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    //console.log(numeroRandom);
    return numeroRandom;
}

/**
 *
 * @param {number} num
 * @returns string
 *
 *
 * @abstract Ritorna pari se num è pari altrimenti ritorna dispari
 */
function pariOdispari(num) {
    if (num % 2 === 0) {
        return "pari";
    } else {
        return "dispari";
    }
}

function isEven(num) {
    return num % 2 === 0;
}

function isPalindrom() {
    for (let i = word.length - 1; i >= 0; i--) {
        palindrom = palindrom + word[i];
    }
    console.log(word);
    console.log(palindrom);

    if (word == palindrom) {
        console.log("le parole sono palindrome")
    } else {
        console.log("le non parole sono palindrome")
    }
}

function winner() {
    let parDisCont = (numUser + numPc) % 2;
    let a = "";
    if (parDisCont == 0) {
        a = "pari";
    } else {
        a = "dispari";
    }
    console.log(`E' uscito ${a}`)
    if (a == parDis) {
        console.log("Congratulazioni!, hai vinto!")
    } else {
        console.log("Ritenta, sarai più fortunato")
    }


}