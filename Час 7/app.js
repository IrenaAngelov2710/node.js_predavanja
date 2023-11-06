//! KAKO INICIJALIZIRAME APLIKACIJA
//* "npm init -y" e komanda vo komandnata linija(terminalot) koja avtomatski generira "package.json" datoteka za nov proekt vo Node.js
//* Ovaa komanda e del od Node Package Manager(NPM) i se koristi za inicijaliziranje na nov proekt i dodavanje pocetni informacii za nego
//* npm init  (-y so ova se odbiraat default parametri)

//! ZA DA INSTALIRAME NADVORESEN MODUL SE KORISTI
//* npm install (imeto na modulot)

//* Ovoj kod go vcituva modulot "express" vo promenliva "express", a potoa kreira nova ekspres aplikacija i ja zacuvuva vo promenlivata "app"
//* Ovaa linija go vcituva modulot "express" vo promenliva "express"
//* "express" e popularen Node.js frejmvork koj se koristi za sozdavanje na wet aplikacii i API
//! Go povikuvame express modulot
const express = require("express");

//* Ovaa linija kreira nova ekspres aplikacija so pomos na "express()" f-jata i ja zacuvuva vo promenliva "app"
const app = express(); //! Kreirame nova express aplikacija

//! So app.get() definirame ruta sto ke se spravuva so baranjata HTTP GET do odredena URL adresa

app.get("/", (req, res) => {
  res.send("Welcome");
});
app.get("/zdravo", (req, res) => {
  res.send("Zdravo svetu!!!");
});

app.get("/zdravo/:ime/:prezime", (req, res) => {
  console.log(req.params);
  res.send(`Zdravo ${req.params.ime}!!! `);
});

app.get("/calculator/:op/:a/:b", (req, res) => {
  console.log(req.params);
  switch (req.params.op) {
    case "sobiranje":
      return res.send(`${Number(req.params.a) + Number(req.params.b)}`);
    case "odzemanje":
      return res.send(`${Number(req.params.a) - Number(req.params.b)}`);
    case "delenje":
      return res.send(`${Number(req.params.a) / Number(req.params.b)}`);
    case "mnozenje":
      return res.send(`${Number(req.params.a) * Number(req.params.b)}`);
    default:
      return res.send("Nepoznat operator!");
  }
});

app.get("/konverter/:op/:a", (req, res) => {
  if (req.params.op === "f2c") {
    const farenhajt = (req.params.a - 32) * 0.556;
    return res.send(`${farenhajt}`);
  } else if (req.params.op === "c2f") {
    const celzius = (req.params.a * 1.8) + 32;
    return res.send(`${celzius}`);
  } else {
    res.send("Imate pogresna operacija selektirano");
  }
});

//! So app.listen moze da ja startuvame nasata web aplikacija i da ja napravime dostapna za korisnicite
app.listen(10000, (err) => {
  if (err) return console.log(err);
  console.log("Server started successfully on port 10000");
});

//! Za npm run start da funkcionira vo package.json vo delot za script
//! stavame:  "start": "nodemon app.js"

//* GET i POST se dva osnovni metodi za prenesuvanje podatoci preku HTTP protokolot
//* Ovie metodi se koristat vo web aplikacii za komunikacija pomegu klientite(korisnicite) i serverite(web serverite)
//* Glavnata razlika pomegu niv e vo toa kako se prenesuvaat podatocite i kako se cuvaat vo serverot

//* 1. GET metod:
//* -podatocite se prenesuvaat preku URL-ot kako del od query string(parametri prikaceni na krajot na URL-ot)
//* -parametrite se vidlivi vo URL-ot i moze lesno da bidat zabelezani i zacuvani vo istorijata na prebaruvacot ili serverskite logovi
//* -GET metodot ima ogranicena dolzina na podatoci sto moze da se prenesat, sto go pravi nesoodveten za prenesuvanje na golemi obemi na podatoci

//* 2. POST metod:
//* -podatocite se prenesuvaat vo teloto na HTTP baranjeto, a ne vo URL-ot kako pri GET metodot
//* -POST meotodot moze da prenese poveke podatoci i ne gi ogranicuva na opredelana dolzina
//* -osnovnata namena na POST metodot e da prenesuva podatoci do serverot, kako sto se formularite, sliki, tekst itn
//* -poradi toa sto podatocite se prenesuvaat vo teloto na baranjeto, ne se vidlivi vo URL-ot, pa zatoa se smeta deka POST metodot e posiguren vo odnos na prenesuvanjeto na cuvstvitelni podatoci

//* Vo zaklucok, GET metodot se koristi za prevzemanje na podatoci od serverot, dodeka POST metodot se koristi za prenesuvanje na podatoci do serverot, kade sto podatocite se prenesuvaat vo teloto na baranjeto i ne se vidlivi vo URL-ot

//? Da se rekreira domasnoto od chas 6
//? Da se instalira Postman aplikacija i da se istrazi
//? Inaku se koristi za polesno testiranje na web aplikacija
