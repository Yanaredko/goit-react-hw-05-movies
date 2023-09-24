import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getRewiews } from "service/api";


const Reviews = () => {
  const [rewiews, setRewiews] = useState([])
  const { movieId } = useParams();

  useEffect(() => {
   getRewiews(movieId).then(setRewiews)
  },[movieId])


  return (
    <>
    {rewiews.length>0?
      <ul>
        {rewiews.map(({ id, author, content }) => (
          <li key={id}>
            <h3>{author}</h3>
            <p>{content}</p>
          </li>
        ))}
      </ul>:<p>No rewiews</p>
}
    </>
  );
}

export default Reviews