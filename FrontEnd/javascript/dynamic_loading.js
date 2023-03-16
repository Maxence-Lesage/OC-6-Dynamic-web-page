const gallery = document.querySelector('.gallery');
const edit_gallery = document.querySelector('.edit_gallery');


export async function galleryLoading() {

    gallery.innerHTML = "";
    edit_gallery.innerHTML = "";

    const reponse = await fetch("http://localhost:5678/api/works");
    const works = await reponse.json();

    works.map((work) => {
        const srcImage = work.imageUrl;
        const title = work.title;
        const category = work.category.name;
        const project_id = work.id;

        gallery.innerHTML += "<figure class=\"gallery_element\""
            + " data-category=\"" + category + "\"> "
            + "<img src =\"" + srcImage + "\" alt=\"" + title + "\">"
            + "<figcaption> " + title + " </figcaption>"
            + "</figure>";

        edit_gallery.innerHTML += "<figure class=\"gallery_element\" data-category=\"" + category + "\""
            + "data-project_id=\"" + project_id + "\">"
            + "<img src =\"" + srcImage + "\" alt=\"" + title + "\">"
            + "<figcaption> " + "éditer" + " </figcaption>"
            + "<div class=\"delete_project\"> <i class=\"fa-solid fa-trash-can\"></i> </div>"
            + "</figure>";
    })

    edit_gallery.getElementsByClassName("gallery_element")[0].innerHTML += "<div class=\"delete_project\"> <i class=\"fa-solid fa-arrows-up-down-left-right\"></i> </div>";

    addTrashClickEvent();
}

