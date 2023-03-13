
function addTrashClickEvent() {

    const delete_project = document.getElementsByClassName("delete_project");

    for (let i = 0; i < delete_project.length; i++) {
        delete_project[i].addEventListener('click', () => {
            deleteProject(delete_project[i].parentElement.dataset.project_id);
        });
    }

}

async function deleteProject(project_id) {
    const token = sessionStorage.getItem("token");

    await fetch(`http://localhost:5678/api/works/${project_id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Origin': 'http://localhost:5500',
            'Authorization': `Bearer ${token}`
        }
    }).then(res => res.status)
        .then(code => {
            let text = "";
            switch (code) {
                case 200: text = "Le projet à été supprimé avec succès";
                    break;
                case 401: text = "Vous n'avez l'autorisation pour faire cela";
                    break;
                case 500: text = "Un erreur inattendu s'est produite";
                    break;
                default: text = "Un erreur inattendu s'est produite";
            }
            alert(text);
        }).catch(function (error) {
            console.log(error);
        });
}

