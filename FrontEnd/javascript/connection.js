const form = document.getElementById('login_form');

/*Click sur "Envoyer" => Envoie les données d'identification au serveur*/
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const objectToSend = {
        email: formData.get('email'),
        password: formData.get('pass')
    }

    login(JSON.stringify(objectToSend));

});

/*Requête serveur avec les identifiants de connexion && réponse adaptée*/
async function login(data) {
    await fetch('http://localhost:5678/api/users/login', {
        method: 'POST',
        body: data,
        headers: {
            'Content-Type': 'application/json',
            'Origin': 'http://localhost:5500'
        }
    }).then(res => res.json())
        .then(json => {
            if (json.token) valid_credential(json.token);
            else invalid_credential();
        }).catch(function (error) {
            console.log(error);
        });
}

/*Rajoute le token en session storage && ramène à la page d'accueil*/
function valid_credential(data) {
    sessionStorage.setItem("token", data);
    window.location.replace("../index.html");
}

/*Erreur dans les identifiants => texte d'erreur avec animation destiné à l'utilisateur*/
function invalid_credential() {
    const errorText = document.querySelector('.credential_error');
    if (errorText.classList.contains("not_displayed")) {
        errorText.classList.remove("not_displayed");
        errorText.classList.add("credential_animation");
    } else {
        errorText.classList.remove("credential_animation");
        void errorText.offsetWidth;
        errorText.classList.add("credential_animation");
    }
}