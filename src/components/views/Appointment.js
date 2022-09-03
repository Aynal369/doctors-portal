import React, { useState } from "react";
import DateTimePickers from "../main/appointment/DateTimePickers";
import Footer from "../footer/Footer";
import AvailableServices from "../main/appointment/AvailableServices";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <>
      <main>
        <DateTimePickers date={date} setDate={setDate} />
        <AvailableServices date={date} setDate={setDate} />
      </main>
      <Footer />
    </>
  );
};

export default Appointment;
