import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CountryList.css";
import austriaFlag from "../assets/flags/austria.png";
import baliFlag from "../assets/flags/bali.png";
import croatiaFlag from "../assets/flags/croatia.png";
import cyprusFlag from "../assets/flags/cyprus.png";
import czechFlag from "../assets/flags/czech.png";
import dubaiFlag from "../assets/flags/dubai.png";
import egyptFlag from "../assets/flags/egypt.png";
import franceFlag from "../assets/flags/france.png";
import germanyFlag from "../assets/flags/germany.png";
import greeceFlag from "../assets/flags/greece.png";
import hungaryFlag from "../assets/flags/hungary.png";
import israelFlag from "../assets/flags/israel.png";
import italyFlag from "../assets/flags/italy.png";
import latviaFlag from "../assets/flags/latvia.png";
import montenegroFlag from "../assets/flags/montenegro.png";
import omanFlag from "../assets/flags/oman.png";
import portugalFlag from "../assets/flags/portugal.png";
import qatarFlag from "../assets/flags/qatar.png";
import saudiFlag from "../assets/flags/saudi.png";
import spainFlag from "../assets/flags/spain.png";
import thailandFlag from "../assets/flags/thailand.jpeg";
import turkeyFlag from "../assets/flags/turkey.png";
import usaFlag from "../assets/flags/usa.png";
import ukFlag from "../assets/flags/uk.png";

const countries = [
  [
    { name: "Austria", flag: austriaFlag, count: 295 },
    { name: "Bali", flag: baliFlag, count: 476 },
    { name: "Croatia", flag: croatiaFlag, count: 11841 },
    { name: "Cyprus", flag: cyprusFlag, count: 13004 },
    { name: "Czech Republic", flag: czechFlag, count: 498 },
    { name: "Dubai", flag: dubaiFlag, count: 1090 },
  ],
  [
    { name: "Egypt", flag: egyptFlag, count: 36 },
    { name: "France", flag: franceFlag, count: 6567 },
    { name: "Germany", flag: germanyFlag, count: 2360 },
    { name: "Greece", flag: greeceFlag, count: 4638 },
    { name: "Hungary", flag: hungaryFlag, count: 1370 },
    { name: "Israel", flag: israelFlag, count: 509 },
  ],
  [
    { name: "Italy", flag: italyFlag, count: 2932 },
    { name: "Latvia", flag: latviaFlag, count: 2413 },
    { name: "Montenegro", flag: montenegroFlag, count: 1530 },
    { name: "Oman", flag: omanFlag, count: 25 },
    { name: "Portugal", flag: portugalFlag, count: 1807 },
    { name: "Qatar", flag: qatarFlag, count: 22 },
  ],
  [
    { name: "Saudi Arabia", flag: saudiFlag, count: 13 },
    { name: "Spain", flag: spainFlag, count: 9871 },
    { name: "Thailand", flag: thailandFlag, count: 6141 },
    { name: "Turkey", flag: turkeyFlag, count: 9444 },
    { name: "USA", flag: usaFlag, count: 12907 },
    { name: "United Kingdom", flag: ukFlag, count: 340 },
  ],
];

const CountryList = () => {
  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center">
        <h4 className="fw-bold">Other Countries</h4>
        <button className="btn btn-light show-all">Show All →</button>
      </div>
      <div className="row">
        {countries.flat().map((country, index) => (
          <div
            key={index}
            className="col-6 col-md-4 col-lg-3 d-flex align-items-center my-2"
          >
            <img src={country.flag} alt={country.name} className="flag me-2" />
            <span className="country-name">{country.name}</span>
            <span className="count ms-auto">{country.count.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryList;
