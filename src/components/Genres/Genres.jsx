import { useEffect } from "react"
import axios from "axios"
import { Chip } from "@mui/material"
import "./Genres.css"

const Genres = ({
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    type,
    setPage,
}) => {
    const fetchGenres = async () => {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        )
        setGenres(data.genres);
    }

    useEffect(() => {
        fetchGenres()
    
        return () => {
          setGenres({})
        };
      }, [])

    return (
        <div className="chip">Genre
            {/* {genres.map((genre) => (
                <Chip
                label = {genre.name}
                />
            ))} */}
        </div>
    )
}

export default Genres