console.log("start")

// const movieEl = document.querySelector("movie__card")

// async function main() {
//     const movies = await fetch ("http://www.omdbapi.com/?apikey=ed5ec5a7&")
//     const movieData = await movies.json()
//     moviesEl.innerHTML = movieData.map((movie__title) => movieHTML(movie__title)).join()
// }
// main()

// function loadMovies(title) {
//     localStorage.setItem("title", title)
//     window.location.reload

// }

// function movieHTML (title) {`



async function getMovies() {
    const movies = await fetch ("http://www.omdbapi.com/?apikey=ed5ec5a7&s")
    const movieData = await movies.json()
    console.log()
    movieData
        .map(
            (movie) => 
                `<div class="movie__card">
                <div class="movie__title--container">
                    <h2 class="movie__title">movie title</h2>
                    <h4 class="release__date"> release date</h4>
                </div>
                <div class="movie__subtitle--container">
                    <div class="movie___keywords">keyword | keyword | keyword</div>
                    <div class="rating__container">
                        <h4>rating</h4>
                        <div class="stars-or-percent">****</div>
                    </div>
                </div>
                <hr class="solid">
                </h2>
                <div class="movie__details--container">
                    <figure class="poster__container">
                        <img class="poster" src="/assets/kikis-delivery-service-md-web.jpg" alt="">
                    </figure>
                    <div class="movie__people--container">
                        <div class="movie__people--wrapper">

                                <h4>director</h4>
                                <p class="director__name">director name</p>
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
        )
        .join("")
getMovies()
}

console.log("end")