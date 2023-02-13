import React, { useEffect } from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { login } from "../redux/features/authSlice";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => ({ ...state.auth }));

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  let formik = useFormik({
    initialValues: {
      emailId: "",
      password: "",
    },
    validate: (values) => {
      let errors = {};
      if (values.emailId === "") {
        errors.emailId = "Please enter a email Id ";
      }
      if (values.password === "") {
        errors.password = "Password should not be empty";
      }
      return errors;
    },
    onSubmit: (values) => {
      if (values.emailId && values.password) {
        dispatch(login({ values, navigate, toast }));
      }
    },
  });
  return (
<section className="vh-100" style={{backgroundColor: "#9A616D"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card" style={{borderRadius: "1rem"}}>
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                alt="login form" className="img-fluid" style={{borderRadius: "1rem 0 0 1rem" }}/>
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">

                <form onSubmit={formik.handleSubmit}>

                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i className="fas fa-cubes fa-2x me-3" style={{color: "#ff6219"}}></i>
                    <span className="h1 fw-bold mb-0">LOGIN</span>
                  </div>

                  <div className="form-outline mb-4">
                  <label className="form-label" for="form2Example17">EMAIL ID</label>
                    <input type="email" 
                    id="form2Example17" 
                    className="form-control form-control-lg" 
                    name="emailId"
                    placeholder="Enter your Email" 
                    value={formik.values.emailId}
                    onChange={formik.handleChange}
                    required/>
                   </div>

                  <div className="form-outline mb-4">
                  <label className="form-label" for="form2Example27">PASSWORD</label>
                    <input type="password" id="form2Example27" className="form-control form-control-lg" 
                    name="password"
                    placeholder="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    required/>
                   </div>

                  <div className="pt-1 mb-4">
                    <button className="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                  </div>
                  <p className="mb-5 pb-lg-2" style={{color: "#393f81"}}>Don't have an account? <Link to="/signIn"
                      style={{color: "#393f81"}}>Register here</Link></p>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default Login;
