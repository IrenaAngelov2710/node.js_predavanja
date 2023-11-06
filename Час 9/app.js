//* Ovaa linija na kod go vcituva modulot "express" vo Node.js aplikacijata
const express = require("express");
//* Ovaa linija go vcituva modulot "ejs" vo aplikacijata
//* "ejs" e skratenica od  "Embedded JavaScript"(vmetnat Javacript). Toa e sablonski motor za Javasript koj ovozmozuva dinamicko generiranje na HTML, XML i drugi vidovi na tekstovi
let ejs = require("ejs");

//* Ovaa linija kreira nova ekspres aplikacija so pomos na f-jata "express()"
//* Aplikacijata se cuva vo promenlivata "app" i ovaa instanca na ekspress objektot ke se koristi za definiranje na ruti za obrabotka na HTTP baranja 
const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

let data = {
  ime: "Pero",
  prezime: "Perovskii",
  niza: ["Skopje", "Bitola", "Kumanovo", "Tetovo", "Ohrid", "Veles"],
  studenti: [
    { ime: "Pero", prezime: "Perovski", prosek: 9.2 },
    { ime: "Janko", prezime: "Jankovski", prosek: 8.2 },
    { ime: "Stanko", prezime: "Stankovski", prosek: 7.4 },
    { ime: "Ivan", prezime: "Ivanovkski", prosek: 7.0 },
  ],
};

let domasna = {
  ime: "vase ime",
  prezime: "vase prezime",
  ovoshje: ["Jabolko, Praska, Kajsija, Krusa"],
  zelenchuk: ["Krastavica", "Zelka", "Brokula", "Domat"],
  vitmini: [
    { ime: "Jabolko", vitamin: "C", mineral: "kalcium" },
    { ime: "Krastavica", vitamin: "A", mineral: "Kalium" },
    { ime: "Praska", vitamin: "B", mineral: "Magnezium" },
    { ime: "Brokula", vitamin: "D", mineral: "Zelezo" },
    { ime: "Domat", vitamin: "G", mineral: "Srebro" },
  ],
};

//* Ovaa linija kod e del od Express aplikacijata i definira obrabotka na HTTP GET baranja na patekata "/"(osnovnata pateka) na serverot
//* "app.get("/") - Ovaa f-ja definira kako aplikacijata treba da odgovori na HTTP GET baranja na patekata "/". Vo ovoj slucaj, "GET" metodot se koristi za zemanje na podatoci od serverot
//* "(req, res) => { ... }" - Ova e anonimna f-ja koja se povikuva koga ke se primi GET baranje na patekata "/". "req" e objekt sto pretstavuva HTTP baranjeto od klientot, a "res" e objektot koj se koristi za sostavuvanje i isprakanje na HTTP odgovor kon klientot
//* "res.render("index", data)" - Ovaa f-ja go koristi "ejs" sablonskiot motor za da generira HTML koristejki go sablonot "index.ejs" i podatocite "data". Toa znaci deka "index.ejs" sablonot se procesira so vmetnuvanje na podatocite od "data" i rezultatot ke bide vklucen vo HTTP odgovorot
//* Vo celosen kontekst, ovaa linija kod generira HTML strana koja se vraka na klientot kako odgovor na GET baranjeto na patekata "/". Sablonskiot "index.ejs" se koristi za generiranje na HTML, i podatocite "data" se vmetnuvaat vo sablonot pred da se vrati na klientot kako rezultat
app.get("/", (req, res) => {
  res.render("index", data);
});

//* Ovaa linija kod e del od Express aplikacijata i definira obrabotka na HTTP POST baranja na patekata "/"(osnovnata pateka) na serverot
//* "app.post("/")" - Ovaa f-ja definira kako aplikacijata treba da odgovori na HTTP POST baranja na pateka "/". "POST" metodot se koristi za prakanje podatoci kon serverot, obicno za kreiranje ili azuriranje na resursi
//* "(req, res) => { ... }" - Ova e anonimna f-ja koja se povikuva koga ke se primi POST baranje na patekata "/". "req" e objektot sto pretstavuva HTTP baranjeto od klientot, a "res" e objektot koj se koristi za sostavuvanje i isprakanje na HTTP odgovorot kon klientot
//* "console.log(req.body);" - Ovaa linija go prikazuva teloto na HTTP baranjeto vo konzolata. Teloto na baranjeto se koristi cesto za prenos na podatocite kako JSON ili formularski podatoci
//* "const novStudent = { ... }" - Ovaa linija kreira objekt "novStudent" so podatocite koi se primeni na teloto na HTTP baranjeto. Ova predpostavuva deka baranjeto vklucuva parametri kako "ime", "prezime" i "prosek"
//* "data.studenti.push(novStudent);" - Ovaa linija go dodava objektot "novStudent" vo nizata "studenti" so nekakvi podatoci "data"
//* "res.render("index", data); - Ovaa f-ja go koristi "ejs" sablonskiot motor za da generira HTML koristejki go sablonot "index.ejs" i podatocite "data"
app.post("/", (req, res) => {
  console.log(req.body);
  const novStudent = {
    ime: req.body.ime,
    prezime: req.body.prezime,
    prosek: req.body.prosek,
  };
  data.studenti.push(novStudent);

  res.render("index", data);
});

//* Ovaa linija kod e del od Express aplikacijata i definira obrabotka na HTTP POST baranja na dinamicka pateka "/delete/:ime" na serverot. Ovaa pateka sodrzi parametri ":ime", koj parametar moze da bide razlicno ime na studenti
//* "app.post("/delete/.ime")" - Ovaa f-ja definira kako aplikacijata treba da odgovori na HTTP POST baranja na patekata "/delete/:ime". Ova e dinamicka pateka kade ":ime" pretstatvuva parametar koj moze da bide razlicno studentsko ime
//* "(req, res) => { ... }" - Ova e anonimna f-ja koja se povikuva koga ke se primi POST baranje na dinamickata pateka "/delete/:ime". "req" e objekt sto pretstavuva HTTP baranjeto od klientot, a "res" e objektot koj se koristi za sostavuvanje i isprakanje na HTTP odgovor kon klientot
//* "res.redirect("/");" - Ovaa f-ja go prenasocuva korisnikot na osnovnata pateka "/" otkako logikata za brisenje ke bide izvrsena. Ova moze da bide korisno za da se prikaze azuriranata lista na studenti otkako eden student bil izbrisan
app.post("/delete/:ime", (req, res) => {
  //? DA SE KREIRA LOGIKA KAKO KJE GO BRISHEME STUDENTOT
  res.redirect("/");
});

//* Ovaa linija ja startuva ekspres aplikacijata da slusa na porta 9000
//* Ako ima greska pri startuvanje na serverot, se prikazuva greska na konzolata. Vo sprotivno se ispisuva porakata "succesfully started on port 9000", znaci deka serverot e uspesno startuvan i e spremen da gi prima baranjata od klientite
app.listen(9000, (err) => {
  if (err) return console.log(err);
  console.log("succesfully started on port 9000");
});

//? DA SE KREIRA CONTROLLER VO KOJ KONROLER KJE BIDAT OVIE FUNKCII
//? Na ruta "/zelencuk" da se kreira web stranica koja kje gi socinuva informaciite od objketot domasna
//? da post methoda na "/zelencuk" so koja kje moze da dodavame novi zelencuci i ovoshja
