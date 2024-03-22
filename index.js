const CryptoJS = require('crypto-js');

const link = 'https://www.healtpix.tk/download/src/app/app.apk';
const encryptedLink = CryptoJS.AES.encrypt(link, 'dw-1').toString();

console.log(encryptedLink);
