function redirigirDespuesDeRetraso(url) {
  setTimeout(function () {
    window.location.href = url;
  }, 1500);
  return true;
}
