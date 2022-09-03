import React from "react";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const DateTimePickers = ({ date, setDate }) => {
  return (
    <section id="hero" className="pt-5">
      <div className="container">
        <div className="row g-3 mt-2 mt-md-5 justify-content-around">
          <div className="col-md-4 order-1 order-md-0 align-self-center">
            <div className="mb-5 mb-md-0">
              <DayPicker mode="single" selected={date} onSelect={setDate} />
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

export default DateTimePickers;
