import React, {useState} from "react";

export default function Review({review, deleteReview}) {
    const [newReview, setNewReview] =useState({...review})

    function handleChange(e) {
       const updatedValue = {...newReview}
        updatedValue[e.target.name] = e.target.value
        setNewReview(updatedValue)
    }



    return (
        <div>
        <br />
            <p>Name: {review.name}</p>
            <p>Title: {review.title}</p>
            <p>Description: {review.description}</p>
            <p>Score: {review.score}</p>

            <button onClick={() => deleteReview(review)}>Delete Review</button>

            <form onSubmit={(e) => {e.preventDefault()}}>
                <input name={newReview.name} value={newReview.name} onChange={handleChange}/>
                <input name={newReview.title} value={newReview.title} onChange={handleChange}/>
                <input name={newReview.description} value={newReview.description} onChange={handleChange}/>
                <input name={newReview.score} value={newReview.score} onChange={handleChange}/>
                <button type="submit">updateReview</button>

            </form>
            <br />
        </div>
    )
}
