import React from "react";

const fData = [
  {
    id: "01",
    title: "SERVICES",
    link1: "Emergency Checkup",
    link2: "Monthly Checkup",
    link3: "Weekly Checkup",
    link4: "Deep Checkup",
  },
  {
    id: "02",
    title: "ORAL HEALTH",
    link1: "Fluoride Treatment",
    link2: "Cavity Filling",
    link3: "Teath Whitening",
  },
  {
    id: "03",
    title: "OUR ADDRESS",
    link1: "New York - 101010 Hudson",
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          {fData.map((item) => (
            <div className="col-sm-6 col-lg-4 " key={item.id}>
              <div className="p-5">
                <h5 className="text-muted mb-3">{item.title}</h5>
                <div className="">
                  <ul className="list-unstyled">
                    <li>{item.link1}</li>
                    <li>{item.link2}</li>
                    <li>{item.link3}</li>
                    <li>{item.link4}</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center">
          Copyright {new Date().getFullYear()} All Rights Reserved{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
