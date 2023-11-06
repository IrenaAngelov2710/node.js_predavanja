// request - prima nekoja naredba
// response - vraka na primenata naredba

//* Ovoj kod sozdava prost HTTP server vo Node.js koj slusa na porta 10000 i go prikazuva tekstot "Hello World" na web prelistuvacot koga se pristapuva na serverot preku adresata "https://127.0.0.1:10000"
//* Ovaa linija go vcituva vgradeniot modul "http" vo promenlivata "http". Modulot "http" ovozmozuva sozdavanje na HTTP server i rabota so HTTP protokolot vo Node.js
const http = require("http");

//* So pomos na metodot "http.createServer()" se sozdava HTTP server
//* Metodot prifaka callback f-ja koja se povikuva sekoj pat koga serverot prima HTTP baranje ("req") i treba da isprati HTTP odgovor "(res)"
//* Vo ovoj slucaj, pri sekoe baranje, serverot ke go ispraka tekstot "Hello World" kako odgovor na klientot
const server = http.createServer((req, res) => {
  // znaci so res.end methodata ke go ispratime respondot od nasiot server
  res.end("Hello World");
});

//* So pomos na metodot "server.listen()" se ovozmozuva slusanje na odredena porta i IP adresa
//* Vo ovoj slucaj, serverot slusa na porta 10000 i lokalnata IP adresa "127.0.0.1"
//* Koga serverot ke bide uspesno startuvan i slusa na soodvetnata porta, se povikuva callback f-jata so "err" argumentot
//* Ako ima greska pri startuvanje na serverot, se ispisuva "error"
//* Vo sprotivno, se ispisuva "server started on port 10000". Ova znaci deka serverot uspesno startuval i e spremen da go prima baranjeto na klientite
server.listen(10000, "127.0.0.1", (err) => {
  if (err) console.log("error");
  console.log("server started on port 10000");
});

// const handler = (req, res) => {
  // console.log(req);
  // console.log(req.method);
  // console.log(req.headers);
  // /sobiranje/2/5

//   console.log(req.url);

//   const [_, op, a, b] = req.url.split("/");
  // ["", "sobiranje", "2", "5"]
  // split methodata go deli stringot prema parametarto sto e vnatre vo /
  // const ime = "Aleksandar, Maja, Mirka, Petko, Sharko";
  // console.log(ime.split(" "));

//   let o;
//   switch (op) {
//     case "sobiranje":
//       o = Number(a) + Number(b);
//       res.end(`rezultatot e ${o}`);
//       break;
//     case "odzemanje":
//       o = Number(a) - Number(b);
//       res.end(`rezultatot e ${o}`);
//       break;
//     case "delenje":
//       o = Number(a) / Number(b);
//       res.end(`Rezultatot e ${o}`);
//       break;
//     case "mnozenje":
//       o = Number(a) * Number(b);
//       res.end(`Rezultatot e ${o}`);
//       break;
//     default:
//       res.end("OK");
//   }
// };

// const server = http.createServer(handler);
// server.listen(10000, (err) => {
//   if (err) console.log("error");
//   console.log("server started on port 10000");
// });

// //? Servis koj kje obrabotuva ruti od sledniot tip
// //? /ime/aleksandar
// //? /ime/angela
// //? /ime/julija

// //? parno: da, karakteri 5, soglaski: 2, samoglaski

// //! http://127.0.0.1:10000/
