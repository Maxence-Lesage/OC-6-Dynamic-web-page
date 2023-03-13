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

        gallery.innerHTML += "<figure class=\"gallery_element\" data-category=\"" + category + "\">"
            + "<img src =\"" + srcImage + "\" alt=\"" + title + "\">"
            + "<figcaption> " + title + " </figcaption>"
            + "</figure>";

        edit_gallery.innerHTML += "<figure class=\"gallery_element\" data-category=\"" + category + "\">"
            + "<img src =\"" + srcImage + "\" alt=\"" + title + "\">"
            + "<figcaption> " + "éditer" + " </figcaption>"
            + "<i class=\"fa-solid fa-trash-can\"></i>"
            + "</figure>";
    })

}

