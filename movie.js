async function getMovies() {
    const movies = await fetch ("https://www.omdbapi.com/?apikey=ed5ec5a7&s=jurassic")
    const movieData = await movies.json()
    const movieCardEl = document.querySelector(".movies-short")
    movieCardEl.innerHTML = movieData.Search.map((movie) => movieHTML(movie)).join("");
}

getMovies()


function showMovieDetails(title) {
    console.log(title)
}


function movieHTML(movie) {
    return  `<div class="movie__card-short" onclick= "showMovieDetails(${movie.Title})">
            <div class="movie__title--container-short">
                <h2 class="movie__title-short">${movie.Title}</h2>
                <h4 class="release__date">${movie.Year}</h4>
                <figure class="poster__container-short">
                    <img class="poster-short" src="${movie.Poster}" alt="">
                </figure>
            </div>  
        </div>`
}