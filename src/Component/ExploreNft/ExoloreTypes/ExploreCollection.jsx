import React from "react";

const ExploreCollection = () => {
  return (
    <>
      <div className="explore-collection-main">
        {/* favorite */}
        <div className="row explore-collection">
          <div className="col-lg-3 col-12">
            <div className="header">
              <img
                className="header-main-image"
                src="..\asset\explorenft\artwork.png"
                alt="pic"
              />

              <img
                className="img-fluid heart"
                src="..\asset\explorenft\artwork-heart.svg"
                alt="pic"
              />
            </div>
            <div className="bottom">
              <h2>The Hammer</h2>
              <h4>Created by Jimmy</h4>
              <div className="price">
                <div>Price</div>
                <div>2.23 ETH</div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-12">
            <div className="header">
              <img
                className="header-main-image"
                src="..\asset\explorenft\artwork2.png"
                alt="pic"
              />

              <img
                className="img-fluid heart"
                src="..\asset\explorenft\artwork-heart.svg"
                alt="pic"
              />
            </div>
            <div className="bottom">
              <h2>The Hammer</h2>
              <h4>Created by Jimmy</h4>
              <div className="price">
                <div>Price</div>
                <div>2.23 ETH</div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-12">
            <div className="header">
              <img
                className="header-main-image"
                src="..\asset\explorenft\artwork3.png"
                alt="pic"
              />

              <img
                className="img-fluid heart"
                src="..\asset\explorenft\artwork-heart.svg"
                alt="pic"
              />
            </div>
            <div className="bottom">
              <h2>The Hammer</h2>
              <h4>Created by Jimmy</h4>
              <div className="price">
                <div>Price</div>
                <div>2.23 ETH</div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-12">
            <div className="header">
              <img
                className="header-main-image"
                src="..\asset\explorenft\artwork.png"
                alt="pic"
              />

              <img
                className="img-fluid heart"
                src="..\asset\explorenft\artwork-heart.svg"
                alt="pic"
              />
            </div>
            <div className="bottom">
              <h2>The Hammer</h2>
              <h4>Created by Jimmy</h4>
              <div className="price">
                <div>Price</div>
                <div>2.23 ETH</div>
              </div>
            </div>
          </div>
        </div>

        {/* current price */}

        <div className="row mt-4 explore-collection">
          <div className="col-lg-3 col-12">
            <div className="header">
              <img
                className="header-main-image"
                src="..\asset\explorenft\artwork3.png"
                alt="pic"
              />
            </div>
            <div className="bottom">
              <h2>The Hammer</h2>
              <h4>Created by Jimmy</h4>
              <div className="price">
                <div>Price</div>
                <div>2.23 ETH</div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-12">
            <div className="header">
              <img
                className="header-main-image"
                src="..\asset\explorenft\artwork.png"
                alt="pic"
              />
            </div>
            <div className="bottom">
              <h2>The Hammer</h2>
              <h4>Created by Jimmy</h4>
              <div className="price">
                <div>Price</div>
                <div>2.23 ETH</div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-12">
            <div className="header">
              <img
                className="header-main-image"
                src="..\asset\explorenft\artwork2.png"
                alt="pic"
              />
            </div>
            <div className="bottom">
              <h2>The Hammer</h2>
              <h4>Created by Jimmy</h4>
              <div className="price">
                <div>Price</div>
                <div>2.23 ETH</div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-12">
            <div className="header">
              <img
                className="header-main-image"
                src="..\asset\explorenft\artwork3.png"
                alt="pic"
              />
            </div>
            <div className="bottom">
              <h2>The Hammer</h2>
              <h4>Created by Jimmy</h4>
              <div className="price">
                <div>Price</div>
                <div>2.23 ETH</div>
              </div>
            </div>
          </div>
        </div>

        <div class="filter-box">
          <label for="filter-select">Filter</label>
          <select id="filter-select">
            <option value="option1">Sold</option>
            <option value="option2">Upcoming</option>
            <option value="option3">Publish Time</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default ExploreCollection;
