import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BookingService from "./BookingService";

const AvailableServices = ({ date }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const url = "http://localhost:5000/services";
    axios.get(url).then((res) => setServices(res.data));
  }, []);
  return (
    <section>
      <div className="container my-5">
        <div className="row">
          <div className="text-center">
            <h4 className="primaryText">
              Available Services on {format(date, "PP")}
            </h4>
            <h6 className="secondaryText">Please select a service</h6>
          </div>
        </div>
        <div className="row g-4 mt-5">
          {services.map((item, index) => (
            <BookingService item={item} date={date} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvailableServices;
