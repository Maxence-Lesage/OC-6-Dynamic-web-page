const gallery = document.querySelector('.gallery');


export async function galleryLoading() {

    gallery.innerHTML = "";

    const reponse = await fetch("http://localhost:5678/api/works");
    const works = await reponse.json();

    for (var i = 0; i < works.length; i++) {

        const srcImage = works[i].imageUrl;
        const title = works[i].title;

        gallery.innerHTML += "<figure>"
            + "<img src =\"" + srcImage + "\" alt=\"" + title + "\">"
            + "<figcaption> " + title + " </figcaption>"
            + "</figure>";
    }
}