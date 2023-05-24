import { useState } from "react"
import { moviesData } from "../../fakeAPI"
import MovieCard from "../MovieCard/MovieCard"
import NewMovie from "../NewMovie/NewMovie"

const MoviesList = () => {

    const [movies, setMovies] = useState(moviesData)

    const removeMovie = idToDelete => {
        const newMovies = movies.filter(elm => elm._id != idToDelete)
        setMovies(newMovies)
    }

    const addMovie = newMovie => {
        const moviesCopy = [...movies]
        moviesCopy.unshift(newMovie)
        setMovies(moviesCopy)
    }

    return (
        <section>

            <h1>Nueva película</h1>

            <NewMovie addNewMovie={addMovie} />

            <h1>Listado de pelis</h1>
            {
                movies.map(elm => {
                    return <MovieCard key={elm._id} {...elm} deleteMovie={removeMovie} />
                })
            }

        </section>
    )
}

export default MoviesList