import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const getQueryValue = (queryName) => {
  const { search } = window.location;
  const queries = search.split("&&");
  const findQuery = queries.filter((query) => query.includes(queryName));
  return findQuery[0]?.replace(`${queryName}=`, "").replace("?", "");
};

const EditItinerary = () => {
  const [stage, setStage] = React.useState({
    hostel: null,
    nights: null,
  });
  const [hostels, setHostels] = React.useState([]);

  const navigate = useNavigate();

  const getHostels = async () => {
    const apiUrl = "https://server-cw1.herokuapp.com/hostels";
    const { data } = await axios.get(apiUrl);
    setHostels(data);
  };

  const getItineraries = async () => {
    const userName = getQueryValue("user");
    const stageNumber = getQueryValue("stage");
    const apiUrl = `https://server-cw1.herokuapp.com/itineraries/${userName}`;
    const { data } = await axios.get(apiUrl);

    const stage = data[0].stages.find(
      (stage) => Number(stage.stage) === Number(stageNumber)
    );

    setStage(stage);
  };

  const updateItineraryStage = async () => {
    const userName = getQueryValue("user");
    const stageNumber = getQueryValue("stage");
    const apiUrl = `https://server-cw1.herokuapp.com/itineraries/stages/update/${userName}/${stageNumber}`;
    await axios.post(apiUrl, stage);
    navigate("/itineraries");
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    setStage({ ...stage, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (stage.nights && stage.hostel) {
      updateItineraryStage();
    }
  };

  React.useEffect(() => {
    getHostels();
    getItineraries();
  }, []);

  if (!stage) {
    return null;
  }

  return (
    <div className="container">
      <form className="create-itinerary-form">
        <h2>Edit Itinerary</h2>
        <label>Nights number:</label>
        <input
          name="nights"
          type="number"
          value={stage.nights}
          placeholder="Enter nights number"
          onChange={handleInputChange}
        />
        <div>
          <label htmlFor="hostel">Select hostel:</label>
          <select
            name="hostel"
            id="hostel"
            value={stage.hostel}
            onChange={handleInputChange}
          >
            {hostels.map((hostel) => (
              <option key={hostel.id} value={hostel.id}>
                {hostel.name}
              </option>
            ))}
          </select>
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default EditItinerary;
