import React from "react";
import { Icon } from "@iconify/react";

const About = () => {
  return (
    <div className="row about">
      <div className="col-lg-7 col-12 left">
        <h3 className="city-name">San Francesco </h3>
        <h5 className="membership">Member Science 2022</h5>

        <h2 className="artist">About Artist</h2>
        <p className="para">
          Lorem ipsum dolor sit amet consectetur. Risus nunc et nibh laoreet
          consectetur cursus. In sagittis eget ultricies ipsum volutpat amet
          aliquam morbi vulputate. Sit quis enim enim ipsum velit quis orci
          pellentesque. Pellentesque id amet commodo faucibus vitae. Sapien enim
          euismod tincidunt facilisi faucibus non augue vitae congue. Nunc
          tincidunt urna elementum dui phasellus aliquam. Consequat felis massa
          ipsum amet pellentesque sed. Amet malesuada porttitor massa
          sollicitudin lacus augue amet eros.
        </p>

        <h2 className="location">
          <Icon
            icon="heroicons-solid:location-marker"
            color="black"
            width="20"
          />
          <span>Location</span>
        </h2>
        <p className="address">
          Usa, San Francesco Main boulevard house# 189 Street 11 Vegas
          Apartments
        </p>
      </div>
      <div className="col-lg-5 col-12 right">
        <h2 className="social">Social Links</h2>
        <div className="social-icon">
          <Icon
            className="ico ico-one"
            icon="mdi:web"
            color="black"
            width="28"
          />
          <Icon
            className="ico"
            icon="entypo-social:instagram-with-circle"
            color="black"
            width="28"
          />
          <Icon
            className="ico"
            icon="entypo-social:facebook-with-circle"
            color="black"
            width="28"
          />
          <Icon
            className="ico"
            icon="entypo-social:instagram-with-circle"
            color="black"
            width="28"
          />
        </div>

        <h2 className="profile-ranking">Profile Ranking</h2>
        <h3 className="profile-stars">
          4 Star Level
          <Icon icon="material-symbols:stars" color="black" width="14" />
          <Icon icon="material-symbols:stars" color="black" width="14" />
          <Icon icon="material-symbols:stars" color="black" width="14" />
          <Icon icon="material-symbols:stars" color="black" width="14" />
        </h3>
      </div>
    </div>
  );
};

export default About;
