import React, {useState, useEffect} from 'react'

export default function Movie() {
const [movies, setmovies] = useState()

useEffect(() => {
    getMovies();
}, [])

const getMovies = async () => {
    const response = await fetch('http://localhost:3000/movies')
    const data = await response.json();
    setmovies(data)
}

    return (
        <div>
            {movies &&  movies.map(movie => <p>{movie.name}</p>)}
        </div>
    )
}
