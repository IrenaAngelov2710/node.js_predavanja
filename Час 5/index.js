//* Ovoj kod go vcituva modulot "readWrite" vo promenlivata modul
const modul = require("./readWrite");

//* Ova e samoizvrsuvacka asinhrona f-ja
(async () => {
  //* Kodot gi cita podatocite od fajlot "studenti.json"
  //* So pomos na "await" f-jata se ceka da se zavrsi operacijata na citanje na fajlot "studenti.json"
  //* Operacijata vraka tekstualna reprezentacija na podatocite, koja potoa se pretvara vo JavaScript objekt so "JSON.parse()" f-jata
  //* Vrednosta na objektot se zapisuva vo promenlivata "studenti"
  try {
    const dataString = await modul.fileRead("studenti.json");
    let studenti = JSON.parse(dataString);

    //* Studentite se sortiraat spored nivniot prosek koristejki "sort()" metod
    //* Koga "sort()" metodot ke gi sporedi dvata studenti, ako prosekot na "a" e pomal od prosekot na "b", togas "sort()" metodot vraka negativen broj(-1)
    //* Ako prosekot na "a" e pogolem od prosekot na "b", togas "sort()" metodot vraka pozitiven broj(1)
    //* Ako prosekot na "a" i "b" e ist, togas "sort()" metodot vraka nula(0)
    const sortProsek = studenti.sort((a, b) => {
      if (a.prosek < b.prosek) {
        return -1;
      } else if (a.prosek > b.prosek) {
        return 1;
      }
      return 0;
    });

    // console.log(sortProsek);
    const nanizokProsek = sortProsek[0];
    const najvisokProsek = sortProsek[sortProsek.length - 1];

    //* So pomos na "reduce()" metodot se presmetuva sumata na prosecite na site studenti vo promenlivata "sredenProsek"
    //* Potoa ovaa suma se deli so dolzinata na nizata "studenti.length" za da se dobie sredniot prosek na studenti
    const sredenProsek =
      studenti.reduce((acc, student) => {
        return acc + student.prosek;
      }, 0) / studenti.length;

    //* Zapisuvanje na "sredenProsek" vo fajlot i brisenje na fajlot
    await modul.fileWrite("prosek.txt", JSON.stringify(sredenProsek));
    await modul.fileDelete("prosek.txt");
  } catch (err) {
    console.log(err);
  }
})();

//? Student ime prezime prosek grad
//? Dodavanja student vo fajlot
//? Brishenje na student od fajlot
//? Menuvanje na podatoci na student od fajlot
//? Chitanje na site studenti od fajlot

//? - Treba da dodademe student vo fajlot
//? 1. Da ja vcitate celata sodrzina of gajlot | fs.readFile
//? 2. Da ja konvertirate sodrzinata od obichen tekst vo js niza/ JSON.parse
//? 3. Treba da gi dodadete podatocite na studentot vo nizata | Array.push
//? 4. Nizata od js niza / objekt treba da e konvertirana vo tekst | JSTON.stringify
//? 5. Tekstot treba da bide zacuvan vo fajlot | fs.writeFile

//? - Imeto na studentot treba da bide smeneto od AAA vo AAB
//? 1. Da ja vchitate celata sodrzina od fajlot | fs.readFile
//? 2. Da ja konvertira sodrzinata od obichniot tekst vo js niza ili objekt | JSON.parse
//? 3. Da gi izminite site elementi vo nizata i da napravite promena samo na soodvetniot clen | Array.map
//? 4. Nizata od js niza/objekt treba da bide konvertirana vo tekst | JSON.stringify
//? 5. tekstot treba da bide zachuvan vo fajlot | fs.writeFile

//? - Treba da she izbrtishe studen od fajlot
//? 1. Da ja vchitate celata sodrzina od fajlot
//? 2. Da ja konvertirate sodrzinata od obicen tekst vo js niza
//? 3. Da gi izminite site elementi vo nizata i da go izbrishite soodvetniot clen | Array,filter
//? 4. Nizata od js treba da bidde konvertirana vo tekst
//? 5. Tekstot treba da bide zachuvan vo fajlot
