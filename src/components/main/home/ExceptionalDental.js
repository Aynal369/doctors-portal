import React from "react";
import treatment from "../../../assets/images/treatment.png";

const ExceptionalDental = () => {
  return (
    <section>
      <div className="container pb-5">
        <div className="row g-4 my-5 justify-content-center">
          <div className="col-md-4">
            <div className="">
              <img src={treatment} alt="treatment" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6 align-self-center">
            <div className="">
              <h1 className="secondaryText">
                Exceptional Dental Care, on Your Terms
              </h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsumis that it has a more-or-less
                normal distribution of letters,as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page
              </p>
              <button type="button" className="btn grad">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExceptionalDental;
