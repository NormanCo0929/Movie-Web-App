import { Badge } from "@mui/material"
import { img_300, unavailable } from "../../config/Config"
import "./SingleContent.css"

const SingleContent = ({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average,
}) => {
    return (
        <div className="media">
            <Badge badgeContent={vote_average} color={vote_average > 6 ? "primary" : "secondary"}/>
            <img className="poster" src={poster ? `${img_300}${poster}` : unavailable} alt={title}/>
            <b className="title">{title}</b>
            <div className="subtitle">
                <span className="subtitle-text">{media_type === "tv" ? "TV Series" : "Movie"}</span>
                <span className="subtitle-text">{date}</span>
            </div>
        </div>
    )
}

export default SingleContent