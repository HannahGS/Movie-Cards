async function getMovies() {
    const imdbID = localStorage.getItem("imdbID")
    const result = await fetch (`https://www.omdbapi.com/?apikey=ed5ec5a7&i=${imdbID}`)
    const resultData = await result.json()
    console.log(resultData)
    const movieCardEl = document.querySelector(".movies")
    movieCardEl.innerHTML = resultDetailsHTML(resultData) 
}
getMovies()




function resultDetailsHTML (result) {
    return  `
    <div class= "movie__card">
        <div class="movie__title--container">
            <h2 class="movie__title">${result.Title}</h2>
            </div>
            <div class="movie__subtitle--container">
                <h4 class="release__date">${result.Year}</h4>
                <h4 class="movie___keywords">${result.Genre}</h4>
                <div class="rating__container">
                    <h4>Rated: ${result.Rated}</h4>
                </div>
            </div>
        <hr class="solid">
        <div class="movie__details--container">
            <figure class="poster__container">
                <img class="poster" src="${result.Poster}" alt="">
            </figure>
            <div class="movie__people--container">
                <div class="movie__people--wrapper">
                        <h4>Director</h4>
                        <p class="director__name">${result.Director}</p>
                </div>
                <div class="movie__people--wrapper">
                        <h4>Writers</h4>
                        <p class="writers__name">${result.Writer}</p>
                </div>
                <div class="movie__people--wrapper">
                        <h4>Actors</h4>
                        <p class="actors__name">${result.Actors}</p>
                </div>
            </div>
            <div class="movie__left--container">
                <div class="summary__container">
                    <h4 class="summary">Summary</h4>
                    <p class="summary">${result.Plot}</p>
                </div>
                <div class="movie__left--subcontainer">
                    <div class="movie__details--small">
                        <h4 class="smaller__subtitles">Awards</h4>
                        <p class="awards">${result.Awards}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`
}

async function getBackground() {
    const imdbID = localStorage.getItem("imdbID")
    const results = await fetch(`https://www.omdbapi.com/?apikey=ed5ec5a7&i=${imdbID}`)
    const resultsData = await results.json()
    console.log (resultsData)
    const backgroundImage = document.querySelector("img.background__image")
    backgroundImage.src = resultsData.Poster
}
getBackground()