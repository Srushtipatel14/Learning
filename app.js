const crypto = require('crypto');

console.time('total');

for (let i = 0; i < 10; i++) {
  console.time(`Task ${i}`);

  crypto.pbkdf2('pass', 'salt', 5000000, 64, 'sha512', () => {
    console.timeEnd(`Task ${i}`);
  });
}