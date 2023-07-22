document.addEventListener("DOMContentLoaded", function() {
    var lastNotificationTime = localStorage.getItem('lastNotificationTime');
    var currentTime = Date.now();

    if (!lastNotificationTime || (currentTime - lastNotificationTime) > 3600000) { 
        setTimeout(function() {
            mostrarNotificacion();
            localStorage.setItem('2rVvQHDt@w$p1dneIMU#fF*Q*a4oDqmXsCu#zVD', currentTime);
        }, 5000); 
    }
});

function mostrarNotificacion() {
    if ('Notification' in window) {
        Notification.requestPermission().then(function (permission) {
            if (permission === 'granted') {
                var options = {
                    body: '¡Hay una nueva versión!',
                    icon: '../img/mc-logo.jpg' 
                };
                var notificacion = new Notification('Version 1.20', options);
                
                
                notificacion.onclick = function(event) {
                    window.location.href = '/es/downloads'; 
                };

                setTimeout(function() {
                    notificacion.close();
                }, 5000);
            }
        });
    }
}