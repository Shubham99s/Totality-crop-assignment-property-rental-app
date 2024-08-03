import React, { useState } from 'react';

const Filter = ({
  selectedCity,
  selectedbedrooms,
  selectedPriceRange,
  setSelectedCity,
  setSelectedBedrooms,
  setSelectedPriceRange,
}) => {
  const cities = [
    { id: 0, city: 'Any' },
    { id: 1, city: 'Indore' },
    { id: 2, city: 'Bhopal' },
    { id: 3, city: 'Jabalpur' },
    { id: 4, city: 'Gwalior' },
  ];

  const bedrooms = [
    { id: 0, bedroom: 'Any' },
    { id: 1, bedroom: 1 },
    { id: 2, bedroom: 2 },
    { id: 3, bedroom: 3 },
    { id: 4, bedroom: 4 },
  ];

  const priceRange = [
    { id: 0, range: 'Any' },
    { id: 1, range: '1000-5000' },
    { id: 2, range: '5000-10000' },
  ];

  const handleFilterCity = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleFilterBedrooms = (event) => {
    setSelectedBedrooms(event.target.value);
  };

  const handlePriceRange = (event) => {
    setSelectedPriceRange(event.target.value);
  };

  const filteredcity =
    selectedCity === 'all'
      ? cities
      : cities.filter((each) => each.type === selectedCity);

  return (
    <div className="filter-container">
      <div className="filter">
        <label htmlFor="city">Location: </label>
        <select id="city" value={selectedCity} onChange={handleFilterCity}>
          {cities.map((each) => (
            <option key={each.id} value={each.city}>
              {each.city}
            </option>
          ))}
        </select>
      </div>
      <div className="filter">
        <label htmlFor="bedrooms">Bedrooms: </label>
        <select
          id="bedrooms"
          value={selectedbedrooms}
          onChange={handleFilterBedrooms}
        >
          {bedrooms.map((each) => (
            <option key={each.id} value={each.bedroom}>
              {each.bedroom}
            </option>
          ))}
        </select>
      </div>
      <div className="filter">
        <label htmlFor="range">Price Range: </label>
        <select
          id="range"
          value={selectedPriceRange}
          onChange={handlePriceRange}
        >
          {priceRange.map((each) => (
            <option key={each.id} value={each.range}>
              {each.range}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
