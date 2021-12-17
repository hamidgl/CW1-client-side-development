import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css";

const DisplayItineraries = () => {
  const [userName, setUserName] = React.useState("");
  const [itineraries, setItineraries] = React.useState([]);
  const [hostels, setHostels] = React.useState([]);

  const navigate = useNavigate();

  const getItineraries = async () => {
    const apiUrl = `https://server-cw1.herokuapp.com/itineraries/${userName}`;
    const { data } = await axios.get(apiUrl);
    await data.map((itinerary) =>
      itinerary.stages.map((stage) => getHostel(stage.hostel))
    );
    setItineraries(data);
  };

  const getHostel = async (hostelId) => {
    const apiUrl = `https://server-cw1.herokuapp.com/hostels/${hostelId}`;
    const { data } = await axios.get(apiUrl);
    setHostels([...hostels, ...data]);
  };

  const handleInputChange = (event) => {
    setUserName(event.target.value);
  };

  const handleGetItineraries = (event) => {
    event.preventDefault();
    if (userName) {
      getItineraries();
    }
  };

  // findHostel is a function to filter out specific hostel by hostel ID from array of hostels.

  const findHostel = (hostelId) => {
    console.log({ hostels });
    if (hostels.length) {
      return (
        hostels.find((hostel) => Number(hostel.id) === Number(hostelId)) || {}
      );
    }
    return {};
  };

  return (
    <div className="display-itineraries">
      <h2>Enter your name to display itineraries:</h2>
      <form>
        <input
          name="userName"
          value={userName}
          placeholder="Enter your name to get your itineraries"
          onChange={handleInputChange}
          //form to display iti
        />
        <button onClick={handleGetItineraries}>Get itineraries</button>
      </form>
      {itineraries.length
        ? itineraries.map((itinerary) => (
            <div>
              <h2>User: {itinerary.user}</h2>
              <h3>Start Date: {itinerary.startdate}</h3>
              <div>
                <h3>Stages:-</h3>
                {itinerary.stages.map((stage) => (
                  <div className="stage">
                    <div className="itinerary-stage">
                      <h4>Stage: {stage.stage}</h4>
                      <h4>Nights: {stage.nights}</h4>
                    </div>
                    {stage.hostel ? (
                      <div className="itinerary-hostel">
                        <div>
                          <h4>Hostel:-</h4>
                          <h5>Name: {findHostel(stage.hostel).name}</h5>
                          <h5>Address: {findHostel(stage.hostel).address}</h5>
                        </div>
                        <div className="map">
                          <iframe
                            src={`https://maps.google.com/maps?q=${
                              findHostel(stage.hostel).address
                            }&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                            frameBorder="0"
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                          ></iframe>
                        </div>
                      </div>
                    ) : null}
                    <button
                      onClick={() => {
                        navigate(
                          `/itineraries/edit?user=${itinerary.user}&&stage=${stage.stage}`
                        );
                      }}
                      className="edit"
                    >
                      Edit Stage
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default DisplayItineraries;
