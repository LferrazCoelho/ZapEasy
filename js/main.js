var numberElement = document.querySelector('#number');
var msgElement = document.querySelector('#msg');
var buttonElement = document.querySelector('#send');

buttonElement.onclick = function() {
    var number = numberElement.value;
    var msg = msgElement.value;
    buttonElement.setAttribute('href', `https://api.whatsapp.com/send?phone=+55${number}&text=${msg}`);
    setTimeout(function(){ location.reload(); }, 5000);
}