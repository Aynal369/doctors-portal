import React from "react";
import chair from "../../../assets/images/chair.png";

const Hero = () => {
  return (
    <section id="hero" className="pt-5">
      <div className="container">
        <div className="row g-3 mt-2 mt-md-5">
          <div className="col-md-6 order-1 order-md-0 align-self-center">
            <div className="mb-5 mb-md-0">
              <p className="fw-bold display-5 secondaryText">
                Your New Smile Starts Here
              </p>
              <p className="my-4 text-muted">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the
              </p>
              <button type="button" className="btn grad">
                GET STARTED
              </button>
            </div>
          </div>
          <div className="col-md-6 order-0 order-md-1">
            <div className="mb-5 mb-md-0">
              <img src={chair} alt="chair" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
