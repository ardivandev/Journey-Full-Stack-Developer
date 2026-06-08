let sisaWaktu = 5;

let hitungMundur = setInterval(() => {
  console.log(`Bom meledak dalam: ${sisaWaktu} detik`);
  sisaWaktu--;

  if (sisaWaktu === 0) {
    clearInterval(hitungMundur);
    console.log('💥 BOOOM!!! BOM MELEDAK! 💥');

    setTimeout(() => {
      console.log('🚑 Tim medis sedang menuju ke lokasi...');
    }, 2000);
  }
}, 1000);
