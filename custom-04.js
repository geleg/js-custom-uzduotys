/* 01.
Sukurkite masyvą su dešimt augalų pavadinimų.


*/
console.log("-------------------")
console.log('1 uzduotis')
console.log("-------------------")

augalaiSarasas = ['roze', 'grazdikas', 'liepa', 'berzas', 'azuolas', 'tulpe', 'palme', 'fikusas', 'kaktusas', 'gerbera']

/* 02.
Atspausdinkite kiekvieną pirmo uždavinio augalą atskiroje eilutėje.
*/
console.log("-------------------")
console.log('2 uzduotis')
console.log("-------------------")

let pav = 0

while (pav < augalaiSarasas.length ) {
    console.log(augalaiSarasas[pav]);
    pav++;
}

/* 03.
Atspausdinkite pirmo uždavinio kiekvieną augalą pradedant nuo paskutinio, ir baigiant pirmuoju. (atvirkščias ciklas).
*/
console.log("-------------------")
console.log('3 uzduotis')
console.log("-------------------")

let pav3 = augalaiSarasas.length-1

while (pav3 >= 0 ) {
    console.log(augalaiSarasas[pav3]);
    pav3--;
}


/* 04.
Suskaičiuokite kiek pirmo uždavinio masyve yra žodžių trumpesnių nei 5 simboliai, ir kiek ilgesnių nei 7 simboliai.
*/

console.log("-------------------")
console.log('4 uzduotis')
console.log("-------------------")

let ilgesnisnei7 = 0
let trumpesnisnei5 = 0
let pav4 = 0

while (pav4 < augalaiSarasas.length ) {
    if (augalaiSarasas[pav4].length < 5) {trumpesnisnei5 += 1}
    if (augalaiSarasas[pav4].length > 7) {ilgesnisnei7 += 1}
    pav4++; 

}

console.log(`Trumpesnių nei 5 simboliai žodžių yra ${trumpesnisnei5}`)
console.log(`Ilgesnių nei 7 simboliai žodžių yra ${ilgesnisnei7}`)