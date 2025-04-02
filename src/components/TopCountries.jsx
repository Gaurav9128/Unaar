import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import images manually
import img1 from '../assets/images/image1.jpeg';
import img2 from '../assets/images/image2.jpeg';
import img3 from '../assets/images/image3.jpeg';
import img4 from '../assets/images/image4.jpeg'; // France Image
import img5 from '../assets/images/image5.jpeg'; // America Image
import img6 from '../assets/images/image6.jpeg'; // Spain Image
import img7 from '../assets/images/image7.jpeg'; // Germany Image
import img8 from '../assets/images/image8.jpeg'; // Russia Image
import img9 from '../assets/images/image9.jpeg'; // Poland Image
import img10 from '../assets/images/image10.jpeg'; // Canada Image
import img11 from '../assets/images/image11.jpeg'; // Australia Image

const countries = [
  { name: 'India', listings: '9,328', image: img1 },
  { name: 'Japan', listings: '9,328', image: img2 },
  { name: 'United Kingdom', listings: '9,328', image: img3 },
  { name: 'France', listings: '6,328', image: img4, isLarge: true }, 
  { name: 'America', listings: '7,500', image: img5, isLarge: true }, 
  { name: 'Spain', listings: '8,200', image: img6, isExtraLarge: true }, 
  { name: 'Germany', listings: '5,400', image: img7, isFixed: true }, 
  { name: 'Russia', listings: '4,900', image: img8, isBottom: true, column: 1 }, 
  { name: 'Poland', listings: '3,800', image: img9, isBottom: true, column: 2 }, 
  { name: 'Canada', listings: '4,600', image: img10, isBottom: true, column: 3 }, 
  { name: 'Australia', listings: '5,100', image: img11, isBottom: true, column: 4 }
];

const TopCountriesCards = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Top Countries</h2>
      
      <div className="grid-container">
        {countries.map((country, index) => (
          <div 
            key={index} 
            className={`grid-item 
              ${country.isLarge ? 'large' : ''} 
              ${country.isExtraLarge ? 'extra-large' : ''} 
              ${country.isFixed ? 'fixed' : ''} 
              ${country.isBottom ? `bottom-${country.column}` : ''}`
            }
          >
            <div className="card border-0 shadow-sm w-100 h-100">
              <img 
                src={country.image} 
                className="card-img-top" 
                alt={country.name} 
                style={{ height: '100%', objectFit: 'cover' }} 
              />
              <div className="card-img-overlay d-flex flex-column justify-content-end text-white" style={{ background: 'rgba(0, 0, 0, 0.4)' }}>
                <h5 className="card-title">{country.name}</h5>
                <p className="card-text">{country.listings} listings</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          .grid-container {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: 200px;
            gap: 10px;
          }

          .grid-item {
            width: 100%;
          }

          .large {
            grid-row: span 2;
          }

          .extra-large {
            grid-row: span 2;
            grid-column: 2 / span 2;
          }

          .fixed {
            grid-column: 4 / span 1;
            grid-row: 3 / span 1;
          }

          .bottom-1 {
            grid-column: 1 / span 1;
            grid-row: 4 / span 1;
          }

          .bottom-2 {
            grid-column: 2 / span 1;
            grid-row: 4 / span 1;
          }

          .bottom-3 {
            grid-column: 3 / span 1;
            grid-row: 4 / span 1;
          }

          .bottom-4 {
            grid-column: 4 / span 1;
            grid-row: 4 / span 1;
          }

          /* Responsive Design */
          @media (max-width: 1024px) {
            .grid-container {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 768px) {
            .grid-container {
              grid-template-columns: repeat(1, 1fr);
            }
          }
        `}
      </style>
    </div>
  );
};

export default TopCountriesCards;
