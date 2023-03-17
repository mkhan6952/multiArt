import React from "react";

const Created = () => {
  return (
    <div className="row p-created-content">
      <div className="col-lg-4 all-card">
        <div className="all-card-2">
          <div className="card-one-img">
            <img src="..\asset\Profile\create2.png" alt="..." />
          </div>
          <div className="card-one-content">
            <h2>The Hammer</h2>
            <h3>Recent bid</h3>
            <h4>0.11ETH ($200.12)</h4>

            <hr class="solid"></hr>

            <p className="auction">Auction ends in</p>

            <div className="timer">
              <div className="timer-left">
                <div className="timing">
                  <div className="time-unit">27</div>
                  <div className="time-type">D'S</div>
                </div>
                <div className="timing">
                  <div className="time-unit">04</div>
                  <div className="time-type">H'S</div>
                </div>
                <div className="timing">
                  <div className="time-unit">09</div>
                  <div className="time-type">M'S</div>
                </div>
                <div className="timing">
                  <div className="time-unit">57</div>
                  <div className="time-type">S'S</div>
                </div>
              </div>
              <div>
                <img
                  className="img-fluid"
                  src="..\asset\Profile\Pic.svg"
                  alt="dp"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 all-card">
        <div className="all-card-2">
          <div className="card-one-img">
            <img src="..\asset\Profile\create1.png" alt="..." />
          </div>
          <div className="card-one-content">
            <h2>The Hammer</h2>
            <h3>List Price</h3>
            <h4>0.11ETH ($200.12)</h4>

            <p className="auction owner">Owner</p>

            <div className="timer">
              <div>
                <img
                  className="img-fluid"
                  src="..\asset\Profile\Pic.svg"
                  alt="dp"
                />
                <span className="name">Saomia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 all-card">
        <div className="all-card-2">
          <div className="card-one-img">
            <img src="..\asset\Profile\create2.png" alt="..." />
          </div>
          <div className="card-one-content">
            <h2>The Hammer</h2>
            <h3>List Price</h3>
            <h4>0.11ETH ($200.12)</h4>

            <p className="auction owner">Owner</p>

            <div className="timer">
              <div>
                <img
                  className="img-fluid"
                  src="..\asset\Profile\Pic.svg"
                  alt="dp"
                />
                <span className="name">Saomia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Created;
