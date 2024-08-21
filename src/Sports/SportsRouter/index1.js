import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


import Page1 from "../Page1";
import Page2 from "../Page2";
import Page3 from "../Page3";
import Page4 from "../Page4";
import Page5 from "../Page5";
import Page6 from "../Page6";
import Page7 from "../Page7";
import Page8 from "../Page8";
import Page9 from "../Page9"; 
import Page10 from "../Page10";
import Page11 from "../Page11";
import Page12 from "../Page12";
import Page13 from "../Page13";
import Page14 from "../Page14";
import Page15 from "../Page15";
import Page16 from "../Page16";

const SportsRouter = () => {
  const navigate = useNavigate();
  const { id } = useParams(); 
  useEffect(() => {

    if (!id) {
      navigate("/");
    }
  }, [id, navigate]);

  const pageComponents = {
    "1": <Page1 />,
    "2": <Page2 />,
    "3": <Page3 />,
    "4": <Page4 />,
    "5": <Page5 />,
    "6": <Page6 />,
    "7": <Page7 />,
    "8": <Page8 />, 
    "9": <Page9 />, 
    "10": <Page10 />,
    "11": <Page11 />,
    "12": <Page12 />,
    "13": <Page13 />,
    "14": <Page14 />,
    "15": <Page15 />,
    "16": <Page16 />,
  };

  
  return pageComponents[id] || <div>Page not found</div>;
};

export default SportsRouter;
