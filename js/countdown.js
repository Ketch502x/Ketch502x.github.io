const BtnDescarga = document.querySelector(".descarga-btn");
const linkDescarga = "https://www.mediafire.com/file/xctj1prawpf80qu/boton-descarga.zip/file";

const initTimer = () => {
    // Comprobación de si la cuenta se ha cumplido ya. De ser así se dirige al link de descarga
    if (BtnDescarga.classList.contains("disable-timer")) {
        BtnDescarga.innerHTML = `<span class="icon material-symbols-rounded">vertical_align_bottom</span>
                                    <span class="text">Volver a descargar</span>`;
        return (location.href = linkDescarga);
    }

    let timer = BtnDescarga.dataset.timer;
    BtnDescarga.classList.add("timer");
    BtnDescarga.innerHTML = `Tu descarga comenzará en <b>${timer}</b> segundo/s`;

    const initCounter = setInterval(() => {
        // Cuenta regresiva
        if (timer > 0) {
            timer--;
            return (BtnDescarga.innerHTML = `Tu descarga comenzará en <b>${timer}</b> segundo/s`);
        }
    
    clearInterval(initCounter);
    location.href = linkDescarga; // Descarga del archivo 
    BtnDescarga.innerText = "Tu archivo se está descargando ...";
    
    // Volver a descargar
    setTimeout(() => {
        BtnDescarga.classList.replace("timer", "disable-timer");
        BtnDescarga.innerHTML = `<span class="icon material-symbols-rounded">vertical_align_bottom</span>
                                    <span class="text">Descargar otra vez</span>`;
        }, 3000);
    }, 1000);
};

BtnDescarga.addEventListener("click", initTimer);