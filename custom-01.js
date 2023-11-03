/*
Uždavinių sprendimui nenaudoti, masyvų, ciklų ir savo parašytų funkcijų. JavaScript funkcijas žinoma naudokite (pageidautina).
Visi random generuojami skaičiai turi būti sveikieji.
*/

/* 01.
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(-ų)".
*/
console.log("-------------------")
console.log('1 uzduotis')

let vardas = "Jonas"
let pavarde = "jonaitis" 
let gimimometai = 1900
let amzius = 2023 - gimimometai;

console.log(`Aš esu ${vardas} ${pavarde}. Man yra ${amzius} metai(-ų).` )

console.log('antra')
/* 02.
Naudokite funkciją Math.random(). Sukurkite du kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/

console.log("-------------------")
console.log('2 uzduotis')

let random1 = Math.floor(Math.random() * (4 - 0)) + 0
let random2 = Math.floor(Math.random() * (4 - 0)) + 0
if (random1 > random2) {console.log(Math.round(random1/random2))}
else {console.log(Math.round(random2/random1))}



/* 03.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintąmąjį turintį vidurinę reikšmę.
*/

console.log("-------------------")
console.log('3 uzduotis')

let randoma1 = Math.floor(Math.random() * (25 - 0)) + 0
let randoma2 = Math.floor(Math.random() * (25 - 0)) + 0
let randoma3 = Math.floor(Math.random() * (25 - 0)) + 0

console.log(randoma1)
console.log(randoma2)
console.log(randoma3)

if (randoma1 > randoma2 && randoma1 < randoma3) {console.log(randoma1)}
else if (randoma2 > randoma1 && randoma1 > randoma3) {console.log(randoma1)}
else if (randoma1 < randoma2 && randoma2 < randoma3) {console.log(randoma2)}
else if (randoma2 < randoma1 && randoma2 > randoma3) {console.log(randoma2)}
else {console.log(randoma3)}





/* 04.
Įvedami skaičiai - kr1, kr2, kr3 – kraštinių ilgiai, trys kintamieji (naudokite ​Math.random()​ funkcija nuo 1 iki 10). Parašykite JavaScript programą, kuri nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų. 
*/

console.log("-------------------")
console.log('4 uzduotis')

let rb1 = Math.floor(Math.random() * (10 - 1)) + 1
let rb2 = Math.floor(Math.random() * (10 - 1)) + 1
let rb3 = Math.floor(Math.random() * (10 - 1)) + 1

console.log(rb1)
console.log(rb2)
console.log(rb3)

if ((rb1 + rb2 > rb3) && (rb2 + rb3 > rb1) && (rb1 + rb3 > rb2)) {console.log('galima sudaryti trikampi')}

else {console.log('Negalima sudaryti trikampi')}

/* 05.
Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/
// console.log('penkta uzduotis')                  
console.log('5 uzduotis')

const sk1 = Math.floor(Math.random() * 3); 
const sk2 = Math.floor(Math.random() * 3);
const sk3 = Math.floor(Math.random() * 3);
const sk4 = Math.floor(Math.random() * 3);


const nul = (sk1 === 0 ? 1 : 0) + (sk2 === 0 ? 1 : 0) + (sk3 === 0 ? 1 : 0) + (sk4 === 0 ? 1 : 0);
const vien = (sk1 === 1 ? 1 : 0) + (sk2 === 1 ? 1 : 0) + (sk3 === 1 ? 1 : 0) + (sk4 === 1 ? 1 : 0);
const dvej = (sk1 === 2 ? 1 : 0) + (sk2 === 2 ? 1 : 0) + (sk3 === 2 ? 1 : 0) + (sk4 === 2 ? 1 : 0);


console.log(`Nulių kiekis: ${nul}`);
console.log(`Vienetų kiekis: ${vien}`);
console.log(`Dvejetų kiekis: ${dvej}`);




/* 06.
Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 -  (), didesni už 0 {}.
*/
console.log("-------------------")

console.log('sesta uzduotis')
console.log('')

let rd1 = Math.floor(Math.floor(Math.random() * 21) - 10)
let rd2 = Math.floor(Math.floor(Math.random() * 21) - 10)
let rd3 = Math.floor(Math.floor(Math.random() * 21) - 10)

console.log(rd1)
console.log(rd2)
console.log(rd3)

if (rd1 < 0) {console.log(`[${rd1}]`)}
else if (rd1 == 0) {console.log(`(${rd1})`)}
else {console.log(`{${rd1}}`)}

