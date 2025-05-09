async function onSearchChange (event) {
    const searchTerm = event.target.value
    const movies = await fetch (`https://www.omdbapi.com/?apikey=ed5ec5a7&s=${searchTerm}`)
    const movieData = await movies.json()
    const movieCardEl = document.querySelector(".movies-short")
    movieCardEl.innerHTML = movieData.Search.map((movie) => 


    `<div class="movie__card-short" onclick= "showMovieDetails('${movie.imdbID}')">

            <div class="movie__title--container-short">
                <h2 class="movie__title-short">${movie.Title}</h2>
                <h4 class="release__date">${movie.Year}</h4>
                <figure class="poster__container-short">
                    <img class="poster-short" src="${movie.Poster}" alt="">
                </figure>
            </div>  
        </div>`
        ).join("");
}

function initialSearch(searchTerm) {
    localStorage.setItem("searchTerm", searchTerm)
    window.location.reload() = `${window.location.origin}/results.html`
}

async function getMovies() {
    const movies = await fetch (`https://www.omdbapi.com/?apikey=ed5ec5a7&s=kiki's}`)
    const movieData = await movies.json()
    const movieCardEl = document.querySelector(".movies-short")
    movieCardEl.innerHTML = movieData.Search.map((movie) => movieHTML(movie)).join("");
}
getMovies()


// on click, open results page with detailed movie info
function showMovieDetails (imdbID) {
    localStorage.setItem("imdbID", imdbID)
    window.location.href = `${window.location.origin}/results.html`
}


function movieHTML(movie) {
    return  `<div class="movie__card-short" onclick= "showMovieDetails('${movie.imdbID}')">

            <div class="movie__title--container-short">
                <h2 class="movie__title-short">${movie.Title}</h2>
                <h4 class="release__date">${movie.Year}</h4>
                <figure class="poster__container-short">
                    <img class="poster-short" src="${movie.Poster}" alt="">
                </figure>
            </div>  
        </div>`
}
