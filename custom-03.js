/* LENGVESNI */

/* 01.
Sukurkite ciklą kuris atspausdintų 10 kartų žodį “labas”.
*/
console.log("-------------------")
console.log('1 uzduotis')
console.log("-------------------")

let uzd1 = 1

while (uzd1 <= 10) {
    console.log('labas')
    uzd1++
}


/* 02.
Sukurkite ciklą kuris atspausdintų skaičius nuo 0 iki 9.
*/
console.log("-------------------")
console.log('2 uzduotis')
console.log("-------------------")

let uzd2 = 0

while (uzd2 <= 9) {
    console.log(uzd2)
    uzd2++
}

/* 03.
Atspausdinkite kas antrą skaičių nuo 10 iki 50 (porinius);
*/
console.log("-------------------")
console.log('3 uzduotis')
console.log("-------------------")

let uzd3 = 10

while (uzd3 <= 50) {
    if (uzd3 % 2 === 0) { console.log(uzd3) }
    uzd3++
}

/* 04.
Atspausdinkite kas antrą skaičių nuo 10 iki 50. (porinius) Jei skaičius dalinasi iš 10 be liekanos jo nespausdinkite. ( naudokite continue.) (atspausdinti visus porinius skaičius, išskyrus tuos kurie dalinasi iš 10 be liekanos)
*/
console.log("-------------------")
console.log('4 uzduotis')
console.log("-------------------")

for (let skaicius = 10; skaicius <= 50; skaicius += 2) {
    if (skaicius % 10 === 0) {
        continue;
    }
    console.log(skaicius);
}


/* 05.
Sukurkite ciklą kuris suktųsi nuo 0 iki 20. Suskaičiuokite, kiek kartų kintamasis i turėjo porinę reikšmę;
*/
console.log("-------------------")
console.log('5 uzduotis')
console.log("-------------------")

let lyginiuSuma = 0

for (let skaicius = 0; skaicius <= 20; skaicius++) {

    if (skaicius === 0) { continue }


    if (skaicius % 2 === 0) {
        lyginiuSuma += 1
    }
}

console.log(lyginiuSuma)


/* SUNKESNI */

/* 01.
Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti atspausdinti skliausteliuose” [ ] “.
*/
console.log("-------------------")
console.log('1 uzduotis SUNKESNE')
console.log("-------------------")

let atsitSkEil = []
let morethan150 = 0

for (let i = 0; i < 300; i++) {

    const atsitSk = Math.floor(Math.random() * 301);

    if (atsitSk > 150) {morethan150 +=1};

    if (atsitSk <= 275) {atsitSkEil.push(atsitSk)};

    if (atsitSk > 275) {atsitSkEil.push(`[${atsitSk}]`)};
}

console.log(atsitSkEil.join(' '))
console.log(`Didesnis nei 150 yra: ${morethan150}`)


console.log("-------------------")
console.log('1 uzduotis SUNKESNE V2')
console.log("-------------------")

let atsitSkEilv2 =  ""
let morethan150v2 = 0

for (let i = 0; i < 300; i++) {

    const atsitSk = Math.floor(Math.random() * 301);

    if (atsitSk > 150) {morethan150v2 +=1};

    if (atsitSk <= 275) {atsitSkEilv2 += `${atsitSk} `};

    if (atsitSk > 275) {atsitSkEilv2 += `[${atsitSk}] `};
}

console.log(atsitSkEilv2)
console.log(`Didesnis nei 150 yra: ${morethan150v2}`)

/* 02.
Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti.
*/
console.log("-------------------")
console.log('2 uzduotis SUNKESNE')
console.log("-------------------")

let eil77 =  ""

for (let atsitSkuzd3 = 1; atsitSkuzd3 <= 3000; atsitSkuzd3++) {

    if (atsitSkuzd3 % 77 === 0) {eil77 += `${atsitSkuzd3},`};
}

if (eil77.endsWith(',')) {
    eil77 = eil77.slice(0, -1);
}

console.log(eil77)


/* 03.
Nupieškite kvadratą iš “*”, kurio kraštines sudaro 10 “*”.
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
*/
console.log("-------------------")
console.log('3 uzduotis SUNKESNE')
console.log("-------------------")

for (i = 0; i<10; i++) {
    console.log('**********')
}