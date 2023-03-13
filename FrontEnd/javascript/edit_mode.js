const gallery_edit_button = document.querySelector('.gallery_edit_button');
const modale_background = document.querySelector('.modale_background');
const modale = document.querySelector('.modale');
const modale_close = document.querySelector('.modale_close');

if (sessionStorage.getItem("token")) {
    const edit_element = Array.from(document.getElementsByClassName("edition_not_displayed"));

    edit_element.forEach(e => {
        e.classList.remove("edition_not_displayed");
    });
}

gallery_edit_button.addEventListener('click', () => {
    if (modale_background.classList.contains('not_displayed')) {
        toggle_modale();
    }
});

modale_close.addEventListener('click', () => {
    toggle_modale();
});

function toggle_modale() {
    modale_background.classList.toggle('not_displayed');
    modale.classList.toggle('not_displayed');
}


