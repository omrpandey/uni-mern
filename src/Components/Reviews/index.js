import React, { useState } from "react";
import "./review.css";

const ReviewPage = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(!showForm);
  };
 // Define sortOption state
 const [sortOption, setSortOption] = useState("alphabetically");

 // Handle change for sort option
 const handleSortChange = (event) => {
   setSortOption(event.target.value);
 };
  return (
    <div className="review-container">
      {/* Review Heading */}
      <h2 className="review-heading">Reviews</h2>

      {/* Review Box */}
      <div className="review-box">
        <div className="review-content">
          {/* Left Side - Stars and Text */}
          <div className="review-left">
            <div className="stars">★★★★★</div>
            <p className="review-text">Based on reviews</p>
          </div>

          {/* Right Side - Progress Bars and Review Button */}
          <div className="review-right">
            <div className="progress-text-container">
              <p>★★★★★ <span className="progress-inline"><span className="progress-fill" style={{ width: "80%" }}></span></span> 80%</p>
              <p>★★★★☆ <span className="progress-inline"><span className="progress-fill" style={{ width: "60%" }}></span></span> 60%</p>
              <p>★★★☆☆ <span className="progress-inline"><span className="progress-fill" style={{ width: "40%" }}></span></span> 40%</p>
              <p>★★☆☆☆ <span className="progress-inline"><span className="progress-fill" style={{ width: "20%" }}></span></span> 20%</p>
              <p>★☆☆☆☆ <span className="progress-inline"><span className="progress-fill" style={{ width: "10%" }}></span></span> 10%</p>
            </div>

            <div className="sort-dropdown-container">
  <select
    id="sort-option"
    value={sortOption}
    onChange={handleSortChange}
  >
    <option value="alphabetically">Most Recent</option>
    <option value="price-low-high">Highest Rating</option>
    <option value="price-high-low">Lowest Rating</option>
    <option value="rating">Picture Only</option>
  </select>
</div>


            {/* Transparent Button to Show Form */}
            <button className="review-btn" onClick={handleButtonClick}>
              Write a Review
            </button>
          </div>
        </div>

        {/* Dropdown Form (Visible on Button Click) */}
        {showForm && (
          <div className="review-form">
            <h3>Submit Your Review</h3>
            <form>
              <div className="form-field">
                <label>Name (Displayed Publicly)</label>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="form-field">
                <label>Email (Private)</label>
                <input type="email" placeholder="Enter your email" />
              </div>
              <div className="form-field">
                <label>Rating</label>
                <select>
                  <option value="5">5 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="2">2 Stars</option>
                  <option value="1">1 Star</option>
                </select>
              </div>
              <div className="form-field">
                <label>Review Title</label>
                <input type="text" placeholder="Give your review a title" />
              </div>
              <div className="form-field">
                <label>Review</label>
                <textarea placeholder="Write your comments here"></textarea>
              </div>
              <div className="form-field">
                <label>Picture/Video (Optional)</label>
                <input type="file" />
              </div>
              <p>How we use your data: We’ll only contact you about the review you left, and only if necessary. By submitting your review, you agree to Judge.me’s terms, privacy, and content policies.</p>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewPage;
