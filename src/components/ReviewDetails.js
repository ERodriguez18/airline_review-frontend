import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../constraints/index.js';
import Review from './Review.js';

export default function ReviewDetails() {
    const [airline, setAirline] = useState(null);
    const [review, setReview] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        fetch(BASE_URL + 'airlines/' +id)
        .then(json => setAirline(json))
      }, [id]);

      useEffect(() => {
        console.log(airline)
    }, [airline]);

      useEffect(() => {
        fetch(BASE_URL + 'reviews/' +id)
        .then(json => setReview(json))
      }, [id]);

     useEffect(() => {
        console.log(review)
    }, [review]);
    

    return (
    <div>
        {airline && (
        <>
        <p>Airline Name: {airline.name}</p>
        <p>Airline Image: {airline.img_url}</p>
        <h3>Reviews</h3>
        {review.reviews.map(review => <Review review={review}/>
            
        )}
        </>
    )}
    </div>
    );
}