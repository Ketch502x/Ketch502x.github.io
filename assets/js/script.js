document.addEventListener("DOMContentLoaded", function () {
  // Función para obtener la dirección IP del usuario
  async function getUserIP() {
    // Utiliza un servicio externo para obtener la IP del usuario
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    return data.ip;
  }

  // Función para enviar la IP y el navegador al servidor
  async function sendIPAndBrowserToServer(ip, userAgent) {
    // URL del servidor
    const serverUrl =
      "https://driving-driving-possum.ngrok-free.app/info";

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
      console.log(data.message); // Imprimir el mensaje del servidor
      return null;
    } else {
      console.error("Error al enviar datos:", response.statusText);
      return null;
    }
  }

  // Obtiene la IP del usuario y el User-Agent (información del navegador)
  getUserIP().then((ip) => {
    const userAgent = navigator.userAgent; // Obtener el User-Agent del navegador
    sendIPAndBrowserToServer(ip, userAgent);
  });
});
