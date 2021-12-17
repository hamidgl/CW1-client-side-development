import React from "react";
import RatingsChart from "../RatingsChart";
import AddReview from "./AddReview";
import { FaStar } from "react-icons/fa";
import "./style.css";

// Component name is HostelCard
// Created to display each hostel details.
const HostelCard = ({ hostel, getHostels }) => {
  // totalRating is a variable to calculate the total rating by getting the sum of total starts that added by customers.
  const totalRating = hostel.ratings.reduce((acc, value) => acc + value, 0);

  // averageRatings is a variable to get the average rating by dividing the total rating by number of the customers whom added the ratings and
  // round the average ratings first decimal.
  const averageRatings = Math.round(totalRating / hostel.ratings.length);

  // Return section to render the hostel information.
  return (
    <div className="hostel-card">
      <h2>{hostel.name}</h2>
      <h3>Address: {hostel.address}</h3>
      <h3>Post code: {hostel.postcode}</h3>
      <p>{hostel.description}</p>
      <h4>Email: {hostel.email}</h4>
      <h4>Phone: {hostel.phone}</h4>
      <br></br>
      <p>What guests are saying About this hostel</p>

      <h2>Here is Rating Details As the following:-</h2>
      {/* ratings section to display the hostel ratings details */}
      <section className="ratings">
        <h2>Total Ratings for this hostel is: ({hostel.ratings.length})</h2>
        <h2>Average star Ratings from Visitors:  ({averageRatings}) Stars</h2>
  
        <h2>Total Actually Stars Rated for this hostel: </h2>
        {/* Map (Map is an array method) over the hostel ratings array to render each one into h3 */}
        {hostel.ratings.map((rate) => (
          <h3>
            {" "}
            {!isNaN(rate) &&
              Array.from(Array(Number(rate)).keys()).map(() => (
                <FaStar color="#f5fa1b" />
              ))}
          </h3>
        ))}
        {/* A section to display rating chart title which is h2 and the chart rating component */}
        <h2>Chart distribution of ratings:</h2>
        <RatingsChart averageRatings={averageRatings}/>
      </section>
      {/* The review section to display  a hostel review details.*/}
      <section className="review">
        <h2>Reviews List </h2>
        {/* Map over a hostel reviews to display each one of the into HTML dev element 
        and to have two children first one is the name of person who added the review and the seconds is the review itself. */}
        {hostel.reviews.map((review) => (
          <div>
            <h3>User Name: {review.reviewer}</h3>
            <p>{review.review}</p>
          </div>
        ))}
        {/* A component to render add review form. */}
        <AddReview hostelId={hostel.id} getHostels={getHostels} />
        {/* addreview props */}
      </section>
    </div>
  );
};

export default HostelCard;
