import React, { useState } from 'react';
import Slider from 'react-slick';
import './index.css'; // Import custom styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from '@mui/material';
import dvalentine from '../../assets/images/dvalentine.jpg';
import aboutimg from '../../assets/images/aboutimg.jpg';
import earringlink from '../../assets/images/earringslink.jpg';
import necklaceslink from '../../assets/images/necklaceslink.jpg';
import Ankletslink from '../../assets/images/Ankletslink.jpg';
import divinelink from '../../assets/images/divinelink.jpg';
import Bangleslink from '../../assets/images/Bangleslink.jpg';
import mensjewelrylink from '../../assets/images/mensjewelrylink.jpg';
import Giftsforher from '../../assets/images/Giftsforher.jpg';
import Giftsforhim from '../../assets/images/Giftsforhim.jpg';
import inhousemanufacturing from '../../assets/images/inhousemanufacturing.jpg';

const Home = () => {
  const [animate, setAnimate] = useState(false);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    style:{ marginBottom: '80px' }
  };

  const testimonials = [
    {
      stars: '★★★★★',
      strong: 'Wow',
      text: 'It was so elegant and so super comfy to carry. I loved it and got very good compliments as well.',
      image: 'https://unniyarcha.com/cdn/shop/files/A_95c606b5-e6f9-4ef9-9f9f-98aad4846cb0.jpg?v=1712729558&width=720',
      cite: 'Bindu Madhavi Komandury',
    },
    {
      stars: '★★★★★',
      strong: 'Beautiful',
      text: 'Design and quality is good.',
      image: 'https://unniyarcha.com/cdn/shop/files/2C8A1794.jpg?v=1725544324&width=720',
      cite: 'Sarita Jena',
    },
    {
      stars: '★★★★★',
      strong: 'Excellent',
      text: 'Its a beautiful pendant. Spectacular craftsmanship 👍',
      image: 'https://unniyarcha.com/cdn/shop/files/2C8A3994_05a65c95-485c-436b-9e74-9b98cabb12c7.jpg?v=1712728834&width=720',
      cite: 'Vanita Arora',
    },
    {
      stars: '★★★★★',
      strong: 'Beauty on your wrist',
      text: 'Simple but attractive lotus with pink & green bangle suitable for any occasion loved it 😻',
      image: 'https://unniyarcha.com/cdn/shop/files/B.jpg?v=1712729356&width=720',
      cite: 'Christina Vincent',
    },
    {
      stars: '★★★★★',
      strong: 'GORGEOUS😍',
      text: 'Such a unique pair🥰🥰 absolutely stunning',
      image: 'https://unniyarcha.com/cdn/shop/files/C.jpg?v=1712729495&width=720',
      cite: 'Zeenath Ambareen',
    },
  ];

  return (
    <main>
      {/* Valentine's Day Section */}
      <div className={`dvalentine-container ${animate ? 'pop-out' : ''}`}>
        <img
          src={dvalentine}
          alt="Valentine's Day decoration"
          className="dvalentine-img"
          style={{ width: '100%', height: '581px' }}
        />
      </div>

      {/* About Section */}
      <div
        className={`aboutimg-container ${animate ? 'pop-out' : ''}`}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '1400px',
          height: '311px',
          marginBottom: '20px'
        }}
      >
        <img
          src={aboutimg}
          alt="About image"
          className="aboutimg-img"
          style={{ width: '825px', height: '151px' }}
        />
      </div>

      {/* Wedding Collection */}
      <div>
        <div className="section-header">
          <h1 className="section-header__title">Wedding Ready with Unniyarcha</h1>
        </div>
        <section className="shopify-section">
          <Box
            display="grid"
            gridTemplateColumns="repeat(3, 1fr)"
            gap={4}
            justifyContent="center"
          >
            {[earringlink, necklaceslink, Ankletslink, divinelink, Bangleslink, mensjewelrylink].map((image, index) => (
              <Box key={index} textAlign="center">
                <a href="/Weds">
                  <img
                    src={image}
                    alt={`Category ${index + 1}`}
                    className="category-img"
                    style={{ width: '405px', height: '405px' }}
                  />
                </a>
                <p className="category-title">{["EARRINGS", "NECKLACES", "ANKLETS", "DIVINE", "BANGLES", "MEN'S JEWELLERY"][index]}</p>
              </Box>
            ))}
          </Box>
        </section>
      </div>
         
     
<div className="gifts">
<div style={{ display: 'flex', justifyContent: 'space-between',  }} >
<div className="box1" style={{ display: 'flex', justifyContent: 'space-between', marginRight: "51px" }} >
  <a href="/Weds" className="her-link">
    <img
      src={Giftsforher}
      alt="Gifts for her"
      className="her-image"
      style={{ width: '580px', height: '580px', borderRadius: '8px', objectFit: 'cover' }}
    />
  </a>
</div>

<div className="box2">
  <a href="/Weds" className="him-link">
    <img
      src={Giftsforhim}
      alt="Gifts for him"
      className="him-image"
      style={{ width: '580px', height: '580px', borderRadius: '8px', objectFit: 'cover' }}
    />
  </a>
</div>
</div>
</div>




<div className="section-header"><div className="section-header__title">Festive Silver Earrings</div></div>
<div className="section-header"><div className="section-header__title">The perfect gift - Pure 92.5 Silver Anklets</div></div>
<div className="section-header"><div className="section-header__title">Bestsellers</div></div>



      {/* Testimonials Slider */}
      <div className="showcase-slider" >
        <h2 align="center" className="section-header">1 Lakh+ Happy Customers</h2>
        <Slider {...sliderSettings}>
          {testimonials.map((testimonial, index) => (
            <div key={index}   className="testimonials-slide">
              <blockquote className="testimonials-slider__text">
                <span className="testimonial-stars">{testimonial.stars}</span>
                <p><strong>{testimonial.strong}</strong></p>
                <p>{testimonial.text}</p>
                <cite><strong>{testimonial.cite}</strong></cite>
              </blockquote>
            </div>
          ))}
        </Slider>
         {/* In-house Manufacturing Section */}
      <div >
        <a href="/Weds">
          <img
            src={inhousemanufacturing}
            alt="In-house Manufacturing"
            className="manufact-img"
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </a>
      </div>
      </div>
    </main>
  );
};

export default Home;


