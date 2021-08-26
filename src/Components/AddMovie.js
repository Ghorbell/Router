import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import StarRating from './StarRating';

const AddMovie = ({handleAdd}) => {
const [form, setForm] = useState({
  image:"",
  rating:0 ,
  name: "  ",
  date: "",
  desc: "",
  genre: " ",
});
     const handlChange = (event) => {
       setForm({ ...form, [event.target.name]: event.target.value });
     };
     const handleSubmit = (e) => {
       e.preventDefault();
       let movies = { ...form, id: Math.random() };
       handleAdd(movies);
       
       setForm({
         name: "",
         date: "",
         image: "",
         rate: 1,
       });
     };
     const handelRate = (rate) => {
       setForm({ ...form, rating: rate });
     };


    return (
      <div className="AddMovie">
        <form >
          <label>Movie Name</label>
          <input
            type="text"
            required
            value={form.name}
            name="name"
            onChange={handlChange}
          />
          <label>Image</label>
          <input
            type="url"
            value={form.image}
            name="image"
            onChange={handlChange}
          />
          <label>Date</label>
          <input
            type="date"
            value={form.date}
            name="date"
            onChange={handlChange}
          />
          <label>Genre</label>
          <input
            type="genre"
            value={form.genre}
            name="genre"
            onChange={handlChange}
          />
          <label>Rate</label>
          {/* <StarRating rating={form.rating} handleRate={handelRate} /> */}
          <select name="Rate" onChange={(e) => handelRate(e.target.value)}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
           <Link to='/'><button className="btn btn-secondary" >Close</button></Link>
          <button className="btn btn-primary">Add</button>
          </form>
      </div>
    );
}

export default AddMovie

