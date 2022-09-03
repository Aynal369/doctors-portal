import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./components/views/Home";
import About from "./components/views/About";
import Appointment from "./components/views/Appointment";
import Reviews from "./components/views/Reviews";
import ContactUs from "./components/views/ContactUs";
import Login from "./components/views/Login";
import Header from "./components/header/Header";
import AuthProvider from "./authentication/AuthProvider";
import RequireAuth from "./authentication/RequireAuth";
import Register from "./components/views/Register";
import ForgetPassword from "./components/views/ForgetPassword";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/appointment"
              element={
                <RequireAuth>
                  <Appointment />
                </RequireAuth>
              }
            />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
      <ToastContainer
        position="top-right"
        autoClose={6000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
