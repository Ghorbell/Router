import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';
const MovieCard = ({film}) => {
    let {
        image ,
    rating ,
    name ,
    date ,
    desc,
    genre
    }=film;
    const setVote= (rating) =>{
      if (rating>=8) {
        return "green"
      }
      else if(rating>=5){
        return "orange"
      }
      else{return "red"}
    }
    return (
      <div>
        <Card className="card" style={{ width: 300 }}>
          <Link to={`/moviedetails/${film.id}`}>
            <Card.Img
              variant="top"
              src={image}
              style={{ width: 300, height: 400 }}
              alt={name}
            />
          </Link>
          <Card.Body>
            <Card.Title className="titles">{name}</Card.Title>

            <div className="overview">
              <Card.Text>{desc}</Card.Text>
            </div>
            <div className="bot">
              <Card.Text className="date">{date}</Card.Text>
            </div>
            <span className={`span ${setVote(rating)}`}>{rating}</span>
          </Card.Body>
        </Card>
      </div>
    );
}

export default MovieCard
