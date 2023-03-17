import React from "react";
import "./Profile.css";

import { Icon } from "@iconify/react";
import ApplyNow from "../../../FAQs/ApplyNow";
import Collections from "./Collections";
import Created from "./Created";
import Favorite from "./Favorites";
import About from "./About";

const Profile = () => {
  return (
    <>
      {/* upper section */}
      <div className="profile-upper-section">
        <h1>Back</h1>
      </div>

      {/* banner */}
      <div className="profile-banner ">
        <div className="row profile-banner-inner">
          <div className="col-lg-6 left">
            <img
              className="img-fluid"
              src="..\asset\Profile\profile-pic.svg"
              alt="pic"
            />
            <div className="details">
              <h1 className="name">Shan Jacks</h1>
              <p className="status">
                verified
                <Icon
                  icon="material-symbols:verified"
                  color="#0487ff"
                  width="22"
                />
              </p>
              <div className="social-ico">
                <Icon
                  className="ico"
                  icon="bi:instagram"
                  color="white"
                  width="30"
                />
                <Icon
                  className="ico"
                  icon="bi:twitter"
                  color="white"
                  width="30"
                />
                <Icon
                  className="ico"
                  icon="bi:instagram"
                  color="white"
                  width="30"
                />
              </div>

              <div className="followers">
                <div className="followers-div">
                  <div className="number">101</div>
                  <div className="types">Followers</div>
                </div>
                <div className="followers-div">
                  <div className="number">20</div>
                  <div className="types">Following</div>
                </div>
                <div className="followers-div">
                  <div className="number">20</div>
                  <div className="types">Collectors</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 right">
            <div className="f-btn">
              <button className="follow-btn">Follow +</button>
              <button className="share-btn">Share</button>
            </div>

            <div className="description">
              <h1>Description</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Diam cras mi mauris
                facilisis pharetra. Ipsum diam fames morbi. Laoreet nunc
                imperdiet pulvinar lacinia faucibus nibh dui.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* tab */}
      <div className="categories">
        <ul class="nav nav-pills" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" data-bs-toggle="pill" href="#home">
              Collections
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="pill" href="#menu1">
              Created
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="pill" href="#menu2">
              Favorites
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="pill" href="#about">
              About
            </a>
          </li>
        </ul>

        <div class="tab-content">
          <div id="home" class="container tab-pane active">
            <br />
            <Collections />
          </div>
          <div id="menu1" class="container tab-pane fade">
            <br />
            <Created />
          </div>
          <div id="menu2" class="container tab-pane fade">
            <br />
            <Favorite />
          </div>

          <div id="about" class="container tab-pane fade">
            <br />

            <About />
          </div>
        </div>
      </div>

      <ApplyNow />
    </>
  );
};

export default Profile;
