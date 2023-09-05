let images = [];
let query = '';
const KEY = 'iVlHyj-ZdiU_jqN6P4ksYTzs75U_09Kpz84VmSkA2bI';
const API = `https://api.unsplash.com/photos/random?client_id=${KEY}&count=${10}&query=${query}`;

const getImages = () => {
    fetch(API)
        .then(response => response.json())
        .then(data => {
            images = [...data];
            printImage()
        })
        .catch(error => console.log(error));
}

const printImage = (position = 0) => {
    const imageContainer = document.querySelector('.image-container');
    imageContainer.innerHTML = `<img src=${images[position].urls.full} alt=${images[position].alt_description}>`
}

getImages();