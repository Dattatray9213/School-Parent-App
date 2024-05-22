import React from "react";

import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import "./Home.css";

const slideImages = [
  {
    url: "https://www.greatschools.org/gk/wp-content/uploads/2014/03/The-school-visit-what-to-look-for-what-to-ask-1-750x325.jpg",
    caption: "School",
  },
  {
    url: "https://raghavfoundation.org.in/wp-content/uploads/2023/05/school-image-750x420.jpg",
    caption: "Play Ground",
  },
  {
    url: "https://cdn.britannica.com/79/218779-131-A1880104/Empty-high-school-classroom.jpg",
    caption: "Play Ground",
  },
];
const logoUrl = "https://globalschool.org.in/images/global-school-logo.png";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "600px",
  backgroundSize: "cover",
};

export const Home = () => {
  return (
    <>
      <div className="header-container">
        <div className="logo-container">
          <img src={logoUrl} width="100" height="100" alt="Logo" />
        </div>
        <div className="school-name">
          <h1 className="heading-title"> Global International School</h1>
          <br></br>
        </div>
      </div>
      <div className="slide-container">
        <Slide>
          {slideImages.map((image, index) => (
            <div key={index}>
              <div
                style={{ ...divStyle, backgroundImage: `url(${image.url})` }}
              >
                {/* <span style={spanStyle}>{image.caption}</span> */}
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </>
  );
};

