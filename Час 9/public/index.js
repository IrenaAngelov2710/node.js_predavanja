//* Ovaa f-ja go pretstavuva klientskiot Javascript kod koj se koristi za brisenje na student preku izvrsuvanje HTTP DELETE baranje kon serverot
//* "fetch('http://localhost:9000/delete/' + ime, { method: 'DELETE' })" - Ovaa linija ja koristi f-ja "fetch" za da isprati HTTP DELETE baranje kon serverot. URL-to e konstruirame so dodavanje na imeto na studentot "ime" na krajot na URL-to. Ova go praka baranjeto kon rutata za brisenje na studentot na serverot
//* ".then(res => res.text())" - Ovoj del od kodot vraka tekstualna sostojba na HTTP odgovorot koj bil dobien od serverot
//* ".then(res => { location.reload(); })" -  Ovoj del od kodot se izvrsuva koga baranjeto i obrabotkata na odgovorot ke zavrsi uspesno. F-jata "location.reload()" se koristi za osvezuvanje na tekovnata web stranica, sto rezultira so prikazuvanje na azuriranata lista na studenti otkako eden student e izbrisan
function deleteStudent(ime) {
    fetch('http://localhost:9000/delete/' + ime, {
      method: 'DELETE',
    })
    .then(res => res.text())
    .then(res => {
      location.reload();
    })
  };