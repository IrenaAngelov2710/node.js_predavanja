// VIDOVI NA MODULI VO NODE.JS

//! 1. CORE MODULI - osnovni
//* http, assert, fs, path, process, os...
//! 2. LOCAL MODULI
//* ovie nie ke gi kreirame
//? prv nacin na povikuvanje na lokalni moduli
// const kalkulator = require("./kalkulator.js");
//? vtor nacin na povikuvanje na lokalni moduli so destruction
const { sobiranje, odzemanje, delenje, mnozenje } = require("./kalkulator.js");
const converter = require("./converter.js");
//! 3. THIRD-PARTY
//* Moduli, paketi ili biblioteki koi ne se vgradeni vo samata Node.js platforma, tuku se razvieni i poddrzuvani od nadvoresni, nezavisni najcesto, poedinci ili kompanii
//* Tie se obicno dostapni preku npm(Node Package Manager)
//* mongoose, express, dotenv, ejs, morgan..
//? prv nacin
// console.log(kalkulator.sobiranje(2, 4));
//? vtor nacin
console.log(sobiranje(2, 4));
converter.textStats(
  "Nie sme studenti vo Semos Akademija, ucime full stack programinja. I taka nataka"
);

//? Za domasna da se dodade uste eden modul so ime domasna.js
//? Koj kje ima funkcija da promeni faregajt vo celzius i obrantno
//? Da ima funkcija sto presmetuva plostina i perimetar na triagolnik
//? da ima funkcija sto presmetuva plostina i perimetar na pravoagolnik
//? Da ima funkcija sto proveruva dali nekoj broj e parel ili neparen
