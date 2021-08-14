import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Review({ review, deleteReview, updateReview, initialDelay=0 }) {
    const [newReview, setNewReview] = useState({ ...review });
    const [editMode, setEditMode] = useState(false);
    const [render, setRender] = useState(false)
  
    useEffect(() => {
      const timeout = setTimeout(() => {setRender(true)}, initialDelay)
      return () => clearTimeout(timeout)
    }, [initialDelay])
  
    function handleChange(e) {
      const updatedValue = { ...newReview };
      updatedValue[e.target.name] = e.target.value;
      setNewReview({ ...updatedValue });
    }
  
    function toggleEdit() {
      setEditMode(!editMode);
    }
  
    function handleUpdate(e) {
      e.preventDefault();
      updateReview(newReview);
      setEditMode(false);
    }
  
    if (!render) {
      return <></>
    }
  
    return (
      <div className="card">
        <Link to={`/reviews/${review.id}`}>
          <p>{review.name}</p>
        </Link>
        <p>{review.title}</p>
        <p>{review.description}</p>
        <p>{review.score}</p>

        {editMode && (
          <>
            <button onClick={() => deleteReview(review)}>Delete Review</button>
  
            <form onSubmit={handleUpdate}>
              <input name="name" value={newReview.name} onChange={handleChange} />
              <input
                name="location"
                value={newReview.location}
                onChange={handleChange}
              />
              <button type="submit">Update Review</button>
            </form>
          </>
        )}
        <button onClick={toggleEdit}>Edit</button>
      </div>
    );
  }