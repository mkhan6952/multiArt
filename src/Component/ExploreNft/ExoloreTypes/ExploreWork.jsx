import React from "react";
import "./exploretabs.css";
import { Icon } from "@iconify/react";

const ExploreWork = () => {
  return (
    <>
      <div className="explore-collection-main ">
        {/* sold */}
        <div className="explore-artwork-outer">
          <div className="row explore-artwork">
            <div className="col-lg-6 col-12 left">
              <div className="image-container">
                <div>
                  <img
                    className="main-image"
                    src="..\asset\explorenft\e-collection-bg.png"
                    alt="image"
                  />
                </div>
                <div className="other-image row">
                  <div className="col-lg-3 col-3">
                    <img
                      className="img-fluid"
                      src="..\asset\Profile\Rectangle 41520.webp"
                      alt="..."
                    />
                  </div>
                  <div className="col-lg-3 col-3">
                    <img
                      className="img-fluid"
                      src="..\asset\Profile\Rectangle 41521.webp"
                      alt="..."
                    />
                  </div>
                  <div className="col-lg-3 col-3">
                    <img
                      className="img-fluid"
                      src="..\asset\Profile\Rectangle 41520.webp"
                      alt="..."
                    />
                  </div>
                  <div className="col-lg-3 col-3">
                    <img
                      className="img-fluid"
                      src="..\asset\Profile\Rectangle 41521.webp"
                      alt="..."
                    />
                  </div>
                </div>

                <div className="del-btn">
                  <img
                    className="img-fluid"
                    src="..\asset\explorenft\sold.svg"
                    alt="sold"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12 right">
              <div className="abstract">
                <img
                  className="img-fluid"
                  src="..\asset\explorenft\abstract.webp"
                  alt="image"
                />
                <h3>Abstract</h3>
              </div>

              <div className="artist">
                <div>
                  <h2 className="title">Artist</h2>
                  <div>
                    <img
                      className="img-fluid"
                      src="..\asset\explorenft\collectors.svg"
                      alt="image"
                    />
                    <span className="name">Sara Jay</span>
                  </div>
                </div>
                <div>
                  <h2 className="title">Collectors</h2>
                  <div className="collectors-image">
                    <img
                      className="img-fluid one"
                      src="..\asset\explorenft\collectors.svg"
                      alt="image"
                    />
                    <img
                      className="img-fluid two"
                      src="..\asset\explorenft\collectors.svg"
                      alt="image"
                    />
                    <img
                      className="img-fluid three"
                      src="..\asset\explorenft\collectors.svg"
                      alt="image"
                    />
                  </div>
                </div>
              </div>

              <div className="desc">
                <h5>16 Artworks</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Faucibus sed tortor
                  nisl orci facilisi sapie n urna ligula sed. Urna placerat dui
                  a diam eros. Netus rhoncus ac dolor lacus risu s sed felis.
                  Nunc mattis montes morbi faucibus morbi lorem. Morbi
                  scelerisque qui sque aliquam aliquam bibendum tempor. Aliquam
                  vulputate non scelerisque nibh.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* upcomming */}
        <div className="explore-artwork-outer">
          <div className="row explore-artwork">
            <div className="col-lg-6 col-12 left">
              <div className="image-container">
                <div>
                  <img
                    className="main-image"
                    src="..\asset\explorenft\upcoming.webp"
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

                <div className="del-btn">Upcoming</div>
              </div>
            </div>

            <div className="col-lg-6 col-12 right">
              <div className="abstract">
                <img
                  className="img-fluid"
                  src="..\asset\explorenft\abstract.webp"
                  alt="image"
                />
                <h3>Abstract</h3>
              </div>

              <div className="artist">
                <div>
                  <h2 className="title">Artist</h2>
                  <div>
                    <img
                      className="img-fluid"
                      src="..\asset\explorenft\collectors.svg"
                      alt="image"
                    />
                    <span className="name">Sara Jay</span>
                  </div>
                </div>
                <div>
                  <h2 className="title">Collectors</h2>
                  <div className="collectors-image">
                    <img
                      className="img-fluid one"
                      src="..\asset\explorenft\collectors.svg"
                      alt="image"
                    />
                    <img
                      className="img-fluid two"
                      src="..\asset\explorenft\collectors.svg"
                      alt="image"
                    />
                    <img
                      className="img-fluid three"
                      src="..\asset\explorenft\collectors.svg"
                      alt="image"
                    />
                  </div>
                </div>
              </div>

              <div className="desc">
                <h5>16 Artworks</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Faucibus sed tortor
                  nisl orci facilisi sapie n urna ligula sed. Urna placerat dui
                  a diam eros. Netus rhoncus ac dolor lacus risu s sed felis.
                  Nunc mattis montes morbi faucibus morbi lorem. Morbi
                  scelerisque qui sque aliquam aliquam bibendum tempor. Aliquam
                  vulputate non scelerisque nibh.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Live */}
        <div className="explore-artwork-outer">
          <div className="row explore-artwork">
            <div className="col-lg-6 col-12 left">
              <div className="image-container">
                <div>
                  <img
                    className="main-image"
                    src="..\asset\explorenft\e-collection-bg.png"
                    alt="image"
                  />
                </div>
                <div className="other-image row">
                  <div className="col-lg-3 col-3">
                    <img
                      className="img-fluid"
                      src="..\asset\Profile\Rectangle 41520.webp"
                      alt="..."
                    />
                  </div>
                  <div className="col-lg-3 col-3">
                    <img
                      className="img-fluid"
                      src="..\asset\Profile\Rectangle 41521.webp"
                      alt="..."
                    />
                  </div>
                  <div className="col-lg-3 col-3">
                    <img
                      className="img-fluid"
                      src="..\asset\Profile\Rectangle 41520.webp"
                      alt="..."
                    />
                  </div>
                  <div className="col-lg-3 col-3">
                    <img
                      className="img-fluid"
                      src="..\asset\Profile\Rectangle 41521.webp"
                      alt="..."
                    />
                  </div>
                </div>

                <div className="del-btn">
                  <img
                    className="img-fluid"
                    src="..\asset\explorenft\live.svg"
                    alt="sold"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12 right">
              <div className="abstract">
                <img
                  className="img-fluid"
                  src="..\asset\explorenft\abstract.webp"
                  alt="image"
                />
                <h3>Abstract</h3>
              </div>

              <div className="artist">
                <div>
                  <h2 className="title">Artist</h2>
                  <div>
                    <img
                      className="img-fluid"
                      src="..\asset\explorenft\collectors.svg"
                      alt="image"
                    />
                    <span className="name">Sara Jay</span>
                  </div>
                </div>
                <div>
                  <h2 className="title">Collectors</h2>
                  <div className="collectors-image">
                    <img
                      className="img-fluid one"
                      src="..\asset\explorenft\collectors.svg"
                      alt="image"
                    />
                    <img
                      className="img-fluid two"
                      src="..\asset\explorenft\collectors.svg"
                      alt="image"
                    />
                    <img
                      className="img-fluid three"
                      src="..\asset\explorenft\collectors.svg"
                      alt="image"
                    />
                  </div>
                </div>
              </div>

              <div className="desc">
                <h5>16 Artworks</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Faucibus sed tortor
                  nisl orci facilisi sapie n urna ligula sed. Urna placerat dui
                  a diam eros. Netus rhoncus ac dolor lacus risu s sed felis.
                  Nunc mattis montes morbi faucibus morbi lorem. Morbi
                  scelerisque qui sque aliquam aliquam bibendum tempor. Aliquam
                  vulputate non scelerisque nibh.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="filter-box">
          <label for="filter-select">Filter</label>
          <select id="filter-select">
            <option value="option1">Favourite</option>
            <option value="option2">Current Price</option>
            <option value="option3">Live</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default ExploreWork;
