//* F-jata "textStats" prima "text" kako argument i go vraka objektot "rezObj" koj sodrzi statistiki za tekstot
//* Ovaa f-ja proveruva dali "text" e string. Ako ne e, togas vraka "undefined"
//* Ako "text" e string, togas ke se izvrsat slednite operacii
//* 1. "rezObj.bukvi" se odnesuva na dolzinata na tekstot (broj na bukvi vo tekstot)
//* 2. "rezObj.zborovi" se odnesuva na brojot na zborovi vo tekstot. Zborovite se brojat preku koristenje na "split(" ")", kade sto sekoj zbor e oddelen so prazno mesto
//* 3. "rezIbj.recenici" se odnesuva na brojot na recenici vo tekstot. Recenicite se brojat preku koristenje na "split(".")", kade sto sekoja recenica zavrsuva so tocka
//* Na kraj se koristi "return rezObj" za da se dobie rezultatot od f-jata

exports.textStats = (text) => {
  if (typeof text !== "string") return; //Ako ne e string, vraka undefined

  const rezObj = {
    bukvi: 0,
    zborovi: 0,
    recenici: 0,
    gt5: 0,
    lt5: 0,
    eq5: 0,
  };

  rezObj.bukvi = text.length;
  rezObj.zborovi = text.split(" ").length;
  rezObj.recenici = text.split(".").length;

  return rezObj;
};
