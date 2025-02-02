import React, { useState } from 'react';
import Lotus from '../Lotus'; 
import gifting from "../../assets/images/gifting.jpg"; // Correct image path

const Gifting = () => {
  const [animate, setAnimate] = useState(false); // Added state for animate

  return (
    <div>
      <div className={`banner-container7 ${animate ? "pop-out7" : ""}`}>
        <img
          src={gifting}
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

export default Gifting;
