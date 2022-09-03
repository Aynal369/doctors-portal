import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";

const boxData = [
  {
    id: "01",
    title: "Opening Hours",
    shortDes: "Lorem Ipsum is simply dummy text of the pri",
    icon: clock,
    bgColor: "leftRightBox",
  },
  {
    id: "02",
    title: "Visit our location",
    shortDes: "Brooklyn, NY 10036, United States",
    icon: marker,
    bgColor: "middleBox",
  },
  {
    id: "03",
    title: "Contact us now",
    shortDes: "+000 123 456789",
    icon: phone,
    bgColor: "leftRightBox",
  },
];

const FeatureBox = () => {
  return (
    <div className="container pb-5">
      <div className="row g-4">
        {boxData.map((item) => (
          <div className="col-md-4" key={item.id}>
            <div className={`border-0 p-3 rounded-3 h-100 ${item.bgColor}`}>
              <div className="row">
                <div className="col-sm-4 align-items-center">
                  <div className="text-center mb-5 mb-sm-0">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="text-light">
                    <h5>{item.title}</h5>
                    <p className="m-0">
                      <small>{item.shortDes}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureBox;
