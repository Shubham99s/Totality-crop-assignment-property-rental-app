import React from 'react';
import Header from '../components/Header';
import customerReviews from '../assets/customerReviews.json';
import Footer from '../components/Footer';
import propertiesData from '../assets/propertiesData.json';

const Home = () => {
  return (
    <>
      <Header />
      <div className="home-container">
        <div className="container-1">
          <h1>Discover Most Suitable Property</h1>
          <p>
            Find a variety of properties that suit you very easily Forget all
            difficulties in finding a residence for you
          </p>
          <div className="extra">
            <div className="extra-card">
              <p className="extra-no">1678+</p>
              <p className="extra-text">Happy Customers</p>
            </div>
            <div className="extra-card">
              <p className="extra-no">150+</p>
              <p className="extra-text">Properties Available</p>
            </div>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1524292691042-82ed9c62673b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="home-image-1"
          className="home-image"
        />
      </div>
      <div className="container-2">
        <h2>Best Choices</h2>
        <h1>Popular Properties</h1>
        <ul className="popular-list">
          <li className="popular-card">
            <img className="popular-image" src={propertiesData[0].image} />
            <p className="popular-title">{propertiesData[0].title}</p>
            <p className="popular-location">{propertiesData[0].location}</p>
            <p className="popular-price">Rs.{propertiesData[0].price}</p>
          </li>
          <li className="popular-card">
            <img className="popular-image" src={propertiesData[2].image} />
            <p className="popular-title">{propertiesData[2].title}</p>
            <p className="popular-location">{propertiesData[2].location}</p>
            <p className="popular-price">Rs.{propertiesData[2].price}</p>
          </li>
          <li className="popular-card">
            <img className="popular-image" src={propertiesData[5].image} />
            <p className="popular-title">{propertiesData[5].title}</p>
            <p className="popular-location">{propertiesData[5].location}</p>
            <p className="popular-price">Rs.{propertiesData[5].price}</p>
          </li>
          <li className="popular-card">
            <img className="popular-image" src={propertiesData[9].image} />
            <p className="popular-title">{propertiesData[9].title}</p>
            <p className="popular-location">{propertiesData[9].location}</p>
            <p className="popular-price">Rs.{propertiesData[9].price}</p>
          </li>
        </ul>
      </div>
      <div className="container-3">
        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="value-image"
          className="home-image"
        />
        <div className="value-card">
          <h2>Our Value</h2>
          <h1>Value We Give To You</h1>
          <p>
            We always ready to help by providing the best services to you. We
            believe a good place to live makes your life better.
          </p>
          <ul className="value-list">
            <li className="value-box">
              <p className="value-text-1">Best interest rates on the market</p>
              <p className="value-text-2">
                Discover the unparalleled advantage of our Real Estate
                offerings, boasting the most competitive interest rates in the
                market.
              </p>
            </li>
            <li className="value-box">
              <p className="value-text-1">Best price on the market</p>
              <p className="value-text-2">
                Find the best deal on the market with our unbeatable product.
                Book now for top quality and performance without compromising on
                price.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="customer-section">
        <h1>Customer Reviews</h1>
        <ul>
          {customerReviews.map((item) => (
            <li className="customer-card" key={item.id}>
              <p className="customer-title">{item.title}</p>
              <p className="customer-name">{item.reviewer}</p>
              <p className="customer-comment">{item.comment}</p>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Home;
