const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const angkaKomputer = Math.floor(Math.random() * 10) + 1;
let sisaNyawa = 3;

console.log('=== GAME TEBAK ANGKA (1 - 10) ===');
console.log('Kamu punya 3 kesempatan untuk menebak.\n');

function mainGame() {
  readline.question('Masukkan tebakanmu: ', (inputUser) => {
    const tebakan = parseInt(inputUser);

    if (tebakan === angkaKomputer) {
      console.log('🎉 MENANG! Tebakanmu tepat sekali!');
      readline.close();
    } else {
      sisaNyawa--;

      if (sisaNyawa === 0) {
        console.log(`❌ Kamu Kalah! Angka yang benar adalah: ${angkaKomputer}`);
        readline.close();
      } else {
        if (tebakan > angkaKomputer) {
          console.log('📈 Terlalu Besar!');
        } else {
          console.log('📉 Terlalu Kecil!');
        }
        console.log(`(Sisa kesempatanmu: ${sisaNyawa} kali lagi)\n`);
        mainGame(); // Ulang game
      }
    }
  });
}

mainGame();
