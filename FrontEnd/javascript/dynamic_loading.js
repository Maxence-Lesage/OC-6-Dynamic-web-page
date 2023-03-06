const gallery = document.querySelector('.gallery');


export async function galleryLoading() {

    gallery.innerHTML = "";

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
    })

}

