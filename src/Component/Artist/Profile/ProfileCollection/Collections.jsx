import React from "react";
import "./profiletabs.css";
import { Icon } from "@iconify/react";

const Collections = () => {
  return (
    <>
      <div className="row p-collection-content">
        <div className="col-lg-6 left">
          <div className="image-container">
            <div>
              <img
                className="img-fluid"
                src="..\asset\Profile\collection2.png"
                alt="image"
              />
            </div>
            <div className="other-image row">
              <div className="col-lg-3">
                <img
                  className="img-fluid"
                  src="..\asset\Profile\Rectangle 41520.webp"
                  alt="..."
                />
              </div>
              <div className="col-lg-3">
                <img
                  className="img-fluid"
                  src="..\asset\Profile\Rectangle 41521.webp"
                  alt="..."
                />
              </div>
              <div className="col-lg-3">
                <img
                  className="img-fluid"
                  src="..\asset\Profile\Rectangle 41520.webp"
                  alt="..."
                />
              </div>
              <div className="col-lg-3">
                <img
                  className="img-fluid"
                  src="..\asset\Profile\Rectangle 41521.webp"
                  alt="..."
                />
              </div>
            </div>

            <div className="del-btn">
              <p>
                verified
                <Icon
                  icon="material-symbols:verified"
                  color="#0487ff"
                  width="22"
                />
              </p>
              <div className="ico">
                <Icon
                  icon="material-symbols:delete-rounded"
                  color="white"
                  width="20"
                />
              </div>
            </div>
          </div>

          <h1 className="title">Abstract Cats</h1>
          <h3 className="intro">16 Artworks ｜3 Collectors</h3>
          <p className="para">
            Lorem ipsum dolor sit amet consectetur. Diam cras mi mauris
            facilisis pharetra. Ipsum diam fames morbi. Laoreet nunc imperdiet
            pulvinar lacinia faucibus nibh dui.{" "}
          </p>
        </div>

        <div className="col-lg-6 left">
          <div className="image-container">
            <div>
              <img
                className="img-fluid"
                src="..\asset\Profile\collection1.png"
                alt="image"
              />
            </div>
            <div className="other-image row">
              <div className="col-lg-3">
                <img
                  className="img-fluid"
                  src="..\asset\Profile\Rectangle 41520.webp"
                  alt="..."
                />
              </div>
              <div className="col-lg-3">
                <img
                  className="img-fluid"
                  src="..\asset\Profile\Rectangle 41521.webp"
                  alt="..."
                />
              </div>
              <div className="col-lg-3">
                <img
                  className="img-fluid"
                  src="..\asset\Profile\Rectangle 41520.webp"
                  alt="..."
                />
              </div>
              <div className="col-lg-3">
                <img
                  className="img-fluid"
                  src="..\asset\Profile\Rectangle 41521.webp"
                  alt="..."
                />
              </div>
            </div>

            <div className="del-btn">
              <p>
                verified
                <Icon
                  icon="material-symbols:verified"
                  color="#0487ff"
                  width="22"
                />
              </p>
              <div className="ico">
                <Icon
                  icon="material-symbols:delete-rounded"
                  color="white"
                  width="20"
                />
              </div>
            </div>
          </div>

          <h1 className="title">Abstract Cats</h1>
          <h3 className="intro">16 Artworks ｜3 Collectors</h3>
          <p className="para">
            Lorem ipsum dolor sit amet consectetur. Diam cras mi mauris
            facilisis pharetra. Ipsum diam fames morbi. Laoreet nunc imperdiet
            pulvinar lacinia faucibus nibh dui.{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Collections;
