function myFunction(){
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
    }if (Notification.permission !== 'denied') {
        Notification.requestPermission(function (permission) {
            // Acción si el usuario acepta.
        });
    }if (Notification.permission === "granted") {
        // Si está bien vamos a crear una notificación.
    }if (Notification.permission === "granted") {
        // Si está bien vamos a crear una notificación
        // Primero vamos a crear una variables las 
        // cuales forman nuestra norificación
        var body = "Hola, el permiso está concedido siuu";
        var icon = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.m.wikipedia.org%2Fwiki%2FArchivo%3ACheck_green_circle.svg&psig=AOvVaw3IYO8jJoKN4EiG-S4Qk8sE&ust=1679890509941000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLiyyvbd-P0CFQAAAAAdAAAAABAE";
        var title = "Notificación";
        var options = {
            body: body,      //El texto o resumen de lo que deseamos notificar.
            icon: icon,      //El URL de una imágen para usarla como icono.
            lang: "ES",      //El idioma utilizado en la notificación.
            tag: 'notify',   //Un ID para el elemento para hacer get/set de ser necesario.
            dir: 'auto',     // izquierda o derecha (auto).
            renotify: "true" //Se puede volver a usar la notificación, default: false.
        }
        // Creamos la notificación con las opciones que pusimos arriba.
        var notification = new Notification(title,options);
        // Cerramos la notificación.
        setTimeout(notification.close.bind(notification), 5000);
    }
}