import React from "react";

const AboutDemo = () => {
  return (
    <>
      <div className="about-demo-main">
        <h1>Democratizing The Arts</h1>
        <p className="desc">
          MultiArt is building a global digital art network based on
          Ethereum&blockchain technology, which is open to all art forms, art
          creators, and art collectors around the world. On the premise of
          ensuring transparency, fairness, security, responsibility and privacy,
          MultiArt is providing functions and services such as online art
          curation, project distribution, NFT trading, art exchange, and work
          collection. <br />
          <br /> MultiArt will reduce the use cost of artists and collectors
          through technology, provide artists and creators with a comprehensive
          service platform, interact with art lovers and collectors, and capture
          the potential value of art works in an all-round way.
          <br />
          <br /> At the same time, MultiArt will be a place to introduce and tap
          high potential art works such as popular concepts and projects, and
          through high-quality resource cooperation, it will maximize the
          quality of art works and protect the rights and interests of artists
          and collectors.
          <br />
          <br /> <br />
          In the future, MultiArt hopes to play a positive role in the art
          industry in the following aspects.
        </p>

        <div className="row mt-5">
          <div className="col-lg-4 col-12">
            <img className="img-fluid" src="..\asset\AboutUs\1.png" alt="..." />
            <p className="card-desc">
              Promoting the <br /> democratization and <br />
              freedom of art
            </p>
          </div>
          <div className="col-lg-4 col-12">
            <img className="img-fluid" src="..\asset\AboutUs\2.png" alt="..." />
            <p className="card-desc">
              To enrich the diversity <br /> and representativeness <br />
              of art
            </p>
          </div>
          <div className="col-lg-4 col-12">
            <img className="img-fluid" src="..\asset\AboutUs\3.png" alt="..." />
            <p className="card-desc">
              Develop new artistic
              <br /> creation methods
              <br />
              and media
            </p>
          </div>
        </div>

        <p className="believe">
          We believe that art will have a more distinctive future <br /> because
          of blockchain and AI technology.
        </p>

        <hr />
      </div>

      <div className="row about-platform">
        <div className="col-lg-7 col-12 left">
          <h1>MultiArt Platform</h1>
          <p className="desc">
            MultiArt is an open art world. In addition to professional
            curatorial, social interest and in-depth content under the web3
            ecosystem, it will use a decentralized governance and economic
            system to determine the future product trend, curatorial methods and
            distribution options of the MultiArt platform.
            <br />
            <br /> Users can become members of the MultiArt DAO by purchasing
            art collections with NFT PASS attributes, gaining governance voting
            rights and sharing the platform's revenue. As the MultiArt platform
            becomes more sophisticated, the role of DAO governance will also
            grow.
            <br />
            <br /> MultiArt Factory will provide artists with art distribution
            solutions and offer various distribution options for artworks,
            including traditional and digital, algorithmic combination catego
            <br />
            <br /> ries, native digital works, and algorithmically generated
            categories. MultiArt Foundation will use its expertise to determine
            which artists have the most market momentum and will be acquired and
            included in MultiArt Collections at a reasonable price. These
            holdings will be the source of works for the platform's NFT PASS.
          </p>
        </div>
        <div className="col-lg-5 col-12 right">
          <img
            className="img-fluid"
            src="..\asset\AboutUs\Icon-DAO platform.png"
            alt=".."
          />
        </div>
      </div>
    </>
  );
};

export default AboutDemo;
