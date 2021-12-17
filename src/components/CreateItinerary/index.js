import React from "react";
import axios from "axios";
import "./style.css";

const CreateItinerary = () => {
  const [name, setName] = React.useState("");
  const [stage, setStage] = React.useState({
    stage: null,
    hostel: null,
    nights: null,
  });
  const [hostels, setHostels] = React.useState([]);

  const getHostels = async () => {
    const apiUrl = "https://server-cw1.herokuapp.com/hostels";
    const { data } = await axios.get(apiUrl);
    setHostels(data);
  };

  const createItineraryStage = async () => {
    const apiUrl = `https://server-cw1.herokuapp.com/itineraries/stages/new/${name}`;
    await axios.post(apiUrl, stage);
    window.location.reload();
  };

  const handleNameChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    setStage({ ...stage, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && stage.nights && stage.hostel && stage.stage) {
      createItineraryStage();
    }
  };

  React.useEffect(() => {
    getHostels();
  }, []);

  return (
    <div>
      <form className="create-itinerary-form">
        <h2>Create Itinerary</h2>
        <input
          name="name"
          value={name}
          placeholder="Enter your name"
          onChange={handleNameChange}
        />
        <input
          name="stage"
          type="number"
          value={stage.stage}
          placeholder="Enter stage number"
          onChange={handleInputChange}
        />
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

export default CreateItinerary;
