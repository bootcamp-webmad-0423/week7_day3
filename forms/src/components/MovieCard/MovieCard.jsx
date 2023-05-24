const MovieCard = ({ _id, title, director, IMDBRating, hasOscars, deleteMovie }) => {

    return (
        <div className="MovieCard">
            <h3>{title}</h3>
            <p>Director: {director}</p>
            <p>Rating: {IMDBRating}</p>
            {hasOscars ? <p>¡¡TUVO OSCAR!!</p> : <p>No tuvo Oscar... D:</p>}
            <button onClick={() => deleteMovie(_id)}>Eliminar película</button>
        </div>
    )
}

export default MovieCard