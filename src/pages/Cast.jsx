import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCast } from "service/api"


const Cast = () => {
  const [cast, setCast] = useState([])
  const {movieId} = useParams()
  useEffect(()=>{
    getCast(movieId).then(setCast)
  },[movieId])
  return (
    <ul style={{display: "flex", flexWrap: 'wrap', gap: '8px'}}>
      {cast.map(({ id, name, profile_path }) => (
        <li key={id}>
          <img width='200'
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w300${profile_path}`
                : `http://www.suryalaya.org/images/no_image.jpg`
            }
          alt={name}/>
          <h3>{name}</h3>
        </li>
      ))}
    </ul>
  );
}

export default Cast