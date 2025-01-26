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
  };

  const slides = [
    {
      content: `
        <blockquote class="testimonials-slider__text">
          <span class="testimonial-stars">★★★★★</span>
          <div class="rte-setting text-spacing">
            <p><strong>Wow</strong></p>
            <p>It was so elegant and so super comfy to carry. I loved it and got very good compliments as well.</p>
          </div>
          <div class="testimonial-image testimonial-image--round">
            <div class="image-wrap text-spacing loaded">
              <img 
                src="//unniyarcha.com/cdn/shop/files/A_95c606b5-e6f9-4ef9-9f9f-98aad4846cb0.jpg?v=1712729558&amp;width=720" 
                alt="" 
                srcset="//unniyarcha.com/cdn/shop/files/A_95c606b5-e6f9-4ef9-9f9f-98aad4846cb0.jpg?v=1712729558&amp;width=180 180w, 
                        //unniyarcha.com/cdn/shop/files/A_95c606b5-e6f9-4ef9-9f9f-98aad4846cb0.jpg?v=1712729558&amp;width=360 360w, 
                        //unniyarcha.com/cdn/shop/files/A_95c606b5-e6f9-4ef9-9f9f-98aad4846cb0.jpg?v=1712729558&amp;width=540 540w, 
                        //unniyarcha.com/cdn/shop/files/A_95c606b5-e6f9-4ef9-9f9f-98aad4846cb0.jpg?v=1712729558&amp;width=720 720w" 
                loading="eager" 
                class="image-element" 
                sizes="(min-width: 769px) 65px, 65px">
            </div>
          </div>
          <cite>Bindu Madhavi Komandury</cite>
        </blockquote>
      `,
      image: "//unniyarcha.com/cdn/shop/files/A_95c606b5-e6f9-4ef9-9f9f-98aad4846cb0.jpg?v=1712729558"
    },
    {
      content: "Discover our new features.",
      image: null // Optional, no image for this slide
    },
    {
      content: "Join our community today.",
      image: null // Optional, no image for this slide
    }
  ];
  

  return (
    <main>
      <div>
        <div className={`dvalentine-container ${animate ? 'pop-out' : ''}`}>
          <img
            src={dvalentine}
            alt="Valentine's Day decoration"
            className="dvalentine-img"
            style={{ width: '100%', height: '581px' }}
          />
        </div>

        <div
          className={`aboutimg-container ${animate ? 'pop-out' : ''}`}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '1400px',
            height: '311px',
          }}
        >
          <img
            src={aboutimg}
            alt="About image"
            className="aboutimg-img"
            style={{ width: '825px', height: '151px' }}
          />
        </div>

        <div>
          <div className="section-header">
            <h1 className="section-header__title">Wedding Ready with Unniyarcha</h1>
          </div>

          <section id="shopify-section-template" className="shopify-section">
            <Box
              display="grid"
              gridTemplateColumns="repeat(3, 1fr)"
              gap={4}
              justifyContent="center"
            >
              {/* First Row */}
              <Box textAlign="center">
                <a href="/Weds" className="ear">
                  <img
                    src={earringlink}
                    alt="Earrings"
                    className="valentine-img"
                    style={{ width: '405px', height: '405px' }}
                  />
                </a>
                <p className="ear-title">EARRINGS</p>
              </Box>

              <Box textAlign="center">
                <a href="/Weds" className="neck">
                  <img
                    src={necklaceslink}
                    alt="Necklaces"
                    className="neck"
                    style={{ width: '405px', height: '405px' }}
                  />
                </a>
                <p className="neck-title">NECKLACES</p>
              </Box>

              <Box textAlign="center">
                <a href="/Weds" className="anklets">
                  <img
                    src={Ankletslink}
                    alt="Anklets"
                    className="anklets"
                    style={{ width: '405px', height: '405px' }}
                  />
                </a>
                <p className="anklets-title">ANKLETS</p>
              </Box>

              {/* Second Row */}
              <Box textAlign="center">
                <a href="/Weds" className="divine">
                  <img
                    src={divinelink}
                    alt="Divine"
                    className="divine"
                    style={{ width: '405px', height: '405px' }}
                  />
                </a>
                <p className="divine-title">DIVINE</p>
              </Box>

              <Box textAlign="center">
                <a href="/Weds" className="Bangles">
                  <img
                    src={Bangleslink}
                    alt="Bangles"
                    className="Bangles"
                    style={{ width: '405px', height: '405px' }}
                  />
                </a>
                <p className="Bangles-title">BANGLES</p>
              </Box>

              <Box textAlign="center">
                <a href="/Weds" className="mensjewelry">
                  <img
                    src={mensjewelrylink}
                    alt="Men's Jewelry"
                    className="mensjewelry"
                    style={{ width: '405px', height: '405px' }}
                  />
                </a>
                <p className="mensjewelry-title">MENS JEWELLERY</p>
              </Box>
            </Box>
          </section>
        </div>
     
        <div className="gifts">
          <div className="box">
            <a href="/Weds" className="her">
              <img
                src={Giftsforher}
                alt="forher"
                className="her"
                style={{ width: '300px', height: 'auto', borderRadius: '8px', alignItems: "left" }}
              />
            </a>
          </div>
          
          <div className="box">
            <a href="/Weds" className="him">
              <img
                src={Giftsforhim}
                alt="forhim"
                className="him"
                style={{ width: '300px', height: 'auto', borderRadius: '8px', alignItems: "right" }}
              />
            </a>
          </div>
        </div>


        <div className="showcase-slider" style={{ marginBottom: '80px' }}>
          <h2 alignItems="center">1 Lakh+ Happy Custumer</h2>
          <Slider {...sliderSettings}>
            {slides.map(slide => (
              <div  className="slide">
                <p >{slide.blockquote}</p>
                <p >{slide.text}</p>
              </div>
            ))}
          </Slider>
        </div>

        <div>
          <a href="/Weds" className="manufact">
            <img
              src={inhousemanufacturing}
              alt="manufact"
              className="manufact"
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Home;
