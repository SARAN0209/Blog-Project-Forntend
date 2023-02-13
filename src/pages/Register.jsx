import React, { useEffect } from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { register } from "../redux/features/authSlice";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => ({ ...state.auth }));

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  let formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: (values) => {
      let errors = {};
      if (values.email === "") {
        errors.email = "Please enter a email Id ";
      }
      if (values.password === "") {
        errors.password = "Password should not be empty";
      }
      return errors;
    },
    onSubmit: (values) => {
      if (values.password !== values.confirmPassword) {
        return toast.error("Password should  match");
      }
      if (
        values.email &&
        values.password &&
        values.firstName &&
        values.lastName &&
        values.confirmPassword
      ) {
        dispatch(register({ values, navigate, toast }));
      }
    },
  });
  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px;" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">SIGNUP</p>

                    <form className="mx-1 mx-md-4" onSubmit={formik.handleSubmit}>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" for="form3Example1c">FIRST NAME</label>
                          <input
                            id="name"
                            className="form-control"
                            placeholder="Enter Name"
                            name='firstName'
                            value={formik.values.firstName}
                            type="text"
                            onChange={formik.handleChange}
                            required />
                        </div>

                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" for="form3Example1c">LAST NAME</label>
                          <input
                            id="name"
                            className="form-control"
                            placeholder="Enter Name"
                            name='lastName'
                            value={formik.values.lastName}
                            type="text"
                            onChange={formik.handleChange}
                            required />
                        </div>

                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" for="form3Example3c">EMAIL</label>
                          <input
                            id="email"
                            className="form-control"
                            placeholder="Enter Email"
                            name='email'
                            value={formik.values.email}
                            type="email"
                            onChange={formik.handleChange}
                            required />
                        </div>

                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" for="form3Example4c">PASSWORD</label>
                          <input
                            id="password"
                            className="form-control"
                            placeholder="Enter Password"
                            name='password'
                            value={formik.values.password}
                            type="password"
                            onChange={formik.handleChange} />
                        </div>

                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" for="form3Example4cd">CONFIRM PASSWORD</label>
                          <input
                            id="confirmpassword"
                            className="form-control"
                            placeholder="confirmpassword"
                            name='confirmPassword'
                            value={formik.values.confirmPassword}
                            type="password"
                            onChange={formik.handleChange}
                            required />
                        </div>

                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type='submit' value='REGISTER' className="btn btn-primary btn-lg">REGISTER</button>
                      </div>
                      <div>
                        Already Have account?
                        <span className="text-primary fs-6 mx-2" >
                          <Link to="/login" className="text-primary">
                            LOGIN
                          </Link>
                        </span>
                      </div>

                    </form>

                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                    <img src="https://thumbs.dreamstime.com/b/man-holds-light-bulb-palm-his-hand-vector-cartoon-illustration-business-idea-concept-162845009.jpg"
                      className="img-fluid" alt="Sample img" />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </section>
  );
};

export default Register;
