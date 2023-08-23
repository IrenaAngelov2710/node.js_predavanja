// //! 1. Function Declaration (Funkcionalni deklaracii) 
// //! Ova e najstar nacin na deklariranje na funkcija kade sto se sostoi od funkcija i ime na funkcijata

// function functionName(parameters) {
//   //Kod na funkcijata
//   return result; //Opciono, vraka rezultat
// };

// Primer 1
function sobirok(a, b, c) {
  return a + b + c;
};

console.log(`Sobirokot e ${sobirok(2, 3, 4)}`);

// Primer 2
const resenie = sobirok(2, 3, 6);
console.log(resenie);

// Primer 3
const resenie2 = sobirok(10, 500, 1000);
console.log(resenie2);

// //! 2. Function Expressions (Funkcionalni ekspresii)
// //! Funkcionalnite ekspresii se onie koi se zapisuvaat kako varijabla ili konstanta, znaci ne i treba ime na funkcijata

// var functionName = function(parameters) {
//   //KOd na funkcijata
//   return result; //Opciono, vraka rezultat
// };

//Primer
const proizvod = function(a, b) {
  return a * b;
};
const proizvodot = proizvod(7, 7);

console.log(`Proizvodot e ${proizvodot}`);

// //! 3. Fat-Arrow function - se izostavuva return i function, najnov nacin

// const functioName = (parameters) => {
//   //Kod na funkcijata
//   return result; //Opciono, vraka rezultat
// };

// Primer
const razlika = (a, b) => a - b;

console.log(`Razlikata e ${razlika(6, 2)}`);

// fat-arrow function nema sopstveno this ako go upotrebime ke nasocuva na celata aplikacija
// dodeka pak kaj function declaration i function expressions se odnesuva na samata funkcija


// //! 4. Metodi vo objekti vo Javascript
// Ova e primer na objekti vo Javascript so ime "ucenik"
// Objektot "ucenik" sodrzi dve svojstva(kluca): "ime" so vrednost "Trajan" i "pozdrav" so vrednost funkcija
// So "ucenik.pozdrav()" se povikuva funkcijata "pozdrav" so priklucok na vrednosta na svojstvoto "ime" vo objektot "ucenik"
// Koga ke se povika "ucenik.pozdrav()" ke ispecati "Zdravo Trajan"

//Primer
const ucenik = {
  ime: "Trajan",
  pozdrav: function () {
    console.log(`Zdravo ${this.ime}`);
  },
};

ucenik.pozdrav(); //Pecati Zdravo Trajan

// //! 5. IIFFE Immediately Invoked Function Expressions
//  ova se koristi da se oddeli od drugiot kod, i drugiot kod da ne moze da se modificira vo ovaa IIFFE funkcija
//  i ova se izvrsuva na pocetok od aplikacijata
//  (function () {
//  console.log("Ovde ke se izvrsi funkcijata");
// })();

// //! Zadaca broj 1
// //! Da se kreira funkcionalna ekspresija so ime c2f koja ke konvertira celziusovi stepeni vo farejhajt

const c2f = function(celsius) {
    return (celsius * 1.8) + 32
};

console.log(c2f(32)); 

// //! Zadaca broj 2
// //! Da se kreira Fat Arrow Function so ime f2c koja ke konvertira farenhajt vo celziusovi

const f2c = (fahrenheit) => (fahrenheit - 32) * 0.556;

console.log(f2c(89));

//  High order functions - funkcija sto vraka druga funkcija

// //! primer broj1

function mnozenje(broj1) {
  return function(broj2) {
    return broj2 * broj1;
  }
};

const pomnozen = mnozenje(2);
const rezultat = pomnozen(5);

console.log(rezultat);

// //! primer broj2

function calculator(operacija) {
  return function(a, b) {
    switch (operacija) {
      case "soberi":
        return a + b;
      case "odzemi":
        return a - b;
      case "pomnozi":
        return a * b;
      case "podeli":
        return a / b;
    }
  }
};

const soberiOperacija = calculator("soberi");
const rezultat123 = soberiOperacija(5, 3);

console.log(rezultat123);

// //! zadacha broj 3
// //! da se kreira funkcija koja ke zema kako argument c2f ili f2c i koja ke gi pretvora celziusovite vo farenajt
// //! i farenhajt vo celziusiv

function pretvori(parametar) {
  return function(vrednost) {
    switch(parametar) {
      case "c2f":
      return (vrednost * 1.8) + 32;
      case "f2c":
        return(vrednost - 32) * 0.556;
    }
  }
};

const c2farenheit = pretvori("c2f");
const rezultat1 = c2farenheit(20);
console.log(rezultat1);

const f2celsius = pretvori("f2c");
console.log(f2celsius(89));

