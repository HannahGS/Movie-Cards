console.log("start")


async function getMovies() {
    const movies = await fetch ("https://www.omdbapi.com/?apikey=ed5ec5a7&t=jurassic_park")
    const movieData = await movies.json()
    const movieCardEl = document.querySelector(".movies")
    console.log(movies)
    console.log(movieData)
    movieCardEl.innerHTML = movieData
        .Search.map((movie) =>
            `
            <div class= "movie__card">
                <div class="movie__title--container">
                    <h2 class="movie__title">${movie.Title}</h2>
                    <h4 class="release__date">${movie.Year}</h4>
                </div>
                <div class="movie__subtitle--container">
                    <div class="movie___keywords">keyword | keyword | keyword</div>
                    <div class="rating__container">
                        <h4>rating</h4>
                        <div class="stars-or-percent">****</div>
                    </div>
                </div>
                <hr class="solid">
                <div class="movie__details--container">
                    <figure class="poster__container">
                        <img class="poster" src="${movie.Poster}" alt="">
                    </figure>
                    <div class="movie__people--container">
                        <div class="movie__people--wrapper">

                                <h4>director</h4>
                                <p class="director__name">${movie.Director}</p>
                        </div>
                        <div class="movie__people--wrapper">
                                <h4>writers</h4>
                                <p class="writers__name">writers names</p>
                        </div>
                        <div class="movie__people--wrapper">
                                <h4>actors</h4>
                                <p class="actors__name">actor names</p>
                        </div>
                    </div>
                    <div class="movie__left--container">
                        <div class="summary__container">
                            <h4 class="summary">Summary</h4>
                            <p class="summary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo molestiae dolorum provident laborum ea quisquam itaque. Aperiam iusto facere ipsa?</p>
                        </div>
                        <div class="movie__left--subcontainer">
                            <div class="movie__details--small">
                                <h4 class="smaller__subtitles">Awards</h4>
                                <p class="awards">text text text</p>
                            </div>
                            <div class="movie__details--small">
                                <h4 class="smaller__subtitles">Awards</h4>
                                <p class="awards">text text text</p>
                            </div>
                            <div class="movie__details--small">
                                <h4 class="smaller__subtitles">Awards</h4>
                                <p class="awards">text text text</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
            ).join("")
}
getMovies()


console.log("end")