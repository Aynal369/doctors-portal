import React, { useState } from "react";
import BookingModal from "./BookingModal";

const BookingService = ({ item, date }) => {
  const { slots, title } = item;
  const [openBooking, setBookingOpen] = useState(false);
  const handleBookingOpen = () => setBookingOpen(true);
  const handleBookingClose = () => setBookingOpen(false);
  return (
    <div className="col-sm-6 col-lg-4">
      <div className="shadow text-center rounded-4 p-3">
        <div className="">
          <h4 className="primaryText">{title}</h4>
          <p>
            {slots.length ? (
              <span>{slots[0]}</span>
            ) : (
              <span className="text-danger">not available</span>
            )}
          </p>
          <p>
            {slots.length} {slots.length > 1 ? "spaces" : "space"} available
          </p>
        </div>
        <div className="mt-5">
          {slots.length === 0 ? (
            <button type="button" className="btn grad" disabled>
              <span
                className="spinner-grow spinner-grow-sm"
                role="status"
                aria-hidden="true"
              ></span>{" "}
              Try another day
            </button>
          ) : (
            <button
              type="button"
              className="btn grad"
              onClick={handleBookingOpen}
            >
              Book Appointment
            </button>
          )}
        </div>
      </div>
      <BookingModal
        item={item}
        date={date}
        openBooking={openBooking}
        handleBookingClose={handleBookingClose}
      />
    </div>
  );
};

export default BookingService;
