async function onSearchChange (event) {
    const imdbID = event.target.value;
    const movies = await fetch ("https://www.omdbapi.com/?apikey=ed5ec5a7&s=${searchWord}")
    const movieData = await movies.json()
}





async function getMovies() {
    const movies = await fetch ("https://www.omdbapi.com/?apikey=ed5ec5a7&s=jaws")
    const movieData = await movies.json()
    const movieCardEl = document.querySelector(".movies-short")
    console.log(movies)
    console.log(movieData)
    movieCardEl.innerHTML = movieData.Search.map((movie) => movieHTML(movie)).join("");
}
getMovies()



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

async function getDetails() {
    const results = await fetch("https://www.omdbapi.com/?apikey=ed5ec5a7&t=jaws")
    const resultsData = await results.json()
    console.log (resultsData)
    const backgroundImage = document.querySelector("img.background__image")
    backgroundImage.src = resultsData.Poster
}
getDetails()