import React from "react";
import people1 from "../../../assets/images/people1.png";
import quote from "../../../assets/icons/quote.svg";

const tData = [
  {
    id: "01",
    image: people1,
    name: "Winson Herry",
    address: "California",
    shortDes:
      "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
  },
  {
    id: "02",
    image: people1,
    name: "Winson Herry",
    address: "California",
    shortDes:
      "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
  },
  {
    id: "03",
    image: people1,
    name: "Winson Herry",
    address: "California",
    shortDes:
      "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
  },
];

const Testimonial = () => {
  return (
    <section>
      <div className="container-fluid pb-5">
        <div className="row my-5">
          <div className="d-flex justify-content-between px-5">
            <div className="">
              <h5 className="primaryText text-uppercase fw-bold">
                Testimonial
              </h5>
              <h1 className="secondaryText">What Our Patients Says</h1>
            </div>
            <div className="">
              <img src={quote} alt="quote" width={200} className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="row g-4">
          {tData.map((item) => (
            <div className="col-md-6 col-lg-4" key={item.id}>
              <div className="shadow p-5 rounded-4">
                <p>{item.shortDes}</p>
                <div className="row g-3 mt-4">
                  <div className="col-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        outline: "3px solid #0ed2f7",
                        borderRadius: "100%",
                        padding: "2px",
                      }}
                    />
                  </div>
                  <div className="col align-self-center">
                    <div className="ms-4">
                      <h5>{item.name}</h5>
                      <p>{item.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
