var _$_2f58=["12/24/2023 11:59 PM","span#days","querySelector","span#hours","span#minutes","span#seconds","floor","textContent"];const DATE_TARGET= new Date(_$_2f58[0]);const SPAN_DAYS=document[_$_2f58[2]](_$_2f58[1]);const SPAN_HOURS=document[_$_2f58[2]](_$_2f58[3]);const SPAN_MINUTES=document[_$_2f58[2]](_$_2f58[4]);const SPAN_SECONDS=document[_$_2f58[2]](_$_2f58[5]);const MILLISECONDS_OF_A_SECOND=1000;const MILLISECONDS_OF_A_MINUTE=MILLISECONDS_OF_A_SECOND* 60;const MILLISECONDS_OF_A_HOUR=MILLISECONDS_OF_A_MINUTE* 60;const MILLISECONDS_OF_A_DAY=MILLISECONDS_OF_A_HOUR* 24;function updateCountdown(){const _0x149C4= new Date();const _0x149B0=DATE_TARGET- _0x149C4;const _0x149D8=Math[_$_2f58[6]](_0x149B0/ MILLISECONDS_OF_A_DAY);const _0x149EC=Math[_$_2f58[6]]((_0x149B0% MILLISECONDS_OF_A_DAY)/ MILLISECONDS_OF_A_HOUR);const _0x14A00=Math[_$_2f58[6]]((_0x149B0% MILLISECONDS_OF_A_HOUR)/ MILLISECONDS_OF_A_MINUTE);const _0x14A14=Math[_$_2f58[6]]((_0x149B0% MILLISECONDS_OF_A_MINUTE)/ MILLISECONDS_OF_A_SECOND);SPAN_DAYS[_$_2f58[7]]= _0x149D8;SPAN_HOURS[_$_2f58[7]]= _0x149EC;SPAN_MINUTES[_$_2f58[7]]= _0x14A00;SPAN_SECONDS[_$_2f58[7]]= _0x14A14}updateCountdown();setInterval(updateCountdown,MILLISECONDS_OF_A_SECOND)
function cambiarFondoImagen(url) {
  const bgImageElement = document.querySelector(".bg-image");
  bgImageElement.style.backgroundImage = "url('" + url + "')";
}
if (_0x149B0 <= 0) {
  clearInterval(intervalId);
  cambiarFondoImagen("../img/christmas.jpg");
}