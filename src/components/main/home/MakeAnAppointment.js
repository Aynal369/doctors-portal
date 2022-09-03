import React from "react";
import doctor from "../../../assets/images/doctor-small.png";

const MakeAnAppointment = () => {
  return (
    <section id="make_an_appointment" className="mb-5">
      <div className="container">
        <div className="row g-4 my-5 justify-content-center">
          <div className="col-md-4">
            <div className="d-none d-md-block">
              <img src={doctor} alt="treatment" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div className="">
              <h5 className="primaryText text-uppercase fw-bold">
                Appointment
              </h5>
              <h1 className="text-light my-4">Make an appointment Today</h1>
              <p className="text-light">
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

export default MakeAnAppointment;
