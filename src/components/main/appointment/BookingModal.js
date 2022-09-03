import React from "react";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import useAuth from "../../../hook/useAuth";
import { toast } from "react-toastify";
import axios from "axios";

const BookingModal = ({ openBooking, handleBookingClose, item, date }) => {
  const { _id, slots, title } = item;
  const { users } = useAuth();
  let timeDate = format(date, "PP");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    const timeSlot = data.timeSlot;
    const fullName = data.fullName;
    const email = data.email;
    const phone = data.phone;
    const submitData = {
      treatmentId: _id,
      treatment: title,
      timeDate: format(date, "PP"),
      timeSlot,
      fullName,
      email,
      phone,
    };
    axios.post("http://localhost:5000/booking", submitData).then(
      (res) => {
        console.log(res.data);
        if (res.data.success) {
          toast.success(
            `Congratulation! Your appointment is booked in ${timeDate} at ${timeSlot}`
          );
          reset();
          handleBookingClose();
        } else {
          toast.warn(
            `Sorry! Already have and appointment on ${timeDate} at ${timeSlot}`
          );
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };
  return (
    <div>
      <Modal
        open={openBooking}
        onClose={handleBookingClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-6">
              <div className="card p-3">
                <div className="text-end">
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={handleBookingClose}
                  >
                    <CloseIcon color="error" />
                  </button>
                </div>
                <div className="text-center">
                  <p className="m-0 text-muted">
                    <small>Booking for:</small>
                  </p>
                  <h4 className="primaryText"> {title}</h4>
                  <p className="bg-light p-2 text-muted">
                    Today is: <span className="fw-bold">{timeDate}</span>
                  </p>
                </div>
                <div className="">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="row justify-content-center g-4"
                  >
                    <div className="col-sm-10">
                      <select
                        id="timeSlot"
                        name="timeSlot"
                        className="form-select"
                        {...register("timeSlot")}
                      >
                        {slots.map((slot, index) => (
                          <option value={slot} key={index}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        className="form-control"
                        {...register("fullName")}
                        placeholder="Your full name please"
                        value={users.displayName || ""}
                      />
                    </div>
                    <div className="col-sm-10">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        value={users.email || ""}
                        {...register("email", {
                          pattern: {
                            value: /\S+@\S+\.\S+/,
                            message:
                              "Entered value does not match email format",
                          },
                        })}
                        placeholder="Your email address please"
                      />
                    </div>
                    {errors.email && (
                      <span role="alert">{errors.email.message}</span>
                    )}
                    <div className="col-sm-10">
                      <input
                        type="number"
                        id="phone"
                        name="phone"
                        className="form-control"
                        {...register("phone")}
                        placeholder="Your phone number please"
                        required
                      />
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn grad">
                        SUBMIT
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default BookingModal;
