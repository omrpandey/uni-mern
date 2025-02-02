import React, { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal'; // Import ScrollReveal

const Reviews = () => {
  const [openForm, setOpenForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(5);
  const [reviewTitle, setReviewTitle] = useState('');
  const [review, setReview] = useState('');
  const [file, setFile] = useState(null);

  const handleFormToggle = () => setOpenForm(!openForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      name,
      email,
      rating,
      reviewTitle,
      review,
      file,
    });
  };

  useEffect(() => {
    // Handle progress bar width adjustment
    const bars = document.querySelectorAll('.progress-bar__outter-line');
    const COUNT_STARS = 12;

    bars.forEach((el) => {
      let rating = el.dataset.rating;

      let percent = (100 * rating) / COUNT_STARS;
      console.log(percent);
      el.querySelector('.progress-bar__inner-line').style.width = `${percent}%`;
    });

    // Reveal headlines with ScrollReveal
    ScrollReveal().reveal('.headline');
  }, []); // Empty dependency array to run only on mount

  return (
    <div className="container grid">
      <div className="product-reviews">
        <div className="product-reviews__info reviews-info">
          <h2 className="reviews-info__title headline">12 reviews</h2>
          <fieldset className="rating">
            <div className="rating__group">
              <input
                type="radio"
                className="rating__star"
                name="product-rating"
                value="1"
                aria-label="one star"
              />
              <input
                type="radio"
                className="rating__star"
                name="product-rating"
                value="2"
                aria-label="two star"
              />
              <input
                type="radio"
                className="rating__star"
                name="product-rating"
                value="3"
                aria-label="three star"
              />
              <input
                type="radio"
                className="rating__star"
                name="product-rating"
                value="4"
                aria-label="four star"
                checked
              />
              <input
                type="radio"
                className="rating__star"
                name="product-rating"
                value="5"
                aria-label="five star"
              />
            </div>
          </fieldset>
          <span className="reviews-info__caption">9 out of 12 (75%)</span>
          <span className="reviews-info__caption">Customers recommended this product</span>
        </div>
        <div className="product-reviews__bar reviews-bar">
          <ul className="list-reset reviews-bar__list">
            {[5, 4, 3, 2, 1].map((star, index) => (
              <li key={star} className="reviews-bar__item">
                <div className="progress-bar">
                  <span className="progress-bar__star">{star}</span>
                  <div className="progress-bar__outter-line" data-rating={index + 1}>
                    <span
                      className={`progress-bar__inner-line progress-bar__inner-line--${getRatingClass(
                        index + 1
                      )}`}
                    ></span>
                  </div>
                  <span className="progress-bar__quantity">{index + 1}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="product-gallery">
        <img
          src="https://varkala-react-2.vercel.app/_next/image?url=%2Fimg%2Fproduct%2F0950354513_1_1_1.jpg&w=1920&q=75"
          width="390px"
          height="646px"
          alt="product"
        />
      </div>

      {/* Review Form */}
      <div className="right-side">
        <button onClick={handleFormToggle} className="write-review-button">
          Write a Review
        </button>

        {openForm && (
          <div className="review-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name (public)</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Smith"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email (private)</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="rating">Rating</label>
                <select
                  id="rating"
                  value={rating}
                  onChange={(e) => setRating(Number(e.target.value))}
                  required
                >
                  {[5, 4, 3, 2, 1].map((star) => (
                    <option key={star} value={star}>{star} Star</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="reviewTitle">Review Title</label>
                <input
                  type="text"
                  id="reviewTitle"
                  value={reviewTitle}
                  onChange={(e) => setReviewTitle(e.target.value)}
                  placeholder="Give your review a title"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="review">Review</label>
                <textarea
                  id="review"
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  placeholder="Write your comments here"
                  rows="5"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="file">Picture/Video (optional)</label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>

              <div className="form-group">
                <p>
                  How we use your data: We’ll only contact you about the review you left, and only if necessary. By submitting your review, you agree to Judge.me’s terms, privacy, and content policies.
                </p>
              </div>

              <button type="submit" className="submit-button">
                Submit Review
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

const getRatingClass = (rating) => {
  switch (rating) {
    case 5:
      return 'excellent';
    case 4:
      return 'good';
    case 3:
      return 'normal';
    case 2:
      return 'not-bad';
    case 1:
      return 'bad';
    default:
      return '';
  }
};

export default Reviews;
