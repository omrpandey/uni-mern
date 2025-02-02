import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { Button } from '@mui/material';
import "./nav.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="col-sm-9 navPart2">
        <ul className="list list-inline">
          <li className="list-inline-item">
            <Link to="/Flashsaless">FlashSale</Link>
            <span className="new-text">
              <sup>New</sup>
            </span>
          </li>
          <li className="list-inline-item">
            <Link to="/Weds" className="sui-dang">Wedding Special</Link>
            <span className="new-text">
              <sup>New</sup>
            </span>
          </li>
          <li className="list-inline-item has-submenu-1">
            <div className="submenu-trigger-1">
              <Link to="/shopss" className="sui-dang-1">
                Shop by category <IoIosArrowDown />
              </Link>
            </div>
            <div className="submenu-1">
              <div className="submenu-content-1">
                <div className="submenu-section-1">
                  <h4>Traditional</h4>
                  <Link to="/Lotus"><Button>Earrings</Button></Link>
                  <Link to="/Flashsaless"><Button>Anklets</Button></Link>
                  <Link to="/toe-rings"><Button>Toe Rings</Button></Link>
                  <Link to="/necklace"><Button>Necklace</Button></Link>
                  <Link to="/bangles"><Button>Bangles</Button></Link>
                  <Link to="/rings"><Button>Rings</Button></Link>
                  <Link to="/head-jewelry"><Button>Head Jewelry</Button></Link>
                  <Link to="/silver-articles"><Button>Silver Articles</Button></Link>
                  <Link to="/nose-pins"><Button>Nose Pins</Button></Link>
                </div>
                <div className="submenu-section-1">
                  <h4>Contemporary</h4>
                  <Link to="/earrings"><Button>Earrings</Button></Link>
                  <Link to="/necklace"><Button>Necklace</Button></Link>
                  <Link to="/anklets"><Button>Anklets</Button></Link>
                  <Link to="/rings"><Button>Rings</Button></Link>
                  <Link to="/bangles"><Button>Bangles</Button></Link>
                </div>
                <div className="submenu-section-1">
                  <h4>Mens</h4>
                  <Link to="/chains"><Button>Chains</Button></Link>
                  <Link to="/bracelet"><Button>Bracelet</Button></Link>
                  <Link to="/rings"><Button>Rings</Button></Link>
                </div>
              </div>
            </div>
          </li>

          <li className="list-inline-item">
            <Link to="/Lotus">Lotus</Link>
            <span className="new-text">
              <sup>New</sup>
            </span>
          </li>
          <li className="list-inline-item has-submenu-2">
            <div className="submenu-trigger-1">
              <Link to="#" className="sui-dang-1">
                Collection <IoIosArrowDown />
              </Link>
            </div>
          
              <div className="submenu-content-2">
              <div className="submenu-2">
              <div className="submenu-content-2">
                <div className="submenu-section-2">
                  <Link to="/earrings"><Button>999 Silver coin collection</Button></Link>
                  <Link to="/anklets"><Button>Mangalsutra</Button></Link>
                  <Link to="/toe-rings"><Button>Swan Collection</Button></Link>
                  <Link to="/necklace"><Button>Earcuff</Button></Link>
                  <Link to="/bangles"><Button>Bridgerton Special</Button></Link>
                  <Link to="/rings"><Button>Celebrations ( Green )</Button></Link>
                  <Link to="/head-jewelry"><Button>Aam Ras( Aambi )</Button></Link>
                  <Link to="/silver-articles"><Button>Evil Eye Collection</Button></Link>
                  <Link to="/nose-pins"><Button>Minimal</Button></Link>
                 <Link to="/nose-pins"><Button>Pearl collectionl</Button></Link>
                </div>
                </div>
              </div>
      </div>
          </li>
         
          <li className="list-inline-item">
            <Link to="/SuiDang" className="sui-dang">
              Sui <span>&nbsp;</span> Dang
            </Link>
            <span className="new-text">
              <sup>New</sup>
            </span>
          </li>
          <li className="list-inline-item">
            <Link to="/ReShop" className="sui-dang">Religious Designs</Link>
            <span className="new-text">
              <sup>New</sup>
            </span>
          </li>
          <li className="list-inline-item">
            <Link to="/Today_by_unniyarcha" className="sui-dang">Today By Unniyarcha</Link>
            <span className="new-text">
              <sup>New</sup>
            </span>
          </li>
          <li className="list-inline-item has-submenu-3">
            <Link to="/Gifting">Gifting <IoIosArrowDown /></Link>
            
            <div className="submenu-3">
              <div className="submenu-content-3">
                <div className="submenu-section-3">
                  <Link to="/earrings"><Button>Gift for Her</Button></Link>
                  <Link to="/anklets"><Button>Gift under 1499</Button></Link>
                  <Link to="/toe-rings"><Button>Gift for Him</Button></Link>
                  <Link to="/necklace"><Button>Gift under 2999</Button></Link>
                  <Link to="/bangles"><Button>Gift under 2999l</Button></Link>
                  </div>
                </div>
              </div>
          </li>
          <li className="list-inline-item">
            <Link to="/Reviews">Reviews</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
