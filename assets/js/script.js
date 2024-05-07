document.addEventListener("DOMContentLoaded", function () {
  // Función para obtener la dirección IP pública del usuario
  async function getUserIP() {
    try {
      // Llamada a un servicio externo para obtener la IP pública del usuario
      const response = await fetch("https://api.ipify.org?format=json");
      if (!response.ok) {
        throw new Error(`Error al obtener la IP: ${response.statusText}`);
      }
      const data = await response.json();
      return data.ip;
    } catch (error) {
      console.error("Error to get, bad conection:", error);
      return null;
    }
  }

  // Función para obtener el tipo de navegador y el sistema operativo del usuario
  function getBrowserAndOS() {
    const userAgent = navigator.userAgent;
    let browser = "Desconocido";
    let os = "Desconocido";

    // Detectar el navegador
    if (userAgent.includes("Chrome")) {
      browser = "Chrome";
    } else if (userAgent.includes("Firefox")) {
      browser = "Firefox";
    } else if (userAgent.includes("Safari")) {
      browser = "Safari";
    } else if (userAgent.includes("MSIE") || userAgent.includes("Trident")) {
      browser = "Internet Explorer";
    }

    // Detectar el sistema operativo
    if (userAgent.includes("Windows NT")) {
      os = "Windows";
    } else if (userAgent.includes("Macintosh")) {
      os = "macOS";
    } else if (userAgent.includes("Linux")) {
      os = "Linux";
    } else if (userAgent.includes("Android")) {
      os = "Android";
    } else if (userAgent.includes("like Mac OS X")) {
      os = "iOS";
    }

    return { browser, os };
  }

  // Función para enviar la IP, User-Agent, tipo de navegador y sistema operativo al servidor
  async function sendIPAndBrowserToServer(ip, userAgent, browser, os) {
    // URL del servidor
    const serverUrl = "https://driving-driving-possum.ngrok-free.app/info";

    try {
      // Realiza una solicitud POST con la IP, User-Agent, tipo de navegador y sistema operativo
      const response = await fetch(serverUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ip,
          userAgent,
          browser,
          os,
        }),
      });

      // Verifica si la respuesta es correcta
      if (response.ok) {
        const data = await response.json();
        console.log("Datos enviados con éxito:", data);
      } else {
        console.error("Error al enviar datos:", response.statusText);
      }
    } catch (error) {
      console.error("Error al enviar datos:", error);
    }
  }

  // Función para ejecutar otros scripts después de que sendIPAndBrowserToServer termine
  function ejecutarAccionesAdicionales() {
    // Redirigir según el idioma
    redirigirSegunIdioma(); // Llama a la función que deseas ejecutar
  }

  // Obtener la IP pública del usuario y el User-Agent (información del navegador)
  getUserIP().then((ip) => {
    if (ip) {
      const userAgent = navigator.userAgent; // Obtener el User-Agent del navegador

      // Obtener el tipo de navegador y el sistema operativo
      const { browser, os } = getBrowserAndOS();

      console.log(
        `Enviando IP: ${ip}, User-Agent: ${userAgent}, Navegador: ${browser}, OS: ${os} al servidor`
      );

      // Llamar a sendIPAndBrowserToServer con la IP, User-Agent, tipo de navegador y sistema operativo
      sendIPAndBrowserToServer(ip, userAgent, browser, os).then(() => {
        // Una vez que sendIPAndBrowserToServer termine, ejecutar otros scripts
        ejecutarAccionesAdicionales();
      });
    } else {
      console.log("No se pudo obtener la IP pública del usuario");
    }
  });
});
