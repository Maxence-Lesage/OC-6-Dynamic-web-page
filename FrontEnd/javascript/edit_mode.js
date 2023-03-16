const gallery_edit_button = document.querySelector('.gallery_edit_button');
const modale_background = document.querySelector('.modale_background');
const modale = document.querySelector('.modale');
const modale_close = document.querySelectorAll('.modale_close');
const user_log = document.querySelector('.user_log');

if (sessionStorage.getItem("token")) {
    const edit_element = Array.from(document.getElementsByClassName("edition_not_displayed"));
    user_log.innerHTML = "logout";

    edit_element.forEach(e => {
        e.classList.remove("edition_not_displayed");
    });
}

gallery_edit_button.addEventListener('click', () => {
    if (modale_background.classList.contains('not_displayed')) {
        toggle_modale();
    }
});

modale_close[0].addEventListener('click', () => {
    toggle_modale();
});

modale_close[1].addEventListener('click', () => {
    toggle_modale2();
});

function toggle_modale() {
    modale_background.classList.toggle('not_displayed');
    modale.classList.toggle('not_displayed');
}

const add_picture = document.getElementById("add_picture");
/*-------*/
const modale2 = document.getElementsByClassName("modale")[1];

function toggle_modale2() {
    modale_background.classList.toggle('not_displayed');
    modale2.classList.toggle('not_displayed');
}

add_picture.addEventListener('click', () => {

    modale.classList.toggle('not_displayed');
    modale2.classList.toggle('not_displayed');

});

const modale_before = document.querySelector('.modale_before');

modale_before.addEventListener('click', () => {
    modale.classList.toggle('not_displayed');
    modale2.classList.toggle('not_displayed');
});