// Prvitot element od nizata se indeksira od 0, toa e vrodeno na jazikot. Toa ne e index vsusnost znaci pomestuvanjeto
// Ne site jazici se pridrzuvaaat na ova pravilo; nekoi zapocnuvaat so 1

// //! TYPEOF
// console.log(typeof undefined); //undefined
// console.log(typeof 239); //number
// console.log(typeof 12n); //bigint (big integer) - golemi brojki
// console.log(typeof false); //(true/false se boolean)
// console.log(typeof "undefined"); //string (bidejki imame "")
// console.log(typeof null); //object
// console.log(console.log); //function (console.log e so mali zagradi i pottsekja na f-ja)

// //! BOOLEAN TRUE FALSE
// console.log(Boolean(1)); //true (ima vrednost)
// console.log(Boolean(0)); //false (vrednosta 0 vo js e false)
// console.log(Boolean("1")); //true (ima vrednost)
// console.log(Boolean("135235623")); //true (ima vrednost)
// console.log(Boolean("")); //false (prazen string, isto kako 0)
// console.log(Boolean(" ")); //true (samiot space zafaka nesto vo js)

// console.log(+true); //1 
// console.log(+false); //0
// console.log(2 > 1); //true
// console.log(2 == 2); //true
// console.log(2 == "2"); //true (so == proveruva dali e ista vrednost, so === proveruva vrednost i podatocen tip)
// console.log(2 != 1); //true

// //! || - or (ili ili)
// console.log(true || true); //true
// console.log(true || false); //true
// console.log(false || true); //true
// console.log(false || false); //false

// //! && - and (i dvata uslovi)
// console.log(true && false); //false
// console.log(false && false); //false
// console.log(false && true); //false
// console.log(true && true); //true

// //! Ternary operators
// //* uslov ? uslovot ako e tocen : uslovot ako e netocen
const godini = 17;
const vozrast = godini >= 18 ? "Polnoleten" : "Ne e polnoleten";
console.log(vozrast); //Pecati Polnoleten

//! Rabota so nizi(Arrays)

///////////////

const arrayEden = [2, 3, 6, 7, 8];
const arrayDva = [1, 1, 1, 1, 1];

for(let i = 0; i < arrayEden.length; i++){
  console.log(arrayEden[i])
}; // ke gi vrati site elementi od arrayEden

for(let i = 0; i < arrayDva.length; i++) {
  console.log(arrayEden[i]);
}; //ke gi vrati site elementi od arrayEden deka imaat ist broj na elementi so arrayDva

///////////////

// const arrayEden = [5, 2, 3, 6, 7, 8];
// const arrayDva = [1, 1, 1, 1, 1];
// const arrayTri = [10,20,30,40];

// console.log(arrayDva.length); //Pecati 5

// arrayNov da gi zeme site elementi na arrayDva za plus 1
// arrayPonov da gi zeme site elementi na arrayEden
// const arrayNov = []; 
// const arrayPonov = [];
// const arrayTriPrazen = [];
// arrayNov[0] = arrayDva[0] + 1; //manuelno

// for(let i = 0; i < arrayDva.length; i++) {
//     arrayNov[i] = arrayDva[i] + 1; //dinamicno
//     arrayPonov[i] = arrayEden[i]; //gi zima elementite od arrayEden
// };
// console.log(arrayNov);
// console.log(arrayPonov);

// //! Implementacija na gotovi higher-order functions vo javascript
// //* MAP, FOREACH, REDUCE, FILTER, SORT, FIND

// //! FOREACH vrsi interacija na sekoj element vo nizata znaci ne go modificira
// //! po default tuku samo go izminuva, i ako sakame mozeme da ja modificirame nizata
// arrayTri.forEach((item, i, arr) => (arr[i] = item + 20));
// for (let i = 0; i < arrayTri.length; i++) {
//   console.log(arrayTri[i]);
// };

// //! MAP metodata izminuva niza za promeni na istata, rezultatot e nova niza
// const arrayCetiri = arrayTri.map((item, i) => {
//   return item + 10;
// });

// //! REDUCE reducira/namaluva/sumira niza na eden edinstven rezultat
// accumulator + segasnaVrednost

// const reducePrimer = [1, 2, 3, 4];

// let rezultat = reducePrimer.reduce((acc, s) => {
//   return acc + s;
// }, 0); //pocnuva da sobira od 0

// console.log(`rezultatot na reducePrimer e ${rezultat}`);

// //! SORT sortira elementi vo niza spored dadena funkcija za sortiranje
// Go modificira orginalniot array, ne ni dava nova niza

// reducePrimer.sort((a, b) => b - a);
// console.log(reducePrimer); //descending order - a - b ke bide rastecki order

// //! FILTER vraka nova niza od elementi koi odgovaraat na postaveniot uslov

