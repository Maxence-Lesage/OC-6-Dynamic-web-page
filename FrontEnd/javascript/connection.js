const form = document.getElementById('login_form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const objectToSend = {
        email: formData.get('email'),
        password: formData.get('pass')
    }


    login(JSON.stringify(objectToSend));

});

async function login(data) {
    await fetch('http://localhost:5678/api/users/login', {
        method: 'POST',
        body: data,
        headers: {
            'Content-Type': 'application/json',
            'Origin': 'http://localhost:5500'
        }
    }).then(function (response) {
        return response.text();
    }).then(function (text) {
        console.log(text);
    }).catch(function (error) {
        console.log(error);
    });
}