import React from "react";
import ExploreCollection from "./ExploreCollection";
import "./exploretabs.css";
import ExploreWork from "./ExploreWork";

const ExploreTabs = () => {
  return (
    <>
      {/* tab */}
      <div className="explore-tabs">
        <ul class="nav nav-pills" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" data-bs-toggle="pill" href="#home">
              Artwork
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="pill" href="#menu1">
              Collections
            </a>
          </li>
        </ul>

        <div class="tab-content">
          <div id="home" class=" tab-pane active">
            <br />
            <ExploreCollection />
          </div>
          <div id="menu1" class=" tab-pane fade">
            <br />

            <ExploreWork />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreTabs;
