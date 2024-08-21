import { useState } from "react";
import React from "react";
import './recommend.css'

import Destination1 from "../assets/Destination1.png";
import Destination2 from "../assets/Destination2.png";
import Destination3 from "../assets/Destination3.png";
import Destination4 from "../assets/Destination4.png";
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/Destination6.jpg";
import Destination7 from "../assets/Destination7.jpg";
import Destination8 from "../assets/maldives.jpg";
import Destination9 from "../assets/blog3.jpg";
import Destination10 from "../assets/Destination10.jpg";
import Destination11 from "../assets/Destination11.jpg";
import Destination12 from "../assets/Destination12.jpeg";

import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import { Link } from "react-router-dom";

function Recommend() {

  const data = [
    {
      id: 1,
      image: Destination1,
      title: "Singapore",
      subTitle: "Singapore, officialy the Republic of Singapore, is a",
    },
    {
      id: 2,
      image: Destination2,
      title: "Thailand",
      subTitle: "Thailand is a Southeast Asia country. It's known for",
    },
    {
      id: 3,
      image: Destination3,
      title: "Paris",
      subTitle: "Paris,France's capital, is a major European city and",
    },
    {
      id: 4,
      image: Destination4,
      title: "New Zealand",
      subTitle: "New Zealand isan island country in the",
    },
    {
      id: 5,
      image: Destination5,
      title: "Bora Bora",
      subTitle: "The main island,located northwest, surrounded by a lagoon and a barrier reef.",
    },
    {
      id: 6,
      image: Destination6,
      title: "Denmark",
      subTitle: "Denmark is a Nordic country in the south-central portion of Northern Europe with a",
    },
    {
      id: 7,
      image: Destination7,
      title: "Australia",
      subTitle: "Among the spectacular Australia tourist attractions, Bondi Beach is home to one of",
    },
    {
      id: 8,
      image: Destination8,
      title: "Maldives",
      subTitle: "The Maldives is the smallest country in Asia. Including the sea, the territory spans",
    },
    {
      id: 9,
      image: Destination9,
      title: "Taj Mahal",
      subTitle: "Taj Mahal is famous for Own beauty and one of the wonders of the world.",
    },
    {
      id: 10,
      image: Destination10,
      title: "Dubai",
      subTitle: "Dubai is the most populous city in the United Arab Emirates (UAE) and the capital of",
    },
    {
      id: 11,
      image: Destination11,
      title: "Pyramids",
      subTitle: "The largest and most famous of all the pyramids, the Great Pyramid at Giza, was",
    },
    {
      id: 12,
      image: Destination12,
      title: "Great Wall of China",
      subTitle: "Great Wall of China, an extensive bulwark erected in ancient China, one of the largest",
    }
  ];

  const packages = [
    "Featured Destination",
    "Popular Guides",
    "Find Epic Tours & Experiences",
    "Long Term Slow Travel"
  ];

  const [travel, setTravel] = useState(1);

  return (
    <section>
      <div className="title">
        <h1 className="wonders">Capturing the World's wonders</h1>
      </div>
      <div className="packages">
        <ul className="lists">
          {packages.map((pkg, index) => (
            <li
              key={index}
              className={travel === index + 1 ? "travel" : ""}
              onClick={() => setTravel(index + 1)}
            >
              {pkg}
            </li>
          ))}
        </ul>
      </div>
      <div className="destinations">
        {data.map((destination, index) => (
          <div key={destination.id} className="destination">
            <Link to={`/${destination.id}`}>
            <img src={destination.image} alt="Destination Image" />
            </Link>
      
            <h3>{destination.title}</h3>
            <p id = "para">{destination.subTitle}</p>
            <div className="info">
              <div className="services">
                <img src={info1} alt="Info 1" />
                <img src={info2} alt="Info 2" />
              </div>
            </div>
            <div className="distances">
              <span></span>
              <span>{destination.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Recommend;
