import { useState } from "react";
import './Sports.css'

import { Link } from 'react-router-dom';

function Sports() {
  const data = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/296278/pexels-photo-296278.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: "Boating",
      subTitle: "Boating is the leisurely activity of travelling by boat, or the recreational use.",
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/22028339/pexels-photo-22028339/free-photo-of-backpacker-exploring-a-cave.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: "Caving",
      subTitle: "Caving, also known as spelunking (United States and Canada) and potholing (UK).",
    },
    {
      id: 3,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrh-x8H9MmLE8N-6QeYltXzsdig0LEt5IGpg&s',
      title: "Dune Bashing",
      subTitle: "Dune Bashing is a leading Dubai-based tour company.",
    },
    {
      id: 4,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGV2mWKiWMeN4N6Ws-1xtqaq3mpsM9a82Hzg&s',
      title: "Hand Gliding",
      subTitle: "Hand gliding is an air sport or recreational activity in which a pilot flies a light, non-motorised.",
    },
    {
      id: 5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFQcCA2P42dMxedKQ4oilV4UOWA38oyC9R-Q&s',
      title: "Kite Landboarding",
      subTitle: "Kite landboarding involves the use of a mountain board or landboard.",
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/2158963/pexels-photo-2158963.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: "Mountain Biking",
      subTitle: "Mountain biking (abbr. MTB) is a sport of riding bicycles off-road, often over rough.",
    },
    {
      id: 7,
      image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: "Mountain Climbing",
      subTitle: "Mountain climbing is the sport of reaching, or trying to reach, high points.",
    },
    {
      id: 8,
      image: 'https://images.pexels.com/photos/25684769/pexels-photo-25684769/free-photo-of-people-parasailing-over-water-with-boat.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: "Parachute Diving",
      subTitle: "Parachuting and skydiving is a method of transiting from a high point.",
    },
    {
      id: 9,
      image: 'https://images.pexels.com/photos/2405643/pexels-photo-2405643.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: "Scuba Diving",
      subTitle: "Scuba diving is a mode of underwater diving whereby divers use breathing equipment.",
    },
    {
      id: 10,
      image: 'https://images.pexels.com/photos/2433353/pexels-photo-2433353.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: "Skiing",
      subTitle: "Skiing is recreation, sport, and a mode of transportation.",
    },
    {
      id: 11,
      image: 'https://images.pexels.com/photos/11124985/pexels-photo-11124985.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: "Sky Diving",
      subTitle: "Skydiving involves the use of a parachute for either recreational or competitive purposes.",
    },
    {
      id: 12,
      image: 'https://images.pexels.com/photos/416676/pexels-photo-416676.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: "Surfing",
      subTitle: "Surfing is a surface water sport in which an individual, a surfer uses a board to ride.",
    },
    {
      id: 13,
      image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: "Trekking",
      subTitle: "Trekking is a recreational activity that involves covering any specified journey on foot.",
    },
    {
      id: 14,
      image: 'https://images.pexels.com/photos/2828471/pexels-photo-2828471.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: "Water Rafting",
      subTitle: "Water rafting involves navigating rivers or other bodies of water using a raft.",
    },
    {
      id: 15,
      image: 'https://images.pexels.com/photos/6156358/pexels-photo-6156358.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: "Zip Line",
      subTitle: "A zip-line, zip line, zip-wire, flying fox, or death slide is a pulley suspended on a cable.",
    },
    // {
    //   id: 16,
    //   image: 'https://images.pexels.com/photos/4998721/pexels-photo-4998721.jpeg?auto=compress&cs=tinysrgb&w=600',
    //   title: "Zorbing",
    //   subTitle: "Zorbing (also known as globe-riding, sphereing, orbing) involves rolling downhill inside a large, transparent ball.",
    // }
  ];

  return (
    <section>
      <div className="title">
        <h1 className="heading">Life is either a daring adventure or Nothing at all</h1>
      </div>
      <div className="sport-activity">
        {data.map((sport, index) => (
          <div className="activities" key={index}>
            <Link to = {`/sport/${sport.id}`}>
               <img src={sport.image} alt={sport.title} />
            </Link>
            <h2>{sport.title}</h2>
            <p>{sport.subTitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Sports;