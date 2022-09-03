import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import useAuth from "../../hook/useAuth";

const Login = () => {
  const { signInWithGoogle, userLogin } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleAuth = () => {
    signInWithGoogle(navigate, location);
  };

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    userLogin(email, password, navigate, location);
  };
  return (
    <main>
      <div className="container my-5">
        <div className="row  justify-content-center">
          <div className="col-sm-5">
            <div className="shadow p-3">
              <h4 className="text-center text-muted mb-4">Login</h4>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="row g-4 justify-content-center"
              >
                <div className="col-sm-10">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    className="form-control"
                    {...register("email", {
                      required: "required",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format",
                      },
                    })}
                    type="email"
                  />
                </div>
                {errors.email && (
                  <span role="alert">{errors.email.message}</span>
                )}
                <div className="col-sm-10">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    className="form-control"
                    {...register("password", {
                      required: "required",
                      minLength: {
                        value: 5,
                        message: "min length is 5",
                      },
                    })}
                    type="password"
                  />
                </div>
                {errors.password && (
                  <span role="alert">{errors.password.message}</span>
                )}
                <div className="m-0">
                  <Link
                    to="/forget-password"
                    className="ms-5"
                    style={{ textDecoration: "none" }}
                  >
                    Forget password
                  </Link>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn grad">
                    SUBMIT
                  </button>
                </div>
              </form>
              <div className="text-center my-3">
                <p>
                  New to doctors portal?
                  <span className="ms-3">
                    <Link
                      to="/register"
                      className="primaryText"
                      style={{ textDecoration: "none" }}
                    >
                      Create new account
                    </Link>
                  </span>
                </p>
              </div>
              <Divider>
                <Chip label="OR" />
              </Divider>
              <div className="text-center my-3">
                <Button
                  variant="outlined"
                  color="inherit"
                  startIcon={<GoogleIcon />}
                  onClick={handleGoogleAuth}
                >
                  CONTINUE WITH GOOGLE
                </Button>
                {/* {console.log(user?.email)} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
