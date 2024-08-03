import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header-section">
      <div className="logo">
        <Link to="/" className="link-logo">
          Property Rental App
        </Link>
      </div>
      <div className="navigation">
        <Link className="link-list" to="/">
          Home
        </Link>
        <Link className="link-list" to="/properties">
          Properties
        </Link>
        <Link className="link-list" to="/cart">
          Cart
        </Link>
      </div>
    </div>
  );
};

export default Header;
