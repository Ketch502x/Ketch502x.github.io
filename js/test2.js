function myFunction(){
Push.Permission.request();
Push.create('Hi there!', {
    body: 'This is a notification.',
    icon: 'logo.png',
    timeout: 8000,               // Timeout before notification closes automatically.
    vibrate: [100, 100, 100],    // An array of vibration pulses for mobile devices.
    onClick: function() {
        // Callback for when the notification is clicked. 
        console.log(this);
    }  
});
}