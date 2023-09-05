let images = [];
let query = '';
let position = 0;
const KEY = 'iVlHyj-ZdiU_jqN6P4ksYTzs75U_09Kpz84VmSkA2bI';
const API = `https://api.unsplash.com/photos/random?client_id=${KEY}&count=${10}&query=${query}`;
const prevImage = document.querySelector('#prev');
const nextImage = document.querySelector('#next');

const getImages = () => {
    fetch(API)
        .then(response => response.json())
        .then(data => {
            images = [...data];
            position = 0;
            printImage()
        })
        .catch(error => {
            console.log(error)
            printImage()
        });
}

const printImage = (position = 0) => {
    const imageContainer = document.querySelector('.image-container');
    imageContainer.innerHTML = `<img src=${images[position] ? images[position].urls.full : 'assets/no-image.png'} alt=${images[position] ? images[position].alt_description : 'no-image'}>`
    document.body.style.backgroundImage = `url(${images[position] ? images[position].urls.full : 'assets/no-image.png'})`;
}

getImages();