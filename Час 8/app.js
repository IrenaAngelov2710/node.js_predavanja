//! Arhitekturata na edna aplikacija igra klucna uloga za organizacijata i strukturata na samata aplikacija

//! 1. Go organizirame i struktuirame nasiot kod
//! 2. Podelba na sektori
//! 3. Podobruvanje na testiranjeto na nasata aplikacija
//! 4. Odrzlivost
//! 5. Modularnost

//* MVC - arhitektura
//* MVC
//! M - Model e biznis logikata ili logikata za podatocite
//! V - View e zagrizen za prezentacija na izgledot
//! C - Contoller - Kontrolerot e mozokot na aplikacijata, koj vrsi interakcija so modelot i view

//* Ovoj kod go implementira eden ekspres server koj gi definira razlicnite ruti za obrabotka na HTTP GET i POST baranja
//* Isto taka sekoja ruta za obrabotka na baranjata e izolirana vo poseben modul "calculator" koj se vcituva preku "require"

//* Ovaa linija go vcituva modulot "express" vo promenliva "express"
//* "express" e popularen Node.js frejmvork koj se koristi za sozdavanje na web aplikacii i API
const express = require("express");

//* Ovaa linija go vcituva modulot "calculator" od patekata "./controller/calculator" vo promenlivata "calculator"
const calculator = require("./controller/calculator");

//* Ovaa linija kreira nova ekspres aplikacija so pomos na "express()" f-jata i ja zacuvuva vo promenlivata "app"
const app = express();
//* Ovaa linija go postavuva middleware za obrabotka na URL-encoded podatoci
//* Middleware e f-ja koja se izvrsuva pred da se izvrsi nekoja ruta, i obicno se koristi za dodavanje dopolnitelni funkcionalnosti vo aplikacijata
//* Vo ovoj slucaj "express.urlencoded()" middlware se koristi za da se procesiraat podatocite od formata vo HTTP POST baranja
app.use(
  express.urlencoded({
    extended: true,
  })
);

//* Ovie linii definiraat dve ruti za obrabotka na HTTP GET baranja so dinamicki ruti
//* Prvata ruta "/bmi/:weight/:height" e povrzana so f-jata "bmiCalculator" od modulot "calculator", a vtorata ruta "/newton/:mass/:acc" e povrzana so f-jata "calculateForce" od istiot modul
//* Ova znaci deka koga klientot pristapuva na nekoja od ovie ruti (na primer, http://localhost:10000/bmi/70/1.75), soodvetnata ruta od modulot "calculator" ke bide aktivirana
app.get("/bmi/:weight/:height", calculator.bmiCalculator);
app.get("/newton/:mass/:acc", calculator.calculateForce);

//* Ovie dve linii definiraat dve ruti za obratoka na HTTP GET i POST baranja bez parametri
//* Patekata "/calculator" e povrzana so f-ciite "getCalculator" i "postCalculator" od modulot "calculator"
//* Ova znaci koga klientot pristapuva na http://localhost:10000/calculator, se aktivira rutata "getCalculator", a koga klientot ke prati HTTP POST baranje na istata pateka, se aktivira rutata "postCalculator"
app.get("/calculator", calculator.getCalculator);
app.post("/calculator", calculator.postCalculator);

//* Ovaa linija ja startuva ekspres aplikacijata da slusa na porta 10000
//* Ako ima greska pri startuvanje na serverot, se prikazuva greska na konzolata. Vo sprotivno se ispisuva porakata "Server started successfully", znaci deka serverot e uspesno startuvan i e spremen da gi prima baranjata od klientite
app.listen(10000, (err) => {
  if (err) return console.log(err);
  console.log("Server started successfully");
});

//? DA SE KREIRA VO CALCULATOR USTE 6 funkcii
//? DA SE KREIRA NOV HTML FILE STO KJE SE VIKA REZULTAT
//? 1. DA SE PRESMETA PLOSTINA NA PRAVOAGOLNIK
//? 2. DA SE PRESMETA F2C i obratno DA SE IMPLEMENTIRA SWITCGH
//? 3. DA SE KREKIRA KALKULATOR(SWITH || IF ELSE)
//? 4. DA SE KREIRA FUNKCIJA STO PRESMETUVA SILA
//? 5. DA SE PRESMETA PLOSTINA NA TRIAGOLNIK
//? SITE OVIE FUNKCII DA VRAKJAAT WEB STRANIICA
//? STRANICATA DA IMA NEKAKOV STYLING(boi, background, flex, border)
//? VO WEB STRANICATA DA IMA  NASLOV ZA STO SLUZI REZULTATOT
//? I DA IMA PARAGRAPH SO KOJ KJE SE OBNASUNVA ZADADENATA FUNKCIJA
