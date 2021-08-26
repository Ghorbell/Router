import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';


const MovieDetails = ({movies}) => {

     const { id } = useParams();

    const [det, setDet] = useState({})
    useEffect(() => {
        setDet(movies.find((elt)=>elt.id===Number(id)))
    }, [ ])
    return (
      <div className="main movieDetail">
        <h1>{det.name}</h1>
        <iframe
          width="560"
          height="315"
          src={det.trailer}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <Link to={"/"}>
          <button>Return</button>
        </Link>
      </div>
    );
}

export default MovieDetails
