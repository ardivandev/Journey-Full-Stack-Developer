const komentarUser =
  'Kemarin saya melihat anjing penjaga menggonggong sangat keras, lalu lewatlah seorang bajingan yang melemparinya batu.';

function sensorKalimat(kalimatUtuh, ...kataDilarang) {
  for (kata of kataDilarang) {
    kalimatUtuh = kalimatUtuh.replaceAll(kata, '*'.repeat(kata.length));
  }
  return kalimatUtuh;
}

const hasilBersih = sensorKalimat(komentarUser, 'anjing', 'bajingan');
console.log(hasilBersih);
