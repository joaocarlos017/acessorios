document.getElementById('whatsapp').addEventListener('click', function() {
    window.open('https://api.whatsapp.com/send/?phone=5567993374361&text&type=phone_number&app_absent=0', '_blank');
});

document.getElementById('email').addEventListener('click', function() {
    window.location.href = 'mailto:seuemail@exemplo.com';
});
