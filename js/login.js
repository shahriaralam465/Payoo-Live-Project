document.getElementById('btn-log-in').addEventListener('click', function (event) {
    event.preventDefault();

    const mobile = document.getElementById('input-number').value;
    const pin = document.getElementById('input-pin').value;

    if (mobile === '01860526651' && pin==='1234'){
        console.log('you are logged in');
        window.location.href = './home.html';
    }
    else{
        console.log('please insert correct information')
    }
});


