import React, {useEffect, useState} from 'react';
import { BASE_URL } from '../constraints/index.js';
import Review from './Review.js';


export default function ReviewContainer() {
    const [reviews, setReviews] = useState(null)

    //READ

    useEffect(() => {
        fetch(BASE_URL + 'reviews')
        .then(res => res.json())
        .then(json => setReviews(json))
    }, [])

    

   function populateReviews() {
       return reviews.map(review => <Review review={review} deleteReview={deleteReview} updateReview={updateReview} key={review.id}/>)
   }

  function deleteReview(review) {
    fetch(BASE_URL + "reviews/" + review.id, {
      method: "DELETE",
    })
    const newReviews = reviews.filter(r => r.id !== review.id)
    setReviews(newReviews)
  }

  function updateReview(review) {
    fetch(BASE_URL + "reviews/" + review.id), {
        method: "UPDATE",
        body: JSON.stringify(review)
    }
    const newReviews = reviews.map(r => {
        if (r.id === review.id) {   
            r= review
        }
    })
    setReviews([...newReviews])
  }

    return (
        <div>
            {reviews && populateReviews()}
            
        </div>
    )
}
