import React, { Component } from "react";
import Slider from "react-slick";
import "./MotorBike.css";

const MotorBike = () => {
  var settings = {
    // dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "80px",
    // autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 787,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <>
      {/* bike slider */}

      <div className="bike row">
        <div className="col-lg-3">
          <div className="jiang-miao">
            <img
              className="img-fluid"
              src="..\asset\Artistpage\artistdp.png"
              alt="profile Pic"
            />
            <div>
              <h1 className="name"> JIANG MIAO</h1>
              <h4 className="work">16 Artworks ｜3 Collectors</h4>
            </div>
          </div>

          <button className="follow-btn">Follow +</button>

          <div className="description">
            <h1>Description</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Diam cras mi mauris
              facilisis pharetra. Ipsum diam consequat ac purus duis fames
              morbi.Laoreet nunc imperdiet pulvinar lacinia faucibus nibh dui.{" "}
            </p>
          </div>
        </div>

        <div className="col-lg-9 bike-right">
          <Slider {...settings}>
            <div className="slider-container">
              <img
                className="img-fluid"
                src="..\asset\Artistpage\bike.png"
                alt=""
              />
              <h3>Motor Bike</h3>
            </div>

            <div className="slider-container">
              <img
                className="img-fluid"
                src="..\asset\Artistpage\bike.png"
                alt=""
              />
              <h3>Motor Bike</h3>
            </div>

            <div className="slider-container">
              <img
                className="img-fluid"
                src="..\asset\Artistpage\bike.png"
                alt=""
              />
              <h3>Motor Bike</h3>
            </div>

            <div className="slider-container">
              <img
                className="img-fluid"
                src="..\asset\Artistpage\bike.png"
                alt=""
              />
              <h3>Motor Bike</h3>
            </div>

            <div className="slider-container">
              <img
                className="img-fluid"
                src="..\asset\Artistpage\bike.png"
                alt=""
              />
              <h3>Motor Bike</h3>
            </div>
          </Slider>
        </div>
      </div>

      {/* bike dividver*/}
      <div className="bike-divider"></div>

      {/* Coming Soon*/}
      <div className="coming">
        <h2>Coming Soon</h2>
      </div>
    </>
  );
};

export default MotorBike;
