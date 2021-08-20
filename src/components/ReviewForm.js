import React, {useState} from 'react'

export default function ReviewForm({createReview, airlineId}) {
    const [review, setReview] = useState({name: "", title: "", description: "", score: "", airline_id:"" })

    function handleChange(e) {
        const updatedValue = {...review}
        updatedValue[e.target.name] =e.target.value
        setReview(updatedValue)
    }

    function handleSubmit(e) {
        e.preventDefault()
        createReview(review)
    }


    return (
        <div>
            <h2>Create New Review</h2>
            <form onSubmit={handleSubmit}>
                <input name="name" value={review.name} onChange={handleChange} />
                <input name="title" value={review.title} onChange={handleChange} />
                <input name="description" value={review.description} onChange={handleChange} />
                <input name="score" value={review.score} onChange={handleChange} />
                <button type="submit">Create Review</button>
            </form>
        </div>
    )
}