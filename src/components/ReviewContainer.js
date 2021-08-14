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
       return reviews.map(review => <Review review={review} />)
   }

   
 // CREATE

 function createReview(review) {
    fetch(BASE_URL + "reviews", {
      method: "POST",
      body: JSON.stringify(review),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => setReviews([...reviews, json]));

  }

  // UPDATE

  function updateReview(review) {
    fetch(BASE_URL + "reviews/" + review.id, {
      method: "PATCH",
      body: JSON.stringify(review),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });


    const newReviews = reviews.map((r) => {
      if (r.id === review.id) {
        r = review;
      }
      return r;
    });
    setReviews(newReviews);
  }

  // DELETE

  function deleteReview(review) {
    fetch(BASE_URL + "reviews/" + review.id, {
      method: "DELETE",
    });
    const newReviews = reviews.filter((r) => r.id !== review.id);
    setReviews(newReviews);
  }
    return (
        <div>
            <h2 className="reviews-header">Reviews</h2>
            <div className="review-container">{reviews && populateReviews()}</div>
            
        </div>
    )
}
