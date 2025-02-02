import React, { useState } from 'react';
import Lotus from '../Lotus'; 
import './tbu.css';
import lovestories from "../../assets/images/lovestories.jpg"; // Correct image path

const Today_by_unniyarcha = () => {
  const [animate, setAnimate] = useState(false); // Added state for animate

  return (
    <div>
      <div className={`banner-container7 ${animate ? "pop-out7" : ""}`}>
        <img
          src={lovestories}
          alt="Wedding Banner"
          className="ws-banner-img7"
        />
      </div>
      <Lotus>
        {/* You can add child components or elements here if needed */}
      </Lotus>
    </div>
  );
};

export default Today_by_unniyarcha;
