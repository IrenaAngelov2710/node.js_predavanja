//! DA PROCITATE OD DOKUMENTACIJA
//? Da istrazite uste nekolku methodi na fs modulot
//? Kako da izbrisete fajl, kako da preimenuvate fajl
//? i uste eden po zelba
//? isto taka da kreirate fajl
//? i da procitate fajl

//* Do sega rabotevme so lokalni moduli, sega pocnuvame so core(osnovni) moduli
//! Core modules - osnovni

//* "fs" e modul vo Node.js koj ovozmozuva rabota so fajlovi na sistemot
//* So koristenje na ovoj modul, moze da se izvrsat razlicni operacii kako citanje, zapisuvanje, dodavanje, brisenje, preimenuvanje i drugi manipulacii so fajlovite
//* Ovaa linija kod ja koristi "require()" funkcijata za vcituvanje na modulot "fs" vo Node.js

const fs = require("fs");

//* posle ova vo terminal se pisuva npm init -y
//* se kreira novo package.json

//! Vcituvanje na fajl
//! Synchrona verzija
//* "fs.readFileSync()" e mеtod koj go koristi "fs" modulot za sinhrona operacija na citanje na sodrzina od fajl
//* Ova znaci deka se ceka se dodeka operacijata na citanje ne zavrsi pred da prodolzi so izvrsuvanje na slednite linii na kod
//* Ovaa funkcija ja vraka sodrzinata na fajlot kako tekst vo formatot sto e zadaden kako vtor argument, vo ovoj slucaj "utf-8"

const vcitanTekst = fs.readFileSync("./tekst.txt", "utf-8");
console.log(vcitanTekst);

//! Zapisuvanje na fajl vo nasiot kompjuter(server)
//! Synchrona verzija
//* "fs.writeFileSync()" e metod koj go koristi "fs" modulot za sinhrona operacija za kreiranje na nov fajl i zapisuvanje na tekstualen podatok vo nego
//* Definirame promenliva "podatok" i vo `` se zapisuva testot koj sakame da go zacuvame
//* So koristenje na metodot "fs.writeFileSync" kreirame nov fajl i vo () gi zapisuvame imeto na noviot fajl i  vremenskata oznaka vo forma na brojka

const podatok = `Ova sakame da go zapiseme vo nasiot kompjuter ${2 + 100}`;
fs.writeFileSync(`./novTekst${Date.now()}.txt`, podatok);

//! VO SINHRONO PROGRAMIRANJE SEKOJ PROCES MORA DA ZAVRSI ZA DA POCNE NOV PROCES
//! ZNACI KODOT VO SINHRONO PROGRAMIRANJE SE IZVRSUVA LINIJA PO LINIJA

//! Asynchrona verzija
// callback funkcija - funkcija sto kako parametar prima druga funkcija
// edna funkcija povikuva druga

function pozdrav(ime, funkcija) {
  console.log(`Zdravo, ${ime}`);
  funkcija();
};

function prijatno() {
  console.log("chao!");
};

// pozdrav("Danche", prijatno);

//! Vcituvanje na fajl
//! Asynhrona verzija 
//* "fs.readFile" e metod koj go koristi "fs" modulot za asinhrona operacija za citanje na sodrzinata na fajlot "tekst.txt"
//* Vrednosta na "utf-8" go naveduva enkodiranjeto na fajlot kako tekst
//* Koga operacijata na citanje ke zavrsi, callback f-jata se povikuva so dva argumenti, "err" i "text"
//* Ako ima greska pri citanje se ispisuva porakata "Imase greska". Vo sprotivno, sodrzinata na fajlot se ispisuva na konzolata

fs.readFile("./tekst.txt", "utf-8", (err, text) => {
  if (err) {
    return console.log("Imase greska");
  }
  console.log(text);
});

//* "fs.readFile" e metod koj go koristi "fs" modulot za asinhrona operacija za citanje na sodrzinata na fajlot "novTekst.txt"
//* Ovaa operacija e vgnezdena vo callback f-jata na prvata "fs.readFile()"
//* Koga prvata "fs.readFile()" ke zavrsi, se povikuva callback f-jata so "err" i "text"
//* Vo ovaa callback f-ja e povikan vtoriot "fs.readFile()" i ja cita sodrzinata od fajlot "novTekst.txt"
//* Koga vtoriot "fs.readFile()" ke zavrsi se povikuva vtorata callback f-ja so "err" i "text2" argumenti
//* Na kraj vo vtorata callback f-ja se ispisuvaat sodrzinite na dvata fajla "text" i "text2"

