function appendImageElem(keyword, index) {
    const ImgElem = document.createElement('img');
    ImgElem.src = `https://source.unsplash.com/400x225/?${keyword}&sig=${index}`; 

    const galleryElement = document.querySelector('.gallery');
    galleryElement.appendChild(ImgElem);
}
function removePhotos() {
    const galleryElement = document.querySelector('.gallery');
    galleryElement.innerHTML = '';
}
function searchPhotos(event) {
    const keyword = event.target.value;
    removePhotos();
    if (event.key === 'Enter' && keyword !== '') {
        for (let index = 0; index < 9; index++){
            appendImageElem(keyword,index);
        }
    }
}
function run() {
    const inputElem = document.querySelector('input');
    inputElem.addEventListener('keydown', searchPhotos)
}

run();