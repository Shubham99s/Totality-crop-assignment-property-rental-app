import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import propertiesData from '../assets/propertiesData.json';
import Property from '../components/Property';
import Filter from '../components/Filter';

const Properties = () => {
  const [data, setData] = useState(propertiesData);
  const [selectedCity, setSelectedCity] = useState('Any');
  const [selectedbedrooms, setSelectedBedrooms] = useState('Any');
  const [selectedPriceRange, setSelectedPriceRange] = useState('Any');

  console.log(selectedCity, selectedPriceRange, selectedbedrooms);

  const filterProperties = () => {
    setData(
      propertiesData.filter((property) => {
        return (
          (selectedCity === 'Any' || property.location === selectedCity) &&
          (selectedPriceRange === 'Any' ||
            (property.price >= parseInt(selectedPriceRange.split('-')[0]) &&
              property.price <= parseInt(selectedPriceRange.split('-')[1]))) &&
          (selectedbedrooms === 'Any' ||
            property.bedrooms === parseInt(selectedbedrooms))
        );
      })
    );
  };

  return (
    <>
      <Header />
      <div className="property-container">
        <h1>All Properties</h1>
        <h2>Find The Best Properties That Suits You</h2>

        <div className="filter-section">
          <Filter
            selectedCity={selectedCity}
            selectedbedrooms={selectedbedrooms}
            selectedPriceRange={selectedPriceRange}
            setSelectedCity={setSelectedCity}
            setSelectedBedrooms={setSelectedBedrooms}
            setSelectedPriceRange={setSelectedPriceRange}
          />
          <button className="filter-button" onClick={filterProperties}>
            Search
          </button>
        </div>

        <ul className="property-list">
          {data.map((item) => (
            <Property key={item.id} item={item} />
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Properties;
