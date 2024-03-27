document
  .getElementById("codeInput")
  .addEventListener("input", function (event) {
    var code = event.target.value;
    var formattedCode = code
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d{3})/, "$1-$2");
    event.target.value = formattedCode;
  });

document
  .getElementById("codeForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var code = document.getElementById("codeInput").value.replace(/\D/g, ""); // Elimina caracteres no numéricos

    // Verifica que el código tenga exactamente 6 dígitos
    if (code.length === 6) {
      // Aquí puedes definir tus códigos y las URLs a las que redirigir
      var codes = {
        202412: "/game/pacman",
        202413: "/game/flappybird",
        111111: "/",
        101010: "/es/activator",
        202403: "/es/games",
        202402: "/es/old_games",
        202034: "/es/afinator",
        101004: "/p/e",
        // Agrega más códigos y URLs según tus necesidades
      };

      // Verifica si el código ingresado está en la lista
      if (codes[code]) {
        var toast = document.getElementById("toast");
        toast.innerText = "¡Lo lograste!";
        toast.classList.add("show");
        setTimeout(function () {
          toast.classList.remove("show");
        }, 1000); // Oculta el mensaje después de 1 segundo

        // Redirige después de mostrar el "Toast"
        setTimeout(function () {
          window.location.href = codes[code];
        }, 2000); // Redirige después de 2 segundos
      } else {
        var toast = document.getElementById("toast");
        toast.innerText = "Código incorrecto";
        toast.classList.add("show");
        setTimeout(function () {
          toast.classList.remove("show");
        }, 2000); // Oculta el mensaje después de 2 segundos
      }
    } else {
      var toast = document.getElementById("toast");
      toast.innerText = "El código debe tener exactamente 6 dígitos";
      toast.classList.add("show");
      setTimeout(function () {
        toast.classList.remove("show");
      }, 2000); // Oculta el mensaje después de 2 segundos
    }
  });
