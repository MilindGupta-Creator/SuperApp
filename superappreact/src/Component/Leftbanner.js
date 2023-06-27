import React from 'react';
import images from "../assets/image13.png";

const Leftbanner = () => {
  return (
    <div style={{ height: "100vh" }}>
      <div
        style={{
          position: "absolute",
          color: "#fff",
          fontFamily: "Roboto, sans-serif",
          fontSize: "45px",
          fontWeight: "900",
          width: "450px",
          bottom: "35px",
          left: "40px",
        }}
      >
        Discover new things on SuperApp
      </div>
      <img
        style={{ height: "99.35vh", width: "50vw" }}
        src={images}
        alt="Banner"
      />
    </div>
  );
};

export default Leftbanner;
