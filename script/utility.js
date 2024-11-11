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