fs.readFile("./tekst.txt", "utf-8", (err, text) => {
  fs.readFile("./novTekst.txt", "utf-8", (err, text2) => {
    console.log(text, text2);
  });
});

//! Zapisuvanje na fajl
//* Asynhrona varijanta
//* Vo ovoj del od kodot prvo e definirana promenliva "asynhronPodatok" koja sodrzi tekstovna vrednost
//* Potoa so pomos na metodot "fs.writeFile()" se kreira i zapisuva podatok vo fajlot so ime "asynhronWrite"
//* Podatokot od promenlivata "asynhronPodatok se zapisuva vo fajlot, a vrednosta na "uft-8" go naveduva enkodiranjeto na podatokot kako tekst
//* Posle kreiranjeto i zapisuvanjeto na fajlot, se povikuva callback f-jata so "err" argument
//* Ako ima greska pri operacijata, ke se ispise "Greska". Vo sprotivno koga operacijata ke se zavrsi uspesno, ke se ispise "uspesno"

const asynhronPodatok = "ovoj fajl e kreiran asyhrono";
fs.writeFile("./asynhronWrite.txt", asynhronPodatok, "utf-8", (err) => {
  if (err) {
    return console.log("Greska");
  }
  console.log("uspesno");
});

//* Ovoj kod e slicen na prviot kod, no ne go koristi klucniot zbor "return" vo if uslovot
//* Pri rabota so asinhroni operacii, "return" klucniot zbor vo callback f-jata ne gi prekinuva ostanatite delovi od kodot, tuku samo go prekinuva isvrsuvanjeto na callback f-jata
//* Vo ovoj slucaj ako ima greska pri operacijata, ke se ispise "Greska", a potoa ke se ispise i "uspesno"
//* Ako nema greska ke se ispiese samo "uspesno"

fs.writeFile("./asynhronWrite.txt", asynhronPodatok, "utf-8", (err) => {
  if (err) console.log("Greska");
  console.log("uspesno");
});

//! Promise pattern

//* Cekor 1
// const fileWrite = () => {};

//* Cekor 2
//? Funkcijata ke ni vrati nov Promise objekt
// const fileWrite = () => {
//   return new Promise();
// };

//* Cekor 3
// const fileWrite = () => {
//   //? Ke kreirame executor funkcija vo promisot
//   return new Promise(() => {});
// };

//* Cekor 4
// const fileWrite = () => {
//   //? Ke vneseme dva parametri koi se callback funkcii
// moze da gi zabelizite definirani kako resolve, reject
//   return new Promise((success, fail) => {});
// };

//* Cekor 5
// const fileWrite = () => {
//   //? ke ja zapiseme fs.writeFile funkcijata vnatre vo egzekucionata funkcija
//   return new Promise((success, fail) => {
//     fs.writeFile("data.txt", "Helloo!!!", (err) => {
//       if (err) return console.log(err);
//       console.log("Zapisot e napraven");
//     });
//   });
// };

//* Cekor 6
// const fileWrite = () => {
//   //? vo ovoj slucaj ako imame err da aktivira fail funkcijata
//   //? ako imame uspesno zapisan fajl da se aktivira funkcijata success
//   return new Promise((success, fail) => {
//     fs.writeFile("data.txt", "Helloo!!!", (err) => {
//       if (err) return fail(err);
//       return success();
//     });
//   });
// };

//* Cekor 7
//? i ke go modificirame fileWrite za da go zema filename,
//? i data kako parametri
//? i zemenite parametri gi prenesuvame na fs.writeFile
//? vo ovoj slucaj ako imame err da aktivira fail funkcijata
//? ako imame uspesno zapisan fajl da se aktivira funkcijata success

const fileWrite = (filename, data) => {
  return new Promise((success, fail) => {
    fs.writeFile(filename, data, "utf-8", (err) => {
      if (err) return fail(err);
      return success();
    });
  });
};

const fileRead = (filename) => {
  return new Promise((success, fail) => {
    fs.readFile(filename, "utf-8", (err, data) => {
      if (err) return fail(err);
      return success(data);
    });
  });
};

const main = async () => {
  try {
    await fileWrite("data1.txt", "Asynhron zapis od promis");
    await fileWrite("data2.txt", "Asynhron zapis od promis 2");
    const rezultat = await fileRead("super.txt");
    console.log(rezultat);
  } catch (err) {
    console.log(err);
  }
};

main();
