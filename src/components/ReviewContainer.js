import React, {useEffect, useState} from 'react';
import { BASE_URL } from '../constraints/index.js';
import Review from './Review.js';
import ReviewForm from './ReviewForm.js'


export default function ReviewContainer() {

    const [reviews, setReviews] = useState(null)

    //READ

    useEffect(() => {
        fetch(BASE_URL + 'reviews')
        .then(res => res.json())
        .then(json => setReviews(json))
    }, [])

   function populateReviews() {
       console.log(reviews)
       return reviews.map(review => <Review review={review} deleteReview={deleteReview} updateReview={updateReview} key={review.id}/>)
   }

   //create

   function createReview(review) {
       fetch(BASE_URL + 'reviews', {
           method: "POST",
           body: JSON.stringify(review),
           headers: {
               "Accept": "application/json",
               "Content-Type": "application/json"
           }
       })
       .then(res => res.json())
       .then(json => setReviews([...reviews, json]))
   }

    //update

  function updateReview(review) {
    fetch(BASE_URL + "reviews/" + review.id, {
        method: "PATCH",
        body: JSON.stringify(review),
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })

    const newReviews = reviews.map(r => {
        if (r.id === review.id) {   
            r= review
        }
        return r
    })
    setReviews(newReviews)
  }

  //delete

  function deleteReview(review) {
    fetch(BASE_URL + "reviews/" + review.id, {
      method: "DELETE",
    })
    const newReviews = reviews.filter(r => r.id !== review.id)
    setReviews(newReviews)
  }

    return (
        <div>
            {reviews && populateReviews()}
            <ReviewForm createReview={createReview} />
        </div>
    )
}
 