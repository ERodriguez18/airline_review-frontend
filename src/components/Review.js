import React, {useState} from "react";
import { Link } from "react-router-dom";

export default function Review({review, deleteReview, updateReview}) {
    const [newReview, setNewReview] =useState({...review})
    const [editMode, setEditMode] =useState(false)

    function handleChange(e) {
       const updatedValue = {...newReview}
        updatedValue[e.target.name] = e.target.value
        setNewReview({...updatedValue})
    }

    function toggleEdit() {
        setEditMode(!editMode)
    }


    function handleUpdate(e) {
        e.preventDefault()
        updateReview(newReview)
        setEditMode(false)
    }


    return (
        <div>
        <br />
        <div>
              <Link to={`/reviews/${review.id}}`}> </Link><p>Name: {review.name}</p>
                <p>Title: {review.title}</p>
                <p>Description: {review.description}</p>
                <p>Score: {review.score}</p>
            </div>

        {
            editMode &&
            <>
                <button onClick={() => deleteReview(review)}>Delete Review</button>

                <form onSubmit={handleUpdate}>
                    <input name="name" value={newReview.name} onChange={handleChange}/>
                    <input name="title" value={newReview.title} onChange={handleChange}/>
                    <input name="description" value={newReview.description} onChange={handleChange}/>
                    <input name="score" value={newReview.score} onChange={handleChange}/>
                    <button type="submit">Update Review</button>
            </form>
            </>
        }
        <button onClick={toggleEdit}>Edit</button>
            <br />
        </div>
    )
}
