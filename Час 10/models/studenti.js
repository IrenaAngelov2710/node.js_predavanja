//* Ovaa linija kod go voveduva modulot "fs"(File System) vo Node.js aplikacijata. Modulot "fs" ovozmozuva interakcija so datotekovniot sistem na operativniot sistem, vklucuvajki citanje i pisuvanje na datoteki, kreiranje i brisenje na direktorii i upravuvanje so razlicni aspekti na datotekovniot sistem
const fs = require("fs"); 

//* Ovaa linija kod definira konstanta "DATA_SOURCE" koja ja sodrzi patekata do datotekata "stundenti.json" vo Node.js aplikacijata
//* "const DATA_SOURCE" - Ova definira konstanta so imeto "DATA_SOURCE"
//* "${__dirname}" - Ova e globalna promenliva vo Node.js koja go sodrzi apsolutniot pat na tekovniot direktorium kade se naoga tekovniot fajl
//* "/../studenti.json" - Podolnuvanje na patekata. Oznacuva deka "stundenti.json datotekata" se naoga vo direktoriumot od tekovniot fajl
const DATA_SOURCE = `${__dirname}/../studenti.json`;

const readFile = async () => {
  return new Promise((success, fail) => {
    fs.readFile(DATA_SOURCE, "utf8", (err, data) => {
      if (err) {
        return fail(err);
      }
      return success(data);
    });
  });
};

const writeFile = async (data) => {
  return new Promise((success, fail) => {
    fs.writeFile(DATA_SOURCE, data, (err) => {
      if (err) {
        return fail(err);
      }
      return success();
    });
  });
};

const add = async (data) => {
  let file = await readFile();
  let fileData = JSON.parse(file);
  fileData.push(data);
  await writeFile(JSON.stringify(fileData));
};

const list = async () => {
  let file = await readFile();
  let fileData = JSON.parse(file);
  return fileData;
};

module.exports = {
  add,
  list,
};
