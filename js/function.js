const encryptedLink = "U2FsdGVkX1/lwFE77T3Y/Ny8XbLEvzUm+IaOJOb6XGXk38brDNdKc2NZ71JLQyULbQsQINQAbkjMonEPUAxTIWFNTrhZVM8Gk3TI6/y4vXo="; // Coloca aquí el enlace encriptado

    const decryptedLink = CryptoJS.AES.decrypt(encryptedLink, 'dw-1').toString(CryptoJS.enc.Utf8);
    const downloadLink = document.getElementById('dw-1');
    downloadLink.href = decryptedLink;
    downloadLink.onclick = function () {
        setTimeout(() => {
            window.location.href = decryptedLink;
        }, 100);
        return false;
    };