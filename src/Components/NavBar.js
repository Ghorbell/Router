import React from 'react'
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NavBar = ({handleRate,handleSearch}) => {

  const ratingChanged = (newRating) => {
    handleRate(newRating);
  };
    return (
      <div className="Nav">
        
        <h1>Cima4Us</h1>
        
        <div className="search-container">
          <input
            className="inp"
            type="text"
            placeholder="Search.."
            onChange={(e) => handleSearch(e.target.value)}
          />

          {/* <ReactStars count={5} size={25} onChange={ratingChanged} />  */}

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Search by Rate
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item key={5} onClick={() => handleRate(8)}>
                Rated 8+
              </Dropdown.Item>
              <Dropdown.Item key={3} onClick={() => handleRate(5)}>
                Rated 5+
              </Dropdown.Item>
              <Dropdown.Item key={0} onClick={() => handleRate(0)}>
                Rated 1+
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    );
}

export default NavBar
