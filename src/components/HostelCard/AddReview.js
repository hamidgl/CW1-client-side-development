import React from "react";
import axios from "axios";

const AddReview = ({ hostelId, getHostels }) => {
  const [toggle, setToggle] = React.useState(false); //togle is as boolean state to show or hide the add reveiw section,
  const [review, setReview] = React.useState({ reviewer: "", review: "" });

  //this is function to be call when typing into input form or textarea to update review state
  const handleReviewChange = (event) => {
    // even is object containing target which countain name or value...
    setReview({ ...review, [event.target.name]: event.target.value });
  };

  //handleSubmit is function will be call when click on submit button in the form add review form
  const handleSubmit = async (event) => {
    event.preventDefault(); //to stop the browser reloading behavior
    //Add review end point
    if (review.reviewer && review.review) {
      //this is condition that to check if the review state has review has review
      const apiUrl = `https://server-cw1.herokuapp.com/hostels/review/${hostelId}`; //if the condition is true then extenuate what is inside the url
      await axios.post(apiUrl, review);
      setReview({ reviewer: "", review: "" });
      setToggle(false);
      getHostels();
    }
  };

  const handleToggle = () => {
    //function to update togle state
    setToggle(!toggle);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {toggle ? "Cancel review" : "Add review"}
      </button>
      {/* this section, if togle is true show add review form otherwise render null */}
      {toggle ? (
        <div className="rev">
          <form>
            <input
              name="reviewer"
              value={review.reviewer}
              onChange={handleReviewChange}
              placeholder="Enter your name"
            />
            <textarea
              name="review"
              value={review.review}
              placeholder="Write review"
              onChange={handleReviewChange}
            />

            <button onClick={handleSubmit}>Submit</button>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default AddReview;
