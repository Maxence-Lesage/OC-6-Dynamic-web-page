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
        gallery[i].classList.remove("not_displayed");

        if (gallery[i].dataset.category !== filter && filter !== "Tous") {
            gallery[i].classList.toggle("not_displayed");
        }
    }

}

