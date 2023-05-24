import { useState } from "react"

const NewMovie = ({ addNewMovie }) => {

    const [title, setTitle] = useState('')
    const [director, setDirector] = useState('')
    const [IMDBRating, setIMDBRating] = useState(5)
    const [hasOscars, setHasOscars] = useState(true)

    const handleTitleInput = e => setTitle(e.target.value)
    const handleDirectorInput = e => setDirector(e.target.value)
    const handleRatingInput = e => setIMDBRating(e.target.value)
    const handleOscarsInput = e => setHasOscars(e.target.checked)

    const handleFormSubmit = e => {

        e.preventDefault()              // Evitar envío del formulario

        const movie = { title, director, IMDBRating, hasOscars }         // Gestionar datos de pleícula
        addNewMovie(movie)

        setTitle('')                    // Vaciar formulario
        setDirector('')
        setIMDBRating('')
        setHasOscars(false)
    }

    return (
        <form onSubmit={handleFormSubmit}>
            Título: <input type="text" value={title} onChange={handleTitleInput} />
            <br />
            <br />
            Director/a: <input type="text" value={director} onChange={handleDirectorInput} />
            <br />
            <br />
            Puntuación: <input type="text" value={IMDBRating} onChange={handleRatingInput} />
            <br />
            <br />
            Tuvo Oscar?: <input type="checkbox" checked={hasOscars} onChange={handleOscarsInput} />
            <br />
            <br />
            <input type="submit" value="Crear película" />
        </form>
    )
}


export default NewMovie