if (rd2 < 0) {console.log(`[${rd2}]`)}
else if (rd2 == 0) {console.log(`(${rd2})`)}
else {console.log(`{${rd2}}`)}

if (rd3 < 0) {console.log(`[${rd3}]`)}
else if (rd3 == 0) {console.log(`(${rd3})`)}
else {console.log(`{${rd3}}`)}

/* 07.
Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​Math.random()​ funkcija nuo 5 iki 3000.
*/
console.log("-------------------")
console.log('septinta uzduotis')

let zvakiuKiekis = Math.floor(Math.random() * (3001 - 5)) + 5
let vntkaina = 1
console.log(zvakiuKiekis)

if (zvakiuKiekis * vntkaina > 2000 ) {console.log('kiekis - ', zvakiuKiekis, ', kaina - ', zvakiuKiekis * vntkaina * 0.96)}
else if (zvakiuKiekis * vntkaina > 1000 ) {console.log('kiekis - ', zvakiuKiekis, ', kaina - ', zvakiuKiekis * vntkaina * 0.97)}
else {console.log('kiekis - ', zvakiuKiekis, ', kaina - ', zvakiuKiekis * vntkaina)}


/* 08.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Tada aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.
*/
console.log("-------------------")
console.log('astunta uzduotis')
console.log("-------------------")

let re1 = Math.floor(Math.random() * 101) + 0
let re2 = Math.floor(Math.random() * 101) + 0
let re3 = Math.floor(Math.random() * 101) + 0

console.log(re1)
console.log(re2)
console.log(re3)

console.log("aritmetinis vidurkis: ", Math.round((re1 + re2 + re3)/ 3) )

let atitik1 = 0
let atitik2 = 0
let atitik3 = 0


if (re1 > 10 && re1 < 90) {
   atitik1 = 1
}
else {

   atitik1 = 0
} 

if (re2 > 10 && re2 < 90) {
    atitik2 = 1
 }
 else {
 
    atitik2 = 0
 } 
 
 if (re3 > 10 && re3 < 90) {
    atitik3 = 1
 }
 else {
 
    atitik3 = 0
 } 

//  console.log('naujos reiksmes:')
 if (atitik1 == 0) {re1 = 0}
 if (atitik2 == 0) {re2 = 0}
 if (atitik3 == 0) {re3 = 0}

console.log(re1)
console.log(re2)
console.log(re3)

let sumre = re1 + re2 + re3
let sumatitik = atitik1 + atitik2 + atitik3

console.log(sumre)
console.log(sumatitik)
console.log("Naujas aritmetinis vidurkis:", sumre/sumatitik)


/* 09.
Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją Math.random(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
*/

console.log("-------------------")
console.log('devinta uzduotis')
console.log("-------------------")

console.log('devinta uzduotis - NEPADARIAU')

let valandos = Math.floor(Math.random() * 25)
let minutes = Math.floor(Math.random() * 61)
let sekundes = Math.floor(Math.random() * 61)

let papildomosSekundes = Math.floor(Math.random() * 301)
console.log("-------------------")
console.log("-------------------")
console.log("valandos: ", valandos)
console.log("minutes: ", minutes)
console.log("sekundes: ", sekundes)
console.log("papildomos sekundes: ", papildomosSekundes)
console.log("-------------------")
console.log("-------------------")



console.log("-------------------")
console.log(`Skaitmeninis laikrodis: --${valandos}:${minutes}:${sekundes}--`)
console.log("-------------------")
let naujosSekundes = sekundes + papildomosSekundes
console.log(naujosSekundes)




/* 10.
Naudokite funkciją Math.random(). Sugeneruokite 6 kintamuosius su atsitiktinėm reikšmėm nuo 1000 iki 9999. Atspausdinkite reikšmes viename string'e, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.
*/


console.log("-------------------")
console.log('desimta uzduotis')
console.log("-------------------")

console.log('desimta uzduotis - NEPADARIAU')

const r1 = Math.floor(Math.random() * 9000) + 1000;
const r2 = Math.floor(Math.random() * 9000) + 1000;
const r3 = Math.floor(Math.random() * 9000) + 1000;
const r4 = Math.floor(Math.random() * 9000) + 1000;
const r5 = Math.floor(Math.random() * 9000) + 1000;
const r6 = Math.floor(Math.random() * 9000) + 1000;

console.log(`Randomas 1: ${r1}`);
console.log(`Randomas 2: ${r2}`);
console.log(`Randomas 3: ${r3}`);
console.log(`Randomas 4: ${r4}`);
console.log(`Randomas 5: ${r5}`);
console.log(`Randomas 6: ${r6}`);
