import React from "react";
import axios from "axios";
import HostelCard from "../../components/HostelCard";
import "./style.css";
import Search from "../../components/Search";
import Banner from "../../components/Banner";

// The parent component for HostelCard, Banner and Search components
// Main is a page to display HostelCard, Banner and Search components and get the hostel data from the server by using the hostel endpoint.

const Main = () => {
  // hostels is initial empty array state
  // setHostels is a function will be used to update hostels value
  const [hostels, setHostels] = React.useState([]);

  // state: is place to store data, initial value [], the data coming from the server as array
  //props: to share the data with other components

  // searchInput is initial empty string state
  // setSearchInput is a function will be used to update searchInput value
  const [searchInput, setSearchInput] = React.useState("");

  // getHostels is a function to get the hostel date from the server by using axios library and
  const getHostels = async () => {
    //this method to hold the data until coming from the api
    const apiUrl = "https://server-cw1.herokuapp.com/hostels";
    //this is varible to assign to hostels endpoint

    const { data } = await axios.get(apiUrl); // this function used promise resolved the hostels data from the server
    // get method: to used axios get method to get hostels data
    setHostels(data); //this is function to update hostels state with api data
  };

  React.useEffect(() => {
    //this is react method to update the componenets
    if (!searchInput && !hostels.length) {
      //this is condition :if the searchinput and hostels data not exist then call getHostels function
      getHostels();
    }
  }, [searchInput, hostels]); // the component will be updated if there is any changes on the hostels data

  //console.log({ hostels });
  // return section
  return (
    <section className="container">
      <Banner />
      <div className="tour-template-block_title">
        <h3> North Coast Scotland! It is a wonderful destination</h3>
        <p>Plan a Better Journey to Scotland</p>
      </div>
      <div className="images">
        <img src="https://back.triptile.com/sites/default/files/styles/w_800/public/2019-01/edinburgh-1-min_0.jpg" />
        <img src="https://back.triptile.com/sites/default/files/styles/w_800/public/2019-01/inverness-2-min.jpg" />
        <img src="https://back.triptile.com/sites/default/files/styles/w_800/public/2019-01/4Glasgow-cropped-min_0.jpg" />
        <img src="" />
      </div>
      <Search
        setHostels={setHostels}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      {/* Add another child */}
      <section className="hostels">
        {/* class name */}
        <h2>List of Hostels North Cost | Scotland:</h2> {/* title */}
        {hostels.map(
          (
            hostel //array method to display all the hostels
          ) => (
            <HostelCard
              key={hostel.id}
              hostel={hostel}
              getHostels={getHostels}
            />
          )
        )}
      </section>
      {/* Add another child */}
    </section>
  );
};

export default Main;
