import { useState } from "react"

const MovieSearch = ({ filterMoviesBytitle }) => {

    const [titleQuery, setTitleQuery] = useState('')

    const handleQueryChange = e => {
        const inputValue = e.target.value
        setTitleQuery(inputValue)               // OJO las actualizaciones de estado son asincronas, no bloqueantes
        filterMoviesBytitle(inputValue)
    }

    return (
        <form className="MovieSearch">
            <input type="text" placeholder="Introduce un título..." value={titleQuery} onChange={handleQueryChange} />
        </form>
    )
}

export default MovieSearch