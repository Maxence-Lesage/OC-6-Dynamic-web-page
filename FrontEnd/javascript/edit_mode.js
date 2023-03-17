const gallery_edit_button = document.querySelector('.gallery_edit_button');
const modale_background = document.querySelector('.modale_background');
const modale_close = document.querySelectorAll('.modale_close');
const user_log = document.querySelector('.user_log');
const modales = document.getElementsByClassName("modale");
const modale_before = document.querySelector('.modale_before');
const add_project = document.getElementById("add_project");

/*Si un token est présent => remplace login par logout && affiche les boutons d'édition*/
if (sessionStorage.getItem("token")) {
    user_log.innerHTML = "logout";
    const edit_element = Array.from(document.getElementsByClassName("edition_not_displayed"));

    edit_element.forEach(e => {
        e.classList.remove("edition_not_displayed");
    });
}

/*Click sur le bouton affilié => affiche la modale de gestion des projets*/
gallery_edit_button.addEventListener('click', () => {
    modale_background.classList.remove('not_displayed');
    modales[0].classList.remove('not_displayed');
});

/*Click sur le bouton close => ferme la fenêtre modale en cours*/
for (let i = 0; i < modale_close.length; i++) {
    modale_close[i].addEventListener('click', () => {
        modales[i].classList.add("not_displayed");
        modale_background.classList.add('not_displayed');
    });
}