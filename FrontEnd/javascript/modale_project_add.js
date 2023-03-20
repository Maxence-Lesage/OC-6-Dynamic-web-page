const select_category = document.getElementById('photo_categories');
const photo_upload = document.getElementById('photo_upload');
const photo_upload_label = document.querySelector('.photo_upload_label');
const upload_form = document.querySelector('.upload_form');
const upload_title = document.getElementById('photo_title');
const upload_submit = document.getElementById("upload_submit");

/*Récupére la liste des catégories et les rajoutent à la liste des options du formulaire*/
async function categoryList() {

    const reponse = await fetch("http://localhost:5678/api/categories");
    const categories = await reponse.json();

    categories.map((category) => {
        select_category.innerHTML += "<option value=\"" + category.id + "\">" + category.name + "</option>";
    });
}

/*Upload d'une photo => actualise sa prévisualisation*/
photo_upload.addEventListener('change', (event) => {
    imageLoader();
});

/*Ajoute une prévisualisation de la photo contenu dans le formulaire d'upload*/
function imageLoader() {
    if (photo_upload.value) {
        const file = photo_upload.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
            const image = document.createElement('img');
            image.src = reader.result;
            image.classList.add("uploaded_image");
            photo_upload_label.innerHTML = "";
            photo_upload_label.appendChild(image);
        };
    }
}

/*Si les trois champs du formulaire ont été remplis => le bouton valider change de couleur*/
upload_form.addEventListener('change', (event) => {
    if (photo_upload.files.length !== 0 && upload_title && select_category.value) {
        document.getElementById('upload_submit').classList.add('submitGreen');
    }
});

/*Click sur le bouton "Valider" => Ajoute le projet*/
upload_submit.addEventListener('click', (event) => {
    event.preventDefault();
    upload();
});

/*Upload le projet en récupérant les informations du formulaire*/
async function upload() {
    const token = sessionStorage.getItem("token");
    const formData = new FormData(upload_form);

    await fetch("http://localhost:5678/api/works", {
        method: 'POST',
        body: formData,
        headers: {
            'Origin': 'http://localhost:5500',
            'Authorization': `Bearer ${token}`
        }
    }).then(response => response.status)
        .then(code => {
            let text = "";
            switch (code) {
                case 401: text = "Vous n'avez l'autorisation pour faire cela";
                    break;
                case 500: text = "Un erreur inattendu s'est produite";
                    break;
                default: text = "Un erreur inattendu s'est produite";
            }
            if (code === 401) alert(text);
        }).catch(function (error) {
            alert(text);
            console.log(error);
        });
}

/*Click sur l'îcone retour de la modale d'ajout de projet => ramène sur la première modale*/
modale_before.addEventListener('click', () => {
    modales[0].classList.toggle('not_displayed');
    modales[1].classList.toggle('not_displayed');
});