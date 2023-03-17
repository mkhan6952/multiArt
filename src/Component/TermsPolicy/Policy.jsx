import React from "react";
import ApplyNow from "../FAQs/ApplyNow";
import "./Termsandpolicy.css";

const Policy = () => {
  return (
    <>
      <div className="policy-main">
        <div className="policy-upper">
          <h4>Privacy Policy</h4>
          <h6>We value your privacy</h6>
        </div>

        <div className="row  policy-bottom">
          <div className="col-lg-3 col-12 table-content">
            <h3>Table Of Content</h3>

            <div className="title">
              <h3>
                <span className="number">1.</span> INFORMATION COLLECTION
              </h3>

              <h3>
                <span className="number">2.</span> USE OF INFORMATION
              </h3>

              <h3>
                <span className="number">3.</span> INFORMATION SHARING AND
                DISCLOSURE
              </h3>

              <h3>
                <span className="number">4.</span> YOUR CHOICES AND RIGHTS
              </h3>

              <h3>
                <span className="number">5.</span> SECURITY
              </h3>

              <h3>
                <span className="number">6.</span> CROSS-BORDER DATA TRANSFERS
              </h3>

              <h3>
                <span className="number">7.</span> LINKS TO OTHER SITES
              </h3>

              <h3>
                <span className="number">8.</span> CHANGES TO THIS POLICY
              </h3>

              <h3>
                <span className="number">9.</span> CONTACT US
              </h3>

              <h3>
                <span className="number">10.</span> DATA PROCESSING AGREEMENT
              </h3>
            </div>
          </div>
          <div className="col-lg-6 col-12 privacy-summary">
            <h3 className="">
              The privacy policy will help you better understand how we <br />{" "}
              collect, use, and share your personal information.
            </h3>

            <h1>Privacy Summary</h1>

            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.”
              <br />
              <br /> Section 1.10.32 of “de Finibus Bonorum et Malorum”, written
              by Cicero in 45 BC <br />
              <br /> “Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
              magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
              porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non.
              <br />
              <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.”{" "}
              <br />
              <br /> Section 1.10.32 of “de Finibus Bonorum et Malorum”, written
              by Cicero in 45 BC <br />
              <br /> “Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
              magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
              porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non.
              <br />
              <br /> Tellus consectetur sed et cras nec gravida sit. Ut euismod
              egestas amet vel viverra lectus id id arcu. Ultrices in magna id
              tincidunt luctus amet. Porttitor pulvinar integer justo, eget
              amet, vitae aliquam aliquam. Mi tellus in nisi, augue nibh
              faucibus adipiscing vitae orci. Risus urna consequat in
              pellentesque nec imperdiet fringilla. Convallis faucibus egestas
              urna enim, urna vivamus et. In arcu vitae sed massa. Sed amet eu,
              neque non urna a amet id libero. Ut quisque sed pretium sodales in
              felis dictumst elit viverra. Sed in quisque risus orci quis urna.
              Enim ullamcorper orci amet arcu turpis.
            </p>
          </div>
          <div className="col-lg-3 col-12 legal-info">
            <h1>Legal Information</h1>

            <div className="mt-5">
              <div className="legal-info-conatiner">
                <img
                  className="img-fluid"
                  src="..\asset\termsandprivacy\legal-info-1.svg"
                  alt="pic"
                />
                <p>URBO Studio Software Terms & Conditions</p>
              </div>

              <div className="legal-info-conatiner">
                <img
                  className="img-fluid"
                  src="..\asset\termsandprivacy\legal-info-2.svg"
                  alt="pic"
                />
                <p>Cookies Policy</p>
              </div>

              <div className="legal-info-conatiner">
                <img
                  className="img-fluid"
                  src="..\asset\termsandprivacy\legal-info-1.svg"
                  alt="pic"
                />
                <p>URBO Studio Software Terms & Conditions</p>
              </div>

              <div className="legal-info-conatiner">
                <img
                  className="img-fluid"
                  src="..\asset\termsandprivacy\legal-info-2.svg"
                  alt="pic"
                />
                <p>Cookies Policy</p>
              </div>

              <div className="legal-info-conatiner">
                <img
                  className="img-fluid"
                  src="..\asset\termsandprivacy\legal-info-1.svg"
                  alt="pic"
                />
                <p>URBO Studio Software Terms & Conditions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ApplyNow />
    </>
  );
};

export default Policy;
