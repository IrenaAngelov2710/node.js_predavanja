//* Ovaa linija na kod go vcituva modulot "express" vo Node.js aplikacijata
const express = require("express");
//* Ovaa linija kod go voveduva modulot "formular" vo Node.js aplikacijata
//* Patekata "./controllers/formular" pretstavuva pateka do datotekata koja go definira modulot "formular"
const formular = require("./controllers/formular");

//* Ovaa linija kreira nova ekspress aplikacija so pomos na f-jata "express()"
//* Aplikacijata se cuva vo promenlivata "app" i ovaa instanca na ekspress objektot ke se koristi za definiranje na ruti za obrabotka na HTTP baranja 
const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

//* Ovie linii kod definiraat ruti vo express aplikacijata i gi povrzuvaat so soodvetni kontroleri od modulot "formular"
//* "app.get("/form", formular.getForm);" - Ovaa linija definira ruta na patekata "/form" za HTTP GET baranja i ja povrzuva so f-jata "getForm" koja se naoga vo modulot "formular". Koga ke se primi GET baranje na patekata "/form", f-jata "getForm" ke se povika i se ocekuva da obraboti i vrati odgovor na baranjeto
//* "app.post("/form", formular.postForm);" - Ovaa linija definira ruta na patekata "/form" za HTTP POST baranja i ja povrzuva so f-jata "postForm" od modulot "formular". Koga ke se primi POST baranje na patekata "/form", f-jata "postForm" ke se povika, sto se ocekuva da obraboti i vrati odgovor na baranjeto
//* "app.get("/studenti", formular.getStudenti);" - Ovaa linija definira ruta na patekata "/studenti" za HTTP GET baranja i ja povrzuva so f-jata "getStudenti" od modulot "formular". Koga ke se primi GET baranje na patekata "/studenti", f-jata "getStudenti" ke se povika, sto se ocekuva da obraboti i vrati odgovor na baranjeto
app.get("/form", formular.getForm);
app.post("/form", formular.postForm);
app.get("/studenti", formular.getStudenti);

//* Ovaa linija ja startuva ekspress aplikacijata da slusa na porta 10000
//* Ako ima greska pri startuvanje na serverot, se prikazuva greska na konzolata. Vo sprotivno se ispisuva porakata "Server started successfully on port 10000", znaci deka serverot e uspesno startuvan i e spremen da gi prima baranjata od klientite
app.listen(10000, (err) => {
  if (err) return console.log(err);
  console.log("Server started successfully on port 10000");
});
