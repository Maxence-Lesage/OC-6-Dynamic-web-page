const delete_project = document.getElementsByClassName("delete_project");

/*Click sur l'îcone supprimer d'un projet => supprime le projet*/
function addDeleteProjectEvent() {
    for (let i = 0; i < delete_project.length; i++) {
        delete_project[i].addEventListener('click', () => {
            deleteProject(delete_project[i].parentElement.dataset.project_id);
        });
    }
}

/*Supprime le projet mis en argument*/
async function deleteProject(project_id) {
    const token = sessionStorage.getItem("token");

    await fetch(`http://localhost:5678/api/works/${project_id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Origin': 'http://localhost:5500',
            'Authorization': `Bearer ${token}`
        }
    }).then(response => response.status)
        .then(code => {
            let text = "";
            switch (code) {
                case 401: text = "Vous n'avez l'autorisation pour faire cela";
                    break;
                case 500: text = "Une erreur inattendu s'est produite";
                    break;
                default: text = "Une erreur inattendu s'est produite";
            }
            if (code === 401) alert(text);
        }).catch(function (error) {
            alert(text);
            console.log(error);
        });
}

/*Click sur "Ajouter une photo" => ouvre le fenêtre modale d'ajout de projet*/
add_project.addEventListener('click', () => {
    modales[0].classList.toggle('not_displayed');
    modales[1].classList.toggle('not_displayed');
    imageLoader();
    categoryList();
});

