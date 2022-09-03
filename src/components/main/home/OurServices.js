import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";

const OSData = [
  {
    id: "01",
    image: fluoride,
    title: "Fluoride Treatment",
    shortDes:
      "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
  },
  {
    id: "02",
    image: cavity,
    title: "Cavity Filling",
    shortDes:
      "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
  },
  {
    id: "03",
    image: whitening,
    title: "Teeth Whitening",
    shortDes:
      "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
  },
];

const OurServices = () => {
  return (
    <section>
      <div className="container pb-5">
        <div className="row my-5">
          <div className="text-center">
            <h5 className="primaryText text-uppercase fw-bold">Our Services</h5>
            <h1 className="secondaryText">Services We Provide</h1>
          </div>
        </div>
        <div className="row g-4">
          {OSData.map((item) => (
            <div className="col-md-4" key={item.id}>
              <div className="shadow p-3 text-center rounded-4">
                <div className="mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid"
                  />
                </div>
                <div className="">
                  <h5 className="secondaryText">{item.title}</h5>
                  <p>{item.shortDes}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
