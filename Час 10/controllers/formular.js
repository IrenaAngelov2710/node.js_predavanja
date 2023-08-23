//* Ovaa linija kod go voveduva modelot "studenti" vo Node.js aplikacijata. Patekata "../models/studenti" pretstavuva relativna pateka do datotekata koja go definira modelot "studenti"
const studenti = require("../models/studenti");

//* Ovaa linija kod e definicija na f-jata narecena "getForm", koja se koristi kako kontroler za obrabotna na HTTP GET baranja za nekoja pateka. Vo ovoj slucaj, kontrolerot e odgovoren za prikaz na HTML strana koristejki "ejs" sablonski motor
//* "getForm" - Ova e imeto na f-jata koja se definira kako kontroler
//* "(req, res)" - Ova se parametri na f-jata. "req" e objekt sto go pretstavuva HTTP baranjeto od klientot, a "res" e objektot koj se koristi za sostavuvanje i isprakanje na HTTP odgovorot kon klientot
//* "res.render("formular");" - Ovaa f-ja koristi sablonski motor "ejs" za da go generira HTML. "formular.ejs" e imeto na sablonot koj se koristi za da se generira i prikaze formular na stranicata. Ova generirano vo HTML se vraka kako odgovor na klientot
const getForm = (req, res) => {
  res.render("formular");
};

//* Ovaa linija kod go definira kontrolerot "postForm" koj se koristi za obrabotka na HTTP POST baranja na odredena pateka. Kodot podrazbira deka "studenti" e model koj ovozmozuva dodavanje na studenti vo nekakva baza na podatoci ili slicno
//* "postForm" - Ova e imeto na f-jata koja ja definirame kako kontroler
//* "async (req, res)" - Ovaa f-ja e oznacena kako "async", sto znaci deka moze da sodrzi asinhroni operacii. "req" e objekt sto go pretstavuva HTTP baranjeto od klientot, a "res" e objektot koj se koristi za sostavuvanje i isprakanje na HTTP odgovor kon klientot
//* "let data = { ... };" - Ovaa linija kreira objekt "data" so podatocite sto se dobivaat od teloto na HTTP baranjeto. Vo ovoj slucaj, ova oznacuva deka se ocekuvaat podatocite za ime, prezime i prosek
//* "await studenti.add(data);" - Ovaa linija koristi asinhrona operacija za dodavanje na studenti vo bazata na podatoci. "await" se koristi za da se zaceka zavrsuvanje na operacijata pred da se prodolzi so sledniot red. "studenti" modelot ima metod "add" koj ovozmozuva dodavanje na student vo bazata na podatoci
//* "res.redirect("/studenti");" - Ovaa f-ja ja koristi "res" objektot za da go prenasoci korisnikot kon patekata "/studenti" otkako studentot ke bide dodaden. Ova a e korisno za prikazuvanje na azuriranata lista na studenti
const postForm = async (req, res) => {
  let data = {
    ime: req.body.ime,
    prezime: req.body.prezime,
    prosek: req.body.prosek,
  };
  await studenti.add(data);

  res.redirect("/studenti");
};

//* Ovaa linija kod go definira kontrolerot "getStudenti", koj se koristi za obrabotka na HTTP GET baranja na odredena pateka. Ovoj kontroler prikazuva lista na studenti na web stranata
//* "getStudenti" - Ova e imeto na f-jata koja ja definirame kako kontroler
//* "async (req, res)" - Ovaa f-ja e oznacena kako "async", sto znaci deka moze da sodrzi asinhroni operacii. "req" e objekt sto pretstavuva HTTP baranjeto od klientot, a "res" e objektot koj se koristi za sostavuvanje i isprakanje na HTTP odgovor kon klientot
//* "let data = await studenti.list();" - Ovaa linija koristi asinhroni operacii za da dobie lista na studenti. "await" se koristi za da se zaceka zavrsuvanjeto na operacijata pred da se prodolzi so sledniot red. "studenti" modelot ima metod "list" koj vraka lista na studenti od bazata na podatoci
//* "res.render("studenti", { data });" - Ovaa f-ja koristi "ejs" sablonski motor za da generira HTML koristejki go sablonot "stundenti.ejs". Podatocite sto bea dobieni preku asinhronata operacija se prenesuvaat kako parametar na "stundenti.ejs" sablonot, sto ovozmovuva prikazuvanje na lista na studenti na stranicata
const getStudenti = async (req, res) => {
  let data = await studenti.list();
  res.render("studenti", { data });
};

module.exports = {
  getForm,
  postForm,
  getStudenti,
};
