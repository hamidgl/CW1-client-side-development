import React from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

// Component name is RatingsChart
// It is a component to display the rating chart stars and using averageRatings props
const RatingsChart = ({ averageRatings }) => {
  console.log({ averageRatings });
  return (
    <div>
      <h3>
        {/* //condition the avaregerating is not nan then excuate nextline
          //arry: creating array of indexes same as the averge rating numbers, and used map to display star icons same as the rating numbers */}
        Average:{" "}
        {!isNaN(averageRatings) &&
          Array.from(Array(Number(averageRatings)).keys()).map(() => (
            <FaStar color="#f5fa1b" />
          ))}
      </h3>
    </div>
  );
};

export default RatingsChart;
