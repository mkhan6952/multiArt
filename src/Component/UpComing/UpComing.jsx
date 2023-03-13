import "./upcoming.css";
import React, { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { Icon } from "@iconify/react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const UpComing = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set the date and time for the offer expiration
    const countDownDate = new Date("Mar 31, 2023 23:59:59").getTime();

    // Update the countdown every second
    const interval = setInterval(() => {
      // Get the current date and time
      const now = new Date().getTime();

      // Find the distance between now and the countdown date
      const distance = countDownDate - now;

      // Calculate days, hours, minutes and seconds left
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update the state with the new countdown values
      setCountdown({ days, hours, minutes, seconds });

      // If the countdown is finished, clear the interval
      if (distance < 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
          slidesToShow: 4,
        },
      },
    ],
  };
  const nfts = [
    {
      nftimg: "../../../../asset/upcoming/1.png",
    },
    {
      nftimg: "../../../../asset/upcoming/2.png",
    },
    {
      nftimg: "../../../../asset/upcoming/3.png",
    },
    {
      nftimg: "../../../../asset/upcoming/4.png",
    },
    {
      nftimg: "../../../../asset/upcoming/3.png",
    },
  ];

  return (
    <>
      <div className="upcoming-main">
        <div className="row lady-layer">
          <div className="col-lg-6 col-sm-12 left-side">
            <img
              className="img-fluid"
              src="..\asset\upcoming\lady.png"
              alt="lady-image"
            />
          </div>
          <div className="col-lg-6 col-sm-12 right-side">
            <h1>Lady Layer</h1>
            <p>
              Created by <img src="..\asset\upcoming\Pic.svg" alt="image" /> Leo
              Harper
            </p>
            <div className="bid">
              <div>
                <h1>Current Bid</h1>
                <div className="eth">1.21 ETH</div>
                <p>$2,101,69</p>
              </div>
              <div className="divider"></div>
              <div>
                <h1>Auction End In</h1>
                <div className="time-countdown">
                  <div className=" time-container">
                    <div>{countdown.days}</div>
                    <div className="time-unit">Day</div>
                  </div>
                  <div className=" time-container">
                    <div>{countdown.days}</div>
                    <div className="time-unit">Hour</div>
                  </div>
                  <div className="b time-container">
                    <div>{countdown.minutes}</div>
                    <div className="time-unit">Minutes</div>
                  </div>

                  <div className=" time-container">
                    <div> {countdown.seconds}</div>
                    <div className="time-unit">Second</div>
                  </div>
                </div>
              </div>
            </div>

            <button className="btn-lady">View Artwork</button>
          </div>
        </div>

        {/* upcoming section */}

        <div className="keepnft">
          <div className="keepnft-content">
            <div className="keepnft-heading">
              <h1>Up coming</h1>
              <h2>arrow here</h2>
            </div>

            <Slider {...settings}>
              {nfts.map((item, index) => {
                return (
                  <div className="my-nfts" key={index}>
                    <div className="nft-card">
                      <div className="nft-card-header">
                        <img src={item.nftimg} alt="" className="img-fluid" />
                      </div>

                      <div className="nft-card-body">
                        <img
                          className="img-fluid line-img"
                          src="..\asset\upcoming\line.png"
                          alt="logo"
                        />

                        <div className="time-countdown-card">
                          <div className="card-timing-container">
                            <div className=" time-container">
                              <div className="timing">{countdown.days}</div>
                              <div className="time-unit">D'S</div>
                            </div>
                            <div className=" time-container">
                              <div className="timing">{countdown.hours}</div>
                              <div className="time-unit">H'S</div>
                            </div>
                            <div className="time-container">
                              <div className="timing">{countdown.minutes}</div>
                              <div className="time-unit">M'S</div>
                            </div>

                            <div className=" time-container">
                              <div className="timing"> {countdown.seconds}</div>
                              <div className="time-unit">SEC</div>
                            </div>
                          </div>
                          <div className="upcoming-eth">
                            <Icon
                              icon="fa-brands:ethereum"
                              className="me-1"
                              color="white"
                              width="12"
                            />
                            Ethereum
                          </div>
                        </div>

                        <div className="card-btn">
                          <button className="item-btn">ITEMS 400</button>
                          <button className="price-btn">PRICE 0.08ETH</button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpComing;
