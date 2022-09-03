import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container py-5">
        <div className="row">
          <div className="text-center mt-5">
            <h5 className="primaryText text-uppercase fw-bold">Contact Us</h5>
            <h1 className="text-light">Stay connected with us</h1>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-5">
            <div className="form">
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email Address"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Your message"
                  rows="3"
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn grad">
                  GET STARTED
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
