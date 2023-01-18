let moviePosterContainer = document.querySelector('.movie-poster-container');
let modal = document.querySelector('#myModal');
let closeBtn = document.querySelector('.closeBtn');
let modalImage = document.querySelector('.movie-poster-container-modal');

moviePosterContainer.addEventListener('click', ()=> {
    modal.style.display = 'block';
    modalImage.src = moviePosterContainer.src;
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
})

window.addEventListener('click', (event) => {
    if(event.target === modal) {
        modal.style.display = 'none';
    }
});