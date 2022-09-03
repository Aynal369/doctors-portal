import { Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../hook/useAuth";

const ForgetPassword = () => {
  const { handlePasswordResetEmail } = useAuth();

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const url = location.state?.from || "/login";

  const onSubmit = (data) => {
    const email = data.email;
    handlePasswordResetEmail(email);
    navigate(url);
    toast.warn(
      "Congratulation! please check your email inbox or spam folder and reset your password"
    );
  };
  return (
    <main>
      <div className="container-fluid bg-light min-vh-100">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row justify-content-center">
            <div className="col-sm-6 col-lg-4">
              <div className="card border-0 shadow p-2 p-md-4">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    {...register("email")}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="text-center">
                  <Button type="submit" variant="contained">
                    Password Reset
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default ForgetPassword;
