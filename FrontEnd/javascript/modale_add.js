async function categoryList() {

    const reponse = await fetch("http://localhost:5678/api/categories");
    const categories = await reponse.json();

    const select_category = document.getElementById('photo_category');
    categories.map((category) => {
        select_category.innerHTML += "<option value=\"" + category.id + "\">" + category.name + "</option>";
    });
}

categoryList();

const photo_upload = document.getElementById('photo_upload');
const photo_upload_label = document.querySelector('.photo_upload_label');

photo_upload.addEventListener('change', (event) => {
    imageLoader();
});

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

imageLoader();

const upload_form = document.querySelector('.upload_form');
const upload_image = document.getElementById('photo_upload');
const upload_title = document.getElementById('photo_title');
const upload_category = document.getElementById('photo_category');

upload_form.addEventListener('change', (event) => {

    if (upload_image.files.length !== 0 && upload_title && upload_category.value) {
        console.log("Tout les champs ont été remplis")
        document.getElementById('upload_submit').classList.add('submitGreen');
    }

});

const upload_submit = document.getElementById("upload_submit");

upload_submit.addEventListener('click', (event) => {
    event.preventDefault();
    upload();
});

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
    }).then(res => res.status)
        .then(code => {
            let text = "";
            switch (code) {
                case 200: text = "Le projet à été ajouté avec succès";
                    break;
                case 401: text = "Vous n'avez l'autorisation pour faire cela";
                    break;
                case 500: text = "Un erreur inattendu s'est produite";
                    break;
                default: text = "Un erreur inattendu s'est produite";
            }
            console.log(text);
        }).catch(function (error) {
            console.log(error);
        });
}