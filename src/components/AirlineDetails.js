// import React, { useEffect, useState } from 'react'
// import { BASE_URL } from '../constraints'
// import { useParams } from 'react-router-dom';
// import ReviewForm from './ReviewForm';
// import { useParams } from 'react-router';


// export default function AirlineDetails() {
//     const [airline, review, setReview] = useState(null);

//     const {id} = useParams();

//     useEffect(() => {
//         fetch(BASE_URL + 'airlines/' + id)
//         .then(json => setReview(json))
//       }, [id]);


//       useEffect(() => {
//           console.log(airline)
//       }, [airline])

      
//     return (
//         <div>
//           {reviews && populateReviews()}
//             <ReviewForm createReview={createReview} />
//         </div>
//     )
// }

