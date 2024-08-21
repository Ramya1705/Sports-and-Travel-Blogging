import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Page0 from "../../Singapore/Page";
import Page1 from "../../Singapore/Page1";
import Page2 from "../../Singapore/page2";
import Page3 from "../../Singapore/page3";
import Page4 from "../../Singapore/page4";
import Page5 from "../../Singapore/page5";
import Page6 from "../../Singapore/page6";
import Page7 from "../../Singapore/page7";
import Page9 from "../../Singapore/page9";
import Page8 from "../../Singapore/page8";
import Page10 from "../../Singapore/page10";
import Page11 from "../../Singapore/page11";
import Page12 from "../../Singapore/page12";

const PagesRouter = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Destructure id from useParams

  useEffect(() => {
    // Optional navigation logic if needed
    if (!id) {
      navigate("/"); // Redirect to home if no id is provided
    }
  }, [id, navigate]);

  // Map id to the corresponding page component
  const pageComponents = {
    "0": <Page0 />,
    "1": <Page1 />,
    "2": <Page2 />,
    "3": <Page3 />,
    "4": <Page6 />,
    "5": <Page4 />,
    "6": <Page5 />,
    "7": <Page7 />,
    "8": <Page10 />,
    "9": <Page11 />,
    "10": <Page12 />,
    "11": <Page9 />,
    "12": <Page8 />
  };

  // Render the corresponding page component or a fallback if not found
  return pageComponents[id] || <div>Page not found</div>;
};

export default PagesRouter;
