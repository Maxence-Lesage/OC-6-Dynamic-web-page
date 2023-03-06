const filters = Array.from(document.getElementsByClassName("filter_type"));
const gallery = document.getElementsByClassName("gallery_element");


filters[0].classList.toggle('filter_type_selected');

filters.forEach(e => {
    e.addEventListener('click', () => {
        document.getElementsByClassName('filter_type_selected')[0].classList.toggle('filter_type_selected');
        e.classList.toggle('filter_type_selected');

        galleryUpdate(e.dataset.category);
    });
});


function galleryUpdate(filter) {

    for (let i = 0; i < gallery.length; i++) {
        if (gallery[i].classList.contains("not_displayed")) {
            gallery[i].classList.toggle("not_displayed");
        }

        if (filter === "Tous") {

        } else if (gallery[i].dataset.category !== filter) {
            gallery[i].classList.toggle("not_displayed");
        }
    }
}

