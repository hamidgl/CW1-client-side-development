import React from "react";
import axios from "axios";
import "./style.css";
import Banner from "../../components/Banner";
import DisplayItineraries from "../../components/DisplayItineraries";
import CreateItinerary from "../../components/CreateItinerary";

const Itineraries = () => {
  const [itineraries, setItineraries] = React.useState([]);

  const getItineraries = async () => {
    const apiUrl = "https://server-cw1.herokuapp.com/itineraries";
    const { data } = await axios.get(apiUrl); // promise resolved
    setItineraries(data);
  };

  React.useEffect(() => {
    getItineraries();
  }, []);

  return (
    <div className="container">
      <Banner />
      <div className="tour-template-block_title">
        <h2>Scotland Trips</h2>

        <p>Scotland trip packages and planning advice by travel experts</p>
      </div>

      <div className="images">
        <img src="https://back.triptile.com/sites/default/files/styles/w_800/public/2019-01/edinburgh-1-min_0.jpg" />
        <img src="https://back.triptile.com/sites/default/files/styles/w_800/public/2019-01/inverness-2-min.jpg" />
        <img src="https://back.triptile.com/sites/default/files/styles/w_800/public/2019-01/4Glasgow-cropped-min_0.jpg" />
      </div>

      <p>
        Keep reading for fantastic outdoor activities, cosy accommodation,
        scenic road trips, Harry Potter railway tours, inspirational
        itineraries, and historic city breaks, to name a few!
      </p>
      <breaks></breaks>
      <p>
        Search for accommodation, check availability and save your favourite
        places by clicking the heart.
      </p>
      <breaks></breaks>
      <p>
        Then when it comes to booking you can get to your chosen place to stay
        quickly and easily. With trip planner you can share your options with
        your friends too.
      </p>

      <div className="contact">
        <h1>Create your own itinerary planning!</h1>
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d296663.521539268!2d-5.133956734922389!3d57.561607944581006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x488e618b4e88b1f1%3A0xbf51c8fda4de8e4c!2sTorridon%20Youth%20Hostel%2C%20Torridon%2C%20Achnasheen%20IV22%202EZ!3m2!1d57.5441206!2d-5.5043868!4m5!1s0x488f714b0733fac9%3A0x1a76063de542e314!2sInverness%20Youth%20Hostel%2C%20Victoria%20Dr%2C%20Inverness%20IV2%203QB!3m2!1d57.479924499999996!2d-4.2108755!5e0!3m2!1sen!2suk!4v1639694237678!5m2!1sen!2suk"></iframe>
        </div>
      </div>
      <CreateItinerary />
      <DisplayItineraries />
    </div>
  );
};
export default Itineraries;
