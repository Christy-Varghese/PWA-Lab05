// Name: Christy Varghese
// Student ID: 1082636
// Course: INFO 6128
// Date: 13 Nov 2022
// Professor: Marcelo Hespanhol
// Lab 04
// Link: https://christy-varghese.github.io/Lab04/




// service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service_worker.js', {
                scope: '/PWA-Lab05/'
            })
            .then((reg) => {
                console.log('Service worker registered.', reg);
            })
            .catch((err) => {
                console.log('Service worker registration failed.', err);
            });
    });
} else {
    console.log('Service worker not supported.');
}


var appNav = document.getElementById('appNavigator');

function onClickAbout() {
  appNav.pushPage('about.html');
}

function onClickHome() {
    appNav.pushPage('home.html');
}

function onClickContact() {
    appNav.pushPage('contact.html');
}

function saveContact(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var data = {
        name: name,
        email: email,
        phone: phone
    };
    console.log(data);
    if (name == "" || email == "" || phone == "" ){
        ons.notification.alert('Please fill all fields');
    } else {
        ons.notification.alert('Your contact has been sent successfully');
    }
}