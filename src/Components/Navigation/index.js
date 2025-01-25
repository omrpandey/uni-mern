import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { Button } from '@mui/material';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="col-sm-9 navPart2">
        <ul className="list list-inline">
          <li className="list-inline-item2">
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
          <li className="list-inline-item has-submenu">
            <Link to="/services" className="sui-dang">
              Shop by category <IoIosArrowDown />
            </Link>
            <div className="submenu">
              <div className="submenu-content">
                <div className="submenu-section">
                  <h4>Traditional</h4>
                  <Link to="/earrings"><Button>Earrings</Button></Link>
                  <Link to="/anklets"><Button>Anklets</Button></Link>
                  <Link to="/toe-rings"><Button>Toe Rings</Button></Link>
                  <Link to="/necklace"><Button>Necklace</Button></Link>
                  <Link to="/bangles"><Button>Bangles</Button></Link>
                  <Link to="/rings"><Button>Rings</Button></Link>
                  <Link to="/head-jewelry"><Button>Head Jewelry</Button></Link>
                  <Link to="/silver-articles"><Button>Silver Articles</Button></Link>
                  <Link to="/nose-pins"><Button>Nose Pins</Button></Link>
                </div>
                <div className="submenu-section">
                  <h4>Contemporary</h4>
                  <Link to="/earrings"><Button>Earrings</Button></Link>
                  <Link to="/necklace"><Button>Necklace</Button></Link>
                  <Link to="/anklets"><Button>Anklets</Button></Link>
                  <Link to="/rings"><Button>Rings</Button></Link>
                  <Link to="/bangles"><Button>Bangles</Button></Link>
                </div>
                <div className="submenu-section">
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
          <li className="list-inline-item">
            <Link to="/contact">Collections <IoIosArrowDown /></Link>
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
            <Link to="/contact" className="sui-dang">Today By Unniyarcha</Link>
            <span className="new-text">
              <sup>New</sup>
            </span>
          </li>
          <li className="list-inline-item">
            <Link to="/contact">Gifting <IoIosArrowDown /></Link>
          </li>
          <li className="list-inline-item">
            <Link to="/contact">Reviews</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
