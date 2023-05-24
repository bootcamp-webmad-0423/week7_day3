const MovieCard = ({ _id, title, director, IMDBRating, hasOscars }) => {

    return (
        <div className="MovieCard">
            <h3>{title}</h3>
            <p>Director: {director}</p>
            <p>Rating: {IMDBRating}</p>
            {hasOscars ? <p>¡¡TUVO OSCAR!!</p> : <p>No tuvo Oscar... D:</p>}
        </div>
    )
}

export default MovieCard