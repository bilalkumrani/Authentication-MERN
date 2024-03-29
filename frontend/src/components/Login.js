import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((state) => {
      return {
        ...state,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    axios.post("http://localhost:4000/login", loginData).then((data) => {
      localStorage.setItem("token", data.data.token);
      localStorage.setItem("user", JSON.stringify(data.data.user));
      navigate("/");
    });
  };
  return (
    <>
      <div class="container mt-5">
        <div class="row d-flex justify-content-center">
          <div class="col-md-6">
            <div class="card px-5 py-5" id="form1">
              <div class="form-data" v-if="!submitted">
                <div class="forms-inputs mb-4">
                  {" "}
                  <span>Email or username</span>
                  <input
                    autocomplete="off"
                    type="text"
                    name="email"
                    onChange={handleChange}
                  />
                  <div class="invalid-feedback">A valid email is required!</div>
                </div>
                <div class="forms-inputs mb-4">
                  {" "}
                  <span>Password</span>{" "}
                  <input
                    autocomplete="off"
                    type="password"
                    name="password"
                    onChange={handleChange}
                  />
                  <div class="invalid-feedback">
                    Password must be 8 character!
                  </div>
                </div>
                <div class="mb-3">
                  {" "}
                  <button onClick={handleSubmit} className="btn btn-dark w-100">
                    Login
                  </button>{" "}
                </div>
              </div>
              <div class="success-data" v-else>
                <div class="text-center d-flex flex-column">
                  <i class="bx bxs-badge-check" />{" "}
                  <span class="text-center fs-1">
                    You have been logged in <br /> Successfully
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