// const brojkiFilter = reducePrimer.filter((vrednosti) => {
//   return vrednosti > 3;
// });

// console.log(brojkiFilter);

//! FIND vraka element od nizata koj odgovara na postaveniot uslov

// const brojkaFind = reducePrimer.find((vrednost) => {
//   return vrednost === 2;
// });

// console.log(brojkaFind);

const studenti = [
  { ime: "Bojan", prosek: 7.2, grad: "Skopje" },
  { ime: "Pero", prosek: 8.3, grad: "Bitola" },
  { ime: "Janko", prosek: 6.9, grad: "Kumanovo" },
  { ime: "Vesna", prosek: 9.1, grad: "Prilep" },
  { ime: "Elena", prosek: 9.9, grad: "Tetovo" },
  { ime: "Vancho", prosek: 8.8, grad: "Kratovo" },
  { ime: "Ivana", prosek: 6.3, grad: "Kumanovo" },
  { ime: "Simona", prosek: 7, grad: "Ohrid" },
  { ime: "Natasha", prosek: 8.2, grad: "Skopje" },
  { ime: "Stanko", prosek: 6.7, grad: "Kichevo" },
  { ime: "Damjan", prosek: 9.1, grad: "Kumanovo" },
  { ime: "Sandra", prosek: 9.2, grad: "Ohrid" },
];

// //todo: Da gi izlistame site iminja na studenti
for (let i = 0; i < studenti.length; i++) {
console.log(studenti[i].ime);
};

studenti.forEach((student) => console.log(student.ime));

// const filtriraniStudenti = studenti
//   .filter((student) => student.prosek > 9)
//   .sort((a, b) => b.prosek - a.prosek)
//   .slice(0, 2);
// console.log(filtriraniStudenti);

// //todo: Da pronajdeme student sto ima prosek 6.9

const studentEden = studenti.find((student) => student.prosek === 6.9);
console.log(studentEden);

// //todo: Da doznaeme zbir na site proseci na site studenti

const zbirNaProsek = studenti.reduce((sum, s) => sum + s.prosek, 0);
console.log(zbirNaProsek);

// //!
// const array1 = [1, 2, 3];
// const array2 = [1, 2, 3];

// console.log(JSON.stringify(array1) === JSON.stringify(array2)); //Pecati true
// Pecati "[1, 2, 3]"
// Pecati "[1, 2, 3]"
// Metod za da gi pretvori nizite vo JSON format(string)
// Na kraj se sporeduvaat JSON stringovite na dvete nizi so operatorot za sporedba "==="
// Vo ovoj slucaj rezultatot e "true", bidejki i dvete nizi sodrzat isti elementi i se konvertirani vo isti JSON stringovi

// //! Kopiranje na array
// // spread operator
// const array1 = [2, 4, 6, 8, 32]
// const array2 = [24, 214, 4, 5, 6];
// const array3 = array1.concat(array2); // nacin 1
// const array4 = [...array1, ...array2]; // nacin 2
// console.log(array4);

// //! Destruction on Arrays

// const arr1 = [1, 3, 7];
// const [a, b, element3] = arr1;
// const element2 = arr1[1];
// console.log(b);

// const arr2 = [50, 100, 200, 300, 500, 1000, 1500];
// const [x,z, ...y] = arr2;
// console.log(x);
// console.log(z);
// console.log(y);

// //! Destruction on Objects
// const myObject = {produkt: "Smoki", cena: 13 };
// const {produkt, cena} = myObject; // funkcionira i vaka {cena, produkt}
// console.log(produkt, cena);

// //! Kopiranje na Objekt
// const obj1 = {
//   item1: "eden",
//   item2: "dva",
// };

// const obj2 = {
//   item3: "tri",
//   produkt: "osum",
// };

// const obj3 = {...obj1, ...obj2, item3: "cetiri" };
// console.log(obj3)

// const obj4 = {...obj1, item2: "item2" };
// console.log(obj4);

//? Domasna
//? 1. Site studenti od Skopje chie ime zavrshuva na a i imaat prosek nad 7, podredeni po ime(rastecki)
//? 2. Site studenti koi imaat prosek nad 9 i ne se od Skopje, podredeni po prosek opagjacki
//? 3. Prvite 3 studenti koi imaat iminja od 5 karakteri, podredeni po prosek
//? 4. Vkupen prosek na studenti koi se od Kumanovo
//? 5. Prosek na prosecite od gradoovite Skopje i Ohrid
//? 6. Da se dodade ushte eden student so ime Goran, prosek 7.3 i grad Delchevo
//? 7.Da se izbrishe prviot student vo studentite
//? 8. Da se kreira nova niza kade sto studentite od Ohrid i Kumanovo prosecite im se za 1 pogolemi od segasnite(dinamicki)