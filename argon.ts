import * as argon from 'argon2';

argon.hash(process.argv[2]).then(console.log)