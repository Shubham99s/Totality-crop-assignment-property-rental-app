import React, { useState } from 'react';
import Context from '../context/Context';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Property = ({ item }) => {
  const [days, setDays] = useState(1);

  const handleIncrement = () => {
    setDays(days + 1);
  };

  const handleDecrement = () => {
    if (days > 1) {
      setDays(days - 1);
    }
  };

  return (
    <Context.Consumer>
      {(value) => {
        const { addCartItem } = value;
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
                <p className="days-text">
                  Total Days You're Renting This Property
                </p>
                <div className="days-box">
                  <button className="days-button" onClick={handleDecrement}>
                    <AiOutlineMinus />
                  </button>
                  <p>{days}</p>
                  <button className="days-button" onClick={handleIncrement}>
                    <AiOutlinePlus />
                  </button>
                </div>

                <p className="property-price">
                  {item.price} <span className="rs">Rs/day</span>
                </p>

                <button
                  className="add-button"
                  onClick={() => {
                    console.log({ ...item, days });
                    addCartItem({ ...item, days });
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="property-image-card">
              <img
                className="property-image"
                src={item.image}
                alt={item.title}
              />
            </div>
          </li>
        );
      }}
    </Context.Consumer>
  );
};

export default Property;
