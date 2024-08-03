import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Context from '../context/Context';

const CartItem = ({
  item,
  incrementCartItemQuantity,
  decrementCartItemQuantity,
}) => {
  return (
    <li className="property-card">
      <div className="property-info">
        <p className="property-title">{item.title}</p>
        <p className="property-desc">{item.description}</p>
        <p className="property-location">Location: {item.location}</p>
        <hr />
        <p className="property-bedroom">Bedrooms: {item.bedrooms}</p>
        <p className="property-amenities">Amenities:</p>
        <div className="amenities">
          {item.amenities.map((each) => (
            <p key={each}>{each} |</p>
          ))}
        </div>
        <hr />
        <div className="property-sub-card">
          <p className="days-text">Total Days You're Renting This Property</p>
          <div className="days-box">
            <button
              className="days-button"
              onClick={() => {
                decrementCartItemQuantity(item.id);
              }}
            >
              <AiOutlineMinus />
            </button>
            <p>{item.days}</p>
            <button
              className="days-button"
              onClick={() => {
                incrementCartItemQuantity(item.id);
              }}
            >
              <AiOutlinePlus />
            </button>
          </div>

          <p className="property-price">
            {item.price} <span className="rs">Rs/day</span>
          </p>
        </div>
      </div>
      <div className="property-image-card">
        <img className="property-image" src={item.image} alt={item.title} />
      </div>
    </li>
  );
};

export default CartItem;
