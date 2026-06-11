// Callback Function
// function unduhGambar(url, callbackSelesai) {
//   console.log(`Mulai mengunduh dari: ${url}...`);

//   setTimeout(() => {
//     const fileGambar = 'foto-profil.png';
//     console.log('Unduhan selesai!');

//     callbackSelesai(fileGambar);
//   }, 3000);
// }

// function tampilkanDiWeb(gambar) {
//   console.log(`🖼️ Menampilkan ${gambar} ke layar browser.`);
// }

// unduhGambar('https://server.com/foto.png', tampilkanDiWeb);

// Promise
function unduhGambarPromise(url) {
  return new Promise((resolve, reject) => {
    console.log(`Mulai mengunduh dari: ${url}...`);

    let internetLancar = true;

    setTimeout(() => {
      if (internetLancar) {
        const fileGambar = 'foto-profil.png';
        resolve(fileGambar);
      } else {
        reject('Gagal mengunduh karena koneksi internet putus!');
      }
    }, 3000);
  });
}

// unduhGambarPromise('https://server.com/foto.png')
//   .then((gambar) => {
//     console.log(`🖼️ Menampilkan ${gambar} ke layar browser.`);
//   })
//   .catch((error) => {
//     console.error(`❌ Error hrd: ${error}`);
//   });

// Async Await
async function unduhGambarAsync() {
  try {
    const gambar = await unduhGambarPromise('https://server.com/foto.png');
    console.log(`🖼️ Menampilkan ${gambar} ke layar browser.`);
  } catch (error) {
    console.log(error);
  }
}

unduhGambarAsync();
