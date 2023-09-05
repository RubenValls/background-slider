let images = [];
let query = '';
let position = 0;
const KEY = 'iVlHyj-ZdiU_jqN6P4ksYTzs75U_09Kpz84VmSkA2bI';
const imageContainer = document.querySelector('.image-container');
const prevImage = document.querySelector('#prev');
const nextImage = document.querySelector('#next');
const finder = document.querySelector('#query');
const iconFinder = document.querySelector('#icon-finder');

const getImages = () => {
    const API = `https://api.unsplash.com/photos/random?client_id=${KEY}&count=${10}&query=${query}`;
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
    imageContainer.style.backgroundImage = `url(${images[position] ? images[position].urls.full : 'assets/no-image.png'})`;
    document.body.style.backgroundImage = `url(${images[position] ? images[position].urls.full : ''})`;
}

getImages();

prevImage.addEventListener('click', () => {
    position === 0
        ? position = 9
        : position -= 1;
    
    printImage(position);
})

nextImage.addEventListener('click', () => {
    position === 9
        ? position = 0
        : position += 1;
    
    printImage(position);
})

finder.addEventListener('keydown', (event) => {
    if(event.keyCode === 13){
        query = finder.value;
        finder.value = '';
        getImages();
    }
})

iconFinder.addEventListener('click', () => {
    query = finder.value;
    finder.value = '';
    getImages();
})