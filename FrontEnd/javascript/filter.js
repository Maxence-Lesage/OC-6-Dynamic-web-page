const filters = Array.from(document.getElementsByClassName("filter_type"));
const gallery = document.getElementsByClassName("gallery_element");

/*Ajoute le premier filtre comme filtre sélectionné*/
filters[0].classList.toggle('filter_type_selected');

/*Click sur un des filtres => l'indicateur de sélection passe sur le nouveau bouton && actualise la gallerie*/
filters.forEach(e => {
    e.addEventListener('click', () => {
        document.getElementsByClassName('filter_type_selected')[0].classList.toggle('filter_type_selected');
        e.classList.toggle('filter_type_selected');
        galleryUpdate(e.dataset.category);
    });
});

/*Actualise la gallerie en fonction du filtre mis en paramètre*/
function galleryUpdate(filter) {
    for (let i = 0; i < gallery.length; i++) {
        gallery[i].classList.remove("not_displayed");

        if (gallery[i].dataset.category !== filter && filter !== "Tous") {
            gallery[i].classList.toggle("not_displayed");
        }
    }
}

