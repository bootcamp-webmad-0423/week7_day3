import { useState } from "react"
import { moviesData } from "../../fakeAPI"
import MovieCard from "../MovieCard/MovieCard"
import MovieSearch from "../MovieSearch/MovieSearch"

const MoviesList = () => {

    const [movies, setMovies] = useState(moviesData)
    const [moviesBackup, setMoviesBackup] = useState(moviesData)

    const filterMoviesBytitle = query => {

        // NO filtramos sobre movies ya que las que no pasan el filtro dejan de estar presentes
        // const filteredMovies = movies.filter(elm => elm.title.includes(query))

        // Filtramos sobre el backup para mantener una base completa de películas
        const filteredMovies = moviesBackup.filter(elm => elm.title.includes(query))
        setMovies(filteredMovies)
    }

    return (
        <section>

            <h1>Listado de pelis</h1>

            <MovieSearch filterMoviesBytitle={filterMoviesBytitle} />

            <hr />
            {
                movies.map(elm => {
                    return <MovieCard key={elm._id} {...elm} />
                })
            }

        </section>
    )
}

export default MoviesList